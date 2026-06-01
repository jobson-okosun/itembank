import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelImageDragDropComponent } from './label-image-drag-drop.component';

describe('LabelImageDragDropComponent', () => {
  let component: LabelImageDragDropComponent;
  let fixture: ComponentFixture<LabelImageDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelImageDragDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelImageDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
