import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { KalendariumApiService } from '../../Services/kalendarium-api.service';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
/** update-event component*/
export class UpdateEventComponent {

  
  eventslist = null;
  userslist = null;
  @Input() event = '';
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
    let newDate = `${this.date.getYear() + 1900}-${this.date.getMonth() + 1}-${this.date.getDate()}`;
    console.log(this.event, this.isPrivate, newDate);
    //console.log(this.isprivate);
    this.eventservice.UpdateEvent(this.eventservice.oneevent.id, this.userService.currentuser.id, this.event, this.isPrivate, this.eventservice.oneevent.location_id, newDate);
    this.route.navigateByUrl('/user/usershowday');
  }

}
