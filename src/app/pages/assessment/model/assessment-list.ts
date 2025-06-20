export class SingleAssessment {
  id: string;
  schId!: string;
  name: string;
  duration: number;
  status: string;
  endDateTime: string;
  deliveryMethod: string;
  createdDate: string;
  startDateTime: string;
  totalSections: number;
  isSelected?: boolean;
  totalCenters: number;
  totalSectionsGroup: number;
  totalParticipants: number;
  totalCenterAdmins: number;
  totalActiveAdmins: number;
}

export class AssessmentList {
  totalElements: number;
  totalPages: number;
  size: number;
  content: SingleAssessment[];
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
    pageSize: number;
    pageNumber: number;
    paged: boolean;
    unpaged: boolean;
  };
  empty: boolean;
}
