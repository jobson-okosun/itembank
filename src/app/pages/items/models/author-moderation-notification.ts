export class NotificationContent {
  status: string;
  topicId: string;
  subjectId: string;
  subtopicId: string;
  itemId: string;
  itemType: string;
  author: string;
  moderator: string;
  subjectName: string;
  topicName: string;
  subtopicName: string;
  messageTime: string;
  rejectReason: string;
  messageRead: boolean;
}

export class AuthorModerationNotification {
  totalElements: number;
  totalPages: number;
  size: number;
  content: NotificationContent[] = [];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  last: boolean;
  numberOfElements: number;
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  empty: boolean;
}
