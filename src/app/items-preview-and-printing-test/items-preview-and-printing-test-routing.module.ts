import { RouterModule, Routes } from "@angular/router";
import { ItemsPreviewAndPrintingTestComponent } from "./items-preview-and-printing-test/items-preview-and-printing-test.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {path: '', component: ItemsPreviewAndPrintingTestComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ItemsPreviewAndPrintingTestRoutingModule {}
