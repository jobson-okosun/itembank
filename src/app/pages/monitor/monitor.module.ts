import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MonitorRoutingModule } from "./monitor-routing.module";
import { AllAssessmentsComponent } from "./all-assessments/all-assessments.component";
import { PaginatorModule } from "primeng/paginator";

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [AllAssessmentsComponent],
  imports: [CommonModule, MonitorRoutingModule, SharedModule, PaginatorModule],
})
export class MonitorModule {}
