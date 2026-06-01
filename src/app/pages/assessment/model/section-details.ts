export class BlockDetails {
  sectionId?: string;
  assessmentId?: string;
  subjectId?: string;
  blockId: number;
  blockName: string;
  name?: string;
  blockType: string;
  index?: number;
  totalQuestions: number;
  totalQuestionsPerCandidate: number;
  totalQuestionsPerStudent?: number;
  selectionType: string;
  totalFound?: number;
  totalQuestionsInPassage: number;
  shuffleItems: boolean = true
}

export class SectionDetails {
  sectionName: string;
  subjectName: string;
  sectionId: string;
  subjectId: string;
  blockCount: number;
  blockDetailsDTOS: BlockDetails[] = [];
  totalQuestions: number;
  totalQuestionsPerCandidate: number;
  totalSelectedQuestions?: number;
  totalCandidateSelectedQuestions?: number;
  totalFound?: number;
  totalScore?: number = 0;
}
