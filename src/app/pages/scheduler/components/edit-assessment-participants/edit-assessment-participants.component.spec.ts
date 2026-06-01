import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssessmentParticipantsComponent } from './edit-assessment-participants.component';

describe('EditAssessmentParticipantsComponent', () => {
  let component: EditAssessmentParticipantsComponent;
  let fixture: ComponentFixture<EditAssessmentParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAssessmentParticipantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAssessmentParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
