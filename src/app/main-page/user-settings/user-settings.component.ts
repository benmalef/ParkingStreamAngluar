import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSettingService } from './userSettings.service';
@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css'],
})
export class UserSettingsComponent implements OnInit {



  constructor(private userSettingService: UserSettingService) { }

  ngOnInit(): void {

  }

  //update the currencySymbol 
  onClick(event) {
    this.userSettingService.currencySymbolChanged(event.srcElement.nextSibling.innerText);
    this.userSettingService.currencySymbolUpdatedEmmiter(event.srcElement.nextSibling.innerText);
  }


}
