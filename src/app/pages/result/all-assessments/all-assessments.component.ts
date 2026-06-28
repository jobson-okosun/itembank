import { AllAssessmentsResultsService } from "./all-assessments.service";
import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

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

export class ResultsAllAssessmentsComponent implements OnInit, OnDestroy {
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

  filters: any = {
    name: null,
    status: null,
    exam_delivery_method: null,
    exam_group_id: null,
    progress_status: null,
    start_date_from: null,
    start_date_to: null,
    end_date_from: null,
    end_date_to: null,
  };

  allExamGroupsForDropdown: any[] = [];
  loadingExamGroupsDropdown: boolean = false;

  isFilterOpen: boolean = false;

  searchSubject: Subject<string> = new Subject<string>();

  constructor(
    private router: Router,
    public assessmentList: AllAssessmentsResultsService,
    private assessmentService: AssessmentsService,
  ) {}

  ngOnDestroy(): void {
    this.searchSubject.complete();
  }

  ngOnInit(): void {
    let m = Object.keys(AssessmentDeliveryEnum);
    m.forEach((method) => {
      this.deliveryMethods.push(method);
    });
    this.breadCrumbItems = [{ label: "Exams", active: true }];

    this.loadingExamGroupsDropdown = true;
    this.assessmentService.fetchExamGroups(0, 1000).subscribe({
      next: (res) => {
        this.allExamGroupsForDropdown = res.data;
        this.loadingExamGroupsDropdown = false;
      },
      error: () => {
        this.loadingExamGroupsDropdown = false;
      }
    });

    this.fetchAssessments();

    this.searchSubject
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(() => {
        this.applyFilters();
      });
  }

  onSearchChange() {
    this.searchSubject.next(this.filters.name);
  }

  fetchAssessments() {
    this.loading = true;

    // Create a copy of filters to format dates
    const apiFilters = { ...this.filters };
    
    if (apiFilters.start_date_from) {
      apiFilters.start_date_from = apiFilters.start_date_from + 'T00:00:00Z';
    }
    if (apiFilters.start_date_to) {
      apiFilters.start_date_to = apiFilters.start_date_to + 'T23:59:59Z';
    }
    if (apiFilters.end_date_from) {
      apiFilters.end_date_from = apiFilters.end_date_from + 'T00:00:00Z';
    }
    if (apiFilters.end_date_to) {
      apiFilters.end_date_to = apiFilters.end_date_to + 'T23:59:59Z';
    }

    this.assessmentService
      .fetchAllAssessmentV2(this.pageNo, this.pageSize, apiFilters)
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

  applyFilters() {
    this.pageNo = 1;
    this.fetchAssessments();
  }

  resetFilters() {
    this.filters = {
      name: null,
      status: null,
      exam_delivery_method: null,
      exam_group_id: null,
      progress_status: null,
      start_date_from: null,
      start_date_to: null,
      end_date_from: null,
      end_date_to: null,
    };
    this.pageNo = 1;
    this.fetchAssessments();
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
    this.fetchAssessments();
  }
}
