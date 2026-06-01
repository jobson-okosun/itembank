import { ItemTagsDtos } from "./../../models/item-tags-dtos";
import { Option } from "../../models/option";
import { Images } from "../../models/images";
import { ScoringOption } from "../../models/scoring-option";

export class NewClozeItem {
  stimulus: string;
  itemId: string;
  reference: string;
  difficultyLevel: number;
  scoringOption: ScoringOption = new ScoringOption();
  shuffleOptions: boolean;
  images: Images[] = [];
  passageId: string;
  itemTagsDTOS: ItemTagsDtos[] = [];
  subjectId: string;
  topicId: string;
  subtopicId: string;
  itemStatus: string;
  itemType: string;
  options: Option[] = [];
  caseSensitive: boolean;
  maxLength: number;
  containers?: any;

  moderation_status : string = null;
}
