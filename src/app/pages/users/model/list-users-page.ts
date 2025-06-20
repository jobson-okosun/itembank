export class UserPageContent{
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  activated: boolean;
  phone: string;
  createdAt: string;
  moderationLevel: string;
  userRolesDTOList: Array<{ roleId: string; role: string }>;
  userSubjectsDTOS: Array<{
    subjectId: string;
    subjectName: string;
    rowId: string;
  }>;
  updatingUserStatus?: boolean;
}

export class ListUsersPage {
  totalElements: number;
  totalPages: number;
  size: number;
  content: UserPageContent[] = [];
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
