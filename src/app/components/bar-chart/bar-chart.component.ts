import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements AfterViewInit, OnChanges {
  @Input() barChartData?: number[];
  
  @ViewChild('barCanvas') barCanvas!: ElementRef;
  barChart?: Chart;

  ngAfterViewInit() {
    this.barChartMethod();
  }
  ngOnChanges(val: SimpleChanges) {
    if (this.barChart) {
      this.barChart.data.datasets[0].data = val['barChartData'].currentValue;
      this.barChart.data.labels = val['barChartData'].currentValue;
      this.barChart.update();
    }
  }

  barChartMethod() {
    this.barChart = new Chart (this.barCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels: this.barChartData,
        datasets: [{
          data: this.barChartData,
          backgroundColor: ['#F83A58','#D05CE3','#9A67EA','#673AB7'],
        }]
      },
      options: {
        indexAxis: 'y',
        plugins: {
          legend: {
            display: false
          }
        }
      }
    })
  }
}
