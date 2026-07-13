import { Component, OnInit, ViewChild } from '@angular/core';
import { AssessmentsService } from '../../assessment/service/assessments.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { forkJoin, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import {
  AssessmentResultSummary,
  Participant,
  PARTICIPANT_STATUS,
  ParticipantSectionTranscript,
  ParticipantsParams,
  ParticipantsScoreList,
  QUESTION_TYPES,
  ResultSummaryParams,
  ScoreAnalysisParams,
  ScoreAnalysisScaledScore,
  ScoreDistributionParams,
  ScoreDistributionScaledScore,
  TranscriptListParams,
  ExamGroupDto,
  ExamGroupsPage,
} from '../../items/models/result';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NotifierService } from 'angular-notifier';
import { JSONP } from 'mock/questions';
import { MonitorService } from 'src/app/pages/monitor/services/monitor.service';
import { SchedulerService } from '../../scheduler/services/scheduler.service';
import {
  InfractionTypeSummaryDTO,
  InfractionEventsPage,
  InfractionEventDTO,
  InfractionEvidenceDTO,
  AssessmentBatchDTO,
} from 'src/app/pages/monitor/model/types';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CandidateBehaviourProfileComponent } from './components/candidate-behaviour-profile/candidate-behaviour-profile.component';
import { ItemPsychometricsComponent } from './components/item-psychometrics/item-psychometrics.component';

export enum ProctorActionType {
  WARN = 'WARN',
  PAUSE_EXAM = 'PAUSE_EXAM',
  FLAG_FOR_REVIEW = 'FLAG_FOR_REVIEW',
  END_EXAM = 'END_EXAM',
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  assessmentId: string;
  scoreDistributionChart: any;
  breadCrumbItems!: Array<{}>;
  questions: string[] = [];
  failed: number[] = [];
  passed: number[] = [];
  grade: any[] = [];

  scoreAnalysis: ScoreAnalysisScaledScore | null = null;
  transcriptData: ParticipantsScoreList | null = null;
  isLoadingAnalysis: boolean = false;
  isLoadingDistribution: boolean = false;
  isLoadingAssessment: boolean = false;

  scoreDistribution: ScoreDistributionScaledScore | null = null;
  loadingDashboardResources: boolean = false;

  assessmentSummary: AssessmentResultSummary | null = null;
  registrationFields: any[] = [];
  centers: any[] = [];
  sections: any[] = [];
  batches: any[] = [];
  assessmentFilterForm: FormGroup;
  scoreDistributionFilterForm: FormGroup;
  scoreAnalysisFilterForm: FormGroup;
  questionAnalysisFilterForm: FormGroup;
  transcriptFilterForm: FormGroup;
  participantsListFilterForm: FormGroup;

  formatedTranscriptData: any[];
  isLoadingTranscript: boolean = false;
  isLoadingParticipantTranscript: boolean = false;
  showTranscriptQuestion: boolean = false;
  transcriptQuestions: ParticipantSectionTranscript[] | null = null;
  transcriptQuestionTypes = QUESTION_TYPES;
  participantStatus = Object.values(PARTICIPANT_STATUS);
  currentQuestionIndex: number = 0;
  currentQuestion: ParticipantSectionTranscript | null = null;
  selectedTranscriptSection: string = '';
  selectedTranscriptParticipantName: string = '';
  selectedTranscriptUserInformation: any 
  transcriptFilterParams: TranscriptListParams = {
    section_id: '',
    page: 0,
    size: 10,
  };

  isLoadingParticipants: boolean = false;
  participantList: ParticipantsScoreList | null = null;
  participants: any[] = [];
  participantsError: string = '';

  @ViewChild('candidateProfile') candidateProfileComponent!: CandidateBehaviourProfileComponent;
  @ViewChild('itemPsychometrics') itemPsychometricsComponent!: ItemPsychometricsComponent;

  assessmentFilterBucket: AssessmentBatchDTO[] = []
  examGroups: ExamGroupDto[] = []
  participantFilterParams: ParticipantsParams = {
    page: 0,
    size: 10,
  };

  scoreAnalysisFilterSubjectName: string = 'ALL'
  scoreDistributionFilterSubjectName: string = 'ALL'
  downloadingResult: boolean =  false

  transcriptMode: 'ONE' | 'ALL' = 'ONE'
  currentTranscriptParams: any = {}
  downloadingTranscript: boolean = false

  // Proctored Infraction Metrics
  totalInfractions: number = 0;
  candidatesFlagged: number = 0;
  maxStrikeCandidates: number = 0;
  mostOccurredInfraction: string = '';
  leastOccurredInfraction: string = '';
  fetchingProctoringMetrics: boolean = false;

  // Infraction Events Modal & Evidence State
  infractionsSummary: InfractionTypeSummaryDTO | null = null;
  selectedInfractionCategoryFilter: string = '';
  selectedInfractionBatchFilter: string = '';
  selectedInfractionCandidateIdFilter?: string;
  infractionBatches: AssessmentBatchDTO[] = [];
  fetchingInfractionBatches: boolean = false;
  fetchingInfractionEvents: boolean = false;
  infractionEventsReport: InfractionEventsPage | null = null;
  infractionEventsParams: any = { page: 1, size: 50 };
  fetchingEvidence: boolean = false;
  evidenceDetails?: InfractionEvidenceDTO;
  evidenceData: { type: 'image' | 'video' | 'audio' | 'none'; data: string[] } = { type: 'none', data: [] };

