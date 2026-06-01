import { ItemType } from "src/app/shared/enum/itemTypes";

export interface SchemeSectionsResponseDTO  {
    id: string;
    name: String;
    scheme_id: string;
}

export interface NewSectionSchemeDTO  {
    section_id: string;
}

export enum SchemeMarkCategory {
  SCORE = 'SCORE',
  PENALTY = 'PENALTY',
  VIOLATION = 'VIOLATION',
}

export enum SchemeScoreBoundary {
  GENERAL = 'GENERAL',
  SECTION = 'SECTION',
}

export interface MarkTypeDBDTO {
  scheme_id: string; 
  mark_category: SchemeMarkCategory;
  name: string;
  description: string;
  code: string;
  id: string; 
}

export interface SchemeQuestionsTransformed {
  id: string;
  block_id: number;
  item_id: string;
  passage_id?: string;
  score: number;
  question: string;
  marking_guide: string;
  passage_question: string;
  item_type: ItemType;
  has_passage: boolean;
  sections: SchemeQuestionSectionsTransformed[];
}

export interface SchemePageData {
  scheme_id: string;
  general_marking_guide: string;
  section_id: string;
  correct_mark_types: MarkTypeDBDTO[];
  penalty_mark_types: MarkTypeDBDTO[];
  violation_mark_types: MarkTypeDBDTO[];
  general_scores_correct: GeneralScoreDB[];
  general_scores_penalty: GeneralScoreDB[];
  general_scores_violation: GeneralScoreDB[];
  questions: SchemeQuestionsTransformed[];
  published: boolean;
  scheme_question_row_id: string;
}

export interface MarkTypeDTO {
  scheme_id: string; 
  mark_category: SchemeMarkCategory;
  name: string;
  description: string;
  code: string;
}

export interface MarkTypeDBDTO extends MarkTypeDTO {
  id: string; 
}

export interface EditMarkTypeDTO extends MarkTypeDBDTO { }

export interface ResourceModified {
  id: string;
}

export interface markingGuideDTO  {
  marking_guide: string;
  scheme_id: string;
}

export interface SchemeQuestionSectionScoreScoreDB {
  id: string;
  scheme_id: string;
  mark_category: SchemeMarkCategory;
  mark_type_id: string;
  name: string;
  description: string;
  code: string;
  max_score: number;
  marker_discretion: boolean;
  boundary: SchemeScoreBoundary;
  max_occurrence: number;
  item_id: string;
  question_section_id: string;
  scheme_question_row_id: string;
  appliedNo?: number
}


export interface GeneralScoreDTO {
  scheme_id: string; 
  mark_category: SchemeMarkCategory;
  mark_type_id: string; 
  name: string;
  description: string;
  code: string;
  max_score: number;
  marker_discretion: boolean;
  max_occurrence: number;
}

export interface GeneralScoreDB extends GeneralScoreDTO {
  id: string; 
  boundary: SchemeScoreBoundary;
  appliedNo: number
}

export interface SelectSchemeQuestionToAdd {
  block_id: number;
  item_id: string;
  passage_id?: string;
  question: string;
  passage_question: string;
  showPassage?: boolean;
  item_type: ItemType;
  has_passage: boolean;
}

export interface NewSchemeQuestionDTO {
  block_id: number;
  item_id: string;
  passage_id?: string;
  scheme_question_row_id: string;
}

export interface SchemeQuestion {
  id: string;
  block_id: number;
  item_id: string;
  passage_id?: string;
  score: number;
  question: string;
  marking_guide: string;
  passage_question: string;
  item_type: ItemType;
  has_passage: boolean;
}

export interface AddEditSchemeQuestionMarkingGuideDTO {
  item_id: string;
  marking_guide: string;
  scheme_question_row_id: string;
}

export interface NewSchemeQuestionSectionDTO {
  name: string;
  marking_guide: string;
  total_score: number;
  total_deductions: number;
  item_id: string;
  scheme_question_row_id: string;
}

export interface SchemeQuestionSections {
  name: string;
  marking_guide: string;
  id: string;
  total_score: number;
  total_deductions: number;
  item_id: string;
}

export interface SchemeQuestionSectionScoreDTO {
  scheme_id: string;
  mark_category: SchemeMarkCategory;
  mark_type_id: string;
  name: string;
  description: string;
  code: string;
  max_score: number;
  marker_discretion: boolean;
  max_occurrence: number;
  item_id: string;
  question_section_id: string;
  scheme_question_row_id: string;
}

export interface SchemeQuestionSectionScoreDB extends SchemeQuestionSectionScoreDTO {
  id: string;
  boundary: SchemeScoreBoundary;
}

export interface EditSchemeQuestionSectionScoreDB {
  id: string;
  scheme_id: string;
  mark_category: SchemeMarkCategory;
  mark_type_id: string;
  name: string;
  description: string;
  code: string;
  max_score: number;
  marker_discretion: boolean;
  boundary: SchemeScoreBoundary;
  max_occurrence: number;
  item_id: string;
  question_section_id: string;
  scheme_question_row_id: string;
}

export interface SchemeQuestionSectionsTransformed {
  name: string;
  marking_guide: string;
  id: string;
  total_score: number;
  total_deductions: number;
  item_id: string;
  scores_correct: SchemeQuestionSectionScoreScoreDB[];
  scores_penalty: SchemeQuestionSectionScoreScoreDB[];
  scores_violation: SchemeQuestionSectionScoreScoreDB[];
  activeTab?: number
}