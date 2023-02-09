import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements AfterViewInit, OnChanges {
  @Input() chartData?: number[];

  @ViewChild('donut') donut!: ElementRef;
  chart?: Chart;

  constructor() {}

  ngAfterViewInit() {
    this.doughnutChartMethod();
  }
  ngOnChanges(val: SimpleChanges) {
    if (this.chart) {
      this.chart.data.datasets[0].data = val['chartData'].currentValue;
      this.chart.update();
    }
  }
  doughnutChartMethod() {
    this.chart = new Chart(this.donut.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: this.chartData,
          backgroundColor: ['#00A09F', '#36C2C1', '#C3CACD'],
          borderWidth: 0,
        }]
      },
      options: {
        cutout: 50,
        events: []
      }
    });
  }
}