  infractionFilterCategories: Array<{ id: string, name: string }> = [];
  proctorFilterActions: Array<{ id: string, name: string }> = [];


  constructor(
    private readonly ar: ActivatedRoute,
    private dataService: DataService,
    private sanitizer: DomSanitizer,
    private notifier: NotifierService,
    private monitorService: MonitorService,
    private modalService: NgbModal,
    private schedulerService: SchedulerService
  ) {}

  ngOnInit(): void {
    this.getAssessmentId();
    this.fetchDashboardData();
  }

  getAssessmentId() {
    this.ar.paramMap.subscribe((route) => {
      // console.log(route)
      this.assessmentId = route.get('exam_id');
    });
  }

  initializeBreadCrumbs() {
    this.breadCrumbItems = [
      { label: 'Reports', active: false },
      { label: this.assessmentSummary.exam_name, active: false },
      { label: 'Result', active: true },
    ];
  }

  fetchDashboardData() {
    this.loadingDashboardResources = true;

    const requests = {
      assessmentSummary: this.dataService.getAssessmentSummary(
        this.assessmentId
      ),
      scoreAnalysis: this.dataService.getScoreAnalysis(this.assessmentId),
      scoreDistribution: this.dataService.getScoreDistribution(
        this.assessmentId
      ),
      participants: this.dataService.getParticipants(
        this.assessmentId,
        this.participantFilterParams
      ),
      examGroups: this.dataService.fetchExamGroups().pipe(
        catchError((err: any) => {
          this.notifier.notify('error', err.error)
          return of({ total: 0, data: [] } as ExamGroupsPage);
        })
      ),
    };

    forkJoin(requests)
      .pipe(
        catchError((err: any) => {
          console.log(
            'Error! Unable to fetch dashboard assessment report.',
            err
          );
          this.loadingDashboardResources = false;

          return of({
            assessmentSummary: [] as any,
            scoreAnalysis: [] as any,
            scoreDistribution: [] as any,
            participants: [] as any,
            examGroups: {} as ExamGroupsPage,
          });
        })
      )
      .subscribe(
        async ({
          assessmentSummary,
          scoreAnalysis,
          scoreDistribution,
          participants,
          examGroups,
        }) => {
          this.assessmentSummary = assessmentSummary;
          
          if (assessmentSummary?.registration_fields) {
            this.registrationFields = assessmentSummary.registration_fields.filter((f: any) => f.values && f.values.length > 0 && f.values.some((v: any) => v !== null && v !== ''));
          }

          if (!this.centers.length && assessmentSummary?.centers) {
            this.centers = assessmentSummary.centers;
          }
          if (!this.sections.length && assessmentSummary?.sections) {
            this.sections = assessmentSummary.sections;
          }
          if (!this.batches.length && assessmentSummary?.batches) {
            this.batches = assessmentSummary.batches;
          }
          this.scoreDistribution = scoreDistribution;
          this.scoreAnalysis = scoreAnalysis;
          
          if(assessmentSummary.exam_group_id) {
            const group = examGroups.data.find((group) => group.id === assessmentSummary.exam_group_id);
            if (group) {
              this.examGroups.push(group);
            }
          }
          
          // this.examGroups = examGroups;
          this.updateParticipantsData(participants);
          this.initializeBreadCrumbs();
          this.initalizeScoreDistributionChart();
          this.loadingDashboardResources = false;
          this.initFilterForms();
          if (this.isProctored()) {
            this.fetchProctoringMetrics();
          }
        }
      );
  }

  isProctored(): boolean {
    const method = this.assessmentSummary?.delivery_method;
    return method === 'AUTO_PROCTORING' || method === 'LIVE_PROCTORING';
  }

  fetchProctoringMetrics() {
    if (!this.assessmentId) return;
    this.fetchingProctoringMetrics = true;

    this.monitorService.fetchInfractionTypeSummary(this.assessmentId).subscribe({
      next: (res: InfractionTypeSummaryDTO) => {
        this.infractionsSummary = res;
        if (res && res.infraction_types) {
          this.candidatesFlagged = res.infraction_types.reduce(
            (total, curr) => total + (curr.total_candidates || 0),
            0
          );
          this.maxStrikeCandidates = res.infraction_types.reduce(
            (total, curr) => total + (curr.max_strike_candidates || 0),
            0
          );
          if (res.infraction_types.length > 0) {
            // Most Occurred Infraction (Max candidates)
            const topTypeObj = res.infraction_types.reduce((prev, current) => {
              return (prev.total_candidates || 0) > (current.total_candidates || 0) ? prev : current;
            });
            this.mostOccurredInfraction = topTypeObj.infraction_type
              ? this.formatInfractionTypeName(topTypeObj.infraction_type)
              : 'N/A';

            // Least Occurred Infraction (Min candidates, where total_candidates > 0)
            const occurredTypes = res.infraction_types.filter(item => (item.total_candidates || 0) > 0);
            if (occurredTypes.length > 0) {
              const leastTypeObj = occurredTypes.reduce((prev, current) => {
                return (prev.total_candidates || 0) < (current.total_candidates || 0) ? prev : current;
              });
              this.leastOccurredInfraction = leastTypeObj.infraction_type
                ? this.formatInfractionTypeName(leastTypeObj.infraction_type)
                : 'N/A';
            } else {
              this.leastOccurredInfraction = 'None';
            }
          } else {
            this.mostOccurredInfraction = 'None';
            this.leastOccurredInfraction = 'None';
          }
        }
        this.fetchingProctoringMetrics = false;
      },
      error: (err) => {
        console.error('Failed to fetch infraction summary for proctoring metrics', err);
        this.fetchingProctoringMetrics = false;
      }
    });

    this.schedulerService.fetchAssementInfractions(this.assessmentId).subscribe({
      next: (infractions) => {
        if (infractions && infractions.length > 0) {
          const uniqueNames = Array.from(new Set(infractions.map(i => i.name).filter(Boolean)));
          this.infractionFilterCategories = uniqueNames.map((name: any) => ({
            id: name,
            name: this.formatInfractionTypeName(name)
          }));

          const uniqueActions = Array.from(new Set(infractions.map(i => i.action).filter(Boolean)));
          this.proctorFilterActions = uniqueActions.map((act: any) => ({
            id: act,
            name: this.formatProctorActionName(act)
          }));
        }
      },
      error: (err) => {
        console.error('Failed to fetch infractions settings for filtering', err);
      }
    });
  }

