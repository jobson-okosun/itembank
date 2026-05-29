import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelImageDragDropPreviewComponent } from './label-image-drag-drop-preview.component';

describe('LabelImageDragDropPreviewComponent', () => {
  let component: LabelImageDragDropPreviewComponent;
  let fixture: ComponentFixture<LabelImageDragDropPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelImageDragDropPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelImageDragDropPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
