import { Component, OnInit } from "@angular/core";
import { ItemModel } from "src/app/shared/model/itemModel";
import { ItemService } from "../../services/item.service";
import { AlphabetList } from "src/app/shared/enum/alphabetList";
import { ICandidateItem } from "../../models/candidate";

@Component({
  selector: "app-standard-choice",
  templateUrl: "./standard-choice.component.html",
  styleUrls: ["./standard-choice.component.scss"],
})
export class StandardChoiceComponent implements OnInit {
  alphabetList: typeof AlphabetList = AlphabetList;
  currentQuestionNumber: number = 0;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    // this.getCurrentQuestion();
    this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
    
  }

  getCurrentQuestion(): ICandidateItem {
    return this.itemService.getCurrentQuestion();
  }

  optionSelected(value) {
    this.itemService.getCurrentQuestion().responses[0] = value;
    this.itemService.captureAttemptedQuestionNumber();
  }
}
