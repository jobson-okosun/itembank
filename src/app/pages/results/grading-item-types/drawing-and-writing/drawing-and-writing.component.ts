import { Component, ComponentRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewContainerRef } from '@angular/core';
import { KonvaToolsEvent } from './services/event.service';

import { DrawingAndWritingStore } from './services/store.service';
import Konva from 'konva';
import { Subscription, timer } from 'rxjs';
import { ContextMenuGradingForm, Store } from './model/store.model';
import { ParticipantSectionTranscript } from 'src/app/pages/items/models/result';
import { CustomContextMenuComponent } from './custom-context-menu/custom-context-menu.component';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionAnnotation, SummaryResult, Totals } from './model/question-annotation.mode';
import { SchemeMarkCategory, SchemePageData, SchemeQuestionSectionsTransformed, SchemeQuestionsTransformed, SchemeScoreBoundary } from 'src/app/pages/assessment/model/marking-guide-types';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-drawing-and-writing',
  templateUrl: './drawing-and-writing.component.html',
  styleUrls: ['./drawing-and-writing.component.scss']
})
export class DrawingAndWritingComponent implements OnChanges {
  @Input() currentQuestion: ParticipantSectionTranscript
  @Input() currentQuestionIndex: number
  @Input() showQuestionPanel: boolean = true
  @Input() currentQuestionMarkingGuide: SchemeQuestionsTransformed
  @Input() gradingSummary: SummaryResult
  @Input() pageSchemeData: SchemePageData
  @Input() currentQuestionAnnotations: QuestionAnnotation[]
  @Input() currentQuestionMarkingSectionChanges: any

  // emitted to setting grading for question item itself. 
  // it will be temporary place to store the formated annotation to be sent to backend for each question
  @Output() questionAnnotationChanges = new EventEmitter<{ annotation: QuestionAnnotation | ContextMenuGradingForm, action: string }>()
  currentPage: number = 0;
  private storeSubscription!: Subscription;
  private backgroundType: string = 'lINE'
  pages: number[] = []

  private contextMenuRef: ComponentRef<CustomContextMenuComponent> | null = null;
  private x: number
  private y: number
  private offsetX: number
  private offsetY: number
  currentPageGradingData: ContextMenuGradingForm[] = [] // grading form data for the current page. Only used for the context menu

  markTypeCategories = SchemeMarkCategory
  scoringTabs: any[] = Object.values(SchemeMarkCategory);
  activeScoringTab = 0;
  currentQuestionMarkingSection: SchemeQuestionSectionsTransformed
  currentSectionId: string
  currentQuestionGradingSummary: Totals
  markersScore: string = ''

  pageLoaded: boolean = false
  selectMeasurementTool$: Subscription
  removeMeasurementTool$: Subscription
  backgroundChange$: Subscription

  constructor(
    private drawingAndWritingStore: DrawingAndWritingStore,
    private drawingStore: DrawingAndWritingStore,
    private konvaEventTools: KonvaToolsEvent,
    private viewContainerRef: ViewContainerRef,
    private notifier: NotifierService
  ) { }

  ngOnInit() {
    this.pageLoaded = true
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentQuestion']) {
      this.questionChanges()
    }

    if (changes['gradingSummary']) {
      this.setCurrentQuestionGradingSummary()
    }

