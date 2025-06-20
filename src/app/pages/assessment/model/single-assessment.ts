import { SectionDetails } from "./section-details";

export class SingleAssessment {
  id: string;
  name: string;
  status: string;
  sectionDetails: SectionDetails[] = [];
}
