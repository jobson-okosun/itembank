import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import {
  AllAssessmentsService,
  Assessment,
} from "../../assessment/all-assessments/all-assessments.service";
import { Router } from "@angular/router";

import Swal from "sweetalert2";
import { NewAssessment } from "../../assessment/model/new-assessment.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AssessmentsService } from "../../assessment/service/assessments.service";
import { HttpErrorResponse } from "@angular/common/http";
import {
  AssessmentList,
  AssessmentListItemDTO,
  AssessmentListPage,
  SingleAssessment,
} from "../../assessment/model/assessment-list";
import { AssessmentDeliveryEnum } from "../../assessment/model/assessment-delivery-enum";
import { NotifierService } from "angular-notifier";
import { Publish } from "../../assessment/model/publish";

@Component({
  selector: "app-scheduler-dashboard",
  templateUrl: "./scheduler-dashboard.component.html",
  styleUrls: ["./scheduler-dashboard.component.scss"],
})
export class SchedulerDashboardComponent implements OnInit {
  breadCrumbItems!: any;

  assessments: AssessmentListPage;

  submitted: boolean = false;

  deliveryMethods: any[] = [];

  newAssessment: NewAssessment = new NewAssessment();

  masterSelected!: boolean;

  checkedList: any;

  pageNo: number = 1;

  pageSize: number = 100;

  selectedAssessment: SingleAssessment;

  publishingAssessment: boolean = false;
  loading: boolean = false;

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
  ) { }

  ngOnDestroy(): void {
    this.searchSubject.complete();
  }

  onSettingsButtonClicked() {
    document.body.classList.toggle("right-bar-enabled");
    const rightBar = document.getElementById("theme-settings-offcanvas");
    if (rightBar != null) {
      rightBar.classList.toggle("show");
      rightBar.setAttribute("style", "visibility: visible;");
    }
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
          // console.log(error);
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

  onScheduleExamListPageChange(event: any) {
    this.pageSize = event.rows;
    this.pageNo = event.page * event.rows;
    this.fetchAssessments();
  }

  createNewAssessment(newAssessmentForm: any) {
    this.submitted = true;
    if (this.newAssessment.startDate > this.newAssessment.endDate) {
      this.submitted = false;
      return this.notifier.notify(
        `error`,
        `The end date of the examination cannot be earlier than the start date`
      );
    }

    if (this.newAssessment.duration < 5) {
      this.submitted = false;
      return this.notifier.notify(
        `error`,
        `The specified duration cannot be less than 5 minutes`
      );
    }

    this.assessmentService.createNewAssessment(this.newAssessment).subscribe(
      (value) => {
        if (value) {
          Swal.fire({
            title: "Congratulations",
            text: "Your assessment was created successfully.",
            icon: "success",
          });
        }
        this.submitted = false;
        this.modalService.dismissAll();
        this.ngOnInit();
        this.newAssessment = new NewAssessment();
      },
      (error: HttpErrorResponse) => {
        this.submitted = false;
        this.notifier.notify("error", `${error.error.message}`);
      }
    );
  }

  openNewAssessmentModal(newAssessmentModal: any) {
    this.modalService.open(newAssessmentModal, { centered: true, size: "lg" });
  }

  openPublishConfirmationModal(
    publishConfirmationModal: any,
    assessment: SingleAssessment
  ) {
    this.selectedAssessment = assessment;
    this.modalService.open(publishConfirmationModal, {
      centered: true,
      size: "md",
    });
  }

  deleteMultiple() {
    /* if (this.checkedList.length > 0) {
      this.assessments.splice(0, this.assessments.content.length);
      this.masterSelected = false;
    } */
  }

  setCurrentAssessment(assessment: AssessmentListItemDTO) {
    this.assessmentService.activeAssessment = assessment.name;
    // this.assessmentService.schedulerAssessmentId = assessment.schId;
    this.assessmentService.schedulerAssessmentId = assessment.id;
    this.assessmentService.activeAssessmentId = assessment.id;
    this.assessmentService.activeAssessmentDeliveryMethod = assessment.delivery_method;

    localStorage.setItem('deliveryMethod', assessment.delivery_method)
    localStorage.setItem('assessmentId', assessment.id)
    localStorage.setItem('assessmentName', assessment.name)

  }

  confirm() {
    Swal.fire({
      title: "You are about to delete a order ?",
      text: "Deleting your order will remove all of your information from our database.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f46a6a",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Close",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Deleted!", "Invoice has been deleted.", "success");
      }
    });
  }

  onPageChange(event: any) {
    this.pageSize = event.rows;
    this.pageNo = event.page + 1;
    //this.fetchAssessmentCenters(this.centerPage, this.centerSize);
    this.ngOnInit();
  }

  switchTab($event: any) {
    // console.log($event);
  }

  publishAssessment(assessment?: any) {
    this.publishingAssessment = true;
    this.publishLoader();
    this.submitted = true;
    //console.log(assessment);
    let publish: Publish = {
      assessmentId: this.selectedAssessment.id,
    };
    this.assessmentService
      .publishAssessment(this.selectedAssessment.id, publish)
      .subscribe(
        (value) => {
          if (value) {
            this.publishingAssessment = false;
            this.submitted = false;
            //this.publishLoader();
            Swal.close();
            Swal.fire({
              title: "Congratulations!",
              text: `You have successfully published ${assessment.name}`,
              icon: "success",
            });
          }
        },
        (error: HttpErrorResponse) => {
          this.publishingAssessment = false;
          this.submitted = false;
          Swal.close();
          this.notifier.notify("error", `${error.error.message}`);
        }
      );
  }

  publishLoader() {
    if (!this.publishingAssessment) {
      return;
    } else {
      Swal.fire({
        title: "Publishing your exam, Please Wait...",
        allowEnterKey: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    }
  }
}
