import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AssessmentsService } from "../../assessment/service/assessments.service";
import { AllAssessmentsService } from "../../assessment/all-assessments/all-assessments.service";
import { NotifierService } from "angular-notifier";
import {
  AssessmentList,
  AssessmentListItemDTO,
  AssessmentListPage,
  ExaminerClearAppPage,
  SingleAssessment,
} from "../../assessment/model/assessment-list";
import { AssessmentDeliveryEnum } from "../../assessment/model/assessment-delivery-enum";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-all-assessments",
  templateUrl: "./all-assessments.component.html",
  styleUrls: ["./all-assessments.component.scss"],
})
export class AllAssessmentsComponent implements OnInit, OnDestroy {
  breadCrumbItems!: any;
  deliveryMethods: any[] = [];
  assessments: AssessmentListPage;
  fetchingAssessment: boolean =  false;
  pageNo: number = 0;
  pageSize: number = 20;

  fetchingAppDownloadsReport: boolean = false
  appDownloadsReport: any
  appDownloadsPage: number = 1;
  appDownloadsSize: number = 50;

  fetchingAppInstallationsReport: boolean = false
  appInstallationsReport: any
  appInstallationsPage: number = 1;
  appInstallationsSize: number = 50;

  fetchingAppClearsReport: boolean = false
  appClearsReport: ExaminerClearAppPage
  appClearsPage: number = 1;
  appClearsSize: number = 50;

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
    public assessmentList: AllAssessmentsService,
    private assessmentService: AssessmentsService,
    private modalService: NgbModal,
    private notifier: NotifierService
  ) {}

  ngOnDestroy(): void {
    this.searchSubject.complete();
  }

  ngOnInit(): void {
    let m = Object.keys(AssessmentDeliveryEnum);
    m.forEach((method) => {
      this.deliveryMethods.push(method);
    });
    this.breadCrumbItems = [{ label: "Schedule Exams", active: true }];
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
    this.fetchingAssessment = true;

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
          this.fetchingAssessment = false;
        },
        (error: HttpErrorResponse) => {
          this.assessments = null;
          this.fetchingAssessment = false;
        }
      );
  }

  applyFilters() {
    this.pageNo = 1; // page is 1-indexed in monitor? Wait, earlier it was 1. But in monitor, onPageChange sets `this.pageNo = event.page + 1`. So page is 1-indexed. Wait, let me check ngOninit original code.
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

  fetchAppDownloadReport() {
    this.fetchingAppDownloadsReport = true
    this.assessmentService.fetchAppDownloads(this.appDownloadsPage, this.appDownloadsSize)
    .subscribe(
      (value) => {
        this.appDownloadsReport = value;
        this.fetchingAppDownloadsReport = false
      },
      (error: HttpErrorResponse) => {
        this.appDownloadsReport = null;
        this.fetchingAppDownloadsReport = false
      }
    );
  }

  openAppDownloadsReportModal(content:any) {
    this.appDownloadsPage = 1
    this.appDownloadsSize = 50
    
    this.fetchAppDownloadReport()
    this.modalService.open(content, { size: 'xl', centered: true });
  }
  
  onDownloadsReportChange(event: any) {
    this.appDownloadsSize = event.rows;
    this.appDownloadsPage = event.page + 1;

    this.fetchAppDownloadReport()
  }


  fetchAppInstallationsReport() {
    this.fetchingAppInstallationsReport = true
    this.assessmentService.fetchAppInstallations(this.appInstallationsPage, this.appInstallationsSize)
    .subscribe(
      (value) => {
        this.appInstallationsReport = value;
        this.fetchingAppInstallationsReport = false
      },
      (error: HttpErrorResponse) => {
        this.appInstallationsReport = null;
        this.fetchingAppInstallationsReport = false
      }
    );
  }

  openAppInstallationsReportModal(content:any) {
    this.appInstallationsPage = 1
    this.appInstallationsSize = 50
    
    this.fetchAppInstallationsReport()
    this.modalService.open(content, { size: 'xl', centered: true });
  }
  
  onAppInstallationsReportChange(event: any) {
    this.appInstallationsSize = event.rows;
    this.appInstallationsPage = event.page + 1;

    this.fetchAppInstallationsReport()
  }

  fetchAppClearsReport() {
    this.fetchingAppClearsReport = true
    this.assessmentService.fetchAppClears(this.appClearsPage, this.appClearsSize)
    .subscribe(
      (value) => {
        this.appClearsReport = value;
        this.fetchingAppClearsReport = false
      },
      (error: HttpErrorResponse) => {
        this.appClearsReport = null;
        this.fetchingAppClearsReport = false
      }
    );
  }

  openAppClearsReportModal(content:any) {
    this.appClearsPage = 1
    this.appClearsSize = 50
    
    this.fetchAppClearsReport()
    this.modalService.open(content, { size: 'xl', centered: true });
  }
  
  onAppClearsReportChange(event: any) {
    this.appClearsSize = event.rows;
    this.appClearsPage = event.page + 1;

    this.fetchAppClearsReport()
  }
}
