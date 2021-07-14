import { Component } from '@angular/core';
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
  event = null;
  location = null;
  date = null;
  isprivate: boolean = false;

  checked = false;

    /** NewEventForm ctor */
  constructor(private eventservice: KalendariumApiService, private userService: LoginService) {
    this.eventslist = eventservice;
    this.userslist = userService;


  }

  setAll() {
    this.checked = !this.checked;
    console.log(this.checked);
  }


  onSubmit() {
    console.log(this.event, this.date, this.location, this.userslist.currentuser.id, this.isprivate);
    //console.log(this.isprivate);
    this.eventservice.MakeNewEvent(this.userslist.currentuser.id, this.userslist.currentuser.emailAddress, this.isprivate, this.date);

  }

}
