import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssessmentsService } from '../../assessment/service/assessments.service';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { AssessmentResultSummary, Participant, ParticipantsParams, ParticipantsScoreList, ResultSummaryParams, ScoreAnalysisParams, ScoreAnalysisScaledScore, ScoreDistributionParams, ScoreDistributionScaledScore } from '../../items/models/result';
import { FormControl, FormGroup } from '@angular/forms';
import { MarkingGuideService } from '../../assessment/service/marking-guide.service';
import { SchemeSectionsResponseDTO } from '../../assessment/model/marking-guide-types';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-grading',
  templateUrl: './grading.component.html',
  styleUrls: ['./grading.component.scss'],
})
export class GradingComponent implements OnInit {

  assessmentId: string;
  breadCrumbItems!: Array<{}>;
  scoreDistributionChart: any;

  scoreDistribution: ScoreDistributionScaledScore | null = null;
  loadingDashboardResources: boolean = true;

  isLoadingParticipants: boolean = false
  participantList: ParticipantsScoreList | null = null
  participants: any[] = [];
  participantFilterParams: ParticipantsParams = {
    page: 0,
    size: 10,
    status: 'ENDED',
    section_id: ''
  };

  assessmentSummary: AssessmentResultSummary | null = null;
  assessmentFilterForm: FormGroup;
  scoreAnalysisFilterForm: FormGroup;
  participantsListFilterForm: FormGroup;
  scoreDistributionFilterForm: FormGroup;

  scoreAnalysis: ScoreAnalysisScaledScore | null = null;
  markingGuideSections: SchemeSectionsResponseDTO[]

  constructor(
    private readonly ar: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private markingGuideService: MarkingGuideService,
    private notifier: NotifierService
  ) {}

  getAssessmentId() {
    this.ar.paramMap.subscribe((route) => {
      this.assessmentId = route.get('assessmentId');
    });
  }

  ngOnInit(): void {
    this.getAssessmentId();
    this.getAssessmentSummary()
  }

  getAssessmentSummary() {
    this.loadingDashboardResources = true;
    this.dataService.getAssessmentSummary( this.assessmentId)
    .subscribe({next: (res) => { 
       this.assessmentSummary = res as any;
       this.participantFilterParams.section_id = res.sections[0].id     
       this.fetchDashboardData()
       this.fetchMakingGuideSections()
    }})
  }

  fetchDashboardData() {
    const requests = {
      scoreAnalysis: this.dataService.getScoreAnalysis(this.assessmentId),
      participants: this.dataService.getParticipants(this.assessmentId, this.participantFilterParams),
      scoreDistribution: this.dataService.getScoreDistribution(this.assessmentId),
    };

    forkJoin(requests)
      .pipe(
        catchError(() => {
          this.loadingDashboardResources = false;

          return of({
            scoreAnalysis: [],
            participants: [],
            scoreDistribution: [],            
          });
        })
      )
      .subscribe(
        async ({ scoreAnalysis, participants,scoreDistribution}) => {
          this.scoreAnalysis = scoreAnalysis as any;
          this.scoreDistribution = scoreDistribution as any;
          this.updateParticipantsData(participants as any)
          this.initalizeScoreDistributionChart();
          this.initFilterForms();
          this.initializeBreadCrumbs();
          this.patchForms()
          this.loadingDashboardResources = false;
        }
      );
  }
  
  fetchMakingGuideSections() {
      this.markingGuideService.fetchMarkingGuideAssessmentSections(this.assessmentId)
      .subscribe({
        next: (res) => {
          this.markingGuideSections = res
        }
      })
  }
  
  goToGrading(participant: any) {
    const filteredSection = this.participantsListFilterForm.get('section_id')
    console.log('filteredSection', filteredSection.value)

    const section = this.assessmentSummary?.sections.find( item => item.id == filteredSection.value)
    const markingGuideSection = this.markingGuideSections.find( item => item.name == section.name)

    if(!markingGuideSection) {
      this.notifier.notify('warning', 'This subject does not have a marking guide')
      return
    } 

    this.router.navigate([
      '/examalpha/reports', 
      this.assessmentId, 
      'grading', 
      'grader'], 
      { queryParams: { participant: participant.participantId, section_id: filteredSection.value, schemeId: markingGuideSection.scheme_id }})
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
      page: event.page * event.rows,
    };

    this.applyParticipantListFilter();
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

  patchForms() {
    this.participantsListFilterForm.patchValue({
      section_id: this.assessmentSummary.sections[0].id
    })
  }

  initFilterForms() {
    this.assessmentFilterForm = new FormGroup({
      center_id: new FormControl(''),
      batch_id: new FormControl(''),
    });

    this.scoreAnalysisFilterForm = new FormGroup({
      center_id: new FormControl(''),
      section_id: new FormControl(''),
    });

    this.scoreDistributionFilterForm = new FormGroup({
      center_id: new FormControl(''),
      section_id: new FormControl(''),
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

  initializeBreadCrumbs() {
    this.breadCrumbItems = [
      { label: 'Grading', active: false },
      { label: this.assessmentSummary.exam_name, active: false },
    ];
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
  
      this.dataService.getAssessmentSummary(this.assessmentId, params).subscribe((res) => this.assessmentSummary = res);
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

  initalizeScoreDistributionChart() {
    this._scoreDistributionChart('["--vz-success"]');
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

    if(target == 'scoreanalysis') {
       this.scoreAnalysisFilterForm.reset()
       this.applyScoreAnalysisFilter()
    }

    if(target == 'distribution') {
       this.scoreDistributionFilterForm.reset()
       this.applyDistributionFilter()
    }
  }

  numberToPrecision(num: number) {
    return num?.toFixed(1)
  }
  
  gotoGrader() {
    this.router.navigate(['/grading/grader']);
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
}
