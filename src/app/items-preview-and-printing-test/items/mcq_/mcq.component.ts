import { Component, Input, OnInit } from '@angular/core';
import { questionItem } from 'src/app/pages/exam-preview/models/exam-preview-data';
import { ParticipantSectionTranscript } from 'src/app/pages/items/models/result';

@Component({
  selector: 'mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss']
})
export class McqComponent implements OnInit {
  @Input() currentQuestion: questionItem | null = null;
  @Input() currentQuestionNumber: number;
  @Input() blockType: string | null = null;

  constructor() { }

  ngOnInit(): void {
    // console.log("Current Question:", this.currentQuestion);
  }

  stripSpaceFormat(str: string) {
    return str
    ?.replace(/<p>|<\/p>/g, '')
     .replace(/<\/?br\s*\/?>/gi, '')
    ?.replace(/<p>|<\/p>/g, '')
    .replace(/&nbsp;/g, ' ')
  }

}
