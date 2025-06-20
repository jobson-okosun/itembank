import {
  ScoringSettings,
  AssessmentSettings,
} from './new-assessment-detail-template.model';

export class SingleAssessmentDetailTemplate {
  id: string;
  organization: {
    id: string;
    name: string;
    addressLine1: string;
    addressLine2: string;
    state: string;
    country: string;
    createdAt: string;
    bucketName: string;
  };
  name: string;
  createdAt: string;
  lastModified: string;
  assessmentSettings: AssessmentSettings;
  scoringSettings: ScoringSettings;
}
