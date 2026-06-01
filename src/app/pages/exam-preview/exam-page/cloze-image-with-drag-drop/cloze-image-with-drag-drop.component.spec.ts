import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClozeImageWithDragDropComponent } from './cloze-image-with-drag-drop.component';

describe('ClozeImageWithDragDropComponent', () => {
  let component: ClozeImageWithDragDropComponent;
  let fixture: ComponentFixture<ClozeImageWithDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClozeImageWithDragDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClozeImageWithDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
