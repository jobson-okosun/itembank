import { Injectable, NgZone, OnDestroy } from '@angular/core';
import Konva from 'konva';
import { Subscription } from 'rxjs';
import { DrawingAndWritingStore } from './store.service';
import { KonvaToolsEvent } from './event.service';
import simplify from 'simplify-js'; 

export interface Strokes {
  points: number[][];
  mode: 'brush' | 'eraser';
  color?: string;
  size: number;
}

@Injectable({
  providedIn: 'root'
})
export class KonvaDrawingService implements OnDestroy {
  public stage!: Konva.Stage;
  private layer!: Konva.Layer;
  private gridLayer!: Konva.Layer;
  private image!: Konva.Image;
  private context!: CanvasRenderingContext2D;

  private isPaint = false;
  private currentPoints: number[][] = [];
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
  private deviceOrientation: string;

  private storeSubscription!: Subscription;

  private eraserPointerShape!: Konva.Circle;

  constructor(
    private ngZone: NgZone,
    private drawingStore: DrawingAndWritingStore,
    private konvaEventTools: KonvaToolsEvent
  ) { }

  ngOnDestroy(): void {
    this.destroy();
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }

  initialize(containerId: string, width: number, height: number, containerSize: number): void {
    if (this.stage) {
      return;
    }

    this.deviceOrientation = screen.orientation.type;

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
          this.stage.batchDraw();
        }
      });

      this.konvaEventTools._clearCanvas$.subscribe(store => {
         this.clearCurrentPageStrokes()
      })

      this.drawGrid();
      this.drawScrollBar();

      this.eraserPointerShape = new Konva.Circle({
          radius: this.eraserSize / 2,
          fill: 'rgba(255, 0, 0, 0.3)',
          stroke: 'red',
          strokeWidth: 1,
          visible: false,
          listening: false,
      });
      this.layer.add(this.eraserPointerShape);

      this.image.on('pointerdown', this.handleMouseDown.bind(this));
      this.stage.on('pointerup', this.handleMouseUp.bind(this));
      this.stage.on('pointermove', this.handleMouseMove.bind(this));
      this.stage.container().addEventListener('wheel', this.handleWheelScroll.bind(this));

      this.stage.on('pointerleave', () => {
          this.eraserPointerShape.visible(false);
          this.stage.batchDraw();
      });
    });
  }

  set mode(value: 'brush' | 'eraser') {
    this._mode = value;
    if (!this.isPaint) {
      if (this._mode === 'brush') {
        this.setBrushStyle();
        this.eraserPointerShape.visible(false);
      } else {
        this.setEraserStyle();
        if (this.stage.getPointerPosition()) {
              this.eraserPointerShape.visible(true);
        }
      }
    }
    this.stage.batchDraw();
  }

  get mode(): 'brush' | 'eraser' {
    return this._mode;
  }

  set gridType(value: string) {
    this._gridType = value;
    this.drawGrid();
  }

  get gridType(): string {
    return this._gridType;
  }

  private setBrushStyle(): void {
    this.context.strokeStyle = this.brushColor;
    this.context.lineWidth = this.brushSize;
    this.context.globalCompositeOperation = 'source-over';
  }

  private setEraserStyle(): void {
    this.context.lineWidth = this.eraserSize;
    this.context.globalCompositeOperation = 'destination-out';
  }

  private handleMouseDown(e: any): void {
    if (this.verticalScrollBar && e.target === this.verticalScrollBar) {
      this.isPaint = false;
      this.eraserPointerShape.visible(false);
      this.stage.batchDraw();
      return;
    }

    if (e.evt.pointerType === 'pen') {
      this.isPaint = true;
      const pos = this.image.getRelativePointerPosition();
      if (pos) {
        this.currentPoints = [[pos.x, pos.y]];
      }
      if (this._mode === 'eraser') {
          this.eraserPointerShape.visible(true);
      }
      if (e.evt) {
        e.evt.preventDefault();
      }
    }
    this.stage.batchDraw();
  }

  private handleMouseUp(): void {
    if (!this.isPaint) {
      return;
    }
    this.isPaint = false;

    if (this.currentPoints.length > 0) {
      const pointsForSimplify = this.currentPoints.map(p => ({ x: p[0], y: p[1] }));
      const tolerance = this._mode === 'brush' ? 0.5 : 4.0;
      const simplifiedPoints = simplify(pointsForSimplify, tolerance, true);
      const finalPoints = simplifiedPoints.map(p => [p.x, p.y]);

      const newStroke: Strokes = {
        points: finalPoints,
        mode: this._mode,
        color: this._mode === 'brush' ? this.brushColor : undefined,
        size: this._mode === 'brush' ? this.brushSize : this.eraserSize,
      };

      this.currentDrawingStrokes.push(newStroke);
      this.drawingStore.updateCurrentPageStrokes(this.currentDrawingStrokes);
    }

    this.currentPoints = [];
    this.redrawAllStrokes();

    this.eraserPointerShape.visible(false);
    this.layer.batchDraw();
    this.stage.batchDraw();
  }

  private handleMouseMove(e: any): void {
    if (this.verticalScrollBar && e.target === this.verticalScrollBar && this.verticalScrollBar.isDragging()) {
        this.eraserPointerShape.visible(false);
        this.stage.batchDraw();
        return;
    }

    const currentPointerPos = this.image.getRelativePointerPosition();
    if (currentPointerPos) {
        if (this._mode === 'eraser' && (e.evt.pointerType === 'pen' || this.isPaint && e.evt.pointerType === 'pen')) {
            this.eraserPointerShape.position({ x: currentPointerPos.x, y: currentPointerPos.y });
            this.eraserPointerShape.visible(true);
        } else {
            this.eraserPointerShape.visible(false);
        }
    } else {
        this.eraserPointerShape.visible(false);
    }

    if (!this.isPaint) {
        this.stage.batchDraw();
        return;
    }

    if (e.evt.pointerType === 'pen') {
      if (!currentPointerPos) return;

      this.currentPoints.push([currentPointerPos.x, currentPointerPos.y]);

      if (this.currentPoints.length >= 2) {

        this.context.beginPath();
        this.context.moveTo(this.currentPoints[this.currentPoints.length - 2][0], this.currentPoints[this.currentPoints.length - 2][1]);
        this.context.lineTo(currentPointerPos.x, currentPointerPos.y);

        if (this._mode === 'brush') {
          this.context.strokeStyle = this.brushColor;
          this.context.lineWidth = this.brushSize;
          this.context.globalCompositeOperation = 'source-over';
        } else if (this._mode === 'eraser') {
          this.context.lineWidth = this.eraserSize;
          this.context.globalCompositeOperation = 'destination-out';
        }
        this.context.stroke();
      }

      this.layer.batchDraw();
      this.stage.batchDraw();
      if (e.evt) {
        e.evt.preventDefault();
      }
    }
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
    // console.log(this.drawingStore.getCurrentPageData())
    // console.log(this.drawingStore.getStoreData())

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