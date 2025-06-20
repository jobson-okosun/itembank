import { Component, OnInit } from "@angular/core";
import { ItemModel } from "src/app/shared/model/itemModel";
import { ItemService } from "../../services/item.service";
import { AlphabetList } from "src/app/shared/enum/alphabetList";
import { ICandidateItem } from "../../models/candidate";

@Component({
  selector: "app-true-or-false",
  templateUrl: "./true-or-false.component.html",
  styleUrls: ["./true-or-false.component.scss"],
})
export class TrueOrFalseComponent implements OnInit {
  // currentQuestion: ICandidateItem;
  alphabetList: typeof AlphabetList = AlphabetList;
  currentQuestionNumber: number = 0;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
    console.log("i was called");
    
  }

  optionSelected(value) {
    this.itemService.getCurrentQuestion().responses[0] = value;
    this.itemService.captureAttemptedQuestionNumber();
  }

  getCurrentQuestion(): ICandidateItem {
    return this.itemService.getCurrentQuestion();
  }
}
