import { questionItem } from "../../exam-preview/models/exam-preview-data";
import { QuestionAnnotation } from "../../results/grading-item-types/drawing-and-writing/model/question-annotation.mode";
import { ContextMenuGradingForm } from "../../results/grading-item-types/drawing-and-writing/model/store.model";

export class ResultSummaryParams {
  center_id?: string;
  batch_id?: string;
}

export class AssessmentResultSummary {
  total_participants: number;
  total_started: number;
  total_completed: number;
  total_suspended: number;
  total_absent: number;
  exam_name: string;
  start_date: string;
  end_date: string;
  duration: number;
  delivery_method: string;
  exam_id: string;
  total_timed_out: number;
  total_computer_swapped: number;
  total_comp_time_added: number;
  total_relogin: number;
  sections: Array<{
    id: string;
    name: string;
  }>
  centers: Array<{
    id: string,
    center_id: number
  }>
  batches: Array<{
    id: string,
    name: string,
    start_date_time: string,
    end_date_time: string
  }>

}

export class ScoreDistributionParams {
  center_id?: string;
  section_id?: string;
}

export class ScoreDistributionScaledScore {
  [key: string]: string;
}

export class ScoreAnalysisParams {
  center_id?: string;
  section_id?: string;
}

export class ScoreAnalysisScaledScore {
  max_raw_score: number;
  min_raw_score: number;
  avg_raw_score: number;
  std_dev_raw_score: number;
  median_raw_score: number;
  lower_quartile_raw_score: number;
  upper_quartile_raw_score: number;
  max_scaled_score: number;
  min_scaled_score: number;
  avg_scaled_score: number;
  std_dev_scaled_score: number;
  median_scaled_score: number;
  lower_quartile_scaled_score: number;
  upper_quartile_scaled_score: number;
}

export class ParticipantsParams {
  center_id?: string;
  section_id?: string;
  present?: boolean;
  batch_id?: string;
  score_scaled_greater_than?: number;
  score_scaled_less_than?: number;
  attempts_greater_than?: number;
  attempts_less_than?: number;
  duration_greater_than?: number;
  duration_less_than?: number;
  re_login?: boolean;
  status?: string;
  time_out?: boolean;
  suspended_?: boolean;
  login_field_value?: string;
  comp_time_added?: boolean;
  page?: number;
  size?: number;
}

export class ParticipantsScoreList {
  total: number;
  content: Participant[];
  page: number;
  size: number;
  headers: { [key: number]: string };
}

export class Participant {
  participants_id: string;
  assessment_id: string;
  group_name: string;
  center_id: string;
  section_attempts?: SectionAttempts;
  batch_name?: string;
  suspended: boolean;
  logins_ips?: ParticipantLogins;
  status: string;
  timed_out: boolean;
  comp_time_added: boolean;
  computer_swapped: boolean;
  re_login: boolean;
  score?: ParticipantScore;
  reg_fields: { [key: string]: string };
  registered_on: string;
  login_field: string;
}

export class SectionAttempts {
  sections: SectionAttempted[];
  total_attempted: number;
}

export class SectionAttempted {
  id: string;
  name: string;
  total_attempted: number;
}

export class ParticipantLogins {
  initial_login: string;
  duration: number;
  end_time: string;
  other_logins: string[];
  ip_addresses: ParticipantIpAddressAndTime[];
}

export class ParticipantIpAddressAndTime {
  ip_address: string;
  time: string;
}

export class ParticipantScore {
  score: number;
  scaled_score: number;
  total_items: number;
  section_scores: SectionScoreResponse[];
}

export class SectionScoreResponse {
  section_name: string;
  section_id: string;
  score: number;
  scaled_score: number;
  total_items: number;
}

export class TranscriptListParams {
  center_id?: string
  section_id: string  // compulsory must be selected and provided before calling endpoint
  login_field_value?: string
  page?: number
  size?: number
}

export class TranscriptParticipantsScoreList {
    total: number
    content: any[]
    page: number
    size: number
}

export class CandidateItemScore {
  item_id: string;
  score: number;
  graded: boolean;
  un_graded_response: string[];
  graded_response: string[];
  blkId: number;
  revisit_later: boolean;
  passage_id: string | null;
  item_type: questionItemType;
  pass_fail_status: PassFailStatus;
  penalty: number;
  has_penalty: boolean;
  subject_id: string;
  topic_id: string;
  topic_iame: string;
  subtopic_id: string | null;
  subtopic_name: string | null;
  manual_grade_remark: string;
  annotations: QuestionAnnotation[]
}

export class ItemPublishDTO {
  allowStop: boolean;
  allowPause: boolean;
  beepWhenRecordingStarts: boolean;
  warnOverwrite: boolean;
  paperResponse: boolean;
  maxDuration: number;
}

