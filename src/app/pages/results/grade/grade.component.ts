import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from '../../assessment/service/assessments.service';

export class Grading {
  score: number;
  remarks: string;
}

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss'],
})
export class GradeComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  assessmentName: string;
  grade: Grading = new Grading();
  questionsList!: any;
  currentQuestionId!: string;

  constructor(private assessmentService: AssessmentsService) {}

  ngOnInit(): void {
    this.assessmentName = this.assessmentService.activeAssessment;
    this.breadCrumbItems = [
      { label: 'grading', active: false },
      { label: 'grader', active: true },
    ];

    this.questionsList = [
      {
        itemType: 'MCQ',
        reference: 'Question 1',
        stimulus: '<p>What is the name of the president of russia?</p>',
        id: '0019722',
        status: 'pending',
      },
      {
        itemType: 'MRQ',
        reference: 'Question 1',
        stimulus: '<p>What is the name of the president of russia?</p>',
        id: '0019732',
        status: 'pending',
      },
      {
        itemType: 'TRUE_FALSE',
        reference: 'Question 1',
        stimulus: '<p>What is the name of the president of russia?</p>',
        id: '0019742',
        status: 'pending',
      },
      {
        itemType: 'ORDER_LIST',
        reference: 'Question 1',
        stimulus: '<p>What is the name of the president of russia?</p>',
        id: '0019752',
        status: 'pending',
      },
      {
        itemType: 'RICH_TEXT_ESSAY',
        reference: 'Question 1',
        stimulus: '<p>What is the name of the president of russia?</p>',
        id: '0019762712',
        status: 'pending',
      },
      {
        itemType: 'CLOZE',
        reference: 'Question 1',
        stimulus: '<p>What is the name of the president of russia?</p>',
        id: '0019772456',
        status: 'pending',
      },
      {
        itemType: 'RICH_TEXT_ESSAY',
        reference: 'Question 1',
        stimulus: '<p>What is the name of the president of russia?</p>',
        id: '0019792889',
        status: 'pending',
      },
      {
        itemType: 'CLOZE',
        reference: 'Question 1',
        stimulus: '<p>What is the name of the president of russia?</p>',
        id: '0019702567',
        status: 'pending',
      },
      {
        itemType: 'CLOZE',
        reference: 'Question 1',
        stimulus: '<p>What is the name of the president of russia?</p>',
        id: '0019772003',
        status: 'pending',
      },
      {
        itemType: 'RICH_TEXT_ESSAY',
        reference: 'Question 1',
        stimulus: '<p>What is the name of the president of russia?</p>',
        id: '0019792001',
        status: 'pending',
      },
      {
        itemType: 'CLOZE',
        reference: 'Question 1',
        stimulus: '<p>What is the name of the president of russia?</p>',
        id: '001970001',
        status: 'pending',
      },
    ];
    this.currentQuestionId = this.questionsList[0].id;
  }

  setActiveQuestionId(questionId: string) {
    this.currentQuestionId = questionId;
  }

  saveGrade() {}
}
