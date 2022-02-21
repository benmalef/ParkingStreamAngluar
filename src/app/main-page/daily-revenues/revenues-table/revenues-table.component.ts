import { Component, OnChanges, OnInit } from '@angular/core';

import { dailyRevenue } from 'src/app/models/dailyRevenue.model';
import { DailyRevenuesService } from '../dailyRevenues.service';
@Component({
  selector: 'app-revenues-table',
  templateUrl: './revenues-table.component.html',
  styleUrls: ['./revenues-table.component.css'],
})
export class RevenuesTableComponent implements OnInit, OnChanges {

  revenues: dailyRevenue[] = [];
  constructor(private dailyRevenueServive: DailyRevenuesService) { }

  ngOnInit(): void {
    this.revenues = this.dailyRevenueServive.createDailyRevenueTable(24);
    //update the Revenue table
    this.dailyRevenueServive.updatedDailyRevenuesTable
      .subscribe((dailyRevenues: dailyRevenue[]) => {
        this.revenues = dailyRevenues;
      }
      );

  }
  ngOnChanges() {

  }
}
