import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranscriptPreviewComponent } from './transcript-preview/transcript-preview.component';
import { transcriptRoutingModule } from './transcript-preview-routing.module';
import { McqComponent } from './question-types/mcq/mcq.component';
import { CloseDropdownComponent } from './question-types/close-dropdown/close-dropdown.component';



@NgModule({
  declarations: [
    TranscriptPreviewComponent,
    McqComponent,
    CloseDropdownComponent
  ],
  imports: [
    CommonModule,
    transcriptRoutingModule
  ]
})
export class TranscriptPreviewModule { }
