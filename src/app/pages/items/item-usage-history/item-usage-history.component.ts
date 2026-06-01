import { Component, OnInit } from "@angular/core";
import { ItemHttpService } from "../item-http.service";
import { UsageHistory } from "../models/usage-history";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-item-usage-history",
  templateUrl: "./item-usage-history.component.html",
  styleUrls: ["./item-usage-history.component.scss"],
})
export class ItemUsageHistoryComponent implements OnInit {
  itemId: string = "";
  itemUsageHistory: UsageHistory[] = [];
  breadCrumbItems!: Array<{}>;
  constructor(
    private itemService: ItemHttpService,
    private ar: ActivatedRoute,
    private locationService: Location
  ) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      {
        label: "Item Usage",
        active: true,
      },
      // {
      //   label: this.itemService.subjectName,
      //   active: true,
      // },
    ];
    console.log("hello");
    this.itemId = this.ar.snapshot.params["id"];
    this.fetchItemUsageCount(this.itemId);
  }

  fetchItemUsageCount(itemId: string) {
    this.itemService.fetchItemUsageCount(itemId).subscribe({
      next: (value) => {
        this.itemUsageHistory = value;
      },
    });
  }

  goBack(){
    this.locationService.back()
  }
}
