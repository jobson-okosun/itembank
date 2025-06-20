import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from '../../assessment/service/assessments.service';

@Component({
  selector: 'app-transcript-view',
  templateUrl: './transcript-view.component.html',
  styleUrls: ['./transcript-view.component.scss'],
})
export class TranscriptViewComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  assessmentName: string;
  participants: any;
  questions: any[] = [];
  totalQuestions: number = 5;
  subjectData: any;
  questionView: boolean = false;

  constructor(private assessmentService: AssessmentsService) {}

  ngOnInit(): void {
    this.assessmentName = this.assessmentService.activeAssessment;
    this.breadCrumbItems = [
      { label: 'results', active: false },
      { label: 'transcript', active: true },
    ];
    this.subjectData = {
      subjectName: 'Use of English',
      subjectCode: 'UOE',
      totalQuestions: 5,
      questionsAnalysis: [
        {
          questionNo: 1,
          totalCorrect: 3,
          totalWrong: 2,
          optionsCount: 2,
          type: 'MCQ',
          correctAnswerIndex: 0,
        },
        {
          questionNo: 2,
          totalCorrect: 1,
          totalWrong: 4,
          optionsCount: 2,
          type: 'MCQ',
          correctAnswerIndex: 1,
        },
        {
          questionNo: 3,
          totalCorrect: 5,
          totalWrong: 0,
          optionsCount: 2,
          type: 'MCQ',
          correctAnswerIndex: 1,
        },
        {
          questionNo: 4,
          totalCorrect: 4,
          totalWrong: 1,
          optionsCount: 2,
          type: 'MCQ',
          correctAnswerIndex: 0,
        },
        {
          questionNo: 5,
          totalCorrect: 3,
          totalWrong: 2,
          optionsCount: 2,
          type: 'MCQ',
          correctAnswerIndex: 1,
        },
      ],
      participants: [
        {
          name: 'Okoisor Ochael',
          markScored: 3,
          responses: ['0', '1', '1', '1', '0'],
          subject: 'English',
          questions: [
            {
              id: 1,
              itemType: 'MCQ',
              stimulus: 'Who is the president of Nigeria?',
              score: 1,
              options: [
                { label: '<p>Atiku Abubakar</p>', value: '0' },
                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
              ],
              scoringOptions: {
                answers: ['1'],
              },
            },
            {
              id: 2,
              itemType: 'MCQ',
              stimulus: 'Who is the president of Nigeria?',
              score: 1,
              options: [
                { label: '<p>Atiku Abubakar</p>', value: '0' },
                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
              ],
              scoringOptions: {
                answers: ['1'],
              },
            },
            {
              id: 3,
              itemType: 'MCQ',
              stimulus: 'Who is the president of Nigeria?',
              score: 1,
              options: [
                { label: '<p>Atiku Abubakar</p>', value: '0' },
                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
              ],
              scoringOptions: {
                answers: ['1'],
              },
            },
            {
              id: 4,
              itemType: 'MCQ',
              stimulus: 'Who is the president of Nigeria?',
              score: 1,
              options: [
                { label: '<p>Atiku Abubakar</p>', value: '0' },
                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
              ],
              scoringOptions: {
                answers: ['1'],
              },
            },
            {
              id: 5,
              itemType: 'MCQ',
              stimulus: 'Who is the president of Nigeria?',
              score: 1,
              options: [
                { label: '<p>Atiku Abubakar</p>', value: '0' },
                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
              ],
              scoringOptions: {
                answers: ['1'],
              },
            },
          ],
        },
        {
          name: 'Edet Noah',
          markScored: 3,
          responses: ['1', '0', '0', '1', '1'],
          subject: 'English',
          questions: [
            {
              id: 1,
              itemType: 'MCQ',
              stimulus: 'Who is the president of Nigeria?',
              score: 1,
              options: [
                { label: '<p>Atiku Abubakar</p>', value: '0' },
                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
              ],
              scoringOptions: {
                answers: ['1'],
              },
            },
            {
              id: 2,
              itemType: 'MCQ',
              stimulus: 'Who is the president of Nigeria?',
              score: 1,
              options: [
                { label: '<p>Atiku Abubakar</p>', value: '0' },
                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
              ],
              scoringOptions: {
                answers: ['1'],
              },
            },
            {
              id: 3,
              itemType: 'MCQ',
              stimulus: 'Who is the president of Nigeria?',
              score: 1,
              options: [
                { label: '<p>Atiku Abubakar</p>', value: '0' },
                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
              ],
              scoringOptions: {
                answers: ['1'],
              },
            },
            {
              id: 4,
              itemType: 'MCQ',
              stimulus: 'Who is the president of Nigeria?',
              score: 1,
              options: [
                { label: '<p>Atiku Abubakar</p>', value: '0' },
                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
              ],
              scoringOptions: {
                answers: ['1'],
              },
            },
            {
              id: 5,
              itemType: 'MCQ',
              stimulus: 'Who is the president of Nigeria?',
              score: 1,
              options: [
                { label: '<p>Atiku Abubakar</p>', value: '0' },
                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
              ],
              scoringOptions: {
                answers: ['1'],
              },
            },
          ],
        },
        {
          name: 'Oluwole Ayobami',
          markScored: 2,
          responses: ['0', '0', '1', '1', ''],
          subject: 'English',
          questions: [
            {
              id: 1,
              itemType: 'MCQ',
              stimulus: 'Who is the president of Nigeria?',
              score: 1,
              options: [
                { label: '<p>Atiku Abubakar</p>', value: '0' },
                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
              ],
              scoringOptions: {
                answers: ['1'],
              },
            },
            {
              id: 2,
              itemType: 'MCQ',
              stimulus: 'Who is the president of Nigeria?',
              score: 1,
              options: [
                { label: '<p>Atiku Abubakar</p>', value: '0' },
                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
              ],
              scoringOptions: {
                answers: ['1'],
              },
            },
            {
              id: 3,
              itemType: 'MCQ',
              stimulus: 'Who is the president of Nigeria?',
              score: 1,
              options: [
                { label: '<p>Atiku Abubakar</p>', value: '0' },
                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
              ],
              scoringOptions: {
                answers: ['1'],
              },
            },
            {
              id: 4,
              itemType: 'MCQ',
              stimulus: 'Who is the president of Nigeria?',
              score: 1,
              options: [
                { label: '<p>Atiku Abubakar</p>', value: '0' },
                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
              ],
              scoringOptions: {
                answers: ['1'],
              },
            },
            {
              id: 5,
              itemType: 'MCQ',
              stimulus: 'Who is the president of Nigeria?',
              score: 1,
              options: [
                { label: '<p>Atiku Abubakar</p>', value: '0' },
                { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
              ],
              scoringOptions: {
                answers: ['1'],
              },
            },
          ],
        },
      ],
    };

    this.participants = [
      {
        name: 'Okoisor Ochael',
        markScored: 3,
        responses: ['0', '1', '1', '1', '0'],
        subject: 'English',
        questions: [
          {
            id: 1,
            itemType: 'MCQ',
            stimulus: 'Who is the president of Nigeria?',
            score: 1,
            options: [
              { label: '<p>Atiku Abubakar</p>', value: '0' },
              { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
            ],
            scoringOptions: {
              answers: ['1'],
            },
          },
          {
            id: 2,
            itemType: 'MCQ',
            stimulus: 'Who is the president of Nigeria?',
            score: 1,
            options: [
              { label: '<p>Atiku Abubakar</p>', value: '0' },
              { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
            ],
            scoringOptions: {
              answers: ['1'],
            },
          },
          {
            id: 3,
            itemType: 'MCQ',
            stimulus: 'Who is the president of Nigeria?',
            score: 1,
            options: [
              { label: '<p>Atiku Abubakar</p>', value: '0' },
              { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
            ],
            scoringOptions: {
              answers: ['1'],
            },
          },
          {
            id: 4,
            itemType: 'MCQ',
            stimulus: 'Who is the president of Nigeria?',
            score: 1,
            options: [
              { label: '<p>Atiku Abubakar</p>', value: '0' },
              { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
            ],
            scoringOptions: {
              answers: ['1'],
            },
          },
          {
            id: 5,
            itemType: 'MCQ',
            stimulus: 'Who is the president of Nigeria?',
            score: 1,
            options: [
              { label: '<p>Atiku Abubakar</p>', value: '0' },
              { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
            ],
            scoringOptions: {
              answers: ['1'],
            },
          },
        ],
      },
      {
        name: 'Edet Noah',
        markScored: 3,
        responses: ['1', '0', '0', '1', '1'],
        subject: 'English',
        questions: [
          {
            id: 1,
            itemType: 'MCQ',
            stimulus: 'Who is the president of Nigeria?',
            score: 1,
            options: [
              { label: '<p>Atiku Abubakar</p>', value: '0' },
              { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
            ],
            scoringOptions: {
              answers: ['1'],
            },
          },
          {
            id: 2,
            itemType: 'MCQ',
            stimulus: 'Who is the president of Nigeria?',
            score: 1,
            options: [
              { label: '<p>Atiku Abubakar</p>', value: '0' },
              { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
            ],
            scoringOptions: {
              answers: ['1'],
            },
          },
          {
            id: 3,
            itemType: 'MCQ',
            stimulus: 'Who is the president of Nigeria?',
            score: 1,
            options: [
              { label: '<p>Atiku Abubakar</p>', value: '0' },
              { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
            ],
            scoringOptions: {
              answers: ['1'],
            },
          },
          {
            id: 4,
            itemType: 'MCQ',
            stimulus: 'Who is the president of Nigeria?',
            score: 1,
            options: [
              { label: '<p>Atiku Abubakar</p>', value: '0' },
              { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
            ],
            scoringOptions: {
              answers: ['1'],
            },
          },
          {
            id: 5,
            itemType: 'MCQ',
            stimulus: 'Who is the president of Nigeria?',
            score: 1,
            options: [
              { label: '<p>Atiku Abubakar</p>', value: '0' },
              { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
            ],
            scoringOptions: {
              answers: ['1'],
            },
          },
        ],
      },
      {
        name: 'Oluwole Ayobami',
        markScored: 2,
        responses: ['0', '0', '1', '1', ''],
        subject: 'English',
        questions: [
          {
            id: 1,
            itemType: 'MCQ',
            stimulus: 'Who is the president of Nigeria?',
            score: 1,
            options: [
              { label: '<p>Atiku Abubakar</p>', value: '0' },
              { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
            ],
            scoringOptions: {
              answers: ['1'],
            },
          },
          {
            id: 2,
            itemType: 'MCQ',
            stimulus: 'Who is the president of Nigeria?',
            score: 1,
            options: [
              { label: '<p>Atiku Abubakar</p>', value: '0' },
              { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
            ],
            scoringOptions: {
              answers: ['1'],
            },
          },
          {
            id: 3,
            itemType: 'MCQ',
            stimulus: 'Who is the president of Nigeria?',
            score: 1,
            options: [
              { label: '<p>Atiku Abubakar</p>', value: '0' },
              { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
            ],
            scoringOptions: {
              answers: ['1'],
            },
          },
          {
            id: 4,
            itemType: 'MCQ',
            stimulus: 'Who is the president of Nigeria?',
            score: 1,
            options: [
              { label: '<p>Atiku Abubakar</p>', value: '0' },
              { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
            ],
            scoringOptions: {
              answers: ['1'],
            },
          },
          {
            id: 5,
            itemType: 'MCQ',
            stimulus: 'Who is the president of Nigeria?',
            score: 1,
            options: [
              { label: '<p>Atiku Abubakar</p>', value: '0' },
              { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
            ],
            scoringOptions: {
              answers: ['1'],
            },
          },
        ],
      },
    ];

    this.questions = [
      {
        id: 1,
        itemType: 'MCQ',
        stimulus: 'Who is the president of Nigeria?',
        score: 1,
        options: [
          { label: '<p>Atiku Abubakar</p>', value: '0' },
          { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
        ],
        scoringOptions: {
          answers: ['1'],
        },
      },
      {
        id: 2,
        itemType: 'MCQ',
        stimulus: 'Who is the president of Nigeria?',
        score: 1,
        options: [
          { label: '<p>Atiku Abubakar</p>', value: '0' },
          { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
        ],
        scoringOptions: {
          answers: ['1'],
        },
      },
      {
        id: 3,
        itemType: 'MCQ',
        stimulus: 'Who is the president of Nigeria?',
        score: 1,
        options: [
          { label: '<p>Atiku Abubakar</p>', value: '0' },
          { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
        ],
        scoringOptions: {
          answers: ['1'],
        },
      },
      {
        id: 4,
        itemType: 'MCQ',
        stimulus: 'Who is the president of Nigeria?',
        score: 1,
        options: [
          { label: '<p>Atiku Abubakar</p>', value: '0' },
          { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
        ],
        scoringOptions: {
          answers: ['1'],
        },
      },
      {
        id: 5,
        itemType: 'MCQ',
        stimulus: 'Who is the president of Nigeria?',
        score: 1,
        options: [
          { label: '<p>Atiku Abubakar</p>', value: '0' },
          { label: '<p>Bola Tinubu Ahmed</p>', value: '1' },
        ],
        scoringOptions: {
          answers: ['1'],
        },
      },
    ];
  }

  showDetails() {
    this.questionView = true;
  }

  hideDetails() {
    this.questionView = false;
  }
}
