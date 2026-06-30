import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewDashboardComponent } from './new-dashboard/new-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: NewDashboardComponent
  },
  {
    path: 'old',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
