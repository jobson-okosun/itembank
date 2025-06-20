import { Component, OnInit, OnDestroy } from "@angular/core";
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

  assessments: AssessmentList;

  submitted: boolean = false;

  deliveryMethods: any[] = [];

  newAssessment: NewAssessment = new NewAssessment();

  masterSelected!: boolean;

  checkedList: any;

  pageNo: number = 0;

  pageSize: number = 20;

  selectedAssessment: SingleAssessment;

  publishingAssessment: boolean = false;
  loading: boolean = false

  constructor(
    private router: Router,
    public assessmentList: AllAssessmentsService,
    private assessmentService: AssessmentsService,
    private modalService: NgbModal,
    private notifier: NotifierService
  ) {}

  ngOnDestroy(): void {}

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
this.loading = true
    this.assessmentService
      .fetchAllAssessment(this.pageNo, this.pageSize)
      .subscribe(
        (value) => {
          this.assessments = value;
          this.loading = false
        },
        (error: HttpErrorResponse) => {
          this.loading = false
          // console.log(error);
        }
      );
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

  setCurrentAssessment(assessment: SingleAssessment) {
    this.assessmentService.activeAssessment = assessment.name;
    this.assessmentService.schedulerAssessmentId = assessment.schId;
    this.assessmentService.activeAssessmentId = assessment.id;
    this.assessmentService.activeAssessmentDeliveryMethod =
      assessment.deliveryMethod;
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
    this.pageNo = event.page;
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
