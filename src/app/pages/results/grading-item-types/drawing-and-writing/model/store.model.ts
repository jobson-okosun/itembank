import { FormGroup } from "@angular/forms";
import { SchemeMarkCategory } from "src/app/pages/assessment/model/marking-guide-types";

export interface Strokes {
  points: number[];
  mode: 'brush' | 'eraser';
  color?: string;
  size: number;
}

export class Page {
  page: number; // This will now represent the logical page number (1-based);
  strokes: Strokes[];
  grading: ContextMenuGradingForm[]

  constructor(pageNumber: number) {
    this.page = pageNumber;
    this.strokes = [];
    this.grading = []
  }
}

export class ContextMenuGradingForm {
    position: number[];
    form: FormGroup;
    isOpen: boolean;
    versioned: boolean;
    placeholderCode?: string;
    placeholderType?: SchemeMarkCategory.SCORE | SchemeMarkCategory.PENALTY | SchemeMarkCategory.VIOLATION;
    sectionId: string;
    sectionName: string
    uniqueId: string;
    questionId: string
    page: number;
    graded: boolean
    scoreId: string
} 

export class Store {
  currentPage: number; // This will represent the 0-based index of the current page in the 'pages' array
  pages: Array<Page>;
  shouldReset?: boolean;

  constructor() {
    this.currentPage = 0;
    this.pages = []
    this.shouldReset = false
  }
}