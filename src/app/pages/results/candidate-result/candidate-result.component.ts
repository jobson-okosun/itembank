import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from '../../assessment/service/assessments.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Participant_Result_Data_DTO } from '../../items/models/result';

@Component({
  selector: 'app-candidate-result',
  templateUrl: './candidate-result.component.html',
  styleUrls: ['./candidate-result.component.scss'],
})
export class CandidateResultComponent implements OnInit {
  participantId: string;
  assessmentId: string;
  assessment: Participant_Result_Data_DTO | null = null;
  barChartSeries: any = null
  pieChartSeries: any = null

  breadCrumbItems!: Array<{}>;
  assessmentName: string;
  gradientCircleChart: any[] = [];
  isLoadingResult: boolean = false;

  constructor(
    private assessmentService: AssessmentsService,
    private readonly activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getResultParams();
    this.fetchResult();
  }

  fetchResult() {
    this.isLoadingResult = true
    this.dataService
      .getCandidateResult(this.assessmentId, this.participantId)
      .subscribe(async (res) => {
        await this.initializeDashboardInformation(res)
      }, () => this.isLoadingResult = false);
  }

  async initializeDashboardInformation(res: Participant_Result_Data_DTO) {
    await this._gradientCircleChart('["--vz-success"]', res)
    this.assessment = res;
    this.initBreadcrumb();
    this.isLoadingResult = false
  }

  getResultParams() {
    this.activatedRoute.paramMap.subscribe((route) => {
      this.participantId = route.get('participantId');
      this.assessmentId = route.get('assessmentId');
    });
  }

  initBreadcrumb() {
    const candidateName = `${this.assessment.reg_fields['FIRST NAME'] ?? ''} ${
      this.assessment.reg_fields['LAST NAME'] ?? ''
    }`;

    this.breadCrumbItems = [
      { label: 'Results', active: false },
      { label: candidateName, active: true },
    ];
  }

  calculateTimeSpent() {
    const durationMinutes = this.assessment.logins_ips
      ? this.assessment.logins_ips?.duration !== null
        ? `${this.assessment.logins_ips?.duration} min(s)`
        : 'N/A'
      : 'N/A';

      return durationMinutes
  }

  getParticipantName () {
      const participantName = `${this.assessment.reg_fields['FIRST NAME']} ${this.assessment.reg_fields['LAST NAME']}`;
      return participantName
  }

  toOrdinal(n: number) {
    const s = ["th", "st", "nd", "rd"], v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
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

  async _gradientCircleChart(colors: any, res: Participant_Result_Data_DTO) {
    colors = this.getChartColorsArray(colors);

    for(const item of res?.attempt_summary) {
      const config = {
        series: [item.section_scaled_score],
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
              margin: 0,
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
      this.gradientCircleChart.push(config)
    }
  }
}
