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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ResultsRoutingModule } from "./results-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GradingComponent } from "./grading/grading.component";
import { GradeComponent } from "./grade/grade.component";
import { CandidateResultComponent } from "./candidate-result/candidate-result.component";
import { TranscriptViewComponent } from "./transcript-view/transcript-view.component";
import { ReportsDashboardComponent } from "./reports-dashboard/reports-dashboard.component";
import { PaginatorModule } from "primeng/paginator";
import { McqComponent } from './transcript/question-types/mcq/mcq.component';
import { DrawingAndWritingComponent } from "./grading-item-types/drawing-and-writing/drawing-and-writing.component";
import {AccordionModule} from 'primeng/accordion';
import { CustomContextMenuComponent } from './grading-item-types/drawing-and-writing/custom-context-menu/custom-context-menu.component';
import { DraggableDirective } from "./grading-item-types/drawing-and-writing/directives/draggable.directive";
import { CloseDropdownComponent } from './transcript/question-types/close-dropdown/close-dropdown.component';

@NgModule({
  declarations: [
    DashboardComponent,
    GradingComponent,
    GradeComponent,
    CandidateResultComponent,
    TranscriptViewComponent,
    ReportsDashboardComponent,
    McqComponent,
    DrawingAndWritingComponent,
    CustomContextMenuComponent,
    DraggableDirective,
    CloseDropdownComponent   
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    TableModule,
    NgbDropdownModule,
    NgbAccordionModule,
    AccordionModule,
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
    ReactiveFormsModule,
    NgbModule,
    NgbProgressbarModule,
    PaginatorModule,
  ],
  exports: [],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: "tinymce/tinymce.min.js" },
  ],
})
export class ResultsModule {}
