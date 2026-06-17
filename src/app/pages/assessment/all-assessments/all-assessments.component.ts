import { AllAssessmentsService, Assessment } from './all-assessments.service';
import { Router } from '@angular/router';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import Swal from 'sweetalert2';
import { NewAssessment } from '../model/new-assessment.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AssessmentsService } from '../service/assessments.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AssessmentList, SingleAssessment } from '../model/assessment-list';
import { AssessmentDeliveryEnum, CentreBasedCategoryEnum, E_PaperEnum, ProctoredCategoryEnum, UnsupervisedCategoryEnum } from '../model/assessment-delivery-enum';
import { NotifierService } from 'angular-notifier';
import { Publish } from '../model/publish';
import { ItemServiceService } from 'src/app/shared/item-services/item-service.service';

@Component({
  selector: 'app-all-assessments',
  templateUrl: './all-assessments.component.html',
  styleUrls: ['./all-assessments.component.scss'],
  providers: [DecimalPipe],
})
export class AllAssessmentsComponent implements OnInit, OnDestroy {
  breadCrumbItems!: any;

  assessments: AssessmentList;

  submitted: boolean = false;

  deliveryMethods: any[] = [];

  proctoredCategory: any[] = [];

  unsupervisedCategory: any[] = [];

  centreBasedCategory: any[] = [];

  ePaperCategory: any[] = [];

  DELIVERY_METHOD_LABEL: string[] = [
    'LIVE SUPERVISED', //'LIVE PROCTORING',
    'AUTO SUPERVISED', //'AUTO PROCTORING',
    'ONLINE UNSUPERVISED', //'ONLINE WITH NO PROCTORING',
    'CENTER-BASED SECURE', //'ON PREMISE WITH LOCKDOWN BROWSER',
    'CENTER-BASED STANDARD', //'ON PREMISE WITHOUT LOCKDOWN BROWSER',
    'E-PAPER',
    'BRING YOUR OWN DEVICE',
  ];

  // ======== CATEGORIES ===========

  PROCTORED_CATEGORY_LABEL: string[] = [
    'LIVE SUPERVISED',
    'AUTO SUPERVISED',
  ];

  UNSUPERVISED_CATEGORY_LABEL: string[] = [
    'ONLINE WITH LOCKDOWN BROWSER',
    'ONLINE WITHOUT LOCKDOWN BROWSER'
  ];

  CENTRE_BASED_CATEGORY_LABEL: string[] = [
    'OFFLINE WITH SECURE BROWSER',
    'OFFLINE WITHOUT SECURE BROWSER',
    'BRING YOUR OWN DEVICE'
  ];

  E_PAPER_CATEGORY_LABEL: string[] = [
    'E-PAPER'
  ];

  deliveryMethodsWithLabel: { label: string; value: string }[] = [];

  proctorCategoryWithLabel: { label: string; value: string }[] = [];

  unsupervisedCategoryWithLabel: { label: string; value: string }[] = [];

  centerBasedCategoryWithLabel: { label: string; value: string }[] = [];

  ePaperCategoryWithLabel: { label: string; value: string }[] = [];

  newAssessment: NewAssessment = new NewAssessment();

  masterSelected!: boolean;

  checkedList: any;

  pageNo: number = 0;

  pageSize: number = 100;

  selectedAssessment: SingleAssessment;

  publishingAssessment: boolean = false;

  loading: boolean = true;

  currentUserTime = new Date();

  constructor(
    private router: Router,
    public assessmentList: AllAssessmentsService,
    private assessmentService: AssessmentsService,
    private modalService: NgbModal,
    private notifier: NotifierService,
    private _itemService: ItemServiceService
  ) { }

