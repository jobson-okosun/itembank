import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranscriptPreviewComponent } from './transcript-preview/transcript-preview.component';
import { transcriptRoutingModule } from './transcript-preview-routing.module';
import { McqComponent } from './question-types/mcq/mcq.component';
import { CloseDropdownComponent } from './question-types/close-dropdown/close-dropdown.component';
import { ClozeTextComponent } from './question-types/cloze-text/cloze-text.component';
import { ClozeRadioComponent } from './question-types/cloze-radio/cloze-radio.component';
import { TrueOrFalseComponent } from './question-types/true-or-false/true-or-false.component';
import { YesOrNoComponent } from './question-types/yes-or-no/yes-or-no.component';
import { MatchingComponent } from './question-types/matching/matching.component';
import { OrderingComponent } from './question-types/ordering/ordering.component';
import { MrqComponent } from './question-types/mrq/mrq.component';
import { ShortTextComponent } from './question-types/short-text/short-text.component';
import { EssayComponent } from './question-types/essay/essay.component';
import { ChoiceMatrixComponent } from './question-types/choice-matrix/choice-matrix.component';
import { LabelImageDragAndDropComponent } from './question-types/label-image-drag-and-drop/label-image-drag-and-drop.component';
import { LabelImageWithTextComponent } from './question-types/label-image-with-text/label-image-with-text.component';
import { LabelImageWithDropdownComponent } from './question-types/label-image-with-dropdown/label-image-with-dropdown.component';



@NgModule({
  declarations: [
    TranscriptPreviewComponent,
    McqComponent,
    CloseDropdownComponent,
    ClozeTextComponent,
    ClozeRadioComponent,
    TrueOrFalseComponent,
    YesOrNoComponent,
    MatchingComponent,
    OrderingComponent,
    MrqComponent,
    ShortTextComponent,
    EssayComponent,
    ChoiceMatrixComponent,
    LabelImageDragAndDropComponent,
    LabelImageWithTextComponent,
    LabelImageWithDropdownComponent
  ],
  imports: [
    CommonModule,
    transcriptRoutingModule
  ]
})
export class TranscriptPreviewModule { }
