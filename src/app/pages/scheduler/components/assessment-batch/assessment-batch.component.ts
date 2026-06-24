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
  batchStartDate: Date | string = '';
  batchEndDate: Date | string = '';
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
    // if (this.assessmentId) {
    //   localStorage.setItem('assessmentId', this.assessmentId)
    // } else {
    //   const id = localStorage.getItem('assessmentId')
    //   if (id) {
    //     this.assessmentId = id
    //   }
    // }
    
    this.fetchBatches(this.assessmentId);
  }

  openModal(content: any, size?: string) {
    this.modalService.open(content, {
      size: size ? size : "md",
      centered: true,
    });
  }

  openStaticModal(content: any, size?: string) {
    this.modalService.open(content, {
      size: size ? size : "md",
      centered: true,
      backdrop: 'static'
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

    let startDate = typeof this.batchStartDate === 'string' ? this.batchStartDate : this.batchStartDate.toISOString();
    startDate = !startDate.endsWith('Z') ? startDate + 'Z' : startDate;

    let endDate = typeof this.batchEndDate === 'string' ? this.batchEndDate : this.batchEndDate.toISOString();
    endDate = !endDate.endsWith('Z') ? endDate + 'Z' : endDate;

    let paylaod: INewAssessmentBatchDTO = {
      // end_date_time:  new Date(this.batchEndDate)
      //   .toISOString()
      //   .split("Z")
      //   .join(""),
      // name: newBatch.form.value.batchName.trim(),
      // start_date_time: new Date(this.batchStartDate)
      //   .toISOString()
      //   .split("Z")
      //   .join(""),


      end_date_time: endDate,
      name: newBatch.form.value.batchName.trim(),
      start_date_time: startDate,
    };

    // console.log(paylaod)
    // return

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
  parseDate(dateStr: any): Date | null {
    if (!dateStr) return null;
    if (dateStr instanceof Date) return dateStr;
    let s = String(dateStr).trim();
    if (s.includes(" ") && !s.includes("T")) {
      s = s.replace(" ", "T");
    }
    if (!s.endsWith("Z")) {
      s = s + "Z";
    }
    const date = new Date(s);
    return isNaN(date.getTime()) ? new Date(dateStr) : date;
  }

  getBatchForEdit(batchId: string) {
    this.selectedBatchId = batchId;
    const batch = this.batches.find((b) => b.id === batchId);
    if (batch) {
      this.batchForEdit = {
        ...batch,
        start_date_time: batch.start_date_time ? this.parseDate(batch.start_date_time) : null,
        end_date_time: batch.end_date_time ? this.parseDate(batch.end_date_time) : null,
      } as any;
    }
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

    let startDate = typeof this.batchForEdit.start_date_time === 'string'
      ? this.batchForEdit.start_date_time
      : (this.batchForEdit.start_date_time as any as Date).toISOString();
    startDate = !startDate.endsWith('Z') ? startDate + 'Z' : startDate;

    let endDate = typeof this.batchForEdit.end_date_time === 'string'
      ? this.batchForEdit.end_date_time
      : (this.batchForEdit.end_date_time as any as Date).toISOString();
    endDate = !endDate.endsWith('Z') ? endDate + 'Z' : endDate;

    let payload: IAssessmentBatchDTO = {
      id: this.selectedBatchId,
      end_date_time: endDate,
      name: editBatch.form.value.batchName.trim(),
      start_date_time: startDate,
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
