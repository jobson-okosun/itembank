import { Component, OnInit, OnDestroy } from '@angular/core';
import { MonitorService } from '../services/monitor.service';
import { ActivatedRoute } from '@angular/router';
import { CenterAppEventDTO, CenterAppEventParams, CenterAppEventType, ParticipantSummaryDTO, PaginatedCenterParticipants, CenterParticipantDTO, AssessmentBatchDTO, CenterExamOverviewDTO } from '../model/types';
import { of, Subscription, interval } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit, OnDestroy {
  DoughnutChart: any;
  refreshSubscription?: Subscription;

  filteredNotifications: CenterAppEventDTO[] = [];
  pagedNotifications: CenterAppEventDTO[] = [];
  notifTotalRecords = 0;
  notifFirst = 0;
  notifRows = 10;
  notifSelectedFilter = 'ALL';
  notifLoginFilter = '';
  notifEventSourceFilter = 'ALL';
  fetchingNotifications = false;
  
  participantSummary: ParticipantSummaryDTO | null = null;
  fetchingSummary = false;

  examOverview: CenterExamOverviewDTO | null = null;
  fetchingOverview = false;

  participantList: PaginatedCenterParticipants | null = null;
  fetchingParticipants = false;
  participantPage = 1;
  participantSize = 10;
  
  participantSearchType: string = 'NONE';
  participantSearchText: string = '';
  participantSearchStatus: string = 'STARTED';
  participantSearchDuration: number | null = null;
  participantSearchAttemptCount: number | null = null;
  participantSearchBatch: string = '';
  
  batches: AssessmentBatchDTO[] = [];
  
  participantSearchTypes: string[] = [
    'NONE', 'NAME', 'LOGIN_FIELD', 'STATUS', 'SUSPENDED', 
    'COMPENSATORY_TIME_ADDED', 'RE_LOGIN', 'COMPUTER_SWAP', 
    'ATTEMPT_COUNT_GREATER', 'ATTEMPT_COUNT_LESSER', 
    'DURATION_GREATER', 'DURATION_LESSER', 'BATCH'
  ];
  participantStatusOptions: string[] = ['NOT_STARTED', 'STARTED', 'ENDED', 'ENDED_TIMED_OUT'];

  notifFilters: string[] = ['ALL', ...Object.values(CenterAppEventType)];
  notifEventSources: string[] = ['ALL', 'EXAM', 'PASSPORT', 'PARTICIPANT', 'EXAM_RESULT', 'EXAM_PARTICIPANT', 'BIOMETRICS'];

  assessmentId: string = '';
  centerId: string = '';
  assessmentName: string = '';

  constructor(private monitorService: MonitorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this._DoughnutChart(null);
    
    this.route.paramMap.subscribe(params => {
      this.assessmentId = params.get('assessmentId') || '';
      this.centerId = params.get('centerId') || '';
      this.assessmentName = this.route.snapshot.queryParamMap.get('assessmentName') || '';

      this.loadAllData();

      if (this.refreshSubscription) {
        this.refreshSubscription.unsubscribe();
      }

      this.refreshSubscription = interval(60000).subscribe(() => {
        this.loadAllData();
      });
    });
  }

  ngOnDestroy(): void {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  loadAllData() {
    if (this.centerId && this.assessmentId) {
      this.fetchCenterExamOverview();
      this.fetchParticipantSummary();
      this.fetchParticipants();
      this.fetchBatches();
    }

    this.fetchCenterEvents();
  }

  goBack() {
    history.back()
  }

  fetchParticipantSummary() {
    this.fetchingSummary = true;
    this.monitorService.fetchParticipantSummary(this.assessmentId, this.centerId).pipe(
      catchError(err => {
        return of(null);
      })
    ).subscribe(res => {
      this.fetchingSummary = false;
      if (res) {
        this.participantSummary = res;
        this.updateDoughnutChart(res);
      }
    });
  }

  fetchCenterExamOverview() {
    this.fetchingOverview = true;
    this.monitorService.fetchCenterExamOverview(this.assessmentId, this.centerId).pipe(
      catchError(err => {
        return of(null);
      })
    ).subscribe(res => {
      this.fetchingOverview = false;
      if (res) {
        this.examOverview = res;
      }
    });
  }

  fetchParticipants() {
    this.fetchingParticipants = true;
    const params: any = {
      page: this.participantPage,
      size: this.participantSize
    };
    
    if (this.participantSearchType !== 'NONE') {
      params.search_type = this.participantSearchType;
      if (this.participantSearchType === 'NAME' || this.participantSearchType === 'LOGIN_FIELD') {
        params.search_text = this.participantSearchText;
      } else if (this.participantSearchType === 'STATUS') {
        params.status = this.participantSearchStatus;
      } else if (this.participantSearchType === 'DURATION_GREATER' || this.participantSearchType === 'DURATION_LESSER') {
        params.duration = this.participantSearchDuration;
      } else if (this.participantSearchType === 'ATTEMPT_COUNT_GREATER' || this.participantSearchType === 'ATTEMPT_COUNT_LESSER') {
        params.attempt_count = this.participantSearchAttemptCount;
      }
    }

    if (this.participantSearchType === 'BATCH' && this.participantSearchBatch) {
      params.batch_id = this.participantSearchBatch;
    }

    this.monitorService.fetchParticipantList(this.assessmentId, this.centerId, params).pipe(
      catchError(err => {
        return of(null);
      })
    ).subscribe(res => {
      this.fetchingParticipants = false;
      if (res) {
        this.participantList = res;
      }
    });
  }

  applyParticipantFilters() {
    this.participantPage = 1;
    this.fetchParticipants();
  }

  clearParticipantFilters() {
    this.participantSearchType = 'NONE';
    this.participantSearchText = '';
    this.participantSearchStatus = 'STARTED';
    this.participantSearchDuration = null;
    this.participantSearchAttemptCount = null;
    this.participantSearchBatch = '';
    this.applyParticipantFilters();
  }

  onParticipantPageChange(event: any) {
    this.participantPage = (event.page ?? 0) + 1;
    this.participantSize = event.rows;
    this.fetchParticipants();
  }

  hasComputerSwapped(item: CenterParticipantDTO): boolean {
    if (!item.ip_addresses || item.ip_addresses.length <= 1) return false;
    const uniqueIps = new Set(item.ip_addresses.map(ip => ip.ip_address));
    return uniqueIps.size > 1;
  }

  getUniqueIps(item: CenterParticipantDTO): any[] {
    if (!item.ip_addresses || item.ip_addresses.length === 0) return [];
    const uniqueMap = new Map<string, any>();
    for (const ipObj of item.ip_addresses) {
      if (!uniqueMap.has(ipObj.ip_address)) {
        uniqueMap.set(ipObj.ip_address, ipObj);
      }
    }
    return Array.from(uniqueMap.values());
  }

  fetchBatches() {
    this.monitorService.fetchInfractionBatches(this.assessmentId).subscribe({
      next: (res) => {
        this.batches = res || [];
      },
      error: (err) => console.error(err)
    });
  }

  fetchCenterEvents() {
    this.fetchingNotifications = true;
    const page = this.notifFirst / this.notifRows;
    const params: CenterAppEventParams = {
      assessment_id: this.assessmentId,
      page: page,
      size: this.notifRows
    };

    if (this.notifSelectedFilter !== 'ALL') {
      params.search_type = this.notifSelectedFilter as CenterAppEventType;
    }
    
    if (this.notifEventSourceFilter !== 'ALL') {
      params.event_source = this.notifEventSourceFilter;
    }

    if (this.notifLoginFilter && this.notifLoginFilter.trim() !== '') {
      params.login_field = this.notifLoginFilter.trim();
    }
    
    if (this.centerId) {
       params.center_id = this.centerId;
    }

    this.monitorService.fetchCenterAppEvents(params).pipe(
      catchError(err => {
        console.error('Failed to fetch notifications from backend', err);
        return of({
          total: 0,
          data: [],
          page: 1,
          size: this.notifRows
        });
      })
    ).subscribe(res => {
      this.fetchingNotifications = false;
      if (res) {
        this.pagedNotifications = res.data || [];
        this.notifTotalRecords = res.total || 0;
      }
    });
  }

  setNotifFilter(filter: string) {
    this.notifSelectedFilter = filter;
    this.notifFirst = 0;
    this.fetchCenterEvents();
  }

  applyNotifFilters() {
    this.notifFirst = 0;
    this.fetchCenterEvents();
  }

  clearNotifFilters() {
    this.notifSelectedFilter = 'ALL';
    this.notifEventSourceFilter = 'ALL';
    this.notifLoginFilter = '';
    this.applyNotifFilters();
  }

  onNotifPageChange(event: any) {
    this.notifFirst = event.first;
    this.fetchCenterEvents();
  }



  private getChartColorsArray(colors: any) {
    colors = JSON.parse(colors);

    return colors.map(function (value: any) {
      var newValue = value.replace(" ", "");

      if (newValue.indexOf(",") === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);

        if (color) {
          color = color.replace(" ", "");
          return color;
        } else return newValue;
      } else {
        var val = value.split(",");
        if (val.length == 2) {
          var rgbaColor = getComputedStyle(
            document.documentElement
          ).getPropertyValue(val[0]);
          rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
          return rgbaColor;
        } else {
          return newValue;
        }
      }
    });
  }


  private _DoughnutChart(summary: ParticipantSummaryDTO | null) {
    const rawData = summary ? [
      { name: 'Not started', value: summary.total_not_started || 0, color: '#6464ed' },
      { name: 'Started', value: summary.total_started || 0, color: '#57bb50' },
      { name: 'Network disconnected', value: summary.total_offline || 0, color: '#bb5e50' },
      { name: 'Compensatory time', value: summary.total_comptime_added || 0, color: '#5dc1b5' },
      { name: 'Relogin', value: summary.total_relogins || 0, color: '#56a4b3' },
      { name: 'Computer swap', value: summary.total_comp_swaps || 0, color: '#4b4f4b' },
      { name: 'Suspended', value: summary.total_suspended || 0, color: '#de8f52' },
      { name: 'Timed out', value: summary.total_ended_timedout || 0, color: '#db8259' },
      { name: 'Ended', value: summary.total_ended || 0, color: '#dc3545' },
      { name: 'Malpractice', value: summary.total_malpractice || 0, color: '#d5487c' },
      { name: 'Rescheduled', value: summary.total_rescheduled || 0, color: '#4051b1' },
      { name: 'BVM verified', value: summary.total_bvm_verified || 0, color: '#6ebb50' },
      { name: 'Resumed', value: summary.total_resumed || 0, color: '#7e57c2' },
      { name: 'Un-verified', value: summary.total_un_verified || 0, color: '#ffb74d' },
      { name: 'Un-considered', value: summary.total_un_considered || 0, color: '#f06292' },
      { name: 'No attempt', value: summary.total_no_attempt || 0, color: '#9e9e9e' }
    ].filter(item => item.value > 0) : [];

    const totalValue = rawData.reduce((acc, curr) => acc + curr.value, 0) || 1;

    const mappedData = rawData.map(item => ({
      value: item.value,
      name: item.name,
      itemStyle: { color: item.color }
    }));

    this.DoughnutChart = {
      tooltip: { trigger: "item" },
      series: [
        {
          type: "pie",
          radius: ["40%", "70%"],
          center: ["50%", "35%"],
          startAngle: 180,
          label: {
            show: false,
            formatter(param: any) {
              return param.name + " (" + param.percent * 2 + "%)";
            },
          },
          data: [
            ...mappedData,
            {
              value: totalValue,
              itemStyle: {
                color: "none",
                decal: {
                  symbol: "none",
                },
              },
              label: {
                show: false,
              },
            },
          ],
        },
      ],
      textStyle: {
        fontFamily: "Poppins, sans-serif",
      },
    };
  }

  updateDoughnutChart(summary: ParticipantSummaryDTO | null) {
    this._DoughnutChart(summary);
    
    // Force echarts to update by reassigning the reference
    this.DoughnutChart = { ...this.DoughnutChart };
  }
}
