import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { NotifierService } from "angular-notifier";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { AssessmentsService } from "src/app/pages/assessment/service/assessments.service";
import { IRegField, INewRegField, IEditRegField } from "../../models/registration-fileds";

@Component({
  selector: "app-group-reg-field-settings",
  templateUrl: "./group-reg-field-settings.component.html",
  styleUrls: ["./group-reg-field-settings.component.scss"],
})
export class GroupRegFieldSettingsComponent implements OnInit {
  @Input() groupId: string = "";
  @Input() groupName: string = "";

  fields: IRegField[] = [];
  fieldTypes: string[] = ["TEXTBOX", "SELECT", "CALENDAR"];
  fetchingRegField: boolean = false;
  addingRegField: boolean = false;
  processingDelete: boolean = false;
  processingFieldEdit: boolean = false;
  processingRemoval: boolean = false;

  constructor(
    public activeModal: NgbActiveModal,
    private notifierService: NotifierService,
    private modalService: NgbModal,
    private itemBankAssessmentService: AssessmentsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (this.groupId) {
      this.fetchRegFieldSettings();
    }
  }

  addField(): void {
    const newField: IRegField = {
      assessment_id: "",
      id: "",
      mandatory: false,
      name: "",
      placement: this.fields.length + 1,
      type_: "",
      unique: false,
      values: new Array(),
      display: false,
      login: false,
    };
    this.fields.push(newField);
  }

  deleteField(fieldId: string, indexToRemove?: number): void {
    if (!fieldId) {
      this.fields.splice(indexToRemove!, 1);
      this.modalService.dismissAll();
    } else {
      this.processingDelete = true;
      this.itemBankAssessmentService
        .deleteGroupRegField(this.groupId, fieldId)
        .subscribe({
          next: () => {
            this.processingDelete = false;
            this.fetchRegFieldSettings();
            this.notifierService.notify("success", "Field deleted");
            this.modalService.dismissAll();
          },
          error: (err: HttpErrorResponse) => {
            this.processingDelete = false;
            this.notifierService.notify("error", err.error.message || "Failed to delete field");
          },
        });
    }
  }

  fetchRegFieldSettings() {
    this.fetchingRegField = true;
    this.itemBankAssessmentService.fetchGroupRegFields(this.groupId).subscribe({
      next: (value) => {
        this.fetchingRegField = false;
        this.fields = value;
        this.cdr.detectChanges();
      },
      error: (err: HttpErrorResponse) => {
        this.fetchingRegField = false;
        this.notifierService.notify("error", err.error.message || "Failed to fetch fields");
      },
    });
  }

  removeLoginField(fieldId: string, flag: boolean) {
    this.processingRemoval = true;
    const reqObservable = flag
      ? this.itemBankAssessmentService.removeGroupRegFieldLogin(this.groupId, fieldId)
      : this.itemBankAssessmentService.setGroupRegFieldLogin(this.groupId, fieldId);

    reqObservable.subscribe({
      next: () => {
        this.processingRemoval = false;
        this.cancel();
        this.fetchRegFieldSettings();
        this.notifierService.notify(
          "success",
          `Successfully ${flag ? "Removed" : "Added"} login field`
        );
      },
      error: (err: HttpErrorResponse) => {
        this.processingRemoval = false;
        this.notifierService.notify("error", err.error.message || "Action failed");
      },
    });
  }

