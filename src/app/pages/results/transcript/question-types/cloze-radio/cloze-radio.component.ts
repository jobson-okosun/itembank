import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ParticipantSectionTranscript } from 'src/app/pages/items/models/result';

@Component({
  selector: 'app-cloze-radio',
  templateUrl: './cloze-radio.component.html',
  styleUrls: ['./cloze-radio.component.scss']
})
export class ClozeRadioComponent implements OnInit {

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
      const selectHtml = this.createSelectBlock(i);
      parts[i] = parts[i] + selectHtml;
    }

    content = parts.join('');
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(content);
  }

  createSelectBlock(index: number): string {
    const options = this.currentQuestion.item.possibleResponses[index].responses;
    const correctAnswer = this.currentQuestion.item.scoringOption.answers[index];
    const selectedAnswer = this.currentQuestion.item_score.graded_response[index]
    const isCorrect = correctAnswer?.trim() == selectedAnswer?.trim()

    const optionHTML = options.map((item, itemIndex) => {
      const option = item
      const isChecked = this.currentQuestion.item.scoringOption.answers[index] === option

      return `
          <span style="width:auto; display:inline-block">
            <span class="d-flex flex-column gap-1" >
              ${ correctAnswer == option
                ? '<span style="font-size: 0.7em;"  class="badge rounded-pill bg-secondary ng-star-inserted">Correct Answer</span>'
                : ''
              }
              ${ selectedAnswer == option
                ? `<span style="font-size: 0.7em;"  class="badge rounded-pill bg-secondary ng-star-inserted bg-${ isCorrect ? 'success' : 'danger' }">Selected</span>`
                : ''
              }
              <span class="d-flex align-items-center gap-2 rounded-pill bg-white py-2 px-3">
                  ${ isChecked 
                    ? `<input checked type="radio" name="option_${index}" value="${ option }" />`
                    : `<input type="radio" name="option_${index}" value="${ option }" />`
                  }
                  <span>${ option }</span>
              </span>
            </span>
          </span>
      `
    }).join('')

    let selectHtml = `
        <span class="border border-secondary border-dashed p-1 rounded" style="width:auto; display:inline-flex">${ optionHTML }</span>
      `

    return selectHtml;
  }

}
