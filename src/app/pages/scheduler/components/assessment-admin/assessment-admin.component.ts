import { Component, OnInit } from "@angular/core";
import { SchedulerService } from "../../services/scheduler.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";
import {
  ICenterAdminDashboard,
  ICenterAdmins,
  ICenters,
  IFilterCenterAdmin,
  IFilterUnAssignedCenterAdmin,
  INewAdmin,
  ISearchParticipant,
  ISuspendOrResumeAdmin,
  IUnassignedAdminList,
  IUnassignedCenterAdmin,
} from "../../models/assessments";
import { HttpErrorResponse } from "@angular/common/http";
import { NotifierService } from "angular-notifier";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import * as saveAs from "file-saver";
import { AssessmentsService } from "src/app/pages/assessment/service/assessments.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-assessment-admin",
  templateUrl: "./assessment-admin.component.html",
  styleUrls: ["./assessment-admin.component.scss"],
})
export class AssessmentAdminComponent implements OnInit {
  centerAdminSize: number = 0;
  centerAdminPage: number = 0;
  routeSub!: Subscription;
  assessmentId: string = "";
  centerAdmins!: ICenterAdmins;
  centerAdminDataToEdit!: INewAdmin;
  allCenters: ICenters["centers"] = [];
  proccessingAdminUpload: boolean = false;
  processingAddAdministrator: boolean = false;
  file!: File;
  processingTemplateDownload: boolean = false;
  searchableFields: Array<string> = [
    "email",
    "name",
    "centerId",
    // "active",
    "suspended",
  ];

  searchValue: string = "";
  selectedField: string = "";
  isFilter: boolean = false;
  processingFetchCenterAdmin: boolean = false;
  payload: IFilterCenterAdmin = {
    name: "",
    email: "",
    centerId: "",
    active: "" as any,
    suspended: "" as any,
  };
  centerAdminDashboardData: ICenterAdminDashboard;
  unAssignedCenterAdmins: IUnassignedAdminList;
  capturedCenterId: string;
  capturedUnassignedAdminIds: string[] = [];
  fetchingUnassignedAdmin: boolean = false;
  processingAdminAssignment: boolean = false;
  processingSuspendResume : boolean = false
  constructor(
    private schedulerService: SchedulerService,
    private activatedRoute: ActivatedRoute,
    private notifierService: NotifierService,
    private modalService: NgbModal,
    private itembankAssessmentService: AssessmentsService
  ) {}

  ngOnInit(): void {
    /* this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.assessmentId = params["assessmentId"];
    }); */
    this.assessmentId = this.itembankAssessmentService.schedulerAssessmentId;

    this.fetchDashboardData(this.assessmentId);
    this.fetchCenterAdmins(0, 5);
    this.fetchAllCentersForAddAdmin();
    // this.fetchUnassignedCenterAdmins();
  }
  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  cancel() {
    this.modalService.dismissAll();
  }

  openModal(content: any, size?: string) {
    this.modalService.open(content, {
      size: size ? size : "lg",
      centered: true,
    });
  }

  openUnassignedAdministratorModal(content: any, size?: string) {
    this.fetchUnassignedCenterAdmins();
    this.modalService.open(content, {
      size: size ? size : "lg",
      centered: true,
    });
  }

  openListCentersModal(content: any, adminId: string) {
    this.capturedUnassignedAdminIds = [];
    this.capturedUnassignedAdminIds.push(adminId);
    this.modalService.open(content, { size: "sm", centered: true });
  }

  fetchCenterAdmins(page: number, size: number) {
    this.processingFetchCenterAdmin = true;
    this.schedulerService
      .fetchCenterAdmins(this.assessmentId, page, size)
      .subscribe({
        next: (value) => {
          this.centerAdmins = value;
          this.processingFetchCenterAdmin = false;
        },
        error: (err: HttpErrorResponse) => {
          // console.log(err);
          this.processingFetchCenterAdmin = false;
        },
      });
  }

  onCenterAdminFieldChange(selectedField: string) {
    this.selectedField = selectedField;
    this.searchValue = "";
  }

  canPerformSearch(): boolean {
    const p = this.payload;
    const hasName = !!(p.name && p.name.trim());
    const hasEmail = !!(p.email && p.email.trim());
    const hasCenter = !!(p.centerId && p.centerId.trim());
    const hasActive = p.active !== undefined && p.active !== null && (p.active as any) !== '';
    const hasSuspended = p.suspended !== undefined && p.suspended !== null && (p.suspended as any) !== '';
    return hasName || hasEmail || hasCenter || hasActive || hasSuspended;
  }

  clearSearch() {
    this.isFilter = false;
    this.searchValue = "";
    this.selectedField = "";
    this.payload = {
      name: "",
      email: "",
      centerId: "",
      active: "" as any,
      suspended: "" as any,
    };
    this.fetchCenterAdmins(0, this.centerAdminSize || 5);
  }

