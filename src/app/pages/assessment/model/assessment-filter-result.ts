import { Tags } from "../../tags/model/tags.model";

export class AssessmentFilterResult {
  filterId: string;
  totalQuestions: number;
  totalPassages: number;
  totalItemsInPassage: number;
  content: string;
  tags: Tags[] = [];
  subjectId: string;
  subjectName?: string;
  topicId: string;
  topicName?: string;
  subtopicId?: string;
  subtopicName?: string; 
  itemType: string;
  itemIds: string[] = [];
  passageIds: string[] = [];
}
