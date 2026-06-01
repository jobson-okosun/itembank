import { Images } from "./images";
import { ScoringOption } from "./scoring-option";

export class DefaultItemProperties {
  images: Images[] = [];
  stimulus: string = "";
  reference: string;
  shuffleOptions: boolean;
  difficultyLevel: number;
  numerical?: boolean;
  maxLength?: number;
  scoringOption: ScoringOption = new ScoringOption();
  possibleResponses?: Array<{
    responses: Array<string>;
  }> = [];
  allowCopy: boolean = false;
  allowPaste: boolean = false;
  allowCut: boolean = false;
  plainText: boolean = false;
  maxWords: number = 0;
}
