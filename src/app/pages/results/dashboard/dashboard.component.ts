import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from '../../assessment/service/assessments.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  assessmentId: string;
  participantId: string = '0019872FE';
  assessmentName: string;
  DoughnutChart: any;
  PieChart: any;
  participants: any[] = [];
  currentPerformanceGraph: string = 'Average Score';
  scoreDistributionChart: any;
  timeScoreChart: any;
  questionAnalysisChart: any;
  breadCrumbItems!: Array<{}>;
  sections: any[] = [];
  questionsCount: number = 150;
  questions: string[] = [];
  failed: number[] = [];
  passed: number[] = [];
  grade: any[] = [];

  constructor(
    private readonly assessmentService: AssessmentsService,
    private readonly ar: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.assessmentId = this.ar.snapshot.params['assessmentId'];
    this.assessmentName = this.assessmentService.activeAssessment;
    this.breadCrumbItems = [
      { label: 'reports', active: false },
      { label: this.assessmentName, active: false },
      { label: 'result', active: true },
    ];
    for (let i = 1; i <= this.questionsCount; i++) {
      this.questions.push(`Q${i}`);
      if (i % 2 == 0) {
        this.grade.push({ pass: i, fail: (i / 2).toFixed(0) });
        this.passed.push(i);
        this.failed.push(i + 1);
      }
      if (i % 2 != 0) {
        this.grade.push({ pass: (i / 2).toFixed(0), fail: i });
        this.failed.push(i);
        this.passed.push(i + 1);
      }
    }

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
    this.sections = [
      'section 1',
      'section 2',
      'section 3',
      'section 4',
      'section 5',
      'section 6',
      'section 7',
      'section 8',
    ];
    this._DoughnutChart(
      '["--vz-primary", "--vz-primary-rgb, 0.80", "--vz-primary-rgb, 0.70", "--vz-primary-rgb, 0.60", "--vz-primary-rgb, 0.45"]'
    );
    this._PieChart(
      '["--vz-primary", "--vz-success", "--vz-warning", "--vz-gray-300", "--vz-info"]'
    );
    this._scoreDistributionChart('["--vz-success"]');
    this._timeScoreChart('["--vz-warning"]');
    this._questionAnalysisChart('["--vz-danger", "--vz-success"]');
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

  private _DoughnutChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.DoughnutChart = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
        textStyle: {
          //The style of the legend text
          color: '#858d98',
        },
      },
      color: colors,
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '16',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 1048,
              name: 'Search Engine',
            },
            {
              value: 735,
              name: 'Direct',
            },
            {
              value: 580,
              name: 'Email',
            },
            {
              value: 484,
              name: 'Union Ads',
            },
            {
              value: 300,
              name: 'Video Ads',
            },
          ],
        },
      ],
      textStyle: {
        fontFamily: 'Poppins, sans-serif',
      },
    };
  }

  private _PieChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.PieChart = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        textStyle: {
          //The style of the legend text
          color: '#858d98',
        },
      },
      color: colors,
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            {
              value: 1048,
              name: 'Search Engine',
            },
            {
              value: 735,
              name: 'Direct',
            },
            {
              value: 580,
              name: 'Email',
            },
            {
              value: 484,
              name: 'Union Ads',
            },
            {
              value: 300,
              name: 'Video Ads',
            },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
      textStyle: {
        fontFamily: 'Poppins, sans-serif',
      },
    };
  }

  private _scoreDistributionChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.scoreDistributionChart = {
      series: [
        {
          name: 'Frequency',
          data: [5, 2, 2, 10, 19, 15, 8, 1, 4, 2],
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

  private _timeScoreChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.timeScoreChart = {
      series: [
        {
          name: 'Test-taker score',
          data: [
            [5, 20],
            [10, 22],
            [15, 25],
            [20, 30],
            [25, 40],
            [30, 42],
            [35, 70],
          ],
        },
      ],
      chart: {
        height: 350,
        type: 'scatter',
        zoom: {
          enabled: true,
          type: 'xy',
        },
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        tickAmount: 14,
        labels: {
          formatter: function (val: any) {
            return parseInt(val) + ' mins';
          },
        },
        title: {
          text: 'Time Taken in min',
        },
      },
      yaxis: {
        tickAmount: 5,
        title: { text: 'Overall score in %' },
      },
      colors: colors,
    };
  }

  private _questionAnalysisChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.questionAnalysisChart = {
      series: [
        {
          name: 'Failed',
          data: this.failed,
        },
        {
          name: 'Passed',
          data: this.passed,
        },
      ],
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
          breakpoint: 480,
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
        categories: this.questions,
        title: { text: 'Questions' },
      },
      yaxis: {
        title: {
          text: 'Passed/Failed',
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'bottom',
        offsetY: 40,
      },
      colors: colors,
    };
  }

  changeGraph(currentGraphDisplay: string) {
    this.currentPerformanceGraph = currentGraphDisplay;
  }

  openExamSelectionModal(selectExamModal: any) {
    this.modalService.open(selectExamModal, { centered: true, size: 'md' });
  }
}
