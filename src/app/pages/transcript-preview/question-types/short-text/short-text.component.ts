import { Component, Input, OnInit } from '@angular/core';
import { ParticipantSectionTranscript } from 'src/app/pages/items/models/result';

@Component({
  selector: 'app-short-text',
  templateUrl: './short-text.component.html',
  styleUrls: ['./short-text.component.scss']
})
export class ShortTextComponent implements OnInit {

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

  isAnswerCorrect(): boolean {
    if (!this.currentQuestion?.item_score || !this.currentQuestion?.item?.scoringOption) {
      return false;
    }
    const candidateAnswer = this.currentQuestion.item_score.graded_response?.[0]?.trim() || '';
    const correctAnswer = this.currentQuestion.item.scoringOption.answers?.[0]?.trim() || '';
    
    if (this.currentQuestion.item.numerical) {
      const candNum = Number(candidateAnswer);
      const corrNum = Number(correctAnswer);
      return !isNaN(candNum) && !isNaN(corrNum) && candNum === corrNum;
    }

    if (this.currentQuestion.item.caseSensitive) {
      return candidateAnswer === correctAnswer;
    }
    
    return candidateAnswer.toLowerCase() === correctAnswer.toLowerCase();
  }
}
