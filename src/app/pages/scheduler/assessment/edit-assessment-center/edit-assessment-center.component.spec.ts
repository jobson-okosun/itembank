import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EditAssessmentCenterComponent } from "./edit-assessment-center.component";

describe("EditAssessmentCenterComponent", () => {
  let component: EditAssessmentCenterComponent;
  let fixture: ComponentFixture<EditAssessmentCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAssessmentCenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAssessmentCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
