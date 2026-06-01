import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentCenterDetailsComponent } from './assessment-center-details.component';

describe('AssessmentCenterDetailsComponent', () => {
  let component: AssessmentCenterDetailsComponent;
  let fixture: ComponentFixture<AssessmentCenterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentCenterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentCenterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
