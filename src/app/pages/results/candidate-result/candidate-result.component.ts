import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from '../../assessment/service/assessments.service';

@Component({
  selector: 'app-candidate-result',
  templateUrl: './candidate-result.component.html',
  styleUrls: ['./candidate-result.component.scss'],
})
export class CandidateResultComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  assessmentName: string;
  groupedBarChart: any;
  gradientCircleChart: any;

  constructor(private assessmentService: AssessmentsService) {}

  ngOnInit(): void {
    this.assessmentName = this.assessmentService.activeAssessment;
    this.breadCrumbItems = [
      { label: 'results', active: false },
      { label: 'result', active: true },
    ];

    this._groupedBarChart('["--vz-primary", "--vz-info"]');
    this._gradientCircleChart('["--vz-success"]');
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

  private _groupedBarChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.groupedBarChart = {
      series: [
        {
          data: [60, 40, 40, 40],
          name: 'percentage',
        },
        {
          data: [52, 32, 30, 25],
          name: 'score',
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff'],
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      xaxis: {
        categories: ['Section 1', 'Section 2', 'Section 3', 'Section 4'],
      },
      colors: colors,
    };
  }

  private _gradientCircleChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.gradientCircleChart = {
      series: [75],
      chart: {
        height: 330,
        type: 'radialBar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '70%',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
          },
          track: {
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: '17px',
            },
            value: {
              color: '#111',
              fontSize: '36px',
              show: true,
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: colors,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: 'round',
      },
      labels: ['Percent'],
    };
  }
}
