import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaginatorModule } from 'primeng/paginator';
import { ItemsModule } from '../items/items.module';
import {
  NgbDropdownModule,
  NgbNavModule,
  NgbModule,
  NgbTooltipModule,
  NgbPopoverModule,
} from '@ng-bootstrap/ng-bootstrap';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { ListNotificationsComponent } from './list-notifications/list-notifications.component';
import { SubjectNotificationsComponent } from './subject-notifications/subject-notifications.component';
import { RejectedQuestionsListComponent } from './rejected-questions-list/rejected-questions-list.component';

@NgModule({
  declarations: [ListNotificationsComponent, SubjectNotificationsComponent, RejectedQuestionsListComponent],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    SharedModule,
    PaginatorModule,
    ItemsModule,
    NgbDropdownModule,
    NgbModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbPopoverModule,
  ],
  exports: [ListNotificationsComponent]
})
export class NotificationsModule {}
