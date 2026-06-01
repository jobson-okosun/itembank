import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TranscriptPreviewComponent } from "./transcript-preview/transcript-preview.component";

const routes: Routes = [
  {path: '', component: TranscriptPreviewComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class transcriptRoutingModule {}
