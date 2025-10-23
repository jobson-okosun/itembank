import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";
import { Location } from "@angular/common";
import { FormBuilder, FormGroup } from "@angular/forms";
import { SchedulerService } from "../../services/scheduler.service";
import { HttpErrorResponse } from "@angular/common/http";
import {
  ICenters,
  IEditAssessmentParticipantDTO,
  IMovePartipantToCenter,
  IMovePartipantToGroup,
  INewAssessmentParticipantFieldValue,
  INewSectionGroup,
  IParticipantForEdit,
  IParticipantList,
  IParticipantSearchEnum,
  ISearchParticipant,
  ISectionGroup,
  ISectionGroups,
  ISuspendOrResumeParticipant,
} from "../../models/assessments";
import { Subscription } from "rxjs";
import { NotifierService } from "angular-notifier";
import { AssessmentsService } from "src/app/pages/assessment/service/assessments.service";
import { UserService } from "src/app/shared/user.service";

@Component({
  selector: "app-edit-assessment-group-section",
  templateUrl: "./edit-assessment-group-section.component.html",
  styleUrls: ["./edit-assessment-group-section.component.scss"],
})
export class EditAssessmentGroupSectionComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  participants: Array<any> = [
    {
      id: "27",
      firstName: "Jo",
      lastName: "Soe",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      passport: "passport url",
      department: "Mathematics",
    },
    {
      id: "17",
      firstName: "Doris",
      lastName: "Poe",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      passport: "passport url",
      department: "Accounting",
    },
    {
      id: "7",
      firstName: "Dorcas",
      lastName: "King",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      passport: "passport url",
      department: "Mechanic",
    },
    {
      id: "90",
      firstName: "Angella",
      lastName: "Smith",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      passport: "passport url",
      department: "Banking and Finance",
    },
    {
      id: "7",
      firstName: "Paschal",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      passport: "passport url",
      department: "Electrician",
    },
    {
      id: "127",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      passport: "passport url",
      department: "Accounting",
    },
  ];
  conditions: any = [];
  Sections = [{ name: "1" }, { name: "2" }, { name: "3" }];
  assessmentId: string = "";
  sectionGroupId: string = "";
  sectionGroupDetails!: ISectionGroup;
  routeSub: Subscription;
  data!: IParticipantList;
  tableHeaders: any;
  headerKeys: string[] = [];
  tableContents: any;
  headersToMap: string[] = [];
  page: number = 0;
  size: number = 0;
  selectedParticipants: string[] = [];
  currentParticipantCenterId: string = "";
  sectionGroupIdToMoveParticipantsTo: string = "";
  centerIdToMoveParticipantsTo: string = "";
  participantForEdit: IParticipantForEdit;
  form: FormGroup;
  processingEdit: boolean = false;
  searchParticipantPayload: ISearchParticipant = {
    searchField: undefined,
    searchValue: "",
    dateRange: null,
    batchId: ''
  };
  searchableFields: Array<string> = ["CENTER_ID", "GROUP_NAME", "REG_FIELD"];
  isSearch: boolean = false;
  centers!: ICenters;
  fetchingGroupParticipants: boolean = false;
  fetchingGroupDetails: boolean = false;

  fetchingParticipantForEdit: boolean = false;
  dateToEdit: string = "";
  assessmentSectionGroups!: ISectionGroups;

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private locationService: Location,
    private formBuilder: FormBuilder,
    private router: Router,
    private schedulerService: SchedulerService,
    private itemBankAssessmentService: AssessmentsService,
    private notifierService: NotifierService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Section Group" },
      { label: "Edit", active: true },
    ];

    this.routeSub = this.route.params.subscribe((params: Params) => {
      this.assessmentId = params["assessmentId"];
      this.sectionGroupId = params["sectionGroupId"];
    });
    // this.assessmentId = this.route.params.subscribe(pa)

    // console.log(this.assessmentId);
    // console.log(this.sectionGroupId);

    this.fetchSectionGroupDetails(this.assessmentId, this.sectionGroupId);
    this.fetchParticipantsInGroupSection(
      this.assessmentId,
      this.sectionGroupId,
      0,
      250
    );
    this.fetchSectionsDropdown(this.assessmentId);
    this.fetchAssessmentSectionGroups(this.assessmentId);
  }

  deleteParticipant(index: number) {
    this.participants.splice(index, 1);
  }
  openParticipantModal(content: any) {
    // this.submitted = false;
    this.modalService.open(content, { size: "lg", centered: true });
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

  cancel() {
    // this.router.navigate(["group", this.groupName, "details"]);
    this.modalService.dismissAll();
  }
  goBack(): void {
    this.locationService.back();
  }

  onParticipantPageChange(event: any) {
    // console.log(event);
    this.size = event.rows;
    this.page = event.page;
    // console.log(this.size);
    if (this.isSearch) {
      this.searchParticipant(this.page, this.size);
    } else {
      this.fetchParticipantsInGroupSection(
        this.assessmentId,
        this.sectionGroupId,
        this.page,
        this.size
      );
    }

    // console.log(this.data);
  }
  addConditions() {
    this.conditions.push({ name: "", value: "" });
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
          this.fetchParticipantsInGroupSection(
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

  save() {
    this.processingEdit = true;
    const payload: INewSectionGroup = {
      name: this.sectionGroupDetails.groupName?.trim(),
      sections: this.sectionGroupDetails.sections,
      id: this.sectionGroupId,
    };

    this.schedulerService
      .editGroupSection(payload, this.assessmentId, this.sectionGroupId)
      .subscribe({
        next: (value) => {
          this.fetchParticipantsInGroupSection(
            this.assessmentId,
            this.sectionGroupId,
            0,
            250
          );
          this.processingEdit = false;
          this.notifierService.notify("success", "Edited Successfully");
          this.goBack()
        },
        error: (err: HttpErrorResponse) => {
          this.processingEdit = false;
          this.notifierService.notify("error", err.error.message ?? err.error.error);
        },
      });
  }

  fetchSectionsDropdown(assessmentId: string) {
    this.schedulerService.fetchSectionsDropdown(assessmentId).subscribe({
      next: (value) => {
        this.Sections = value;
      },
      error: (err: HttpErrorResponse) => {
        // console.log(err.error.message);
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

  clearSearch() {
    this.isSearch = false;
    this.searchParticipantPayload = null
    this.fetchParticipantsInGroupSection(
      this.assessmentId,
      this.sectionGroupId,
      0,
      250
    );
  }

  searchParticipant(page?: number, size?: number) {
    this.fetchingGroupParticipants = true;
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

  fetchSectionGroupDetails(assessmentId: string, sectionGroupId: string) {
    this.fetchingGroupDetails = true;
    this.schedulerService
      .fetchSectionGroupDetails(assessmentId, sectionGroupId)
      .subscribe({
        next: (value) => {
          this.fetchingGroupDetails = false;
          this.sectionGroupDetails = value;
        },
        error: (err: HttpErrorResponse) => {
          this.fetchingGroupDetails = false;
          // console.log(err.error.message);
        },
      });
  }

  fetchParticipantsInGroupSection(
    assessmentId: string,
    sectionGroupId: string,
    page: number,
    size: number
  ) {
    this.fetchingGroupParticipants = true;
    this.schedulerService
      .fetchSectionGroupParticipant(assessmentId, sectionGroupId, page, size)
      .subscribe({
        next: (value) => {
          this.data = value;
          this.setHeaders();
          this.fetchingGroupParticipants = false;
        },
        error: (err: HttpErrorResponse) => {
          this.fetchingGroupParticipants = false;
          // console.log(err.error.message);
        },
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

  onSearchFieldChange(selectedField: string) {
    this.searchParticipantPayload.searchField =
      selectedField as IParticipantSearchEnum;
    // console.log(selectedField);
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
          this.fetchParticipantsInGroupSection(
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
          this.fetchParticipantsInGroupSection(
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
  keys(obj: any): Array<string> {
    return Object.keys(obj);
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
          this.fetchParticipantsInGroupSection(
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
}
