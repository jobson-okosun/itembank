import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import {
  IAssessmentBatchDTO,
  ICenter,
  ICenterDetail,
  ICenterFilters,
  ICenters,
  IEditAssessmentParticipantDTO,
  IMoveAdminToCenter,
  IMovePartipantToCenter,
  IMovePartipantToGroup,
  INewAssessmentParticipantFieldValue,
  IParticipantContent,
  IParticipantForEdit,
  IParticipantList,
  IParticipantSearchEnum,
  ISearchParticipant,
  ISectionGroups,
  ISuspendOrResumeAdmin,
  ISuspendOrResumeParticipant,
} from "../../models/assessments";
import { SchedulerService } from "../../services/scheduler.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Subscription } from "rxjs";
import { NotifierService } from "angular-notifier";
import { AssessmentsService } from "src/app/pages/assessment/service/assessments.service";
import { UserService } from "src/app/shared/user.service";

@Component({
  selector: "app-assessment-center-details",
  templateUrl: "./assessment-center-details.component.html",
  styleUrls: ["./assessment-center-details.component.scss"],
})
export class AssessmentCenterDetailsComponent implements OnInit {
  ordersForm!: FormGroup;
  submitted = false;
  breadCrumbItems!: Array<{}>;
  // projectList!: projectListModel[];
  // document!: documentModel[];
  groupName: string = "";
  CustomersData: Array<any> = [];

