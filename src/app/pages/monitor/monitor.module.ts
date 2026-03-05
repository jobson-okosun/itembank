import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MonitorRoutingModule } from "./monitor-routing.module";
import { AllAssessmentsComponent } from "./all-assessments/all-assessments.component";
import { PaginatorModule } from "primeng/paginator";

import { SharedModule } from "src/app/shared/shared.module";
import { NgbDropdownModule, NgbAccordionModule, NgbTooltipModule, NgbNavModule, NgbPopoverModule } from "@ng-bootstrap/ng-bootstrap";
import { AccordionModule } from "primeng/accordion";
import { SimplebarAngularModule } from "simplebar-angular";
import { AssessmentComponent } from './assessment/assessment.component';
import { NgxEchartsModule } from "ngx-echarts";
import { CenterComponent } from './center/center.component';

@NgModule({
  declarations: [AllAssessmentsComponent, AssessmentComponent, CenterComponent],
  imports: [CommonModule, MonitorRoutingModule, SharedModule, PaginatorModule, NgbDropdownModule,
    NgbAccordionModule,
    AccordionModule,
    NgbTooltipModule,
    NgbNavModule,
    NgbPopoverModule,
    SimplebarAngularModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
  ],
})
export class MonitorModule { }
