import { AssessmentFont } from "src/app/shared/enum/assessmentFonts";
import { BlockType } from "src/app/shared/enum/blockTypes";
import { ItemType } from "src/app/shared/enum/itemTypes";

export interface IAssessmentPreLoginData {
  name: string;
  description: string;
  login_field: string;
  id: string;
}

export interface ICandidateLoginDTO {
  login_value: string;
  assessment_id: string;
}

export interface ICandidateLoginResponse {
  candidate_data: ICandidateData;
  sections_overview: Array<ICandidateSectionsOverview>;
  assessment_data: ICandidateAssessmentData;
  sections_questions: Array<ICandidateSectionQuestions>;
}

export interface ICandidateData {
  name: string;
  id: string;
  minutes_left: number;
  seconds_left: number;
  login_field_value: string;
  section_ids: Array<string>;
  login_times: Array<string>;
  passport: string;
}

export interface ICandidateAssessmentData {
  name: string;
  start_exam_instruction?: string; //done
  end_exam_instruction?: string; // done
  duration_minutes: number; //done
  display_all_sections_at_once: boolean;
  instruction_read_time_sec: number; //done
  warn_end_of_reading_time_sec: number; //done
  auto_save_sec: number; //done
  inactivity_waring_sec: number; 
  warn_unattempted_questions: boolean; //done
  end_exam_confirmation: boolean; //done
  allow_end_exam_after_xquestions: number; //done
  preserve_section_order: boolean; 
  font_size: AssessmentFont; //done
  compensatory_time_value: number; //done
}

export interface ICandidateSectionQuestions {
  id: string;
  name: string;
  section_settings: ICandidateSectionSettings;
  question_blocks: Array<ICandidateSectionBlocks>;
}

export interface ICandidateSectionSettings {
  minutes_left: number;
  seconds_left: number;
  duration_in_minutes: number;
  shuffle_items: boolean;
  shuffle_options: boolean;
  allow_calculator: boolean;
  shuffle_blocks: boolean;
  prevent_navigation_to_attempted_items: boolean;
  section_instruction?: string;
}

export interface ICandidateSectionBlocks {
  id: number;
  total_questions: number;
  index: number;
  block_type: BlockType;
  items: Array<ICandidateItem>;
  passages: Array<ICandidatePassageItem>;
}

export class ICandidateItem {
  id: string;
  passage_stimulus?: string;
  stimulus: string;
  options: Array<IOptionDTO>;
  stems?: Array<string>;
  possible_responses?: Array<IPossibleResponse>;
  response_positions?: Array<IResponsePosition>;
  item_type: ItemType;
  numerical?: boolean;
  case_sensitive?: boolean;
  shuffle_options?: boolean;
  multiple_response?: boolean;
  max_words?: number;
  max_length?: number;
  allow_paste?: boolean;
  allow_copy?: boolean;
  allow_cut?: boolean;
  plain_text?: boolean;
  responses: Array<string>;
  selectedResponse?: string;
  block_id?: number;
  revisit: boolean = false;
  max_responses: number;
  image_data:any
  answers?: Array<string>;
  showAnswer: boolean = false;
  background_type?: string
}

export interface IOptionDTO {
  label: string;
  value: string;
}
export interface IPossibleResponse {
  responses: Array<string>;
}
export interface IResponsePosition {
  x: number;
  y: number;
}
export interface ICandidatePassageItem {
  id: string;
  stimulus: string;
  items: Array<ICandidateItem>;
}

export interface ICandidateSectionsOverview {
  duration: number;
  name: string;
  total_questions: number;
}

export interface ICandidateAutoSave {
  sections_map: Record<string, Array<ICandidateAutoSaveItems>>;
  section_times: Record<string, ICandidateSectionTimes>;
  minutes: number;
  seconds: number;
  cand_id: string;
}

export class ICandidateAutoSaveItems {
  item_id: string;
  blk_id: number;
  answers: Array<string>;
  passage_id?: string;
  revisit_later: boolean = false;
}

export interface ICandidateSectionTimes {
  minutes: number;
  seconds: number;
}

export interface ICandidateEndExamData {
  timed_out: boolean;
  autosave: ICandidateAutoSave;
}

export interface ICandidationEndExamResponse {
  end_instruction: string;
  pass_mark: {
    score_total: number;
    pass_fail: string;
    score_per_section: Array<{ section_name: string; score: number }>;
  };
}

export interface ICandidateAutoSaveResponse {
  auto_saved: boolean;
  compensatory_time_added: boolean;
  message_from_admin: string;
  log_out: ILogOutParticipant;
  exam_ended_response: ICandidationEndExamResponse;
}

export interface ILogOutParticipant {
  logout: boolean;
  reason: string;
}
