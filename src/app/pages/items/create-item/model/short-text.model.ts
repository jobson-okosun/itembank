import { ScoringOption } from '../../models/scoring-option';
import { Images } from '../../models/images';
import { ItemTagsDtos } from '../../models/item-tags-dtos';

export class ShortText {
  itemId: string;
  stimulus: string;
  reference: string;
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
  numerical: boolean;
  maxLength: number;
  moderation_status: string = null
}
