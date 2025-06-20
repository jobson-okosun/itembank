import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { SchedulerService } from "../../services/scheduler.service";
import { HttpErrorResponse } from "@angular/common/http";
import {
  IAssessmentBatchDTO,
  ICenter,
  ICenters,
  IEditAssessmentParticipantDTO,
  IMovePartipantToCenter,
  IMovePartipantToGroup,
  INewAssessmentParticipantFieldValue,
  IParticipantForEdit,
  IParticipantList,
  IParticipantSearchEnum,
  ISearchParticipant,
  ISectionGroups,
  ISuspendOrResumeParticipant,
} from "../../models/assessments";
import { NotifierService } from "angular-notifier";
import { IRegField } from "../../models/registration-fileds";
import { AssessmentsService } from "src/app/pages/assessment/service/assessments.service";
import { UserService } from "src/app/shared/user.service";

@Component({
  selector: "app-assessment-section-group-details",
  templateUrl: "./assessment-section-group-details.component.html",
  styleUrls: ["./assessment-section-group-details.component.scss"],
})
export class AssessmentSectionGroupDetailsComponent implements OnInit {
  ordersForm!: FormGroup;
  submitted = false;

  breadCrumbItems!: Array<{}>;
  // projectList!: projectListModel[];
  // document!: documentModel[];
  groupName: string = "";
  assessmentId: string = "";
  sectionGroupId: string = "";
  CustomersData: Array<any> = [];
  data!: IParticipantList;
  tableHeaders: any;
  headerKeys: string[] = [];
  tableContents: any[] = [];
  headersToMap: string[] = [];
  page: number = 0;
  size: number = 250;
  selectedParticipants: Array<string> = [];
  sectionGroups!: ISectionGroups;
  sectionGroupIdToMoveParticipantsTo: string;
  regFields: IRegField[];
  searchParticipantPayload: ISearchParticipant = {
    searchField: undefined,
    searchValue: "",
    dateRange: {
      end_date: "",
      start_date: "",
    },
    batchId: "",
  };
  searchableFields: Array<string> = Object.values(IParticipantSearchEnum);
  centerIdToMoveParticipantsTo: string = "";
  centers!: ICenters;
  currentAssessmentDeliveryMethod: string;
  currentAssessment: string;
  fetchingGroupParticipants: boolean = false;
  fetchingParticipantForEdit: boolean = false;
  participantForEdit: IParticipantForEdit;
  form: FormGroup;
  dateToEdit: string = "";
  processingEdit: boolean = false;
  isSearch: boolean = false;
  processingMoveToAnotherCenter: boolean = false;
  centerIdStringToMoveParticipantsTo: string = "";
  allCenters: ICenter[];
  dateRange: string = "";
  batches: IAssessmentBatchDTO[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private locationService: Location,
    private formBuilder: FormBuilder,
    private router: Router,
    private schedulerService: SchedulerService,
    private assessmentsService: AssessmentsService,
    private notifierService: NotifierService,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.currentAssessment = this.assessmentsService.activeAssessment;
    this.currentAssessmentDeliveryMethod =
      this.assessmentsService.activeAssessmentDeliveryMethod;
    this.form = this.fb.group({});
  }

  switchTab($event: any) {
    // console.log($event);
  }

  ngOnInit(): void {
    // console.log(this.assessmentsService.schedulerAssessmentId + "active id");
    this.activatedRoute.params.subscribe((params) => {
      //  console.log(params["groupName"])
      this.groupName = params["groupName"];
      this.sectionGroupId = params["sectionGroupId"];
      this.assessmentId = this.assessmentsService.schedulerAssessmentId;
    });
    this.breadCrumbItems = [
      { label: "Group Section" },
      { label: "Details", active: true },
    ];
    this.fetchAssessmentSectionGroupParticipants(
      this.assessmentId,
      this.sectionGroupId,
      0,
      250
    );

    this.fetchGroupDropDown(this.assessmentId);
    this.fetchRegistrationFields(this.assessmentId);
    this.fetchBatches(this.assessmentId);
    this.fetchAllCenters();
    // this.fetchAssessmentCenters(0, 250);
  }

