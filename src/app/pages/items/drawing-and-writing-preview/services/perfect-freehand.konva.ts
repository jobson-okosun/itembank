import { Injectable, NgZone } from '@angular/core';
import Konva from 'konva';
import { getStroke } from 'perfect-freehand';

interface StoredStroke {
  points: number[][];
  mode: 'brush' | 'eraser';
  color?: string;
  size: number;
}

@Injectable({
  providedIn: 'root'
})
export class PerfectFreehandKonvaDrawingService {
  private stage!: Konva.Stage;
  private layer!: Konva.Layer;
  private gridLayer!: Konva.Layer;
  private image!: Konva.Image;
  private context!: CanvasRenderingContext2D;

  private isPaint = false;
  private currentPoints: number[][] = [];
  private completedStrokes: StoredStroke[] = [];

  private _mode: 'brush' | 'eraser' = 'brush';
  private brushColor = '#000000';
  private brushSize = 2;
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
  private deviceOrientation: string

  constructor(private ngZone: NgZone) { }

  initialize(containerId: string, width: number, height: number, containerSize: number): void {
    if (this.stage) {
      return;
    }

    this.deviceOrientation = screen.orientation.type

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
      this.drawGrid();
      this.drawScrollBar();

      this.image.on('pointerdown', this.handleMouseDown.bind(this));
      this.stage.on('pointerup', this.handleMouseUp.bind(this));
      this.stage.on('pointermove', this.handleMouseMove.bind(this));

      this.stage.container().addEventListener('wheel', this.handleWheelScroll.bind(this));
    });
  }

  set mode(value: 'brush' | 'eraser') {
    this._mode = value;
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
    this.context.fillStyle = this.brushColor; 
    this.context.globalCompositeOperation = 'source-over';
  }

  private setEraserStyle(): void {
    this.context.globalCompositeOperation = 'destination-out';
  }

  private handleMouseDown(e: any): void {
    if (this.verticalScrollBar && e.target === this.verticalScrollBar) {
      this.isPaint = false;
      return;
    }

    if (e.evt.pointerType === 'pen') {
      this.isPaint = true;
      const pos = this.image.getRelativePointerPosition();
      if (pos) {
        this.currentPoints = [[pos.x, pos.y, e.evt.pressure || 0.5]]; 
      }
      
      if (e.evt) {
        e.evt.preventDefault();
      }
    }
  }

  private handleMouseUp(): void {
    if (!this.isPaint) {
      return;
    }
    this.isPaint = false;

    if (this.currentPoints.length > 0) {
      this.completedStrokes.push({
        points: [...this.currentPoints],
        mode: this._mode,
        color: this._mode === 'brush' ? this.brushColor : undefined,
        size: this._mode === 'brush' ? this.brushSize : this.eraserSize,
      });
    }
    
    this.currentPoints = []; 
    this.redrawAllStrokes();
    this.layer.batchDraw();
  }

  private handleMouseMove(e: any): void {
    if ((this.verticalScrollBar && e.target === this.verticalScrollBar && this.verticalScrollBar.isDragging()) || !this.isPaint) {
      return;
    }

    if (e.evt.pointerType === 'pen') {
      const currentPointerPos = this.image.getRelativePointerPosition();
      if (!currentPointerPos) return;

      this.currentPoints.push([currentPointerPos.x, currentPointerPos.y, e.evt.pressure || 0.5]);

      this.redrawAllStrokes();

      if (this.currentPoints.length > 0) {
        const stroke = getStroke(this.currentPoints, {
          size: this._mode === 'brush' ? this.brushSize : this.eraserSize, 
          thinning: 0.5,
          smoothing: 0.5,
          streamline: 0.5,
          simulatePressure: true,
        });

        this.drawStrokePath(stroke, this._mode, this._mode === 'brush' ? this.brushColor : undefined);
      }

      this.layer.batchDraw();

      if (e.evt) {
        e.evt.preventDefault();
      }
    }
  }

  private drawStrokePath(strokePoints: number[][], mode: 'brush' | 'eraser', color?: string): void {
    const path = new Path2D();
    if (strokePoints.length > 0) {
      path.moveTo(strokePoints[0][0], strokePoints[0][1]);
      for (let i = 1; i < strokePoints.length; i++) {
        path.lineTo(strokePoints[i][0], strokePoints[i][1]);
      }
      path.closePath();
    }

    if (mode === 'brush') {
      this.context.fillStyle = color || this.brushColor; 
      this.context.globalCompositeOperation = 'source-over';
      this.context.fill(path);
    } else if (mode === 'eraser') {
      this.context.globalCompositeOperation = 'destination-out';
      this.context.fill(path);
    }
  }

  private redrawAllStrokes(): void {
    this.context.clearRect(0, 0, this.image.width(), this.image.height()); 

    this.completedStrokes.forEach(strokeData => {
      const strokeOutline = getStroke(strokeData.points, {
        size: strokeData.size,
        thinning: 0.5,
        smoothing: 0.5,
        streamline: 0.5,
        simulatePressure: true,
      });
      this.drawStrokePath(strokeOutline, strokeData.mode, strokeData.color);
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
      fill: 'grey',
      opacity: 0.8,
      x: stageVisibleWidth - PADDING - SCROLLBAR_WIDTH,
      y: PADDING,
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
    if (contentScrollRange > 0) {
      const scrollPercentage = -newLayerY / contentScrollRange;
      const scrollTrackHeight = this.stage.height() - (this.SCROLLBAR_PADDING * 2) - this.verticalScrollBar.height();
      const newThumbY = this.SCROLLBAR_PADDING + (scrollTrackHeight * scrollPercentage);
      this.verticalScrollBar.y(newThumbY);
    }

    this.stage.batchDraw();
  }

  clearDrawing(): void {
    if (this.context && this.image) {
      this.completedStrokes = [];
      this.context.globalCompositeOperation = 'source-over';
      this.context.clearRect(0, 0, this.image.width(), this.image.height());
      this.layer.batchDraw();
    }
  }

  resizeStage(newWidth: number, newHeight: number, containerSize: number): void {
    if (this.stage) {
      const drawingCanvas = this.image.image() as HTMLCanvasElement;
      
      const currentDrawingDataURL = drawingCanvas.toDataURL(); 

      this.stage.width(newWidth);
      this.stage.height(newHeight);
      this._contentScrollHeight = containerSize + newHeight;
      this._contentScrollWidth = newWidth; 

      drawingCanvas.width = this._contentScrollWidth;
      drawingCanvas.height = this._contentScrollHeight;

      this.context.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);

      const img = new Image();
      img.onload = () => {
        this.context.drawImage(img, 0, 0);
        this.layer.batchDraw(); 
      };
      img.src = currentDrawingDataURL;

      this.layer.x(0);
      this.layer.y(0);
      this.gridLayer.x(0);
      this.gridLayer.y(0);

      this.drawGrid();
      this.drawScrollBar();
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
      this.completedStrokes = [];
    }
  }
}