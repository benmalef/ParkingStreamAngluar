import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggingService } from './logging.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [LoggingService]
})
export class LogInComponent implements OnInit {

  constructor(private router: Router, private loggingServide: LoggingService) { }

  ngOnInit(): void {
  }

  //check if the user is valid and after login in the main app
  onSubmit(form: NgForm) {
    const email = form.value.userEmail;
    const password = form.value.userPassword;
    //using services
    if (this.loggingServide.checkValidUser(email, password)) {
      this.loggingServide.unlockApp(this.router);
    }
  }


}


