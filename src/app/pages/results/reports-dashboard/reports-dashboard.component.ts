import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from '../../assessment/service/assessments.service';
import { HttpErrorResponse } from '@angular/common/http';
import {
  AssessmentList,
  SingleAssessment,
} from '../../assessment/model/assessment-list';

@Component({
  selector: 'app-reports-dashboard',
  templateUrl: './reports-dashboard.component.html',
  styleUrls: ['./reports-dashboard.component.scss'],
})
export class ReportsDashboardComponent implements OnInit {
  assessments: AssessmentList;
  breadCrumbItems!: Array<{}>;
  pageNo: number = 0;
  pageSize: number = 20;
  loading: boolean = true;

  constructor(private assessmentService: AssessmentsService) {}

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Reports', active: true }];

    this.assessmentService
      .fetchAllAssessment(this.pageNo, this.pageSize)
      .subscribe(
        (value) => {
          this.loading = false;
          this.assessments = value;
        },
        (error: HttpErrorResponse) => {
          this.loading = false;
          // console.log(error);
        }
      );
  }

  setCurrentAssessment(assessment: SingleAssessment) {
    this.assessmentService.activeAssessment = assessment.name;
    this.assessmentService.activeAssessmentId = assessment.id;
    this.assessmentService.schedulerAssessmentId = assessment.schId;
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
