import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Input() selectedOption?: string;
  @Input() selectedDropdown?: string;
  showDropdown: boolean = false;

  constructor() {}

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.showDropdown = false;
  }
}
