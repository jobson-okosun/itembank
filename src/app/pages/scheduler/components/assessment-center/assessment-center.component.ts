import { AfterViewInit, Component, OnInit } from "@angular/core";
import { SchedulerService } from "../../services/scheduler.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";
import {
  ICenterDashboard,
  ICenters,
  IFilterCenter,
  INewAssessmentCenter,
} from "../../models/assessments";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NotifierService } from "angular-notifier";
import { HttpErrorResponse } from "@angular/common/http";
import { UserService } from "src/app/shared/user.service";
import * as saveAs from "file-saver";
import { AssessmentsService } from "src/app/pages/assessment/service/assessments.service";
import { NgForm } from "@angular/forms";
import { Countries } from "src/app/authentication/countries/data";
import { states } from "./center-states/data";

@Component({
  selector: "app-assessment-center",
  templateUrl: "./assessment-center.component.html",
  styleUrls: ["./assessment-center.component.scss"],
})
export class AssessmentCenterComponent implements OnInit{
  routeSub!: Subscription;
  assessmentId: string = "";
  centers!: ICenters;
  processingImport: boolean = false;
  processingAddAssessmentCenter: boolean = false;
  file!: File;
  processingTemplateDownload: boolean = false;
  centerSize: number = 0;
  centerPage: number = 0;
  processingFetchAssessmentCenters: boolean = false;
  filterFields: Array<string> = ["CENTER ID", "CENTER NAME", "STATE"];
  payload: IFilterCenter = {
    assessmentId: "",
    centerId: "",
    centerName: "",
    state: "",
  };
  searchValue: string = "";
  selectedField: string = "";
  isFilter: boolean = false;
  dashboardCenterData: ICenterDashboard;
  centerStates: Array<String> = states;
  processingDelete: boolean = false;
  constructor(
    private schedulerService: SchedulerService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private notifierService: NotifierService,
    private userService: UserService,
    private itembankAssessmentService: AssessmentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /*  this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.assessmentId = params["assessmentId"];
    }); */
    this.assessmentId = this.itembankAssessmentService.schedulerAssessmentId;
    this.fetchAssessmentCenters(0, 50);
    this.fetchCenterDashboard(
      this.itembankAssessmentService.schedulerAssessmentId
    );
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }
  openAddCenterModal(content: any) {
    this.modalService.open(content, { size: "lg", centered: true });
  }
  openModal(content: any, size?: string, centered?: boolean) {
    this.modalService.open(content, {
      size: size ? size : "lg",
      centered: true,
    });
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  editAssessmentCenter(centerId: string): void {
    this.router.navigate([
      `schedule/center/${this.assessmentId}/${centerId}/edit`,
    ]);
  }

  viewCenterDetails(centerId: string) {
    this.router.navigate([
      `schedule/center/${this.assessmentId}/${centerId}/details`,
    ]);
  }

  addNewAssessmentCenter(
    // centerName: string,
    // centerId: string,
    // centerAddress: string,
    // // centerCapacity: string,
    // centerState: string,
    // // centerMapLocation: string,
    // contactPersonPhone: string,
    // contactPersonEmail: string
    newAssessmentCenter: NgForm
  ): void {
    this.processingAddAssessmentCenter = true;

    if (newAssessmentCenter.form.value.centerId.toString().startsWith("0")) {
      this.notifierService.notify("error", "Center id cannot start with zero");
      this.processingAddAssessmentCenter = false;
      return;
    }

    let payload: INewAssessmentCenter = {
      address: newAssessmentCenter.form.value.centerAddress.trim(),
      assessment_id: this.assessmentId,
      center_id: newAssessmentCenter.form.value.centerId.trim(),
      contact_email: newAssessmentCenter.form.value.contactPersonEmail.trim(),
      contact_phone: newAssessmentCenter.form.value.contactPersonPhone.trim(),
      // map_location: centerMapLocation,
      name: newAssessmentCenter.form.value.centerName.trim(),
      org_id: this.userService.getCurrentUser().org_id,
      state: newAssessmentCenter.form.value.centerState.trim(),
    };
    // console.log(payload);
    this.schedulerService.createAssessmentCenter(payload).subscribe({
      next: (value) => {
        this.processingAddAssessmentCenter = false;
        // console.log(value);
        this.notifierService.notify("success", `Center created`);
        this.modalService.dismissAll();
        this.fetchAssessmentCenters(0, 50);
      },

      error: (err: HttpErrorResponse) => {
        this.notifierService.notify("error", err.error.error ?? err.message);
        this.processingAddAssessmentCenter = false;
      },
    });
  }

  cancel() {
    this.modalService.dismissAll();
  }

  clearFilter() {
    this.isFilter = false;
    this.searchValue = "";
    this.selectedField = "";

    this.fetchAssessmentCenters(0, 50);
  }

  onCenterFieldChange(selectedField: string) {
    this.selectedField = selectedField;

    // switch (selectedField) {
    //   case "STATE":
    //     this.payload.state = this.searchValue;
    //     console.log(this.searchValue + "Search value");
    //     // this.filterCenterByField();

    //     break;
    //   case "CENTER ID":
    //     this.payload.centerId = this.searchValue;
    //     // this.filterCenterByField();
    //     break;

    //   case "CENTER NAME":
    //     this.payload.centerName = this.searchValue;
    //     // this.filterCenterByField();
    //     break;
    // }
    // this.searchParticipantPayload.searchField = selectedField;
    // console.log(selectedField + " " + this.searchValue);
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
        this.fetchAssessmentCenters(0, 50);
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify("error", err.error.error);
        this.processingImport = false;
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

  fetchAssessmentCenters(page: number, size: number) {
    this.processingFetchAssessmentCenters = true;
    this.schedulerService
      .fetchAssessmentCenters(this.assessmentId, page, size)
      .subscribe({
        next: (value) => {
          this.centers = value;
          // console.log(this.centers);
          this.processingFetchAssessmentCenters = false;
        },
        error: (err: HttpErrorResponse) => {
          // console.log(err.error.message);
          this.processingFetchAssessmentCenters = false;
        },
      });
  }

  onCenterPageChange(event: any) {
    this.centerSize = event.rows;
    this.centerPage = event.page;
    if (this.isFilter) {
      this.filterCenterByField(this.centerPage, this.centerSize);
    } else {
      this.fetchAssessmentCenters(this.centerPage, this.centerSize);
    }
  }

  filterCenterByField(centerPage?: number, centerSize?: number) {
    this.processingFetchAssessmentCenters = true;
    this.payload.assessmentId = this.assessmentId;

    if (this.selectedField === "CENTER ID") {
      const { centerName, state, ...rest } = this.payload;
      this.payload = rest;
      this.payload.centerId = this.searchValue;
      rest.centerId = this.searchValue.trim();
    } else if (this.selectedField === "CENTER NAME") {
      const { centerId, state, ...rest } = this.payload;
      this.payload = rest;
      this.payload.centerName = this.searchValue.trim();
    } else if (this.selectedField === "STATE") {
      const { centerName, centerId, ...rest } = this.payload;
      this.payload = rest;
      this.payload.state = this.searchValue.trim();
    }
    // console.log(this.payload);
    this.schedulerService
      .filterCenterByField(this.payload, centerPage, centerSize)
      .subscribe({
        next: (value) => {
          this.processingFetchAssessmentCenters = false;
          this.isFilter = true;
          this.centers = value;
          // console.log(value);
        },
        error: (err: HttpErrorResponse) => {
          this.processingFetchAssessmentCenters = false;
          // console.log(err.error.message);
        },
      });
  }

  fetchCenterDashboard(assessmentId: string) {
    this.schedulerService.fetchCenterDashBoard(assessmentId).subscribe({
      next: (value) => {
        this.dashboardCenterData = value;
      },
      error: (err: HttpErrorResponse) => {
        // console.log(err.error.error);
      },
    });
  }

  deleteCenter(centerId: string) {
    this.processingDelete = true;
    this.schedulerService.deleteCenter(this.assessmentId, centerId).subscribe({
      next: (value) => {
        this.processingDelete = false;
        this.fetchAssessmentCenters(0, 250);
        this.fetchCenterDashboard(this.assessmentId);
        this.notifierService.notify("success", "Center Deleted");
        this.modalService.dismissAll();
      },
      error: (err: HttpErrorResponse) => {
        this.processingDelete = false;
        this.notifierService.notify("error", err.error.error);
      },
    });
  }
}
