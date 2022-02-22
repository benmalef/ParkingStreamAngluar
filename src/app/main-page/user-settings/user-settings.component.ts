import { Component, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSettingService } from './userSettings.service';
@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css'],
})
export class UserSettingsComponent implements OnInit {



  constructor(private userSettingService: UserSettingService, private renderer: Renderer2) { }

  ngOnInit(): void {
    if (this.userSettingService.currencySymbol === '$') {
      document.getElementById('flexRadioDefault2').setAttribute("checked", "");
    }
  }



  //update the currencySymbol 
  onClick(event) {
    this.userSettingService.currencySymbolChanged(event.srcElement.nextSibling.innerText);
    this.userSettingService.currencySymbolUpdatedEmmiter(event.srcElement.nextSibling.innerText);
  }


}
