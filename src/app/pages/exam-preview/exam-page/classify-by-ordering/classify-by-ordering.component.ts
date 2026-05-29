import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
} from "@angular/cdk/drag-drop";
import { ItemService } from "../../services/item.service";
import { ItemModel, Option } from "src/app/shared/model/itemModel";
import { ICandidateItem, IOptionDTO } from "../../models/candidate";

@Component({
  selector: "app-classify-by-ordering",
  templateUrl: "./classify-by-ordering.component.html",
  styleUrls: ["./classify-by-ordering.component.scss"],
})
export class ClassifyByOrderingComponent implements OnInit {
  // currentQuestion: ICandidateItem;
  options: Option[];
  currentQuestionNumber: number = 0;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
    this.itemService.getCurrentQuestion().options = this.sortOptionsByResponses(
      this.itemService.getCurrentQuestion().options,
      this.itemService.getCurrentQuestion().responses
    );

    // this.getOptions();
  }

  getCurrentQuestion(): ICandidateItem {
    // this.currentQuestion = this.itemService.getCurrentQuestion()
    return this.itemService.getCurrentQuestion();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.itemService.getCurrentQuestion().options,
      event.previousIndex,
      event.currentIndex
    );
    let responseArray: string[] = this.itemService
      .getCurrentQuestion()
      .options.map((option) => {
        return option.value;
      });



    console.log("reponses", responseArray);
    this.itemService.getCurrentQuestion().responses = responseArray;
    this.itemService.captureAttemptedQuestionNumber();
    // console.log(event.currentIndex + "current index");
    // console.log(event.previousIndex + "prviouse index");
    // console.log("options:", this.options);
  }

  // getOptions(): Option[] {
  //   this.options = this.currentQuestion.options;

  //   return this.options;
  // }

  sortOptionsByResponses(
    options: IOptionDTO[],
    responses: string[]
  ): IOptionDTO[] {
    if (responses.length !== 0) {
      return [...options].sort(
        (a, b) => responses.indexOf(a.value) - responses.indexOf(b.value)
      );
    }
    return options;
  }
}