  public formatInfractionTypeName(type: string): string {
    if (!type) return 'N/A';
    return type
      .toLowerCase()
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  public formatProctorActionName(action: string): string {
    if (!action) return 'N/A';
    return action
      .toLowerCase()
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  initFilterForms() {
    this.assessmentFilterForm = new FormGroup({
      center_id: new FormControl(''),
      batch_id: new FormControl(''),
      exam_group_id: new FormControl(''),
    });

    this.scoreDistributionFilterForm = new FormGroup({
      center_id: new FormControl(''),
      section_id: new FormControl(''),
      exam_group_id: new FormControl(''),
      field_name: new FormControl(''),
      field_value: new FormControl(''),
    });

    this.scoreAnalysisFilterForm = new FormGroup({
      center_id: new FormControl(''),
      section_id: new FormControl(''),
      exam_group_id: new FormControl(''),
      field_name: new FormControl(''),
      field_value: new FormControl(''),
    });

    this.transcriptFilterForm = new FormGroup({
      section: new FormControl('', Validators.required),
      center: new FormControl(''),
      loginField: new FormControl(''),
      exam_group_id: new FormControl(''),
    });

    this.participantsListFilterForm = new FormGroup({
      center_id: new FormControl(''),
      section_id: new FormControl(''),
      present: new FormControl(''),
      batch_id: new FormControl(''),
      score_scaled_greater_than: new FormControl(''),
      score_scaled_less_than: new FormControl(''),
      attempts_greater_than: new FormControl(''),
      attempts_less_than: new FormControl(''),
      duration_greater_than: new FormControl(''),
      duration_less_than: new FormControl(''),
      re_login: new FormControl(''),
      status: new FormControl(''),
      time_out: new FormControl(''),
      suspended_: new FormControl(''),
      login_field_value: new FormControl(''),
      comp_time_added: new FormControl(''),
      exam_group_id: new FormControl(''),
      infraction_categories: new FormControl([]),
      proctor_actions: new FormControl([]),
      max_strike_reached: new FormControl(''),
      infraction_score_less: new FormControl(''),
      infraction_score_greater_than: new FormControl(''),
    });
  }

  getScoreDistributionRegFieldValues(): any[] {
    const fieldName = this.scoreDistributionFilterForm.get('field_name')?.value;
    if (!fieldName) return [];
    return this.registrationFields.find(f => f.name === fieldName)?.values.filter((v: any) => v !== null && v !== '') || [];
  }

  getScoreAnalysisRegFieldValues(): any[] {
    const fieldName = this.scoreAnalysisFilterForm.get('field_name')?.value;
    if (!fieldName) return [];
    return this.registrationFields.find(f => f.name === fieldName)?.values.filter((v: any) => v !== null && v !== '') || [];
  }

  onScoreDistributionRegFieldChange() {
    this.scoreDistributionFilterForm.patchValue({ field_value: '' });
  }

  onScoreAnalysisRegFieldChange() {
    this.scoreAnalysisFilterForm.patchValue({ field_value: '' });
  }

  applyTranscriptFilter() {
    if (this.transcriptFilterForm.invalid)
      return this.transcriptFilterForm.markAllAsTouched();

    this.isLoadingTranscript = true;
    this.showTranscriptQuestion = true;

    this.transcriptData = null;

    const { section, center, loginField, exam_group_id } = this.transcriptFilterForm.value;
    const params: TranscriptListParams = {
      ...this.transcriptFilterParams,
      section_id: section,
    };

    if (center) {
      params.center_id = center;
    }

    if (loginField) {
      params.login_field_value = loginField;
    }

    if (exam_group_id) {
      params.exam_group_id = exam_group_id;
    }
    
    this.dataService
      .getTranscriptParticipants(this.assessmentId, params)
      .subscribe(
        (res: any) => this.initializeTranscriptTable(res),
        () => (this.isLoadingTranscript = false)
      );
  }

  async initializeTranscriptTable(res: ParticipantsScoreList) {
    this.transcriptMode = 'ONE'
    const data = res.content.map((item) => {
      const participantName = `${item.reg_fields['FIRST NAME'] ?? 'N/A'} ${
        item.reg_fields['LAST NAME'] ?? 'N/A'
      }`;
      const participantSection = item.score?.section_scores?.find(
        (scoreItem) => {
          return (
            scoreItem.section_id ==
            this.transcriptFilterForm.get('section').value
          );
        }
      );

      const tableData = {
        participantName,
        section: participantSection?.section_name,
        score: participantSection?.score,
        status: item.status,
        participantId: item.participants_id,
        sectionId: participantSection?.section_id,
        loginField: item?.login_field,
        loginFieldValue: item?.reg_fields[item?.login_field],
      };

      return tableData;
    });

    this.formatedTranscriptData = data;
    this.transcriptData = res;
    this.isLoadingTranscript = false;
  }

  onTranscriptPageChange(event: any) {
    this.transcriptFilterParams = {
      ...this.transcriptFilterParams,
      size: event.rows,
      page: event.page * event.rows,
    };

    this.applyTranscriptFilter();
  }

  showTranscriptQuestionDetails(
    participantId: string,
    section: string,
    name: string,
    loginField: string,
    loginFieldValue: string
  ) {
    const participant = this.formatedTranscriptData.find(
      (item: any) => item.participantId == participantId
    );
    if (!participant || participant.status !== 'ENDED') return;

    this.showTranscriptQuestion = true;
    this.isLoadingParticipantTranscript = true;

    this.currentTranscriptParams = {
      assessmentId: this.assessmentId,
      sectionId: participant.sectionId,
      participantId: participant.participantId
    }

    this.dataService
      .getParticipantTranscript(
        this.assessmentId,
        participant.sectionId,
        participant.participantId
      )
      .subscribe(
        (res) => {
          // res = JSONP as any
          this.transcriptQuestions = res;
          this.currentQuestion = res[0];
          this.currentQuestionIndex = 0;
          this.selectedTranscriptSection = section;
          this.selectedTranscriptParticipantName = name;
          this.selectedTranscriptUserInformation = {
            name,
            loginField,
            loginFieldValue
          }

          // console.log(this.selectedTranscriptUserInformation)
          this.isLoadingParticipantTranscript = false;
        },
        () => {
          this.isLoadingParticipantTranscript = false;
        }
      );
  }

  updateCurrentQuestionItem(): void {
    this.currentQuestion = this.transcriptQuestions[this.currentQuestionIndex];
  }

  nextQuestionItem(): void {
    if (this.currentQuestionIndex < this.transcriptQuestions.length - 1) {
      this.currentQuestionIndex++;
      this.updateCurrentQuestionItem();
    }
  }

  previousQuestionItem(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.updateCurrentQuestionItem();
    }
  }

  isPreviousDisabled(): boolean {
    return this.currentQuestionIndex === 0;
  }

  isNextDisabled(): boolean {
    return this.currentQuestionIndex === this.transcriptQuestions.length - 1;
  }

  applyParticipantListFilter() {
    if (this.participantsListFilterForm.invalid) {
      this.participantsListFilterForm.markAllAsTouched();
      return;
    }

    const params: ParticipantsParams = {
      ...this.participantFilterParams,
    };
    const formValues = this.participantsListFilterForm.value;

    Object.keys(formValues).forEach((key) => {
      const value = formValues[key];

      if (value !== null && value !== undefined && value !== '') {
        if (Array.isArray(value)) {
          if (value.length === 0) {
            return;
          }
          (params as any)[key] = value.join('|');
        } else {
          (params as any)[key] = value;
        }
      }
    });

    this.isLoadingParticipants = true;
    this.dataService.getParticipants(this.assessmentId, params).subscribe(
      (res) => this.updateParticipantsData(res),
      () => (this.isLoadingParticipants = false)
    );
  }

  async updateParticipantsData(data: ParticipantsScoreList) {
    let formatParticipantList = await this.formatParticipantData(
      data.content
    );

    const formValues = this.participantsListFilterForm?.value || {};
    const filterCategories = formValues.infraction_categories as string[] || [];
    const filterActions = formValues.proctor_actions as string[] || [];
    const maxStrikeReached = formValues.max_strike_reached;
    const infractionScoreLess = formValues.infraction_score_less;
    const infractionScoreGreaterThan = formValues.infraction_score_greater_than;

    if (filterCategories.length > 0) {
      formatParticipantList = formatParticipantList.filter((p: any) => {
        return p.infractionTypes && p.infractionTypes.some((inf: any) => filterCategories.includes(inf.type));
      });
    }

    if (filterActions.length > 0) {
      formatParticipantList = formatParticipantList.filter((p: any) => {
        return p.proctorActions && p.proctorActions.some((act: any) => filterActions.includes(act));
      });
    }

    if (maxStrikeReached) {
      formatParticipantList = formatParticipantList.filter((p: any) => {
        return p.maxStrikesReached === true;
      });
    }

    if (infractionScoreLess !== null && infractionScoreLess !== undefined && infractionScoreLess !== '') {
      formatParticipantList = formatParticipantList.filter((p: any) => {
        return p.totalInfractions < +infractionScoreLess;
      });
    }

    if (infractionScoreGreaterThan !== null && infractionScoreGreaterThan !== undefined && infractionScoreGreaterThan !== '') {
      formatParticipantList = formatParticipantList.filter((p: any) => {
        return p.totalInfractions > +infractionScoreGreaterThan;
      });
    }

    this.participants = formatParticipantList;
    this.participantList = {
      ...data,
      total: (filterCategories.length > 0 || filterActions.length > 0 || maxStrikeReached || infractionScoreLess || infractionScoreGreaterThan) ? formatParticipantList.length : data.total
    };
    this.isLoadingParticipants = false;
  }

  onParticipantPageChange(event: any) {
    this.participantFilterParams = {
      ...this.participantFilterParams,
      size: event.rows,
      page: event.page * event.rows,
    };

    this.applyParticipantListFilter();
  }

  applyAssementFilter() {
    if (this.assessmentFilterForm.invalid)
      return this.assessmentFilterForm.markAllAsTouched();

    const { center_id, batch_id, exam_group_id } = this.assessmentFilterForm.value;
    const params: ResultSummaryParams = {};

    if (center_id) {
      params.center_id = center_id;
    }

    if (batch_id) {
      params.batch_id = batch_id;
    }

    if (exam_group_id) {
      params.exam_group_id = exam_group_id;
    }

    this.isLoadingAssessment = true;
    this.dataService
      .getAssessmentSummary(this.assessmentId, params)
      .subscribe({
        next: (res) => {
          this.assessmentSummary = res
            this.isLoadingAssessment = false;
        },
        error: (err) => {
          this.isLoadingAssessment = false;
          this.notifier.notify('error', err.error?.error);
        },
      });
  }

  applyScoreAnalysisFilter() {
    if (this.scoreAnalysisFilterForm.invalid)
      return this.scoreAnalysisFilterForm.markAllAsTouched();

    const { center_id, section_id, exam_group_id, field_name, field_value } = this.scoreAnalysisFilterForm.value;
    this.scoreAnalysisFilterSubjectName = section_id ? (this.sections.find( item => item.id == section_id))?.name || 'ALL' : 'ALL'

    const params: ScoreAnalysisParams = {};

    if (center_id) {
      params.center_id = center_id;
    }

    if (section_id) {
      params.section_id = section_id;
    }

    if (exam_group_id) {
      params.exam_group_id = exam_group_id;
    }

    if (field_name && field_value) {
      params.field_name = field_name;
      params.field_value = field_value;
    }

    this.isLoadingAnalysis = true;
    this.dataService.getScoreAnalysis(this.assessmentId, params).subscribe({
      next: (res) => {
        this.isLoadingAnalysis = false;
        this.scoreAnalysis = res;
      },
      error: (err) => {
        this.isLoadingAnalysis = false;
        this.notifier.notify('error', err.error?.error);
      },
    });
  }

  applyDistributionFilter() {
    if (this.scoreDistributionFilterForm.invalid) return this.scoreDistributionFilterForm.markAllAsTouched();

    const { center_id, section_id, exam_group_id, field_name, field_value } = this.scoreDistributionFilterForm.value;
    this.scoreDistributionFilterSubjectName = section_id ? (this.sections.find( item => item.id == section_id))?.name || 'ALL' : 'ALL'
    
    const params: ScoreDistributionParams = {};

    if (center_id) {
      params.center_id = center_id;
    }

    if (section_id) {
      params.section_id = section_id;
    }

    if (exam_group_id) {
      params.exam_group_id = exam_group_id;
    }

    if (field_name && field_value) {
      params.field_name = field_name;
      params.field_value = field_value;
    }

    this.dataService
      .getScoreDistribution(this.assessmentId, params)
      .subscribe((res) => {
        this.scoreDistribution = res;
        this.initalizeScoreDistributionChart();
      });
  }

  numberToPrecision(num: number) {
    return num?.toFixed(1);
  }

  async formatParticipantData(participants: Participant[]): Promise<any> {
    const participantList = participants?.map((item) => {
      const formatDateTime = (isoString: string) => {
        if (!isoString) return '';
        const date = new Date(isoString);
        return date.toLocaleString('en-US', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        });
      };

      const durationMinutes = item.logins_ips
        ? item.logins_ips?.duration !== null
          ? `${item.logins_ips?.duration} mins`
          : 'N/A'
        : 'N/A';

      const participantName = `${item.reg_fields['FIRST NAME'] ?? ''} ${
        item.reg_fields['LAST NAME'] ?? ''
      }`;

      const sectionItems = item?.score?.section_scores ?? [];

      const sectionItemsMap = sectionItems.map((sectionItem) => {
        const attempt = item?.section_attempts?.sections?.find(
          (attempt) => attempt.id === sectionItem.section_id
        );

        return {
          ...sectionItem,
          total_attempted: attempt?.total_attempted ?? 0,
        };
      });

      const distinctLoginIps = new Set(
        item.logins_ips?.ip_addresses?.map((ip) => ip?.ip_address)
      );

      const isProctored = this.isProctored();

      // Setup infractions mock data if not provided by backend
      let infractionTypes: Array<{ type: string; count: number }> = [];
      let totalInfractions = 0;
      let totalStrikes = 0;
      let maxStrikesReached = false;
      let proctorActions: string[] = [];

      if (isProctored) {
        if ((item as any).infraction_types) {
          infractionTypes = (item as any).infraction_types;
        } else {
          // Stable mock generation using participantId hash
          const hash = item.participants_id
            ? item.participants_id.split('-').reduce((acc, part) => acc + parseInt(part, 16) || 0, 0)
            : 0;
          
          const hasInfractions = hash % 3 !== 0; // 66% of candidates have some infractions for demo
          if (hasInfractions) {
            const categories = [
              'TALKING_DETECTED',
              'LOOKING_AWAY',
              'FACE_NOT_CENTERED',
              'MULTIPLE_FACES',
              'FACE_NOT_DETECTED',
              'BACKGROUND_VOICES_DETECTED',
            ];
            // pick 1 to 5 categories
            const count = (hash % 5) + 1;
            for (let i = 0; i < count; i++) {
              const cat = categories[(hash + i) % categories.length];
              const flags = ((hash + i) % 3) + 1;
              infractionTypes.push({ type: cat, count: flags });
            }
          }
        }

        if ((item as any).total_infractions !== undefined) {
          totalInfractions = (item as any).total_infractions;
        } else {
          totalInfractions = infractionTypes.reduce((acc, curr) => acc + curr.count, 0);
        }

        if ((item as any).total_strikes !== undefined) {
          totalStrikes = (item as any).total_strikes;
        } else {
          totalStrikes = totalInfractions > 0 ? Math.min(totalInfractions, 3) : 0;
        }

        if ((item as any).max_strikes_reached !== undefined) {
          maxStrikesReached = (item as any).max_strikes_reached;
        } else {
          maxStrikesReached = totalStrikes >= 3;
        }

        if ((item as any).proctor_actions) {
          proctorActions = (item as any).proctor_actions;
        } else {
          if (totalStrikes > 0) {
            proctorActions.push('WARN');
            if (totalStrikes >= 2) {
              proctorActions.push('FLAG_FOR_REVIEW');
            }
            if (totalStrikes >= 3) {
              proctorActions.push('END_EXAM');
            }
          }
        }
      }

      return {
        name: participantName,
        score: item.score?.score,
        scaledScore: item.score?.scaled_score,
        sectionItems: sectionItemsMap,
        avg: item.score?.scaled_score,
        timeout: item.timed_out ? 'YES' : 'NO',
        compTimedOut: item.comp_time_added ? 'YES' : 'NO',
        computerSwaped: item.computer_swapped ? 'YES' : 'NO',
        batchName: item.batch_name,
        duration: durationMinutes,
        startTime: item.logins_ips
          ? formatDateTime(item.logins_ips.initial_login)
          : 'N/A',
        endTime: item.logins_ips
          ? formatDateTime(item.logins_ips.end_time)
          : 'N/A',
        center: item.center_id,
        sectionGroup: item.group_name,
        attempted:
          item.section_attempts?.total_attempted !== null
            ? item.section_attempts?.total_attempted
            : false,
        systemSwaps: distinctLoginIps.size,
        status: item.status.toLowerCase(),
        loginField: item?.login_field,
        loginFieldValue: item?.reg_fields[item?.login_field],
        loginIps: item?.logins_ips?.ip_addresses,
        participantId: item.participants_id,
        totalRelogins: item?.logins_ips?.ip_addresses?.length,
        relogin: item.re_login,
        infractionTypes,
        totalInfractions,
        totalStrikes,
        maxStrikesReached,
        proctorActions,
      };
    });

    return participantList;
  }

