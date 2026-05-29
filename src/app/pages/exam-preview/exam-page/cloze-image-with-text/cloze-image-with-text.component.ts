import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../services/item.service";
import { ICandidateItem } from "../../models/candidate";

@Component({
  selector: "app-cloze-image-with-text",
  templateUrl: "./cloze-image-with-text.component.html",
  styleUrls: ["./cloze-image-with-text.component.scss"],
})
export class ClozeImageWithTextComponent implements OnInit {
  currentQuestionNumber: number = 0;
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
  }

  getCurrentQuestion(): ICandidateItem {
    return this.itemService.getCurrentQuestion();
  }
}
