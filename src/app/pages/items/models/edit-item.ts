import { Images } from "./images";
import { ItemTagsDtos } from "./item-tags-dtos";
import { ScoringOption } from "./scoring-option";

export class EditItem {
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
}
