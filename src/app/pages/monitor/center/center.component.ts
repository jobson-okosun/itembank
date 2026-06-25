import { Component, OnInit } from '@angular/core';
import { MonitorService } from '../services/monitor.service';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {
  DoughnutChart: any;
  notifications = [
    { id: 1, message: 'Rufai Ahmed deedat (20253893444FH) requested a Computer swap due to system freeze.', time: 'June 25, 2026 - 12:15pm', type: 'Computer swap', actionable: true, status: 'pending' },
    { id: 2, message: 'BVM verification succeeded for Sarah Jenkins (20258839221AJ).', time: 'June 25, 2026 - 12:10pm', type: 'BVM verified', actionable: false },
    { id: 3, message: 'Malpractice detected: Multiple faces identified in candidate room for John Doe.', time: 'June 25, 2026 - 11:58am', type: 'Malpractice', actionable: true, status: 'pending' },
    { id: 4, message: 'Network disconnected for candidate Rufai Ahmed deedat.', time: 'June 25, 2026 - 11:45am', type: 'Network disconnected', actionable: false },
    { id: 5, message: 'Compensatory time request: +15 minutes requested by center proctor for David King.', time: 'June 25, 2026 - 11:30am', type: 'Compensatory time', actionable: true, status: 'pending' },
    { id: 6, message: 'Relogin attempt successful for Mary Sani (20253849111AA).', time: 'June 25, 2026 - 11:15am', type: 'Relogin', actionable: false },
    { id: 7, message: 'Candidate Musa Ibrahim has timed out.', time: 'June 25, 2026 - 11:00am', type: 'Timed out', actionable: false },
    { id: 8, message: 'Assessment started for candidate Blessing Udoh.', time: 'June 25, 2026 - 10:45am', type: 'Started', actionable: false },
    { id: 9, message: 'Suspended: Proctor suspended candidate Rufus Thomas due to suspicious objects.', time: 'June 25, 2026 - 10:30am', type: 'Suspended', actionable: true, status: 'pending' },
    { id: 10, message: 'Assessment ended for candidate Rufai Ahmed deedat.', time: 'June 25, 2026 - 10:15am', type: 'Ended', actionable: false },
    { id: 11, message: 'Candidate Chinonso Eke has been rescheduled to tomorrow.', time: 'June 25, 2026 - 10:00am', type: 'Rescheduled', actionable: false },
    { id: 12, message: 'Candidate Paul Smith has not started the exam yet.', time: 'June 25, 2026 - 09:45am', type: 'Not started', actionable: false }
  ];

  filteredNotifications: any[] = [];
  pagedNotifications: any[] = [];
  notifTotalRecords = 0;
  notifFirst = 0;
  notifRows = 4;
  notifSelectedFilter = 'ALL';

  notifFilters = [
    'ALL',
    'Not started',
    'Started',
    'Network disconnected',
    'Compensatory time',
    'Relogin',
    'Computer swap',
    'Suspended',
    'Timed out',
    'Ended',
    'Malpractice',
    'Rescheduled',
    'BVM verified'
  ];

  constructor(private monitorService: MonitorService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this._DoughnutChart();
    this.fetchNotificationsFromBackend();
  }

  goBack() {
    history.back()
  }

  fetchNotificationsFromBackend() {
    const page = this.notifFirst / this.notifRows;
    const params: any = {
      page: page,
      size: this.notifRows
    };
    if (this.notifSelectedFilter !== 'ALL') {
      params.filter = this.notifSelectedFilter;
    }

    this.monitorService.fetchNotifications('10001', params).pipe(
      catchError(err => {
        console.warn('Backend notifications endpoint not found, falling back to mock pagination/filtering');
        let mockList = [...this.notifications];
        if (this.notifSelectedFilter !== 'ALL') {
          mockList = mockList.filter(n => n.type === this.notifSelectedFilter);
        }
        const total = mockList.length;
        const startIndex = this.notifFirst;
        const content = mockList.slice(startIndex, startIndex + this.notifRows);
        return of({
          total: total,
          content: content
        });
      })
    ).subscribe(res => {
      if (res) {
        this.pagedNotifications = res.content || [];
        this.notifTotalRecords = res.total || 0;
      }
    });
  }

  setNotifFilter(filter: string) {
    this.notifSelectedFilter = filter;
    this.notifFirst = 0;
    this.fetchNotificationsFromBackend();
  }

  onNotifPageChange(event: any) {
    this.notifFirst = event.first;
    this.fetchNotificationsFromBackend();
  }



  private getChartColorsArray(colors: any) {
    colors = JSON.parse(colors);

    return colors.map(function (value: any) {
      var newValue = value.replace(" ", "");

      if (newValue.indexOf(",") === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);

        if (color) {
          color = color.replace(" ", "");
          return color;
        } else return newValue;
      } else {
        var val = value.split(",");
        if (val.length == 2) {
          var rgbaColor = getComputedStyle(
            document.documentElement
          ).getPropertyValue(val[0]);
          rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
          return rgbaColor;
        } else {
          return newValue;
        }
      }
    });
  }


  private _DoughnutChart() {
    const c = '["--vz-primary", "--vz-info-rgb, 0.80", "--vz-warning-rgb, 0.70", "--vz-danger-rgb, 0.60", "--vz-success-rgb, 0.45", "#8772f9"]'

    const colors = this.getChartColorsArray(c);

    this.DoughnutChart = {
      tooltip: { trigger: "item" },
      // height: "80%",
      // legend: {
      //   textStyle: { color: "#858d98"},
      //   top: "middle",
      //   usePointStyle: true,
      // },
      color: colors,
      series: [
        {
          type: "pie",
          radius: ["40%", "70%"],
          center: ["50%", "35%"],
          startAngle: 180,
          label: {
            show: false,
            formatter(param) {
              return param.name + " (" + param.percent * 2 + "%)";
            },
          },
          data: [
            {
              value: 10,
              name: "Present",
            },
            {
              value: 20,
              name: "Absent",
            },
            {
              value:
                10 +
                20,
              itemStyle: {
                color: "none",
                decal: {
                  symbol: "none",
                },
              },
              label: {
                show: false,
              },
            },
          ],
        },
      ],
      textStyle: {
        fontFamily: "Poppins, sans-serif",
      },
    };
  }
}
