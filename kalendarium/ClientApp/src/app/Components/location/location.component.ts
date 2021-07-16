import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { Router } from '@angular/router';
import { KalendariumApiService } from '../../Services/kalendarium-api.service';
import { LoginService } from '../../Services/login.service';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css']
})
/** location component*/
export class LocationComponent {
  /** location ctor */
  eventslist = null;
  userslist = null;

  street = '';
  city = '';
  state = '';
  zip = '';

  constructor(private eventservice: KalendariumApiService, private userService: LoginService, private route: Router) {
    this.eventslist = eventservice;
    this.userslist = userService;
  }
  //this.eventservice.MakeNewEvent(this.userslist.currentuser.id, this.event, this.isPrivate, newDate, eventresult => {
  //  this.eventservice.currentevent = eventresult;
 /* });*/
  onSubmit() {
    this.eventservice.AddLocation(this.city, this.state, this.street, this.zip, locationresult => {
      this.eventservice.currentloc = locationresult;
      console.log('does this work', locationresult);
      
    });
    
    
    
  }
  link() {
    this.eventservice.addLoctoEvent(this.eventservice.currentevent.id, this.eventservice.currentloc.id);
    this.route.navigateByUrl('/events/getallevents');
  }
}
