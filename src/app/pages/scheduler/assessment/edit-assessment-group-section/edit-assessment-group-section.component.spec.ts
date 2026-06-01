import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssessmentGroupSectionComponent } from './edit-assessment-group-section.component';

describe('EditAssessmentGroupSectionComponent', () => {
  let component: EditAssessmentGroupSectionComponent;
  let fixture: ComponentFixture<EditAssessmentGroupSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAssessmentGroupSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAssessmentGroupSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
