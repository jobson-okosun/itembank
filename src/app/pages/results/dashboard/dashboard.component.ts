import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from '../../assessment/service/assessments.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
} from '../../items/models/result';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  scoreDistribution: ScoreDistributionScaledScore | null = null;
  loadingDashboardResources: boolean = false;
  
  assessmentSummary: AssessmentResultSummary | null = null;
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
  transcriptFilterParams: TranscriptListParams = {
    section_id: '',
    page: 0,
    size: 10,
  };

  isLoadingParticipants: boolean = false
  participantList: ParticipantsScoreList | null = null
  participants: any[] = [];
  participantFilterParams: ParticipantsParams = {
    page: 0,
    size: 10,
  };

  constructor(
    private readonly ar: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getAssessmentId();
    this.fetchDashboardData();
  }

  getAssessmentId() {
    this.ar.paramMap.subscribe((route) => {
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
      participants: this.dataService.getParticipants(this.assessmentId, this.participantFilterParams),
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
            assessmentSummary: [],
            scoreAnalysis: [],
            scoreDistribution: [],
            participants: [],
          });
        })
      )
      .subscribe(
        async ({
          assessmentSummary,
          scoreAnalysis,
          scoreDistribution,
          participants,
        }) => {
          this.assessmentSummary = assessmentSummary as any;
          this.scoreDistribution = scoreDistribution as any;
          this.scoreAnalysis = scoreAnalysis as any;
          this.updateParticipantsData(participants as any)
          this.initializeBreadCrumbs();
          this.initalizeScoreDistributionChart();
          this.loadingDashboardResources = false;
          this.initFilterForms();
        }
      );
  }

  initFilterForms() {
    this.assessmentFilterForm = new FormGroup({
      center_id: new FormControl(''),
      batch_id: new FormControl(''),
    });

    this.scoreDistributionFilterForm = new FormGroup({
      center_id: new FormControl(''),
      section_id: new FormControl(''),
    });

    this.scoreAnalysisFilterForm = new FormGroup({
      center_id: new FormControl(''),
      section_id: new FormControl(''),
    });

    this.transcriptFilterForm = new FormGroup({
      section: new FormControl('', Validators.required),
      center: new FormControl(''),
      loginField: new FormControl(''),
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
    });
  }

  applyTranscriptFilter() {
    if (this.transcriptFilterForm.invalid)
      return this.transcriptFilterForm.markAllAsTouched();

    this.isLoadingTranscript = true;
    this.showTranscriptQuestion = false;
    this.transcriptData = null;

    const { section, center, loginField } = this.transcriptFilterForm.value;
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

    this.dataService
      .getTranscriptParticipants(this.assessmentId, params)
      .subscribe(
        (res: any) => this.initializeTranscriptTable(res),
        () => (this.isLoadingTranscript = false)
      );
  }

  async initializeTranscriptTable(res: ParticipantsScoreList) {
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
      page: event.page,
    };

    this.applyTranscriptFilter();
  }

  showTranscriptQuestionDetails(
    participantId: string,
    section: string,
    name: string
  ) {
    const participant = this.formatedTranscriptData.find(
      (item: any) => item.participantId == participantId
    );
    if (!participant || participant.status !== 'ENDED') return;

    this.showTranscriptQuestion = true;
    this.isLoadingParticipantTranscript = true;
    this.dataService
      .getParticipantTranscript(
        this.assessmentId,
        participant.sectionId,
        participant.participantId
      )
      .subscribe(
        (res) => {
          this.transcriptQuestions = res;
          this.currentQuestion = res[0];
          this.selectedTranscriptSection = section;
          this.selectedTranscriptParticipantName = name;
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
      ...this.participantFilterParams
    };
    const formValues = this.participantsListFilterForm.value; 

    Object.keys(formValues).forEach((key) => {
      const value = formValues[key];

      if (value !== null && value !== undefined && value !== '') {
        (params as any)[key] = value;
      }
    });

    this.isLoadingParticipants = true
    this.dataService.getParticipants(this.assessmentId, params).subscribe(
      (res) => this.updateParticipantsData(res),
      () => this.isLoadingParticipants = false
    );
  }

  async updateParticipantsData(data: ParticipantsScoreList) {
    const formatParticipantList = await this.formatParticipantData(data.content);

    this.participants = formatParticipantList
    this.participantList = data
    this.isLoadingParticipants = false
  }

  onParticipantPageChange(event: any) {
    this.participantFilterParams = {
      ...this.participantFilterParams,
      size: event.rows,
      page: event.page,
    };

    this.applyParticipantListFilter();
  }


  applyAssementFilter() {
    if (this.assessmentFilterForm.invalid) return this.assessmentFilterForm.markAllAsTouched();

    const { center_id, batch_id } = this.assessmentFilterForm.value;
    const params: ResultSummaryParams = {};

    if(center_id) {
      params.center_id = center_id
    }

    if(batch_id) {
      params.batch_id = batch_id
    }

    this.dataService
      .getAssessmentSummary(this.assessmentId, params)
      .subscribe((res) => this.assessmentSummary = res);
  }

  applyScoreAnalysisFilter() {
    if (this.scoreAnalysisFilterForm.invalid) return this.scoreAnalysisFilterForm.markAllAsTouched();

    const { center_id, section_id } = this.scoreAnalysisFilterForm.value;
    const params: ScoreAnalysisParams = {};

    if(center_id) {
      params.center_id = center_id
    }

    if(section_id) {
      params.section_id = section_id
    }

    this.dataService
      .getScoreAnalysis(this.assessmentId, params)
      .subscribe((res) =>  this.scoreAnalysis = res);
  }

  applyDistributionFilter() {
    if (this.scoreDistributionFilterForm.invalid) return this.scoreDistributionFilterForm.markAllAsTouched();

    const { center_id, section_id } = this.scoreDistributionFilterForm.value;
    const params: ScoreDistributionParams = {};

    if(center_id) {
      params.center_id = center_id
    }

    if(section_id) {
      params.section_id = section_id
    }

    this.dataService
      .getScoreDistribution(this.assessmentId, params)
    .subscribe((res) =>  {
      this.scoreDistribution = res;
      this.initalizeScoreDistributionChart();
    });
  }


  async formatParticipantData(participants: Participant[]): Promise<any> {
    const participantList = participants.map((item) => {
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

      const participantName = `${item.reg_fields['FIRST NAME']} ${item.reg_fields['LAST NAME']}`;

      const sectionItems = item?.score?.section_scores ?? [];

      const sectionItemsMap = sectionItems.map(sectionItem => {
        const attempt = item?.section_attempts?.sections?.find(
          attempt => attempt.id === sectionItem.section_id
        );

        return {
          ...sectionItem,
          total_attempted: attempt?.total_attempted ?? 0
        };
      });

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
        attempted: item.section_attempts?.total_attempted !== null ? item.section_attempts?.total_attempted: false,
        systemSwaps: item?.logins_ips?.ip_addresses.length,
        status: item.status.toLowerCase(),
        loginField: item?.login_field,
        loginFieldVaue: item?.reg_fields[item?.login_field],
        loginIps: item?.logins_ips?.ip_addresses,
        participantId: item.participants_id
      };
    });

    return participantList;
  }

  clearFilter(target: string) {
    if(target == 'participant') {
       this.participantsListFilterForm.reset()
       this.applyParticipantListFilter()
    }

    if(target == 'assessment') {
       this.assessmentFilterForm.reset()
       this.applyAssementFilter()
    }

    if(target == 'distribution') {
       this.scoreDistributionFilterForm.reset()
       this.applyDistributionFilter()
    }

    if(target == 'scoreanalysis') {
       this.scoreAnalysisFilterForm.reset()
       this.applyScoreAnalysisFilter()
    }
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
}
