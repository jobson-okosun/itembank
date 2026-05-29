import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../services/item.service";
import { ICandidateItem } from "../../models/candidate";

@Component({
  selector: "app-choice-matrix",
  templateUrl: "./choice-matrix.component.html",
  styleUrls: ["./choice-matrix.component.scss"],
})
export class ChoiceMatrixComponent implements OnInit {
  currentQuestionNumber: number = 0;
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
  }

  getCurrentQuestion(): ICandidateItem {
    return this.itemService.getCurrentQuestion();
  }

  optionSelected(value: any, event: any, stem: number) {
    if (event.target.checked) {
      this.itemService.getCurrentQuestion().responses[stem] = value;
      this.itemService.captureAttemptedQuestionNumber();
    }

    console.log(this.getCurrentQuestion().responses, "responses from choice matrix" );
    // this.itemService.captureAttemptedQuestionNumber();
  }

  // optionClicked(value: any) {
  //   if (!this.itemService.getCurrentQuestion().responses.includes(value)) {
  //     this.itemService.getCurrentQuestion().responses.push(value);
  //     console.log(this.itemService.getCurrentQuestion().responses);
  //   } else {
  //     const indexToRemove = this.itemService
  //       .getCurrentQuestion()
  //       .responses.indexOf(value);

  //     this.itemService.getCurrentQuestion().responses.splice(indexToRemove, 1);
  //     console.log(this.itemService.getCurrentQuestion().responses);
  //   }
  //   this.itemService.captureAttemptedQuestionNumber();
  // }
}
