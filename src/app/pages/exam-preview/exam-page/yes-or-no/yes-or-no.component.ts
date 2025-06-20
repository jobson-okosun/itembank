import { Component, OnInit } from "@angular/core";
import { ItemModel } from "src/app/shared/model/itemModel";
import { ItemService } from "../../services/item.service";
import { AlphabetList } from "src/app/shared/enum/alphabetList";
import { ICandidateItem } from "../../models/candidate";

@Component({
  selector: "app-yes-or-no",
  templateUrl: "./yes-or-no.component.html",
  styleUrls: ["./yes-or-no.component.scss"],
})
export class YesOrNoComponent implements OnInit {
  // currentQuestion: ICandidateItem;
  alphabetList: typeof AlphabetList = AlphabetList;
  currentQuestionNumber: number = 0;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.currentQuestionNumber = this.itemService.currentQuestionNumber;
    console.log("i was called");
  }

  optionSelected(value) {
    this.itemService.getCurrentQuestion().responses[0] = value;
    this.itemService.captureAttemptedQuestionNumber();
  }

  getCurrentQuestion(): ICandidateItem {
    return this.itemService.getCurrentQuestion();
  }

  showAnswer() {
    if(this.showAnswer){
      this.itemService.getCurrentQuestion().responses =
      this.itemService.getCurrentQuestion().answers;
    }else{
      this.itemService.getCurrentQuestion().responses = []
    }
   
  }
}
