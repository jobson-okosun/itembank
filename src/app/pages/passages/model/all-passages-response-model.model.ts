export class AllPassagesResponseModel {
  totalElements: number;
  totalPages: number;
  size: number;
  content: [
    {
      id: string;
      stimulus: string;
      reference: string;
      createdAt: number;
      modifiedAt: number;
      itemCount: number;
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
      itemUsed?: string;
      status: string;
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
