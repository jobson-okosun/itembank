import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNotificationsComponent } from './list-notifications/list-notifications.component';
import { SubjectNotificationsComponent } from './subject-notifications/subject-notifications.component';

const routes: Routes = [
  { path: '', component: ListNotificationsComponent },
  /* { path: ':status', component: ListNotificationsComponent }, */
  { path: 'subject/:subjectId/status/:stats', component: SubjectNotificationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsRoutingModule {}
