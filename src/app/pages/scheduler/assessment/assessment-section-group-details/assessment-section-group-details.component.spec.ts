import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentSectionGroupDetailsComponent } from './assessment-section-group-details.component';

describe('AssessmentSectionGroupDetailsComponent', () => {
  let component: AssessmentSectionGroupDetailsComponent;
  let fixture: ComponentFixture<AssessmentSectionGroupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentSectionGroupDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentSectionGroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
