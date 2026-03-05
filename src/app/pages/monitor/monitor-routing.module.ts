import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllAssessmentsComponent } from "./all-assessments/all-assessments.component";
import { AssessmentComponent } from "./assessment/assessment.component";
import { CenterComponent } from "./center/center.component";

const routes: Routes = [
  { path: "", component: AllAssessmentsComponent },
  { path: ":assessmentId", component: AssessmentComponent },
  { path: ":assessmentId/center/:centerId", component: CenterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorRoutingModule { }
