import { AfterViewInit, Component, ComponentRef, EventEmitter, Input, NgZone, OnChanges, OnInit, Output, SimpleChanges, ViewContainerRef} from '@angular/core';
import { KonvaToolsEvent } from './services/event.service';

// Extend the Window interface to include contextMenuId
declare global {
  interface Window {
    contextMenuId?: {
      uniqueId: string,
      formItemIndex: number
    }
  }
}
import { DrawingAndWritingStore } from './services/store.service';
import Konva from 'konva';
import { Subscription, timer } from 'rxjs';
import { ContextMenuGradingForm, Store, Strokes } from './model/store.model';
import { Annotation, ParticipantSectionTranscript } from 'src/app/pages/items/models/result';
import { CustomContextMenuComponent } from './custom-context-menu/custom-context-menu.component';
import {  FormControl, FormGroup } from '@angular/forms';
import { QuestionAnnotation, SummaryResult, Totals } from './model/question-annotation.mode';
import { SchemeMarkCategory, SchemePageData, SchemeQuestionSectionsTransformed, SchemeQuestionsTransformed, SchemeScoreBoundary } from 'src/app/pages/assessment/model/marking-guide-types';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-drawing-and-writing',
  templateUrl: './drawing-and-writing.component.html',
  styleUrls: ['./drawing-and-writing.component.scss']
})
export class DrawingAndWritingComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() currentQuestion: ParticipantSectionTranscript 
  @Input() currentQuestionIndex: number
  @Input() showQuestionPanel: boolean =  true
  @Input() currentQuestionMarkingGuide: SchemeQuestionsTransformed
  @Input() gradingSummary: SummaryResult
  @Input() pageSchemeData: SchemePageData 
  @Input() currentQuestionAnnotations: QuestionAnnotation[]
  @Input() currentQuestionMarkingSectionChanges:any

  // emitted to setting grading for question item itself. 
  // it will be temporary place to store the formated annotation to be sent to backend for each question
  @Output() questionAnnotationChanges = new EventEmitter<{annotation: QuestionAnnotation | ContextMenuGradingForm, action: string}>() 

  containerSize = 1000;
  canvasSize = 1000
  backgroundType: string
  
  pages: number[] = [];
  currentPage: number = 0;

  public stage!: Konva.Stage;
  private layer!: Konva.Layer;
  private gridLayer!: Konva.Layer;
  private image!: Konva.Image;
  private context!: CanvasRenderingContext2D;

  private currentDrawingStrokes: Strokes[] = [];

  private brushColor = '#000000';
  private brushSize = 1.5;
  private eraserSize = 30;

  private gridCellSize = 50;
  private gridStroke = '#6063a1';
  private gridStrokeWidth = 0.5;
  private _gridType: string = 'NONE';

  private SCROLLBAR_PADDING = 1;
  private scrollLayers!: Konva.Layer;
  private verticalScrollBar!: Konva.Rect;
  private _contentScrollHeight: number;
  private _contentScrollWidth: number;
  private storeSubscription!: Subscription;
  private eraserPointerShape!: Konva.Circle;
  @Input() isItemTypeDrawingAndWriting: boolean = false

  private contextMenuRef: ComponentRef<CustomContextMenuComponent> | null = null;
  private x: number
  private y: number
  private offsetX: number
  private offsetY: number
  currentPageGradingData:ContextMenuGradingForm[] = [] // grading form data for the current page. Only used for the context menu

  markTypeCategories = SchemeMarkCategory
  scoringTabs:any[] = Object.values(SchemeMarkCategory);
  activeScoringTab = 0;
  currentQuestionMarkingSection: SchemeQuestionSectionsTransformed
  currentSectionId: string
  currentQuestionGradingSummary: Totals
  markersScore: string = ''

  constructor(
    private drawingAndWritingStore: DrawingAndWritingStore,
    private ngZone: NgZone,
    private drawingStore: DrawingAndWritingStore,
    private konvaEventTools: KonvaToolsEvent,
    private viewContainerRef: ViewContainerRef,
    private notifier: NotifierService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['currentQuestion']) {
         this.drawingAndWritingStore.clearStoreData()
         this.destroy()
         this.ngOnInit()
         this.ngAfterViewInit()        
         this.setCurrentQuestionGradingSummary()
      }

      if(changes['gradingSummary']) {
        this.setCurrentQuestionGradingSummary()
      }

      if(changes['currentQuestionMarkingSectionChanges']) {
        this.updateCurrentQuestionMarkingSection()
      }
  }

  ngOnInit(): void {
    let response = this.currentQuestion.item_score.un_graded_response[0]
    if(!response) {
      return 
    }

    let ungradedResponse: Store = JSON.parse(response)

    ungradedResponse.pages = ungradedResponse.pages
    .map(page => {
      const baseAnnotations = this.currentQuestion.item_score.annotations
      .filter( ann => (ann.page + 1) == page.page)
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
      
      return {...page, grading: [...baseAnnotations]};
    });

    this.drawingAndWritingStore.updateStore({...ungradedResponse, currentPage: 0, shouldReset: false})
    this.selectPage(0)

    this.storeSubscription = this.drawingAndWritingStore.store$.subscribe(storeState => {
      this.onDrawingStoreChanges(storeState)
    });

    this.konvaEventTools.openQuestionPane$.subscribe(() => this.ToggleQuestionPane()) 
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
    if(annotation.graded) {
      return
    }

    this.questionAnnotationChanges.emit({annotation, action: 'delete'})
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
    if(!markTypeCatory || !this.scoringTabs.includes(markTypeCatory)) {
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

    this.questionAnnotationChanges.emit({annotation, action: 'score'})
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
    if(document.querySelector('.rounded.card.score-cards')) {
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
    if(target.classList.contains('score-placeholder') || target.parentElement.classList.contains('score-placeholder')) {
      return
    }

    const sections = this.currentQuestionMarkingGuide?.sections
    if(!sections?.length) {
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
    this.contextMenuRef  = this.viewContainerRef.createComponent(CustomContextMenuComponent);
    this.contextMenuRef.instance.x = this.x;
    this.contextMenuRef.instance.y = this.y;
    this.contextMenuRef.instance.sections = sections

    // Subscribe to the menuItemClicked event
    this.contextMenuRef.instance.menuClicked.subscribe(
      (data) => {
        const selectedSection = this.currentQuestionMarkingGuide.sections.find( item => item.id == data.sectionId)
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
    const clickedInsideMenu   = !!target.closest('.custom-context-menu') || !!target.closest('[data-inside-canvas]');
    const clickedInsideForm   = !!target.closest('form'); 

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
    if(contextMenuFormItem.versioned) {
      return
    }

    if(contextMenuFormItem.graded) {
      return
    }
    
    const selectedSection = this.currentQuestionMarkingGuide.sections.find( item => item.id == contextMenuFormItem.sectionId)
    this.currentQuestionMarkingSection = selectedSection

    this.collapseGradingFormContextMenuItems()
    await this.drawingStore.expandGradingFormContextMenuItem(formItemIndex)

    // open cateory tab on the context menu
    const category = this.currentPageGradingData[formItemIndex]?.placeholderType
    if(!category) {
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

    this.questionAnnotationChanges.emit({annotation, action: 'position'})
  }

  ngAfterViewInit(): void {
    if(this.currentQuestion.item_score.un_graded_response.length <= 0) {
      return
    }

    timer(500).subscribe(() => this.initCanvas())
  }

  ToggleQuestionPane() {
    timer(500).subscribe(() => {
      const canvasContainer = document.getElementById('canvas');
      this.resizeStage(canvasContainer?.offsetWidth, canvasContainer?.offsetHeight, 500);
    })
  }
  
  resolveAppScroll(state: string) {
    const documentBody = document.body as HTMLBodyElement
    documentBody.style.overflow = state
  }


  initCanvas() {
    const canvasContainer = document.getElementById('canvas');
    const backgroundType = this.currentQuestion.item.itemType
    if (canvasContainer) {
      const width = canvasContainer.offsetWidth;

      this.initialize('canvas', width, this.canvasSize, this.containerSize);
      this.gridType = backgroundType; 
      this._gridType = backgroundType
    } else {
      this.initialize('canvas', 800, this.canvasSize, this.containerSize);
      this.gridType = backgroundType;
      this._gridType = backgroundType
    }
  }

  selectPage(pageIndex: number) {
    this.drawingAndWritingStore.selectPage(pageIndex)
  }
  
  initialize(containerId: string, width: number, height: number, containerSize: number): void {
      if (this.stage) {
        return;
      }
  
      this.ngZone.runOutsideAngular(() => {
        this.stage = new Konva.Stage({
          container: containerId,
          width: width,
          height: height,
        });
  
        this.gridLayer = new Konva.Layer();
        this.stage.add(this.gridLayer);
  
        this.layer = new Konva.Layer();
        this.stage.add(this.layer);
  
        this.scrollLayers = new Konva.Layer();
        this.stage.add(this.scrollLayers);
  
        // this._contentScrollHeight = containerSize + height;
        this._contentScrollHeight = height;
        this._contentScrollWidth = width;
  
        const drawingCanvas = document.createElement('canvas');
        drawingCanvas.width = this.stage.width();
        drawingCanvas.height = this._contentScrollHeight;
  
        this.image = new Konva.Image({
          image: drawingCanvas,
          x: 0,
          y: 0,
        });
        this.layer.add(this.image);
  
        this.context = drawingCanvas.getContext('2d')!;
        this.context.lineJoin = 'round';
        this.context.lineCap = 'round';
  
        this.setBrushStyle();
  
        this.storeSubscription = this.drawingStore.store$.subscribe(store => {
          if (this.stage && this.context) {
            this.loadCurrentPageStrokes();
            this.drawGrid();
            // this.drawScrollBar();
            this.scrollCurrentPageToTop()
            this.stage.batchDraw();
          }
        });
  
        this.drawGrid();
        // this.drawScrollBar();
  
        // this.stage.container().addEventListener('wheel', this.handleWheelScroll.bind(this));
  
        this.stage.on('pointerleave', () => {
            this.eraserPointerShape.visible(false);
            this.stage.batchDraw();
        });
      });
    }


    scrollCurrentPageToTop() {
      this.layer.y(0);
      this.gridLayer.y(0);
      if (this.verticalScrollBar) {
        this.verticalScrollBar.y(this.SCROLLBAR_PADDING);
      }
    }
    
    set gridType(value: string) {
      this._gridType = value;
      this.drawGrid();
    }
  
    private setBrushStyle(): void {
      this.context.strokeStyle = this.brushColor;
      this.context.lineWidth = this.brushSize;
      this.context.globalCompositeOperation = 'source-over';
    }
  
    private drawStrokePath(strokePoints: number[][], mode: 'brush' | 'eraser', color?: string, size?: number): void {
      if (strokePoints.length === 0) return;
  
      this.context.beginPath();
      this.context.moveTo(strokePoints[0][0], strokePoints[0][1]);
      for (let i = 1; i < strokePoints.length; i++) {
        this.context.lineTo(strokePoints[i][0], strokePoints[i][1]);
      }
  
      if (mode === 'brush') {
        this.context.strokeStyle = color || this.brushColor;
        this.context.lineWidth = size || this.brushSize;
        this.context.globalCompositeOperation = 'source-over';
        this.context.stroke();
      } else if (mode === 'eraser') {
        this.context.lineWidth = size || this.eraserSize;
        this.context.globalCompositeOperation = 'destination-out';
        this.context.stroke();
      }
    }
  
    private redrawAllStrokes(): void {
      if (!this.context || !this.image) return;
  
      this.context.clearRect(0, 0, this.image.width(), this.image.height());

      // console.log(this.currentDrawingStrokes[0])
      // this.currentDrawingStrokes = this.currentDrawingStrokes.map(stroke => {
      //   const decodedPoints = this.deltaDecode(stroke.points as any)
      //   return { ...stroke, points: decodedPoints };
      // });

      this.currentDrawingStrokes.forEach(strokeData => {
        if (strokeData.mode === 'brush') {
          this.context.strokeStyle = strokeData.color || this.brushColor;
          this.context.lineWidth = strokeData.size;
          this.context.globalCompositeOperation = 'source-over';
        } else {
          this.context.lineWidth = strokeData.size;
          this.context.globalCompositeOperation = 'destination-out';
        }
  
        this.drawStrokePath(strokeData.points, strokeData.mode, strokeData.color, strokeData.size);
      });
    }

    deltaDecode(deltas: number[]): number[][] {
      if (!deltas || deltas.length < 2) return [];
      const points = [deltas[0], deltas[1]];

      for (let i = 2; i < deltas.length; i += 2) {
        const x = points[points.length - 2] + deltas[i];
        const y = points[points.length - 1] + deltas[i + 1];
        points.push(x, y);
      }
      
      const formattedPoints: number[][] = [];
      for (let i = 0; i < points.length; i += 2) {
        formattedPoints.push([points[i], points[i + 1]]);
      }

      return formattedPoints;
    }

    private convertStoredStrokes(strokes: any[]): Strokes[] {
      if (!strokes || !Array.isArray(strokes)) return [];

      return strokes.map(stroke => {
        // If points are already an array of pairs: assume new format
        if (Array.isArray(stroke.points) && stroke.points.length && Array.isArray(stroke.points[0])) {
          return { ...stroke } as Strokes;
        }

        // Otherwise assume legacy delta-encoded flat array: decode it
        const decodedPairs = this.deltaDecode(stroke.points || []);
        return {
          ...stroke,
          points: decodedPairs
        } as Strokes;
      });
    }
  
    private drawGrid(): void {
      this.gridLayer.destroyChildren();
  
      if (this._gridType === 'NONE') {
        this.gridLayer.batchDraw();
        return;
      }
  
      const stageWidth = this.stage.width();
  
      if (this._gridType === 'GRID') {
        for (let i = 0; i <= stageWidth; i += this.gridCellSize) {
          this.gridLayer.add(new Konva.Line({
            points: [i, 0, i, this._contentScrollHeight],
            stroke: this.gridStroke,
            strokeWidth: this.gridStrokeWidth,
          }));
        }
      }
  
      for (let i = 0; i <= this._contentScrollHeight; i += this.gridCellSize) {
        this.gridLayer.add(new Konva.Line({
          points: [0, i, stageWidth, i],
          stroke: this.gridStroke,
          strokeWidth: this.gridStrokeWidth,
        }));
      }
  
      this.gridLayer.batchDraw();
    }

    private loadCurrentPageStrokes(): void {
      const currentPageData = this.drawingStore.getCurrentPageData();
      if (currentPageData) {
        this.currentDrawingStrokes = this.convertStoredStrokes(currentPageData.strokes || []);
        this.redrawAllStrokes();
        this.layer.batchDraw();
      } else {
        // console.warn('No current page data found to load strokes.');
      }
    }
  
    // private loadCurrentPageStrokes(): void {
    //   const currentPageData = this.drawingStore.getCurrentPageData();
    //   if (currentPageData) {
    //     this.currentDrawingStrokes = [...currentPageData.strokes];
    //     this.redrawAllStrokes();
    //     this.layer.batchDraw();
    //   } else {
    //   }
    // }
    
    resizeStage(newWidth: number, newHeight: number, containerSize: number): void {
      if (this.stage) {
        const drawingCanvas = this.image.image() as HTMLCanvasElement;
  
        this.stage.width(newWidth);
        this.stage.height(newHeight);
        this._contentScrollHeight = containerSize + newHeight;
        this._contentScrollWidth = newWidth;
  
        drawingCanvas.width = this._contentScrollWidth;
        drawingCanvas.height = this._contentScrollHeight;
  
        this.context.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
        this.redrawAllStrokes();
  
        this.layer.x(0);
        this.layer.y(0);
        this.gridLayer.x(0);
        this.gridLayer.y(0);
  
        this.drawGrid();
        // this.drawScrollBar();
        this.stage.batchDraw();
      }
    }
  
    destroy(): void {
      if (this.stage) {
        this.stage.destroy();
        this.stage = null!;
        this.layer = null!;
        this.gridLayer = null!;
        this.image = null!;
        this.context = null!;
        this.scrollLayers = null!;
        this.verticalScrollBar = null!;
        this.currentDrawingStrokes = [];
        this.eraserPointerShape = null!;
        if (this.storeSubscription) {
          this.storeSubscription.unsubscribe();
        }
      }
    }
}
