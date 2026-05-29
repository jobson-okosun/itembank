import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentTemplateComponent } from './assessment-template/assessment-template.component';
import { ViewAssessmentTemplateComponent } from './view-assessment-template/view-assessment-template.component';

const routes: Routes = [
  {
    path: 'assessment-templates',
    component: AssessmentTemplateComponent,
  },
  {
    path: 'assessment-templates/:template_id',
    component: ViewAssessmentTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplatesRoutingModule {}
