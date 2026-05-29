import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbDropdownModule, NgbAccordionModule, NgbTooltipModule, } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'primeng/table';


import { TemplatesRoutingModule } from './templates-routing.module';
import { AssessmentTemplateComponent } from './assessment-template/assessment-template.component';
import { ViewAssessmentTemplateComponent } from './view-assessment-template/view-assessment-template.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AssessmentTemplateComponent,
    ViewAssessmentTemplateComponent,
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbNavModule,
    TableModule,
    NgbAccordionModule,
    NgbTooltipModule,
    FlatpickrModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AssessmentTemplateComponent],
})
export class TemplatesModule {}
