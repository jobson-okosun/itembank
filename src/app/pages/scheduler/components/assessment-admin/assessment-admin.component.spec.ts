import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentAdminComponent } from './assessment-admin.component';

describe('AssessmentAdminComponent', () => {
  let component: AssessmentAdminComponent;
  let fixture: ComponentFixture<AssessmentAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
