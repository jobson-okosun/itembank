import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResultsAllAssessmentsComponent } from "./all-assessments/all-assessments.component";

const routes: Routes = [
  {
    path: "",
    component: ResultsAllAssessmentsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultRoutingModule {}
