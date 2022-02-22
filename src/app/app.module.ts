import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';

import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './main-page/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LogOutComponent } from './main-page/log-out/log-out.component'

import { WelcomePageComponent } from './main-page/welcome-page/welcome-page.component';
import { DailyRevenuesComponent } from './main-page/daily-revenues/daily-revenues.component';
import { DropdownButtonComponent } from './main-page/dropdown-button/dropdown-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RevenuesTableComponent } from './main-page/daily-revenues/revenues-table/revenues-table.component';
import { UserSettingsComponent } from './main-page/user-settings/user-settings.component';
import { CurrencySymbolComponent } from './main-page/user-settings/currency-symbol/currency-symbol.component';
import { UserSettingService } from './main-page/user-settings/userSettings.service';




@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    MainPageComponent,
    HeaderComponent,
    LogOutComponent,
    WelcomePageComponent,
    DailyRevenuesComponent,
    DropdownButtonComponent,
    RevenuesTableComponent,
    UserSettingsComponent,
    CurrencySymbolComponent





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule

  ],
  providers: [UserSettingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
