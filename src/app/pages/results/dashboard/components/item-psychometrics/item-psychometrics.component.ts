import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnalyticsService } from '../../services/analytics.service';
import { ItemAnalysisResponse, ItemAnalysisData, ItemEventsResponse } from '../../models/analytics';
import { finalize } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { AnalyticsMockService } from '../../services/analytics-mock.service';

@Component({
  selector: 'app-item-psychometrics',
  templateUrl: './item-psychometrics.component.html',
  styleUrls: ['./item-psychometrics.component.scss']
})
export class ItemPsychometricsComponent implements OnInit {
  @Input() assessmentId!: string;
  @Input() examGroups: any[] = [];
  @Input() sections: any[] = [];
  @ViewChild('itemAnalysisModal') itemAnalysisModal: any;

  isLoading: boolean = false;
  itemsData: ItemAnalysisResponse | null = null;
  page: number = 1;
  size: number = 50;
  subjectId: string = '';
  examGroupId: string = '';
  sectionId: string = '';

  currentView: 'performance' | 'behavioral' = 'performance';
  selectedItem: ItemAnalysisData | null = null;
  responseDistributionChart: any;

  constructor(
    private analyticsService: AnalyticsService,
    // private analyticsService: AnalyticsMockService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {}

  fetchItems() {
    this.isLoading = true;
    
    const analysisReq = this.analyticsService.getItemAnalysis(
      this.examGroupId ? undefined : this.assessmentId, 
      this.page, 
      this.size, 
      this.subjectId || undefined,
      this.examGroupId || undefined,
      this.sectionId || undefined
    );

    const eventsReq = this.analyticsService.getItemEvents(
      this.examGroupId ? undefined : this.assessmentId,
      this.page,
      this.size,
      this.sectionId || undefined,
      this.examGroupId || undefined
    ); 

    forkJoin({ analysis: analysisReq, events: eventsReq })
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((res: any) => {
        this.itemsData = res.analysis;
        const eventsData = res.events as ItemEventsResponse;

        // Merge behavioral metrics into the items
        this.itemsData.data.forEach(item => {
          const matchingEvent = eventsData.data.find(e => e.item_id === item.item_id);
          if (matchingEvent) {
            item.total_visits = matchingEvent.total_visits;
            item.avg_duration_ms = matchingEvent.avg_duration_ms;
            item.median_duration_ms = matchingEvent.median_duration_ms;
            item.p95_duration_ms = matchingEvent.p95_duration_ms;
            item.min_duration_ms = matchingEvent.min_duration_ms;
            item.pct_answered_under_5s = matchingEvent.pct_answered_under_5s;
            item.pct_flagged = matchingEvent.pct_flagged;
            item.avg_answer_changes = matchingEvent.avg_answer_changes;
            item.pct_calculator_used = matchingEvent.pct_calculator_used;
          }
        });
      });
  }

  applyFilters() {
    this.page = 1;
    this.fetchItems();
  }

  clearFilters() {
    this.subjectId = '';
    this.examGroupId = '';
    this.sectionId = '';
    this.page = 1;
    this.fetchItems();
  }

  onPageChange(event: any) {
    this.page = event.page + 1;
    this.size = event.rows;
    this.fetchItems();
  }

  viewItemDetails(item: ItemAnalysisData, detailsModal: any) {
    this.selectedItem = item;

    const labels = item.response_distribution.map(d => d.option);
    const series = item.response_distribution.map(d => d.count);

    this.responseDistributionChart = {
      series: [{ name: 'Selections', data: series }],
      chart: { type: 'bar', height: 300, toolbar: { show: false } },
      plotOptions: {
        bar: { borderRadius: 4, horizontal: true }
      },
      dataLabels: { enabled: true },
      xaxis: { categories: labels, title: { text: 'Number of candidates' } },
      colors: ['#3b82f6']
    };

    this.modalService.open(detailsModal, { size: 'lg', centered: true });
  }

  getDifficultyClass(index: number): string {
    if (index >= 76) return 'text-success fw-bold';
    if (index >= 51) return 'text-info fw-bold';
    if (index >= 26) return 'text-warning fw-bold';
    return 'text-danger fw-bold';
  }

  getDiscriminationClass(index: number): string {
    if (index >= 40) return 'text-success fw-bold';
    if (index >= 30) return 'text-primary fw-bold';
    if (index >= 20) return 'text-warning fw-bold';
    return 'text-danger fw-bold';
  }
}
