import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsDashboardComponent } from './settings-dashboard/settings-dashboard.component';
import { BrandingComponent } from './branding/branding.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SettingsDashboardComponent,
    BrandingComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    NgbNavModule,
    NgbPopoverModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }
