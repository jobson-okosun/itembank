import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResultRoutingModule } from "./result-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { SwiperModule } from "ngx-swiper-wrapper";
import {
  NgbNavModule,
  NgbDropdownModule,
  NgbAccordionModule,
  NgbTooltipModule,
  NgbProgressbarModule,
  NgbPopoverModule,
} from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaginatorModule } from "primeng/paginator";
import { TableModule } from "primeng/table";
import { EditorModule, TINYMCE_SCRIPT_SRC } from "@tinymce/tinymce-angular";
import { FlatpickrModule } from "angularx-flatpickr";
import { SimplebarAngularModule } from "simplebar-angular";
import { LayoutsModule } from "src/app/layouts/layouts.module";
import { ResultsAllAssessmentsComponent } from "./all-assessments/all-assessments.component";

@NgModule({
  declarations: [
  ResultsAllAssessmentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ResultRoutingModule,
    NgbDropdownModule,
    NgSelectModule,
    SwiperModule,
    NgbNavModule,
    DropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    PaginatorModule,
    NgbAccordionModule,
    NgbPopoverModule,
    TableModule,
    EditorModule,
    NgbTooltipModule,
    FlatpickrModule.forRoot(),
    SimplebarAngularModule,
    LayoutsModule,
  ],
  exports: [],
  providers: [
    {
      provide: TINYMCE_SCRIPT_SRC,
      useValue: "tinymce/tinymce.min.js",
    },
  ],
})
export class ResultModule {}
