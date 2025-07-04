import { ItemTagsDtos } from '../../models/item-tags-dtos';
import { Images } from './../../models/images';
import { ScoringOption } from './../../models/scoring-option';

export class DrawAndWritingModel {
  stimulus: string;
  itemId: string;
  reference: string
  difficultyLevel: number;
  scoringOption: ScoringOption = new ScoringOption();
  images: Images[];
  passageId: string = null;
  itemTagsDTOS: ItemTagsDtos[] = [];
  subjectId: string;
  topicId: string;
  subtopicId: string;
  itemStatus: string;
  itemType: string;
  // allowPaste: boolean;
  // allowCopy: boolean;
  // allowCut: boolean;
  // plainText: boolean;
  // maxWords: number;
  moderation_status: string = null;
  backgroundType: string
}
