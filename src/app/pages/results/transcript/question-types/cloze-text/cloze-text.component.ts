import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ParticipantSectionTranscript } from 'src/app/pages/items/models/result';

@Component({
  selector: 'app-cloze-text',
  templateUrl: './cloze-text.component.html',
  styleUrls: ['./cloze-text.component.scss']
})
export class ClozeTextComponent implements OnInit {

  @Input() currentQuestion: ParticipantSectionTranscript | null = null;
  @Input() currentQuestionIndex: number = 0;
  sanitizedContent: any
  showAnswer: boolean = false

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.renderContent()
  }

  renderContent() {
    let content = this.currentQuestion.item.stimulus;
    if (!content?.length) {
      return
    }

    const parts = content.split('{{response}}');
    for (let i = 0; i < parts.length - 1; i++) {
      const selectHtml = this.createInputElement(i);
      parts[i] = parts[i] + selectHtml;
    }

    content = parts.join('');
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(content);
  }

  createInputElement(index: number): string {
    const correctAnswer = this.currentQuestion.item.scoringOption.answers[index];
    const selectedAnswer = this.currentQuestion.item_score.graded_response[index]
    const isCorrect = correctAnswer?.trim() == selectedAnswer?.trim()

    let inputs = `
        <span class="border border-secondary border-dashed p-1 rounded" style="width:auto; display:inline-block">
          <span style="width:auto; display:inline-block">
            <span class="d-flex flex-column gap-1" >
              <span class="badge rounded-pill bg-secondary ng-star-inserted" style="font-size: 0.7em;">Correct Answer</span>
              <span class="border borer-secondary" style="width:max-content; display:inline-block; padding: 6px">${correctAnswer}</span>
            </span>
          </span>
          <span style="width:auto; display:inline-block"> 
            <span class="d-flex flex-column gap-1" >
              <span class="badge rounded-pill bg-${isCorrect ? 'success' : 'danger'} ng-star-inserted" style="font-size: 0.7em;">Selected</span>
              <span class="border border-${isCorrect ? 'success' : 'danger'} " style="width:max-content; display:inline-block; padding: 6px"> ${selectedAnswer}</span>
            </span>
          </span> 
        </span>
      `

    return inputs;
  }

}
