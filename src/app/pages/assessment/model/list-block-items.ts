export class ListBlockItems {
  itemId: string;
  type: string;
  itemStatus: string;
  stimulus: string;
  difficultyLevel: number;
  reference: string;
  createdAt: number;
  modifiedAt: number;
  subjectId: string;
  topicId: string;
  subtopicId: string;
  subjectName: string;
  topicName: string;
  subtopicName: string;
  showFullItem?: boolean;
  authorDetails: {
    authorName: string;
    authorId: string;
  };
  itemTagDTOS: [
    {
      tagId: string;
      tagTypeId: string;
      tagName: string;
    }
  ];
  passageDetails: {
    passageId: string;
    passageReference: string;
  };
  score: number;
}
