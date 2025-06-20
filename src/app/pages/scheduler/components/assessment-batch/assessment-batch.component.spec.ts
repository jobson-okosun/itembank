import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentBatchComponent } from './assessment-batch.component';

describe('AssessmentBatchComponent', () => {
  let component: AssessmentBatchComponent;
  let fixture: ComponentFixture<AssessmentBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
