export class ActivityListPage {
  totalElements: 0;
  totalPages: 0;
  first: true;
  last: true;
  size: 0;
  content: [
    {
      userId: string;
      firstName: string;
      lastName: string;
      username: string;
      itemId: string,
      itemType: string;
      itemStatus: string;
      passageId: string;
      subjectId: string;
      subject: string;
      topicId: string;
      topic: string;
      subtopicId: string;
      subtopic: string;
      moderationStatus: string;
      rejectionReason: string;
      userActivityType: string;
      activityDate: string;
    }
  ];
  number: 0;
  sort: {
    empty: true;
    sorted: true;
    unsorted: true;
  };
  numberOfElements: 0;
  pageable: {
    offset: 0;
    sort: {
      empty: true;
      sorted: true;
      unsorted: true;
    };
    paged: true;
    unpaged: true;
    pageNumber: 0;
    pageSize: 0;
  };
  empty: true;
}
