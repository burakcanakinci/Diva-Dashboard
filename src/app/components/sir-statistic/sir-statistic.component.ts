import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

interface chart {
  title: string,
  sirsQuant: string | number,
  trendArrow: string,
  chartNumberFirst: any,
  chartNumberSecond: string | number | any,
  chartNumberThird: string | number | any,
  riseIndicatorFirst: string,
  riseIndicatorSecond: string,
  riseIndicatorThird: string,
  chartData: number[]
}

@Component({
  selector: 'app-sir-statistic',
  templateUrl: './sir-statistic.component.html',
  styleUrls: ['./sir-statistic.component.scss']
})

export class SirStatisticComponent implements OnInit {

  selectedChartData = { c1: [2703, 0, 2824], c2: [2480, 0, 2560], c3: [152, 0, 162] };

  chartInfo: chart[] = [
    { title: 'Maschine steht',
      sirsQuant: 3451,
      trendArrow: 'total-sirs-trend__down',
      chartNumberFirst: this.selectedChartData.c1[0],
      chartNumberSecond: this.selectedChartData.c1[1],
      chartNumberThird: this.selectedChartData.c1[2],
      riseIndicatorFirst: 'rise-indicator__down',
      riseIndicatorSecond: 'rise-indicator__flat',
      riseIndicatorThird: 'rise-indicator__down',
      chartData: this.selectedChartData.c1
    },
    { title: 'Maschine läuft bedingt',
      sirsQuant: 3643,
      trendArrow: 'total-sirs-trend__up',
      chartNumberFirst: this.selectedChartData.c2[0],
      chartNumberSecond: this.selectedChartData.c2[1],
      chartNumberThird: this.selectedChartData.c2[2],
      riseIndicatorFirst: 'rise-indicator__up',
      riseIndicatorSecond: 'rise-indicator__flat',
      riseIndicatorThird: 'rise-indicator__down',
      chartData: this.selectedChartData.c2

    },
    { title: 'Sonstige',
      sirsQuant: 195,
      trendArrow: 'total-sirs-trend__up',
      chartNumberFirst: this.selectedChartData.c3[0],
      chartNumberSecond: this.selectedChartData.c3[1],
      chartNumberThird: this.selectedChartData.c3[2],
      riseIndicatorFirst: 'rise-indicator__up',
      riseIndicatorSecond: 'rise-indicator__flat',
      riseIndicatorThird: 'rise-indicator__down',
      chartData: this.selectedChartData.c3
    },
  ];
  
  constructor(private common: CommonService) {}

  ngOnInit() {
    this.chartSub();
  }
  chartSub() {
    this.common.currentValue.subscribe(x => {
      this.selectedChartData = x;
      this.chartInfo[0].chartData = this.selectedChartData.c1
      this.chartInfo[1].chartData = this.selectedChartData.c2
      this.chartInfo[2].chartData = this.selectedChartData.c3
    })
  }
}

