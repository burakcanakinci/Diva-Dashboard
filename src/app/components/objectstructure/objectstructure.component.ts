import { Component, Input, ViewEncapsulation } from '@angular/core';
import { interval } from 'rxjs';

interface menuItem {
  title: string,
  index: number
}

@Component({
  selector: 'app-objectstructure',
  templateUrl: './objectstructure.component.html',
  styleUrls: ['./objectstructure.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ObjectstructureComponent {
  @Input('matBadgeHidden')
  teamsButtonColorHidden: boolean = true;
  hidden: boolean = false;
  badgeHidden: boolean = false;
  remainingTime: number = 120;
  timer: any;
  primary: string = 'mat-primary';
  selectedIndex: number = 0;
  toggleFirstMenu: boolean = true;
  selectedMenuItem: string = "+8 Teams";
  selectedItem: string = "Alle (020-0802, +9)";

  menuItems: menuItem[] = [
    { title: 'Alle Gruppen', index: 0 },
    { title: '8500 Galinski-A...', index: 1 },
    { title: '9400 Haas', index: 2 },
    { title: '8100 Basis Werk...', index: 3 },
    { title: '8800 OMS-B', index: 4 },
    { title: '8900 OMS-B/ GLT...', index: 5 },
    { title: '9000 Gruener', index: 6 },
    { title: '2600 Kraft / Flath', index: 7 },
    { title: '6200 Montage', index: 8 },
    { title: '9000 Facility Service', index: 9 },
    { title: '7800 OMS-B Auftragsteuerung', index: 10 },
    { title: '9300 RVO', index: 11 },
    { title: '8075 Fremdfirmenkoordinator OER A,M', index: 12 },
    { title: '0177 IH-HV Reman', index: 13 },
  ];
  
  constructor() {}

  ngOnInit() {
    this.startTimer();
  }
  startTimer() {
    this.timer = interval(1000).subscribe(val => {
      this.remainingTime--;
      if (this.remainingTime === 0) {
        this.resetTimer();
        this.timer.unsubscribe();
      }
    });
  }
  getMinutes() {
    return Math.floor(this.remainingTime / 60);
  }
  getSeconds() {
    return this.remainingTime % 60;
  }
  resetTimer() {
    this.remainingTime = 120;
    this.timer.unsubscribe(); 
    this.startTimer();
  }
  setSelectedItem(item: string) {
    this.selectedItem = item;
  }
  setSelectedMenuItem(item: string) {
    this.selectedMenuItem = item;
  }
}
