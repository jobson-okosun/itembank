import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsDashboardComponent } from './settings-dashboard/settings-dashboard.component';
import { BrandingComponent } from './branding/branding.component';

const routes: Routes = [
  { path: '', component: SettingsDashboardComponent },
  { path: 'branding', component: BrandingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
