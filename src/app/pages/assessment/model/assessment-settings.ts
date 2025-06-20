export class AssessmentSettings {
  name: string;
  status: string;
  description: string;
  allowEndExamAfterXQuestions: number;
  assessmentSettingsId:string;
  inactivityWaringSec: number;
  instructionReadTimeSec: number = 20;
  warnEndOfReadingTimeSec: number;
  startDate: Date | string = '';
  deliveryMethod: string;
  endDate: Date | string = '';
  assessmentId:string;
  fontSize: string;
  durationMinutes: number;
  autoSaveSec: number;
  endExamInstruction: string;
  startExamInstruction: string;
  endExamConfirmation: boolean = false;
  preserveSectionOrder: boolean = false;
  warnUnattemptedQuestions: boolean = false;
  displayAllSectionsAtOnce: boolean  =false;  
  instantResult: boolean = false;
  compensatoryTimeMins: number;
  passMark : number = 0
  allowRetake: boolean = false
  retakeCount: number = 0
}
