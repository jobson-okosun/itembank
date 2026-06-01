import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecycleDashboardComponent } from './recycle-dashboard/recycle-dashboard.component';
import { SubjectRecycleComponent } from './subject-recycle/subject-recycle.component';

const routes: Routes = [
  {
    path: '',
    component: RecycleDashboardComponent,
  },
  {
    path: ':subject/:id',
    component: SubjectRecycleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecycleRoutingModule {}
