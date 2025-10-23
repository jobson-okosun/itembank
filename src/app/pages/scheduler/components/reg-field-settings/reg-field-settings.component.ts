import { Location } from "@angular/common";
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

import { HttpErrorResponse } from "@angular/common/http";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { NotifierService } from "angular-notifier";
import {
  IEditRegField,
  INewRegField,
  // INewRegField,
  IRegField,
} from "../../models/registration-fileds";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { SchedulerService } from "../../services/scheduler.service";
import { AssessmentsService } from "src/app/pages/assessment/service/assessments.service";
import { IRemoveEnableLoginFlagDTO } from "../../models/assessments";

@Component({
  selector: "app-reg-field-settings",
  templateUrl: "./reg-field-settings.component.html",
  styleUrls: ["./reg-field-settings.component.scss"],
})
export class RegFieldSettingsComponent implements OnInit {
  constructor(
    private locationService: Location,
    private schedulerService: SchedulerService,
    private router: Router,
    private notifierService: NotifierService,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private itemBankAssessmentService: AssessmentsService,
    private cdr: ChangeDetectorRef
  ) {}
  breadCrumbItems!: Array<{}>;
  fields: IRegField[] = [];
  fieldTypes: string[] = ["TEXTBOX", "SELECT", "CALENDAR"];
  selectBoxValues: any[] = [];
  routeSub!: Subscription;
  assessmentId: string = "";
  fetchingRegField: boolean = false;
  addingRegField: boolean = false;
  processingDelete: boolean = false;
  processingFieldEdit: boolean = false;
  processingRemoval: boolean = false;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Registration Fields" },
      { label: "Settings", active: true },
    ];
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.assessmentId = params["assessmentId"];
    });
    this.fetchRegFieldSettings();
  }

  get assessmentDetails(): {
    assessmentName: string;
  } {
    return {
      assessmentName: this.itemBankAssessmentService.activeAssessment,
    };
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
    // this.fields.splice(indexToRemove, 1);
    if (!fieldId) {
      this.fields.splice(indexToRemove!, 1);
      this.modalService.dismissAll();
    } else {
      this.processingDelete = true;
      this.schedulerService
        .deleteRegistrationField(this.assessmentId, fieldId)
        .subscribe({
          next: (value) => {
            this.processingDelete = false;

            this.fetchRegFieldSettings();
            this.notifierService.notify("success", "Field deleted");
            this.modalService.dismissAll();
          },
          error: (err: HttpErrorResponse) => {
            this.processingDelete = false;

            this.notifierService.notify("error", err.error.message);
          },
        });
    }
  }

  goBack(): void {
    this.locationService.back();
  }

  fetchRegFieldSettings() {
    this.fetchingRegField = true;
    this.schedulerService.fetchRegistrationFields(this.assessmentId).subscribe({
      next: (value) => {
        this.fetchingRegField = false;
        // console.log(value);
        this.fields = value;
        this.cdr.detectChanges();
        // By calling detectChanges, you inform Angular
        //that a change has occurred and it needs to re-evaluate the
        // component and its template.
        // This will prevent the ExpressionChangedAfterItHasBeenCheckedError from being thrown.
      },
      error: (err: HttpErrorResponse) => {
        this.fetchingRegField = false;

        this.notifierService.notify("error", err.error.message);
      },
    });
  }

  removeLoginField(fieldId: string, flag: boolean) {
    this.processingRemoval = true;
    const payload: IRemoveEnableLoginFlagDTO = {
      assessmentId: this.assessmentId,
      fieldId: fieldId,
      disable_login: flag,
    };
    this.schedulerService.removeLoginFlag(payload).subscribe({
      next: (value) => {
        this.processingRemoval = false;
        this.cancel();
        this.fetchRegFieldSettings();
        this.notifierService.notify(
          "success",
          `Successfully ${flag ? "Added" : "Removed"} login field`
        );
      },
      error: (err: HttpErrorResponse) => {
        this.processingRemoval = false;
        this.notifierService.notify("error", err.error.message);
      },
    });
  }

  addRegField(payload: INewRegField) {
    let pattern = /^[A-Za-z]+( [A-Za-z]+)*$/;

    this.addingRegField = true;
    // if (payload.fieldType === "TEXTBOX") {
    //   delete payload.values;
    // }
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
      if (payload.values.length < 2) {
        this.notifierService.notify(
          "error",
          "Select field must have at least 2 values"
        );
        this.addingRegField = false;
        return;
      }

      if (payload.values.some((value) => value.trim() === "")) {
        this.notifierService.notify(
          "error",
          "Select field cannot have empty values"
        );
        this.addingRegField = false;
        return;
      }
    }

    let value = payload.values.map((value) => value.trim());
    let name = payload.name.trim();
    payload.values = value;
    payload.name = name;

    this.schedulerService.addRegistrationField(payload).subscribe({
      next: (value) => {
        this.addingRegField = false;
        this.fetchRegFieldSettings();
        this.notifierService.notify(
          "success",
          `New field ${payload.name} added`
        );
        // console.log(value);
      },
      error: (err: HttpErrorResponse) => {
        this.addingRegField = false;
        this.notifierService.notify(
          "error",
          err.error.error
            ? err.error.error
            : err.error
            ? err.error.message
            : err.error.message
        );
        console.log(err);
      },
    });
  }

  addSelectOption(index: number) {
    const values = this.fields[index].values.map( item => item?.toLowerCase())
    // check if duplicates exists
    if(values.length !== new Set(values).size) {
      this.notifierService.notify('error', 'Duplicate values for select options');
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
    // console.log(indexToRemove + "" + valueIndex)
    if (fieldId == "") {
      this.fields[fieldIndex].values.splice(valueIndex, 1);
      this.modalService.dismissAll();
      return;
    }
    this.deleteRegistrationFieldValue(fieldId, arrayValue);
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
    const hasLoginFieldEnabled = this.fields.map( item => item.login ).filter(item => item).length

    if(hasLoginFieldEnabled) {
      this.notifierService.notify('error', 'Login field is already enabled!');
      return false;
    }
    
    return true
  }

  // checkIfInselectBoxValuesArrray(value: any, registrationFieldIndex: number): boolean {
  //   let foundItem = this.fields[registrationFieldIndex].values.find(
  //     (item) => item == value
  //   );

  //   console.log(foundItem);

  //   if (foundItem != null) {
  //     return true;
  //   }

  //   return false;
  // }

  save() {}
  saveField(
    fieldIndex: number
    // fieldNameRefValue: string,
    // fieldTypeRefValue: string,
    // isUniqueRefValue: boolean,
    // isMandatoryRefValue: boolean,
    // placementValueRef: number,
    // displayRef: boolean,
    // isLoginField: boolean
  ) {
    // console.log(selectBoxValues);
    // let capturedData: INewRegField = {
    //   assessmentId: this.assessmentId,
    //   fieldType: fieldTypeRefValue.toUpperCase(),
    //   mandatory: isMandatoryRefValue,
    //   name: fieldNameRefValue,
    //   placement: placementValueRef,
    //   unique: isUniqueRefValue,
    //   values: this.fields[fieldIndex].values,
    //   display: displayRef,
    //   login: isLoginField,
    // };
    let payload: INewRegField = {
      ...this.fields[fieldIndex],
      fieldType: this.fields[fieldIndex].type_,
      assessmentId: this.assessmentId,
    };
    delete payload.type_;
    delete payload.assessment_id;
    delete payload.id;

    // console.log(payload, "payload");
    this.addRegField(payload);
    // return capturedData;
    // console.log(capturedData);
    // const regFieldData = new RegFieldData();
    // regFieldData.captureValues("noah");
    // capturedData.
  }

  checkSelectType(i: number, fieldTypeRef: string): string {
    return fieldTypeRef;
  }

  addRegistrationFieldValue(registrationField_id: string, fieldValue: string) {
    if (fieldValue === "") {
      return this.notifierService.notify("error", "Please Enter a Value");
    }
    let payload = {
      assessment_id: this.assessmentId,
      field_value: fieldValue.trim(),
      registration_field_id: registrationField_id,
    };
    this.schedulerService.addRegistrationFieldValue(payload).subscribe({
      next: (value) => {
        this.notifierService.notify("success", "New Field Added Successfully");
        this.fetchRegFieldSettings();
        this.modalService.dismissAll();
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify("error", err.error.error);
      },
    });
  }

  openNewValueModal(content: any) {
    this.modalService.open(content);
  }

  openEditModal(content: any) {
    this.modalService.open(content);
  }

  cancel() {
    this.modalService.dismissAll();
  }

  deleteRegistrationFieldValue(fieldId: string, arrayValue: string) {
    this.schedulerService
      .deleteRegistrationFieldValue(this.assessmentId, fieldId, arrayValue)
      .subscribe({
        next: (value) => {
          this.notifierService.notify("success", "Deleted successfully");
          this.fetchRegFieldSettings();
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.message);
        },
      });
  }

  editRegistrationField(
    fieldId: string,
    fieldName: string,
    placement: any,
    display: boolean,
    // login: boolean,
    mandatory: boolean
  ) {
    this.processingFieldEdit = true;

    let payload: IEditRegField = {
      assessmentId: this.assessmentId,
      display: display,
      field_id: fieldId,
      name: fieldName,
      placement: parseInt(placement),
      // login: login,
      mandatory,
    };

    // if (payload.login == true && payload.mandatory == false) {
    //   this.notifierService.notify(
    //     "error",
    //     "Login field must be a mandatory field"
    //   );
    //   this.processingFieldEdit = false;
    //   return;
    // }
    this.schedulerService.editRegistrationField(payload).subscribe({
      next: (value) => {
        this.notifierService.notify("success", "Edit was successful");
        this.processingFieldEdit = false;
        this.modalService.dismissAll();
        this.fetchRegFieldSettings();
      },
      error: (err: HttpErrorResponse) => {
        this.processingFieldEdit = false;
        this.notifierService.notify("error", err.error.error);
      },
    });
  }

  canAddField(): boolean {
    let fieldsLength = this.fields.length;
    if (this.fields[fieldsLength - 1].id) {
      return true;
    }
    return false;
  }

  // without trackBy, component will destroy and recreate DOM elements on every update.
  trackByIndex(index: number, item: any): number {
    return index; //  return a unique identifier for the item
  }

  // Add this method to handle login checkbox changes
  handleLoginChange(fieldIndex: number, isLogin: boolean): void {
    if (isLogin) {
      // When login is checked, automatically set other required fields
      this.fields[fieldIndex].mandatory = true;
      this.fields[fieldIndex].unique = true;
      this.fields[fieldIndex].display = true;
    }
  }
}
