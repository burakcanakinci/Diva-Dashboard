import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-check-statistics',
  templateUrl: './check-statistics.component.html',
  styleUrls: ['./check-statistics.component.scss']
})
export class CheckStatisticsComponent implements OnInit {

  selectedBarChartData = { c1: [40, 27, 14, 119], c2: [50, 34, 76, 98] }

  barChartInfo = [
    { chartData: this.selectedBarChartData.c1},
    { chartData: this.selectedBarChartData.c2}
  ]
  
  constructor(private common: CommonService) {}

  ngOnInit() {
    this.chartSub();
  }
  chartSub() {
    this.common.currentBarChartVal.subscribe(x => {
      this.selectedBarChartData = x;
      this.barChartInfo[0].chartData = this.selectedBarChartData.c1
      this.barChartInfo[1].chartData = this.selectedBarChartData.c2
    })
  }
}
