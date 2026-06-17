export class NewAssessment {
  name: string;
  description?: string;
  deliveryMethod: string;
  duration: number;
  startDate: string = "";
  endDate: string = "";

  // New added properties
  proctored?: string;
  unsupervised?: string;
  centreBased?: string;
  ePaper?: string
}
