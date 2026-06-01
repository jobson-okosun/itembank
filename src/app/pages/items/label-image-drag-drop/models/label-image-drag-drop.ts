import { ItemStatusEnum } from "../../models/item-status-enum";
import { ItemTagsDtos } from "../../models/item-tags-dtos";
import { ItemTypes } from "../../models/item-types";
import { Option } from "../../models/option";
import { ScoringOption } from "../../models/scoring-option";

export class LabelImageDragDrop {
  stimulus: string;
  itemId: string;
  reference: string;
  difficultyLevel: number;
  scoringOption: ScoringOption = new ScoringOption();
  shuffleOptions: boolean;
  images: Array<{
    url: string;
    height: number;
    width: number;
  }> = [];
  passageId: string;
  itemTagDTOs	: Array<ItemTagsDtos> = [];
  itemTagsDTOS?: Array<ItemTagsDtos> = [];
  subjectId: string;
  topicId: string;
  subtopicId: string;
  itemStatus: ItemStatusEnum;
  itemType: ItemTypes;
  options: Array<Option> = [];
  imageData: {
    image: string;
    altText: string;
    width: number;
    height: number;
    dimension: string;
  };
  responsePositions: Array<{
    x: number;
    y: number;
  }> = [];
  distractors: Array<{
    label: string; //text
    value: string; // index
  }> = [];
  id?: string
  moderation_status: string = null
}
