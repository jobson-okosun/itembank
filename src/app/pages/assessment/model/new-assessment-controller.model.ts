export class NewAssessmentController {
  title: string;
  name: string;
  startInstruction: string;
  endInstruction: string;
  startDate: string;
  endDate: string;
  instantResult: boolean;
  passmark: number;
  attemptOneSectionAtOnce: boolean;
  durationMinutes: number;
  instructionReadTimeSec: number;
  warnEndOfReadingTimeSec: number;
  autoSaveSec: number;
  inactivityWaringSec: number;
  warnUnattemptedQuestions: boolean;
  endExamConfirmation: boolean;
  allowEndExamAfterXQuestions: number;
  preserveSectionOrder: boolean;
  fontSize: string;
  assessmentSections: [
    {
      sectionSettings: {
        durationInMinutes: number;
        averageDifficultyLevel: number;
        shuffleItems: boolean;
        shuffleOptions: boolean;
        allowCalculator: boolean;
        shuffleBlocks: boolean;
        preventNavigationToAttemptedItems: boolean;
        sectionName: string;
        sectionInstruction: string;
        subjectId: string;
      };
      blocks: [
        {
          totalQuestions: 1;
          totalQuestionsPerStudent: number;
          blockName: string;
          index: 1;
          itemIds: string[];
          passageIds: string[];
        }
      ];
      name: string;
    }
  ];
}
