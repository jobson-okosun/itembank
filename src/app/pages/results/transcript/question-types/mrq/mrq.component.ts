import { Component, Input } from '@angular/core';
import { ParticipantSectionTranscript } from 'src/app/pages/items/models/result';

@Component({
  selector: 'app-mrq',
  templateUrl: './mrq.component.html',
  styleUrls: ['./mrq.component.scss']
})
export class MrqComponent {
  @Input() currentQuestion: ParticipantSectionTranscript | null = null;
  @Input() currentQuestionIndex: number = 0;

  stripSpaceFormat(str: string) {
    return str
      ?.replace(/<p>|<\/p>/g, '')
      .replace(/<\/?br\s*\/?>/gi, '')
      ?.replace(/<p>|<\/p>/g, '')
      .replace(/&nbsp;/g, ' ');
  }

  isResponseSelected(value: string): boolean {
    return this.currentQuestion?.item_score?.graded_response?.includes(value) ?? false;
  }

  isAnswerCorrect(value: string): boolean {
    return this.currentQuestion?.item?.scoringOption?.answers?.includes(value) ?? false;
  }
}
