import { Component, OnInit } from "@angular/core";
import {
  IAssessmentBatchDTO,
  ICenter,
  ICenters,
  IEditAssessmentParticipantDTO,
  IFieldValue,
  IMovePartipantToCenter,
  IMovePartipantToGroup,
  INewAssessmentParticipantFieldValue,
  IParticipant,
  IParticipantBatchMovementDTO,
  IParticipantContent,
  IParticipantDashboard,
  IParticipantForEdit,
  IParticipantList,
  IParticipantSearchEnum,
  ISearchParticipant,
  ISectionGroup,
  ISectionGroups,
  ISuspendOrResumeParticipant,
} from "../../models/assessments";
import { SchedulerService } from "../../services/scheduler.service";
import { Subscription } from "rxjs";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { NotifierService } from "angular-notifier";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { IRegField } from "../../models/registration-fileds";
import * as saveAs from "file-saver";
import { AssessmentsService } from "src/app/pages/assessment/service/assessments.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "src/app/shared/user.service";

@Component({
  selector: "app-assessment-participants",
  templateUrl: "./assessment-participants.component.html",
  styleUrls: ["./assessment-participants.component.scss"],
})
export class AssessmentParticipantsComponent implements OnInit {
  file!: File;
  data!: IParticipantList;
  tableHeaders: any;
  headerKeys: string[] = [];
  tableContents: Array<IParticipantContent> = [];
  headersToMap: string[] = [];
  routeSub!: Subscription;
  assessmentId: string = "";
  processingImport: boolean = false;
  searchableFields: Array<string> =  Object.values(
    IParticipantSearchEnum
  ); 
  searchParticipantPayload: ISearchParticipant = {
    searchField: undefined,
    searchValue: "",
    dateRange: {
      end_date: "",
      start_date: "",
    },
    batchId: ''
  };
  isSearch: boolean = false;
  capturedData: IFieldValue[] = [];
  registrationFields: IRegField[] = [];
  processingAddParticipant: boolean = false;
  selectedSectionGroupToAddParticipant: string = "";
  selectedCentedId: string;
  processingTemplateDownload: boolean = false;
  assessmentSectionGroups!: ISectionGroups;
  allCenters: ICenters["centers"] = [];
  page: number = 0;
  size: number = 0;
  processingFetchParticipants: boolean = false;
  passportFile!: File;
  processingPassportImport: boolean = false;
  selectedParticipants: Array<string> = [];
  centerIdToMoveParticipantsTo: string = "";
  moveOptions: Array<string> = ["New Center", "New Section"];
  sectionGroupIdToMoveParticipantsTo: string = "";
  batchIdToMoveParticipantsTo: string = "";
  isFormValid: boolean = false;

  participantDashboardData: IParticipantDashboard;
  calendarValue: string = "";
  processingMoveToAnotherCenter: boolean = false;
  processingMoveToAnotherGroup: boolean = false;
  canMoveParticipantToNewCenter: boolean = true;
  canMoveParticipantToNewGroup: boolean = true;
  participantForEdit: IParticipantForEdit;
  form: FormGroup;
  processingEdit: boolean = false;
  fetchingParticipantForEdit: boolean = false;
  dateToEdit: string = "";
  // currentParticipantGroupId: string = "";
  centerIdStringToMoveParticipantsTo: string = "";
  sectionGroupNameToMoveParticipantsTo: string = "";
  dateRange: string = "";
  batches: Array<IAssessmentBatchDTO>;
  selectedBatchToAddParticipant: string = "";
  processingMoveToAnotherBatch: boolean;

  constructor(
    private schedulerService: SchedulerService,
    private activatedRoute: ActivatedRoute,
    private notifierService: NotifierService,
    private modalService: NgbModal,
    private router: Router,
    private itembankAssessmentService: AssessmentsService,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    /* this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.assessmentId = params["assessmentId"];
    }); */
    this.assessmentId = this.itembankAssessmentService.schedulerAssessmentId;
    this.fetchAssessmentRegFields();
    this.fetchParticipants(0, 250);
    this.fetchAllCentersForAddAdmin();
    this.fetchAssessmentSectionGroups(this.assessmentId);

    this.fetchParticipantsDashboard(this.assessmentId);
    this.fetchBatches(this.assessmentId);
  }
  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  cancel() {
    this.modalService.dismissAll();
  }

