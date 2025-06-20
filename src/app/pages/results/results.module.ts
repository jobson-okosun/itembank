import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import {
  NgbDropdownModule,
  NgbAccordionModule,
  NgbTooltipModule,
  NgbNavModule,
  NgbPopoverModule,
  NgbProgressbarModule,
} from "@ng-bootstrap/ng-bootstrap";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SimplebarAngularModule } from "simplebar-angular";
import { NgChartsModule } from "ng2-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { NgApexchartsModule } from "ng-apexcharts";
import { SharedModule } from "src/app/shared/shared.module";
import { EditorModule, TINYMCE_SCRIPT_SRC } from "@tinymce/tinymce-angular";
import { FormsModule } from "@angular/forms";

import { ResultsRoutingModule } from "./results-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GradingComponent } from "./grading/grading.component";
import { GradeComponent } from "./grade/grade.component";
import { CandidateResultComponent } from "./candidate-result/candidate-result.component";
import { TranscriptViewComponent } from "./transcript-view/transcript-view.component";
import { ReportsDashboardComponent } from "./reports-dashboard/reports-dashboard.component";
import { PaginatorModule } from "primeng/paginator";

@NgModule({
  declarations: [
    DashboardComponent,
    GradingComponent,
    GradeComponent,
    CandidateResultComponent,
    TranscriptViewComponent,
    ReportsDashboardComponent,
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    TableModule,
    NgbDropdownModule,
    NgbAccordionModule,
    NgbTooltipModule,
    NgbNavModule,
    NgbPopoverModule,
    SimplebarAngularModule,
    NgxEchartsModule,
    NgChartsModule,
    NgApexchartsModule,
    SharedModule,
    EditorModule,
    FormsModule,
    NgbModule,
    NgbProgressbarModule,
    PaginatorModule,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: "tinymce/tinymce.min.js" },
  ],
})
export class ResultsModule {}
