export class SubjectTopicsTree {
  subjectName: string;
  totalItems: number;
  topics: [
    {
      topicId?: string;
      topicName: string;
      totalItems: number;
      subtopics?: [
        {
          subtopicName: string;
          totalItems: number;
          topicId: string;
        }
      ];
    }
  ];
}
