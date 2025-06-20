import { Component, OnInit } from "@angular/core";
import { ItemModel } from "src/app/shared/model/itemModel";

import { ItemService } from "../../services/item.service";
import { ICandidateItem } from "../../models/candidate";

@Component({
  selector: "app-cloze-with-drop-down",
  templateUrl: "./cloze-with-drop-down.component.html",
  styleUrls: ["./cloze-with-drop-down.component.scss"],
})
export class ClozeWithDropDownComponent implements OnInit {
  currentQuestion: ICandidateItem;
  displaySplit: boolean = false;
  clozeRenderArray: Array<any> = [];
  extractedTexts: Array<any> = [];
  extractedOptions: any;
  expectedCloze: any = [];
  totalDropBoxes: number = 0;
  currentQuestionNumber: number = 0;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.removePreviousCloze();
    this.setCurrentQuestion();
    this.checkCloze(this.expectedCloze);
    this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();

    if (this.itemService.getCurrentQuestion().responses.length == 0) {
      this.currentQuestion.responses = new Array<string>(this.totalDropBoxes);
      console.log(this.totalDropBoxes + "Dropboxes");
    }

    console.log(this.currentQuestion)
    // this.addOptions(this.clozeRenderArray, this.extractedOptions);
  }

  setCurrentQuestion() {
    this.currentQuestion = this.itemService.getCurrentQuestion();
    this.expectedCloze.push(this.itemService.getCurrentQuestion());
  }

  checkCloze(expectedCloze: Array<any>) {
    expectedCloze.forEach((element) => {
      this.extractedTexts = element.stimulus.split("{{response}}");
      let totalTextBoxes = this.renderCloze(this.extractedTexts);
      // this.currentQuestion.answers = new Array<string>(totalTextBoxes);
    });
  }

  removePreviousCloze() {
    this.expectedCloze = [];
    this.clozeRenderArray = [];
  }

  renderCloze(extractedTexts: any): number {
    this.totalDropBoxes = 0;
    extractedTexts.forEach((element: any, index: number) => {
      // dont add textbox to the last text
      if (index == this.extractedTexts.length - 1) {
        let clozeRender = { text: element, dropBox: false, index: index };
        this.clozeRenderArray.push(clozeRender);
      } else {
        let clozeRender = { text: element, dropBox: true, index: index };
        this.clozeRenderArray.push(clozeRender);
        ++this.totalDropBoxes;
      }
    });

    return this.totalDropBoxes;
  }

  // addOptions(clozeRenderArray: Array<any>, extractedOptions: Array<any>) {
  //   for (let i = 0; i < clozeRenderArray.length; i++) {
  //     for (let j = 0; j < extractedOptions.length; j++) {
  //       clozeRenderArray[j].possibleResponse = extractedOptions[j];
  //     }
  //   }
  // }
  captureResponses(index: number, dropBoxValue: string) {
    this.currentQuestion.responses[index] = dropBoxValue;
    this.itemService.captureAttemptedQuestionNumber();
    console.log(index);
    console.log(this.currentQuestion.responses);
  }

  // without trackBy, component will destroy and recreate DOM elements on every update.
  trackByIndex(index: number, item: any): number {
    return index; //  return a unique identifier for the item
  }
}
