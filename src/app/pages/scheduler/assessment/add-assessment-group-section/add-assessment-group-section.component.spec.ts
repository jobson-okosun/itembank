import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssessmentGroupSectionComponent } from './add-assessment-group-section.component';

describe('AddAssessmentGroupSectionComponent', () => {
  let component: AddAssessmentGroupSectionComponent;
  let fixture: ComponentFixture<AddAssessmentGroupSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssessmentGroupSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssessmentGroupSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
