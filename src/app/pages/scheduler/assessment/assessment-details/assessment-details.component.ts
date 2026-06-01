import { Component, OnInit } from "@angular/core";
import { CenterData } from "../../center/data";
import Swal from "sweetalert2";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Location } from "@angular/common";
import { SchedulerService } from "../../services/scheduler.service";
import { IRegField } from "../../models/registration-fileds";
import { HttpErrorResponse } from "@angular/common/http";
import { Subscription } from "rxjs";
import {
  IAssessmentDetail,
  ICenter,
  ICenterAdmin,
  ICenterAdmins,
  ICenters,
  IFieldValue,
  INewAdmin,
  INewAssessmentCenter,
  INewSectionGroup,
  IParticipant,
  IParticipantList,
  ISearchParticipant,
  ISection,
  ISectionGroups,
  ISuspendOrResumeAdmin,
  ISuspendOrResumeParticipant,
} from "../../models/assessments";
import { NotifierService } from "angular-notifier";
import { saveAs } from "file-saver";
import { SchedulerAccountService } from "src/app/authentication/services/scheduler-account.service";
import { LazyLoadEvent } from "primeng/api";
import { UserService } from "src/app/shared/user.service";
import { AssessmentsService } from "src/app/pages/assessment/service/assessments.service";

export class SectionSettings {
  sectionInstruction!: string;
  durationInMinutes!: number;
  averageDifficultyLevel!: number;
  shuffleItems: boolean = false;
  shuffleOptions: boolean = false;
  allowCalculator: boolean = false;
  shuffleBlocks: boolean = false;
  preventNavigationToAttemptedItems: boolean = false;
  subjectId!: string;
  name!: string;
}

@Component({
  selector: "app-assessment-details",
  templateUrl: "./assessment-details.component.html",
  styleUrls: ["./assessment-details.component.scss"],
})
export class AssessmentDetailsComponent implements OnInit {
  centers!: ICenters;
  breadCrumbItems!: Array<{}>;
  submitted = false;
  backgroundColor: any[] = [
    { name: "bg-soft-primary", text: "text-primary" },
    { name: "bg-soft-info", text: "text-info" },
    { name: "bg-soft-secondary", text: "text-secondary" },
    { name: "bg-soft-success", text: "text-success" },
    { name: "bg-soft-danger", text: "text-danger" },
  ];
  participants = [
    {
      id: "27",
      firstName: "Jo",
      lastName: "Soe",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      passport: "passport url",
      field: "Mathematics",
    },
    {
      id: "17",
      firstName: "Doris",
      lastName: "Poe",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      passport: "passport url",
      field: "Accounting",
    },
    {
      id: "7",
      firstName: "Dorcas",
      lastName: "King",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      passport: "passport url",
      field: "Mechanic",
    },
    {
      id: "90",
      firstName: "Angella",
      lastName: "Smith",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      passport: "passport url",
      field: "Banking and Finance",
    },
    {
      id: "7",
      firstName: "Paschal",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      passport: "passport url",
      field: "Electrician",
    },
    {
      id: "127",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      passport: "passport url",
      field: "Accounting",
    },
  ];
  administrators = [
    {
      id: "27",
      firstName: "Jo",
      lastName: "Soe",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      address: "opposite lagos highway",
      state: "lagos",
      status: "active",
    },
    {
      id: "17",
      firstName: "Doris",
      lastName: "Poe",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      address: "opposite lagos highway",
      state: "lagos",
      status: "active",
    },
    {
      id: "7",
      firstName: "Dorcas",
      lastName: "King",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      address: "opposite lagos highway",
      state: "lagos",
      status: "not active",
    },
    {
      id: "90",
      firstName: "Angella",
      lastName: "Smith",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      address: "opposite lagos highway",
      state: "lagos",
      status: "active",
    },
    {
      id: "7",
      firstName: "Paschal",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      address: "opposite lagos highway",
      state: "lagos",
      status: "active",
    },
    {
      id: "127",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      address: "opposite lagos highway",
      state: "lagos",
      status: "not active",
    },
  ];
  groups = [
    {
      id: "1342",
      name: "Noah GROUP",
      participants: ["samuel", "david", "paschal"],
      dateCreated: "Nov 14, 2021",
      numberOfParticipant: 20,
      sections: ["section #1", "section #3", "section #4", "section #5"],
      parameters: [
        { field: "level", value: "200" },
        { field: "department", value: "accounting" },
      ],
    },
    {
      id: "12564",
      name: "OAU GROUP",
      participants: ["samuel", "david", "paschal"],
      dateCreated: "Nov 14, 2021",
      numberOfParticipant: 880,
      sections: ["section #1", "section #3", "section #4", "section #5"],
      parameters: [
        { field: "level", value: "200" },
        { field: "department", value: "accounting" },
      ],
    },
    {
      id: "1232",
      name: "ABUJA GROUP",
      participants: ["samuel", "david", "paschal"],
      dateCreated: "Nov 14, 2021",
      numberOfParticipant: 700,
      sections: ["section #1", "section #3", "section #4", "section #5"],
      parameters: [
        { field: "level", value: "200" },
        { field: "department", value: "accounting" },
      ],
    },
    {
      id: "32",
      name: "JABI GROUP",
      participants: ["samuel", "david", "paschal"],
      dateCreated: "Nov 14, 2021",
      numberOfParticipant: 7340,
      sections: ["section #1", "section #3", "section #4", "section #5"],
      parameters: [
        { field: "level", value: "200" },
        { field: "department", value: "accounting" },
      ],
    },
    {
      id: "332",
      name: "AKURE GROUP",
      participants: ["samuel", "david", "paschal"],
      dateCreated: "Nov 14, 2021",
      numberOfParticipant: 900,
      sections: ["section #1", "section #3", "section #4", "section #5"],
      parameters: [
        { field: "level", value: "200" },
        { field: "department", value: "accounting" },
      ],
    },
    {
      id: "3432",
      name: "LAGOS GROUP",
      participants: ["samuel", "david", "paschal"],
      dateCreated: "Nov 14, 2021",
      numberOfParticipant: 439,
      sections: ["section #1", "section #3", "section #4", "section #5"],
      parameters: [
        { field: "level", value: "200" },
        { field: "department", value: "accounting" },
      ],
    },
  ];

