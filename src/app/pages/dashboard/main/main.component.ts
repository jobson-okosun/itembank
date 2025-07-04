import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/authentication/model/account.model';
import { UserService } from 'src/app/shared/user.service';
import { DashboardService } from '../dashboard.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { DashboardCards } from '../model/dashboard-cards';
import { TagsGraph } from '../model/tags-graph';
import { PassageGraph } from '../model/passage-graph';
import { ItemHttpService } from '../../items/item-http.service';
import { DashboardComponent } from '../../manuals/dashboard/dashboard.component';
import { NotificationsService } from 'src/app/shared/notifications.service';
import Swal from 'sweetalert2';

export interface CardDetails {
  title: string;
  count: number;
  icon: string;
  roles?: string[];
}

interface ModeratorGraph {
  totalAwaitingModeration: number;
  totalApproved: number;
  totalDrafts: number;
  totalRejected: number;
  totalPublished: number;
}

interface AuthoringGraph {
  totalQuestions: number;
  totalPassages: number;
  totalInRecycle: number;
  totalDrafts: number;
  totalRejected: number;
  totalPublished: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  dashboardData: DashboardCards;
  rowOne: CardDetails[] = [];
  currentUser: Account;
  simpleDonutChart: any;
  authorLineChart: any;
  basicLineChart: any;
  basicAreaChart: any;
  simplePieChart: any;
  assessmentChart: any;
  TagsColumnChart: any;
  tagsGraph: TagsGraph[] = [];
  passageGraph: PassageGraph;
  passageGraphtags: number[] = [];
  passageChartLabels: string[] = [];
  authoringGraph: AuthoringGraph;
  authorGraph: number[] = [];
  moderationGraph: ModeratorGraph;
  moderatorGraph: number[] = [];
  activeTagGraph: TagsGraph;
  tagChartValue: number[] = [];
  assessmentGraph: any[] = [];
  tagSeries: any[] = [];
  tagNames: string[] = [];
  authorChartLabels: string[] = [
    'Total Questions',
    'Total Published',
    'Total Passages',
    'Total Drafts',
    'Total Recycling',
    'Total Awaiting Moderation',
    'Total Questions Used',
  ];
  loading: boolean = false;

