import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ExamPreviewRoutingModule } from "./exam-preview-routing.module";
import { ExamPageComponent } from "./exam-page/exam-page.component";
import { ChoiceMatrixComponent } from "./exam-page/choice-matrix/choice-matrix.component";
import { MultipleResponseComponent } from "./exam-page/multiple-response/multiple-response.component";
import { TrueOrFalseComponent } from "./exam-page/true-or-false/true-or-false.component";
import { YesOrNoComponent } from "./exam-page/yes-or-no/yes-or-no.component";
import { CalculatorComponent } from "./components/calculator/calculator.component";
import { ResetButtonComponent } from "./components/reset-button/reset-button.component";
import { RevisitButtonComponent } from "./components/revisit-button/revisit-button.component";
import { ClassifyByMatchingComponent } from "./exam-page/classify-by-matching/classify-by-matching.component";
import { ClassifyByOrderingComponent } from "./exam-page/classify-by-ordering/classify-by-ordering.component";
import { ClozeImageWithDragDropComponent } from "./exam-page/cloze-image-with-drag-drop/cloze-image-with-drag-drop.component";
import { ClozeImageWithDropdownComponent } from "./exam-page/cloze-image-with-dropdown/cloze-image-with-dropdown.component";
import { ClozeImageWithTextComponent } from "./exam-page/cloze-image-with-text/cloze-image-with-text.component";
import { ClozeWithDropDownComponent } from "./exam-page/cloze-with-drop-down/cloze-with-drop-down.component";
import { ClozeWithTextComponent } from "./exam-page/cloze-with-text/cloze-with-text.component";
import { EssayWithRichTextComponent } from "./exam-page/essay-with-rich-text/essay-with-rich-text.component";
import { EssayWithShortTextComponent } from "./exam-page/essay-with-short-text/essay-with-short-text.component";
import { StandardChoiceComponent } from "./exam-page/standard-choice/standard-choice.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { FormsModule } from "@angular/forms";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import {
  NgbDropdownModule,
  NgbNavModule,
  NgbCarouselModule,
  NgbTooltipModule,
} from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { EditorModule } from "@tinymce/tinymce-angular";
import { ArchwizardModule } from "angular-archwizard";
import { PaginatorModule } from "primeng/paginator";
import { SimplebarAngularModule } from "simplebar-angular";

@NgModule({
  declarations: [
    ExamPageComponent,
    // EndExamPageComponent,
    // InstructionPageComponent,
    TrueOrFalseComponent,
    YesOrNoComponent,
    MultipleResponseComponent,
    // NavigatorComponent,
    StandardChoiceComponent,
    EssayWithShortTextComponent,
    EssayWithRichTextComponent,
    ClassifyByOrderingComponent,
    ClassifyByMatchingComponent,
    ClozeWithTextComponent,
    ClozeWithDropDownComponent,
    ResetButtonComponent,
    // OnboardingComponent,
    // WelcomePageComponent,
    RevisitButtonComponent,
    CalculatorComponent,
    ClozeImageWithTextComponent,
    ClozeImageWithDropdownComponent,
    ClozeImageWithDragDropComponent,
    ChoiceMatrixComponent,
  ],
  imports: [
    CommonModule,
    ExamPreviewRoutingModule,
    FormsModule,
    PaginatorModule,
    EditorModule,
    NgbDropdownModule,
    CKEditorModule,
    NgSelectModule,
    NgbNavModule,
    DragDropModule,
    SimplebarAngularModule,
    ArchwizardModule,
    NgbCarouselModule,
    NgbTooltipModule,
  ],
  exports: [ExamPageComponent, ExamPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExamPreviewModule {}
