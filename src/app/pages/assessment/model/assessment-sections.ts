export class SectionSettings {
  durationInMinutes: number;
  shuffleItems: boolean;
  shuffleOptions: boolean;
  allowCalculator: boolean;
  shuffleBlocks: boolean;
  preventNavigationToAttemptedItems: boolean;
  sectionInstruction: string;
}

export class AssessmentSections {
  name: string;
  subjectId: string;
  subjectName: string;
  totalQuestions: number;
  totalQuestionsPerCandidate: number;
  createdAt: string;
  sectionSettings: SectionSettings = new SectionSettings();
}
