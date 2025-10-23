import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";
import { Location } from "@angular/common";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  ICenterDetail,
  ICenterFilters,
  ICenters,
  IEditAssessmentParticipantDTO,
  IMovePartipantToCenter,
  IMovePartipantToGroup,
  INewAssessmentCenter,
  INewAssessmentParticipantFieldValue,
  INewCenterFilters,
  IParticipantForEdit,
  IParticipantList,
  IParticipantSearchEnum,
  ISearchParticipant,
  ISectionGroups,
  ISuspendOrResumeParticipant,
  OperatorType,
} from "../../models/assessments";
import { SchedulerService } from "../../services/scheduler.service";
import { HttpErrorResponse } from "@angular/common/http";
import { IRegField} from "../../models/registration-fileds";
import { NotifierService } from "angular-notifier";
import { Subscription } from "rxjs";
import { UserService } from "src/app/shared/user.service";
import { AssessmentsService } from "src/app/pages/assessment/service/assessments.service";
import { states } from "./center-states/data";

interface ICondition {
  fieldName: string;
  fieldValues: string[];
  fieldType: string;
  selectedValue?: string;
  filterId: string;
  operatorType: OperatorType | null;
}
@Component({
  selector: "app-edit-assessment-center",
  templateUrl: "./edit-assessment-center.component.html",
  styleUrls: ["./edit-assessment-center.component.scss"],
})
export class EditAssessmentCenterComponent implements OnInit {
  breadCrumbItems!: Array<{}>;

  Sections = [{ name: "1" }, { name: "2" }, { name: "3" }];

  data!: IParticipantList;
  tableHeaders: any;
  headerKeys: string[] = [];
  tableContents: any;
  headersToMap: string[] = [];
  centerFilters: ICenterFilters[] = [];
  regFields: IRegField[] = [];
  conditions: ICondition[] = [];
  payload!: INewCenterFilters;
  showSaveButton: boolean = false;
  assessmentId: string = "";
  centerId: string = "";
  routeSub!: Subscription;
  centerDetails!: ICenterDetail;
  opertatorTypes: OperatorType[] = [OperatorType.EQUAL];
  centerStates: Array<String> = states;
  fetchingCenterDetails: boolean = false;
  fetchingParticipantInCenter: boolean = false;
  participantForEdit: IParticipantForEdit;
  form: FormGroup;
  processingEdit: boolean = false;
  fetchingParticipantForEdit: boolean = false;
  dateToEdit: string = "";
  sectionGroupIdToMoveParticipantsTo: string = "";
  centerIdToMoveParticipantsTo: string = "";
  sectionGroupId: string = "";