    if (changes['currentQuestionMarkingSectionChanges']) {
      this.updateCurrentQuestionMarkingSection()
    }
  }

  questionChanges() {
    this.konvaEventTools._questionChanged$.next(true)
    this.prepareCanvasAndStoreDataOnLoad()
  }

  getCurrentQuestion(): ParticipantSectionTranscript {
    return this.currentQuestion
  }

  prepareCanvasAndStoreDataOnLoad() {
    const getCurrentQuestion = this.getCurrentQuestion()

    if (!getCurrentQuestion) {
      return
    }

    this.backgroundType = getCurrentQuestion.item.backgroundType

    if (getCurrentQuestion.item_score.un_graded_response.length) {
      let jsonResponse: Store = JSON.parse(getCurrentQuestion.item_score.un_graded_response[0])

      jsonResponse.pages = jsonResponse.pages
        .map(page => {
          const baseAnnotations = this.currentQuestion.item_score.annotations
            .filter(ann => (ann.page + 1) == page.page)
            .map(ann => {
              const annotation = new ContextMenuGradingForm();
              const question = this.pageSchemeData.questions.find(q => q.item_id === ann.item_id);
              const section = question?.sections.find(s => s.id === ann.question_section_id);

              Object.assign(annotation, {
                position: ann.position.map(Number),
                form: new FormGroup({}),
                isOpen: false,
                versioned: ann.versioned,
                placeholderCode: ann.code + ann.score,
                placeholderType: ann.mark_category,
                sectionId: ann.question_section_id,
                sectionName: section?.name ?? '',
                uniqueId: ann.contextMenuUniqueId ?? Date.now().toString(),
                questionId: ann.item_id,
                page: ann.page,
                action: '',
                graded: ann.graded,
                scoreId: ann.score_id
              });

              return annotation;
            });

          return { ...page, grading: [...baseAnnotations] };
        });

      const storeData = { ...jsonResponse, shouldReset: false, currentPage: 0 }
      this.drawingStore.updateStore(storeData)
    }

    this.konvaEventTools.openQuestionPane$.subscribe(() => this.ToggleQuestionPane())
    this.storeSubscription = this.drawingAndWritingStore.store$.subscribe(storeState => this.onDrawingStoreChanges(storeState));

    timer(500).subscribe(() => {
      this.initializeCanvas(this.backgroundType)
    })
  }

  selectPage(pageIndex: number) {
    this.drawingAndWritingStore.selectPage(pageIndex)
    this.konvaEventTools._pageSelectEvent.next()
  }

  initializeCanvas(backgroundType: string) {
    const stageContainer = document.getElementById('stage')
    if (!stageContainer) {
      return
    }

    const width = stageContainer.parentElement.parentElement.offsetWidth;
    const height = 1000;
    let stage = new Konva.Stage({ container: 'stage', width, height, draggable: false });
    let gridLayer = new Konva.Layer();
    let plottedLayer = new Konva.Layer();
    let drawingLayer = new Konva.Layer();
    let uiLayer = new Konva.Layer();
    let oldLayer = new Konva.Layer();
    let toolLayer = new Konva.Layer();
    stage.add(gridLayer, plottedLayer, drawingLayer, uiLayer, oldLayer, toolLayer);

    let ruler: Konva.Group | null = null;
    let protractor: Konva.Group | null = null;
    let rulerTransformer: Konva.Transformer | null
    let protractorTransformer: Konva.Transformer | null

    const destroyCanvas = () => {
      if (stage) {
        stage.destroy();
        stage = null;
      }
    }

    // helpers to draw grid
    function drawGrid(gridSize = 50) {
      gridLayer.destroyChildren();
      const w = stage?.width();
      const h = stage?.height();
      for (let x = 0; x <= w; x += gridSize) {
        gridLayer.add(new Konva.Line({ points: [x, 0, x, h], stroke: '#e6e7e9', strokeWidth: 1, listening: false }));
      }
      for (let y = 0; y <= h; y += gridSize) {
        gridLayer.add(new Konva.Line({ points: [0, y, w, y], stroke: '#e6e7e9', strokeWidth: 1, listening: false }));
      }

      gridLayer.cache();
      gridLayer.batchDraw();
    }

    function drawLineBackground(lineSpacing = 50) {
      gridLayer.destroyChildren();

      const w = stage?.width();
      const h = stage?.height();

      for (let y = 0; y <= h; y += lineSpacing) {
        gridLayer.add(new Konva.Line({
          points: [0, y, w, y],
          stroke: '#e6e7e9',
          strokeWidth: 1,
          listening: false
        }));
      }

      gridLayer.cache();
      gridLayer.batchDraw();
    }

    function drawPlottedGrid(gridSize = 50) {
      plottedLayer.destroyChildren();

      const w = stage?.width();
      const h = stage?.height();
      for (let x = 0; x <= w; x += gridSize) {
        for (let y = 0; y <= h; y += gridSize) {
          plottedLayer.add(new Konva.Circle({ x, y, radius: 2, fill: '#9ca3af', listening: false }));
        }
      }

      plottedLayer.cache();
      plottedLayer.batchDraw();
    }

    const setBackgroundType = () => {
      clearBackground()

      if (this.backgroundType == 'LINE') {
        drawLineBackground();
        return
      }

      if (this.backgroundType == 'GRID') {
        drawGrid();
        drawPlottedGrid();
        return
      }

    }

    function clearBackground() {
      plottedLayer.visible(false);
      gridLayer.destroyChildren();
      gridLayer.batchDraw();
    }

    function deltaDecode(deltas: number[]): number[] {
      if (!deltas || deltas.length < 2) return [];

      const points = [deltas[0], deltas[1]];

      for (let i = 2; i < deltas.length; i += 2) {
        const x = points[points.length - 2] + deltas[i];
        const y = points[points.length - 1] + deltas[i + 1];
        points.push(x, y);
      }

      return points;
    }

    setBackgroundType()

    const parent = document.getElementById('stage-parent');
    parent.style.width = width + 'px';

    const resizeStage = () => {
      parent.style.width = stageContainer.parentElement.parentElement.offsetWidth + 'px';
      const newWidth = stageContainer.offsetWidth;
      const newHeight = 1000;
      stage?.width(newWidth);
      stage?.height(newHeight);

      setBackgroundType();
      loadCurrentPageStrokes()
    }

    window.addEventListener('resize', resizeStage);

    const redrawStrokes = () => {
      drawingLayer.destroyChildren();

      const currentPageData = this.drawingStore.getCurrentPageData();
      if (!currentPageData || !currentPageData.strokes) return;

      const strokeGroup = new Konva.Group({
        listening: false,
        perfectDrawEnabled: false,
      });

      // Decode all strokes before drawing
      const decodedStrokes = currentPageData.strokes.map(stroke => ({
        ...stroke,
        points: deltaDecode(stroke.points)
      }));

      decodedStrokes.forEach(stroke => {
        const line = new Konva.Line({
          points: stroke.points,
          stroke: stroke.mode === 'eraser' ? '#000' : (stroke.color || '#111827'),
          strokeWidth: stroke.size,
          globalCompositeOperation: stroke.mode === 'eraser'
            ? 'destination-out'
            : 'source-over',
          lineCap: 'round',
          lineJoin: 'round',
          listening: false,
          perfectDrawEnabled: false,
        });
        strokeGroup.add(line);
      });


      drawingLayer.add(strokeGroup);
      drawingLayer.batchDraw();

      requestAnimationFrame(() => {
        if (!currentPageData?.strokes?.length) {
          return
        }

        strokeGroup?.cache({ pixelRatio: 1 });
        drawingLayer?.batchDraw();
      });
    };

    const loadCurrentPageStrokes = () => {
      redrawStrokes();
    }

    loadCurrentPageStrokes()

    const scrollContainers = () => {
      try {
        document.getElementById('question-container')?.scrollTo({ top: 0, behavior: 'smooth' });
        document.getElementById('stage-parent')?.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (e) { }
    }

    function createRuler(x: number, y: number) {
      const DPI = getDPI();
      const PIXELS_PER_CM = DPI / 2.54;
      const RULER_CM = 20;
      const RULER_HEIGHT = 50;
      const RULER_LENGTH_PX = RULER_CM * PIXELS_PER_CM;

      const group = new Konva.Group({ x, y, draggable: true });

      const body = new Konva.Rect({
        width: RULER_LENGTH_PX,
        height: RULER_HEIGHT,
        fillLinearGradientStartPoint: { x: 0, y: 0 },
        fillLinearGradientEndPoint: { x: 0, y: RULER_HEIGHT },
        fillLinearGradientColorStops: [0, "#fdfdfd", 1, "#e6e6e6"],
        stroke: "#888",
        cornerRadius: 3,
        shadowColor: "black",
        shadowBlur: 2,
        shadowOpacity: 0.2,
      });
      group.add(body);

      const mmTotal = RULER_CM * 10;
      for (let mm = 0; mm <= mmTotal; mm++) {
        const xPos = (mm / 10) * PIXELS_PER_CM;
        let tickHeight, color = "#333", width = 1;

        if (mm % 10 === 0) {
          tickHeight = 20;
          width = 1.2;
        } else if (mm % 5 === 0) {
          tickHeight = 14;
        } else {
          tickHeight = 8;
          color = "#666";
        }

        const tick = new Konva.Line({
          points: [xPos, RULER_HEIGHT, xPos, RULER_HEIGHT - tickHeight],
          stroke: color,
          strokeWidth: width,
        });
        group.add(tick);

        if (mm % 10 === 0) {
          const label = new Konva.Text({
            x: xPos - 4,
            y: RULER_HEIGHT - 28,
            text: mm === 0 ? "" : (mm / 10).toString(),
            fontSize: 12,
            fill: "#111",
            fontFamily: "monospace",
          });
          group.add(label);
        }
      }

      rulerTransformer = new Konva.Transformer({
        nodes: [group],
        rotateEnabled: true,
        rotationHandleOffset: 60,
        rotationHandleSize: 30,
        rotationHandleStroke: "#1976d2",
        rotationHandleFill: "#1976d2",
        enabledAnchors: ["middle-left", "middle-right"],
        borderStroke: "#1976d2",
        borderStrokeWidth: 2,
        anchorCornerRadius: 6,
      });
      toolLayer.add(rulerTransformer);
      toolLayer.add(group);

      // Selection logic
      stage.on("click tap", (e) => {
        if (e.target === stage) rulerTransformer.nodes([]);
        else if (e.target.getParent() === group) rulerTransformer.nodes([group]);
        toolLayer.batchDraw();
      });

      group.on("dragmove transform", () => {
        rulerTransformer.moveToTop();
        toolLayer.batchDraw();
      });

      toolLayer.batchDraw();
      return group;
    }

    function getDPI(): number {
      const div = document.createElement("div");
      div.style.width = "1in";
      div.style.height = "1in";
      div.style.position = "absolute";
      div.style.top = "-100%";
      document.body.appendChild(div);
      const dpi = div.offsetWidth;
      document.body.removeChild(div);
      return dpi;
    }

    function createProtractor(x, y) {
      const DPI = getDPI();
      const PIXELS_PER_CM = DPI / 2.54;
      const radius = 8 * PIXELS_PER_CM; // 8cm radius for larger size
      const group = new Konva.Group({ x, y, draggable: true });
      // Base semicircle with gradient
      const arc = new Konva.Arc({
        x: 0,
        y: 0,
        innerRadius: 0,
        outerRadius: radius,
        angle: 180,
        fillLinearGradientStartPoint: { x: -radius, y: 0 },
        fillLinearGradientEndPoint: { x: radius, y: 0 },
        fillLinearGradientColorStops: [
          0,
          "#fdfdfd",
          0.5,
          "#f0f0f0",
          1,
          "#e6e6e6",
        ],
        stroke: "#888",
        strokeWidth: 2,
        shadowColor: "black",
        shadowBlur: 3,
        shadowOpacity: 0.2,
      });
      group.add(arc);
      // Add degree marks every 1 degree
      for (let angle = 0; angle <= 180; angle += 1) {
        const radians = (angle * Math.PI) / 180;
        let startRadius,
          tickWidth = 0.5,
          color = "#999";
        if (angle % 30 === 0) {
          // Major marks every 30 degrees
          startRadius = radius - 40;
          tickWidth = 2;
          color = "#333";
        } else if (angle % 10 === 0) {
          // Medium marks every 10 degrees
          startRadius = radius - 30;
          tickWidth = 1.5;
          color = "#444";
        } else if (angle % 5 === 0) {
          // Small marks every 5 degrees
          startRadius = radius - 20;
          tickWidth = 1;
          color = "#666";
        } else {
          // Tiny marks for every degree
          startRadius = radius - 12;
          tickWidth = 0.5;
          color = "#999";
        }
        const endRadius = radius - 3;
        const x1 = startRadius * Math.cos(radians);
        const y1 = -startRadius * Math.sin(radians);
        const x2 = endRadius * Math.cos(radians);
        const y2 = -endRadius * Math.sin(radians);
        const tick = new Konva.Line({
          points: [x1, y1, x2, y2],
          stroke: color,
          strokeWidth: tickWidth,
        });
        group.add(tick);
        // Add numbers for major angles (every 30 degrees)
        if (angle % 30 === 0) {
          const textRadius = radius - 55;
          const textX = textRadius * Math.cos(radians);
          const textY = -textRadius * Math.sin(radians);
          const text = new Konva.Text({
            x: textX - 8,
            y: textY - 8,
            text: angle.toString(),
            fontSize: 16,
            fontFamily: "monospace",
            fill: "#111",
            fontStyle: "bold",
          });
          group.add(text);
        }
        // Add smaller numbers for 10-degree marks (excluding 30-degree marks)
        else if (angle % 10 === 0 && angle % 30 !== 0) {
          const textRadius = radius - 45;
          const textX = textRadius * Math.cos(radians);
          const textY = -textRadius * Math.sin(radians);
          const text = new Konva.Text({
            x: textX - 6,
            y: textY - 6,
            text: angle.toString(),
            fontSize: 12,
            fontFamily: "monospace",
            fill: "#333",
          });
          group.add(text);
        }
      }
      // Add center point
      const centerDot = new Konva.Circle({
        x: 0,
        y: 0,
        radius: 6,
        fill: "#333",
        stroke: "#fff",
        strokeWidth: 2,
      });
      group.add(centerDot);
      // Add baseline
      const baseline = new Konva.Line({
        points: [-radius, 0, radius, 0],
        stroke: "#333",
        strokeWidth: 3,
      });
      group.add(baseline);
      // Add small notch at 0 and 180 degrees
      const leftNotch = new Konva.Rect({
        x: -radius - 3,
        y: -4,
        width: 6,
        height: 8,
        fill: "#333",
      });
      const rightNotch = new Konva.Rect({
        x: radius - 3,
        y: -4,
        width: 6,
        height: 8,
        fill: "#333",
      });
      group.add(leftNotch, rightNotch);
      group.cache();

      protractorTransformer = new Konva.Transformer({
        nodes: [group],
        rotateEnabled: true,
        rotationHandleOffset: 60,
        rotationHandleSize: 30,
        rotationHandleStroke: "#1976d2",
        rotationHandleFill: "#1976d2",
        enabledAnchors: ["middle-left", "middle-right"],
        borderStroke: "#1976d2",
        borderStrokeWidth: 2,
        anchorCornerRadius: 6,
      });
      toolLayer.add(protractorTransformer);
      toolLayer.add(group);

      stage.on("click tap", (e) => {
        if (e.target === stage) protractorTransformer.nodes([]);
        else if (e.target.getParent() === group) protractorTransformer.nodes([group]);
        toolLayer.batchDraw();
      });

      group.on("dragmove transform", () => {
        protractorTransformer.moveToTop();
        toolLayer.batchDraw();
      });

      return group;
    }

    this.selectMeasurementTool$?.unsubscribe()
    this.selectMeasurementTool$ = this.konvaEventTools._selectMeasurementTool$.subscribe({
      next: (tool) => {

        if (tool === 'ruler' && !ruler) {
          ruler = createRuler(100, 100);
          toolLayer.add(ruler);
        }

        if (tool === 'protractor' && !protractor) {
          protractor = createProtractor(400, 350);
          toolLayer.add(protractor);
        }

        toolLayer.batchDraw();
      },
    });

    this.removeMeasurementTool$?.unsubscribe()
    this.removeMeasurementTool$ = this.konvaEventTools._removeMeasurementTool$.subscribe({
      next: (tool) => {

        if (tool == 'all') {
          ruler?.destroy()
          ruler = null
          protractor?.destroy()
          protractor = null
          toolLayer.destroyChildren()
        }

        if (tool === 'ruler') {
          ruler.destroy()
          ruler = null
          toolLayer.getChildren((item) => item == ruler)?.[0]?.destroy()
          toolLayer.getChildren((item) => item == rulerTransformer)?.[0]?.destroy()
        }

        if (tool === 'protractor') {
          protractor.destroy()
          protractor = null
          toolLayer.getChildren((item) => item == protractor)?.[0]?.destroy()
          toolLayer.getChildren((item) => item == protractorTransformer)?.[0]?.destroy()
        }

        toolLayer.batchDraw();
      },
    });

    this.konvaEventTools._pageSelectEvent.subscribe({
      next: () => {
        loadCurrentPageStrokes()
        scrollContainers()
      }
    })

    this.konvaEventTools._questionChanged$.subscribe({
      next: () => {
        this.drawingStore.clearStoreData()
        destroyCanvas()
        scrollContainers()
      }
    })

    this.konvaEventTools._resizeCanvas$.subscribe({
      next: () => {
        timer(1000).subscribe({
          next: () => {
            resizeStage()
          }
        })
      }
    })

    this.konvaEventTools.backgroundChange$.subscribe({
      next: (type) => {
        if (!this.pageLoaded) {
          return
        }

        if (!type) {
          return
        }

        this.backgroundType = type
        setBackgroundType()
      }
    })
  }

  private onDrawingStoreChanges(storeState: Store) {
    this.currentPage = storeState.currentPage;
    this.currentPageGradingData = storeState.pages[storeState.currentPage]?.grading
    this.pages = Array.from({ length: storeState.pages.length }, (_, i) => i)
  }

  setCurrentQuestionGradingSummary() {
    this.currentQuestionGradingSummary = null
    const currentQuestionGrading = this.gradingSummary?.perQuestion[this.currentQuestion.item.id]
    this.currentQuestionGradingSummary = currentQuestionGrading
  }

  async createScoreVersion(formItemIndex: number) {
    const annotation = this.currentPageGradingData[formItemIndex]
    if (annotation.graded) {
      return
    }

    this.questionAnnotationChanges.emit({ annotation, action: 'delete' })
    await this.drawingStore.updateGradingFormContextMenuItemVersion(formItemIndex)
  }

  // score recieves either section score - SchemeQuestionSectionScoreScoreDB | general score - GeneralScoreDTO
  async selectGradingScore(
    item: ContextMenuGradingForm,
    score: any,
    markTypeCatory: SchemeMarkCategory.SCORE | SchemeMarkCategory.PENALTY | SchemeMarkCategory.VIOLATION,
    zeroScore: boolean = false,
    markersScore: number = 0
  ) {
    if (!markTypeCatory || !this.scoringTabs.includes(markTypeCatory)) {
      this.notifier.notify('error', 'Invalid Scoring type selected')
      return
    }

    // Use zero score if true: otherwise check for markers discretion
    const scoreValue = zeroScore ? 0 : (score.marker_discretion ? markersScore : score.max_score)
    const formItemIndex = this.currentPageGradingData.indexOf(item)

    const annotation = new QuestionAnnotation()
    annotation.page = this.currentPage
    annotation.code = score.code
    annotation.score = scoreValue
    annotation.mark_type_id = score.mark_type_id
    annotation.mark_category = markTypeCatory
    annotation.name = score.name
    annotation.position = [item.position[0].toString(), item.position[1].toString()]
    annotation.boundary = score.boundary
    annotation.question_section_id = score?.question_section_id ?? this.currentSectionId
    annotation.item_id = this.currentQuestion.item.id
    annotation.score_id = score.id

    // Add identifies to map to the context menu
    annotation.contextMenuScoreId = score.id
    annotation.contextMenuSectionId = item.sectionId;
    annotation.contextMenuUniqueId = item.uniqueId;
    annotation.contextMenuQuestionId = item.questionId
    annotation.contextMenuPage = item.page;
    annotation.versioned = item.versioned
    annotation.contextMenuFormIndex = formItemIndex

    await this.drawingStore.updateGradingFormContextMenuItemPlaceholder(formItemIndex,
      {
        placeholderCode: score?.code ? (score.code.toString() + scoreValue.toString()) : ' ',
        placeholderType: markTypeCatory,
        scoreId: score.id
      }
    )

    this.questionAnnotationChanges.emit({ annotation, action: 'score' })
    this.markersScore = ''
    this.collapseGradingFormContextMenuItem(formItemIndex)
  }

  updateCurrentQuestionMarkingSection() {
    const changes = this.currentQuestionMarkingSectionChanges;

    if (!changes || !changes.score) return;

    const { score, applied } = changes;
    let { boundary, mark_category, id } = score;
    id = id ?? changes.score.score_id

    const categoryMap = {
      [SchemeMarkCategory.SCORE]: {
        GENERAL: this.pageSchemeData.general_scores_correct,
        SECTION: this.currentQuestionMarkingSection.scores_correct,
      },
      [SchemeMarkCategory.PENALTY]: {
        GENERAL: this.pageSchemeData.general_scores_penalty,
        SECTION: this.currentQuestionMarkingSection.scores_penalty,
      },
      [SchemeMarkCategory.VIOLATION]: {
        GENERAL: this.pageSchemeData.general_scores_violation,
        SECTION: this.currentQuestionMarkingSection.scores_violation,
      },
    };

    const sourceList = boundary === SchemeScoreBoundary.GENERAL
      ? categoryMap[mark_category]?.GENERAL
      : categoryMap[mark_category]?.SECTION;

    if (!sourceList) return;
    const scoreIndex = sourceList.findIndex(item => item.id === id);
    if (scoreIndex === -1) return;

    sourceList[scoreIndex].appliedNo = applied;
  }


  onCanvasClick(event: MouseEvent) {
    // Atleast one score menu is open
    if (document.querySelector('.rounded.card.score-cards')) {
      event.preventDefault()
      event.stopPropagation()
      return
    }

    // Context menu form elements interacted with
    if (['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'I'].includes((event.target as HTMLElement).tagName)) {
      return;
    }

    // if score context menu placeholder was clicked
    const target = event.target as HTMLElement
    if (target.classList.contains('score-placeholder') || target.parentElement.classList.contains('score-placeholder')) {
      return
    }

    const sections = this.currentQuestionMarkingGuide?.sections
    if (!sections?.length) {
      return
    }

    event.preventDefault();
    this.collapseGradingFormContextMenuItems()
    this.viewContainerRef.clear();

    this.x = event.clientX;
    this.y = event.clientY;
    this.offsetX = event.offsetX; // X coordinate relative to the child element
    this.offsetY = event.offsetY; // Y coordinate relative to the child element

    // Create component instance
    this.contextMenuRef = this.viewContainerRef.createComponent(CustomContextMenuComponent);
    this.contextMenuRef.instance.x = this.x;
    this.contextMenuRef.instance.y = this.y;
    this.contextMenuRef.instance.sections = sections

    // Subscribe to the menuItemClicked event
    this.contextMenuRef.instance.menuClicked.subscribe(
      (data) => {
        const selectedSection = this.currentQuestionMarkingGuide.sections.find(item => item.id == data.sectionId)
        this.currentQuestionMarkingSection = selectedSection
        this.currentSectionId = data.sectionId

        if (selectedSection) {
          const position = [this.offsetX, this.offsetY]

          const form = new FormGroup({
            comment: new FormControl(''),
            grade: new FormControl('')
          })

          const entry = {
            position,
            form,
            isOpen: true,
            versioned: false,
            sectionId: selectedSection.id,
            sectionName: selectedSection.name,
            uniqueId: Date.now().toString(),
            questionId: this.currentQuestion.item.id,
            page: this.currentPage,
            graded: false,
            scoreId: ''
          }

          this.drawingStore.addradingFormToCurrentPageContextMenu(entry)
        }

        this.closeContextMenu();
      }
    );

    setTimeout(() => window.addEventListener('click', this.closeContextMenuHandler), 0);
  }

  private closeContextMenuHandler = (event: Event) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    const clickedInsideCanvas = !!target.closest('#canvas') || !!target.closest('.child');
    const clickedInsideMenu = !!target.closest('.custom-context-menu') || !!target.closest('[data-inside-canvas]');
    const clickedInsideForm = !!target.closest('form');

    if (!clickedInsideCanvas && !clickedInsideMenu && !clickedInsideForm) {
      this.closeContextMenu();
    }
  };

  private closeContextMenu() {
    if (this.contextMenuRef) {
      this.viewContainerRef.clear();
      this.contextMenuRef = null;
      window.removeEventListener('click', this.closeContextMenuHandler);
    }
  }

  async expandGradingFormContextMenuItem(formItemIndex: number, contextMenuFormItem: ContextMenuGradingForm) {
    if (contextMenuFormItem.versioned) {
      return
    }

    if (contextMenuFormItem.graded) {
      return
    }

    const selectedSection = this.currentQuestionMarkingGuide.sections.find(item => item.id == contextMenuFormItem.sectionId)
    this.currentQuestionMarkingSection = selectedSection

    this.collapseGradingFormContextMenuItems()
    await this.drawingStore.expandGradingFormContextMenuItem(formItemIndex)

    // open cateory tab on the context menu
    const category = this.currentPageGradingData[formItemIndex]?.placeholderType
    if (!category) {
      return
    }

    const tabIndex = (this.scoringTabs as any[]).indexOf(category)
    this.activeScoringTab = tabIndex
  }

  collapseGradingFormContextMenuItems() {
    this.drawingStore.collapseGradingFormContextMenuItems()
    this.activeScoringTab = 0;
  }

  async collapseGradingFormContextMenuItem(formItemIndex: number) {
    await this.drawingStore.collapseGradingFormContextMenuItem(formItemIndex)
    this.activeScoringTab = 0;
  }

  async onDragEnd(position: { x: number; y: number }, formItemIndex: number) {
    await this.drawingStore.updateGradingFormContextMenuItemPosition([position.x, position.y], formItemIndex)
    const annotation = this.currentPageGradingData[formItemIndex]

    this.questionAnnotationChanges.emit({ annotation, action: 'position' })
  }

  ToggleQuestionPane() {
    timer(1000).subscribe(() => {
      this.konvaEventTools._resizeCanvas$.next(true)
    })
  }

}
