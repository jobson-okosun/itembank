import { Component, OnInit } from "@angular/core";
import { ItemModel } from "src/app/shared/model/itemModel";
import { ItemService } from "../../services/item.service";
import { AlphabetList } from "src/app/shared/enum/alphabetList";
import { ICandidateItem } from "../../models/candidate";
import { NotifierService } from "angular-notifier";

@Component({
  selector: "app-multiple-response",
  templateUrl: "./multiple-response.component.html",
  styleUrls: ["./multiple-response.component.scss"],
})
export class MultipleResponseComponent implements OnInit {
  // currentQuestion: ICandidateItem;
  alphabetList: typeof AlphabetList = AlphabetList;
  currentQuestionNumber: number = 0;

  constructor(
    private itemService: ItemService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    // this.setCurrentQuestion();
    this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
  }

  getCurrentQuestion(): ICandidateItem {
    return this.itemService.getCurrentQuestion();
  }

  optionSelected(value: any, event: any) {
    const currentQuestion = this.itemService.getCurrentQuestion();

    if (event.target.checked) {
      if (currentQuestion.responses.length < currentQuestion.max_responses) {
        if (!currentQuestion.responses.includes(value)) {
          currentQuestion.responses.push(value);
          console.log(currentQuestion.responses);
        }
      } else {
        // Prevent selecting more than max_responses
        event.target.checked = false;

        this.notifierService.notify(
          "warning",
          `You can only select up to ${currentQuestion.max_responses} options.`
        );
      }
    } else {
      const indexToRemove = currentQuestion.responses.indexOf(value);
      if (indexToRemove !== -1) {
        currentQuestion.responses.splice(indexToRemove, 1);
        console.log(currentQuestion.responses);
      }
    }

    this.itemService.captureAttemptedQuestionNumber();
  }

  optionClicked(value: any) {
    const currentQuestion = this.itemService.getCurrentQuestion();

    if (!currentQuestion.responses.includes(value)) {
      if (currentQuestion.responses.length < currentQuestion.max_responses) {
        currentQuestion.responses.push(value);
        console.log(currentQuestion.responses);
      } else {
        this.notifierService.notify(
          "warning",
          `You can only select up to ${currentQuestion.max_responses} options.`
        );
      }
    } else {
      const indexToRemove = currentQuestion.responses.indexOf(value);
      currentQuestion.responses.splice(indexToRemove, 1);
      console.log(currentQuestion.responses);
    }

    this.itemService.captureAttemptedQuestionNumber();
  }
}
