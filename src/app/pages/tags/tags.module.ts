import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import {
  NgbDropdownModule,
  NgbModalModule,
  NgbTooltipModule,
  NgbPaginationModule,
  NgbAccordionModule,
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap';
import { PaginatorModule } from 'primeng/paginator';
import { ItemsModule } from '../items/items.module';
import { TagsRoutingModule } from './tags-routing.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { TableModule } from 'primeng/table';

/* import components */
import { AllTagsComponent } from './all-tags/all-tags.component';
import { ViewTagComponent } from './view-tag/view-tag.component';
import { ViewSubjectTagComponent } from './view-subject-tag/view-subject-tag.component';
import { TagAnalysisComponent } from './tag-analysis/tag-analysis.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { NoSpaceDirective } from './directives/no-space.directive';

@NgModule({
  declarations: [
    AllTagsComponent,
    ViewTagComponent,
    ViewSubjectTagComponent,
    TagAnalysisComponent,
    NoSpaceDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModalModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgbAccordionModule,
    FormsModule,
    TagsRoutingModule,
    NgbTooltipModule,
    SimplebarAngularModule,
    TableModule,
    ItemsModule,
    PaginatorModule,
    LayoutsModule,
  ],
  providers: [NgbActiveModal],
})
export class TagsModule {}