  addRegField(payload: any) {
    let pattern = /^[A-Za-z]+( [A-Za-z]+)*$/;

    this.addingRegField = true;
    if (!pattern.test(payload.name)) {
      this.notifierService.notify(
        "error",
        "Field name can only be letters and cannot start with a space"
      );
      this.addingRegField = false;
      return;
    }

    if (payload.name.includes(":")) {
      this.notifierService.notify("error", "Field name cannot have :");
      this.addingRegField = false;
      return;
    }

    if (payload.fieldType === "CALENDAR" && payload.login) {
      this.notifierService.notify(
        "error",
        "Calendar field cannot be a login field"
      );
      this.addingRegField = false;
      return;
    }
    if (payload.fieldType === "CALENDAR" && payload.unique) {
      this.notifierService.notify(
        "error",
        "Calendar field cannot be a unique field"
      );
      this.addingRegField = false;
      return;
    }
    if (payload.fieldType === "IMAGE" && payload.unique) {
      this.notifierService.notify("error", "Image field cannot be unique");
      this.addingRegField = false;
      return;
    }
    if (payload.fieldType === "IMAGE" && payload.login) {
      this.notifierService.notify(
        "error",
        "Image field cannot be a login field"
      );
      this.addingRegField = false;
      return;
    }

    if (payload.fieldType === "SELECT" && payload.unique === true) {
      this.notifierService.notify("error", "Select field cannot be unique");
      this.addingRegField = false;
      return;
    }

    if (payload.fieldType === "SELECT" && payload.login === true) {
      this.notifierService.notify(
        "error",
        "Select field cannot be a login field"
      );
      this.addingRegField = false;
      return;
    }

    if (payload.login == true && payload.mandatory == false) {
      this.notifierService.notify(
        "error",
        "Login field must be a mandatory field"
      );
      this.addingRegField = false;
      return;
    }

    if (payload.fieldType === "SELECT") {
      if (!payload.values || payload.values.length < 2) {
        this.notifierService.notify(
          "error",
          "Select field must have at least 2 values"
        );
        this.addingRegField = false;
        return;
      }

      if (payload.values.some((value) => !value || value.trim() === "")) {
        this.notifierService.notify(
          "error",
          "Select field cannot have empty values"
        );
        this.addingRegField = false;
        return;
      }
    }

    let values = payload.values ? payload.values.map((value) => value.trim()) : [];
    let name = payload.name.trim();
    payload.values = values;
    payload.name = name;

    this.itemBankAssessmentService.addGroupRegField(this.groupId, payload).subscribe({
      next: () => {
        this.addingRegField = false;
        this.fetchRegFieldSettings();
        this.notifierService.notify(
          "success",
          `New field ${payload.name} added`
        );
      },
      error: (err: HttpErrorResponse) => {
        this.addingRegField = false;
        this.notifierService.notify(
          "error",
          err.error.error
            ? err.error.error
            : err.error.message
            ? err.error.message
            : "Failed to add field"
        );
      },
    });
  }

  addSelectOption(index: number) {
    if (!this.fields[index].values) {
      this.fields[index].values = [];
    }
    const values = this.fields[index].values.map((item) => item?.toLowerCase());
    if (values.length !== new Set(values).size) {
      this.notifierService.notify("error", "Duplicate values for select options");
      return;
    }

    this.fields[index].values.push("");
  }

  deleteSelectOption(
    fieldId: string,
    arrayValue: string,
    fieldIndex: number,
    valueIndex: number
  ) {
    if (fieldId === "") {
      this.fields[fieldIndex].values.splice(valueIndex, 1);
      this.modalService.dismissAll();
      return;
    }
    // Saved select option values cannot be deleted individually at the group level
    this.notifierService.notify("error", "Existing select option values cannot be deleted individually");
  }

  captureSelectValue(
    value: any,
    registrationFieldIndex: number,
    valueIndex: number
  ): void {
    this.fields[registrationFieldIndex].values[valueIndex] = value;
  }

  openConfirmationModal(content: any) {
    this.modalService.open(content);
  }

  canSelectLoginField() {
    const hasLoginFieldEnabled = this.fields.map((item) => item.login).filter((item) => item).length;

    if (hasLoginFieldEnabled) {
      this.notifierService.notify("error", "Login field is already enabled!");
      return false;
    }

    return true;
  }

  saveField(fieldIndex: number) {
    let payload: any = {
      ...this.fields[fieldIndex],
      fieldType: this.fields[fieldIndex].type_ || (this.fields[fieldIndex] as any).fieldType,
    };
    delete payload.type_;
    delete payload.assessment_id;
    delete payload.id;
    delete payload.assessmentId;

    this.addRegField(payload);
  }

  checkSelectType(i: number, fieldTypeRef: string): string {
    return fieldTypeRef;
  }

  openEditModal(content: any) {
    this.modalService.open(content);
  }

  cancel() {
    this.modalService.dismissAll();
  }

  editRegistrationField(
    fieldId: string,
    fieldName: string,
    placement: any,
    display: boolean,
    mandatory: boolean
  ) {
    this.processingFieldEdit = true;

    let payload = {
      name: fieldName,
      placement: parseInt(placement),
      display: display,
      mandatory: mandatory,
    };

    this.itemBankAssessmentService.editGroupRegField(this.groupId, fieldId, payload).subscribe({
      next: () => {
        this.notifierService.notify("success", "Edit was successful");
        this.processingFieldEdit = false;
        this.modalService.dismissAll();
        this.fetchRegFieldSettings();
      },
      error: (err: HttpErrorResponse) => {
        this.processingFieldEdit = false;
        this.notifierService.notify("error", err.error.error || "Failed to edit field");
      },
    });
  }

  canAddField(): boolean {
    let fieldsLength = this.fields.length;
    if (fieldsLength === 0) {
      return true;
    }
    if (this.fields[fieldsLength - 1].id) {
      return true;
    }
    return false;
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  handleLoginChange(fieldIndex: number, isLogin: boolean): void {
    if (isLogin) {
      this.fields[fieldIndex].mandatory = true;
      this.fields[fieldIndex].unique = true;
      this.fields[fieldIndex].display = true;
    }
  }

  closeModal() {
    this.activeModal.close();
  }
}
