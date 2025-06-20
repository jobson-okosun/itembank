import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentSectionGroupingComponent } from './assessment-section-grouping.component';

describe('AssessmentSectionGroupingComponent', () => {
  let component: AssessmentSectionGroupingComponent;
  let fixture: ComponentFixture<AssessmentSectionGroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentSectionGroupingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentSectionGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
