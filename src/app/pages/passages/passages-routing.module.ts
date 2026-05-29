import { AllSubjectsPassageComponent } from './all-subjects-passage/all-subjects-passage.component';
import { ListPassagesComponent } from './list-passages/list-passages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPassageComponent } from './new-passage/new-passage.component';
import { EditPassageComponent } from './edit-passage/edit-passage.component';
import { ViewPassageComponent } from './view-passage/view-passage.component';
import { NewPassageItemComponent } from './new-passage-item/new-passage-item.component';
import { UsageHistoryComponent } from './usage-history/usage-history.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/itembank/passages/subjects' },
  { path: 'subjects', component: AllSubjectsPassageComponent },
  { path: 'subjects/:subjectId', component: ListPassagesComponent },
  { path: 'subjects/:subjectId/new-passage', component: NewPassageComponent },
  { path: 'subjects/:subjectId/passage/:passageId/edit-passage', component: EditPassageComponent },
  { path: 'subjects/:subjectId/passage/:passageId/usage', component: UsageHistoryComponent },
  { path: 'subjects/:subjectId/passage/:passageId/new-item', component: NewPassageItemComponent },
  { path: 'subjects/:subjectId/passage/:passageId', component: ViewPassageComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassagesRoutingModule {}
