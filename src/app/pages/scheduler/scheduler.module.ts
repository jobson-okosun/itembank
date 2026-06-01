import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SchedulerRoutingModule } from "./scheduler-routing.module";
import { GroupComponent } from "./bank/group/group.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CenterComponent } from "./center/center.component";
import { GroupDetailsComponent } from "./bank/group/group-details/group-details.component";
import { SwiperModule } from "ngx-swiper-wrapper";
import { SWIPER_CONFIG } from "ngx-swiper-wrapper";
import {
  NgbNavModule,
  NgbDropdownModule,
  NgbAccordionModule,
  NgbTooltipModule,
  NgbProgressbarModule,
  NgbPopoverModule,
} from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { CenterDetailsComponent } from "./center/center-details/center-details.component";
import { CreateGroupComponent } from "./bank/group/create-group/create-group.component";
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddGroupParticipantComponent } from "./bank/group/add-group-participant/add-group-participant.component";
import { PassportUploadComponent } from "./passport-upload/passport-upload.component";
import { SchedulerDashboardComponent } from "./scheduler-dashboard/scheduler-dashboard.component";
import { CreateCustomCenterComponent } from "./center/create-custom-center/create-custom-center.component";
import { CreateFromBetaExamCenterComponent } from "./center/create-from-beta-exam-center/create-from-beta-exam-center.component";
import { ParticipantsComponent } from "./bank/participants/participants.component";
import { PaginatorModule } from "primeng/paginator";
import { EditCustomCenterComponent } from "./center/edit-custom-center/edit-custom-center.component";
import { AssessmentComponent } from "./assessment/assessment.component";
import { AssessmentDetailsComponent } from "./assessment/assessment-details/assessment-details.component";
import { AssessmentCenterDetailsComponent } from "./assessment/assessment-center-details/assessment-center-details.component";
import { CustomFieldSettingsComponent } from "./bank/group/custom-field-settings/custom-field-settings.component";
import { AddAssessmentGroupSectionComponent } from "./assessment/add-assessment-group-section/add-assessment-group-section.component";
import { RegFieldSettingsComponent } from "./components/reg-field-settings/reg-field-settings.component";
import { TableModule } from "primeng/table";
import { EditAssessmentCenterComponent } from "./assessment/edit-assessment-center/edit-assessment-center.component";
import { EditAssessmentGroupSectionComponent } from "./assessment/edit-assessment-group-section/edit-assessment-group-section.component";
import { EditorModule, TINYMCE_SCRIPT_SRC } from "@tinymce/tinymce-angular";
import { FlatpickrModule } from "angularx-flatpickr";
import { AssessmentSectionGroupDetailsComponent } from "./assessment/assessment-section-group-details/assessment-section-group-details.component";
import { SimplebarAngularModule } from "simplebar-angular";
import { CreateAssessmentComponent } from "../assessment/create-assessment/create-assessment.component";
import { AssessmentCenterComponent } from "./components/assessment-center/assessment-center.component";
import { AssessmentAdminComponent } from "./components/assessment-admin/assessment-admin.component";
import { AssessmentSectionGroupingComponent } from "./components/assessment-section-grouping/assessment-section-grouping.component";
import { AssessmentParticipantsComponent } from "./components/assessment-participants/assessment-participants.component";
import { LayoutsModule } from "src/app/layouts/layouts.module";
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import { EditAssessmentParticipantsComponent } from './components/edit-assessment-participants/edit-assessment-participants.component';
import { AssessmentBatchComponent } from './components/assessment-batch/assessment-batch.component';
import { ProctoringComponent } from './components/proctoring/proctoring.component';
//import { AssessmentModule } from "../assessment/assessment.module";

@NgModule({
  declarations: [
    GroupComponent,
    CenterComponent,
    GroupDetailsComponent,
    CenterDetailsComponent,
    CreateGroupComponent,
    AddGroupParticipantComponent,
    PassportUploadComponent,
    SchedulerDashboardComponent,
    CreateCustomCenterComponent,
    CreateFromBetaExamCenterComponent,
    ParticipantsComponent,
    EditCustomCenterComponent,
    AssessmentComponent,
    AssessmentDetailsComponent,
    AssessmentCenterDetailsComponent,
    CustomFieldSettingsComponent,
    AddAssessmentGroupSectionComponent,
    RegFieldSettingsComponent,
    EditAssessmentCenterComponent,
    EditAssessmentGroupSectionComponent,
    AssessmentSectionGroupDetailsComponent,
    AssessmentCenterComponent,
    AssessmentAdminComponent,
    AssessmentSectionGroupingComponent,
    AssessmentParticipantsComponent,
    SchedulePageComponent,
    EditAssessmentParticipantsComponent,
    AssessmentBatchComponent,
    ProctoringComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SchedulerRoutingModule,
    NgbDropdownModule,
    NgSelectModule,
    SwiperModule,
    NgbNavModule,
    DropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    PaginatorModule,
    NgbAccordionModule,
    NgbPopoverModule,
    TableModule,
    EditorModule,
    NgbTooltipModule,
    FlatpickrModule.forRoot(),
    SimplebarAngularModule,
    LayoutsModule,
    /* AssessmentModule */
  ],
  exports: [
    ParticipantsComponent,
    GroupComponent,
    CenterComponent,
    CenterDetailsComponent,
    GroupDetailsComponent,
    CreateCustomCenterComponent,
    CreateGroupComponent,
    AddGroupParticipantComponent,
    PassportUploadComponent,
    AssessmentDetailsComponent,
    AssessmentCenterComponent,
    AssessmentAdminComponent,
    AssessmentParticipantsComponent,
    AssessmentSectionGroupingComponent,
  ],
  providers: [
    {
      provide: TINYMCE_SCRIPT_SRC,
      useValue: "tinymce/tinymce.min.js",
    },
  ],
})
export class SchedulerModule {}
