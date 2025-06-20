import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbDropdownModule, NgbTooltipModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutsModule } from 'src/app/layouts/layouts.module';

import { ModerationRoutingModule } from './moderation-routing.module';
import { ModerationComponent } from './moderation/moderation.component';


@NgModule({
  declarations: [
    ModerationComponent
  ],
  imports: [
    CommonModule,
    ModerationRoutingModule,
    FormsModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbModalModule,
    LayoutsModule
  ]
})
export class ModerationModule { }
