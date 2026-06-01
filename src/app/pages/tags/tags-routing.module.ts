import { AllTagsComponent } from './all-tags/all-tags.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTagComponent } from './view-tag/view-tag.component';
import { ViewSubjectTagComponent } from './view-subject-tag/view-subject-tag.component';
import { TagAnalysisComponent } from './tag-analysis/tag-analysis.component';

const routes: Routes = [
  { path: '', component: AllTagsComponent },
  { path: ':tagId', component: ViewTagComponent },
  { path: ':tagId/subject/:subjectId', component: ViewSubjectTagComponent },
  { path: ':tagId/subject/:subjectId/tag-analysis', component: TagAnalysisComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagsRoutingModule {}
