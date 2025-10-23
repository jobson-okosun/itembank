import { AllAssessmentsComponent } from './all-assessments/all-assessments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAssessmentComponent } from './create-assessment/create-assessment.component';
import { ViewAssessmentComponent } from './view-assessment/view-assessment.component';
import { AssessmentTemplateComponent } from '../templates/assessment-template/assessment-template.component';
import { ViewAssessmentTemplateComponent } from '../templates/view-assessment-template/view-assessment-template.component';
import { GradingComponent } from '../results/grading/grading.component';
import { GradeComponent } from '../results/grade/grade.component';
import { CandidateResultComponent } from '../results/candidate-result/candidate-result.component';
import { TranscriptViewComponent } from '../results/transcript-view/transcript-view.component';
import { AssessmentSectionsComponent } from './marking-guide/assessment-sections/assessment-sections.component';
import { SectionComponent } from './marking-guide/section/section.component';

const routes: Routes = [
  { path: '', component: AllAssessmentsComponent },
  {
    path: 'templates',
    component: AssessmentTemplateComponent,
  },
  {
    path: 'templates/:template_id',
    component: ViewAssessmentTemplateComponent,
  },
  /* {
    path: 'templates/section-templates',
    component: AllAssessmentsComponent,
  }, */
  {
    path: 'new-assessment',
    component: CreateAssessmentComponent,
  },
  /* {
    path: ':assessmentId/schedule',
    loadChildren: () =>
      import('../scheduler/scheduler.module').then((m) => m.SchedulerModule),
  }, */
  {
    path: ':assessmentId/results',
    loadChildren: () =>
      import('../results/results.module').then((m) => m.ResultsModule),
  },
  {
    path: ':assessmentId/results/transcript',
    component: TranscriptViewComponent,
  },
  {
    path: ':assessmentId/results/:participantId/result',
    component: CandidateResultComponent,
  },
  {
    path: ':assessmentId/grading',
    component: GradingComponent,
  },
  {
    path: ':assessmentId/grading/:participantId/grade',
    component: GradeComponent,
  },
  {
    path: ':assessmentId',
    component: ViewAssessmentComponent,
  },
  {
    path: ':assessmentId/marking-guide/sections',
    component: AssessmentSectionsComponent,
  },
  {
    path: ':assessmentId/marking-guide/sections/:sectionId/scheme/:schemeId',
    component: SectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssessmentRoutingModule {}
