import { Component, OnInit } from "@angular/core";
import { SchedulerService } from "../../services/scheduler.service";
import { HttpErrorResponse } from "@angular/common/http";
import {
  IAssessmentBatchDTO,
  INewAssessmentBatchDTO,
} from "../../models/assessments";
import { AssessmentsService } from "src/app/pages/assessment/service/assessments.service";
import { NotifierService } from "angular-notifier";
import { NgForm } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-assessment-batch",
  templateUrl: "./assessment-batch.component.html",
  styleUrls: ["./assessment-batch.component.scss"],
})
export class AssessmentBatchComponent implements OnInit {
  batches: Array<IAssessmentBatchDTO>;
  assessmentId: string = "";
  batchStartDate: string = "";
  batchEndDate: string = "";
  proccessingAddBatch: boolean = false;
  proccessingDeleteBatch: boolean = false;
  processingBatchEdit: boolean;
  editedBatchEndDate: string = "";
  editedBatchStartDate: string = "";
  selectedBatchId: string = "";
  batchForEdit: IAssessmentBatchDTO;
  constructor(
    private schedulerService: SchedulerService,
    private itembankAssessmentService: AssessmentsService,
    private notifierService: NotifierService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.assessmentId = this.itembankAssessmentService.schedulerAssessmentId;
    this.fetchBatches(this.assessmentId);
  }

  openModal(content: any, size?: string) {
    this.modalService.open(content, {
      size: size ? size : "md",
      centered: true,
    });
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  fetchBatches(assessmentId: string) {
    this.schedulerService.fetchBatch(assessmentId).subscribe({
      next: (value) => {
        this.batches = value;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  createBatch(newBatch: NgForm) {
    this.proccessingAddBatch = true;
    let paylaod: INewAssessmentBatchDTO = {
      end_date_time:  new Date(this.batchEndDate)
        .toISOString()
        .split("Z")
        .join(""),
      name: newBatch.form.value.batchName.trim(),
      start_date_time: new Date(this.batchStartDate)
        .toISOString()
        .split("Z")
        .join(""),
    };

    this.schedulerService
      .createBatch(paylaod, this.assessmentId)
      .pipe(
        finalize(
          () => (
            (this.proccessingAddBatch = false), this.modalService.dismissAll()
          )
        )
      )
      .subscribe({
        next: (value) => {
          this.notifierService.notify("success", "Batch created");
          this.fetchBatches(this.assessmentId);
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.message);
        },
      });
  }
  getBatchForEdit(batchId: string) {
    this.selectedBatchId = batchId;
    this.batchForEdit = this.batches.find((batch) => batch.id === batchId);
    this.batchForEdit.end_date_time = this.batchForEdit.end_date_time.endsWith(
      "Z"
    )
      ? this.batchForEdit.end_date_time + "Z"
      : this.batchForEdit.end_date_time;

    this.batchForEdit.start_date_time =
      this.batchForEdit.start_date_time.endsWith("Z")
        ? this.batchForEdit.start_date_time + "Z"
        : this.batchForEdit.start_date_time;

    console.log(this.batchForEdit);
  }

  deleteBatch() {
    this.proccessingDeleteBatch = true;

    this.schedulerService
      .deleteBatch(this.selectedBatchId, this.assessmentId)
      .pipe(
        finalize(
          () => (
            (this.proccessingDeleteBatch = false),
            this.modalService.dismissAll()
          )
        )
      )
      .subscribe({
        next: (value) => {
          this.notifierService.notify("success", "Batch deleted");
          this.fetchBatches(this.assessmentId);
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.message);
        },
      });
  }

  editBatch(editBatch: NgForm) {
    this.processingBatchEdit = true;

    console.log(this.batchForEdit);
    let payload: IAssessmentBatchDTO = {
      id: this.selectedBatchId,
      end_date_time: new Date(this.batchForEdit.end_date_time)
        .toISOString()
        .split("Z")
        .join(""),
      name: editBatch.form.value.batchName.trim(),
      start_date_time: new Date(this.batchForEdit.start_date_time)
        .toISOString()
        .split("Z")
        .join(""),
    };
    this.schedulerService
      .editBatch(payload, this.assessmentId)
      .pipe(
        finalize(
          () => (
            (this.processingBatchEdit = false), this.modalService.dismissAll()
          )
        )
      )
      .subscribe({
        next: (value) => {
          this.modalService.dismissAll();
          this.notifierService.notify("success", "Batch Edited Successfully");
          this.fetchBatches(this.assessmentId);
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.message);
        },
      });
  }
}
