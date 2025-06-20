import { SinglePassageModel } from './single-passage-model.model';
import { ItemTagsDtos } from '../../models/item-tags-dtos';
import { Option } from '../../models/option';

export class SinglePassageItems {
  passage: SinglePassageModel;
  items: PassageItems[] = [];
}

export class PassageItems {
  reference: string;
  id: string;
  itemPassage: string;
  stimulus: string;
  scoringOption: {
    score: number;
    penalty: number;
    minimumScoreIfAttempted: number;
    answers: string[];
    scoringType: string;
    autoScore: boolean;
    matchingRule: string;
    caseSensitive: boolean;
    ignoreLeadingAndTrailingSpaces: boolean;
  };
  showAnswer?: boolean;
  options: Option[];
  stems: string[];
  possibleResponses: null;
  images: [
    {
      url: string;
      height: number;
      width: number;
    }
  ];
  responsePositions: null;
  type: string;
  itemStatus: string;
  itemTagDTOs: ItemTagsDtos[];
  numerical: boolean;
  difficultyLevel: number;
  shuffleOptions: true;
  multipleResponse: boolean;
  maxWords: number;
  maxLength: number;
  allowPaste: boolean;
  allowCopy: boolean;
  allowCut: boolean;
  plainText: boolean;
  
}
