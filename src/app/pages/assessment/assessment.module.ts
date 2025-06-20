import { ItemHttpService } from "./../items/item-http.service";
/** modules */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { ArchwizardModule } from "angular-archwizard";
import { ItemsModule } from "../items/items.module";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";
import { PassagesModule } from "../passages/passages.module";
import {
  NgbAccordionModule,
  NgbNavModule,
  NgbDropdownModule,
  NgbTooltipModule,
  NgbPopoverModule,
  NgbModule,
} from "@ng-bootstrap/ng-bootstrap";
import { EditorModule } from "@tinymce/tinymce-angular";
import { AssessmentRoutingModule } from "./assessment-routing.module";
import { FlatpickrModule } from "angularx-flatpickr";
import { TableCheckbox, TableModule } from "primeng/table";
import { LayoutsModule } from "src/app/layouts/layouts.module";
import { TemplatesModule } from "../templates/templates.module";
import { SchedulerModule } from "../scheduler/scheduler.module";
import { PaginatorModule } from "primeng/paginator";

/** components */

import { CreateAssessmentComponent } from "./create-assessment/create-assessment.component";
import { AllAssessmentsComponent } from "./all-assessments/all-assessments.component";

/** services */

import { AllAssessmentsService } from "./all-assessments/all-assessments.service";

import { defineLordIconElement } from "lord-icon-element";
import lottie from "lottie-web";
import { ViewAssessmentComponent } from "./view-assessment/view-assessment.component";
import { ExamPreviewModule } from "../exam-preview/exam-preview.module";

// import { AssessmentPreviewComponent } from './assessment-preview/assessment-preview.component';

@NgModule({
  declarations: [
    CreateAssessmentComponent,
    AllAssessmentsComponent,
    ViewAssessmentComponent,
    // ExamPageComponent
    // AssessmentPreviewComponent,
  ],
  imports: [
    CommonModule,
    // SharedModule,
    AssessmentRoutingModule,
    ArchwizardModule,
    FormsModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbDropdownModule,
    EditorModule,
    FlatpickrModule,
    ItemsModule,
    NgSelectModule,
    TableModule,
    PassagesModule,
    NgbTooltipModule,
    LayoutsModule,
    TemplatesModule,
    SchedulerModule,
    ExamPreviewModule,
    NgbPopoverModule,
    NgbModule,
    PaginatorModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AssessmentModule {
  constructor() {
    defineLordIconElement(lottie.loadAnimation);
  }
}
