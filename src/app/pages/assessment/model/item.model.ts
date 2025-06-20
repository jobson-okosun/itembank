export class AuthorDetails {
  authorName: string;
  authorId: string;
}

export class Item {
  itemId: string;
  type: string;
  itemStatus: string;
  stimulus: string;
  difficultyLevel: number;
  reference: string;
  createdAt: number;
  modifiedAt: number;
  authorDetails: AuthorDetails = new AuthorDetails();
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
  showFullItem: boolean = false;
}
