/** module imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbAccordionModule, NgbNavModule, NgbTooltipModule, NgbPaginationModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemsModule } from '../items/items.module';
import { PassagesRoutingModule } from './passages-routing.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { PaginatorModule } from 'primeng/paginator';

/** component imports */ 
import { ListPassagesComponent } from './list-passages/list-passages.component';
import { AllSubjectsPassageComponent } from './all-subjects-passage/all-subjects-passage.component';
import { ItemUtilitiesService } from '../items/item-utilities.service';
import { NewPassageComponent } from './new-passage/new-passage.component';
import { ItemHttpService } from '../items/item-http.service';
import { EditPassageComponent } from './edit-passage/edit-passage.component';
import { ViewPassageComponent } from './view-passage/view-passage.component';
import { NewPassageItemComponent } from './new-passage-item/new-passage-item.component';
import { UsageHistoryComponent } from './usage-history/usage-history.component';
import { NgSelectModule } from "@ng-select/ng-select";


@NgModule({
  declarations: [
    ListPassagesComponent,
    AllSubjectsPassageComponent,
    NewPassageComponent,
    EditPassageComponent,
    ViewPassageComponent,
    NewPassageItemComponent,
    UsageHistoryComponent
  ],
  imports: [
    CommonModule,
    PassagesRoutingModule,
    SharedModule,
    FormsModule,
    NgbDropdownModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbPaginationModule,
    NgbTooltipModule,
    ItemsModule,
    SimplebarAngularModule,
    EditorModule,
    PaginatorModule,
    NgbPopoverModule,
    NgSelectModule
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    //ItemUtilitiesService,
    //ItemHttpService,
  ],
  exports: [ListPassagesComponent]
})
export class PassagesModule { }
