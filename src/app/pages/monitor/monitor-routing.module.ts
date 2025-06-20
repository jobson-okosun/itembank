import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllAssessmentsComponent } from "./all-assessments/all-assessments.component";

const routes: Routes = [{ path: "", component: AllAssessmentsComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorRoutingModule {}
