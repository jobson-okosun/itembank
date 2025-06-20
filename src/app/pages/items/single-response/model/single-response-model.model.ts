import { ItemTypes } from './../../models/item-types';
import { Images } from '../../models/images';
import { ItemTagsDtos } from '../../models/item-tags-dtos';
import { Option } from '../../models/option';
import { ScoringOption } from '../../models/scoring-option';

export class SingleChoiceModel {
  itemId: string;
  stimulus: string = '';
  reference: string = '';
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
  options: Option[] = [];
  multipleResponses: boolean = false;
  itemType: ItemTypes;
  moderation_status: string = null
}
