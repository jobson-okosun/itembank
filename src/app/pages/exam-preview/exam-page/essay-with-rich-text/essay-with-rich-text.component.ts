import { Component, HostListener, OnInit } from "@angular/core";
import { TINYMCE_SCRIPT_SRC, EditorComponent } from "@tinymce/tinymce-angular";
import { ItemModel } from "src/app/shared/model/itemModel";
import { ItemService } from "../../services/item.service";
import { ICandidateItem } from "../../models/candidate";
import { NotifierService } from "angular-notifier";

EditorComponent;

declare var tinymce: any; 
@Component({
  selector: "app-essay-with-rich-text",
  templateUrl: "./essay-with-rich-text.component.html",
  styleUrls: ["./essay-with-rich-text.component.scss"],
})
export class EssayWithRichTextComponent implements OnInit {
  // currentQuestion: ICandidateItem;
  currentQuestionNumber: number = 0;

  constructor(private itemService: ItemService, private notifierService:NotifierService) {}

  ngOnInit(): void {
    // this.setCurrentQuestion();
    this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();

    tinymce.init({
      selector: '#mytextarea',  // Your textarea selector for TinyMCE
      setup: (editor: any) => {
        // Listen for copy, cut, and paste events in TinyMCE editor
        editor.on('copy', (event: any) => this.handleEditorEvent(event, 'copy'));
        editor.on('cut', (event: any) => this.handleEditorEvent(event, 'cut'));
        editor.on('paste', (event: any) => this.handleEditorEvent(event, 'paste'));
      }
    });
    
  }

  getCurrentQuestion(): ICandidateItem {
    return this.itemService.getCurrentQuestion();
  }

  addToRevisit(questionNumber: number): void {
    this.itemService.captureQuestionNumberForRevisit(questionNumber);
  }

  // captureResponse(event:any){
  //   // console.log()
  //   this.itemService.captureAttemptedQuestionNumber()

  // }


  handleEditorEvent(event: any, action: 'copy' | 'cut' | 'paste') {
    if (this.getCurrentQuestion()) {
      switch (action) {
        case 'copy':
          if (this.getCurrentQuestion().allow_copy === false) {
            this.notifierService.notify("warning", 'you are not allowed to copy')
            event.preventDefault();
          }
          break;
        case 'cut':
          if (this.getCurrentQuestion().allow_cut === false) {
            this.notifierService.notify("warning", 'you are not allowed to cut')
            event.preventDefault();
          }
          break;
        case 'paste':
          if (this.getCurrentQuestion().allow_paste === false) {
            this.notifierService.notify("warning", 'you are not allowed to paste')
            event.preventDefault();
          }
          break;
      }
    }
  }


  
}
