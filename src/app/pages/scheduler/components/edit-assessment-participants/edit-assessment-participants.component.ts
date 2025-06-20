import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "src/app/shared/user.service";
import { SchedulerService } from "../../services/scheduler.service";
import {
  IAssessmentBatchDTO,
  IEditAssessmentParticipantDTO,
  INewAssessmentParticipantFieldValue,
  IParticipantForEdit,
} from "../../models/assessments";
import { NotifierService } from "angular-notifier";
import { HttpErrorResponse } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-edit-assessment-participants",
  templateUrl: "./edit-assessment-participants.component.html",
  styleUrls: ["./edit-assessment-participants.component.scss"],
})
export class EditAssessmentParticipantsComponent implements OnInit {
  form: FormGroup;
  processingEdit: boolean = false;
  fetchingParticipantForEdit: boolean = false;
  dateToEdit: string = "";
  participantForEdit: IParticipantForEdit;
  assessmentId: string = "";
  participantId: string = "";
  breadCrumbItems!: Array<{}>;
  batches: IAssessmentBatchDTO[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private schedulerService: SchedulerService,
    private notifierService: NotifierService,
    private ar: ActivatedRoute,
    private locationService: Location
  ) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Participants" },
      { label: "edit", active: true },
    ];
    this.assessmentId = this.ar.snapshot.params["assessmentId"];
    this.participantId = this.ar.snapshot.params["participantId"];
    this.fetchParticipantForEdit(this.participantId);
    this.listBatches();
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
          : this.form.value[this.participantForEdit.fields[key].field_name].trim(),
      assessment_id: this.participantForEdit.assessmentId,
      org_id: this.userService.getCurrentUser().org_id,
      registration_field_id: this.participantForEdit.fields[key].field_id,
      assessment_participant_id: this.participantForEdit.id,
     
      values:  this.participantForEdit.fields[key].field_values.map((value)=> value ? value.trim() : value),

    }));

 
    const editAssessmentParticipantDTO: IEditAssessmentParticipantDTO = {
      assessmentId: this.participantForEdit.assessmentId,
      fieldValues: fieldValues,
      id: this.participantForEdit.id,
      // batch_id: this.participantForEdit.batch_id,
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
          this.goBack();
          // this.fetchParticipants(0, 250);
        },
        error: (err: HttpErrorResponse) => {
          this.processingEdit = false;
          this.notifierService.notify("error", err.error.error);
        },
      });
  }

  listBatches() {
    this.schedulerService.fetchBatch(this.assessmentId).subscribe({
      next: (value) => {
        this.batches = value;
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify("error", err.error.message);
      },
    });
  }

  captureBatch(batchId: string) {
    this.participantForEdit.batch_id = batchId;
  }

  goBack() {
    this.locationService.back();
  }
}
