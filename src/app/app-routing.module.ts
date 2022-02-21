import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './main-page/log-out/log-out.component';
import { WelcomePageComponent } from './main-page/welcome-page/welcome-page.component';
import { DailyRevenuesComponent } from './main-page/daily-revenues/daily-revenues.component';
import { UserSettingsComponent } from './main-page/user-settings/user-settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  {
    path: 'main', component: MainPageComponent,
    children: [{ path: 'logout', component: LogOutComponent },
    { path: 'welcomePage', component: WelcomePageComponent },
    { path: 'dailyRevenues', component: DailyRevenuesComponent },
    { path: 'userSettings', component: UserSettingsComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
