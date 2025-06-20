/** module imports */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlatpickrModule } from "angularx-flatpickr";
import { NgSelectModule } from "@ng-select/ng-select";
import { OrderListModule } from "primeng/orderlist";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbDropdownModule,
  NgbNavModule,
  NgbAccordionModule,
  NgbRatingModule,
  NgbTooltipModule,
  NgbPopoverModule,
} from "@ng-bootstrap/ng-bootstrap";
import { DragulaModule } from "ng2-dragula";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ItemsRoutingModule } from "./items-routing.module";
import { LayoutsModule } from "src/app/layouts/layouts.module";
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { DROPZONE_CONFIG } from "ngx-dropzone-wrapper";
import { DropzoneConfigInterface } from "ngx-dropzone-wrapper";

import { SimplebarAngularModule } from "simplebar-angular";

import { EditorModule, TINYMCE_SCRIPT_SRC } from "@tinymce/tinymce-angular";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { PaginatorModule } from "primeng/paginator";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";

/** component import */
import { AllItemsComponent } from "./all-items/all-items.component";
import { NewItemComponent } from "./new-item/new-item.component";
import { ItemTypeComponent } from "./item-type/item-type.component";
import { CreateItemComponent } from "./create-item/create-item.component";
import { SingleResponseComponent } from "./single-response/single-response.component";
import { EssayComponent } from "./essay/essay.component";
import { MultipleResponseComponent } from "./multiple-response/multiple-response.component";
import { TrueOrFalseComponent } from "./true-or-false/true-or-false.component";
import { YesOrNoComponent } from "./yes-or-no/yes-or-no.component";
import { PreviewComponent } from "./preview/preview.component";
import { ItemTagComponent } from "./item-tag/item-tag.component";
import { TrueOrFalsePreviewComponent } from "./true-or-false-preview/true-or-false-preview.component";
import { YesOrNoPreviewComponent } from "./yes-or-no-preview/yes-or-no-preview.component";
import { MultipleResponsePreviewComponent } from "./multiple-response-preview/multiple-response-preview.component";
import { RichEssayComponent } from "./rich-essay/rich-essay.component";
import { EssayPreviewComponent } from "./essay-preview/essay-preview.component";
import { ClozeComponent } from "./cloze/cloze.component";
import { RichEssayPreviewComponent } from "./rich-essay-preview/rich-essay-preview.component";
import { PassageItemComponent } from "./passage-item/passage-item.component";
import { PassagePreviewComponent } from "./passage-preview/passage-preview.component";
import { ItemUtilitiesService } from "./item-utilities.service";
import { PassageAndItemComponent } from "./passage-and-item/passage-and-item.component";

/** service */
import { ItemHttpService } from "./item-http.service";
import { OrderingComponent } from "./ordering/ordering.component";
import { MatchingComponent } from "./matching/matching.component";
import { MatchingPreviewComponent } from "./matching-preview/matching-preview.component";
import { OrderingPreviewComponent } from "./ordering-preview/ordering-preview.component";
import { ChoiceMatrixComponent } from "./choice-matrix/choice-matrix.component";
import { ChoiceMatrixPreviewComponent } from "./choice-matrix-preview/choice-matrix-preview.component";
import { ClozeDropdownComponent } from "./cloze-dropdown/cloze-dropdown.component";
import { AllSubjectsComponent } from "./all-subjects/all-subjects.component";
import { SubjectComponent } from "./subject/subject.component";
import { PreviewContentComponent } from "./preview-content/preview-content.component";
import { ItemTopicComponent } from "./item-topic/item-topic.component";
import { ShortTextPreviewComponent } from "./short-text-preview/short-text-preview.component";
import { ItemsSubjectAndTopicAdditionComponent } from "./items-subject-and-topic-addition/items-subject-and-topic-addition.component";
import { EditItemComponent } from "./edit-item/edit-item.component";
import { ClozeTextPreviewComponent } from "./cloze-text-preview/cloze-text-preview.component";
import { ClozeDropdownPreviewComponent } from "./cloze-dropdown-preview/cloze-dropdown-preview.component";
import { DashboardModule } from "../dashboard/dashboard.module";
import { LabelImageTextComponent } from "./label-image-text/label-image-text.component";
import { LabelImageDropdownComponent } from "./label-image-dropdown/label-image-dropdown.component";
import { LabelImageDragDropComponent } from "./label-image-drag-drop/label-image-drag-drop.component";
import { LabelImageTextPreviewComponent } from "./label-image-text-preview/label-image-text-preview.component";
import { LabelImageDropdownPreviewComponent } from "./label-image-dropdown-preview/label-image-dropdown-preview.component";
import { LabelImageDragDropPreviewComponent } from "./label-image-drag-drop-preview/label-image-drag-drop-preview.component";
import { SubjectAnalysisComponent } from "./subject-analysis/subject-analysis.component";
import { ItemUsageHistoryComponent } from "./item-usage-history/item-usage-history.component";
import { ItemOfflineComponent } from "./item-offline/item-offline.component";
import { HtmlSanitizerPipe } from "src/app/shared/pipes/html-sanitizer.pipe";
import { ExamPreviewModule } from "../exam-preview/exam-preview.module";

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: "https://httpbin.org/post",
  maxFilesize: 50,
  acceptedFiles: "image/*",
};

