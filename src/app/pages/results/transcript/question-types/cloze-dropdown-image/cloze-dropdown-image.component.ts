import { Component, Input, OnInit } from '@angular/core';
import { ParticipantSectionTranscript } from 'src/app/pages/items/models/result';

@Component({
  selector: 'app-cloze-dropdown-image',
  templateUrl: './cloze-dropdown-image.component.html',
  styleUrls: ['./cloze-dropdown-image.component.scss']
})
export class ClozeDropdownImageComponent implements OnInit {

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
}
