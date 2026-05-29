import { ItemStatusEnum } from "../../models/item-status-enum";
import { ItemTypes } from "../../models/item-types";
import { MatchingRuleEnums } from "../../models/matching-rule-enums";
import { Option } from "../../models/option";
import { ScoringOption } from "../../models/scoring-option";
import { ScoringTypeEnum } from "../../models/scoring-type-enum";

export class NewLabelImageText {
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
  }>;
  passageId: string;
  itemTagDTOs: Array<{
    tagId: string;
  }> = [];
  itemTagsDTOS?: Array<{
    tagId: string;
  }> = [];
  subjectId: string;
  topicId: string;
  subtopicId: string;
  itemStatus: ItemStatusEnum;
  itemType: ItemTypes;
  options: Option[] = [];
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
  caseSensitive: boolean;
  maxLength: number;
  numeric: boolean;

  moderation_status: string = null;
  itemPassage?: any = null;
  id?: string
}