  openModal(content: any) {
    this.modalService.open(content, { size: "lg", centered: true });
  }
  captureFormValue(
    regFieldId: string,
    inputValue?: string,
    inputType?: string
  ) {
    // console.log(regFieldId + "" + inputValue);
    // console.log(this.calendarValue);
    let fieldValue: IFieldValue = {
      assessment_id: this.assessmentId,
      registration_field_id: regFieldId,
      value: inputType === "CALENDAR" ? this.calendarValue : inputValue,
      values: [],
    };
    if (this.checkIfInCapturedDataArray(regFieldId)) {
      const indexOfObject = this.capturedData.findIndex((object): boolean => {
        return object.registration_field_id === regFieldId;
      });
      this.capturedData[indexOfObject].value = inputValue.trim();
    } else {
      this.capturedData.push(fieldValue);
    }
    // console.log(this.capturedData);
  }

  checkIfInCapturedDataArray(registrationField_id: string): boolean {
    let itemFound = this.capturedData.find(
      (item) => item.registration_field_id === registrationField_id
    );

    if (itemFound != null) {
      return true;
    }

    return false;
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

  checkForValidEmail(): boolean {
    const emailField = this.registrationFields.find(
      (field) => field.name.toLowerCase() === "email"
    );
    const validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const isValidEmail = this.capturedData.find(
      (data) =>
        data.registration_field_id === emailField?.id &&
        data.value.match(validEmailRegex)
    );
    if (!isValidEmail) {
      this.notifierService.notify("error", "email is not valid");
      this.processingAddParticipant = false;
      return false;
    }
    return true;
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

  downloadRegFieldTemplate() {
    this.processingTemplateDownload = true;
    this.schedulerService
      .downloadRegFieldTemplate(this.assessmentId)
      .subscribe({
        next: (blob) => {
          saveAs(blob, "file");
          this.processingTemplateDownload = false;
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.message);
          this.processingTemplateDownload = false;
        },
      });
  }
  addParticipant() {
    this.processingAddParticipant = true;
    let fieldsCheckPassed = true;

    let missingCount = 0;

    // console.log(this.capturedData, "captured data");
    // console.log(this.registrationFields, "reg fields");
    let regFieldsNotset: IRegField[] = [];

    //  run mandatory check
    this.registrationFields.forEach((field: IRegField) => {
      if (field.mandatory && missingCount <= 1) {
        const isFieldMissing = !this.capturedData.some(
          (data) => data.registration_field_id === field.id
        );

        if (isFieldMissing) {
          fieldsCheckPassed = false;

          this.notifierService.notify("error", `${field.name} is mandatory`);
          missingCount++;
        }
      }
    });
    //  check valid email
    // const validEmailRegex =
    //   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // const isValidEmail = this.capturedData.find(
    //   (data) =>
    //     data.registration_field_id === emailField?.id &&
    //     data.value.match(validEmailRegex)
    // );
    // if (!isValidEmail) {
    //   this.notifierService.notify("error", "email is not valid");
    // }

    // return

    this.processingAddParticipant = false;

    if (fieldsCheckPassed && this.checkForValidEmail()) {
      this.processingAddParticipant = true;

      this.registrationFields.forEach((regField) => {
        const foundUnsetField = this.capturedData.find(
          (field) => regField.id == field.registration_field_id
        );

        if (foundUnsetField === undefined) {
          regFieldsNotset.push(regField);
          // console.log(regField, "regFieldnotset");
        } else {
          // console.log(foundUnsetField, "regFieldSet");
        }

        // if(foundField){
        //   let payloadWithoutValue: IFieldValue = {
        //     assessment_id: this.assessmentId,
        //     registration_field_id:

        //   };
        //   this.capturedData.push(payloadWithoutValue);

        //   console.log(foundField);
        // }
      });

      regFieldsNotset.forEach((field) => {
        let unsetCapturedField: IFieldValue = {
          assessment_id: field.assessment_id,
          registration_field_id: field.id,
          value: "",
          values: [],
        };
        this.capturedData.push(unsetCapturedField);
      });
      let payload: IParticipant = {
        assessmentId: this.assessmentId,
        groupId: this.selectedSectionGroupToAddParticipant,
        fieldValues: this.capturedData,
        centerId: this.selectedCentedId,
        batch: this.selectedBatchToAddParticipant
          ? this.selectedBatchToAddParticipant
          : null,
      };
      // console.log(payload);
      // console.log(this.selectedSectionGroupToAddParticipant);

      // return

      this.schedulerService.addParticipantToAssessment(payload).subscribe({
        next: (value) => {
          this.processingAddParticipant = false;
          this.notifierService.notify(
            "success",
            "Participant Added Successfully"
          );
          this.fetchParticipants(0, 250);
          this.modalService.dismissAll();
        },
        error: (err: HttpErrorResponse) => {
          this.processingAddParticipant = false;

          this.notifierService.notify("error", err.error.error);
        },
      });
    }

    // console.log(mandatory);
    // return;
  }
  fetchParticipants(page: number, size: number) {
    this.tableContents = [];
    this.processingFetchParticipants = true;
    this.schedulerService
      .fetchParticipants(this.assessmentId, page, size)
      .subscribe({
        next: (value) => {
          this.data = value;
          // console.log(this.data);
          this.setHeaders();
          this.processingFetchParticipants = false;
        },
        error: (err: HttpErrorResponse) => {
          // console.log(err);
          this.processingFetchParticipants = false;
        },
      });
  }

  fetchAssessmentRegFields() {
    this.schedulerService.fetchRegistrationFields(this.assessmentId).subscribe({
      next: (value) => {
        this.registrationFields = value;
        // console.log(value);
      },
      error: (err: HttpErrorResponse) => {
        // console.log(err.error.message);
      },
    });
  }

  setHeaders() {
    this.headerKeys = [];
    this.headersToMap = [];
    this.tableHeaders = this.data.headers;
    // console.log("headers", this.tableHeaders);

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

  importParticipants() {
    const formData = new FormData();
    formData.append("file", this.file);
    this.processingImport = true;

    this.schedulerService
      .uploadParticipantFile(this.assessmentId, formData)
      .subscribe({
        next: (value) => {
          this.notifierService.notify("success", "Imported Successfully");
          this.processingImport = false;
          this.modalService.dismissAll();
          this.fetchParticipants(0, 250);
          this.fetchParticipantsDashboard(this.assessmentId);
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.error);
          this.processingImport = false;
        },
      });
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  onPassportFileSelected(event: any) {
    // console.log(event.target.files[0]);
    this.passportFile = event.target.files[0];
    // console.log(this.passportFile);
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

  searchParticipant(page?: number, size?: number) {
    this.processingFetchParticipants = true;
    this.isSearch = true;

    if (
      this.searchParticipantPayload.searchField !==
        IParticipantSearchEnum.REG_DATE &&
      this.searchParticipantPayload.searchField !==
        IParticipantSearchEnum.REG_FIELD_DATE
    ) {
      console.log("i got here");
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

    // console.log(this.searchParticipantPayload);

    this.schedulerService
      .searchForParticipant(
        this.assessmentId,
        this.searchParticipantPayload,
        page ? page : 0,
        size ? size : 250
      )
      .subscribe({
        next: (value) => {
          this.searchParticipantPayload = {
            searchField: this.searchParticipantPayload.searchField,
            searchValue: this.searchParticipantPayload.searchValue,
            dateRange: {
              end_date: "",
              start_date: "",
            },
            batchId: this.searchParticipantPayload.batchId
          };
          this.processingFetchParticipants = false;
          this.data = value;
          this.setHeaders();
        },
        error: (err: HttpErrorResponse) => {
          this.processingFetchParticipants = false;
          this.notifierService.notify("error", err.error.error);
          // console.log(err.error.error);
        },
      });
  }

  seperateDateRange(range: string): Array<string> {
    const seperatedRange = range.toUpperCase().split("TO");
    // console.log(seperatedRange);
    // console.log(range);
    return seperatedRange.map((item) => item.trimStart().trimEnd());
  }

  fetchAllCentersForAddAdmin() {
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

  onPageChange(event: any) {
    // console.log(event);
    this.size = event.rows;
    this.page = event.page;
    // console.log(this.size);
    if (this.isSearch) {
      this.searchParticipant(this.page, this.size);
    } else {
      this.fetchParticipants(this.page, this.size);
    }

    // console.log(this.data);
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
          this.fetchParticipants(0, 250);
          this.fetchParticipantsDashboard(this.assessmentId);
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

  clearSearch() {
    this.isSearch = false;
    this.searchParticipantPayload.searchField = null;
    this.searchParticipantPayload.searchValue = "";
    if (this.searchParticipantPayload.dateRange !== null) {
      this.searchParticipantPayload.dateRange.end_date = "";
      this.searchParticipantPayload.dateRange.start_date = "";
    }

    this.fetchParticipants(0, 250);
  }

  goToRegFieldSettingsPage() {
    this.router.navigate([
      `schedule/participants/details/${this.assessmentId}/reg-field-settings`,
    ]);
  }

  fetchAssessmentSectionGroups(assessmentId: string) {
    this.schedulerService.fetchAssessmentSectionGroups(assessmentId).subscribe({
      next: (value) => {
        this.assessmentSectionGroups = value;
      },
      error: (err: HttpErrorResponse) => {
        // console.log(err.error.message);
      },
    });
  }

  uploadPassport() {
    this.processingPassportImport = true;
    const formData = new FormData();
    formData.append("file", this.passportFile);

    // console.log(formData, this.passportFile);
    this.schedulerService
      .uploadParticipantsPassport(this.assessmentId, formData)
      .subscribe({
        next: (value) => {
          this.processingPassportImport = false;
          this.modalService.dismissAll();
          this.notifierService.notify(
            "success",
            "Passports uploaded successfully"
          );
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.message);
          this.processingPassportImport = false;
        },
      });
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
  // captureParticipantCenterId(id: string) {
  //   this.currentParticipantCenterId = id;
  //   console.log(id);
  // }

  // captureParticipantGroupId(id: string) {
  //   this.currentParticipantGroupId = id;
  //   console.log(id);
  // }

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
      this.canMoveParticipantToNewCenter = false;
      this.notifierService.notify(
        "error",
        `cannot move participant ${foundParticipantToMoveWithTheSameCenterId.fields["FIRST NAME"]} to the same center: ${this.centerIdStringToMoveParticipantsTo}`
      );
      this.processingMoveToAnotherCenter = false;

      return;
    }

    // const result = this.tableContents.forEach((participant, i) => {
    //   participant.id = this.selectedParticipants[i];
    //   //  find participant in the tablecontent array from selected participant array, get thier group id
    //   // check if any of them is being move to the same group
    // });
    // console.log(found, "found");

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
          this.processingMoveToAnotherCenter = false;
          this.cancel();
          this.ngOnInit();
        },
        error: (err: HttpErrorResponse) => {
          this.processingMoveToAnotherCenter = false;
          this.notifierService.notify("error", err.error.message);
        },
      });
  }

  moveParticipantsToAnotherSectionGroup() {
    this.processingMoveToAnotherGroup = true;

    const foundSelectedPartFromTableData = this.tableContents.filter(
      (participant) => this.selectedParticipants.includes(participant.id)
    );

    const foundParticipantToMoveWithTheSameGroupId =
      foundSelectedPartFromTableData.find(
        (participant) =>
          participant.groupName === this.sectionGroupNameToMoveParticipantsTo
      );

    if (foundParticipantToMoveWithTheSameGroupId) {
      this.notifierService.notify(
        "error",
        `cannot move participant ${foundParticipantToMoveWithTheSameGroupId.fields["FIRST NAME"]} to the same group: ${this.sectionGroupNameToMoveParticipantsTo}`
      );
      this.processingMoveToAnotherGroup = false;

      return;
    }

    const payload: IMovePartipantToGroup = {
      newGroupId: this.sectionGroupIdToMoveParticipantsTo,
      participantIds: this.selectedParticipants,
    };
    this.schedulerService
      .moveParticipantToAnotherSectionGroup(
        this.assessmentId,
        this.assessmentId,
        payload
      )
      .subscribe({
        next: (value) => {
          // this.fetchParticipants(0, 250);
          this.notifierService.notify(
            "success",
            "Participant(s) moved successfully"
          );
          this.processingMoveToAnotherGroup = false;
          this.selectedParticipants = [];
          this.cancel();
          this.ngOnInit();
        },
        error: (err: HttpErrorResponse) => {
          this.processingMoveToAnotherGroup = false;
          this.notifierService.notify("error", err.error.message);
        },
      });
  }
  moveParticipantsToAnotherBatch() {
    this.processingMoveToAnotherBatch = true;

    const foundSelectedPartFromTableData = this.tableContents.filter(
      (participant) => this.selectedParticipants.includes(participant.id)
    );

    const foundParticipantToMoveWithTheSameBatchId =
      foundSelectedPartFromTableData.find(
        (participant) =>
          participant.batch_id === this.batchIdToMoveParticipantsTo
      );

    if (foundParticipantToMoveWithTheSameBatchId) {
      this.notifierService.notify(
        "error",
        `cannot move participant ${foundParticipantToMoveWithTheSameBatchId.fields["FIRST NAME"]} to the same batch`
      );
      this.processingMoveToAnotherBatch = false;

      return;
    }

    const payload: IParticipantBatchMovementDTO = {
      newBatchId: this.batchIdToMoveParticipantsTo,
      participantIds: this.selectedParticipants,
    };
    this.schedulerService
      .moveParticipantToBatch(payload, this.assessmentId)
      .subscribe({
        next: (value) => {
          // this.fetchParticipants(0, 250);
          this.notifierService.notify(
            "success",
            "Participant(s) moved to new batch successfully"
          );
          this.processingMoveToAnotherBatch = false;
          this.selectedParticipants = [];
          this.cancel();
          this.ngOnInit();
        },
        error: (err: HttpErrorResponse) => {
          this.processingMoveToAnotherBatch = false;
          this.notifierService.notify("error", err.error.message);
        },
      });
  }

  fetchParticipantsDashboard(aseesmentId: string) {
    this.schedulerService.fetchParticipantsDashboard(aseesmentId).subscribe({
      next: (value) => {
        this.participantDashboardData = value;
      },
      error: (err: HttpErrorResponse) => {
        // console.log(err.error.message);
      },
    });
  }
  getSelectedCenterInfo(e: ICenter) {
    if (e !== undefined) {
      this.centerIdStringToMoveParticipantsTo = e.centerId;
    }
    // this.canMoveParticipantToNewCenter = true;
    // if (e.centerId === this.currentParticipantCenterId) {
    //   this.canMoveParticipantToNewCenter = false;
    //   this.notifierService.notify(
    //     "error",
    //     `Cannot move participant to the same center ${e.centerId}`
    //   );
    // }
  }

  getSelectedBatchInfo(e: IAssessmentBatchDTO) {
    if (e !== undefined) {
      this.batchIdToMoveParticipantsTo = e.id;
    }
  }

  getSelectedGroupInfo(e: ISectionGroup) {
    if (e !== undefined) {
      this.sectionGroupNameToMoveParticipantsTo = e.groupName;
    }
    // this.canMoveParticipantToNewGroup = true;
    // if (e.groupName === this.currentParticipantGroupId) {
    //   this.canMoveParticipantToNewCenter = false;
    //   this.notifierService.notify(
    //     "error",
    //     `Cannot move participant to the same group ${e.groupName}`
    //   );
    // }
  }

  navigateToEditPage(participantId: string) {
    this.router.navigateByUrl(
      `schedule/participants/${participantId}/${this.assessmentId}/edit`
    );
  }

  keys(obj: any): Array<string> {
    return Object.keys(obj);
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
          this.fetchParticipants(0, 250);
        },
        error: (err: HttpErrorResponse) => {
          this.processingEdit = false;
          this.notifierService.notify("error", err.error.error);
        },
      });
  }

  // convertHeaderToSentenceCase(header: string): string {
  //   return header.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
  // }
}
