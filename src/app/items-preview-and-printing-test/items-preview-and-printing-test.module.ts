import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsPreviewAndPrintingTestRoutingModule } from './items-preview-and-printing-test-routing.module';
import { McqComponent } from './items/mcq_/mcq.component';
import { ItemsPreviewAndPrintingTestComponent } from './items-preview-and-printing-test/items-preview-and-printing-test.component';
 


@NgModule({
  declarations: [
    McqComponent,
    ItemsPreviewAndPrintingTestComponent
  ],
  imports: [
    ItemsPreviewAndPrintingTestRoutingModule,
    CommonModule
  ]
})
export class ItemsPreviewAndPrintingTestModule { }
