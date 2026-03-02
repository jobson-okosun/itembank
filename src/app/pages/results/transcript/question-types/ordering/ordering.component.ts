import { Component, Input, OnInit } from '@angular/core';
import { IOptionDTO } from 'src/app/pages/exam-preview/models/candidate';
import { ParticipantSectionTranscript } from 'src/app/pages/items/models/result';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.scss']
})
export class OrderingComponent implements OnInit {

  @Input() currentQuestion: ParticipantSectionTranscript | null = null;
  @Input() currentQuestionIndex: number = 0;

  constructor() { }

  ngOnInit(): void { }

  getOption(value: string): IOptionDTO {
    return this.currentQuestion.item.options.find(item => item.value == value)
  }

  getCorrectPosition(resp: string) {
    return this.currentQuestion.item.scoringOption.answers.findIndex(item => item == resp)
  }
}
