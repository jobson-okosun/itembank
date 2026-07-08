export class NewAssessmentSection {
  name: string;
  subjectId: string;
  assessmentId: string;
  totalQuestions: number;
  totalQuestionsPerStudent: number;
  sectionType: SectionType = SectionType.OBJECTIVE
}

export enum SectionType {
  OBJECTIVE='OBJECTIVE',
  THEORY='THEORY'
}