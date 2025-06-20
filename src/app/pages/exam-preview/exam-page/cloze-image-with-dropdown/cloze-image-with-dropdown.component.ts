import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../services/item.service";
import { ICandidateItem } from "../../models/candidate";

@Component({
  selector: "app-cloze-image-with-dropdown",
  templateUrl: "./cloze-image-with-dropdown.component.html",
  styleUrls: ["./cloze-image-with-dropdown.component.scss"],
})
export class ClozeImageWithDropdownComponent implements OnInit {
  currentQuestionNumber: number = 0;
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
  }

  getCurrentQuestion(): ICandidateItem {
    return this.itemService.getCurrentQuestion();
  }

  captureResponses(index: number, dropBoxValue: string) {
    this.getCurrentQuestion().responses[index] = dropBoxValue;
    this.itemService.captureAttemptedQuestionNumber();
    console.log(index);
    console.log(this.getCurrentQuestion().responses);
  }
}
