import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {
  DoughnutChart: any;
  technicalIssues = [
    { title: 'BVM', content: 'Content for section 1', open: false },
    { title: 'EXAM SOFTWARE', content: 'Content for section 2', open: false },
    { title: 'EXAM SERVER', content: 'Content for section 3', open: false }
  ];

  constructor() { }

  ngOnInit(): void {
    this._DoughnutChart()
  }

  goBack() {
    history.back()
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