  Default = [
    { name: "field", filter: "comp sci" },
    { name: "Choice 2" },
    { name: "Choice 3" },
  ];

  assessmentSettings = {
    name: "assessment 1",
    deliveryMethod: "online",
    durationMinutes: "2332",
    startDate: "7327732",
    endDate: "y43y34",
    startExamInstruction: "34y7uwe",
    endExamInstruction: "ewjew",
    preserveSectionOrder: "328",
    displayAllSectionsAtOnce: "348834",
    fontSize: "large",
    allowEndExamAfterXQuestions: "773",
    endExamConfirmation: true,
    warnUnattemptedQuestions: true,
    inactivityWaringSec: true,
    autoSaveSec: true,
    warnEndOfReadingTimeSec: true,
    instructionReadTimeSec: "jihdsi",
  };
  fontSizes = ["small", "large"];
  deliveryMethods = ["small", "large"];

  Sections: ISection[] = [];
  registrationFields: IRegField[] = [];
  capturedData: IFieldValue[] = [];
  processingTemplateDownload: boolean = false;
  processingImport: boolean = false;
  file!: File;
  data!: IParticipantList;
  tableHeaders: any;
  headerKeys: string[] = [];
  tableContents: any[] = [];
  headersToMap: string[] = [];
  routeSub!: Subscription;
  assessmentId: string = "";
  page: number = 0;
  size: number = 0;
  centerSize: number = 0;
  centerPage: number = 0;
  centerAdminSize: number = 0;
  centerAdminPage: number = 0;
  allCenters: ICenters["centers"] = [];
  centerAdmins!: ICenterAdmins;
  centerAdminDataToEdit!: INewAdmin;
  processingAddAdministrator: boolean = false;
  processingAddAssessmentCenter: boolean = false;
  proccessingAddParticipant: boolean = false;
  proccessingAdminUpload: boolean = false;
  sectionSettings: SectionSettings = new SectionSettings();
  assessmentDetails!: IAssessmentDetail;
  assessmentSectionGroups!: ISectionGroups;
  selectedSectionGroupToAddParticipant: string = "";
  selectedCentedId: string;
  selectedSections: ISection[] = [];
  searchableFields: Array<string> = ["CENTER_ID", "GROUP_NAME", "REG_FIELD"];
  searchParticipantPayload: ISearchParticipant = {
    searchField: undefined,
    searchValue: "",
    dateRange: null,
    batchId: ''
  };
  isSearch: boolean = false;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private locationService: Location,
    private schedulerService: SchedulerService,
    private schedulerAccountService: SchedulerAccountService,
    private activatedRoute: ActivatedRoute,
    private notifierService: NotifierService,
    private userService: UserService,
    private itemBankAssessmentService: AssessmentsService
  ) {}

  ngOnInit(): void {
    // this.generateRandomBackground();
    this.breadCrumbItems = [
      { label: "Assessment" },
      { label: "Details", active: true },
    ];

    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.assessmentId = params["assessmentId"];
    });

    this.fetchAssessmentDetails(this.assessmentId);
    this.fetchAssessmentRegFields();
    this.fetchParticipants(0, 250);
    this.fetchAssessmentSectionGroups(this.assessmentId);
    this.fetchAssessmentCenters(0, 50);
    this.fetchCenterAdmins(0, 5);
    this.fetchAllCentersForAddAdmin();
    this.fetchSectionsDropdown(this.assessmentId);
  }

  saveAssessmentSettings(assessmentSettingsForm: any) {}
  saveSectionSettings(sectionSettingForm: any) {}
  confirm(index: number) {
    Swal.fire({
      title: "Are you sure you want to delete this center?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(3, 142, 220)",
      cancelButtonColor: "rgb(243, 78, 78)",
      confirmButtonText: "Yes, delete center!",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: "Center Deleted!",
          text: "You have deleted center successfully.",
          confirmButtonColor: "rgb(3, 142, 220)",
          icon: "success",
        });
        // this.deleteCenter(index);
      }
    });
  }

  //  TODO: work with just one modal, take content and options as params

  openImportCenterModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openImportParticipantModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openImportExamManagerModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }

  openNewGroupModal(content: any) {
    this.selectedSections;
    this.modalService.open(content, { size: "md", centered: true });
  }

  // deleteCenter(index: number) {
  //   this.centers.splice(index, 1);
  // }

  cancel() {
    this.modalService.dismissAll();
  }
  viewGroupParticipant(sectionGroupId: string) {
    // this.router.navigate(['group',this.groupName,'details' ])
    this.router.navigate([
      `schedule/participants/${this.assessmentId}/${sectionGroupId}/section-group-details`,
    ]);
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  // generateRandomBackground(): void {
  //   this.centers.forEach((center) => {
  //     center.backgroundColor = this.backgroundColor[this.generateRandomIndex()];
  //   });
  // }

  generateRandomIndex(): number {
    const randomIndex = Math.floor(Math.random() * this.backgroundColor.length);
    // console.log(randomIndex);
    return randomIndex;
  }

  deleteParticipant(index: number) {
    this.participants.splice(index, 1);
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
  openAddCenterModal(content: any) {
    this.modalService.open(content, { size: "lg", centered: true });
  }
  openModal(content: any) {
    this.modalService.open(content, { size: "md", centered: true });
  }

  openEditAdminModal(content: any, indexOfDataToEdit: number) {
    const nameParts =
      this.centerAdmins.centerAdmins[indexOfDataToEdit].name.split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts[1];
    this.centerAdminDataToEdit = {
      address: this.centerAdmins.centerAdmins[indexOfDataToEdit].address,
      assessmentId:
        this.centerAdmins.centerAdmins[indexOfDataToEdit].assessmentId,
      centerId: this.centerAdmins.centerAdmins[indexOfDataToEdit].centerId,
      email: this.centerAdmins.centerAdmins[indexOfDataToEdit].email,
      firstName: firstName,
      lastName: lastName,
      phone: this.centerAdmins.centerAdmins[indexOfDataToEdit].phone,
      state: this.centerAdmins.centerAdmins[indexOfDataToEdit].state,
      id: this.centerAdmins.centerAdmins[indexOfDataToEdit].id,
    };

    // console.log(this.centerAdminDataToEdit);
    this.modalService.open(content, { size: "lg", centered: true });
  }
  openSectionsModal(content: any): void {
    this.selectedSections = [];
    this.modalService.open(content, { size: "lg", centered: true });
  }

  goBack() {
    this.locationService.back();
  }

  goToRegFieldSettingsPage() {
    this.router.navigate([
      `schedule/participants/details/${this.assessmentId}/reg-field-settings`,
    ]);
  }

  editAssessmentCenter(centerId: string): void {
    this.router.navigate([
      `schedule/participants/${this.assessmentId}/${centerId}/edit-center`,
    ]);
  }
  addAssessmentsectionGroups(): void {
    this.router.navigate([
      `schedule/participants/${this.assessmentId}/add-section-group`,
    ]);
  }
  editAssessmentGroupSections(groupId: string): void {
    // this.router.navigate([
    //   `scheduler/participants/${groupId}/edit-section-group`,
    // ]);

    this.router.navigate([
      `schedule/participants/${this.assessmentId}/${groupId}/edit-section-group`,
    ]);
  }

  viewCenterDetails(centerId: string) {
    this.router.navigate([
      `schedule/participants/details/${this.assessmentId}/${centerId}/center`,
    ]);
  }

  fetchAssessmentRegFields() {
    this.schedulerService.fetchRegistrationFields(this.assessmentId).subscribe({
      next: (value) => {
        this.registrationFields = value;
        // console.log(value);
      },
      error: (err: HttpErrorResponse) => {},
    });
  }

  fetchAssessmentDetails(assessmentId: string) {
    this.schedulerService.fetchAssessmentDetails(assessmentId).subscribe({
      next: (value) => {
        this.assessmentDetails = value;
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

  captureFormValue(regFieldId: string, inputValue: string) {
    // console.log(regFieldId + "" + inputValue);
    let fieldValue: IFieldValue = {
      assessment_id: this.assessmentId,
      registration_field_id: regFieldId,
      value: inputValue,
      values: [],
    };
    if (this.checkIfInCapturedDataArray(regFieldId)) {
      const indexOfObject = this.capturedData.findIndex((object): boolean => {
        return object.registration_field_id === regFieldId;
      });
      this.capturedData[indexOfObject].value = inputValue;
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
  addParticipant() {
    this.proccessingAddParticipant = true;
    let fieldsCheckPassed = true;

    let missingCount = 0;
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

    if (fieldsCheckPassed && this.checkForValidEmail()) {
      let payload: IParticipant = {
        assessmentId: this.assessmentId,
        groupId: this.selectedSectionGroupToAddParticipant,
        fieldValues: this.capturedData,
        centerId: this.selectedCentedId,
      };
      // console.log(payload);
      // console.log(this.selectedSectionGroupToAddParticipant);

      // return
      this.proccessingAddParticipant = false;
      this.schedulerService.addParticipantToAssessment(payload).subscribe({
        next: (value) => {
          this.notifierService.notify(
            "success",
            "Participant Added Successfully"
          );
          this.fetchParticipants(0, 250);
          this.modalService.dismissAll();
        },
        error: (err: HttpErrorResponse) => {
          this.proccessingAddParticipant = false;

          this.notifierService.notify("error", err.error);
        },
      });
    }

    // console.log(mandatory);
    // return;
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
      return false;
    }
    return true;
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

  downloadTemplateForAdminUpload() {
    this.processingTemplateDownload = true;
    this.schedulerService.downloadTemplateForAdminUpload().subscribe({
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

  downloadTemplateForCenterUpload() {
    this.processingTemplateDownload = true;
    this.schedulerService.downloadTemplateForCenterUpload().subscribe({
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

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  // remove file after successfull import

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
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.error);
          this.processingImport = false;
        },
      });
  }

  fetchParticipants(page: number, size: number) {
    this.tableContents = [];
    this.schedulerService
      .fetchParticipants(this.assessmentId, page, size)
      .subscribe({
        next: (value) => {
          this.data = value;
          // console.log(this.data);
          this.setHeaders();
        },
        error: (err: HttpErrorResponse) => {
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
      this.searchParticipant(this.page, this.size);
    } else {
      this.fetchParticipants(this.page, this.size);
    }

    // console.log(this.data);
  }

  onCenterPageChange(event: any) {
    this.centerSize = event.rows;
    this.centerPage = event.page;
    this.fetchAssessmentCenters(this.centerPage, this.centerSize);
  }

  addNewAssessmentCenter(
    centerName: string,
    centerId: string,
    centerAddress: string,
    centerCapacity: string,
    centerState: string,
    centerMapLocation: string,
    contactPersonPhone: string,
    contactPersonEmail: string
  ): void {
    this.processingAddAssessmentCenter = true;

    if (!(centerId && centerName)) {
      this.notifierService.notify("error", "Center Name and Id required");
      this.processingAddAssessmentCenter = false;
      return;
    }

    let payload: INewAssessmentCenter = {
      address: centerAddress,
      assessment_id: this.assessmentId,
      center_id: centerId,
      contact_email: contactPersonEmail,
      contact_phone: contactPersonPhone,
      map_location: centerMapLocation,
      name: centerName,
      org_id: this.userService.getCurrentUser().org_id,
      state: centerState,
    };
    this.schedulerService.createAssessmentCenter(payload).subscribe({
      next: (value) => {
        // console.log(value);
        this.notifierService.notify("success", `Center created`);
        this.modalService.dismissAll();
        this.fetchAssessmentCenters(0, 50);
        this.processingAddAssessmentCenter = false;
      },

      error: (err: HttpErrorResponse) => {
        this.notifierService.notify("error", err.message);
        this.processingAddAssessmentCenter = false;
      },
    });
  }

  importCenters() {
    const formData = new FormData();
    formData.append("file", this.file);
    this.processingImport = true;

    this.schedulerService.uploadCenters(this.assessmentId, formData).subscribe({
      next: (value) => {
        this.notifierService.notify("success", "Imported centers Successfully");
        this.processingImport = false;
        this.modalService.dismissAll();
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify("error", err.error.error);
        this.processingImport = false;
      },
    });
  }

  fetchAssessmentCenters(page: number, size: number) {
    this.schedulerService
      .fetchAssessmentCenters(this.assessmentId, page, size)
      .subscribe({
        next: (value) => {
          this.centers = value;
          // console.log(this.centers);
        },
        error: (err) => {},
      });
  }

  addAdministrator(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    address: string,
    state: string,
    center: string
  ) {
    this.processingAddAdministrator = true;
    const payload = {
      address: address,
      assessmentId: this.assessmentId,
      centerId: center,
      email: email,
      firstName: firstName,
      lastName: lastName,
      phone: phoneNumber,
      state: state,
    };

    this.schedulerService.addAdministrator(payload).subscribe({
      next: (value) => {
        this.processingAddAdministrator = false;

        this.notifierService.notify("success", "Admin added");
        this.modalService.dismissAll();
        this.fetchCenterAdmins(0, 5);
      },
      error: (err: HttpErrorResponse) => {
        this.processingAddAdministrator = false;

        this.notifierService.notify("error", err.error);
      },
    });
  }

  fetchCenterAdmins(page: number, size: number) {
    this.schedulerService
      .fetchCenterAdmins(this.assessmentId, page, size)
      .subscribe({
        next: (value) => {
          this.centerAdmins = value;
        },
        error: (err: HttpErrorResponse) => {
          // console.log(err);
        },
      });
  }

  fetchAllCentersForAddAdmin() {
    this.schedulerService
      .fetchAssessmentCenterWithoutPagination(this.assessmentId)
      .subscribe({
        next: (value) => {
          this.allCenters = value.centers;
          // this.fetchCenterAdmins(0, 5);
        },
        error: (err: HttpErrorResponse) => {
          // console.log(err);
        },
      });
  }

  fetchSectionsDropdown(assessmentId: string) {
    this.schedulerService.fetchSectionsDropdown(assessmentId).subscribe({
      next: (value) => {
        this.Sections = value;
        // console.log(this.Sections);
      },
      error: (err: HttpErrorResponse) => {
        // console.log(err.error.message);
      },
    });
  }

  uploadAdmins() {
    this.proccessingAdminUpload = true;
    const formData = new FormData();
    formData.append("file", this.file);
    // console.log(formData);
    // return
    this.schedulerService
      .uploadCenterAdmins(this.assessmentId, formData)
      .subscribe({
        next: (value) => {
          this.notifierService.notify("success", "uploaded  successfully");
          this.proccessingAdminUpload = false;
          this.fetchCenterAdmins(0, 5);
        },
        error: (err: HttpErrorResponse) => {
          this.proccessingAdminUpload = false;
          this.notifierService.notify("error", err.message);
          // console.log(err);
        },
      });
  }

  saveSectionGroup(sectionName: string) {
    const newsectionGroupDTO: INewSectionGroup = {
      name: sectionName,
      sections: this.selectedSections,
    };
    this.schedulerService
      .addGroupSection(newsectionGroupDTO, this.assessmentId)
      .subscribe({
        next: (value) => {
          this.notifierService.notify("success", "section group added");
          this.fetchAssessmentSectionGroups(this.assessmentId);
          this.cancel();
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.message);
        },
      });
    // console.log(newsectionGroupDTO);
    // this.router.navigate(["/scheduler/assessment/details"]);
  }

  searchParticipant(page?: number, size?: number) {
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
          this.data = value;
          this.setHeaders();
        },
        error: (err: HttpErrorResponse) => {
          // console.log(err.error.message);
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
          this.fetchCenterAdmins(0, 250);
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
          this.fetchParticipants(0, 250);
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

  editCenterAdmin(adminId: string) {
    this.centerAdminDataToEdit.id = adminId;
    this.schedulerService
      .editAdministrator(this.centerAdminDataToEdit)
      .subscribe({
        next: (value) => {
          this.notifierService.notify("success", "Edited sucessfully");
          this.cancel();
          this.fetchCenterAdmins(0, 250);
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.message);
        },
      });
  }

  clearSearch() {
    this.isSearch = false;
    this.searchParticipantPayload = null;
    this.fetchParticipants(0, 250);
  }

  onCenterAdminPageChange(event: any) {}
}
