import { AllAssessmentsService, Assessment } from './all-assessments.service';
import { Router } from '@angular/router';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

import Swal from 'sweetalert2';
import { NewAssessment } from '../model/new-assessment.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AssessmentsService } from '../service/assessments.service';
import { ExamGroupDto, GroupAssessmentDto } from '../model/exam-group';
import { HttpErrorResponse } from '@angular/common/http';
import { AssessmentList, AssessmentListPage, SingleAssessment } from '../model/assessment-list';
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
  @ViewChild('viewGroupsModal') viewGroupsModal: any;
  breadCrumbItems!: any;

  // assessments: AssessmentList;
  assessments: AssessmentListPage; // AssessmentListPage from v2 API

  submitted: boolean = false;

  deliveryMethods: any[] = [];

  proctoredCategory: any[] = [];

  unsupervisedCategory: any[] = [];

  centreBasedCategory: any[] = [];

  ePaperCategory: any[] = [];

  DELIVERY_METHOD_LABEL: { label: string, description: string }[] = [
    { label: 'PROCTOR SUPERVISED', description: 'Exam will be supervised by live proctors.' },
    { label: 'AUTO SUPERVISED', description: 'Exam will be supervised by AI.' },
    { label: 'ONLINE UNSUPERVISED', description: 'Exam will be taken without supervision.' },
    { label: 'CENTER-BASED SECURE', description: 'Exam will be taken in a physical location with the lockdown browser.' },
    { label: 'CENTER-BASED STANDARD', description: 'Exam will be taken in a physical location without the lockdown browser.' },
    { label: 'E-PAPER', description: 'Exam will be taken on a dedicated device.' },
    { label: 'BRING YOUR OWN DEVICE', description: 'Exam will be taken on the candidate\'s own device.' },
  ];

  deliveryMethodsWithLabel: { label: string; value: string, description: string }[] = [];

  newAssessment: NewAssessment = new NewAssessment();

  masterSelected!: boolean;

  checkedList: any;

  pageNo: number = 0;

  pageSize: number = 20;

  // selectedAssessment: SingleAssessment;
  selectedAssessment: any;

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
  examGroups: ExamGroupDto[] = [];
  examsInGroup: any[] = [];
  selectedGroupId: string = "";
  selectedGroupName: string = "";
  editingGroup: ExamGroupDto | null = null;
  editingGroupName: string = "";
  processingEditGroup: boolean = false;

  // Group pagination
  groupsPage: number = 0;
  groupsPageSize: number = 5;
  totalGroups: number = 0;

  // Exams pagination
  examsPage: number = 0;
  examsPageSize: number = 5;
  totalExams: number = 0;
  removingExamId: string | null = null;

  // Add exam to group modal state & handlers
  selectedExamForGroup: any = null;
  processingAddToGroup: boolean = false;

  allExamGroupsForDropdown: ExamGroupDto[] = [];
  loadingExamGroupsDropdown: boolean = false;

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
  isFilterOpen: boolean = false;
  searchSubject: Subject<string> = new Subject<string>();

  constructor(
    private router: Router,
    public assessmentList: AllAssessmentsService,
    private assessmentService: AssessmentsService,
    private modalService: NgbModal,
    private notifier: NotifierService,
    private _itemService: ItemServiceService,
    private userService: UserService,
  ) { }

  ngOnDestroy(): void {
    console.log(this.assessmentService.activeAssessment);
    this.searchSubject.complete();
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

    this.currentUser = this.userService.getCurrentUser();

    if (this.currentUser.authorities[0] == Role.MARKER) {
      this.isCurrentUserMarker = true;
    }

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
          this.assessments = null;
          this.loading = false;
        }
      );
  }

  applyFilters() {
    this.pageNo = 1; // reset page to 1 on filter
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

  getDeliveryMethod(method: string) {
    return this.deliveryMethodsWithLabel.find(item => item.value == method)
  }

  setDeliveryMode(value: string) {
    this.newAssessment.deliveryMethod = ''

    if (value == 'BYOD') {
      this.newAssessment.deliveryMethod = this.deliveryMethodsList.BYOD
    } else if (value == 'E-Paper') {
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
    this.loadingExamGroupsDropdown = true;
    this.assessmentService.fetchExamGroups(0, 1000).subscribe({
      next: (res) => {
        this.loadingExamGroupsDropdown = false;
        this.allExamGroupsForDropdown = res.data || [];
      },
      error: () => {
        this.loadingExamGroupsDropdown = false;
      }
    });
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

  // setCurrentAssessment(assessment: SingleAssessment) {
  //   this.assessmentService.activeAssessment = assessment.name;
  //   this._itemService.setItem('activeAssessment', assessment.name);
  //   this.assessmentService.activeAssessmentId = assessment.id;
  //   this.assessmentService.schedulerAssessmentId = assessment.schId;
  //   this.assessmentService.activeAssessmentDeliveryMethod =
  //     assessment.deliveryMethod;
  //   this._itemService.setItem('activeAssessmentDeliveryMethod', assessment.deliveryMethod);
  // }

  setCurrentAssessment(assessment: any) {
    this.assessmentService.activeAssessment = assessment.name;
    this._itemService.setItem('activeAssessment', assessment.name);
    // In v2 API, bank_id is the item bank ID (previously id), and id is the schedule ID (previously schId)
    this.assessmentService.activeAssessmentId = assessment.bank_id;
    this.assessmentService.schedulerAssessmentId = assessment.id;
    this.assessmentService.activeAssessmentDeliveryMethod = assessment.delivery_method;
    this._itemService.setItem('activeAssessmentDeliveryMethod', assessment.delivery_method);
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
    this.pageNo = event.page + 1; // Use event.page + 1 because v2 API is 1-indexed for page
    //this.fetchAssessmentCenters(this.centerPage, this.centerSize);
    this.fetchAssessments();
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
    this.assessmentService.createExamGroup(this.newGroupName.trim()?.toUpperCase()).subscribe({
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
        this.examGroups = res.data || [];
        this.totalGroups = res.total || 0;
      },
      error: (err) => {
        this.processingGroupsList = false;
        this.notifier.notify("error", err?.error?.error ?? "Failed to fetch groups");
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
          error: (err) => {
            this.notifier.notify("error", err?.error?.error ?? "Failed to delete group");
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
        this.examsInGroup = (res.data || []).map((item: any) => ({
          id: item.assessment_id,
          name: item.assessment_name,
          createdDate: item.assessment_start_date || item.assessment_end_date || null
        }));
        this.totalExams = res.total || 0;
      },
      error: (err) => {
        this.processingExamsList = false;
        this.notifier.notify("error", err?.error?.error ?? "Failed to fetch group exams");
      }
    });
  }

  onExamsPageChange(event: any) {
    this.examsPageSize = event.rows;
    this.examsPage = event.page;
    this.loadExamsInGroupPage();
  }

  removeExamFromGroup(examId: string) {
    this.removingExamId = examId;
    this.assessmentService.removeExamFromGroup(this.selectedGroupId, examId).subscribe({
      next: () => {
        this.removingExamId = null;
        this.notifier.notify("success", "Exam removed from group");
        if (this.examsInGroup.length === 1 && this.examsPage > 0) {
          this.examsPage--;
        }
        this.loadExamsInGroupPage();
        this.loadExamGroupsPage();
      },
      error: (err) => {
        this.removingExamId = null;
        this.notifier.notify("error", err?.error?.error ?? "Failed to remove exam");
      }
    });
  }


  openAddToGroupModal(content: any, exam: any) {
    this.selectedExamForGroup = exam;
    this.groupsPage = 0;
    this.groupsPageSize = 5;
    this.totalGroups = 0;
    this.examGroups = [];
    this.modalService.open(content, { centered: true, size: "lg" });
    this.loadExamGroupsPage();
  }

  addExamToSelectedGroup(group: ExamGroupDto) {
    if (!this.selectedExamForGroup) return;
    this.processingAddToGroup = true;
    const examSchId = this.selectedExamForGroup.schId || this.selectedExamForGroup.id;
    this.assessmentService.addExamToGroup(group.id, examSchId).subscribe({
      next: () => {
        this.processingAddToGroup = false;
        this.notifier.notify("success", `Exam added to group "${group.name}" successfully`);
        this.modalService.dismissAll();
        this.selectedExamForGroup = null;
      },
      error: (err) => {
        this.processingAddToGroup = false;
        this.notifier.notify("error", err?.error?.error ?? "Failed to add exam to group");
      }
    });
  }

  openEditGroupModal(content: any, group: ExamGroupDto) {
    this.editingGroup = group;
    this.editingGroupName = group.name;
    this.modalService.open(content, { centered: true, size: "md" });
  }

  submitEditGroup(form: any) {
    if (!this.editingGroup) return;
    if (!this.editingGroupName || this.editingGroupName.trim() === "") {
      this.notifier.notify("error", "Group name is required");
      return;
    }
    this.processingEditGroup = true;
    this.assessmentService.editExamGroup(this.editingGroup.id, this.editingGroupName.trim()?.toUpperCase()).subscribe({
      next: () => {
        this.processingEditGroup = false;
        this.notifier.notify("success", "Exam group renamed successfully");
        this.modalService.dismissAll();
        this.editingGroup = null;
        this.editingGroupName = "";
        this.openViewGroupsModal(this.viewGroupsModal);
      },
      error: (err) => {
        this.processingEditGroup = false;
        this.notifier.notify("error", err?.error?.message || "Failed to rename group");
      }
    });
  }
}
