export interface MonitorExamDetailsDTO {
  exam_id: string
  name: string
  start_date: string
  end_date: string
  duration: number
  delivery_method: string
  participants_count: number
  centers_count: number
  center_admins_count: number
  batches_count: number
  batches: AssessmentBatchDTO[]
  created_at: string
}

export interface AssessmentBatchDTO {
  id: string;
  name: string;
  start_time: string;
  end_time: string;
  status: string;
  started_time?: string;
  ended_time?: string;
  uploaded: boolean;
  r_id: string;
}

export interface ExamStatusMonitorFromDb {
  technical_issues_uploaded: number;
  downloaded: number;
  passport_downloaded: number;
  technical_report_uploaded: number;
  started: number;
  launched: number;
  uploaded: number;
  online_centers: number;
  forced_reschedule: number
}

export enum MonitoringCenterReport {
  FORCE_RESHEDULE = "FORCE_RESHEDULE",
  MANUAL_RESCHEDULE = "MANUAL_RESCHEDULE",
  DOWNLOADED = "DOWNLOADED",
  PASSPORT_DOWNLOADED = "PASSPORT_DOWNLOADED",
  TECHNICAL_REPORT = "TECHNICAL_REPORT",
  UPLOADED = "UPLOADED",
}
export enum MonitoringCenterReportStatuses {
  STARTED = "STARTED",
  LAUNCHED = "LAUNCHED",
  UPLOADED = "UPLOADED",
}

export interface PageParams {
  page?: number;
  size?: number;
}

export interface DownloadedCentersPage {
  content: DownloadedCenterDTO[];
  total: number;
  page: number;
  size: number;
}

export interface DownloadedCenterDTO {
  center_id: string;
  name?: string;
  state?: string;
  downloaded_time?: string;
  ended_time?: string;
  date_time?: string
}

export interface TechnicalIssueCenterDTO {
  center_id: string;
  name?: string;
  state?: string;
  last_issue_at: string;
}

export interface TechnicalIssueCentersPage {
  content: TechnicalIssueCenterDTO[];
  total: number;
  page: number;
  size: number;
}

export interface participantSummaryFilter {
    center_id?: string
}

export interface ParticipantStatusCountDTO {
  absent: number;
  present: number;
}

export enum AttendanceStatus {
  PRESENT = "PRESENT",
  ABSENT = "ABSENT"
}

export interface AttendanceParams {
  page?: number;
  size?: number;
  center_id?: string;
}

export interface AttendanceParticipantDTO {
  participant_id: string;
  first_name?: string;
  last_name?: string;
  login_field_value?: string;
  center_id?: string;
  center_name?: string;
  login_time?: string;
}

export interface AttendanceParticipantsPage {
  content: AttendanceParticipantDTO[];
  total: number;
  page: number;
  size: number;
}

export interface RescheduleStatusParams {
  center_id?: string;
}

export interface DurationBucketEntry {
  label: string;
  count: number;
}

export interface ParticipantDurationBucketDTO {
  buckets: DurationBucketEntry[];
}

export interface ParticipantBvmStatusDTO {
  no_status: number;
  absent: number;
  present: number;
  unconsidered: number;
  unverified: number;
}

export interface BvmParticipantParams {
  page?: number;
  size?: number;
  center_id?: string;
  bvm_status?: null | BVM_STATUS;
}

export enum BVM_STATUS {
  A = "A",
  P = "P",
  C = "C",
  U = "U",
  NO_STATUS = "NO_STATUS"
}

export interface BvmParticipantDTO {
  participant_id: string;
  first_name?: string;
  last_name?: string;
  login_field_value?: string;
  center_id?: string;
  center_name?: string;
  state?: string;
  bvm_status?: "A" | "P" | "C" | "U" | null;
  bvm_verified: boolean;
  bvm_verified_at?: string;
}

export interface BvmParticipantsPage {
  content: BvmParticipantDTO[];
  total: number;
  page: number;
  size: number;
}

export interface ParticipantRescheduleStatusDTO {
  no_reschedule: number;
  manual_reschedule: number;
  forced_reschedule: number;
}

export enum RESCHEDULE_STATUS {
  NONE = "NONE",
  MANUAL = "MANUAL",
  FORCED = "FORCED",  
}

export interface RescheduleParticipantParams {
  page?: number;
  size?: number;
  center_id?: string;
  reschedule_status: RESCHEDULE_STATUS
}

export interface RescheduleParticipantDTO {
  participant_id: string;
  first_name?: string;
  last_name?: string;
  login_field_value?: string;
  center_id?: string;
  center_name?: string;
  state?: string;
  reschedule_status: "MANUAL" | "FORCED";
  reschedule_reason?: string;
  reschedule_occurred_at?: string;
  reschedule_center_reusable: boolean;
}

export interface RescheduleParticipantsPage {
  content: RescheduleParticipantDTO[];
  total: number;
  page: number;
  size: number;
}

export interface MalpracticeCodeCountDTO {
  code: string;
  count: number;
}

export interface MalpracticeCodeSummaryDTO {
  codes: MalpracticeCodeCountDTO[];
}

