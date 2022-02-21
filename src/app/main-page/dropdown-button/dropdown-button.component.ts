import { Component, OnInit } from '@angular/core';
import { DailyRevenuesService } from '../daily-revenues/dailyRevenues.service';

@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.css'],
})
export class DropdownButtonComponent implements OnInit {

  constructor(private dailyRevenuesService: DailyRevenuesService) { }

  dates = []
  currentDay = '';
  ngOnInit(): void {
    this.dates = this.dailyRevenuesService.calculateTheDays();
    this.currentDay = this.dates[3];
  }

  onClick(event) {

    this.dailyRevenuesService.updateDailyRevenueTable();
    this.currentDay = event.target.innerText;
  }

}