@NgModule({
  declarations: [
    AllItemsComponent,
    NewItemComponent,
    ItemTypeComponent,
    CreateItemComponent,
    SingleResponseComponent,
    EssayComponent,
    MultipleResponseComponent,
    TrueOrFalseComponent,
    YesOrNoComponent,
    PreviewComponent,
    ItemTagComponent,
    TrueOrFalsePreviewComponent,
    YesOrNoPreviewComponent,
    MultipleResponsePreviewComponent,
    RichEssayComponent,
    EssayPreviewComponent,
    ClozeComponent,
    RichEssayPreviewComponent,
    PassageItemComponent,
    PassagePreviewComponent,
    PassageAndItemComponent,
    OrderingComponent,
    MatchingComponent,
    MatchingPreviewComponent,
    OrderingPreviewComponent,
    ChoiceMatrixComponent,
    ChoiceMatrixPreviewComponent,
    ClozeDropdownComponent,
    AllSubjectsComponent,
    SubjectComponent,
    PreviewContentComponent,
    ItemTopicComponent,
    ShortTextPreviewComponent,
    ItemsSubjectAndTopicAdditionComponent,
    EditItemComponent,
    ClozeTextPreviewComponent,
    ClozeDropdownPreviewComponent,
    LabelImageTextComponent,
    LabelImageDropdownComponent,
    LabelImageDragDropComponent,
    LabelImageTextPreviewComponent,
    LabelImageDropdownPreviewComponent,
    LabelImageDragDropPreviewComponent,
    SubjectAnalysisComponent,
    ItemUsageHistoryComponent,
    HtmlSanitizerPipe,
    ItemOfflineComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    FlatpickrModule,
    NgSelectModule,
    CKEditorModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbRatingModule,
    NgbTooltipModule,
    NgbAccordionModule,
    ItemsRoutingModule,
    SimplebarAngularModule,
    OrderListModule,
    NgbModalModule,
    NgbPopoverModule,
    DragDropModule,
    DragulaModule.forRoot(),
    PaginatorModule,
    DashboardModule,
    LayoutsModule,
    DropzoneModule,
    TableModule,
    ButtonModule,
    ExamPreviewModule
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: "tinymce/tinymce.min.js" },
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    },

    //ItemUtilitiesService,
    //ItemHttpService,
  ],
  exports: [
    ItemTagComponent,
    OrderingPreviewComponent,
    ItemTopicComponent,
    PreviewComponent,
    EssayPreviewComponent,
    MultipleResponsePreviewComponent,
    MatchingPreviewComponent,
    SubjectComponent,
    NewItemComponent,
    AllSubjectsComponent,
    PassageAndItemComponent,
    RichEssayPreviewComponent,
    ShortTextPreviewComponent,
    YesOrNoPreviewComponent,
    TrueOrFalsePreviewComponent,
    ClozeDropdownPreviewComponent,
    ClozeTextPreviewComponent,
    PassagePreviewComponent,
    ChoiceMatrixPreviewComponent,
    LabelImageTextComponent,
    LabelImageDropdownComponent,
    LabelImageDragDropComponent,
    LabelImageTextPreviewComponent,
    LabelImageDropdownPreviewComponent,
    LabelImageDragDropPreviewComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ItemsModule {}
