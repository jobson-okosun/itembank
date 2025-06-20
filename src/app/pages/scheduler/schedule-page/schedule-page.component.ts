import { Component, OnInit } from "@angular/core";
import { AssessmentsService } from "../../assessment/service/assessments.service";

@Component({
  selector: "app-schedule-page",
  templateUrl: "./schedule-page.component.html",
  styleUrls: ["./schedule-page.component.scss"],
})
export class SchedulePageComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  currentAssessment: string;
  deliveryMethod: string;
  constructor(private assessmentService: AssessmentsService) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Exam " },
      { label: "Schedule", active: true },
    ];
    this.getAssessmemtDetails()
  }

   getAssessmemtDetails() {
    console.log( this.assessmentService.activeAssessmentDeliveryMethod)
    this.currentAssessment = this.assessmentService.activeAssessment
    this.deliveryMethod = this.assessmentService.activeAssessmentDeliveryMethod
   
  }
}
