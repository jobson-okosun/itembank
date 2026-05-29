import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingAndWritingPreviewComponent } from './drawing-and-writing-preview.component';

describe('DrawingAndWritingPreviewComponent', () => {
  let component: DrawingAndWritingPreviewComponent;
  let fixture: ComponentFixture<DrawingAndWritingPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawingAndWritingPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingAndWritingPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
