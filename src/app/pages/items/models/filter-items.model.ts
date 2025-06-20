export class FilterItems {
  itemType: string = null;
  status: string = null;
  referenceSearchText: string = null;
  stimulusSearchText: string = null;
  difficultyLevel: number;
  tagIds: string[];
  hasPassage: boolean;
  score: number;
  subjectId: string;
  topicId: string;
  subtopicId: string;
  itemUsed: string;
}

export enum ItemUsed {
  USED = 'USED',
  NOT_USED = 'NOT_USED'
}
