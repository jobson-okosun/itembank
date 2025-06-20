import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GradingComponent } from "./grading/grading.component";
import { ReportsDashboardComponent } from "./reports-dashboard/reports-dashboard.component";
import { TranscriptViewComponent } from "./transcript-view/transcript-view.component";
import { CandidateResultComponent } from "./candidate-result/candidate-result.component";
import { GradeComponent } from "./grade/grade.component";


const routes: Routes = [
  { path: "", component: ReportsDashboardComponent },
  { path: ":exam_id/results", component: DashboardComponent },
  { path: ":exam_id/results/transcript", component: TranscriptViewComponent },
  {
    path: ":exam_id/results/:participant_id/result",
    component: CandidateResultComponent,
  },
  { path: "/grading", component: GradingComponent },
  { path: ":examId/grading/grader", component: GradeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultsRoutingModule {}
