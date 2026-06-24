import { number } from "echarts";

export class AssessmentSettings {
  name: string;
  status: string;
  description: string;
  allowEndExamAfterXQuestions: number;
  assessmentSettingsId:string;
  inactivityWaringSec: number;
  // instructionReadTimeSec: number = 20;
  instructionReadTimeSec: number = 120;
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
  displayAllSectionsAtOnce: boolean | string  = false;  
  instantResult: boolean = false;
  compensatoryTimeMins: number;
  passMark : number = 0
  allowRetake: boolean = false
  retakeCount: number = 0
  examGracePeriod: number = 0
  candidateGracePeriod: number = 0
  earliestExamEndPeriod: number = 0
  useBiometrics: boolean = false
  examType = ExamType.EXAMALPHA
}

export class EditAssessmentSettings {

    name: string;

    assessmentId: string;

    schedulerAssessmentId: string;

    assessmentSettingsId: string;

    startExamInstruction: string;

    endExamInstruction: string;

    description: string;

    startDate: Date | string;

    endDate: Date | string;

    instantResult: boolean;

    passMark: number;

    displayAllSectionsAtOnce: boolean;

    durationMinutes: number;

    instructionReadTimeSec: number;

    warnEndOfReadingTimeSec: number;

    compensatoryTimeMins: number;

    autoSaveSec: number;

    inactivityWaringSec: number;

    useBiometrics: boolean;

    examGracePeriod: number;

    candidateGracePeriod: number;

    earliestExamEndPeriod: number;

    allowBlockNavigation: boolean;

    warnUnattemptedQuestions: boolean;

    endExamConfirmation: boolean;

    allowEndExamAfterXQuestions: number;

    preserveSectionOrder: boolean;

    fontSize: string;

    deliveryMethod: string;

    // private SectionNavigation sectionNavigation; // new
    sectionNavigation: string;

      allowRetake: boolean = false;

  retakeCount: number = 0;

    examType = ExamType.EXAMALPHA;

}

export enum ExamType {
    EXAMALPHA = 'EXAMALPHA', //default
    UTME = 'UTME',
    MOCK = 'MOCK',
    DUMMY = 'DUMMY'
}