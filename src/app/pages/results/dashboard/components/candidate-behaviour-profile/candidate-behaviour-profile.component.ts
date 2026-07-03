import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnalyticsService } from '../../services/analytics.service';
import { BehaviourAnalysisCandidate, BehaviourEventData } from '../../models/analytics';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AnalyticsMockService } from '../../services/analytics-mock.service';

@Component({
  selector: 'app-candidate-behaviour-profile',
  templateUrl: './candidate-behaviour-profile.component.html',
  styleUrls: ['./candidate-behaviour-profile.component.scss']
})
export class CandidateBehaviourProfileComponent implements OnInit {
  @Input() assessmentId!: string;
  @ViewChild('candidateProfileModal') candidateProfileModal: any;

  isLoading: boolean = false;
  participantId: string = '';
  
  profileData: BehaviourAnalysisCandidate | null = null;
  eventsData: BehaviourEventData[] = [];
  selectedEvent: BehaviourEventData | null = null;
  
  filterEventType: string = '';
  isEventsLoading: boolean = false;
  
  radarChartOptions: any;
  activeTab: string = 'overview';

  constructor(
    // private analyticsService: AnalyticsService,
    private analyticsService: AnalyticsMockService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {}

  openProfile(participantId: string) {
    this.participantId = participantId;
    this.activeTab = 'overview'; // reset tab on open
    this.fetchData();
    this.modalService.open(this.candidateProfileModal, { size: 'xl', centered: true, scrollable: true });
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  openEventDetails(event: BehaviourEventData, modal: any) {
    this.selectedEvent = event;
    this.modalService.open(modal, { size: 'md', centered: true });
  }

  fetchData() {
    this.isLoading = true;
    
    forkJoin({
      profile: this.analyticsService.getCandidateBehaviourProfile(this.assessmentId, this.participantId),
      events: this.analyticsService.getCandidateEvents(this.assessmentId, this.participantId, 1, 100, this.filterEventType || undefined)
    })
    .pipe(finalize(() => this.isLoading = false))
    .subscribe((res: any) => {
      this.profileData = res.profile;
      this.eventsData = res.events.data;
      this.initRadarChart();
    });
  }

  fetchEvents() {
    this.isEventsLoading = true;
    this.analyticsService.getCandidateEvents(this.assessmentId, this.participantId, 1, 100, this.filterEventType || undefined)
      .pipe(finalize(() => this.isEventsLoading = false))
      .subscribe((res: any) => {
        this.eventsData = res.data;
      });
  }

  applyEventFilter() {
    this.fetchEvents();
  }

  clearEventFilter() {
    this.filterEventType = '';
    this.fetchEvents();
  }

  initRadarChart() {
    if (!this.profileData) return;

    this.radarChartOptions = {
      series: [{
        name: 'Score',
        data: [
          this.profileData.integrity_score,
          this.profileData.confidence_score,
          this.profileData.carefulness_score,
          this.profileData.hesitation_score,
          this.profileData.rushing_score,
          this.profileData.guessing_probability
        ]
      }],
      chart: { type: 'radar', height: 350, toolbar: { show: false } },
      labels: ['Integrity', 'Confidence', 'Carefulness', 'Hesitation', 'Rushing', 'Guessing'],
      stroke: { width: 2 },
      fill: { opacity: 0.2 },
      markers: { size: 4 },
      yaxis: { show: false, min: 0, max: 100 },
      colors: ['#3b82f6']
    };
  }

  getEventIcon(eventType: string): string {
    switch (eventType) {
      case 'EXAM_STARTED':
      case 'EXAM_SUBMITTED':
        return 'ri-flag-line text-success';
      case 'WINDOW_BLURRED':
      case 'NETWORK_OFFLINE':
        return 'ri-alert-line text-danger';
      case 'ANSWER_SELECTED':
      case 'ANSWER_CHANGED':
        return 'ri-edit-2-line text-primary';
      case 'QUESTION_ENTERED':
        return 'ri-arrow-right-line text-secondary';
      default:
        return 'ri-time-line text-muted';
    }
  }

  formatTime(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (parseInt(seconds) < 10 ? '0' : '') + seconds;
  }
}
