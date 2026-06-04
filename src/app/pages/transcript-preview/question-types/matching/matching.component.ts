import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IOptionDTO } from 'src/app/pages/exam-preview/models/candidate';
import { ParticipantSectionTranscript } from 'src/app/pages/items/models/result';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss']
})
export class MatchingComponent implements OnInit {

  @Input() currentQuestion: ParticipantSectionTranscript | null = null;
  @Input() currentQuestionIndex: number = 0;
  @ViewChildren('leftBox', { read: ElementRef }) leftBoxes!: QueryList<ElementRef>;
  @ViewChildren('rightBox', { read: ElementRef }) rightBoxes!: QueryList<ElementRef>;
  @ViewChild('wrapper') wrapper!: ElementRef;

  lines: any[] = [];

  constructor() { }

  ngOnInit(): void { }

  getOption(resp: string): IOptionDTO {
    return this.currentQuestion.item.options.find(item => item.value == resp)
  }

  getCorrectPosition(resp: string) {
    return this.currentQuestion.item.scoringOption.answers.findIndex(item => item == resp)
  }

  ngAfterViewInit() {
    setTimeout(() => this.updateLines());
  }

  updateLines() {
    if (!this.wrapper?.nativeElement) return;
    const wrapperRect = this.wrapper.nativeElement.getBoundingClientRect();

    this.lines = this.leftBoxes.map((leftRef, i) => {
      const rightRef = this.rightBoxes.toArray()[i];

      const lRect = leftRef.nativeElement.getBoundingClientRect();
      const rRect = rightRef ? rightRef.nativeElement.getBoundingClientRect() : null;

      return {
        x1: lRect.right - wrapperRect.left,
        y1: lRect.top - wrapperRect.top + lRect.height / 2,
        x2: rRect ? rRect.left - wrapperRect.left : 0,
        y2: rRect ? rRect.top - wrapperRect.top + rRect.height / 2 : 0,
      };
    });
  }
}
