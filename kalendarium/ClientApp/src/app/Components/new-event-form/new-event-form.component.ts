import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KalendariumApiService } from '../../Services/kalendarium-api.service';
import { LoginService } from '../../Services/login.service';

@Component({
    selector: 'app-new-event-form',
    templateUrl: './new-event-form.component.html',
    styleUrls: ['./new-event-form.component.css']
})
/** NewEventForm component*/
export class NewEventFormComponent {

  eventslist = null;
  userslist = null;
  event = '';
  date = null;
  isPrivate: boolean = false;

  checked = false;

  /** NewEventForm ctor */
  constructor(private eventservice: KalendariumApiService, private userService: LoginService, private route: Router) {
    this.eventslist = eventservice;
    this.userslist = userService;


  }

  setAll() {
    this.checked = !this.checked;
    console.log(this.checked);
    if (this.isPrivate) {
      this.isPrivate = false;
    }
    else {
      this.isPrivate = true;
    }
  }


  onSubmit() {
    let newDate = `${this.date.getYear()+1900}-${this.date.getMonth()+1}-${this.date.getDate()}`;
    console.log(this.event, newDate, this.userslist.currentuser.id, this.isPrivate);
    //console.log(this.isprivate);
    this.eventservice.MakeNewEvent(this.userslist.currentuser.id, this.event, this.isPrivate, newDate);
    this.route.navigateByUrl('/user/usershowday');
  }

}
