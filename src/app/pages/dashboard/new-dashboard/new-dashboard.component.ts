import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/authentication/model/account.model';
import { Role } from 'src/app/shared/enum/role';
import { UserService } from 'src/app/shared/user.service';
import { DashboardService } from '../dashboard.service';
import {
  ExamsForTheDayResponse,
  UpcomingExamsResponse,
  AIInfractionSummaryDTO,
  ExamCalendarDTO,
  ProctorWeeklyCalendarDTO
} from '../model/dashboard-types';

@Component({
  selector: 'app-new-dashboard',
  templateUrl: './new-dashboard.component.html',
  styleUrls: ['./new-dashboard.component.scss']
})
export class NewDashboardComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  currentUser: Account;

  // Global Filter State
  selectedDeliveryMethod: string = '';

  // Data States
  examsForTheDay: ExamsForTheDayResponse | null = null;
  upcomingExams: UpcomingExamsResponse | null = null;
  aiInfractions: AIInfractionSummaryDTO[] = [];
  examCalendar: ExamCalendarDTO[] = [];
  proctorWeekly: ProctorWeeklyCalendarDTO[] = [];

  // Local Filter States
  upcomingStartDateFrom: string = '';
  upcomingStartDateTo: string = '';
  upcomingExamStatus: string = '';
  
  calendarMonth: number = new Date().getMonth() + 1;
  calendarYear: number = new Date().getFullYear();
  calendarDays: any[] = [];

  proctorWeekStart: string = '';

  // ECharts Configurations
  aiInfractionsChartOptions: any;
  upcomingExamsChartOptions: any;
  proctorWeeklyChartOptions: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.breadCrumbItems = [{ label: 'dashboard', active: true }];

    // Role-based routing guard (preserving from main.component.ts)
    if(this.currentUser.authorities[0] == Role.MONITOR) {
      this.router.navigateByUrl('/examalpha/monitor')
    } else if(this.currentUser.authorities[0] == Role.ANALYTIC) {
      this.router.navigateByUrl('/examalpha/result')
    } else if(this.currentUser.authorities[0] == Role.PROCTOR_ADMIN) {
      this.router.navigateByUrl('/examalpha/schedule')
      return;
    } else if(this.currentUser.authorities[0] == Role.MARKER) {
      this.router.navigateByUrl('/examalpha/exams')
      return;
    }

    if(this.currentUser.authorities.includes(Role.PROCTOR_ADMIN)) {
        this.selectedDeliveryMethod = 'LIVE_PROCTORING';
    }

    // Set initial proctor week start to today's date (or nearest monday ideally)
    this.proctorWeekStart = new Date().toISOString().split('T')[0];

    // Initialize Dashboard data
    this.fetchDashboardData();
  }

  fetchDashboardData() {
    this.fetchExamsForTheDay();
    this.fetchUpcomingExams();
    this.fetchAIInfractions();
    this.fetchExamCalendar();
    this.fetchProctorWeekly();
  }

  onDeliveryMethodChange() {
    this.fetchDashboardData();
  }

  private buildParams(localParams: any = {}): any {
    const params = { ...localParams };
    if (this.selectedDeliveryMethod) {
      params['delivery_method'] = this.selectedDeliveryMethod;
    }
    return params;
  }

  fetchExamsForTheDay() {
    this.dashboardService.fetchExamsForTheDay(this.buildParams({ page: 1, size: 20 })).subscribe(res => {
      this.examsForTheDay = res;
    });
  }

  fetchUpcomingExams() {
    const params: any = { page: 1, size: 20 };
    if (this.upcomingStartDateFrom) params['start_date_from'] = this.upcomingStartDateFrom;
    if (this.upcomingStartDateTo) params['start_date_to'] = this.upcomingStartDateTo;
    if (this.upcomingExamStatus) params['exam_status'] = this.upcomingExamStatus;

    this.dashboardService.fetchUpcomingExams(this.buildParams(params)).subscribe(res => {
      this.upcomingExams = res;
      this.setupUpcomingExamsChart();
    });
  }

  fetchAIInfractions() {
    this.dashboardService.fetchAIInfractionsForTheDay(this.buildParams()).subscribe(res => {
      this.aiInfractions = res;
      this.setupAIInfractionsChart();
    });
  }

  fetchExamCalendar() {
    const params = { month: this.calendarMonth, year: this.calendarYear };
    this.dashboardService.fetchExamCalendar(this.buildParams(params)).subscribe(res => {
      this.examCalendar = res;
      this.generateCalendarGrid();
    });
  }

  generateCalendarGrid() {
    this.calendarDays = [];
    const firstDay = new Date(this.calendarYear, this.calendarMonth - 1, 1).getDay();
    const daysInMonth = new Date(this.calendarYear, this.calendarMonth, 0).getDate();
    
    // Adjust for Monday start (0 = Monday, 6 = Sunday for our grid)
    let emptyCells = firstDay === 0 ? 6 : firstDay - 1;
    
    for (let i = 0; i < emptyCells; i++) {
      this.calendarDays.push({ day: null, heatClass: 'heat-empty' });
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const currentDateStr = new Date(this.calendarYear, this.calendarMonth - 1, d).toISOString().split('T')[0];
      
      // Find exams falling on this date
      const examsOnDay = this.examCalendar.filter(ex => {
        const start = ex.start_date.split('T')[0];
        const end = ex.end_date.split('T')[0];
        return currentDateStr >= start && currentDateStr <= end;
      });

      let totalCandidates = 0;
      examsOnDay.forEach(e => totalCandidates += e.total_candidates);

      let heatClass = 'heat-0';
      if (totalCandidates > 0 && totalCandidates <= 50) heatClass = 'heat-1';
      else if (totalCandidates > 50 && totalCandidates <= 200) heatClass = 'heat-2';
      else if (totalCandidates > 200 && totalCandidates <= 500) heatClass = 'heat-3';
      else if (totalCandidates > 500) heatClass = 'heat-4';

      this.calendarDays.push({
        day: d,
        dateStr: currentDateStr,
        exams: examsOnDay,
        heatClass: heatClass
      });
    }
  }

  fetchProctorWeekly() {
    const params = { week_start: this.proctorWeekStart };
    // Proctor weekly ignores delivery method
    this.dashboardService.fetchProctorWeeklyCalendar(params).subscribe(res => {
      this.proctorWeekly = res;
      this.setupProctorWeeklyChart();
    });
  }

  // --- CHART SETUPS ---

  setupAIInfractionsChart() {
    const data = this.aiInfractions.map(inf => ({
      name: inf.infraction_type?.replaceAll('_', ' '),
      value: inf.total_candidates
    }));

    this.aiInfractionsChartOptions = {
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          const rawData = this.aiInfractions[params.dataIndex];
          return `${params.name}<br/>Total Candidates: <b>${rawData.total_candidates}</b><br/>Max Strikes Reached: <b>${rawData.total_candidates_with_max_strikes_reached}</b>`;
        }
      },
      legend: { top: '5%', left: 'center' },
      series: [
        {
          name: 'Infractions',
          type: 'pie',
          radius: ['45%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: { borderRadius: 2, borderColor: '#fff', borderWidth: 2 },
          label: { show: false, position: 'center' },
          color: ['#48c9b0', '#1abc9c', '#6c757d', '#34495e', '#2c3e50'],
          emphasis: {
            label: { show: true, fontSize: '18', fontWeight: 'bold' }
          },
          labelLine: { show: false },
          data: data
        }
      ]
    };
  }

  setupUpcomingExamsChart() {
    if (!this.upcomingExams || !this.upcomingExams.content) return;
    
    const dates = this.upcomingExams.content.map(ex => ex.exam_start_date.split('T')[0]);
    const participants = this.upcomingExams.content.map(ex => ex.total_participants);

    this.upcomingExamsChartOptions = {
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          const index = params[0].dataIndex;
          const exam = this.upcomingExams.content[index];
          return `<b>${exam.exam_name}</b><br/>
                  Date: ${exam.exam_start_date ? new Date(exam.exam_start_date).toLocaleString() : 'N/A'}<br/>
                  Status: ${exam.exam_status}<br/>
                  Participants: ${exam.total_participants}<br/>
                  Centers: ${exam.total_centers}<br/>
                  Proctors: ${exam.total_proctors}`;
        }
      },
      xAxis: { 
        type: 'category', 
        data: dates,
        axisLine: { show: false },
        axisTick: { show: false }
      },
      yAxis: { 
        type: 'value',
        splitLine: { lineStyle: { type: 'dashed', color: '#e0e0e0' } }
      },
      series: [
        {
          data: participants,
          type: 'bar',
          barWidth: '40%',
          itemStyle: { color: '#2ecc71', borderRadius: [2, 2, 0, 0] },
          label: { show: true, position: 'top', color: '#2c3e50', fontWeight: 'bold' }
        }
      ]
    };
  }

  setupProctorWeeklyChart() {
    const proctors = this.proctorWeekly.map(p => p.proctor_full_name);
    const workloads = this.proctorWeekly.map(p => p.total_participants_assigned);

    this.proctorWeeklyChartOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        formatter: (params: any) => {
          const index = params[0].dataIndex;
          const p = this.proctorWeekly[index];
          return `<b>${p.proctor_full_name}</b><br/>
                  Batch: ${p.batch_name}<br/>
                  Time: ${new Date(p.batch_start_time).toLocaleString()} - ${new Date(p.batch_end_time).toLocaleString()}<br/>
                  Assigned: ${p.total_participants_assigned}`;
        }
      },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: { show: false },
      yAxis: { 
        type: 'category', 
        data: proctors,
        axisLine: { show: false },
        axisTick: { show: false }
      },
      series: [
        {
          name: 'Participants Assigned',
          type: 'bar',
          data: workloads,
          barWidth: '50%',
          itemStyle: { color: '#2ecc71' },
          label: { show: true, position: 'right', color: '#ffffff', distance: -25, fontWeight: 'bold' }
        }
      ]
    };
  }

  /** Handler function for quick guide glide in/pop out */
  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
    const rightBar = document.getElementById('theme-settings-offcanvas');
    if (rightBar != null) {
      rightBar.classList.toggle('show');
      rightBar.setAttribute('style', 'visibility: visible;');
    }
  }

}
