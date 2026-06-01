export class AssessmentSettings {
  name: string = null;
  instruction: string = null;
  endExamInstruction: string = null;
  examDate: string = null;
  displayAllSectionsAtOnce: boolean = true;
}

export class ScoringSettings {
  displayResult: boolean = true;
  passMark: number = 0;
}

export class NewAssessmentDetailTemplate {
  id: string;
  name: string = null;
  assessmentSettings: AssessmentSettings = new AssessmentSettings();
  scoringSettings: ScoringSettings = new ScoringSettings();
}