  ngOnDestroy(): void {
    console.log(this.assessmentService.activeAssessment);
  }

  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
    const rightBar = document.getElementById('theme-settings-offcanvas');
    if (rightBar != null) {
      rightBar.classList.toggle('show');
      rightBar.setAttribute('style', 'visibility: visible;');
    }
  }

  ngOnInit(): void {

    Object.keys(AssessmentDeliveryEnum).forEach((method) => {
      this.deliveryMethods.push(method);
    });

    this.deliveryMethodsWithLabel = this.deliveryMethods.map((value: string, index: number) => ({
      value: value,
      label: this.DELIVERY_METHOD_LABEL[index],
    }));

    // Proctored Categories
    Object.keys(AssessmentDeliveryEnum).forEach((method) => {
      this.proctoredCategory.push(method);
    });

    this.proctorCategoryWithLabel = Object.keys(ProctoredCategoryEnum).map((value: string, index: number) => ({
      value: value,
      label: this.PROCTORED_CATEGORY_LABEL[index],
    }));

    // Unsupervised Categories
    Object.keys(AssessmentDeliveryEnum).forEach((method) => {
      this.unsupervisedCategory.push(method);
    });

    this.unsupervisedCategoryWithLabel = Object.keys(UnsupervisedCategoryEnum).map((value: string, index: number) => ({
      value: value,
      label: this.UNSUPERVISED_CATEGORY_LABEL[index],
    }));

    // Centre based Categories
    Object.keys(AssessmentDeliveryEnum).forEach((method) => {
      this.centreBasedCategory.push(method);
    });

    this.centerBasedCategoryWithLabel = Object.keys(CentreBasedCategoryEnum).map((value: string, index: number) => ({
      value: value,
      label: this.CENTRE_BASED_CATEGORY_LABEL[index],
    }));

    // E-Paper Categories
    Object.keys(AssessmentDeliveryEnum).forEach((method) => {
      this.ePaperCategory.push(method);
    });

    this.ePaperCategoryWithLabel = Object.keys(E_PaperEnum).map((value: string, index: number) => ({
      value: value,
      label: this.E_PAPER_CATEGORY_LABEL[index],
    }));

    this.breadCrumbItems = [{ label: 'Exams', active: true }];

    this.assessmentService
      .fetchAllAssessment(this.pageNo, this.pageSize)
      .subscribe(
        (value) => {
          this.assessments = value;
          this.loading = false;
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
          this.loading = false;
        },
      );
  }

  createNewAssessment(newAssessmentForm: any) {
    this.submitted = true;

    // if (
    //   this.newAssessment.startDate.trim() === "" ||
    //   this.newAssessment.endDate.trim() === ""
    // ) {
    //   this.submitted = false;
    //   return this.notifier.notify(`error`, `Exam must have start and end date`);
    // }
    if (this.newAssessment.startDate > this.newAssessment.endDate) {
      this.submitted = false;
      return this.notifier.notify(
        `error`,
        `The end date of the examination cannot be earlier than the start date`,
      );
    }

    if (this.newAssessment.duration < 5) {
      this.submitted = false;
      return this.notifier.notify(
        `error`,
        `Exam duration cannot be less than 5 minutes`,
      );
    }

    this.newAssessment.description = this.newAssessment.description.trim();
    this.newAssessment.name = this.newAssessment.name.trim();

    console.log('NEW ASSESSMENT: ', this.newAssessment);

    this.assessmentService.createNewAssessment(this.newAssessment).subscribe(
      (value) => {
        if (value) {
          Swal.fire({
            title: 'Congratulations',
            text: 'Your exam was created successfully.',
            icon: 'success',
          });
        }
        this.submitted = false;
        this.modalService.dismissAll();
        this.ngOnInit();
        this.newAssessment = new NewAssessment();
      },
      (error: HttpErrorResponse) => {
        this.submitted = false;
        this.notifier.notify('error', `${error.error.message}`);
      },
    );
  }

  openNewAssessmentModal(newAssessmentModal: any) {
    this.newAssessment = new NewAssessment();
    this.modalService.open(newAssessmentModal, { centered: true, size: 'lg' });
  }

  openPublishConfirmationModal(
    publishConfirmationModal: any,
    assessment: SingleAssessment,
  ) {
    this.selectedAssessment = assessment;
    this.modalService.open(publishConfirmationModal, {
      centered: true,
      size: 'md',
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
    this._itemService.setItem('activeAssessment', assessment.name);
    this.assessmentService.activeAssessmentId = assessment.id;
    this.assessmentService.schedulerAssessmentId = assessment.schId;
    this.assessmentService.activeAssessmentDeliveryMethod =
      assessment.deliveryMethod;
    this._itemService.setItem('activeAssessmentDeliveryMethod', assessment.deliveryMethod);
  }

  confirm() {
    Swal.fire({
      title: 'You are about to delete a order ?',
      text: 'Deleting your order will remove all of your information from our database.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Close',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Deleted!', 'Invoice has been deleted.', 'success');
      }
    });
  }

  onPageChange(event: any) {
    this.pageSize = event.rows;
    this.pageNo = event.page;
    //this.fetchAssessmentCenters(this.centerPage, this.centerSize);
    this.ngOnInit();
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
              title: 'Congratulations!',
              text: `You have successfully published ${assessment.name}`,
              icon: 'success',
            });
          }
        },
        (error: HttpErrorResponse) => {
          this.publishingAssessment = false;
          this.submitted = false;
          Swal.close();
          this.notifier.notify('error', `${error.error.message}`);
        },
      );
  }

  publishLoader() {
    if (!this.publishingAssessment) {
      return;
    } else {
      Swal.fire({
        title: 'Publishing your exam, Please Wait...',
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
