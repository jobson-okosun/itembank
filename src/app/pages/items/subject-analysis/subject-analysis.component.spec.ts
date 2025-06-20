import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAnalysisComponent } from './subject-analysis.component';

describe('SubjectAnalysisComponent', () => {
  let component: SubjectAnalysisComponent;
  let fixture: ComponentFixture<SubjectAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
