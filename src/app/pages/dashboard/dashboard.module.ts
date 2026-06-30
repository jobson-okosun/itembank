import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { HttpClientModule } from '@angular/common/http';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { ManualsModule } from '../manuals/manuals.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { NoSanitizerPipe } from './no-sanitizer.pipe';
import { NewDashboardComponent } from './new-dashboard/new-dashboard.component';

@NgModule({
  declarations: [MainComponent, NoSanitizerPipe, NewDashboardComponent],
  exports: [NoSanitizerPipe],
  imports: [
    CommonModule,
    FormsModule,
    NgbTooltipModule,
    DashboardRoutingModule,
    SharedModule,
    NgApexchartsModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    HttpClientModule,
    LayoutsModule,
    ManualsModule
  ],
})
export class DashboardModule {}
