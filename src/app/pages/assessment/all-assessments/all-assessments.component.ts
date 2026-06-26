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
import { Account } from 'src/app/authentication/model/account.model';
import { UserService } from 'src/app/shared/user.service';
import { Role } from 'src/app/shared/enum/role';

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

  DELIVERY_METHOD_LABEL: {label:string, description:string}[] = [
    { label: 'LIVE SUPERVISED', description: 'Exam will be supervised by live proctors.'},
    { label: 'AUTO SUPERVISED', description: 'Exam will be supervised by AI.'},
    { label: 'ONLINE UNSUPERVISED', description: 'Exam will be taken without supervision.'},
    { label: 'CENTER-BASED SECURE', description: 'Exam will be taken in a physical location with the lockdown browser.'},
    { label: 'CENTER-BASED STANDARD', description: 'Exam will be taken in a physical location without the lockdown browser.'},
    { label: 'E-PAPER', description: 'Exam will be taken on a dedicated device.' },
    { label: 'BRING YOUR OWN DEVICE', description: 'Exam will be taken on the candidate\'s own device.'},
  ];

  deliveryMethodsWithLabel: { label: string; value: string, description: string }[] = [];

  newAssessment: NewAssessment = new NewAssessment();

  masterSelected!: boolean;

  checkedList: any;

  pageNo: number = 0;

  pageSize: number = 100;

  selectedAssessment: SingleAssessment;

  publishingAssessment: boolean = false;

  loading: boolean = true;

  currentUserTime = new Date();
  currentUser: Account;
  isCurrentUserMarker = false;
  deliveryMethodsList = AssessmentDeliveryEnum;

  // Exam Groups state properties
  newGroupName: string = "";
  processingCreateGroup: boolean = false;
  processingGroupsList: boolean = false;
  processingExamsList: boolean = false;
  examGroups: any[] = [];
  examsInGroup: any[] = [];
  selectedGroupId: string = "";
  selectedGroupName: string = "";

  // Group pagination
  groupsPage: number = 0;
  groupsPageSize: number = 5;
  totalGroups: number = 0;

  // Exams pagination
  examsPage: number = 0;
  examsPageSize: number = 5;
  totalExams: number = 0;

  constructor(
    private router: Router,
    public assessmentList: AllAssessmentsService,
    private assessmentService: AssessmentsService,
    private modalService: NgbModal,
    private notifier: NotifierService,
    private _itemService: ItemServiceService,
    private userService: UserService,
  ) {}

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

    this.deliveryMethodsWithLabel = this.deliveryMethods?.map((value: string, index: number) => ({
      value: value,
      label: this.DELIVERY_METHOD_LABEL?.[index]?.label,
      description: this.DELIVERY_METHOD_LABEL?.[index]?.description,
    }));

    this.breadCrumbItems = [{ label: 'Exams', active: true }];
    this.loading = true;
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

      this.currentUser = this.userService.getCurrentUser();
      
      if(this.currentUser.authorities[0] == Role.MARKER) {
        this.isCurrentUserMarker = true;
      }

  }

  getDeliveryMethod(method: string) {
    return this.deliveryMethodsWithLabel.find(item => item.value == method)
  }

  setDeliveryMode(value: string) {
    this.newAssessment.deliveryMethod = ''

    if(value == 'BYOD') {
      this.newAssessment.deliveryMethod = this.deliveryMethodsList.BYOD
    } else if(value == 'E-Paper') {
      this.newAssessment.deliveryMethod = this.deliveryMethodsList.E_PAPER
    }
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

  // Exam Groups handlers
  openCreateGroupModal(content: any) {
    this.newGroupName = "";
    this.modalService.open(content, { centered: true, size: "md" });
  }

  submitCreateGroup(form: any) {
    if (!this.newGroupName || this.newGroupName.trim() === "") {
      this.notifier.notify("error", "Group name is required");
      return;
    }
    this.processingCreateGroup = true;
    this.assessmentService.createExamGroup(this.newGroupName.trim()).subscribe({
      next: (res) => {
        this.processingCreateGroup = false;
        this.notifier.notify("success", "Exam group created successfully");
        this.modalService.dismissAll();
      },
      error: (err) => {
        this.processingCreateGroup = false;
        this.notifier.notify("error", err?.message || "Failed to create group");
      }
    });
  }

  openViewGroupsModal(content: any) {
    this.groupsPage = 0;
    this.groupsPageSize = 5;
    this.totalGroups = 0;
    this.examGroups = [];
    this.modalService.open(content, { centered: true, size: "lg" });
    this.loadExamGroupsPage();
  }

  loadExamGroupsPage() {
    this.processingGroupsList = true;
    this.assessmentService.fetchExamGroups(this.groupsPage, this.groupsPageSize).subscribe({
      next: (res) => {
        this.processingGroupsList = false;
        this.examGroups = res.content;
        this.totalGroups = res.total;
      },
      error: (err) => {
        this.processingGroupsList = false;
        this.notifier.notify("error", "Failed to fetch groups");
      }
    });
  }

  onGroupsPageChange(event: any) {
    this.groupsPageSize = event.rows;
    this.groupsPage = event.page;
    this.loadExamGroupsPage();
  }

  deleteGroup(groupId: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this exam group?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.assessmentService.deleteExamGroup(groupId).subscribe({
          next: () => {
            this.notifier.notify("success", "Group deleted successfully");
            if (this.examGroups.length === 1 && this.groupsPage > 0) {
              this.groupsPage--;
            }
            this.loadExamGroupsPage();
          },
          error: () => {
            this.notifier.notify("error", "Failed to delete group");
          }
        });
      }
    });
  }

  openViewExamsModal(content: any, group: any) {
    this.selectedGroupId = group.id;
    this.selectedGroupName = group.name;
    this.examsPage = 0;
    this.examsPageSize = 5;
    this.totalExams = 0;
    this.examsInGroup = [];
    
    this.modalService.open(content, { centered: true, size: "lg" });
    this.loadExamsInGroupPage();
  }

  loadExamsInGroupPage() {
    this.processingExamsList = true;
    this.assessmentService.fetchExamsInGroup(this.selectedGroupId, this.examsPage, this.examsPageSize).subscribe({
      next: (res) => {
        this.processingExamsList = false;
        this.examsInGroup = res.content;
        this.totalExams = res.total;
      },
      error: (err) => {
        this.processingExamsList = false;
        this.notifier.notify("error", "Failed to fetch group exams");
      }
    });
  }

  onExamsPageChange(event: any) {
    this.examsPageSize = event.rows;
    this.examsPage = event.page;
    this.loadExamsInGroupPage();
  }

  removeExamFromGroup(examId: string) {
    this.assessmentService.removeExamFromGroup(this.selectedGroupId, examId).subscribe({
      next: () => {
        this.notifier.notify("success", "Exam removed from group");
        if (this.examsInGroup.length === 1 && this.examsPage > 0) {
          this.examsPage--;
        }
        this.loadExamsInGroupPage();
        this.loadExamGroupsPage();
      },
      error: () => {
        this.notifier.notify("error", "Failed to remove exam");
      }
    });
  } 

  // Add exam to group modal state & handlers
  selectedExamForGroup: any = null;
  processingAddToGroup: boolean = false;

  openAddToGroupModal(content: any, exam: any) {
    this.selectedExamForGroup = exam;
    this.groupsPage = 0;
    this.groupsPageSize = 5;
    this.totalGroups = 0;
    this.examGroups = [];
    this.modalService.open(content, { centered: true, size: "lg" });
    this.loadExamGroupsPage();
  }

  addExamToSelectedGroup(group: any) {
    if (!this.selectedExamForGroup) return;
    this.processingAddToGroup = true;
    this.assessmentService.addExamToGroup(group.id, this.selectedExamForGroup).subscribe({
      next: () => {
        this.processingAddToGroup = false;
        this.notifier.notify("success", `Exam added to group "${group.name}" successfully`);
        this.modalService.dismissAll();
        this.selectedExamForGroup = null;
      },
      error: (err) => {
        this.processingAddToGroup = false;
        this.notifier.notify("error", "Failed to add exam to group");
      }
    });
  }
}
