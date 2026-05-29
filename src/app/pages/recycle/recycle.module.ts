import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  NgbDropdownModule,
  NgbTooltipModule,
  NgbModalModule,
  NgbPaginationModule,
  NgbAccordionModule,
  NgbPopoverModule,
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { SimplebarAngularModule } from 'simplebar-angular';
import { ItemsModule } from '../items/items.module';
import { PaginatorModule } from 'primeng/paginator';

import { RecycleRoutingModule } from './recycle-routing.module';
import { RecycleDashboardComponent } from './recycle-dashboard/recycle-dashboard.component';
import { SubjectRecycleComponent } from './subject-recycle/subject-recycle.component';

@NgModule({
  declarations: [
    RecycleDashboardComponent,
    SubjectRecycleComponent,
  ],
  imports: [
    CommonModule,
    RecycleRoutingModule,
    SharedModule,
    HttpClientModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbAccordionModule,
    FormsModule,
    NgbModalModule,
    NgbPaginationModule,
    EditorModule,
    SimplebarAngularModule,
    ItemsModule,
    PaginatorModule,
    LayoutsModule,
    NgbPopoverModule,
    NgbModule
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
})
export class RecycleModule {}
