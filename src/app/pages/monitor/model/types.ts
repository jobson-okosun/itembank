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
    sections: Array<{ name: string, total_attempted: number, id: string }>
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
    sections: Array<{ name: string, total_attempted: number, id: string }>
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

export interface InfractionTypeSummaryDTO {
  infraction_types: Array<{
    infraction_type: string;
    total_candidates: number;
    max_strike_candidates: number;
    candidate_id?: string
  }>
}

export interface InfractionEventDTO {
  id: string;
  exam_id: string;
  batch_id: string;
  candidate_id: string;
  infraction_type: string;
  detection_timestamp: string;
  candidate_name: string | null;
  candidate_login_field_value: string | null;
  infraction_strikes: number;
  max_strike_reached: boolean;
  created_at: string;
  // Evidence placeholders
  evidence_type?: 'image' | 'video' | 'none';
  evidence_data?: string[];
}

export interface InfractionEventsPage {
  total: number;
  content: InfractionEventDTO[];
  page: number;
  size: number;
}

export interface InfractionEvidenceDTO {
  exam_name: string | null;
  candidate_name: string | null;
  login_field_value: string | null;
  infraction_type: string;
  detection_timestamp: string;
  infraction_strikes: number;
  max_strike_reached: boolean;
  signed_url: string;
}

export interface ProctorActionTypeSummaryDTO {
  action_types: Array<{
    action_type: string;
    total_participants: number;
    total_applied: number;
  }>
}

export interface ProctorActionEventDTO {
  id: string;
  candidate_id: string;
  candidate_name: string | null;
  candidate_login_field_value: string | null;
  action_type: string;
  applied_times: number;
  action_occurred_times: string[];
}

export interface ProctorActionEventsPage {
  total: number;
  content: ProctorActionEventDTO[];
  page: number;
  size: number;
}

export enum CenterAppEventType {
  CANDIDATE_SYNC = 'CANDIDATE_SYNC',
  COMPENSATORY_TIME_ADDED = 'COMPENSATORY_TIME_ADDED',
  CANDIDATE_SUSPENDED = 'CANDIDATE_SUSPENDED',
  CANDIDATE_RESUMED = 'CANDIDATE_RESUMED',
  COMPUTER_SWAP_ATTEMPT = 'COMPUTER_SWAP_ATTEMPT',
  COMPUTER_SWAP_ALLOWED = 'COMPUTER_SWAP_ALLOWED',
  LOGIN = 'LOGIN',
  RE_LOGIN = 'RE_LOGIN',
  DISCONNECTED = 'DISCONNECTED',
  ENDED = 'ENDED',
  RETAKE = 'RETAKE',
  BATTERY_LOW = 'BATTERY_LOW',
  BIOMETRICS = 'BIOMETRICS',
  MALPRACTICE = 'MALPRACTICE',
  RESCHEDULE = 'RESCHEDULE'
}

export interface CenterAppEventDTO {
  id: number;
  center_r_id: string;
  app_event_id: number;
  event_type: CenterAppEventType;
  event_source: string;
  status: string;
  title: string;
  message: string;
  participant_data: any;
  occur_at: string;
  assessment_id: string;
  received_at: string;
}

export interface CenterAppEventsPage {
  data: CenterAppEventDTO[];
  total: number;
  page: number;
  size: number;
}

export interface CenterAppEventParams {
  assessment_id: string;
  center_id?: string;
  page: number;
  size: number;
  search_type?: CenterAppEventType;
  login_field?: string;
  event_source?: string;
}

export interface ParticipantSummaryDTO {
  total: number;
  total_started: number;
  total_not_started: number;
  total_ended: number;
  total_ended_timedout: number;
  total_comptime_added: number;
  total_relogins: number;
  total_comp_swaps: number;
  total_suspended: number;
  total_resumed: number;
  total_offline: number;
  total_rescheduled: number;
  total_bvm_verified: number;
  total_malpractice: number;
  total_un_verified: number;
  total_un_considered: number;
  total_no_attempt: number;
}

export interface CenterParticipantDTO {
  id: string;
  name: string;
  status: string;
  login_time: string;
  duration_mins: number;
  login_times: string[];
  current_ip: string;
  section_attempts: { total_attempted: number; [key: string]: any };
  suspended: boolean;
  compensatory_time_added: boolean;
  ip_addresses: { ip_address: string; time: string }[];
  online: boolean;
  login_field: string;
  end_time: string;
  end_times: string[];
  score: any[];
  retake: boolean;
  timed_out: boolean;
  batch: any;
  bvm_verified: boolean;
  is_rescheduled: boolean;
  has_malpractice: boolean;
}

export interface PaginatedCenterParticipants {
  data: CenterParticipantDTO[];
  total: number;
  page: number;
  size: number;
}

export interface NewAssessmentCenterDTO {
  id: string;
  name: string;
  center_id: string;
  state: string;
  exam_downloaded: boolean;
  passport_downloaded: boolean;
  exam_uploaded: boolean;
  total_participants: number;
  total_participants_started: number;
  total_participants_ended: number;
  total_times_started: number;
  total_times_launched: number;
  online: boolean;
  download_time: string;
  total_batches: number;
  total_batches_started: number;
  total_batches_completed: number;
  batch_info: any[];
}

export interface NewAssessmentCentersPage {
  data: NewAssessmentCenterDTO[];
  total: number;
  page: number;
  size: number;
}

export interface CenterExamOverviewBatch {
  id: string;
  batch_name: string;
  start_date: string;
  end_date: string;
  completed: boolean;
  current_batch_status: string;
  status_time: string;
}

export interface CenterExamOverviewDownloadHistory {
  download_type: string;
  downloaded_at: string;
  downloaded_by: string;
}

export interface CenterExamOverviewStatusHistory {
  launched: string[];
  started: string[];
  uploaded: string[];
}

export interface CenterExamOverviewDTO {
  center_name: string;
  delivery_method: string;
  login_field: string;
  exam_start_time: string;
  exam_end_time: string;
  batches: CenterExamOverviewBatch[];
  total_candidates: number;
  exam_downloaded: boolean;
  passport_downloaded: boolean;
  ended: boolean;
  ended_time: string;
  current_status: string;
  status_time: string;
  status_history: CenterExamOverviewStatusHistory;
  download_history: CenterExamOverviewDownloadHistory[];
}