  processingCenterEdit: boolean = false;
  selectedParticipants: string[] = [];
  page: number = 0;
  size: number = 0;
  isSearch: boolean = false;
  searchParticipantPayload: ISearchParticipant = {
    searchField: undefined,
    searchValue: "",
    dateRange: null,
    batchId: ''
  };
  currentParticipantCenterId: string = "";
  searchableFields: Array<string> = ["CENTER_ID", "GROUP_NAME", "REG_FIELD"];
  assessmentSectionGroups: ISectionGroups;
  centers: ICenters;

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private locationService: Location,
    private formBuilder: FormBuilder,
    private router: Router,
    private schedulerService: SchedulerService,
    private notifierService: NotifierService,
    private activatedRoute: ActivatedRoute,
    private userAccountService: UserService,
    private itemBankAssessmentService: AssessmentsService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Assessment" },
      { label: "Centers", active: true },
    ];
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.assessmentId = params["assessmentId"];
      this.centerId = params["centerId"];
    });
    this.fetchCenterDetails();
    // this.fetchParticipantsInCenter(this.assessmentId, this.centerId, 0, 250);
    // this.fetchAssessmentSectionGroups(this.assessmentId);
    // this.fetchAssessmentCenters();

    // this.fetchCenterFilters();

    // this.fetchRegFields();
  }

  openParticipantModal(content: any) {
    // this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openImportModal(content: any) {
    // this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openMoveParticipantModal(content: any) {
    // this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openCopyParticipantModal(content: any) {
    // this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openGroupNameEditModal(content: any) {
    // this.submitted = false;
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

  cancel() {
    // this.router.navigate(["group", this.groupName, "details"]);
    this.modalService.dismissAll();
  }
  goBack(): void {
    sessionStorage.setItem('schedule-trail-tab', 'centers')
    this.locationService.back();
  }

  removeCondition(index: number) {
    this.conditions.splice(index, 1);
  }

  fetchAssessmentCenters() {
    this.schedulerService
      .fetchAssessmentCenterWithoutPagination(this.assessmentId)
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

  suspendOrResumeParticipant(participantId: string, flag: boolean) {
    const payload: ISuspendOrResumeParticipant = {
      flag: flag,
      participant_id: participantId,
    };
    this.schedulerService
      .suspendOrResumeParticipant(this.assessmentId, payload)
      .subscribe({
        next: (value) => {
          this.fetchParticipantsInCenter(
            this.assessmentId,
            this.centerId,
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

  onSearchFieldChange(selectedField: string) {
    this.searchParticipantPayload.searchField =
      selectedField as IParticipantSearchEnum;
    // console.log(selectedField);
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
  captureParticipantCenterId(id: string) {
    this.currentParticipantCenterId = id;
    // console.log(id);
  }

  deleteFilter(filterId: string) {
    if (filterId)
      this.schedulerService
        .deleteFilter(this.assessmentId, this.centerId, filterId)
        .subscribe({
          next: (value) => {
            this.notifierService.notify("success", "Field deleted");
            this.fetchParticipantsInCenter(
              this.assessmentId,
              this.centerId,
              0,
              250
            );
          },
          error: (err: HttpErrorResponse) => {
            this.notifierService.notify("error", err.message);
          },
        });
  }

  save() {
    this.router.navigate(["/schedule/assessment/details"]);
  }

  fetchParticipantsInCenter(
    assessmentId: string,
    centerId: string,
    page: number,
    size: number
  ) {
    this.fetchingParticipantInCenter = true;
    this.schedulerService
      .fetchParticipantsInCenter(assessmentId, centerId, page, size)
      .subscribe({
        next: (value) => {
          this.data = value;
          this.setHeaders();
          this.fetchingParticipantInCenter = false;
        },
        error: (err: HttpErrorResponse) => {
          this.fetchingParticipantInCenter = false;
          // console.log(err);
        },
        // complete: () => {
        //   this.fetchCenterFilters();
        // },
      });
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
    for (let i = 0; i < this.headerKeys.length; i++) {
      // console.log(this.tableHeaders[i]);
      this.headersToMap.push(this.tableHeaders[i]);
    }

    // console.log(this.tableContents[0].fields["LAST NAME"]);
  }

  fetchCenterFilters() {
    this.schedulerService
      .fetchCenterFilters(this.assessmentId, this.centerId)
      .subscribe({
        next: (value) => {
          this.centerFilters = value;

          // this.conditions= this.centerFilters

          // console.log(this.conditions);
        },
        error: (err) => {},
        complete: () => {
          this.fetchRegFields();
        },
      });
  }

  fetchRegFields(): void {
    this.schedulerService.fetchRegistrationFields(this.assessmentId).subscribe({
      next: (value) => {
        this.regFields = value;
        // console.log(this.regFields);
        // this.regFields = this.regFields.filter(
        //   (field) => field.type_ != "TEXTBOX"
        // );
        // console.log(this.regFields);
      },
      error: (err: HttpErrorResponse) => {
        // console.log(err);
      },
      complete: () => {
        this.populateFields();
      },
    });
  }
  addConditions() {
    this.showSaveButton = false;
    this.conditions.push({
      fieldName: "",
      fieldValues: [],
      fieldType: "",
      filterId: "",
      operatorType: null,
    });
  }

  populateFields() {
    this.conditions = [];
    // console.log("called me?");

    if (this.centerFilters)
      this.centerFilters.forEach((filter) => {
        const field = this.regFields.find(
          (field) => field.name === filter.field_name
        );
        const fieldValues = field ? field.values : [];

        this.conditions.push({
          fieldName: filter.field_name,
          fieldValues: fieldValues,
          selectedValue: filter.field_value,
          fieldType: field!.type_,
          filterId: filter!.id.toString(),
          operatorType: filter.operator_type,
        });
      });
  }
  updateFieldValues(index: number, fieldName: string) {
    const foundField = this.regFields.find((field) => field.name === fieldName);
    this.conditions[index].fieldValues = foundField ? foundField.values : [];
    this.conditions[index].fieldType = foundField ? foundField.type_ : "";

    // console.log(this.conditions[index]);
  }

  captureSelectedValue(
    fieldValue: string,
    selectedValue: string,
    operatorType: string
  ) {
    const foundField = this.regFields.find(
      (field) => field.name === fieldValue
    );

    this.showSaveButton = true;

    this.payload = {
      assessmentId: this.assessmentId,
      centerId: this.centerId,
      fieldId: foundField!.id,
      fieldValue: selectedValue,
      operatorType: operatorType as OperatorType,
    };
    // this.payload.fieldId = foundField!.id;
    // this.payload.fieldValue = ;
    // this.payload.assessmentId = ;
    // this.payload.centerId = ;
    // console.log(this.payload);
  }
  getPayload(): INewCenterFilters {
    return this.payload;
  }
  saveFilter() {
    this.schedulerService.createCenterFilters(this.getPayload()).subscribe({
      next: (value) => {
        // console.log(value);
        this.notifierService.notify("success", "Filter saved");
        this.fetchParticipantsInCenter(
          this.assessmentId,
          this.centerId,
          0,
          250
        );
      },
      error: (err) => {
        this.notifierService.notify("error", "Error saving filter");
      },
    });
  }

  fetchCenterDetails() {
    this.fetchingCenterDetails = true;
    this.schedulerService
      .fetchCenterDetails(this.assessmentId, this.centerId)
      .subscribe({
        next: (value) => {
          this.centerDetails = value;
          this.fetchingCenterDetails = false;
        },
        error: (err) => {
          this.fetchingCenterDetails = false;
        },
      });
  }

  editCenterDetails() {
    this.processingCenterEdit = true;
    const editCenterDetailsPayload: INewAssessmentCenter = {
      id: this.centerDetails.id,
      address: this.centerDetails.address,
      assessment_id: this.centerDetails.assessment_id,
      center_id: this.centerDetails.center_id,
      contact_email: this.centerDetails.contact_email,
      contact_phone: this.centerDetails.contact_phone,
      // map_location: "",
      name: this.centerDetails.name,
      org_id: this.userAccountService.getCurrentUser().org_id,
      state: this.centerDetails.state,
    };

    // console.log(editCenterDetailsPayload);

    // return
    this.schedulerService
      .editAssessmentCenter(editCenterDetailsPayload)
      .subscribe({
        next: (value) => {
          this.processingCenterEdit = false;
          this.notifierService.notify("success", "Updated successfully");
          // this.fetchCenterDetails();
          this.goBack()
          // this.router.navigate([
          //   `examalpha/exams/${this.itemBankAssessmentService.activeAssessmentId}`,
          // ]);
        },
        error: (err: HttpErrorResponse) => {
          this.processingCenterEdit = false;
          this.notifierService.notify("error", err.error.message);
        },
      });
  }

  onSubmit() {
    const fieldValues: INewAssessmentParticipantFieldValue[] = this.keys(
      this.participantForEdit.fields
    ).map((key) => ({
      value: this.form.value[this.participantForEdit.fields[key].field_name],
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

  fetchParticipantForEdit(participantId: string) {
    this.fetchingParticipantForEdit = true;
    this.schedulerService
      .fetchParticipantById(this.assessmentId, participantId)
      .subscribe({
        next: (value) => {
          this.fetchingParticipantForEdit = false;

          const sortedFields = this.sortFieldsByPlacement(value);

          this.participantForEdit = sortedFields;

          for (let key in this.participantForEdit.fields) {
            if (this.participantForEdit.fields[key].field_type === "CALENDAR") {
              this.dateToEdit = this.participantForEdit.fields[key].field_value;
            }

            if (this.participantForEdit.fields.hasOwnProperty(key)) {
              this.form.addControl(
                this.participantForEdit.fields[key].field_name,
                this.fb.control(this.participantForEdit.fields[key].field_value)
              );
            }
          }
          // console.log(value);
        },
        error: (err: HttpErrorResponse) => {
          this.fetchingParticipantForEdit = false;
          this.notifierService.notify("error", err.error.message);
        },
      });
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
          this.fetchParticipantsInCenter(
            this.assessmentId,
            this.centerId,
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
  keys(obj: any): Array<string> {
    return Object.keys(obj);
  }

  moveParticipantToAnotherCenter() {
    const payload: IMovePartipantToCenter = {
      newCenterId: this.centerIdToMoveParticipantsTo,
      participantIds: this.selectedParticipants,
    };
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
          this.fetchParticipantsInCenter(
            this.assessmentId,

            this.centerId,
            0,
            250
          );
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.message);
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
      this.fetchParticipantsInCenter(
        this.assessmentId,
        this.centerId,
        this.page,
        this.size
      );
    }

    // console.log(this.data);
  }

  clearSearch() {
    this.isSearch = false;
    this.searchParticipantPayload = null;
    this.fetchParticipantsInCenter(this.assessmentId, this.centerId, 0, 250);
  }

  searchParticipant(page?: number, size?: number) {
    this.fetchingParticipantInCenter = true;
    this.isSearch = true;
    this.schedulerService
      .searchForParticipant(
        this.assessmentId,
        this.searchParticipantPayload,
        page ? page : 0,
        size ? size : 250
      )
      .subscribe({
        next: (value) => {
          this.fetchingParticipantInCenter = false;
          this.data = value;
          this.setHeaders();
        },
        error: (err: HttpErrorResponse) => {
          this.fetchingParticipantInCenter = false;
          // console.log(err.error.message);
        },
      });
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
          this.fetchParticipantsInCenter(
            this.assessmentId,
            this.centerId,
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
}
