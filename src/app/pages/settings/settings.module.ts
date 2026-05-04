import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsDashboardComponent } from './settings-dashboard/settings-dashboard.component';
import { BrandingComponent } from './branding/branding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [SettingsDashboardComponent, BrandingComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    NgbNavModule,
    NgbPopoverModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SettingsModule {}
