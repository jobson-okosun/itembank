import { Injectable, NgZone } from '@angular/core';
import Konva from 'konva';

@Injectable({
  providedIn: 'root'
})
export class KonvaDrawingService {
  private stage!: Konva.Stage;
  private layer!: Konva.Layer;
  private gridLayer!: Konva.Layer;
  private image!: Konva.Image;
  private context!: CanvasRenderingContext2D;

  private isPaint = false;
  private lastPointerPosition: { x: number; y: number } | null = null;
  private _mode: 'brush' | 'eraser' = 'brush';
  private brushColor = '#000000';
  private brushSize = 2;
  private eraserSize = 30;

  private gridCellSize = 50;
  private gridStroke = '#e2dede';
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

      // this.layer.on('dragmove', () => {
      //   this.image.removeEventListener('pointerdown')
      //   this.image.removeEventListener('pointerup')
      //   this.image.removeEventListener('pointermove')
      // })

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
      return;
    }

    if (e.evt.pointerType === 'pen') {
      this.isPaint = true;
      this.lastPointerPosition = this.image.getRelativePointerPosition();
      if (e.evt) {
        e.evt.preventDefault();
      }
    }
  }

  private handleMouseUp(): void {
    this.isPaint = false;
    this.lastPointerPosition = null;
  }

  private handleMouseMove(e: any): void {
    if ((this.verticalScrollBar && e.target === this.verticalScrollBar && this.verticalScrollBar.isDragging()) || !this.isPaint || !this.lastPointerPosition) {
      return;
    }

    if (e.evt.pointerType === 'pen') {
      if (this._mode === 'brush') {
        this.setBrushStyle();
      } else if (this._mode === 'eraser') {
        this.setEraserStyle();
      }

      this.context.beginPath();

      this.context.moveTo(this.lastPointerPosition.x, this.lastPointerPosition.y);

      const currentPointerPos = this.image.getRelativePointerPosition();
      if (!currentPointerPos) return;

      this.context.lineTo(currentPointerPos.x, currentPointerPos.y);
      this.context.closePath();
      this.context.stroke();

      this.lastPointerPosition = currentPointerPos;

      this.layer.batchDraw();

      if (e.evt) {
        e.evt.preventDefault();
      }
    }
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
      // this._contentScrollWidth = Math.max(this._contentScrollWidth, newWidth);

      // drawingCanvas.width = this._contentScrollWidth;
      drawingCanvas.height = this._contentScrollHeight;

      this.context.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);

      const img = new Image();
      img.onload = () => {
        this.context.drawImage(img, 0, 0);
        this.layer.batchDraw();
      };
      img.src = currentDrawingDataURL;

      this.drawGrid();
      this.drawScrollBar();

      return 
      
      if(screen.orientation.type === 'portrait-primary') {
        // orientation when initalized
        if(this.deviceOrientation === screen.orientation.type) {
          return
        }

        this.stage.draggable(true)
        return 
      }

      this.stage.draggable(false)
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
    }
  }
}