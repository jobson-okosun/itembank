import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { AssessmentsService } from "../../assessment/service/assessments.service";
import { AssessmentDeliveryEnum } from "../../assessment/model/assessment-delivery-enum";

@Component({
  selector: "app-schedule-page",
  templateUrl: "./schedule-page.component.html",
  styleUrls: ["./schedule-page.component.scss"],
})
export class SchedulePageComponent implements OnInit, AfterViewInit, OnDestroy {
  breadCrumbItems!: Array<{}>;
  currentAssessment: string;
  deliveryMethod: string;
  deliveryMethods = AssessmentDeliveryEnum
  constructor(private assessmentService: AssessmentsService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Exam " },
      { label: "Schedule", active: true },
    ];

    this.getAssessmemtDetails()
  }

  ngAfterViewInit(): void {
    const trailTab = sessionStorage.getItem('schedule-trail-tab')
    if (!trailTab) {
      return
    }

    const tabs = document.querySelector('.navtabs')

    if (trailTab == 'centers') {
      (tabs.children[1].firstElementChild as HTMLElement)?.click()
    }

    sessionStorage.removeItem('schedule-trail-tab')
  }

  getAssessmemtDetails() {
    // console.log( this.assessmentService.activeAssessmentDeliveryMethod)
    this.currentAssessment = this.assessmentService.activeAssessment
    this.deliveryMethod = this.assessmentService.activeAssessmentDeliveryMethod

    // if (this.deliveryMethod) {
    //   localStorage.setItem('deliveryMethod', this.deliveryMethod)
    // } else {
    //   const medthod = localStorage.getItem('deliveryMethod')
    //   if (medthod) {
    //     this.deliveryMethod = medthod
    //   }
    // }

  }

  ngOnDestroy(): void {
    if(!!localStorage.getItem('abandon-reset')) {
      return
    }

    localStorage.removeItem('deliveryMethod')
    localStorage.removeItem('assessmentId')
    localStorage.removeItem('assessmentName')
  }
}