export class ParticipantSectionTranscript {
  item_score: CandidateItemScore;
  item: questionItem;
  graded?: boolean 
}

export interface Annotation { 
  page: number, 
  grading: ContextMenuGradingForm
}

export enum ParticipantsStatus {
  NOT_STARTED = 'NOT_STARTED',
  STARTED = 'STARTED',
  ENDED = 'ENDED',
}

export const PARTICIPANT_STATUS = {
  NOT_STARTED: 'NOT_STARTED',
  STARTED: 'STARTED',
  ENDED: 'ENDED',
}

export enum ItemType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  ESSAY = 'ESSAY',
  CODING = 'CODING',
}

export enum PassFailStatus {
  PASS = 'PASS',
  FAIL = 'FAIL',
  UNATTEMPTED = 'UNATTEMPTED',
  MANUAL_SCORING = 'MANUAL_SCORING',
  PARTIAL = 'PARTIAL',
}

export enum questionItemType {
    MCQ = 'MCQ',
    MRQ = 'MRQ',
    ESSAY_PLAIN_TEXT = 'ESSAY_PLAIN_TEXT',
    ESSAY_RICH_TEXT = 'ESSAY_RICH_TEXT',
    CLOZE_TEXT = 'CLOZE_TEXT',
    CLOZE_DROPDOWN = 'CLOZE_DROPDOWN',
    SHORT_TEXT = 'SHORT_TEXT',
    TRUE_FALSE = 'TRUE_FALSE',
    YES_NO = 'YES_NO',
    ASSOCIATION = 'ASSOCIATION',
    CHOICE_MATRIX = 'CHOICE_MATRIX',
    ORDER_LIST = 'ORDER_LIST',
    CLOZE_TEXT_IMAGE = 'CLOZE_TEXT_IMAGE',
    CLOZE_DROPDOWN_IMAGE = 'CLOZE_DROPDOWN_IMAGE',
    IMAGE_DRAG_AND_DROP = 'IMAGE_DRAG_AND_DROP',
}

export const QUESTION_TYPES = {
    MCQ: 'MCQ',
    MRQ: 'MRQ',
    ESSAY_PLAIN_TEXT: 'ESSAY_PLAIN_TEXT',
    ESSAY_RICH_TEXT: 'ESSAY_RICH_TEXT',
    CLOZE_TEXT: 'CLOZE_TEXT',
    CLOZE_DROPDOWN: 'CLOZE_DROPDOWN',
    SHORT_TEXT: 'SHORT_TEXT',
    TRUE_FALSE: 'TRUE_FALSE',
    YES_NO: 'YES_NO',
    ASSOCIATION: 'ASSOCIATION',
    CHOICE_MATRIX: 'CHOICE_MATRIX',
    ORDER_LIST: 'ORDER_LIST',
    CLOZE_TEXT_IMAGE: 'CLOZE_TEXT_IMAGE',
    CLOZE_DROPDOWN_IMAGE: 'CLOZE_DROPDOWN_IMAGE',
    IMAGE_DRAG_AND_DROP: 'IMAGE_DRAG_AND_DROP',
}

export class Section_Score_Response {
  section_name: string;
  section_id: string;
  score: number;
  scaled_score: number;
  total_items: number;
}

export class Participant_Score {
  score: number;
  scaled_score: number;
  total_items: number;
  section_scores: Section_Score_Response[];
}

export class Section_Attempt_Summary {
  section_id: string;
  section_name: string;
  total_section_items: number;
  section_scaled_score: number;
  section_raw_score: number;
  total_section_marks_obtainable: number;
  total_correct_items: number;
  total_correct_items_mark: number;
  total_incorrect_items: number;
  total_incorrect_items_mark: number;
  total_partially_correct_items: number;
  total_partial_correct_items_mark: number;
  total_not_attempted_items: number;
  total_not_attempted_items_mark: number;
  total_manual_graded_items_mark: number;
  total_manual_graded_items: number;
  total_penalty_mark_lost: number;
}

export class Participant_Result_Data_DTO {
  participants_id: string;
  assessment_id: string;
  group_name: string;
  center_id: string;
  section_attempts: SectionAttempts | null;
  batch_name: string | null;
  suspended: boolean;
  logins_ips: ParticipantLogins | null;
  status: string;
  timed_out: boolean;
  comp_time_added: boolean;
  computer_swapped: boolean;
  re_login: boolean;
  score: Participant_Score | null;
  reg_fields: Record<string, string>;
  registered_on: string;
  exam_name: string;
  delivery_method: string;
  start_date: string;
  end_date: string;
  average_scaled_score: number;
  percentile: number;
  attempt_summary: Section_Attempt_Summary[];
  login_field: string
}