import { Component, Input, OnInit } from '@angular/core';
import { ParticipantSectionTranscript } from 'src/app/pages/items/models/result';

@Component({
  selector: 'mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss']
})
export class McqComponent implements OnInit {
  @Input() currentQuestion: ParticipantSectionTranscript | null = null;
  @Input() currentQuestionIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  stripSpaceFormat(str: string) {
    return str
    ?.replace(/<p>|<\/p>/g, '')
     .replace(/<\/?br\s*\/?>/gi, '')
    ?.replace(/<p>|<\/p>/g, '')
    .replace(/&nbsp;/g, ' ')
  }

}
