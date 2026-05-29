import { Component, HostListener, OnInit } from "@angular/core";
import { ItemService } from "../../services/item.service";
import { ItemModel } from "src/app/shared/model/itemModel";
import { ICandidateItem } from "../../models/candidate";
import { NotifierService } from "angular-notifier";
@Component({
  selector: "app-essay-with-short-text",
  templateUrl: "./essay-with-short-text.component.html",
  styleUrls: ["./essay-with-short-text.component.scss"],
})
export class EssayWithShortTextComponent implements OnInit {
  // currentQuestion: ICandidateItem;
  displaySplit: boolean = true;
  currentQuestionNumber: number = 0;

  constructor(private itemService: ItemService, private notifierService: NotifierService) {}

  ngOnInit(): void {
    // this.setCurrentQuestion();
    this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
    
  }

  getCurrentQuestion(): ICandidateItem {
    return this.itemService.getCurrentQuestion();
  }

  updateAttemptedQuestions(): void {
    this.itemService.captureAttemptedQuestionNumber();
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
