import { Component, Input, OnInit } from '@angular/core';
import { ParticipantSectionTranscript } from 'src/app/pages/items/models/result';

@Component({
  selector: 'app-essay',
  templateUrl: './essay.component.html',
  styleUrls: ['./essay.component.scss']
})
export class EssayComponent implements OnInit {

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
}
