import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AssessmentsService } from '../service/assessments.service';
import { ItemServiceService } from '../../../shared/item-services/item-service.service';

@Component({
  selector: 'app-exam-manager',
  templateUrl: './exam-manager.component.html',
  styleUrls: ['./exam-manager.component.scss']
})
export class ExamManagerComponent implements OnInit {
  activeTab: 'structure' | 'schedule' = 'structure';
  examName: string = 'Manage Exam';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assessmentService: AssessmentsService,
    private itemService: ItemServiceService
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateActiveTabFromUrl();
      });
  }

  ngOnInit(): void {
    this.updateActiveTabFromUrl();
    this.syncStorage();
  }

  updateActiveTabFromUrl() {
    const url = this.router.url;
    if (url.includes('/schedule')) {
      this.activeTab = 'schedule';
    } else {
      this.activeTab = 'structure';
    }
  }

  setActiveTab(tab: 'structure' | 'schedule') {
    this.activeTab = tab;
    
    const bankId = this.route.snapshot.paramMap.get('bank_id');
    const scheduleId = this.route.snapshot.paramMap.get('schedule_id');
    
    if (tab === 'structure') {
      this.router.navigate(['/examalpha/exams/manage', bankId, scheduleId, 'structure']);
    } else {
      this.router.navigate(['/examalpha/exams/manage', bankId, scheduleId, 'schedule', scheduleId, 'exam-schedule']);
    }
  }

  syncStorage() {
    const bankId = this.route.snapshot.paramMap.get('bank_id');
    const scheduleId = this.route.snapshot.paramMap.get('schedule_id');
    
    if (bankId) {
      this.assessmentService.activeAssessmentId = bankId;
    }
    if (scheduleId) {
      this.assessmentService.schedulerAssessmentId = scheduleId;
      this.itemService.setItem('assessmentId', scheduleId);
    }
    
    // Sync other values if available
    const activeAss = this.itemService.getItem('activeAssessment');
    if (activeAss) {
      this.assessmentService.activeAssessment = activeAss;
      this.itemService.setItem('assessmentName', activeAss);
      this.examName = activeAss;
    }

    const activeMethod = this.itemService.getItem('activeAssessmentDeliveryMethod');
    if (activeMethod) {
      this.assessmentService.activeAssessmentDeliveryMethod = activeMethod;
      this.itemService.setItem('deliveryMethod', activeMethod);
    }
  }
}
