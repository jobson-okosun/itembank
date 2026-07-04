import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Account } from "src/app/authentication/model/account.model";
import { Role } from "src/app/shared/enum/role";
import { UserService } from "src/app/shared/user.service";
import { DashboardService } from "../dashboard.service";
import {
  ExamsForTheDayResponse,
  UpcomingExamsResponse,
  AIInfractionSummaryDTO,
  ExamCalendarDTO,
  ProctorWeeklyCalendarDTO,
  AIInfractionChartOptions,
  UserChartOptions,
} from "../model/dashboard-types";
// import { ChartComponent, ChartOptions } from "chart.js";
import { ChartComponent } from "ng-apexcharts";
import { NotifierService } from "angular-notifier";
import { DashboardCards } from "../model/dashboard-cards";
import { HttpErrorResponse } from "@angular/common/http";
import { CardDetails } from "../main/main.component";
import { AssessmentDeliveryEnum } from "../../assessment/model/assessment-delivery-enum";
import { DELIVERY_METHOD_LABEL } from "../../scheduler/models/default.model";

@Component({
  selector: "app-new-dashboard",
  templateUrl: "./new-dashboard.component.html",
  styleUrls: ["./new-dashboard.component.scss"],
})
export class NewDashboardComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  currentUser: Account;

  dashboardData: DashboardCards;
  rowOne: CardDetails[] = [];
  isLoadingQuestionsOverview: boolean = false;

  loading: boolean = false;

  isLoadingexamsForTheDay: boolean = false;

  totalUsersCount: number = 0;

  deliveryMethods: Array<string> = [];
  deliveryMethodsWithLabel: {
    label: string;
    value: string;
    description: string;
  }[] = [];

  // Global Filter State
  selectedExamForTheDayDeliveryMethod: string = "";
  selectedInfractionDeliveryMethod: string = "";
  selectedUpcomingExamDeliveryMethod: string = "";
  selectedExamCalendarDeliveryMethod = "";

  selectedUpcomingExamStatus: string = "";
  // These should be in standard 'YYYY-MM-DD' string format
  upcomingExamsStartDateFromStr: string = "";
  upcomingExamsStartDateToStr: string = "";
  upcomingExamsEndDateFromStr: string = "";
  upcomingExamsEndDateToStr: string = "";

  // Data States
  examsForTheDay: ExamsForTheDayResponse | null = null;
  upcomingExams: UpcomingExamsResponse | null = null;
  aiInfractions: AIInfractionSummaryDTO[] = [];
  examCalendar: ExamCalendarDTO[] = [];
  proctorWeekly: ProctorWeeklyCalendarDTO[] = [];

  // Local Filter States
  // upcomingStartDateFrom: string = "";
  // upcomingStartDateTo: string = "";
  // upcomingEndDateFrom: string = "";
  // upcomingEndDateTo: string = "";
  // upcomingExamStatus: string = "";

  calendarMonth: number = new Date().getMonth() + 1;
  calendarYear: number = new Date().getFullYear();
  calendarDays: any[] = [];

  proctorWeekStarts: string = "";

  // ECharts Configurations
  aiInfractionsChartOptions: any;
  upcomingExamsChartOptions: any;
  proctorWeeklyChartOptions: any;
  examLookupMap: { [key: string]: ProctorWeeklyCalendarDTO[] } = {};
  weekDays: Date[] = [];
  timeSlots: string[] = [];
  appointments: ProctorWeeklyCalendarDTO[] = []; // Your HTTP response data goes here

  // Track our current working Monday locally
  private currentMondayDate!: Date;
  currentWeekStartStr: string = ""; // Bound directly to your template view string

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: AIInfractionChartOptions;

  @ViewChild("userChart") userChart!: ChartComponent;
  public userChartOptions!: UserChartOptions;

  public isChartLoaded = false;
  public isUserChartLoaded = false;

  // Pagination States
  private examForTheDayPaginationSize: number = 20;
  private examForTheDayPaginationPage: number = 1;

  private upcomingExamsPaginationSize: number = 20;
  private upcomingExamsPaginationPage: number = 1;

  hoveredCell: any = null;

  constructor(
    private userService: UserService,
    private router: Router,
    private dashboardService: DashboardService,
    private notifierService: NotifierService,
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.breadCrumbItems = [{ label: "dashboard", active: true }];

    // Role-based routing guard (preserving from main.component.ts)
    if (this.currentUser.authorities[0] == Role.MONITOR) {
      this.router.navigateByUrl("/examalpha/monitor");
    } else if (this.currentUser.authorities[0] == Role.ANALYTIC) {
      this.router.navigateByUrl("/examalpha/result");
    } else if (this.currentUser.authorities[0] == Role.PROCTOR_ADMIN) {
      this.router.navigateByUrl("/examalpha/schedule");
      return;
    } else if (this.currentUser.authorities[0] == Role.MARKER) {
      this.router.navigateByUrl("/examalpha/exams");
      return;
    }

    Object.keys(AssessmentDeliveryEnum).forEach((method) => {
      this.deliveryMethods.push(method);
    });

    this.deliveryMethodsWithLabel = this.deliveryMethods?.map(
      (value: string, index: number) => ({
        value: value,
        label: DELIVERY_METHOD_LABEL?.[index]?.label,
        description: DELIVERY_METHOD_LABEL?.[index]?.description,
      }),
    );

    if (this.currentUser.authorities.includes(Role.PROCTOR_ADMIN)) {
      this.selectedExamForTheDayDeliveryMethod = "LIVE_PROCTORING";
      this.selectedInfractionDeliveryMethod = "LIVE_PROCTORING";
      this.selectedUpcomingExamDeliveryMethod = "LIVE_PROCTORING";
      this.selectedExamCalendarDeliveryMethod = "LIVE_PROCTORING";
    }

    if (
      this.currentUser.authorities.includes("ADMIN") ||
      this.currentUser.authorities.includes("PROCTOR_ADMIN") ||
      this.currentUser.authorities.includes("MONITOR") ||
      this.currentUser.authorities.includes("EXAMINER") ||
      this.currentUser.authorities.includes("GROUP_ADMIN")
    ) {
      this.generateTimeSlots();

      // Fallback initialize to current running week's Monday
      this.setWeekState(new Date());
    }

    // Set initial proctor week start to today's date (or nearest monday ideally)
    // this.proctorWeekStart = new Date().toISOString().split("T")[0];

    // Initialize Dashboard data
    this.fetchDashboardData();

    this.isLoadingQuestionsOverview = true;
    this.dashboardService.fetchDashboardData().subscribe(
      (value) => {
        this.dashboardData = value;
        this.isLoadingQuestionsOverview = false;
        console.log("TAGS GRAPH: ", this.dashboardData);

        this.rowOne = [
          {
            title: "Total Subjects",
            icon: "folder-line",
            count:
              this.dashboardData.questionsModerationCard?.totalSubjects ?? 0,
            roles: ["ADMIN", "AUTHOR", "MODERATOR", "GROUP_ADMIN"],
          },
          {
            title: "Total Questions",
            icon: "stack-line",
            count:
              this.dashboardData.questionsModerationCard?.totalQuestions ?? 0,
            roles: ["ADMIN", "AUTHOR", "MODERATOR", "GROUP_ADMIN"],
          },
          {
            title: "Total Passages",
            icon: "article-line",
            count:
              this.dashboardData.questionsModerationCard?.totalPassages ?? 0,
            roles: ["ADMIN", "AUTHOR", "MODERATOR", "GROUP_ADMIN"],
          },
          {
            title: "Total Questions In-recycle",
            icon: "recycle-line",
            count:
              this.dashboardData.questionsModerationCard?.totalInRecycle ?? 0,
            roles: ["ADMIN", "EXAMINER", "GROUP_ADMIN"],
          },
          {
            title: "Total Published Questions",
            icon: "upload-cloud-2-line",
            count:
              this.dashboardData.questionsModerationCard?.totalPublished ?? 0,
            roles: ["ADMIN", "AUTHOR", "MODERATOR", "EXAMINER", "GROUP_ADMIN"],
          },
          {
            title: "Awaiting Moderation",
            icon: "arrow-left-right-line",
            count:
              this.dashboardData.questionsModerationCard
                ?.totalAwaitingModeration ?? 0,
            roles: ["ADMIN", "MODERATOR", "EXAMINER", "GROUP_ADMIN"],
          },
          {
            title: "Total Approved Questions",
            icon: "check-double-line",
            count:
              this.dashboardData.questionsModerationCard?.totalApproved ?? 0,
            roles: ["ADMIN", "AUTHOR", "MODERATOR", "EXAMINER", "GROUP_ADMIN"],
          },
          {
            title: "Total Draft Questions",
            icon: "draft-line",
            count: this.dashboardData.questionsModerationCard?.totalDrafts ?? 0,
            roles: ["ADMIN", "AUTHOR", "EXAMINER", "GROUP_ADMIN"],
          },
          {
            title: "Total Rejected Questions",
            icon: "feedback-line",
            count:
              this.dashboardData.questionsModerationCard?.totalRejected ?? 0,
            roles: ["ADMIN", "AUTHOR", "MODERATOR", "EXAMINER", "GROUP_ADMIN"],
          },
          {
            title: "Total Used Questions",
            icon: "eye-2-line",
            count: this.dashboardData.questionsModerationCard?.totalUsed ?? 0,
            roles: ["ADMIN", "AUTHOR", "MODERATOR", "EXAMINER", "GROUP_ADMIN"],
          },
        ];

        this.totalUsersCount = value.usersCard && value.usersCard.totalUsers;

        this.userChartOptions = {
          series: [
            value.usersCard && value.usersCard.totalActiveUsers,
            value.usersCard && value.usersCard.totalInActiveUsers,
          ],
          labels: ["Active Users", "Inactive Users"],
          chart: {
            type: "donut",
            height: 350,
          },
          dataLabels: {
            enabled: false, // Removes percentages inside slices
          },
          plotOptions: {
            pie: {
              donut: {
                size: "75%", // Manages thickness
              },
            },
          },
          legend: {
            position: "bottom",
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: { width: 300 },
                legend: { position: "bottom" },
              },
            },
          ],
        };

        this.isUserChartLoaded = true;
      },
      (error: HttpErrorResponse) => {
        this.isLoadingQuestionsOverview = false;
        this.notifierService.notify("error", `${error.error?.message}`);
      },
    );

    this.generateCalendarGrid();
  }

  fetchDashboardData() {
    if (
      this.currentUser.authorities.includes("ADMIN") ||
      this.currentUser.authorities.includes("PROCTOR_ADMIN") ||
      this.currentUser.authorities.includes("MONITOR") ||
      this.currentUser.authorities.includes("EXAMINER") ||
      this.currentUser.authorities.includes("GROUP_ADMIN")
    ) {
      this.fetchExamsForTheDay();
      this.fetchAIInfractions();
      this.fetchExamCalendar();
    }

    if (
      this.currentUser.authorities.includes("ADMIN") ||
      this.currentUser.authorities.includes("PROCTOR_ADMIN") ||
      this.currentUser.authorities.includes("EXAMINER") ||
      this.currentUser.authorities.includes("GROUP_ADMIN")
    ) {
      this.fetchUpcomingExams();
    }
  }

  clearExamForTheDayFilter(): void {
    this.selectedExamForTheDayDeliveryMethod = "";
    this.examForTheDayPaginationSize = 20;
    this.examForTheDayPaginationPage = 1;
    this.fetchExamsForTheDay();
  }

  applyExamForTheDayFilter(): void {
    this.examForTheDayPaginationSize = 20;
    this.examForTheDayPaginationPage = 1;
    this.fetchExamsForTheDay();
  }

  clearAIInfractionFilter(): void {
    this.selectedInfractionDeliveryMethod = "";
    this.fetchAIInfractions();
  }

  applyAIInfractionFilter(): void {
    this.fetchAIInfractions();
  }

  onInfractionDeliveryMethodChange(): void {
    this.fetchAIInfractions();
  }

  // Upcoming Exams Filter Handlers

  applyUpcomingExamsFilter(): void {
    this.upcomingExamsPaginationSize = 20;
    this.upcomingExamsPaginationPage = 1;
    this.fetchUpcomingExams();
  }

  clearUpcomingExamsFilter(): void {
    this.upcomingExamsPaginationSize = 20;
    this.upcomingExamsPaginationPage = 1;

    if (this.currentUser.authorities.includes("PROCTOR_ADMIN")) {
      this.selectedUpcomingExamDeliveryMethod = "LIVE_PROCTORING";
    } else {
      this.selectedUpcomingExamDeliveryMethod = "";
    }

    this.selectedUpcomingExamStatus = "";
    this.upcomingExamsStartDateFromStr = "";
    this.upcomingExamsStartDateToStr = "";
    this.upcomingExamsEndDateFromStr = "";
    this.upcomingExamsEndDateToStr = "";

    this.fetchUpcomingExams();
  }

  applyExamsCalendarFilter(): void {
    this.fetchExamCalendar();
  }

  clearExamCalendarFilter(): void {
    if (this.currentUser.authorities.includes("PROCTOR_ADMIN")) {
      this.selectedExamCalendarDeliveryMethod = "LIVE_PROCTORING";
    } else {
      this.selectedExamCalendarDeliveryMethod = "";
    }

    console.log('MONTH: ', this.calendarMonth);
    console.log('YEAR: ', this.calendarYear);

    this.fetchExamCalendar();
  }

  onUpcomingExamsStartDateToChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.upcomingExamsStartDateToStr = input.value;

    // this.triggerUpcomingExamsRangeQuery();
  }

  onUpcomingExamsEndDateToChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.upcomingExamsEndDateToStr = input.value;
  }

  onUpcomingExamsStartDateFromChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.upcomingExamsStartDateFromStr = input.value;

    // Optional: If the start date passes the end date, automatically bump the end date forward
    if (this.upcomingExamsStartDateFromStr > this.upcomingExamsStartDateToStr) {
      this.upcomingExamsStartDateToStr = this.upcomingExamsStartDateFromStr;
    }

    // this.triggerUpcomingExamsRangeQuery();
  }

  onUpcomingExamsEndDateFromChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.upcomingExamsEndDateFromStr = input.value;

    // Optional: If the start date passes the end date, automatically bump the end date forward
    if (this.upcomingExamsEndDateFromStr > this.upcomingExamsEndDateToStr) {
      this.upcomingExamsEndDateToStr = this.upcomingExamsEndDateFromStr;
    }
  }

  // private triggerUpcomingExamsRangeQuery(): void {
  //   if (
  //     this.upcomingExamsStartDateFromStr &&
  //     this.upcomingExamsStartDateToStr
  //   ) {
  //     console.log(
  //       `Fetching data from ${this.upcomingExamsStartDateFromStr} to ${this.upcomingExamsStartDateToStr}`,
  //     );
  //     // Your logic to reload data goes here
  //   }
  // }

  // Upcoming Exams Filter Ends Here

  private buildParams(localParams?: any): any {
    const params = { ...localParams };

    console.log("BUILD PARAMS: ", params);
    return params;
  }

  // private buildParamsForUpcomingExams(localParams: any = {}): any {
  //   const params = { ...localParams };

  //   if (this.selectedUpcomingExamDeliveryMethod) {
  //     params["delivery_method"] = this.selectedUpcomingExamDeliveryMethod;
  //   }

  //   if (this.selectedUpcomingExamStatus) {
  //     params["exam_status"] = this.selectedUpcomingExamStatus;
  //   }

  //   if (this.upcomingExamsStartDateFromStr) {
  //     params["start_date_from"] = this.upcomingExamsStartDateFromStr;
  //   }

  //   if (this.upcomingExamsStartDateToStr) {
  //     params["start_date_to"] = this.upcomingExamsStartDateToStr;
  //   }

  //   if (this.upcomingExamsEndDateFromStr) {
  //     params["end_date_from"] = this.upcomingExamsEndDateFromStr;
  //   }

  //   if (this.upcomingExamsEndDateToStr) {
  //     params["end_date_to"] = this.upcomingExamsEndDateToStr;
  //   }

  //   console.log("BUILD PARAMS: ", params);
  //   return params;
  // }

  // private buildParamsForAIInfraction(localParams: any = {}): any {
  //   const params = { ...localParams };
  //   if (this.selectedInfractionDeliveryMethod) {
  //     params["delivery_method"] = this.selectedInfractionDeliveryMethod;
  //   }

  //   console.log("BUILD PARAMS: ", params);
  //   return params;
  // }

  fetchExamsForTheDay() {
    this.isLoadingexamsForTheDay = true;

    const params: any = {
      page: this.examForTheDayPaginationPage,
      size: this.examForTheDayPaginationSize,
    };

    if (this.selectedExamForTheDayDeliveryMethod) {
      params["delivery_method"] = this.selectedExamForTheDayDeliveryMethod;
    }

    this.dashboardService
      .fetchExamsForTheDay(this.buildParams(params))
      .subscribe({
        next: (res) => {
          this.examsForTheDay = res;
          this.isLoadingexamsForTheDay = false;
        },
        error: (error: HttpErrorResponse) => {
          this.isLoadingexamsForTheDay = false;
        },
      });
  }

  fetchUpcomingExams() {
    const params: any = {
      page: this.upcomingExamsPaginationPage,
      size: this.upcomingExamsPaginationSize,
    };

    if (this.selectedUpcomingExamStatus)
      params["exam_status"] = this.selectedUpcomingExamStatus;

    if (this.selectedUpcomingExamDeliveryMethod) {
      params["delivery_method"] = this.selectedUpcomingExamDeliveryMethod;
    }

    if (this.selectedUpcomingExamStatus) {
      params["exam_status"] = this.selectedUpcomingExamStatus;
    }

    if (this.upcomingExamsStartDateFromStr) {
      params["start_date_from"] = this.upcomingExamsStartDateFromStr;
    }

    if (this.upcomingExamsStartDateToStr) {
      params["start_date_to"] = this.upcomingExamsStartDateToStr;
    }

    if (this.upcomingExamsEndDateFromStr) {
      params["end_date_from"] = this.upcomingExamsEndDateFromStr;
    }

    if (this.upcomingExamsEndDateToStr) {
      params["end_date_to"] = this.upcomingExamsEndDateToStr;
    }

    this.dashboardService
      .fetchUpcomingExams(this.buildParams(params))
      .subscribe((res) => {
        this.upcomingExams = res;
        // this.setupUpcomingExamsChart();
      });
  }

  fetchAIInfractions() {
    const params: any = {};

    if (this.selectedInfractionDeliveryMethod) {
      params["delivery_method"] = this.selectedInfractionDeliveryMethod;
    }

    this.dashboardService
      .fetchAIInfractionsForTheDay(this.buildParams(params))
      .subscribe({
        next: (res: AIInfractionSummaryDTO[]) => {
          this.aiInfractions = res;

          var chartLabels: string[] = ["NO_AVAILABLE_RECORD"];
          var chartSeries: number[] = [100];

          if (res.length > 0) {
            chartLabels = res.map((item) => item.infraction_type);
            chartSeries = res.map((item) => item.total_candidates);
          }

          // this.setupAIInfractionsChart();

          console.log("RESPONSE: ", res);

          this.chartOptions = {
            series: chartSeries,
            labels: chartLabels,
            chart: {
              type: "donut",
              height: 350,
            },
            dataLabels: {
              enabled: false,
            },
            plotOptions: {
              pie: {
                donut: {
                  size: "75%", // Adjust this percentage value to manage thickness
                },
              },
            },
            legend: {
              position: "bottom",
            },
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: { width: 300 },
                  legend: { position: "bottom" },
                },
              },
            ],
          };

          this.isChartLoaded = true;
        },
        error: (err) => {
          console.error("Failed to load chart data", err);
        },
      });
  }

  fetchExamCalendar() {
    const params = { month: this.calendarMonth, year: this.calendarYear };

    if (this.selectedExamCalendarDeliveryMethod) {
      params["delivery_method"] = this.selectedExamCalendarDeliveryMethod;
    }

    this.dashboardService
      .fetchExamCalendar(this.buildParams(params))
      .subscribe((res) => {
        this.examCalendar = res;
        
        this.generateCalendarGrid();
      });
  }

  generateCalendarGrid() {
    this.calendarDays = [];
    const firstDay = new Date(
      this.calendarYear,
      this.calendarMonth - 1,
      1,
    ).getDay();
    const daysInMonth = new Date(
      this.calendarYear,
      this.calendarMonth,
      0,
    ).getDate();

    // Adjust for Monday start (0 = Monday, 6 = Sunday for our grid)
    let emptyCells = firstDay === 0 ? 6 : firstDay - 1;

    for (let i = 0; i < emptyCells; i++) {
      this.calendarDays.push({ day: null, heatClass: "heat-empty" });
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const currentDateStr = new Date(
        this.calendarYear,
        this.calendarMonth - 1,
        d,
      )
        .toISOString()
        .split("T")[0];

        

      // Find exams falling on this date
      const examsOnDay = this.examCalendar.filter((ex) => {
        const start = new Date(ex.start_date).toISOString().split("T")[0];
        const end = new Date(ex.end_date).toISOString().split("T")[0]; 
        return currentDateStr >= start && currentDateStr <= end;
      });

      let totalCandidates = 0;
      examsOnDay.forEach((e) => (totalCandidates += e.total_candidates));

      let heatClass = "heat-0";
      if (totalCandidates > 0 && totalCandidates <= 50) heatClass = "heat-1";
      else if (totalCandidates > 50 && totalCandidates <= 200)
        heatClass = "heat-2";
      else if (totalCandidates > 200 && totalCandidates <= 500)
        heatClass = "heat-3";
      else if (totalCandidates > 500) heatClass = "heat-4";

      this.calendarDays.push({
        day: d,
        dateStr: currentDateStr,
        exams: examsOnDay,
        heatClass: heatClass,
      });
    }
  }

  getRecordOnCalenderCellBlock(name: any) {
    console.log(name);
  }

  fetchProctorWeekly() {
    const params = { week_start: this.currentWeekStartStr };
    // Proctor weekly ignores delivery method
    this.dashboardService
      .fetchProctorWeeklyCalendar(params)
      .subscribe((res) => {
        this.proctorWeekly = res;
        this.mapAppointmentsToGrid(this.proctorWeekly);
        // this.setupProctorWeeklyChart();
      });
  }

  itemsExamPageChange(event: any) {
    // this.loading_items = true;
    this.examForTheDayPaginationSize = event.rows;
    this.examForTheDayPaginationPage = event.page + 1;

    // this.fetchDashboardData();
    this.fetchExamsForTheDay();
  }

  //pagination for "Upcoming Exams"
  itemsUpcomingExamPageChange(event: any) {
    this.upcomingExamsPaginationSize = event.rows;
    this.upcomingExamsPaginationPage = event.page + 1;

    this.fetchUpcomingExams();
  }

  // Core synchronization method
  setWeekState(baseDate: Date) {
    // Calculate the real Monday for the given date tracking reference
    const target = new Date(baseDate);
    const day = target.getDay();
    const diff = target.getDate() - day + (day === 0 ? -6 : 1);

    this.currentMondayDate = new Date(target.setDate(diff));
    this.currentMondayDate.setHours(0, 0, 0, 0);

    // Format as YYYY-MM-DD for UI and API query structures
    this.currentWeekStartStr = this.currentMondayDate
      .toISOString()
      .split("T")[0];

    // Rebuild the 7 column grid tracking targets (Monday - Sunday)
    this.weekDays = [];
    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(this.currentMondayDate);
      nextDay.setDate(this.currentMondayDate.getDate() + i);
      this.weekDays.push(nextDay);
    }

    // Hit the server passing the target Monday date parameter directly
    this.fetchProctorWeekly();
  }

  // Generates standard hourly slots (e.g., 08:00 to 17:00)
  generateTimeSlots() {
    for (let hour = 8; hour <= 17; hour++) {
      this.timeSlots.push(`${hour.toString().padStart(2, "0")}:00`);
    }
  }

  // Filter exams that belong to a specific day and start hour
  getExamsForSlot(day: Date, timeSlot: string): ProctorWeeklyCalendarDTO[] {
    // Format the calendar cell day to target UTC signature
    const year = day.getFullYear();
    const month = String(day.getMonth() + 1).padStart(2, "0");
    const dateNum = String(day.getDate()).padStart(2, "0");
    const hour = timeSlot.split(":")[0]; // e.g., "08"

    const lookupKey = `${year}-${month}-${dateNum}_${hour}`;

    // Instant retrieval with no heavy array looping or performance hits
    return this.examLookupMap[lookupKey] || [];
  }

  mapAppointmentsToGrid(appointments: ProctorWeeklyCalendarDTO[]) {
    this.examLookupMap = {};
    appointments.forEach((exam) => {
      const dateObj = new Date(exam.batch_start_time);

      // Extract exact UTC string properties to bypass browser timezone shifting
      const year = dateObj.getUTCFullYear();
      const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
      const day = String(dateObj.getUTCDate()).padStart(2, "0");
      const hour = String(dateObj.getUTCHours()).padStart(2, "0");

      const mapKey = `${year}-${month}-${day}_${hour}`;

      if (!this.examLookupMap[mapKey]) {
        this.examLookupMap[mapKey] = [];
      }
      this.examLookupMap[mapKey].push(exam);
    });
  }

  // Next/Prev stepping execution track
  navigateWeek(direction: number) {
    // Jump exactly +/- 7 days from our currently active tracked Monday
    const newTargetDate = new Date(this.currentMondayDate);
    newTargetDate.setDate(newTargetDate.getDate() + direction * 7);
    this.setWeekState(newTargetDate);
  }

  jumpToCurrentWeek() {
    this.setWeekState(new Date());
  }

  onDateDropdownChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.value) {
      // Create explicit UTC date instance from input string
      this.setWeekState(new Date(target.value + "T00:00:00Z"));
    }
  }
}
