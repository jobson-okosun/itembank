import { PassageAndItemComponent } from "./passage-and-item/passage-and-item.component";
import { NewItemComponent } from "./new-item/new-item.component";
/* component imports */
import { AllItemsComponent } from "./all-items/all-items.component";

/* module imports */
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllSubjectsComponent } from "./all-subjects/all-subjects.component";
import { SubjectComponent } from "./subject/subject.component";
import { EditItemComponent } from "./edit-item/edit-item.component";
import { SubjectNotificationsComponent } from "../notifications/subject-notifications/subject-notifications.component";
import { SubjectAnalysisComponent } from "./subject-analysis/subject-analysis.component";
import { ItemUsageHistoryComponent } from "./item-usage-history/item-usage-history.component";
import { ItemOfflineComponent } from "./item-offline/item-offline.component";

const routes: Routes = [
  { path: "", component: AllSubjectsComponent },
  { path: ":id/status/:stats", component: SubjectNotificationsComponent },
  { path: ":id/new-item", component: NewItemComponent },
  { path: ":id/edit-item", component: EditItemComponent },
  { path: ":id/analysis", component: SubjectAnalysisComponent },
  { path: ":id", component: SubjectComponent },
  { path: "passage/:id", component: PassageAndItemComponent },
  { path: "usage/item/:id", component: ItemUsageHistoryComponent },
  { path: "item/offline/1/1", component: ItemOfflineComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {}
