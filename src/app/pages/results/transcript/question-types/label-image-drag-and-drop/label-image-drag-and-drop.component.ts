import { Component, Input, OnInit } from '@angular/core';
import { ParticipantSectionTranscript } from 'src/app/pages/items/models/result';

@Component({
  selector: 'app-label-image-drag-and-drop',
  templateUrl: './label-image-drag-and-drop.component.html',
  styleUrls: ['./label-image-drag-and-drop.component.scss']
})
export class LabelImageDragAndDropComponent implements OnInit {

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

  getCorrectLabel(index: number): string {
    if (!this.currentQuestion?.item?.options || !this.currentQuestion?.item?.scoringOption) return 'N/A';
    const correctAnswerVal = this.currentQuestion.item.scoringOption.answers?.[index];
    const optionObj = this.currentQuestion.item.options.find(opt => opt.value === correctAnswerVal);
    return optionObj ? optionObj.label : (correctAnswerVal || 'N/A');
  }

  getCandidateLabel(index: number): string {
    if (!this.currentQuestion?.item?.options || !this.currentQuestion?.item_score) return 'No Selection';
    const candidateVal = this.currentQuestion.item_score.graded_response?.[index];
    const optionObj = this.currentQuestion.item.options.find(opt => opt.value === candidateVal);
    return optionObj ? optionObj.label : (candidateVal || 'No Selection');
  }

}
