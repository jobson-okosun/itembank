import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnalyticsService } from '../../services/analytics.service';
import { BehaviourAnalysisAssessment, IntegrityFlagsResponse } from '../../models/analytics';
import { finalize } from 'rxjs/operators';
import { AnalyticsMockService } from '../../services/analytics-mock.service';

@Component({
  selector: 'app-cohort-behaviour',
  templateUrl: './cohort-behaviour.component.html',
  styleUrls: ['./cohort-behaviour.component.scss']
})
export class CohortBehaviourComponent implements OnInit {
  @Input() assessmentId!: string;
  @Input() examGroups: any[] = [];
  @Input() centers: any[] = [];

  isLoading: boolean = true;
  cohortData: BehaviourAnalysisAssessment | null = null;
  
  examStrategyChart: any;
  integrityDistributionChart: any;

  // High Risk Modal data
  isLoadingRiskTable: boolean = false;
  highRiskData: IntegrityFlagsResponse | null = null;
  riskTablePage: number = 1;
  riskTableSize: number = 50;
  
  filterCenterId: string = '';
  filterMinIntegrityScore: number | null = null;
  examGroupId: string = '';

  constructor(
    private analyticsService: AnalyticsService,
    // private analyticsService: AnalyticsMockService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    if (this.assessmentId) {
      this.fetchCohortData();
    }
  }

  fetchCohortData() {
    this.isLoading = true;
    this.analyticsService.getAssessmentCohortBehaviour(
      this.examGroupId ? undefined : this.assessmentId,
      this.examGroupId || undefined
    )
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(res => {
        this.cohortData = res;
        this.initCharts();
      });
  }

  applyCohortFilter() {
    this.fetchCohortData();
  }

  clearCohortFilter() {
    this.examGroupId = '';
    this.fetchCohortData();
  }

  initCharts() {
    if (!this.cohortData) return;

    const labels = this.cohortData.exam_strategy_breakdown.map(s => s.strategy.replace(/_/g, ' ').toUpperCase());
    const series = this.cohortData.exam_strategy_breakdown.map(s => s.count);

    this.examStrategyChart = {
      series: series,
      chart: { type: 'donut', height: 280 },
      labels: labels,
      colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#6366f1'],
      dataLabels: { enabled: false },
      legend: { 
        position: 'bottom',
        fontSize: '11px',
        fontWeight: 500,
        labels: { colors: '#6c757d' },
        markers: { radius: 12 }
      }
    };

    // Integrity Distribution Bar Chart
    const buckets = this.cohortData.integrity_score_distribution.map(b => b.bucket);
    const counts = this.cohortData.integrity_score_distribution.map(b => b.count);

    this.integrityDistributionChart = {
      series: [{ name: 'Candidates', data: counts }],
      chart: { type: 'bar', height: 280, toolbar: { show: false } },
      plotOptions: {
        bar: { borderRadius: 4, horizontal: false, columnWidth: '50%' }
      },
      dataLabels: { enabled: false },
      xaxis: { categories: buckets, title: { text: 'Risk Score Range' } },
      colors: ['#ef4444']
    };
  }

  openHighRiskModal(content: any) {
    this.fetchHighRiskData();
    this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
  }

  fetchHighRiskData() {
    this.isLoadingRiskTable = true;
    this.analyticsService.getIntegrityFlags(
      this.examGroupId ? undefined : this.assessmentId, 
      this.riskTablePage, 
      this.riskTableSize,
      this.filterCenterId || undefined,
      this.filterMinIntegrityScore !== null ? this.filterMinIntegrityScore : undefined,
      this.examGroupId || undefined
    )
      .pipe(finalize(() => this.isLoadingRiskTable = false))
      .subscribe(res => {
        this.highRiskData = res;
      });
  }

  applyRiskFilters() {
    this.riskTablePage = 1;
    this.fetchHighRiskData();
  }

  clearRiskFilters() {
    this.filterCenterId = '';
    this.filterMinIntegrityScore = null;
    this.riskTablePage = 1;
    this.fetchHighRiskData();
  }

  onRiskTablePageChange(event: any) {
    this.riskTablePage = event.page + 1;
    this.riskTableSize = event.rows;
    this.fetchHighRiskData();
  }

  formatTime(ms: number | undefined): string {
    if (!ms) return '00:00:00';
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}