  data!: IParticipantList;
  tableHeaders: any;
  headerKeys: string[] = [];
  tableContents: Array<IParticipantContent> = [];
  headersToMap: string[] = [];
  centerFilters: ICenterFilters[] = [];
  routeSub!: Subscription;
  centerId: string = "";
  assessmentId: string = "";
  centerDetails!: ICenterDetail;
  centerIdToMoveParticipantsTo: string = "";
  centerIdToMoveAdminsTo: string = "";
  selectedParticipants: Array<string> = [];
  adminsToMove: Array<string> = [];
  centers: ICenters;
  page: number = 0;
  size: number = 0;
  sectionGroupIdToMoveParticipantsTo: string = "";
  assessmentSectionGroups!: ISectionGroups;
  currentParticipantCenterId: string = "";
  participantForEdit: IParticipantForEdit;
  form: FormGroup;
  processingEdit: boolean = false;
  fetchingCenterDetails: boolean = false;
  fetchingCenterParticipants: boolean = false;
  searchParticipantPayload: ISearchParticipant = {
    searchField: undefined,
    searchValue: "",
    dateRange: {
      end_date: "",
      start_date: "",
    },
    batchId: "",
  };
  isSearch: boolean = false;
  searchableFields: Array<string> = Object.values(IParticipantSearchEnum);
  processingMoveToAnotherCenter: boolean = false;
  centerIdStringToMoveParticipantsTo: any;
  batches: IAssessmentBatchDTO[] = [];
  dateRange: string = "";

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private router: Router,
    private schedulerService: SchedulerService,
    private activatedRoute: ActivatedRoute,
    private notifierService: NotifierService,
    private itembankschedulerService: AssessmentsService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Assessment" },
      { label: "Center", active: true },
    ];
    this.route.params.subscribe((params) => {
      //  console.log(params["groupName"])
      this.groupName = params["groupName"];
    });
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.centerId = params["centerId"];
      // this.assessmentId = params["assessmentId"];
      this.assessmentId = this.itembankschedulerService.schedulerAssessmentId;
    });
    this.fetchParticipantsInCenter(this.assessmentId, this.centerId, 0, 250);
    this.fetchCenterFilters();
    this.fetchCenterDetails();
    this.fetchCenters(this.assessmentId, 0, 250);
    this.fetchAssessmentSectionGroups(this.assessmentId);
    this.fetchBatches(this.assessmentId);
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

  // deleteParticipant(index: number) {
  //   this.participantList.splice(index, 1);
  // }
  openAddParticipantModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }

  openAddExaminerModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openParticipantsImportModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }

  openParticipantsGroupImportModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openModal(content: any) {
    // this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openMoveAdminModal(content: any) {
    // this.submitted = false;
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
  openPassportUploadModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
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

  addExaminer() {
    Swal.fire({
      title: `Examiner added Successfully`,
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
  searchParticipant(page?: number, size?: number) {
    this.fetchingCenterParticipants = true;
    this.isSearch = true;

    if (
      this.searchParticipantPayload.searchField !==
        IParticipantSearchEnum.REG_DATE &&
      this.searchParticipantPayload.searchField !==
        IParticipantSearchEnum.REG_FIELD_DATE
    ) {
      console.log("i got here center");
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
          this.fetchingCenterParticipants = false;
          this.data = value;
          this.setHeaders();
        },
        error: (err: HttpErrorResponse) => {
          this.fetchingCenterParticipants = false;
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
  stopPropagation(event: Event) {
    event.stopPropagation();
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
    this.searchParticipantPayload.searchField = null;
    this.searchParticipantPayload.searchValue = "";
    if (this.searchParticipantPayload.dateRange !== null) {
      this.searchParticipantPayload.dateRange.end_date = "";
      this.searchParticipantPayload.dateRange.start_date = "";
    }

    this.fetchParticipantsInCenter(this.assessmentId, this.centerId, 0, 250);
  }

  fetchParticipantsInCenter(
    assessmentId: string,
    centerId: string,
    page?: number,
    size?: number
  ) {
    this.fetchingCenterParticipants = true;
    this.schedulerService
      .fetchParticipantsInCenter(assessmentId, centerId, page, size)
      .subscribe({
        next: (value) => {
          this.data = value;
          this.setHeaders();
          this.fetchingCenterParticipants = false;
        },
        error: (err: HttpErrorResponse) => {
          this.fetchingCenterParticipants = false;
          // console.log(err);
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

  fetchCenterFilters() {
    this.schedulerService
      .fetchCenterFilters(this.assessmentId, this.centerId)
      .subscribe({
        next: (value) => {
          this.centerFilters = value;
          // console.log(this.centerFilters);
        },
        error: (err) => {},
      });
  }
  cancel() {
    this.modalService.dismissAll();
  }

  fetchCenterDetails() {
    this.fetchingCenterDetails = true;
    this.schedulerService
      .fetchCenterDetails(this.assessmentId, this.centerId)
      .subscribe({
        next: (value) => {
          this.fetchingCenterDetails = false;
          this.centerDetails = value;
          // console.log(this.centerDetails);
        },
        error: (err: HttpErrorResponse) => {
          this.fetchingCenterDetails = false;
          // console.log(err);
        },
      });
  }

  fetchCenters(assessmentId: string, page: number, size: number) {
    this.schedulerService
      .fetchAssessmentCenterWithoutPagination(assessmentId)
      .subscribe({
        next: (value) => {
          this.centers = value;
        },
        error: (err: HttpErrorResponse) => {},
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
      .moveParticipantToAnotherCenter(this.assessmentId, this.centerId, payload)
      .subscribe({
        next: (value) => {
          this.notifierService.notify(
            "success",
            "participant(s) moved to new center"
          );

          this.cancel();
          this.fetchParticipantsInCenter(
            this.assessmentId,
            this.centerId,
            0,
            250
          );
          this.selectedParticipants = [];
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.message);
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

  moveAdminToAnotherCenter() {
    const payload: IMoveAdminToCenter = {
      newCenterId: this.centerIdToMoveAdminsTo,
      adminIds: this.adminsToMove,
    };

    this.schedulerService
      .moveAdminToAnotherCenter(this.assessmentId, this.centerId, payload)
      .subscribe({
        next: (value) => {
          this.notifierService.notify(
            "success",
            "admin(s) moved to new center"
          );
          this.adminsToMove = [];
          this.cancel();
          this.fetchCenterDetails();
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.message);
        },
      });
  }

  suspendOrResumeAdmin(adminId: string, suspended: boolean) {
    const payload: ISuspendOrResumeAdmin = {
      adminId: adminId,
      suspended: suspended,
    };
    this.schedulerService
      .suspendOrResumeAdmin(this.assessmentId, payload)
      .subscribe({
        next: (value) => {
          this.fetchCenterDetails();
          this.notifierService.notify(
            "success",
            `${suspended === true ? "admin suspended" : "admin set to resume"}`
          );
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

  onPageChange(event: any) {
    // console.log(event);
    this.size = event.rows;
    this.page = event.page;
    // console.log(this.size);
    if (this.isSearch) {
      this.searchParticipant();
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
  captureAdminId(id: string) {
    const adminIdAlreadyExist = this.adminsToMove.find(
      (adminId) => adminId === id
    );
    if (adminIdAlreadyExist) {
      const indexToRemove = this.adminsToMove.indexOf(adminIdAlreadyExist);
      this.adminsToMove.splice(indexToRemove, 1);
    } else {
      this.adminsToMove.push(id);
      // console.log(this.adminsToMove);
    }
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

  moveParticipantsToAnotherSectionGroup() {
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
          this.cancel();
          this.selectedParticipants = [];
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.message);
        },
      });
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

  navigateToEditPage(participantId: string) {
    this.router.navigateByUrl(
      `schedule/participants/${participantId}/${this.assessmentId}/edit`
    );
  }

  getSelectedCenterInfo(e: ICenter) {
    if (e !== undefined) {
      this.centerIdStringToMoveParticipantsTo = e.centerId;
    }
    // this.canMoveParticipantToNewCenter = true;
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
}
