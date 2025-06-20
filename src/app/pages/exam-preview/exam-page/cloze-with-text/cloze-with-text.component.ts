import { Component, OnInit, ViewChildren, QueryList, HostListener } from "@angular/core";

import { ItemModel } from "src/app/shared/model/itemModel";
import { ItemService } from "../../services/item.service";
import { NgModel } from "@angular/forms";
import { ICandidateItem } from "../../models/candidate";
import { NotifierService } from "angular-notifier";

@Component({
  selector: "app-cloze-with-text",
  templateUrl: "./cloze-with-text.component.html",
  styleUrls: ["./cloze-with-text.component.scss"],
})
export class ClozeWithTextComponent implements OnInit {
  // currentQuestion: ICandidateItem;
  displaySplit: boolean = false;

  clozeRenderArray: Array<any> = [];
  extractedTexts: Array<any> = [];
  expectedCloze: Array<any> = [];
  totalTextBoxes: number = 0;
  currentQuestionNumber: number = 0;

  constructor(private itemService: ItemService, private notifierService: NotifierService) {}

  // @ViewChildren(NgModel) textBoxRefList: QueryList<NgModel>;

  ngOnInit(): void {
    this.removePreviousCloze();
    // this.setCurrentQuestion();
    this.expectedCloze.push(this.itemService.getCurrentQuestion());
    this.checkCloze(this.expectedCloze);
    this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();

    // console.log(this.currentQuestion);
    // let totalTextBoxes =
    if (this.itemService.getCurrentQuestion().responses.length == 0) {
      this.itemService.getCurrentQuestion().responses = new Array<string>(
        this.totalTextBoxes
      ).fill('');

      console.log(this.getCurrentQuestion(), "for clozetext");
      console.log(this.totalTextBoxes + "textboxes");
    }
  }

  getCurrentQuestion(): ICandidateItem {
    return this.itemService.getCurrentQuestion();
  }

  removePreviousCloze(): void {
    this.expectedCloze = [];
    this.clozeRenderArray = [];
  }

  checkCloze(expectedCloze: Array<any>): void {
    expectedCloze.forEach((element) => {
      this.extractedTexts = element.stimulus.split("{{response}}");
      let totalTextBoxes = this.renderCloze(this.extractedTexts);
      // this.currentQuestion.answers = new Array<string>(totalTextBoxes);
      // console.log(totalTextBoxes + "textboxes")
    });
  }

  renderCloze(extractedTexts: any): number {
    this.totalTextBoxes = 0;
    extractedTexts.forEach((element: any, index: number) => {
      // dont add textbox to the last text
      if (index == this.extractedTexts.length - 1) {
        let clozeRender = { text: element, textBox: false, index: index };
        this.clozeRenderArray.push(clozeRender);
      } else {
        let clozeRender = { text: element, textBox: true, index: index };
        this.clozeRenderArray.push(clozeRender);
        ++this.totalTextBoxes;
      }
    });

    return this.totalTextBoxes;
  }

  captureResponses(index: number, textBoxValue: string) {
    const answerSet = [];
    /* this.textBoxRefList.forEach((element) => {
      answerSet.push(element.value);
      this.currentQuestion.answers = answerSet;
    });*/

    this.itemService.getCurrentQuestion().responses[index] = textBoxValue;
    // console.log(index);
    this.itemService.captureAttemptedQuestionNumber();
    console.log(this.itemService.getCurrentQuestion());
  }




     // Conditional prevention of copy action based on the fetched data
     @HostListener('document:copy', ['$event'])
     onCopy(event: ClipboardEvent): void {
       if ((this.getCurrentQuestion().allow_copy === false)) {
        this.notifierService.notify("warning", 'you are not allowed to copy')
         event.preventDefault();
       }
     }
   
     // Conditional prevention of cut action based on the fetched data
     @HostListener('document:cut', ['$event'])
     onCut(event: ClipboardEvent): void {
       if (this.getCurrentQuestion().allow_cut === false) {
        this.notifierService.notify("warning", 'you are not allowed to cut')
         event.preventDefault();
       }
     }
   
     // Conditional prevention of paste action based on the fetched data
     @HostListener('document:paste', ['$event'])
     onPaste(event: ClipboardEvent): void {
       if ((this.getCurrentQuestion().allow_paste === false)) {
        this.notifierService.notify("warning", 'you are not allowed to paste')
         event.preventDefault();
       }
     }
}
