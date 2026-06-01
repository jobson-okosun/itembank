import { Images } from '../models/images';
import { ItemTagsDtos } from '../models/item-tags-dtos';
import { Responses } from '../models/responses.model';
import { ScoringOption } from '../models/scoring-option';

export class ClozeDropdown {
  stimulus: string;
  itemId: string;
  reference: string;
  difficultyLevel: number;
  scoringOption: ScoringOption = new ScoringOption();
  shuffleOptions: boolean;
  images: Images[];
  passageId: string;
  itemTagsDTOS: ItemTagsDtos[];
  subjectId: string;
  topicId: string;
  subtopicId: string;
  itemStatus: string;
  itemType: string;
  possibleResponses: Responses[];
  moderation_status: string
}
