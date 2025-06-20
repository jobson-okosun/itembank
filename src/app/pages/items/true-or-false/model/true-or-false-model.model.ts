import { Images } from '../../models/images';
import { ItemTagsDtos } from '../../models/item-tags-dtos';
import { Option } from '../../models/option';
import { ScoringOption } from '../../models/scoring-option';

export class TrueOrFalseModel {
  itemId: string;
  stimulus: string = null;
  reference: string = null;
  difficultyLevel: number = 1;
  scoringOption: ScoringOption = new ScoringOption();
  shuffleOptions: boolean = true;
  images: Images[] = [];
  passageId: string = null;
  itemTagsDTOS: ItemTagsDtos[] = [];
  subjectId: string;
  topicId: string;
  subtopicId: string;
  itemStatus: string;
  itemType: string;
  options: Option[] = [];
  multipleResponses: boolean = false;
  moderation_status: string = null
}
