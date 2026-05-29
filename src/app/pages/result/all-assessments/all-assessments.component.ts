import { AllAssessmentsResultsService } from "./all-assessments.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { DecimalPipe } from "@angular/common";

import { HttpErrorResponse } from "@angular/common/http";
import { AssessmentList, AssessmentListItemDTO, AssessmentListPage, SingleAssessment } from "src/app/pages/assessment/model/assessment-list";
import { NewAssessment } from "src/app/pages/assessment/model/new-assessment.model";
import { AssessmentsService } from "src/app/pages/assessment/service/assessments.service";

enum AssessmentDeliveryEnum {
  LIVE_PROCTORING = 'LIVE_PROCTORING',
  AUTO_PROCTORING = 'AUTO_PROCTORING',
  ONLINE_NO_PROCTORING = 'ONLINE_NO_PROCTORING',
  ON_PREMISE_SECURE_BROWSER = 'ON_PREMISE_SECURE_BROWSER',
  ON_PREMISE_NO_SECURE_BROWSER = 'ON_PREMISE_NO_SECURE_BROWSER',
}

@Component({
  selector: "app-result-all-assessments",
  templateUrl: "./all-assessments.component.html",
  styleUrls: ["./all-assessments.component.scss"],
  providers: [DecimalPipe],
}) 

export class ResultsAllAssessmentsComponent implements OnInit {
  breadCrumbItems!: any;

  assessments: AssessmentListPage;

  submitted: boolean = false;

  deliveryMethods: any[] = [];

  newAssessment: NewAssessment = new NewAssessment();

  masterSelected!: boolean; 

  checkedList: any;

  pageNo: number = 1;

  pageSize: number = 10;

  selectedAssessment: SingleAssessment;

  publishingAssessment: boolean = false;

  loading: boolean = true;

  constructor(
    private router: Router,
    public assessmentList: AllAssessmentsResultsService,
    private assessmentService: AssessmentsService,
  ) {}

  ngOnInit(): void {
    let m = Object.keys(AssessmentDeliveryEnum);
    m.forEach((method) => {
      this.deliveryMethods.push(method);
    });
    this.breadCrumbItems = [{ label: "Exams", active: true }];

    this.loading = true;
    this.assessmentService
      .fetchAllAssessmentV2(this.pageNo, this.pageSize)
      .subscribe(
        (value) => {
          this.assessments = value;
          this.loading = false;
        },
        (error: HttpErrorResponse) => {
          this.loading = false;
        }
      );
  }

  setCurrentAssessment(assessment: AssessmentListItemDTO) {
    this.assessmentService.activeAssessment = assessment.name;
    this.assessmentService.activeAssessmentId = assessment.id;
    this.assessmentService.schedulerAssessmentId = assessment.id;
    this.assessmentService.activeAssessmentDeliveryMethod =
      assessment.delivery_method;
  }

  onPageChange(event: any) {
    this.pageSize = event.rows;
    this.pageNo = event.page + 1;
    this.ngOnInit();
  }
}