  quickGuide = `<div class="p-4">
  <h6 class="mb-2 fw-bold text-uppercase">Introduction</h6>
  <p class="text-muted mb-4">
    The dashboard is designed to offer a comprehensive overview of performance, 
    using data visualization tools like charts and graphs. 
  </p>
  <h6 class="mb-2 fw-bold text-uppercase">QUESTION ANALYSIS OVERVIEW</h6>
  <p>There are a total of 10 cards displayed on the dashboard: Each card gives the user a brief overview of the status of the bank
    at a glance.<br/>
  </p>
  <div class="row">
    <div class="col-12">
      <img
        src="assets/images/snapshots/dashboard/total_subjects.png"
        alt=""
        height="200"
        width="50%"
      />
      <h6 class="mb-2 fw-bold text-uppercase">TOTAL SUBJECTS</h6>
      <p>This card displays the total number of subjects created. From the image above, 
      it is shown that the total created subjects are 39.</p>
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <img
        src="assets/images/snapshots/dashboard/total_questions.png"
        alt=""
        height="200"
        width="50%"
      />
      <h6 class="mb-2 fw-bold text-uppercase">TOTAL QUESTIONS</h6>
      <p>This card displays the total number of questions in the bank across all subjects. From the image above, 
      it is shown that there are a total of 2612 questions in the bank.</p>
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <img
        src="assets/images/snapshots/dashboard/total_passages.png"
        alt=""
        height="200"
        width="50%"
      />
      <h6 class="mb-2 fw-bold text-uppercase">TOTAL PASSAGES</h6>
      <p>This card displays the total number of passages in the bank across all subjects. From the image above, 
      it is shown that there are a total of 48 passages in the bank.</p>
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <img
        src="assets/images/snapshots/dashboard/total_in_recycle.png"
        alt=""
        height="200"
        width="70%"
      />
      <h6 class="mb-2 fw-bold text-uppercase">TOTAL QUESTIONS IN-RECYCLE</h6>
      <p>This card displays the total number of questions that has been used in an examination and is currently being recycled, 
        i.e any question being recycled would not be available for use within an examination until the specified period.
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <img
        src="assets/images/snapshots/dashboard/total_published.png"
        alt=""
        height="200"
        width="70%"
      />
      <h6 class="mb-2 fw-bold text-uppercase">TOTAL PUBLISHED QUESTION</h6>
      <p>This card displays the total number of questions that has been published across all subjects,
        only published questions can be used in the creation of an examination. From the image above, 
        it is shown that there are 2240 total published questions.
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <img
        src="assets/images/snapshots/dashboard/awaiting_moderation.png"
        alt=""
        height="200"
        width="50%"
      />
      <h6 class="mb-2 fw-bold text-uppercase">AWAITING MODERATION</h6>
      <p>This card displays the total number of questions that has not been published,
        until the question has been approved it cannot be used in creating an examination</p>
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <img
        src="assets/images/snapshots/dashboard/total_approved.png"
        alt=""
        height="200"
        width="50%"
      />
      <h6 class="mb-2 fw-bold text-uppercase">TOTAL APPROVED QUESTIONS</h6>
      <p>This card displays the total number of questions in the question bank that has been approved by a moderator.</p>
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <img
        src="assets/images/snapshots/dashboard/total_draft.png"
        alt=""
        height="200"
        width="50%"
      />
      <h6 class="mb-2 fw-bold text-uppercase">TOTAL DRAFT QUESTIONS</h6>
      <p>This card displays the total number of questions in the bank that has been saved to draft.</p>
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <img
        src="assets/images/snapshots/dashboard/total_rejected.png"
        alt=""
        height="200"
        width="50%"
      />
      <h6 class="mb-2 fw-bold text-uppercase">TOTAL REJECTED QUESTIONS</h6>
      <p>This card displays the total number of questions in the bank that has been rejected by a moderator..</p>
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <img
        src="assets/images/snapshots/dashboard/total_used.png"
        alt=""
        height="200"
        width="50%"
      />
      <h6 class="mb-2 fw-bold text-uppercase">TOTAL QUESTIONS USED</h6>
      <p>This card displays the total number of questions in the bank that has been used for exam. 
      From the image above, its shown that 142 questions have been used.</p>
    </div>
  </div>


</div>`;

  constructor(
    private userService: UserService,
    private dashboardService: DashboardService,
    private notifierService: NotifierService,
    private itemService: ItemHttpService,
    private notificationService: NotificationsService,
    private notifier: NotifierService
  ) {}

