import { Item } from './item.model';

export class NewAssessmentSectionTemplate {
  name: string = null;
  subjectName: string = null;
  sectionSettings: SectionSettings = new SectionSettings();
  blocks: Blocks[] = [];
  id: string = null;
}

export class SectionSettings {
  sectionInstruction: string;
  durationInMinutes: number;
  averageDifficultyLevel: number;
  shuffleItems: boolean = false;
  shuffleOptions: boolean = false;
  allowCalculator: boolean = false;
  shuffleBlocks: boolean = false;
  preventNavigationToAttemptedItems: boolean = false;
  subjectId: string;
}

export class Blocks {
  name: string;
  sectionId: string;
  assessmentId: string;
  subjectId: string;
  blockType: number;
  totalQuestions: number;
  totalQuestionsPerCandidate: number;
  selectionType: string;
  index: number;
}
