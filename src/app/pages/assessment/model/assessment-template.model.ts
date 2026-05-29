import { AssessmentDeliveryEnum } from "./assessment-delivery-enum";

export class AssessmentTemplate {
  name: string;
  id: string;
  lastModified: string;
  createdAt: string;
}

export class AssessmentFromTemplateRequest {
  assessmentName: string;
  startDate: string;
  endDate: string;
  deliveryMethod: AssessmentDeliveryEnum;
  description: string;
}
