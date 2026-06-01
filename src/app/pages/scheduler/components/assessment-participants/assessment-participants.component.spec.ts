import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentParticipantsComponent } from './assessment-participants.component';

describe('AssessmentParticipantsComponent', () => {
  let component: AssessmentParticipantsComponent;
  let fixture: ComponentFixture<AssessmentParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentParticipantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
