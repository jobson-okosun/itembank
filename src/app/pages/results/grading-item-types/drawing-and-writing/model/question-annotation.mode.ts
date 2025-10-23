import { SchemeMarkCategory, SchemeScoreBoundary } from "src/app/pages/assessment/model/marking-guide-types";

export class QuestionAnnotation {
  position: string[];
  page: number;
  code: string;
  score: number;
  markers_discretion: boolean;
  comment: string;
  score_id: string; 
  mark_category: SchemeMarkCategory.SCORE | SchemeMarkCategory.PENALTY | SchemeMarkCategory.VIOLATION;;
  mark_type_id: string;
  name: string;
  boundary: SchemeScoreBoundary;
  question_section_id: string; 
  item_id: string;
  graded?: boolean

  // indentifiers for exact annotation context menu item
  contextMenuFormIndex?: number 
  contextMenuScoreId?: string
  contextMenuSectionId?: string;
  contextMenuUniqueId?: string;
  contextMenuQuestionId?: string
  contextMenuPage?: number;
  versioned?: boolean
  action?: string
  

  constructor() {
    this.position = [];
    this.page = 0;
    this.code = '';
    this.score = 0;
    this.markers_discretion = false;
    this.comment = '';
    this.score_id = '';
    this.mark_category = '' as any;
    this.mark_type_id = '';
    this.name = '';
    this.boundary = '' as any;
    this.question_section_id = '';
    this.item_id = '';
  }
}

export class Grading {
  item_id: string;
  remark: string;
  score: number;
  include_penalty: boolean;
  annotations: QuestionAnnotation[]
}

export interface Totals {
  violations: number;
  score: number;
  penalty: number;
};

export interface SummaryResult {
  overall: Totals;
  perQuestion: Record<string, Totals>;
};