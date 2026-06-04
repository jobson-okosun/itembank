import { Component, Input, OnInit } from '@angular/core';
import { ParticipantSectionTranscript } from 'src/app/pages/items/models/result';

@Component({
  selector: 'app-label-image-with-text',
  templateUrl: './label-image-with-text.component.html',
  styleUrls: ['./label-image-with-text.component.scss']
})
export class LabelImageWithTextComponent implements OnInit {

  @Input() currentQuestion: ParticipantSectionTranscript | null = null;
  @Input() currentQuestionIndex: number = 0;

  ngOnInit(): void { }

  isAnswerCorrect(index: number): boolean {
    if (!this.currentQuestion?.item_score || !this.currentQuestion?.item?.scoringOption) {
      return false;
    }
    const candidateAnswer = this.currentQuestion.item_score.graded_response?.[index]?.trim() || '';
    const correctAnswer = this.currentQuestion.item.scoringOption.answers?.[index]?.trim() || '';

    if (this.currentQuestion.item.caseSensitive) {
      return candidateAnswer === correctAnswer;
    }
    return candidateAnswer.toLowerCase() === correctAnswer.toLowerCase();
  }

}
