import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbDropdownModule,
  NgbPaginationModule,
  NgbPopoverModule,
  NgbTypeaheadModule,
  NgbNavModule,
  NgbTooltipModule,
  NgbProgressbarModule,
  NgbAccordionModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';
import { SimplebarAngularModule } from 'simplebar-angular';
import { ItemsModule } from '../items/items.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { LayoutsModule } from 'src/app/layouts/layouts.module';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { ModeratorActivitiesComponent } from './moderator-activities/moderator-activities.component'

@NgModule({
  declarations: [    
    ViewUserComponent,
    ViewItemsComponent,
    ModeratorActivitiesComponent,
    EditUserComponent,
    UserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SimplebarAngularModule,
    NgbDropdownModule,
    NgbPopoverModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbNavModule,
    NgSelectModule,
    NgbTooltipModule,
    NgbProgressbarModule,
    NgbAccordionModule,
    FlatpickrModule,
    TableModule,
    ButtonModule,
    ItemsModule,
    PaginatorModule,
    LayoutsModule
  ],
})
export class UsersModule {}
