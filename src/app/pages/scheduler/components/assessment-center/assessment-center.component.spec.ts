import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentCenterComponent } from './assessment-center.component';

describe('AssessmentCenterComponent', () => {
  let component: AssessmentCenterComponent;
  let fixture: ComponentFixture<AssessmentCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
