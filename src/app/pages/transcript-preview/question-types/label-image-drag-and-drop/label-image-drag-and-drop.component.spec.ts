import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelImageDragAndDropComponent } from './label-image-drag-and-drop.component';

describe('LabelImageDragAndDropComponent', () => {
  let component: LabelImageDragAndDropComponent;
  let fixture: ComponentFixture<LabelImageDragAndDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelImageDragAndDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelImageDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
