import { AfterViewInit, Component, Input, NgZone, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { KonvaToolsEvent } from './services/event.service';
import { DrawingAndWritingStore } from './services/store.service';
import Konva from 'konva';
import { Subscription, timer } from 'rxjs';
import { ICandidateItem } from 'src/app/pages/exam-preview/models/candidate';
import { Store, Strokes } from './model/store.model';
import { ParticipantSectionTranscript } from 'src/app/pages/items/models/result';

@Component({
  selector: 'app-drawing-and-writing',
  templateUrl: './drawing-and-writing.component.html',
  styleUrls: ['./drawing-and-writing.component.scss']
})
export class DrawingAndWritingComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() currentQuestion: ParticipantSectionTranscript 
  @Input() currentQuestionIndex: number
  @Input() showQuestionPanel: boolean =  true

  containerSize = 500;
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

  private _mode: 'brush' | 'eraser' = 'brush';
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

  constructor(
    private drawingAndWritingStore: DrawingAndWritingStore,
    private ngZone: NgZone,
    private drawingStore: DrawingAndWritingStore,
    private konvaEventTools: KonvaToolsEvent
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['currentQuestion']) {
         this.drawingAndWritingStore.clearStoreData()
         this.destroy()
         this.ngOnInit()
         this.ngAfterViewInit()
      }
  }


  ngOnInit(): void {
    this.storeSubscription = this.drawingAndWritingStore.store$.subscribe(storeState => {
      this.currentPage = storeState.currentPage;
      this.pages = Array.from({ length: storeState.pages.length }, (_, i) => i);
    });

    this.konvaEventTools.openQuestionPane$.subscribe(() => this.ToggleQuestionPane()) 
    
    let response = this.currentQuestion.item_score.un_graded_response[0]
    if(!response) {
      return 
    }
    
    const ungradedResponse: Store = JSON.parse(response)
    this.drawingAndWritingStore.updateStore({...ungradedResponse, currentPage: 0, shouldReset: false})
    this.selectPage(0)

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
  
        this._contentScrollHeight = containerSize + height;
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
            this.drawScrollBar();
            this.scrollCurrentPageToTop()
            this.stage.batchDraw();
          }
        });
  
        this.drawGrid();
        this.drawScrollBar();
  
        this.stage.container().addEventListener('wheel', this.handleWheelScroll.bind(this));
  
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
    
    get mode(): 'brush' | 'eraser' {
      return this._mode;
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
  
    private drawScrollBar(): void {
      this.scrollLayers.destroyChildren();
  
      const stageVisibleWidth = this.stage.width();
      const stageVisibleHeight = this.stage.height();
  
      const PADDING = this.SCROLLBAR_PADDING;
      const SCROLLBAR_WIDTH = 20;
      const SCROLLBAR_THUMB_MIN_HEIGHT = 10;
  
      const scrollTrackHeight = stageVisibleHeight - (PADDING * 2);
  
      const contentScrollRange = this._contentScrollHeight - stageVisibleHeight;
  
      let thumbHeight = SCROLLBAR_THUMB_MIN_HEIGHT;
  
      if (contentScrollRange > 0) {
        thumbHeight = Math.max(
          SCROLLBAR_THUMB_MIN_HEIGHT,
          (stageVisibleHeight / this._contentScrollHeight) * scrollTrackHeight
        );
      } else {
        thumbHeight = scrollTrackHeight;
        this.scrollLayers.visible(false);
        this.stage.batchDraw();
        return;
      }
      this.scrollLayers.visible(true);
  
      this.verticalScrollBar = new Konva.Rect({
        width: SCROLLBAR_WIDTH,
        height: thumbHeight,
        fill: '#25a0e2',
        opacity: 0.9,
        x: stageVisibleWidth - PADDING - SCROLLBAR_WIDTH,
        y: PADDING,
        cornerRadius: 20,
        draggable: true,
        dragBoundFunc: (pos) => {
          pos.x = stageVisibleWidth - PADDING - SCROLLBAR_WIDTH;
          pos.y = Math.max(
            Math.min(pos.y, stageVisibleHeight - this.verticalScrollBar.height() - PADDING),
            PADDING
          );
          return pos;
        },
      });
      this.scrollLayers.add(this.verticalScrollBar);
  
      this.verticalScrollBar.on('dragmove', () => {
        const availableThumbTrack = scrollTrackHeight - this.verticalScrollBar.height();
        const scrollDelta = (this.verticalScrollBar.y() - PADDING) / availableThumbTrack;
  
        const newLayerY = -(contentScrollRange * scrollDelta);
        this.layer.y(newLayerY);
        this.gridLayer.y(newLayerY);
  
        this.stage.batchDraw();
      });
  
      this.scrollLayers.batchDraw();
    }
  
    private handleWheelScroll(e: WheelEvent): void {
      e.preventDefault();
  
      const scrollSpeed = 50;
      const deltaY = e.deltaY;
  
      let newLayerY = this.layer.y() - (deltaY > 0 ? scrollSpeed : -scrollSpeed);
  
      const maxScrollY = 0;
      const minScrollY = -(this._contentScrollHeight - this.stage.height());
  
      newLayerY = Math.max(minScrollY, Math.min(maxScrollY, newLayerY));
  
      this.layer.y(newLayerY);
      this.gridLayer.y(newLayerY);
  
      const contentScrollRange = this._contentScrollHeight - this.stage.height();
      if (contentScrollRange > 0 && this.verticalScrollBar) {
        const scrollPercentage = -newLayerY / contentScrollRange;
        const scrollTrackHeight = this.stage.height() - (this.SCROLLBAR_PADDING * 2) - this.verticalScrollBar.height();
        const newThumbY = this.SCROLLBAR_PADDING + (scrollTrackHeight * scrollPercentage);
        this.verticalScrollBar.y(newThumbY);
      }
  
      this.stage.batchDraw();
    }
  
    private loadCurrentPageStrokes(): void {
      const currentPageData = this.drawingStore.getCurrentPageData();
      if (currentPageData) {
        this.currentDrawingStrokes = [...currentPageData.strokes];
        this.redrawAllStrokes();
        this.layer.batchDraw();
      } else {
        console.warn('No current page data found to load strokes.');
      }
    }
  
    clearCurrentPageStrokes(): void {
      if (this.context && this.image) {
        this.currentDrawingStrokes = [];
        this.drawingStore.updateCurrentPageStrokes([], true);
        this.context.globalCompositeOperation = 'source-over';
        this.context.clearRect(0, 0, this.image.width(), this.image.height());
        this.layer.batchDraw();
      }
    }
  
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
        this.drawScrollBar();
        this.stage.batchDraw();
      }
    }
  
    destroy(): void {
      if (this.stage) {
        this.stage.container().removeEventListener('wheel', this.handleWheelScroll.bind(this));
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
