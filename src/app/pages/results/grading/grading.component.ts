import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssessmentsService } from '../../assessment/service/assessments.service';

@Component({
  selector: 'app-grading',
  templateUrl: './grading.component.html',
  styleUrls: ['./grading.component.scss'],
})
export class GradingComponent implements OnInit {

  assessmentId: string;
  assessmentName: string;
  DoughnutChart: any;
  PieChart: any;
  timeScoreChart: any;
  participants: any[] = [];
  currentPerformanceGraph: string = 'Average Score';
  scoreDistributionChart: any;
  breadCrumbItems!: Array<{}>;
  participantId: string = '0019872FE';

  constructor(
    private readonly assessmentService: AssessmentsService,
    private readonly ar: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'grading', active: false }];
    this.assessmentId = this.ar.snapshot.params['assessmentId'];
    this.assessmentName = this.assessmentService.activeAssessment;
    this.participants = [
      {
        name: 'Okoisor Ochael',
        subject: 'Biology',
        averagePercentage: '89.5',
        score: '100',
        duration: '180 mins',
        startTime: '25 Oct 2022: 11:00AM',
        endTime: '25 Oct 2022: 01:00PM',
        center: '800',
        sectionGroup: 'ENG & MATH',
        attempted: '182',
        infractions: '1',
        markedStatus: 'completed',
      },
      {
        name: 'Paul Cleverly',
        subject: 'English',
        averagePercentage: '54',
        score: '85',
        duration: '180 mins',
        startTime: '25 Oct 2022: 11:00AM',
        endTime: '25 Oct 2022: 01:00PM',
        center: '800',
        sectionGroup: 'ENG & MATH',
        attempted: '182',
        infractions: '1',
        markedStatus: 'umarked',
      },
      {
        name: 'Tom Cruise',
        subject: 'English',
        averagePercentage: '69',
        score: '91',
        duration: '180 mins',
        startTime: '25 Oct 2022: 11:00AM',
        endTime: '25 Oct 2022: 01:00PM',
        center: '703',
        sectionGroup: 'BIO & CHEM',
        attempted: '77',
        infractions: 5,
        markedStatus: 'in progress',
      },
    ];
    this._DoughnutChart(
      '["--vz-primary", "--vz-primary-rgb, 0.80", "--vz-primary-rgb, 0.70", "--vz-primary-rgb, 0.60", "--vz-primary-rgb, 0.45"]'
    );
    this._PieChart(
      '["--vz-primary", "--vz-success", "--vz-warning", "--vz-gray-300", "--vz-info"]'
    );
    this._timeScoreChart('["--vz-warning"]');
    this._scoreDistributionChart('["--vz-success"]');
  }

  gotoGrader() {
    this.router.navigate(['/grading/grader']);
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
        curve: 'straight',
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
          text: 'Scores',
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

  changeGraph(currentGraphDisplay: string) {
    this.currentPerformanceGraph = currentGraphDisplay;
  }
}
