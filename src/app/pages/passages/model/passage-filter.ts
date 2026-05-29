export class PassageFilter {
  itemType: string;
  status: string;
  referenceSearchText: string;
  stimulusSearchText: string;
  difficultyLevel: number;
  tagIds: string[] = [];
  hasPassage: boolean;
  subjectId: string;
  topicId: string = null;
  score: number;
  itemUsed: string;
  //authorId: string;
}
