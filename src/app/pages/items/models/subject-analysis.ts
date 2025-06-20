export class SubjectAnalysis {
  subjectName: string;
  subjectCode: string;
  totalItems: number;
  totalPassages: number;
  topics: TopicAnalysis[] = [];
}

export class TopicAnalysis {
  topicName: string;
  topicCode: number;
  totalItems: number;
  totalItemsPublished: number;
  totalItemsAwaitingModeration: number;
  totalItemsDraft: number;
  totalItemsInRecycle: number;
  totalItemsUsed: number;
  totalItemsRejected: number;
  totalPassagesDraft: number;
  totalPassagesPublished: number;
  totalPassages: number;
  totalPassagesUsed: number;
  topicId: string;
  totalPassagesAwaitingModeration: number
  subtopics: SubtopicAnalysis[] = [];
}

export class SubtopicAnalysis {
  subtopicName: string;
  subtopicCode: number;
  totalItems: number;
  totalItemsPublished: number;
  totalItemsAwaitingModeration: number;
  totalItemsDraft: number;
  totalItemsInRecycle: number;
  totalItemsUsed: number;
  totalItemsRejected: number;
  totalPassagesDraft: number;
  totalPassagesPublished: number;
  totalPassages: number;
  totalPassagesUsed: number;
  totalPassagesAwaitingModeration: number
  topicId: string; // this is the subtopicId
}
