import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ItemService } from "../../services/item.service";
import { IOptionDTO } from "../../models/candidate";
import { ItemType } from "src/app/shared/enum/itemTypes";
import { Item } from "src/app/pages/assessment/model/item.model";

@Component({
  selector: "app-revisit-button",
  templateUrl: "./revisit-button.component.html",
  styleUrls: ["./revisit-button.component.scss"],
})
export class RevisitButtonComponent implements OnInit, OnDestroy {
  showAnswer: boolean = false;
  previousResponses: string[] | null = [];
  @Input() questionNumber: number;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    const currentQuestion = this.itemService.getCurrentQuestion();
    this.showAnswer = currentQuestion?.showAnswer || false;
    this.previousResponses = [];
  }

  isDisplayAnswerForCurrentQuestion(): boolean {
    const currentQuestion = this.itemService.getCurrentQuestion();
    return currentQuestion?.showAnswer || false;
  }

  revisitQuestion(): void {
    if (
      this.itemService
        .getQuestionNumbersForRevisitInsection(this.itemService.currentSection)
        .includes(this.questionNumber)
    ) {
      this.itemService.removeQuestionNumberFromRevisit(this.questionNumber);
    } else if (
      !this.itemService
        .getQuestionNumbersForRevisitInsection(this.itemService.currentSection)
        .includes(this.questionNumber)
    ) {
      this.itemService.captureQuestionNumberForRevisit(this.questionNumber);
    }
  }

  getClassObject(): string {
    if (this.itemService.getCurrentQuestion().revisit === true) {
      return " ri-check-double-line  align-bottom";
    } else {
      return "";
    }
  }

  toggleShowAnswer() {
    const currentQuestion = this.itemService.getCurrentQuestion();
    const newShowAnswerState = !currentQuestion.showAnswer;
    currentQuestion.showAnswer = newShowAnswerState;
    this.showAnswer = newShowAnswerState;

    if (newShowAnswerState) {
      this.previousResponses = [...currentQuestion.responses];

      if (currentQuestion.item_type === ItemType.CLOZE_DROPDOWN_IMAGE) {
        this.handleClozeImageDropDown();
      } else if (
        currentQuestion.item_type === ItemType.ASSOCIATION ||
        currentQuestion.item_type === ItemType.ORDER_LIST
      ) {
        this.handleOrderingAndAssociation();
      } else if (currentQuestion.item_type === ItemType.IMAGE_DRAG_AND_DROP) {
        this.handleClozeImageDragDrop();
      } else {
        currentQuestion.responses = [...currentQuestion.answers];
      }
    } else {
      currentQuestion.responses = [...this.previousResponses];
    }
  }

  handleClozeImageDropDown() {
    const currentQuestion = this.itemService.getCurrentQuestion();
    const answers = currentQuestion.answers;

    currentQuestion.responses = answers.map((answer, index) => {
      const possibleResponsesForThisPosition =
        currentQuestion.possible_responses[index].responses;
      return possibleResponsesForThisPosition[parseInt(answer)];
    });
  }

  handleOrderingAndAssociation() {
    this.itemService.getCurrentQuestion().options = this.sortOptionsByAnswers(
      this.itemService.getCurrentQuestion().options,
      this.itemService.getCurrentQuestion().answers
    );
  }

  handleClozeImageDragDrop() {
    const currentQuestion = this.itemService.getCurrentQuestion();
    const answers = currentQuestion.answers;

    // Map the answers to their corresponding labels from options
    currentQuestion.responses = answers.map((answer) => {
      const matchingOption = currentQuestion.options.find(
        (opt) => opt.value === answer
      );
      return matchingOption?.label || "";
    });

    console.log(currentQuestion)
  }

  sortOptionsByAnswers(options: IOptionDTO[], answers: string[]): IOptionDTO[] {
    if (answers.length !== 0) {
      return [...options].sort(
        (a, b) => answers.indexOf(a.value) - answers.indexOf(b.value)
      );
    }
    return options;
  }

  ngOnDestroy(): void {
    console.log("destroyed revisit button");
    const currentQuestion = this.itemService.getCurrentQuestion();
    if (currentQuestion && this.previousResponses) {
      currentQuestion.responses = this.previousResponses;
      currentQuestion.showAnswer = false;
    }
    this.showAnswer = false;
  }
}
