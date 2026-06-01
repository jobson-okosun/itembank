import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ParticipantSectionTranscript } from 'src/app/pages/items/models/result';

@Component({
  selector: 'app-close-dropdown',
  templateUrl: './close-dropdown.component.html',
  styleUrls: ['./close-dropdown.component.scss']
})
export class CloseDropdownComponent{

  @Input() currentQuestion: ParticipantSectionTranscript | null = null;
  @Input() currentQuestionIndex: number = 0;
  sanitizedContent: any
  showAnswer:boolean = false

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.renderContent()
  }

  renderContent() {
      let content = this.currentQuestion.item.stimulus;
      if(!content?.length) {
        return
      }
      
      const parts = content.split('{{response}}');
      for (let i = 0; i < parts.length - 1; i++) {
        const selectHtml = this.createSelectElement(i);
        parts[i] = parts[i] + selectHtml;
      }
      
      content = parts.join('');
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(content);
  }

  createSelectElement(index: number): string {
      const correctAnswer = this.currentQuestion.item.scoringOption.answers[index];
      const selectedAnswer = this.currentQuestion.item_score.graded_response[index]
      const isCorrect = correctAnswer?.trim() == selectedAnswer?.trim()
      
      let selectHtml = `
        <span class="border border-secondary border-dashed p-1 rounded" style="width:auto; display:inline-block">
          <span style="width:auto; display:inline-block">
            <span class="d-flex flex-column gap-1" >
              <span class="badge rounded-pill bg-secondary ng-star-inserted" style="font-size: 0.7em;">Correct Answer</span>
              <select class="form-select" style="width:auto; display:inline-block">
                <option selected>${correctAnswer}</option>
              </select>
            </span>
          </span>
          <span style="width:auto; display:inline-block"> 
            <span class="d-flex flex-column gap-1" >
              <span class="badge rounded-pill bg-${ isCorrect ? 'success': 'danger' } ng-star-inserted" style="font-size: 0.7em;">Selected</span>
              <span readonly class="border border-${ isCorrect ? 'success': 'danger' } " style="width:max-content; display:inline-block; padding: 6px;min-width: 100px">
                ${ selectedAnswer }
              </span>
            </span>
          </span> 
        </span>
      `
    
      return selectHtml;
  }

  
  viewAnswer(){
    this.showAnswer = !this.showAnswer
    this.renderContent();
  }
}
