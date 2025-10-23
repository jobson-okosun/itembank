import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { ContextMenuGradingForm } from '../model/store.model';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  @Output() dragEnd = new EventEmitter<{ x: number; y: number }>();
  @Output() clicked = new EventEmitter<void>();
  @Input() annotation: ContextMenuGradingForm

  private dragging = false;
  private parentRect!: DOMRect;
  private offsetX = 0;
  private offsetY = 0;
  private lastX = 0;
  private lastY = 0;
  private startX = 0;
  private startY = 0;
  private moved = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'position', 'absolute');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grab');
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'I'].includes(target.tagName)) {
      return;
    }

    event.preventDefault();
    this.dragging = true;
    this.moved = false;

    this.startX = event.clientX;
    this.startY = event.clientY;

    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grabbing');

    const rect = this.el.nativeElement.getBoundingClientRect();
    this.parentRect = this.el.nativeElement.parentElement.parentElement.getBoundingClientRect();

    this.offsetX = event.clientX - rect.left;
    this.offsetY = event.clientY - rect.top;

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove = (event: MouseEvent) => {
    if(this.annotation.graded) return

    if (!this.dragging) return;

    // If mouse moved more than 3px, count as drag
    if (Math.abs(event.clientX - this.startX) > 3 || Math.abs(event.clientY - this.startY) > 3) {
      this.moved = true;
    }

    let x = event.clientX - this.parentRect.left - this.offsetX;
    let y = event.clientY - this.parentRect.top - this.offsetY;

    const maxX = this.parentRect.width - this.el.nativeElement.offsetWidth;
    const maxY = this.parentRect.height - this.el.nativeElement.offsetHeight;

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    this.lastX = x;
    this.lastY = y;

    this.renderer.setStyle(this.el.nativeElement, 'left', `${x}px`);
    this.renderer.setStyle(this.el.nativeElement, 'top', `${y}px`);
  };

  onMouseUp = () => {
    this.dragging = false;
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grab');
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);

    if (this.moved) {
      // Drag ended
      this.dragEnd.emit({ x: this.lastX, y: this.lastY });
    } else {
      // Treat as click
      this.clicked.emit();
    }
  };

  roles () {
    const roles = ['a', 'b', 'c','d']
    const selected = ['a', 'd']

    const assigned = []
    const deassign = []

    selected.forEach( role => {
       if(roles.includes(role)) {
          assigned.push(role)
       } else {
          deassign.push(role)
       }
    })
  }
}
