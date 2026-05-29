export class TagAnalysis {
  subjectName: string;
  subjectCode: string;
  totalItems: number;
  topics: [
    {
      topicName: string;
      topicCode: string;
      totalItems: number;
      totalItemsPublished: number;
      totalItemsAwaitingModeration: number;
      totalItemsDraft: number;
      totalItemsInRecycle: number;
      topicId: string;
      subtopics: [
        {
          subtopicName: string;
          subtopicCode: string;
          totalItems: number;
          totalItemsPublished: number;
          totalItemsAwaitingModeration: number;
          totalItemsDraft: number;
          totalItemsInRecycle: number;
          topicId: string;
        }
      ];
    }
  ];
}
