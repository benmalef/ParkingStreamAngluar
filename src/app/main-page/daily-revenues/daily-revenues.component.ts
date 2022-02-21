import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UserSettingService } from '../user-settings/userSettings.service';
import { DailyRevenuesService } from './dailyRevenues.service';


@Component({
  selector: 'app-daily-revenues',
  templateUrl: './daily-revenues.component.html',
  styleUrls: ['./daily-revenues.component.css'],
  providers: [DailyRevenuesService]
})
export class DailyRevenuesComponent implements OnInit, OnChanges {


  constructor(private dailyRevenues: DailyRevenuesService) { }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {

  }
}
