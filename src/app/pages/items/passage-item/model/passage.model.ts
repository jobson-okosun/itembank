import { Images } from './../../models/images';
import { ItemTagsDtos } from '../../models/item-tags-dtos';

export class Passage {
  stimulus: string;
  reference: string;
  images: Images[] = [];
  itemTagsDTOS: ItemTagsDtos[] = [];
  itemStatus: string;
  status?: string;
  subjectId?: string;
  topicId?: string;
}
