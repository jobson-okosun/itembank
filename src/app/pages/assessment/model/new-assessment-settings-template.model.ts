export class NewAssessmentSettingsTemplate {
  name: string = null;
  timeSettings: TimeSetings = new TimeSetings();
  playBackSettings: PlayBackSettings = new PlayBackSettings();
  id: string = null;
}

export class TimeSetings {
  duration: number;
  instructionReadingTime: number;
  warnReadTimeEnding: boolean = false;
  readTimeWaringInSeconds: number = null;
  autoSaveIntervalSeconds: number = null;
  triggerInactivityWarning: boolean = false;
  triggerInactivityWarningSeconds: number = null;
}

export class PlayBackSettings {
  warnCandidatesOfUnattemptedQuestions: boolean = false;
  percentageSubmissionCheck: number;
  displayConfirmationWindowOnSubmission: boolean = false;
  fontSize: string = 'NORMAL';
}
