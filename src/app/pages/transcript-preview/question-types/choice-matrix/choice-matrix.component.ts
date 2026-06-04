import { Component, Input, OnInit } from '@angular/core';
import { ParticipantSectionTranscript } from 'src/app/pages/items/models/result';

@Component({
  selector: 'app-choice-matrix',
  templateUrl: './choice-matrix.component.html',
  styleUrls: ['./choice-matrix.component.scss']
})
export class ChoiceMatrixComponent implements OnInit {

  @Input() currentQuestion: ParticipantSectionTranscript | null = null;
  @Input() currentQuestionIndex: number = 0;

  ngOnInit(): void { }

  stripSpaceFormat(str: string) {
    return str
      ?.replace(/<p>|<\/p>/g, '')
      .replace(/<\/?br\s*\/?>/gi, '')
      ?.replace(/<p>|<\/p>/g, '')
      .replace(/&nbsp;/g, ' ');
  }

  isSelectionCorrect(stemIndex: number, optionValue: string): boolean {
    if (!this.currentQuestion?.item?.scoringOption) return false;
    return this.currentQuestion.item.scoringOption.answers[stemIndex] === optionValue;
  }

  isCandidateSelection(stemIndex: number, optionValue: string): boolean {
    if (!this.currentQuestion?.item_score?.graded_response) return false;
    return this.currentQuestion.item_score.graded_response[stemIndex] === optionValue;
  }
}
