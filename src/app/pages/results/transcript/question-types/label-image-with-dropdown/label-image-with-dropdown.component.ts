import { Component, Input, OnInit } from '@angular/core';
import { ParticipantSectionTranscript } from 'src/app/pages/items/models/result';

@Component({
  selector: 'app-label-image-with-dropdown',
  templateUrl: './label-image-with-dropdown.component.html',
  styleUrls: ['./label-image-with-dropdown.component.scss']
})
export class LabelImageWithDropdownComponent implements OnInit {

  @Input() currentQuestion: ParticipantSectionTranscript | null = null;
  @Input() currentQuestionIndex: number = 0;

  ngOnInit(): void { }

  isAnswerCorrect(index: number): boolean {
    if (!this.currentQuestion?.item_score || !this.currentQuestion?.item?.scoringOption) {
      return false;
    }
    const candidateAnswer = this.currentQuestion.item_score.graded_response?.[index]?.trim() || '';
    const correctAnswer = this.currentQuestion.item.scoringOption.answers?.[index]?.trim() || '';
    return candidateAnswer === correctAnswer;
  }

  getLabel(containerIndex: number, answerIndex: string): {value: string, label: string} | null {
    return this.currentQuestion?.item?.possibleResponses?.[containerIndex]?.responses?.[answerIndex]
  }

}
