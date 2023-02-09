import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

interface IChartData {
  title: string,
  id: string
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Output() selected = new EventEmitter<string>();
  @Input() type?: string;
  @Input() selectedOption?: string;
  showDropdown: boolean = false;  
  chartData?: IChartData[];

  doughnutChartData: IChartData[] = [
    { title: 'Alle', id: 'btn1' },
    { title: 'Letzte 7 Tage', id: 'btn2' },
    { title: 'Letzte 14 Tage', id: 'btn3' },
    { title: 'Letzte 28 Tage', id: 'btn4' }
  ];

  barChartData: IChartData[] = [
    { title: 'Nächsten 7 Tage', id: 'btn5' },
    { title: 'Nächsten 14 Tage', id: 'btn6' },
    { title: 'Nächsten 28 Tage', id: 'btn7' },
  ];

  constructor(private common: CommonService) {}

  ngOnInit() {
    if (this.type === 'bar') {
      this.chartData = this.barChartData;
    } else if (this.type === 'doughnut') {
      this.chartData = this.doughnutChartData;
    }
  }

  selectOption(title: string) {
    this.showDropdown = false;
    this.selected.emit(title);
  }

  selectChartIndex(index: string) {
    this.common.emitNewVal(index);
  }
}
