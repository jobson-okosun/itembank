export class ListAllItemsPage {
  totalElements: number;
  totalPages: number;
  size: number;
  content: [
    {
      stimulusPreview?: string;
      stimulusSafeHtml?: any;
      itemId: string;
      type: string;
      itemStatus: string;
      stimulus: string;
      difficultyLevel: number;
      reference: string;
      createdAt: number;
      modifiedAt: number;
      score: number;
      topicName: string;
      subtopicName: string;
      used: boolean;
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
      showFullItem: boolean;
      showingPreviewLoader: boolean;
    }
  ];
  number: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  numberOfElements: number;
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
    paged: boolean;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
  };
  first: boolean;
  last: boolean;
  empty: boolean;
}