  filterCenterAdminByField(page?: number, size?: number) {
    this.processingFetchCenterAdmin = true;

    const cleanPayload: IFilterCenterAdmin = {};

    if (this.payload.name && this.payload.name.trim() !== "") {
      cleanPayload.name = this.payload.name.trim();
    }
    if (this.payload.email && this.payload.email.trim() !== "") {
      cleanPayload.email = this.payload.email.trim();
    }
    if (this.payload.centerId && this.payload.centerId.trim() !== "") {
      cleanPayload.centerId = this.payload.centerId.trim();
    }
    if (this.payload.active !== undefined && this.payload.active !== null && (this.payload.active as any) !== '') {
      cleanPayload.active = this.payload.active === true || (this.payload.active as any) === 'true';
    }
    if (this.payload.suspended !== undefined && this.payload.suspended !== null && (this.payload.suspended as any) !== '') {
      cleanPayload.suspended = this.payload.suspended === true || (this.payload.suspended as any) === 'true';
    }

    this.schedulerService
      .filterCenterAdminByField(cleanPayload, this.assessmentId, page, size)
      .subscribe({
        next: (value) => {
          this.isFilter = true;
          this.centerAdmins = value;
          this.processingFetchCenterAdmin = false;
        },
        error: (err: HttpErrorResponse) => {
          this.processingFetchCenterAdmin = false;
          this.notifierService.notify("error", err.error.message || "Failed to filter admins");
        },
      });
  }
  openEditAdminModal(content: any, indexOfDataToEdit: number) {
    this.centerAdminDataToEdit = {
      address: this.centerAdmins.centerAdmins[indexOfDataToEdit].address.trim(),
      assessmentId:
        this.centerAdmins.centerAdmins[indexOfDataToEdit].assessmentId,
      centerId: this.centerAdmins.centerAdmins[indexOfDataToEdit].centerId.trim(),
      email: this.centerAdmins.centerAdmins[indexOfDataToEdit].email.trim(),
      firstName: this.centerAdmins.centerAdmins[indexOfDataToEdit].first_name.trim(),
      lastName: this.centerAdmins.centerAdmins[indexOfDataToEdit].last_name.trim(),
      phone: this.centerAdmins.centerAdmins[indexOfDataToEdit].phone.trim(),
      state: this.centerAdmins.centerAdmins[indexOfDataToEdit].state.trim(),
      id: this.centerAdmins.centerAdmins[indexOfDataToEdit].id,
    };

    // console.log(this.centerAdminDataToEdit);
    this.modalService.open(content, { size: "lg", centered: true });
  }

  suspendOrResumeAdmin(adminId: string, suspended: boolean) {
    this.processingSuspendResume = true
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
          this.processingSuspendResume = false
          this.modalService.dismissAll();
        },
        error: (err: HttpErrorResponse) => {
          this.processingSuspendResume = false
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
          this.modalService.dismissAll();
          this.fetchCenterAdmins(0, 250);
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.message);
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

  addAdministrator(
    // firstName: string,
    // lastName: string,
    // email: string,
    // phoneNumber: string,
    // address: string,
    // state: string,
    // center: string
    newAdministrator: NgForm
  ) {
    this.processingAddAdministrator = true;
    const payload: INewAdmin = {
      address: newAdministrator.form.value.address.trim(),
      assessmentId: this.assessmentId,
      centerId: newAdministrator.form.value.center.trim(),
      email: newAdministrator.form.value.email.trim(),
      firstName: newAdministrator.form.value.firstName.trim(),
      lastName: newAdministrator.form.value.lastName.trim(),
      phone: newAdministrator.form.value.phone.toString().trim(),
      state: newAdministrator.form.value.state.trim(),
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
          this.modalService.dismissAll()
        },
        error: (err: HttpErrorResponse) => {
          this.proccessingAdminUpload = false;
          this.notifierService.notify("error", err.error.error);
          // console.log(err);
        },
      });
  }
  onFileSelected(event: any) {
    this.file = event.target.files[0];
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
  onCenterAdminPageChange(event: any) {
    this.centerAdminPage = event.page;
    this.centerAdminSize = event.rows;
    if (this.isFilter) {
      this.filterCenterAdminByField(this.centerAdminPage, this.centerAdminSize);
    } else {
      this.fetchCenterAdmins(this.centerAdminPage, this.centerAdminSize);
    }
  }

  fetchDashboardData(assessmentId: string) {
    this.schedulerService.fetchCenterAdminDashboard(assessmentId).subscribe({
      next: (value: ICenterAdminDashboard) => {
        this.centerAdminDashboardData = value;
      },
      error: (err: HttpErrorResponse) => {
        // console.log(err.error.message);
      },
    });
  }

  fetchUnassignedCenterAdmins() {
    this.fetchingUnassignedAdmin = true;
    let payload: IFilterUnAssignedCenterAdmin = {
      email: null,
      first_name: null,
      last_name: null,
      phone: null,
      username: null,
    };
    this.schedulerService
      .fetchUnassignedCenterAdmins(payload, this.assessmentId)
      .subscribe({
        next: (value) => {
          this.fetchingUnassignedAdmin = false;
          this.unAssignedCenterAdmins = value;
          // console.log("unassaigned admins", value);
        },
        error: (err: HttpErrorResponse) => {
          this.fetchingUnassignedAdmin = false;
          // console.log(err.error.error);
        },
      });
  }

  captureCenterId(centerId: string) {
    this.capturedCenterId = centerId;
  }

  assignAdminToCenter() {
    this.processingAdminAssignment = true;
    this.schedulerService
      .assignAdminToCenter(
        this.assessmentId,
        this.capturedCenterId,
        this.capturedUnassignedAdminIds
      )
      .subscribe({
        next: (value) => {
          // console.log(value);
          this.processingAdminAssignment = false;
          this.fetchUnassignedCenterAdmins();
          this.fetchCenterAdmins(0, 5);
          this.notifierService.notify(
            "success",
            "Admin successfully assigned to center"
          );
          this.modalService.dismissAll();
        },
        error: (err: HttpErrorResponse) => {
          this.processingAdminAssignment = false;
          this.notifierService.notify("error", err.error.error);
        },
      });
  }
}