  /** Handler function for quick guide glide in/pop out */
  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
    const rightBar = document.getElementById('theme-settings-offcanvas');
    if (rightBar != null) {
      rightBar.classList.toggle('show');
      rightBar.setAttribute('style', 'visibility: visible;');
    }
  }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    // this.currentUser = this.userService.getCurrentUser()
    //   ? this.userService.getCurrentUser()
    //   : this.userService.getCurrentUserAfterReload();

    this.breadCrumbItems = [{ label: 'dashboard', active: true }];
    if (
      this.currentUser.authorities.includes('ADMIN') ||
      this.currentUser.authorities.includes('MODERATOR')
    ) {
      this.authorChartLabels.push('Total Approved Questions');
      this.authorChartLabels.push('Total Rejected Questions');
    }

    this.dashboardService.fetchDashboardData().subscribe(
      (value) => {
        this.dashboardData = value;
        this.moderationGraph = this.dashboardData.questionModerationGraph;
        this.authoringGraph = this.dashboardData.questionModerationGraph;
        this.passageGraph = this.dashboardData.passageDashboardProj;
        this.tagsGraph = this.dashboardData.tagGraphProj;
        if (this.currentUser.authorities.includes('AUTHOR')) {
          this.setAuthorGraph();
          this.setupPassageGraph();
          if (this.tagsGraph.length > 0) {
            this.setupTagsGraph();
          }
        }

        if (this.currentUser.authorities.includes('ADMIN')) {
          this.userChart('["--vz-success", "--vz-danger"]');
          this.setAuthorGraph();
          this.setupTagsGraph();
          this.setupPassageGraph();
          this.setupModeratorGraph();
          this.setupAssessmentChart();
        }

        if (this.currentUser.authorities.includes('MODERATOR')) {
          this.setupModeratorGraph();
          this.setupPassageGraph();
          this.setupTagsGraph();
          this.setAuthorGraph();
        }
        if (this.currentUser.authorities.includes('EXAMINER')) {
          this.setupAssessmentChart();
          this.setupPassageGraph();
          this.setupTagsGraph();
        }

        this.rowOne = [
          {
            title: 'Total Subjects',
            icon: 'folder-line',
            count: this.dashboardData.questionsModerationCard.totalSubjects,
            roles: ['ADMIN', 'AUTHOR', 'MODERATOR'],
          },
          {
            title: 'Total Questions',
            icon: 'stack-line',
            count: this.dashboardData.questionsModerationCard.totalQuestions,
            roles: ['ADMIN', 'AUTHOR', 'MODERATOR'],
          },
          {
            title: 'Total Passages',
            icon: 'article-line',
            count: this.dashboardData.questionsModerationCard.totalPassages,
            roles: ['ADMIN', 'AUTHOR', 'MODERATOR'],
          },
          {
            title: 'Total Questions In-recycle',
            icon: 'recycle-line',
            count: this.dashboardData.questionsModerationCard.totalInRecycle,
            roles: ['ADMIN', 'EXAMINER'],
          },
          {
            title: 'Total Published Questions',
            icon: 'upload-cloud-2-line',
            count: this.dashboardData.questionsModerationCard.totalPublished,
            roles: ['ADMIN', 'AUTHOR', 'MODERATOR', 'EXAMINER'],
          },
          {
            title: 'Awaiting Moderation',
            icon: 'arrow-left-right-line',
            count:
              this.dashboardData.questionsModerationCard
                .totalAwaitingModeration,
            roles: ['ADMIN', 'MODERATOR', 'EXAMINER'],
          },
          {
            title: 'Total Approved Questions',
            icon: 'check-double-line',
            count: this.dashboardData.questionsModerationCard.totalApproved,
            roles: ['ADMIN', 'AUTHOR', 'MODERATOR', 'EXAMINER'],
          },
          {
            title: 'Total Draft Questions',
            icon: 'draft-line',
            count: this.dashboardData.questionsModerationCard.totalDrafts,
            roles: ['ADMIN', 'AUTHOR', 'EXAMINER'],
          },
          {
            title: 'Total Rejected Questions',
            icon: 'feedback-line',
            count: this.dashboardData.questionsModerationCard.totalRejected,
            roles: ['ADMIN', 'AUTHOR', 'MODERATOR', 'EXAMINER'],
          },
          {
            title: 'Total Used Questions',
            icon: 'eye-2-line',
            count: this.dashboardData.questionsModerationCard.totalUsed,
            roles: ['ADMIN', 'AUTHOR', 'MODERATOR', 'EXAMINER'],
          },
        ];
      },
      (error: HttpErrorResponse) => {
        this.notifierService.notify('error', `${error.error.message}`);
      }
    );
  }

  setAuthorGraph() {
    this.authorGraph = [];
    if (this.dashboardData) {
      Object.keys(this.authoringGraph).forEach((key, index) => {
        if (key === 'totalQuestions') {
          this.authorGraph[0] = Object.values(this.authoringGraph)[index];
        } else if (key === 'totalPublished') {
          this.authorGraph[1] = Object.values(this.authoringGraph)[index];
        } else if (key === 'totalPassages') {
          this.authorGraph[2] = Object.values(this.authoringGraph)[index];
        } else if (key === 'totalDrafts') {
          this.authorGraph[3] = Object.values(this.authoringGraph)[index];
        } else if (key === 'totalInRecycle') {
          this.authorGraph[4] = Object.values(this.authoringGraph)[index];
        } else if (key === 'totalAwaitingModeration') {
          this.authorGraph[5] = Object.values(this.authoringGraph)[index];
        } else if (key === 'totalUsed') {
          this.authorGraph[6] = Object.values(this.authoringGraph)[index];
        } else if (
          (this.currentUser.authorities.includes('MODERATOR') ||
            this.currentUser.authorities.includes('ADMIN')) &&
          key === 'totalApproved'
        ) {
          this.authorGraph[7] = Object.values(this.authoringGraph)[index];
        } else if (
          (this.currentUser.authorities.includes('MODERATOR') ||
            this.currentUser.authorities.includes('ADMIN')) &&
          key === 'totalRejected'
        ) {
          this.authorGraph[8] = Object.values(this.authoringGraph)[index];
        }
      });
    }
    this.authorChart('["--vz-primary", "--vz-success"]');
  }

  setupModeratorGraph() {
    this.moderatorGraph = [];
    if (this.dashboardData) {
      Object.keys(this.moderationGraph).forEach((key, index) => {
        if (key === 'totalApproved') {
          this.moderatorGraph[0] = Object.values(this.moderationGraph)[index];
        } else if (key === 'totalRejected') {
          this.moderatorGraph[1] = Object.values(this.moderationGraph)[index];
        } /* else if (key === 'totalDrafts') {
          this.moderatorGraph[2] = Object.values(this.moderationGraph)[index];
        } else if (key === 'totalPublished') {
          this.moderatorGraph[3] = Object.values(this.moderationGraph)[index];
        } */ else if (key === 'totalAwaitingModeration') {
          this.moderatorGraph[2] = Object.values(this.moderationGraph)[index];
        }
      });
    }
    this.moderatorChart('["--vz-primary"]');
  }

  setupPassageGraph() {
    this.passageGraphtags = [];
    if (this.dashboardData) {
      Object.keys(this.passageGraph).forEach((key, i) => {
        if (key === 'totalPassageItems') {
          this.passageGraphtags[0] = Object.values(this.passageGraph)[i];
        } else if (key === 'totalPassageItemsPublished') {
          this.passageGraphtags[1] = Object.values(this.passageGraph)[i];
        } else if (key === 'totalPassageItemsDraft') {
          this.passageGraphtags[2] = Object.values(this.passageGraph)[i];
        } else if (key === 'totalPassageItemsInRecycle') {
          this.passageGraphtags[3] = Object.values(this.passageGraph)[i];
        } else if (key === 'totalPassageItemsAwaitingModeration') {
          this.passageGraphtags[4] = Object.values(this.passageGraph)[i];
        }
      });
    }
    this.passageChart('["--vz-primary"]');
  }

  setupTagsGraph() {
    //this.tagChartValue = [];
    let tagSeries: any = [];
    this.tagsGraph.forEach((tag, i) => {
      let currentTag = {
        name: tag.tagName,
        data: this.extractTagValues(tag),
      };

      //tagSeries.push(currentTag);
      tagSeries.push(this.extractTagValues(tag));
      this.tagNames.push(tag.tagName);
    });

    this.tagSeries = tagSeries;

    let totalInRecycleArray: any[] = [];
    let totalQuestionsArray: any[] = [];
    let totalPublishedArray: any[] = [];
    let totalDraftArray: any[] = [];
    let totalModerationArray: any[] = [];
    let totalUsedArray: any[] = [];

    this.tagSeries.forEach((tag) => {
      for (let i = 0; i < tag.length; i++) {
        if (i == 0) {
          totalQuestionsArray.push(tag[i]);
        } else if (i == 1) {
          totalDraftArray.push(tag[i]);
        } else if (i == 2) {
          totalPublishedArray.push(tag[i]);
        } else if (i == 3) {
          totalModerationArray.push(tag[i]);
        } else if (i == 4) {
          totalInRecycleArray.push(tag[i]);
        } else if (i == 5) {
          totalUsedArray.push(tag[i]);
        }
      }
    });

    this.tagSeries = [];

    for (let k = 0; k < 6; k++) {
      if (k == 0) {
        let currentTag = {
          name: 'Total Questions',
          data: totalQuestionsArray,
        };
        this.tagSeries.push(currentTag);
      } else if (k == 1) {
        let currentTag = {
          name: 'Total Drafts',
          data: totalDraftArray,
        };
        this.tagSeries.push(currentTag);
      } else if (k == 2) {
        let currentTag = {
          name: 'Total Published',
          data: totalPublishedArray,
        };
        this.tagSeries.push(currentTag);
      } else if (k == 3) {
        let currentTag = {
          name: 'Total Moderation',
          data: totalModerationArray,
        };
        this.tagSeries.push(currentTag);
      } else if (k == 4) {
        let currentTag = {
          name: 'Total In-Recycle',
          data: totalInRecycleArray,
        };
        this.tagSeries.push(currentTag);
      } else if (k == 5) {
        let currentTag = {
          name: 'Total Used Questions',
          data: totalUsedArray,
        };
        this.tagSeries.push(currentTag);
      }
    }

    this.tagsChart(
      '["--vz-primary", "--vz-warning", "--vz-success", "--vz-info", "--vz-danger", "--vz-secondary"]'
    );
  }

  extractTagValues(tag: any) {
    let result: any = [];
    Object.keys(tag).forEach((key, i) => {
      if (key === 'totalItems') {
        result[0] = Object.values(tag)[i];
      } else if (key === 'totalDrafts') {
        result[1] = Object.values(tag)[i];
      } else if (key === 'totalPublished') {
        result[2] = Object.values(tag)[i];
      } else if (key === 'totalAwaitingModeration') {
        result[3] = Object.values(tag)[i];
      } else if (key === 'totalInRecycle') {
        result[4] = Object.values(tag)[i];
      } else if (key === 'totalUsed') {
        result[5] = Object.values(tag)[i];
      }
    });

    return result;
  }

  setupAssessmentChart() {
    Object.keys(this.dashboardData.assessmentCard).forEach((key, i) => {
      if (key === 'totalAssessments') {
        this.assessmentGraph[0] = Object.values(
          this.dashboardData.assessmentCard
        )[i];
      } else if (key === 'totalDrafts') {
        this.assessmentGraph[1] = Object.values(
          this.dashboardData.assessmentCard
        )[i];
      } else if (key === 'totalPublished') {
        this.assessmentGraph[2] = Object.values(
          this.dashboardData.assessmentCard
        )[i];
      }
    });
    this._assessmentChart('["--vz-primary"]');
  }

  updateSubjectGraphForAuthor(subjectId: any) {
    this.loading = true;
    this.loader();
    this.dashboardService
      .fetchGraphInformationForSingleSubject(subjectId)
      .subscribe(
        (value) => {
          if (value) {
            this.authoringGraph = value;
            this.setAuthorGraph();
            this.loading = false;
            Swal.close();
          }
          // this.loading = false;
          // Swal.close();
        },
        (error: HttpErrorResponse) => {
          this.loading = false;
          Swal.close();
          this.notifierService.notify('error', `${error.error.message}`);
        }
      );
  }

  updateSubjectGraphForModerator(subjectId: any) {
    this.loading = true;
    this.loader();
    this.dashboardService
      .fetchGraphInformationForSingleSubject(subjectId)
      .subscribe(
        (value) => {
          if (value) {
            this.moderationGraph = value;
            this.setupModeratorGraph();
          }
          this.moderatorChart('["--vz-primary"]');
          this.loading = false;
          Swal.close();
        },
        (error: HttpErrorResponse) => {
          this.loading = false;
          Swal.close();
          this.notifierService.notify('error', `${error.error.message}`);
        }
      );
  }

  updatePassageGraph(subjectId: string) {
    this.loading = true;
    this.loader();
    this.dashboardService.fetchPassageGraph(subjectId).subscribe(
      (value) => {
        this.passageGraph = value;
        this.setupPassageGraph();
        this.loading = false;
        Swal.close();
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        Swal.close();
        this.notifierService.notify('error', `${error.error.message}`);
      }
    );
  }

  updateTagsChart(index: string) {
    //this.activeTagGraph = this.tagsGraph[index];
    this.setupTagsGraph();
    this.tagsChart(
      '["--vz-primary", "--vz-success", "--vz-warning", "--vz-info"]'
    );
    this.loading = false;
    Swal.close();
  }

  updateSubjectForTagsGraph(subjectId: string) {
    this.loading = true;
    this.loader();
    this.tagNames = [];
    this.dashboardService.fetchTagsGraph(subjectId).subscribe(
      (value) => {
        this.tagsGraph = value;
        this.setupTagsGraph();
        this.loading = false;
        Swal.close();
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        Swal.close();
        this.notifier.notify('error', `${error.error.message}`);
      }
    );
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

  private authorChart(colors: any) {
    colors = this.getChartColorsArray(colors);

    this.authorLineChart = {
      labels: this.authorChartLabels,
      datasets: [
        {
          //label: 'Questions Analysis',
          backgroundColor: colors[0],
          borderColor: colors[0],
          borderWidth: 1,
          hoverBackgroundColor: colors[1],
          hoverBorderColor: colors[1],
          data: this.authorGraph,
        },
      ],
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          xAxes: {
            gridLines: {
              color: 'rgba(166, 176, 207, 0.1)',
            },
          },

          yAxes: {
            gridLines: {
              color: 'rgba(166, 176, 207, 0.1)',
            },
          },
        },
      },
    };
  }

  private passageChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.basicAreaChart = {
      series: [{ data: this.passageGraphtags }],
      chart: {
        toolbar: { show: false },
        type: 'area',
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'straight',
      },
      labels: [
        'All Questions',
        'Published Questions',
        'Draft Questions',
        'Questions In-Recycle',
        'Awaiting Moderation',
      ],
      xaxis: {
        type: 'string',
      },
      yaxis: {
        opposite: false,
      },
      legend: {
        horizontalAlign: 'left',
      },
      colors: colors,
    };
  }

  private moderatorChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.basicLineChart = {
      series: [{ data: this.moderatorGraph }],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      colors: colors,
      title: {
        text: 'Moderation Analysis',
        align: 'left',
        style: {
          fontWeight: 500,
        },
      },
      xaxis: {
        categories: [
          'Total approved',
          'Total rejected',
          /* 'Total drafts',
          'Total published', */
          'Total awaiting_moderation',
        ],
      },
    };
  }

  private userChart(colors: any) {
    colors = this.getChartColorsArray(colors);

    this.simpleDonutChart = {
      series: [
        this.dashboardData.usersCard.totalActiveUsers,
        this.dashboardData.usersCard.totalInActiveUsers,
      ],
      labels: ['Active Users', 'Inactive Users'],
      chart: {
        type: 'donut',
        height: 250,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '76%',
          },
        },
      },
      dataLabels: {
        enabled: true,
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        offsetX: 0,
        offsetY: 0,
        markers: {
          width: 30,
          height: 6,
          radius: 2,
        },
        itemMargin: {
          horizontal: 12,
          vertical: 0,
        },
      },
      stroke: {
        width: 0,
      },
      yaxis: {
        labels: {
          formatter: function (series: any) {
            let labels = series;
            labels.forEach((label) => {
              return label + 'Users';
            });
          },
        },
        tickAmount: 7,
        min: 0,
      },
      colors: colors,
    };
  }

  private _assessmentChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.assessmentChart = {
      series: [{ data: this.assessmentGraph }],
      chart: {
        type: 'bar',
        height: 306,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          borderRadius: 6,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        fontWeight: 400,
        fontSize: '8px',
        offsetX: 0,
        offsetY: 0,
        markers: {
          width: 9,
          height: 9,
          radius: 4,
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      grid: {
        show: false,
      },
      colors: colors,
      xaxis: {
        categories: ['Total Assessments', 'Total Drafts', 'Total Published'],
        axisTicks: {
          show: false,
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val;
          },
        },
        title: {
          formatter: function (seriesName) {
            return '';
          },
        },
      },
    };
  }

  private tagsChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.TagsColumnChart = {
      series: this.tagSeries,
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breaktag: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
        },
      },
      xaxis: {
        type: 'string',
        categories: this.tagNames,
      },
      legend: {
        position: 'right',
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
      colors: colors,
    };
  }

  loader(msg?: string) {
    Swal.fire({
      title: msg ? msg : 'Loading data, Please Wait...',
      allowEnterKey: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }
}
