import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AssessmentsService } from "../../assessment/service/assessments.service";
import { AllAssessmentsService } from "../../assessment/all-assessments/all-assessments.service";
import { NotifierService } from "angular-notifier";
import {
  AssessmentList,
  SingleAssessment,
} from "../../assessment/model/assessment-list";
import { AssessmentDeliveryEnum } from "../../assessment/model/assessment-delivery-enum";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-all-assessments",
  templateUrl: "./all-assessments.component.html",
  styleUrls: ["./all-assessments.component.scss"],
})
export class AllAssessmentsComponent implements OnInit {
  breadCrumbItems!: any;
  deliveryMethods: any[] = [];
  assessments: AssessmentList;
  fetchingAssessment: boolean =  false;
  pageNo: number = 0;

  pageSize: number = 20;
  constructor(
    private router: Router,
    public assessmentList: AllAssessmentsService,
    private assessmentService: AssessmentsService,
    private modalService: NgbModal,
    private notifier: NotifierService
  ) {}

  ngOnInit(): void {
    let m = Object.keys(AssessmentDeliveryEnum);
    m.forEach((method) => {
      this.deliveryMethods.push(method);
    });
    this.breadCrumbItems = [{ label: "Schedule Exams", active: true }];
    this.fetchingAssessment = true
    this.assessmentService
      .fetchAllAssessment(this.pageNo, this.pageSize)
      .subscribe(
        (value) => {
          this.assessments = value;
          this.fetchingAssessment = false
        },
        (error: HttpErrorResponse) => {
          this.assessments = null;
          this.fetchingAssessment = false
        }
      );
  }

  setCurrentAssessment(assessment: SingleAssessment) {
    this.assessmentService.activeAssessment = assessment.name;
    this.assessmentService.schedulerAssessmentId = assessment.schId;
    this.assessmentService.activeAssessmentId = assessment.id;
    this.assessmentService.activeAssessmentDeliveryMethod =
      assessment.deliveryMethod;
  }

  onPageChange(event: any) {
    this.pageSize = event.rows;
    this.pageNo = event.page;
    //this.fetchAssessmentCenters(this.centerPage, this.centerSize);
    this.ngOnInit();
  }
}
