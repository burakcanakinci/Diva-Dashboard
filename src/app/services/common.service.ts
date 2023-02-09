import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IChartValue {
  [key: string]: {
    c1: number[],
    c2: number[],
    c3: number[]
  }
}
export interface IBarChartValue {
  [key: string]: {
    c1: number[],
    c2: number[]
  }
}

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  currentValue = new EventEmitter<any>();
  currentBarChartVal = new EventEmitter();

  chartValues: IChartValue = {
    btn1: { c1: [2703, 0, 2824], c2: [2480, 0, 2560], c3: [152, 0, 162] },
    btn2: { c1: [273, 35, 224], c2: [80, 33, 250], c3: [52, 30, 12] },
    btn3: { c1: [373, 235, 324], c2: [180, 313, 425], c3: [112, 70, 68] },
    btn4: { c1: [673, 435, 624], c2: [480, 613, 925], c3: [612, 370, 268] },
  }
  barChartValues: IBarChartValue = {
    btn5: { c1: [40, 27, 14, 119], c2: [50, 34, 76, 98] }, 
    btn6: { c1: [113, 67, 94, 222], c2: [80, 67, 26, 58]  }, 
    btn7: { c1: [2530, 1164, 3319, 400], c2: [25200, 1320, 76340, 11178]  },
  }

  constructor() {}

  emitNewVal(id: string) {
    this.currentValue.emit(this.chartValues[id]);
    this.currentBarChartVal.emit(this.barChartValues[id]);
  }
}