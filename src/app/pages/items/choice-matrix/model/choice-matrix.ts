import { Images } from "../../models/images";
import { ItemTagsDtos } from "../../models/item-tags-dtos";
import { Option } from "../../models/option";
import { ScoringOption } from "../../models/scoring-option";

export class ChoiceMatrix {
  itemId: string;
  stimulus: string;
  reference: string;
  difficultyLevel: number;
  scoringOption: ScoringOption = new ScoringOption();
  shuffleOptions: boolean;
  images: Images[] = [];
  passageId: string;
  itemTagsDTOS: ItemTagsDtos[] = [];
  itemStatus: string;
  point: number;
  options: Option[] = [];
  multipleResponses: boolean;
  itemType: string;
  subjectId: string;
  topicId: string;
  subtopicId: string;
  stems: string[] = [];
  showFullItem?: boolean;
  moderation_status : string = null;
  
}