  clearFilter(target: string) {
    if (target == 'participant') {
      this.participantsListFilterForm.reset();
      this.applyParticipantListFilter();
    }

    if (target == 'assessment') {
      this.assessmentFilterForm.reset();
      this.applyAssementFilter();
    }

    if (target == 'distribution') {
      this.scoreDistributionFilterForm.reset();
      this.applyDistributionFilter();
    }

    if (target == 'scoreanalysis') {
      this.scoreAnalysisFilterForm.reset();
      this.applyScoreAnalysisFilter();
    }
  }

  async downloadResult() {
    try {
      this.downloadingResult = true
      const params: ParticipantsParams = {
        ...this.participantFilterParams,
      };
      const formValues = this.participantsListFilterForm.value;

      Object.keys(formValues).forEach((key) => {
        const value = formValues[key];

        if (value !== null && value !== undefined && value !== '') {
          (params as any)[key] = value;
        }
      });
      const response = await this.dataService.downloadResult(this.assessmentId, params);

      if (!response.ok) {
        this.downloadingResult = false
        throw new Error();
      }
      const data = await response.text()

      const blob = new Blob([data], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `${this.assessmentSummary?.exam_name ?? 'assessment'}-result-${Date.now()}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      this.downloadingResult = false

    } catch (error) {
      this.downloadingResult = false
      this.notifier.notify('error', `${error.error.message}`);
    }
  }

  async downloadTranscript() {
    try {
      this.downloadingTranscript = true;

      const { section, center, loginField, exam_group_id } = this.transcriptFilterForm.value;
      const params: TranscriptListParams = {
        ...this.transcriptFilterParams,
        section_id: section,
      };

      if (center) {
        params.center_id = center;
      }

      if (loginField) {
        params.login_field_value = loginField;
      }

      if (exam_group_id) {
        params.exam_group_id = exam_group_id;
      }

      const selectedSection = this.sections.find(
        item => item.id === section
      );

      const response = await this.dataService.downloadTranscript(
        this.assessmentId,
        selectedSection?.name ?? 'section',
        params
      );

      if (!response.ok) {
        this.downloadingTranscript = false;
        throw new Error('Transcript download failed');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `${this.assessmentSummary?.exam_name ?? 'assessment'}-transcript-${Date.now()}.zip`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      URL.revokeObjectURL(url);
      this.downloadingTranscript = false;

    } catch (error) {
      this.downloadingTranscript = false;
      this.notifier.notify('error', 'Transcript download failed');
    }
  }

  printTranscript() {
    const printContent = document.getElementById('transcript-print-section');
    if (!printContent) return;
    const windowUrl = 'about:blank';
    const uniqueName = new Date().getTime();
    const windowName = 'Print' + uniqueName;
    const printWindow = window.open(windowUrl, windowName, 'left=50000,top=50000,width=1000,height=1000');
    if (!printWindow) return;

    let styles = '';
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      try {
        const rules = styleSheets[i].cssRules;
        for (let j = 0; j < rules.length; j++) {
          styles += rules[j].cssText;
        }
      } catch (e) {
        // Ignore cross-origin stylesheet errors
      }
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>Transcript - ${this.selectedTranscriptParticipantName}</title>
          <style>
            ${styles}
            body {
              padding: 20px;
              background-color: white !important;
            }
            .no-print {
              display: none !important;
            }
            #transcript-subjects {
              max-height: none !important;
              overflow: visible !important;
            }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
          <script>
            setTimeout(() => {
              window.print();
              window.close();
            }, 500);
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  }


  initalizeScoreDistributionChart() {
    this._scoreDistributionChart('["--vz-success"]');
  }

  private getChartColorsArray(colors: any) {
    colors = JSON.parse(colors);
    return colors.map(function (value: any) {
      var newValue = value.replace(' ', '');
      if (newValue.indexOf(',') === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(
          newValue
        );
        if (color) {
          color = color.replace(' ', '');
          return color;
        } else return newValue;
      } else {
        var val = value.split(',');
        if (val.length == 2) {
          var rgbaColor = getComputedStyle(
            document.documentElement
          ).getPropertyValue(val[0]);
          rgbaColor = 'rgba(' + rgbaColor + ',' + val[1] + ')';
          return rgbaColor;
        } else {
          return newValue;
        }
      }
    });
  }

  private _scoreDistributionChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.scoreDistributionChart = {
      series: [
        {
          name: 'Frequency',
          data: this.scoreDistribution
            ? Object.values(this.scoreDistribution)
            : [5, 2, 2, 10, 19, 15, 8, 1, 4, 2],
        },
      ],
      chart: {
        height: 300,
        type: 'area',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 5,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      colors: colors,
      title: {
        align: 'left',
        style: {
          fontWeight: 500,
        },
      },
      xaxis: {
        name: 'Percentage',
        categories: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        title: { text: 'Percentage Score' },
      },
      yaxis: {
        title: {
          text: 'Participants/Frequency',
        },
      },
    };
  }

  scrollTransscriptQuestionsContainerToTop() {
    const container = document.getElementById('transcript-subjects');
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  // for testing
  useMockData() {
    this.assessmentSummary = {
      total_participants: 1501,
      total_started: 0,
      total_completed: 0,
      total_suspended: 0,
      total_absent: 1501,
      exam_name: 'JUNE TEST  EXAM',
      start_date: '2025-06-13T18:00:00',
      end_date: '2025-06-20T15:00:00',
      duration: 40,
      delivery_method: 'ON_PREMISE_NO_SECURE_BROWSER',
      exam_id: '0197695a-247b-7b2d-87d4-8a8615a708a6',
      total_timed_out: 0,
      total_computer_swapped: 0,
      total_comp_time_added: 0,
      total_relogin: 0,
      sections: [],
      batches: [],
      centers: [],
    };

    this.participants = [
      {
        name: 'Okoisor Ochael',
        avg: 89.5,
        score: 100,
        duration: '180 mins',
        startTime: '25 Oct 2022: 11:00AM',
        endTime: '25 Oct 2022: 01:00PM',
        center: '800',
        sectionGroup: 'ENG & MATH',
        attempted: '182',
        infractions: 1,
        systemSwaps: 2,
        sections: [
          {
            name: 'section 1',
            analysis: {
              overallPercentage: 100,
              percentageFail: 42,
              percentagePass: 58,
              rawScore: 58,
            },
          },
          {
            name: 'section 2',
            analysis: {
              overallPercentage: 100,
              percentageFail: 42,
              percentagePass: 58,
              rawScore: 58,
            },
          },
          {
            name: 'section 3',
            analysis: {
              overallPercentage: 100,
              percentageFail: 42,
              percentagePass: 58,
              rawScore: 58,
            },
          },
          {
            name: 'section 4',
            analysis: {
              overallPercentage: 100,
              percentageFail: 42,
              percentagePass: 58,
              rawScore: 58,
            },
          },
          {
            name: 'section 5',
            analysis: {
              overallPercentage: 100,
              percentageFail: 42,
              percentagePass: 58,
              rawScore: 58,
            },
          },
          {
            name: 'section 6',
            analysis: {
              overallPercentage: 100,
              percentageFail: 42,
              percentagePass: 58,
              rawScore: 58,
            },
          },
          {
            name: 'section 7',
            analysis: {
              overallPercentage: 100,
              percentageFail: 42,
              percentagePass: 58,
              rawScore: 58,
            },
          },
          {
            name: 'section 8',
            analysis: {
              overallPercentage: 100,
              percentageFail: 42,
              percentagePass: 58,
              rawScore: 58,
            },
          },
        ],
        status: 'completed',
      },
      {
        name: 'Mercy Eke',
        avg: '29.5',
        score: '29',
        duration: '60 mins',
        startTime: '25 Oct 2022: 11:00AM',
        endTime: '25 Oct 2022: 12:00PM',
        center: '700',
        sectionGroup: 'CHEM & MATH',
        attempted: '50',
        infractions: '5',
        sections: [
          {
            name: 'section 1',
            analysis: {
              overallPercentage: 100,
              percentageFail: 32,
              percentagePass: 68,
              rawScore: 68,
            },
          },
          {
            name: 'section 2',
            analysis: {
              overallPercentage: 100,
              percentageFail: 62,
              percentagePass: 38,
              rawScore: 38,
            },
          },
          {
            name: 'section 3',
            analysis: {
              overallPercentage: 100,
              percentageFail: 50,
              percentagePass: 50,
              rawScore: 50,
            },
          },
          {
            name: 'section 4',
            analysis: {
              overallPercentage: 100,
              percentageFail: 49,
              percentagePass: 51,
              rawScore: 51,
            },
          },
        ],
        status: 'completed',
      },
    ];
    this._scoreDistributionChart('["--vz-success"]');
    this.initializeBreadCrumbs();
  }

  openCandidateInfractionsModal(participant: any, content: any) {
    const batchId = this.participantsListFilterForm.get('batch_id')?.value || '';
    this.selectedInfractionCandidateIdFilter = participant.participantId;
    this.selectedInfractionBatchFilter = batchId;
    this.selectedInfractionCategoryFilter = '';
    this.infractionEventsParams = { page: 1, size: 50 };
    
    // Fallback batch list from assessmentSummary
    this.infractionBatches = (this.batches || []).map((b: any) => ({
      id: b.id,
      name: b.name,
      start_time: b.start_date_time || '',
      end_time: b.end_date_time || '',
      status: '',
      uploaded: false,
      r_id: ''
    }));
    
    this.fetchInfractionEvents();
    this.modalService.open(content, { size: 'xl', centered: true });
  }

  fetchInfractionEvents() {
    this.fetchingInfractionEvents = true;
    this.monitorService.fetchInfractionEvents(this.assessmentId, {
      batch_id: this.selectedInfractionBatchFilter,
      infraction_type: this.selectedInfractionCategoryFilter,
      candidate_id: this.selectedInfractionCandidateIdFilter,
      page: this.infractionEventsParams.page,
      size: this.infractionEventsParams.size
    })
      .pipe(finalize(() => this.fetchingInfractionEvents = false))
      .subscribe({
        next: (res: InfractionEventsPage) => {
          this.infractionEventsReport = res;
        },
        error: (err) => {
          console.error('Failed to fetch infraction events', err);
        }
      });
  }

  onInfractionEventsPageChange(event: any) {
    const size = event.rows;
    const page = (event.page ?? 0) + 1;
    this.infractionEventsParams = { size, page };
    this.fetchInfractionEvents();
  }

  applyModalInfractionFilter() {
    this.infractionEventsParams.page = 1;
    this.fetchInfractionEvents();
  }

  openEvidenceModal(eventData: InfractionEventDTO, content: any) {
    this.evidenceData = { type: 'none', data: [] };
    this.evidenceDetails = undefined;
    this.fetchingEvidence = true;
    this.modalService.open(content, { size: 'lg', centered: true });

    this.monitorService.fetchInfractionEvidence(this.assessmentId, eventData.id)
      .pipe(finalize(() => this.fetchingEvidence = false))
      .subscribe({
        next: (res: InfractionEvidenceDTO) => {
          this.evidenceDetails = res;
          if (res.signed_url) {
             const url = res.signed_url.toLowerCase();
             const isAudioType = eventData.infraction_type.includes('TALKING_DETECTED') || eventData.infraction_type.includes('BACKGROUND_VOICES');

             if (isAudioType || url.includes('.mp3') || url.includes('.wav') || url.includes('.webm') && isAudioType) {
                this.evidenceData = { type: 'audio', data: [res.signed_url] };
             } else if (url.includes('.mp4') || url.includes('.mov') || url.includes('.webm')) {
                this.evidenceData = { type: 'video', data: [res.signed_url] };
             } else if (url.includes('.jpg') || url.includes('.jpeg') || url.includes('.png') || url.includes('.webp')) {
                this.evidenceData = { type: 'image', data: [res.signed_url] };
             } else {
                this.evidenceData = { type: isAudioType ? 'audio' : 'image', data: [res.signed_url] };
             }
          } else {
             this.evidenceData = { type: 'none', data: [] };
          }
        },
        error: () => {
          this.evidenceData = { type: 'none', data: [] };
          this.evidenceDetails = undefined;
        }
      });
  }

  viewCandidateProfile(participantId: string, candidateName?: string) {
    if (this.candidateProfileComponent) {
      this.candidateProfileComponent.openProfile(participantId, candidateName);
    }
  }


}
