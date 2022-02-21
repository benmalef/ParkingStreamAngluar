import { Component, Input, OnInit } from '@angular/core';
import { UserSettingService } from '../userSettings.service';


@Component({
  selector: 'app-currency-symbol',
  templateUrl: './currency-symbol.component.html',
  styleUrls: ['./currency-symbol.component.css']
})
export class CurrencySymbolComponent implements OnInit {
  currencySymbol = '€';
  constructor(private userSettingService: UserSettingService) { }


  ngOnInit(): void {
    this.userSettingService.currencySymbolUpdated().then(
      currencySymbol => this.currencySymbol = currencySymbol
    );
    this.userSettingService.currencySymbolEmitter
      .subscribe(
        (currencySymbol) => {
          this.currencySymbol = currencySymbol;
        });

  }
}
