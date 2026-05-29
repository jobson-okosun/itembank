import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CenterComponent } from "./center/center.component";
import { GroupComponent } from "./bank/group/group.component";
import { GroupDetailsComponent } from "./bank/group/group-details/group-details.component";
import { CenterDetailsComponent } from "./center/center-details/center-details.component";
import { CreateGroupComponent } from "./bank/group/create-group/create-group.component";
import { AddGroupParticipantComponent } from "./bank/group/add-group-participant/add-group-participant.component";
import { PassportUploadComponent } from "./passport-upload/passport-upload.component";
import { SchedulerDashboardComponent } from "./scheduler-dashboard/scheduler-dashboard.component";
import { CreateCustomCenterComponent } from "./center/create-custom-center/create-custom-center.component";
import { CreateFromBetaExamCenterComponent } from "./center/create-from-beta-exam-center/create-from-beta-exam-center.component";
import { ParticipantsComponent } from "./bank/participants/participants.component";
import { LoginComponent } from "src/app/authentication/login/login.component";
import { EditCustomCenterComponent } from "./center/edit-custom-center/edit-custom-center.component";
import { AssessmentComponent } from "./assessment/assessment.component";
import { AssessmentDetailsComponent } from "./assessment/assessment-details/assessment-details.component";
import { CustomFieldSettingsComponent } from "./bank/group/custom-field-settings/custom-field-settings.component";
import { RegFieldSettingsComponent } from "./components/reg-field-settings/reg-field-settings.component";
import { AddAssessmentGroupSectionComponent } from "./assessment/add-assessment-group-section/add-assessment-group-section.component";
import { AssessmentCenterDetailsComponent } from "./assessment/assessment-center-details/assessment-center-details.component";
import { EditAssessmentCenterComponent } from "./assessment/edit-assessment-center/edit-assessment-center.component";
import { EditAssessmentGroupSectionComponent } from "./assessment/edit-assessment-group-section/edit-assessment-group-section.component";
import { AssessmentSectionGroupDetailsComponent } from "./assessment/assessment-section-group-details/assessment-section-group-details.component";
import { AssessmentSectionGroupingComponent } from "./components/assessment-section-grouping/assessment-section-grouping.component";
import { SchedulePageComponent } from "./schedule-page/schedule-page.component";
import { EditAssessmentParticipantsComponent } from "./components/edit-assessment-participants/edit-assessment-participants.component";

const routes: Routes = [
  // { path: "scheduler/login", component: LoginComponent },
  /* {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard",
  }, */
  {
    path: "",
    component: SchedulerDashboardComponent,
  },
  {
    path: ":exam_id/exam-schedule",
    component: SchedulePageComponent,
  },
  {
    path: "bank/group",
    component: GroupComponent,
  },
  {
    path: "bank/group/create",
    component: CreateGroupComponent,
  },
  {
    path: "bank/group/:groupName/details",
    component: GroupDetailsComponent,
  },
  {
    path: "bank/group/add-participant",
    component: AddGroupParticipantComponent,
  },
  /* {
    path: "scheduler/assessment/details/:assessmentId/reg-field-settings",
    component: RegFieldSettingsComponent,
  }, */
  {
    path: "participants/details/:assessmentId/reg-field-settings",
    component: RegFieldSettingsComponent,
  },
  {
    path: "bank/participants",
    /* component: ParticipantsComponent, */
    component: AssessmentComponent,
  },
  {
    path: "centers",
    component: CenterComponent,
  },
  {
    path: "centers/create/custom",
    component: CreateCustomCenterComponent,
  },
  {
    path: "centers/create/beta-exam",
    component: CreateFromBetaExamCenterComponent,
  },
  {
    path: "centers/:centerName/details",
    component: CenterDetailsComponent,
  },
  {
    path: "centers/edit/custom-center",
    component: EditCustomCenterComponent,
  },
  /* {
    path: "scheduler/assessment",
    component: AssessmentComponent,
  }, */
  {
    path: "participants",
    component: AssessmentComponent,
  },
  /* {
    path: "scheduler/assessment/details/:assessmentId",
    component: AssessmentDetailsComponent,
  }, */
  {
    path: "participants/details/:assessmentId",
    component: AssessmentDetailsComponent,
  },
  /* {
    path: "scheduler/assessment/details/:assessmentId/:centerId/center",
    component: AssessmentCenterDetailsComponent,
  }, */
  {
    path: "center/:assessmentId/:centerId/details",
    component: AssessmentCenterDetailsComponent,
  },
  /* {
    path: "scheduler/assessment/:assessmentId/add-section-group",
    component: AddAssessmentGroupSectionComponent,
  }, */
  {
    path: "participants/:assessmentId/add-section-group",
    component: AddAssessmentGroupSectionComponent,
  },
  /* {
    path: "scheduler/assessment/edit-group-section",
    component: EditAssessmentGroupSectionComponent,
  }, */
  {
    path: "group/:assessmentId/:sectionGroupId/edit",
    component: EditAssessmentGroupSectionComponent,
  },

  {
    path: "participants/:participantId/:assessmentId/edit",
    component: EditAssessmentParticipantsComponent,
  },
  /* {
    path: "scheduler/assessment/:assessmentId/:centerId/edit-center",
    component: EditAssessmentCenterComponent,
  }, */
  {
    path: "center/:assessmentId/:centerId/edit",
    component: EditAssessmentCenterComponent,
  },

  {
    path: "group/participants/:assessmentId/:sectionGroupId/details",
    component: AssessmentSectionGroupDetailsComponent,
  },
  {
    path: "schedule/details/center",
    component: AssessmentDetailsComponent,
  },

  {
    path: "passport",
    component: PassportUploadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulerRoutingModule {}