export interface MalpracticeParticipantParams {
  page?: number;
  size?: number;
  center_id?: string;
  malpractice_code: string; // e.g. "M1", "M2", or "NO_MALPRACTICE"
}

export interface MalpracticeParticipantDTO {
  participant_id: string;
  first_name?: string;
  last_name?: string;
  login_field_value?: string;
  center_id?: string;
  center_name?: string;
  state?: string;
  malpractice_code?: string | null;
  malpractice_details?: string;
  malpractice_occurred_at?: string;
}

export interface MalpracticeParticipantsPage {
  content: MalpracticeParticipantDTO[];
  total: number;
  page: number;
  size: number;
}

export interface DurationBucketParams {
  page?: number;
  size?: number;
  center_id?: string;
  bucket_min: number;
  bucket_max: number;
}

export interface BucketParticipantDTO {
  participant_id: string;
  first_name?: string;
  last_name?: string;
  login_field_value?: string;
  center_id?: string;
  center_name?: string;
  state?: string;
  duration: number;
}

export interface BucketParticipantsPage {
  content: BucketParticipantDTO[];
  total: number;
  page: number;
  size: number;
}

export interface AttemptedBucketParams {
  page?: number;
  size?: number;
  center_id?: string;
  bucket_min: number;
  bucket_max: number;
}

export interface AttemptedBucketParticipantDTO {
  participant_id: string;
  first_name?: string;
  last_name?: string;
  login_field_value?: string;
  center_id?: string;
  center_name?: string;
  state?: string;
  section_attempts?: {
    sections: Array<{name: string, total_attempted: number, id: string}>
    total_attempted: number,
    total_attempted_percent: number
  }
}

export interface AttemptedBucketParticipantsPage {
  content: AttemptedBucketParticipantDTO[];
  total: number;
  page: number;
  size: number;
}

export interface ParticipantEventSummaryDTO {
  computer_swapped: number;
  re_login: number;
  timed_out: number;
  ended: number;
  compensatory_time_added: number;
  started: number;
  not_started: number;
}

export enum EventENUM {
  COMPUTER_SWAP = "COMPUTER_SWAP",
  RE_LOGIN = "RE_LOGIN",
  TIMED_OUT = "TIMED_OUT",
  ENDED = "ENDED",
  COMPENSATORY_TIME_ADDED = "COMPENSATORY_TIME_ADDED",
  STARTED = "STARTED",
  NOT_STARTED = "NOT_STARTED"
}


export interface EventParticipantParams {
  page?: number;
  size?: number;
  center_id?: string;
  event: null | EventENUM
}

export interface EventParticipantDTO {
  participant_id: string;
  first_name?: string;
  last_name?: string;
  login_field_value?: string;
  center_id?: string;
  center_name?: string;
  state?: string;
  current_ip?: string;
  login_time?: string;
  login_times?: Array<any>;
  end_time?: string;
  compensatory_times?: Record<string, any>;
  timed_out: boolean;
}

export interface EventParticipantsPage {
  content: EventParticipantDTO[];
  total: number;
  page: number;
  size: number;
}

export interface TechnicalIssueCategoryParams {
  center_id?: string;
}

export interface TechnicalIssueCategoryCountDTO {
  category: string;
  center_count: number;
  issue_count: number;
}

export interface TechnicalIssueCategorySummaryDTO {
  categories: TechnicalIssueCategoryCountDTO[];
  total_issues: number;
}

export interface TechnicalReportParams {
  page?: number;
  size?: number;
  has_report?: boolean;
}

export interface TechnicalReportCenterDTO {
  center_id: string;
  center_name?: string;
  state?: string;
  technical_report?: string;
  technical_report_time?: string;
}

export interface TechnicalReportCentersPage {
  content: TechnicalReportCenterDTO[];
  total: number;
  page: number;
  size: number;
}

export interface TechnicalIssueCenterListItemDTO {
  center_id: string;
  center_name?: string;
  category: string;
  issue: string;
  occurred_at: string;
}

export interface TechnicalIssueCategoryListPage {
  content: TechnicalIssueCenterListItemDTO[];
  total: number;
  page: number;
  size: number;
}

export interface AllParticipantParams {
  page?: number;
  size?: number;
  center_id?: string;
}

export interface AllParticipantDTO {
  participant_id: string;
  first_name?: string;
  last_name?: string;
  login_field_value?: string;
  center_id?: string;
  center_name?: string;
  state?: string;
  reschedule_status?: string;
  malpractice_code?: string;
  bvm_status?: string;
  login_time?: string;
  login_times?: any[];
  end_time?: string;
  timed_out: boolean;
  section_attempts?: {
    sections: Array<{name: string, total_attempted: number, id: string}>
    total_attempted: number,
    total_attempted_percent: number
  }
  duration?: number;
  re_login: boolean;
  computer_swap: boolean;
  current_ip?: string;
  ip_addresses?: string[]
}

export interface AllParticipantPage {
  content: AllParticipantDTO[];
  total: number;
  page: number;
  size: number;
}
