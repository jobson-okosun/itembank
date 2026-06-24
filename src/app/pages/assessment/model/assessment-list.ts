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
  totalProctors?: number
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

export interface AssessmentListItemDTO {
  id: string;
  name: string;
  status: string;
  duration: number;
  session: number;
  delivery_method?: string;
  start_date?: string;
  end_date?: string;
  total_section_groups: number;
  total_centers: number;
  total_center_admins: number;
  total_participants: number;
  total_proctors: number
  created_at: string;
  total_sections: number
}

export interface AssessmentListPage {
  content: AssessmentListItemDTO[];
  total: number;
  page: number;
  size: number;
}

export interface ExaminerClearAppDTO {
  examiner_id: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  cleared_at?: string;
}

export interface ExaminerClearAppPage {
  content: ExaminerClearAppDTO[];
  total: number;
  page: number;
  size: number;
}

export interface PageParams {
  page?: number;
  size?: number;
}

export interface ExaminerAppDownloadDTO {
  examiner_id: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  access_download_date?: string;
  downloaded_date?: string;
  download_count: number;
}

export interface ExaminerAppDownloadPage {
  content: ExaminerAppDownloadDTO[];
  total: number;
  page: number;
  size: number;
}

export interface AssessmentCenterListParams {
  page?: number;
  size?: number;
  center_id?: string;
}

export interface AssessmentCenterItemDTO {
  id: string;
  center_id: string;
  name?: string;
  downloaded_time?: string;
  upload_date_time?: string;
  total_participants: number;
  total_not_started: number;
  total_started: number;
  total_ended: number;
}

export interface AssessmentCenterListPage {
  content: AssessmentCenterItemDTO[];
  total: number;
  page: number;
  size: number;
}

