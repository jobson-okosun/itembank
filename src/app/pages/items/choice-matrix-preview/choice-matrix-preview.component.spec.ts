import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceMatrixPreviewComponent } from './choice-matrix-preview.component';

describe('ChoiceMatrixPreviewComponent', () => {
  let component: ChoiceMatrixPreviewComponent;
  let fixture: ComponentFixture<ChoiceMatrixPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceMatrixPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceMatrixPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
