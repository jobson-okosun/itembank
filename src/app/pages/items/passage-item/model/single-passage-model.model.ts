export class SinglePassageModel {
  id: string;
  reference: string;
  stimulus: string;
  itemStatus: string;
  status?: string;
  createAt: number;
  modifiedAt: number;
  author: string;
  itemTagsDTOS: Array<{
    tagName: string;
    tagId: string;
  }>;
}