  fetchBatches(assessmentId: string) {
    this.schedulerService.fetchBatch(assessmentId).subscribe({
      next: (value) => {
        this.batches = value;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error);
      },
    });
  }

  fetchAllCenters() {
    this.schedulerService
      .fetchAssessmentCenterWithoutPagination(this.assessmentId)
      .subscribe({
        next: (value) => {
          this.allCenters = value.centers;
          // this.fetchCenterAdmins(0, 5);
          // console.log(this.allCenters);
        },
        error: (err: HttpErrorResponse) => {
          // console.log(err);
        },
      });
  }

  openParticipantModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "lg", centered: true });
  }
  openImportModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openMoveParticipantModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openCopyParticipantModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openGroupNameEditModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openCustomFieldPage() {
    this.router.navigate(["/schedule/bank/group/custom-field-settings"]);
  }
  addParticipant() {
    Swal.fire({
      title: `Created Successfully`,
      // text: 'You clicked the button!',
      icon: "success",
      // showCancelButton: true,
      confirmButtonColor: "rgb(3, 142, 220)",
      cancelButtonColor: "rgb(243, 78, 78)",
      confirmButtonText: "OK",
    });
    this.modalService.dismissAll();
    // this.router.navigate(['group',this.groupName,'details' ])
  }
  captureParticipantId(id: string) {
    const participantIdAlreadyExist = this.selectedParticipants.find(
      (participantId) => participantId === id
    );
    if (participantIdAlreadyExist) {
      const indexToRemove = this.selectedParticipants.indexOf(
        participantIdAlreadyExist
      );
      this.selectedParticipants.splice(indexToRemove, 1);
    } else {
      this.selectedParticipants.push(id);
      // console.log(this.selectedParticipants);
    }
  }

  cancel() {
    // this.router.navigate(["group", this.groupName, "details"]);
    this.modalService.dismissAll();
  }
  goBack(): void {
    this.locationService.back();
  }

  fetchAssessmentSectionGroupParticipants(
    assessmentId: string,
    sectionGroupId: string,
    page?: number,
    size?: number
  ) {
    this.fetchingGroupParticipants = true;
    this.schedulerService
      .fetchSectionGroupParticipant(assessmentId, sectionGroupId, page, size)
      .subscribe({
        next: (value) => {
          this.fetchingGroupParticipants = false;
          this.data = value;
          this.setHeaders();
        },
        error: (err: HttpErrorResponse) => {
          this.fetchingGroupParticipants = false;
        },
      });
  }

  onSearchFieldChange(selectedField: string) {
    this.searchParticipantPayload.searchField =
      selectedField as IParticipantSearchEnum;
    this.searchParticipantPayload.searchValue = "";
    this.dateRange = "";
    if (selectedField !== IParticipantSearchEnum.BATCH) {
      delete this.searchParticipantPayload.batchId;
    }
    if (this.searchParticipantPayload.dateRange !== null) {
      this.searchParticipantPayload.dateRange.start_date = "";
      this.searchParticipantPayload.dateRange.end_date = "";
    }
    // console.log(selectedField);
  }

  clearSearch() {
    this.isSearch = false;
    // this.searchParticipantPayload.searchField = null;
    // this.searchParticipantPayload.searchValue = "";

    // if (this.searchParticipantPayload.dateRange !== null) {
    //   this.searchParticipantPayload.dateRange.end_date = "";
    //   this.searchParticipantPayload.dateRange.start_date = "";
    // }

    this.searchParticipantPayload = {
      searchField: null,
      searchValue: "",
      dateRange: {
        end_date: "",
        start_date: "",
      },
      batchId: "",
    };

    this.fetchAssessmentSectionGroupParticipants(
      this.assessmentId,
      this.sectionGroupId,
      0,
      250
    );
  }

  canPerformSearch(): boolean {
    if (
      this.searchParticipantPayload.searchField ===
        IParticipantSearchEnum.REG_DATE ||
      this.searchParticipantPayload.searchField ===
        IParticipantSearchEnum.REG_FIELD_DATE
    ) {
      if (this.dateRange.toUpperCase().split("TO").length !== 2) {
        return false;
      } else {
        return true;
      }
    } else if (this.searchParticipantPayload.searchValue === "") {
      return false;
    } else {
      return true;
    }
  }

  setHeaders() {
    this.headerKeys = [];
    this.headersToMap = [];
    this.tableHeaders = this.data.headers;
    this.headerKeys = Object.keys(this.tableHeaders);
    this.setContents();
  }

  setContents() {
    this.tableContents = this.data.content;
    // console.log(this.tableContents);
    // console.log(this.tableHeaders);
    for (let i = 0; i < this.headerKeys.length; i++) {
      // console.log(this.tableHeaders[i]);
      this.headersToMap.push(this.tableHeaders[i]);
    }

    // console.log(this.tableContents[0].fields["LAST NAME"]);
  }

  onPageChange(event: any) {
    // console.log(event);
    this.size = event.rows;
    this.page = event.page;
    // console.log(this.size);
    if (this.isSearch) {
      this.searchParticipant();
    } else {
      this.fetchAssessmentSectionGroupParticipants(
        this.assessmentId,
        this.sectionGroupId,
        this.page,
        this.size
      );
    }

    // console.log(this.data);
  }

  captureUserId(id: string) {
    const participantIdAlreadyExist = this.selectedParticipants.find(
      (participantId) => participantId === id
    );
    if (participantIdAlreadyExist) {
      const indexToRemove = this.selectedParticipants.indexOf(
        participantIdAlreadyExist
      );
      this.selectedParticipants.splice(indexToRemove, 1);
    } else {
      this.selectedParticipants.push(id);
      // console.log(this.selectedParticipants);
    }
  }

  moveParticipantsToAnotherSectionGroup() {
    const payload: IMovePartipantToGroup = {
      newGroupId: this.sectionGroupIdToMoveParticipantsTo,
      participantIds: this.selectedParticipants,
    };
    this.schedulerService
      .moveParticipantToAnotherSectionGroup(
        this.assessmentId,
        this.sectionGroupId,
        payload
      )
      .subscribe({
        next: (value) => {
          this.fetchAssessmentSectionGroupParticipants(
            this.assessmentId,
            this.sectionGroupId,
            0,
            250
          );
          this.notifierService.notify(
            "success",
            "Participant(s) moved successfully"
          );
          this.selectedParticipants = [];
          this.cancel();
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.message);
        },
      });
  }

  fetchGroupDropDown(assessmentId: string) {
    this.schedulerService.fetchAssessmentSectionGroups(assessmentId).subscribe({
      next: (value) => {
        this.sectionGroups = value;
      },
      error: (err: HttpErrorResponse) => {
        // console.log(err.error.message);
      },
    });
  }

  searchParticipant(page?: number, size?: number) {
    this.fetchingGroupParticipants = true;
    this.isSearch = true;

    if (
      this.searchParticipantPayload.searchField !==
        IParticipantSearchEnum.REG_DATE &&
      this.searchParticipantPayload.searchField !==
        IParticipantSearchEnum.REG_FIELD_DATE
    ) {
      this.searchParticipantPayload.dateRange = null;
    }
    switch (this.searchParticipantPayload.searchField) {
      case IParticipantSearchEnum.REG_DATE:
        this.searchParticipantPayload.dateRange.start_date =
          this.seperateDateRange(this.dateRange)[0];
        this.searchParticipantPayload.dateRange.end_date =
          this.seperateDateRange(this.dateRange)[1];
        // console.log(this.searchParticipantPayload);

        break;

      case IParticipantSearchEnum.REG_FIELD_DATE:
        this.searchParticipantPayload.dateRange.start_date =
          this.seperateDateRange(this.dateRange)[0];
        this.searchParticipantPayload.dateRange.end_date =
          this.seperateDateRange(this.dateRange)[1];

        break;
      default:
        break;
    }

    this.schedulerService
      .searchForParticipant(
        this.assessmentId,
        this.searchParticipantPayload,
        page ? page : 0,
        size ? size : 250
      )
      .subscribe({
        next: (value) => {
          this.fetchingGroupParticipants = false;
          this.data = value;
          this.setHeaders();
        },
        error: (err: HttpErrorResponse) => {
          this.fetchingGroupParticipants = false;
          this.notifierService.notify("error", err.error.message);
        },
      });
  }

  seperateDateRange(range: string): Array<string> {
    const seperatedRange = range.toUpperCase().split("TO");
    // console.log(seperatedRange);
    // console.log(range);
    return seperatedRange.map((item) => item.trimStart().trimEnd());
  }

  navigateToEditParticipantPage(participantId: string) {
    this.router.navigateByUrl(
      `schedule/participants/${participantId}/${this.assessmentId}/edit`
    );
  }

  sortFieldsByPlacement(participant: IParticipantForEdit) {
    // Convert the fields object to an array of [key, value] pairs
    const fieldEntriesArray = Object.entries(participant.fields);

    const sortedFieldEntriesArray = fieldEntriesArray.sort(
      ([, a], [, b]) => a.placement - b.placement
    );

    // Convert the sorted array back to an object
    const sortedFields = Object.fromEntries(sortedFieldEntriesArray);

    return {
      ...participant,
      fields: sortedFields,
    };
  }

  fetchRegistrationFields(assessmentId: string) {
    this.schedulerService.fetchRegistrationFields(assessmentId).subscribe({
      next: (value) => {
        this.regFields = value;
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify("error", err.error.message);
      },
    });
  }

  suspendOrResumeParticipant(participantId: string, flag: boolean) {
    const payload: ISuspendOrResumeParticipant = {
      flag: flag,
      participant_id: participantId,
    };
    this.schedulerService
      .suspendOrResumeParticipant(this.assessmentId, payload)
      .subscribe({
        next: (value) => {
          this.fetchAssessmentSectionGroupParticipants(
            this.assessmentId,
            this.sectionGroupId,
            0,
            250
          );
          this.notifierService.notify(
            "success",
            `${
              flag === true
                ? "Participant suspended"
                : "Participant set to resume"
            }`
          );
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.message);
        },
      });
  }

  moveParticipantToAnotherCenter() {
    this.processingMoveToAnotherCenter = true;

    const payload: IMovePartipantToCenter = {
      newCenterId: this.centerIdToMoveParticipantsTo,
      participantIds: this.selectedParticipants,
    };

    const foundSelectedPartFromTableData = this.tableContents.filter(
      (participant) => this.selectedParticipants.includes(participant.id)
    );

    const foundParticipantToMoveWithTheSameCenterId =
      foundSelectedPartFromTableData.find(
        (participant) =>
          participant.centerId === this.centerIdStringToMoveParticipantsTo
      );

    if (foundParticipantToMoveWithTheSameCenterId) {
      this.notifierService.notify(
        "error",
        `cannot move participant ${foundParticipantToMoveWithTheSameCenterId.fields["FIRST NAME"]} to the same center: ${this.centerIdStringToMoveParticipantsTo}`
      );
      this.processingMoveToAnotherCenter = false;

      return;
    }
    this.schedulerService
      .moveParticipantToAnotherCenter(
        this.assessmentId,
        this.assessmentId,
        payload
      )
      .subscribe({
        next: (value) => {
          this.notifierService.notify(
            "success",
            "participant(s) moved to new center"
          );
          this.selectedParticipants = [];
          this.cancel();
          this.fetchAssessmentSectionGroupParticipants(
            this.assessmentId,

            this.sectionGroupId,
            0,
            250
          );
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.message);
        },
      });
  }

  getSelectedCenterInfo(e: ICenter) {
    if (e !== undefined) {
      this.centerIdStringToMoveParticipantsTo = e.centerId;
    }
  }

  fetchAssessmentCenters(page: number, size: number) {
    this.schedulerService
      .fetchAssessmentCenters(this.assessmentId, page, size)
      .subscribe({
        next: (value) => {
          this.centers = value;
          // console.log(this.centers);
        },
        error: (err: HttpErrorResponse) => {
          // console.log(err.error.message);
        },
      });
  }

  checkOrUncheckAllParticipantId(event: any) {
    if (event.target.checked) {
      this.selectedParticipants = [];
      this.tableContents.forEach((value) => {
        this.selectedParticipants.push(value.id);
      });
      // console.log(this.selectedParticipants);
    } else {
      this.selectedParticipants = [];
    }
  }
  keys(obj: any): Array<string> {
    return Object.keys(obj);
  }

  onSubmit() {
    const fieldValues: INewAssessmentParticipantFieldValue[] = this.keys(
      this.participantForEdit.fields
    ).map((key) => ({
      value:
        this.participantForEdit.fields[key].field_type === "CALENDAR"
          ? this.dateToEdit
          : this.form.value[this.participantForEdit.fields[key].field_name],
      assessment_id: this.participantForEdit.assessmentId,
      org_id: this.userService.getCurrentUser().org_id,
      registration_field_id: this.participantForEdit.fields[key].field_id,
      assessment_participant_id: this.participantForEdit.id,
      values: this.participantForEdit.fields[key].field_values,
    }));

    const editAssessmentParticipantDTO: IEditAssessmentParticipantDTO = {
      assessmentId: this.participantForEdit.assessmentId,
      fieldValues: fieldValues,
      id: this.participantForEdit.id,
    };
    this.editParticipant(editAssessmentParticipantDTO);
    // console.log(this.form.value);
    // console.log(editAssessmentParticipantDTO);
  }

  editParticipant(editAssessmentParticipantDTO: IEditAssessmentParticipantDTO) {
    this.processingEdit = true;
    this.schedulerService
      .editParticipant(editAssessmentParticipantDTO)
      .subscribe({
        next: (value) => {
          this.processingEdit = false;
          this.notifierService.notify(
            "success",
            "Participant Details updated successfully"
          );
          this.modalService.dismissAll();
          this.fetchAssessmentSectionGroupParticipants(
            this.assessmentId,
            this.sectionGroupId,
            0,
            250
          );
        },
        error: (err: HttpErrorResponse) => {
          this.processingEdit = false;
          this.notifierService.notify("error", err.error.message);
        },
      });
  }
}
