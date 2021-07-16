import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { Router } from '@angular/router';
import { KalendariumApiService } from '../../Services/kalendarium-api.service';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-new-event-form',
  templateUrl: './new-event-form.component.html',
  styleUrls: ['./new-event-form.component.css']
})
/** NewEventForm component*/
export class NewEventFormComponent implements OnInit {
  eventslist = null;
  userslist = null;
  event = '';
  date = null;
  isPrivate: boolean = false;

  street = '';
  city = '';
  state = '';
  zip = '';

  checked = false;

  control = new FormControl();
  states: string[] = [
    'Alabama(AL)', 'Alaska(AK)', 'Arizona(AZ)', 'Arkansas(AR)', 'California(CA)', 'Colorado(CO)', 'Connecticut(CT)', 'Delaware(DE)', 'District of Columbia(DC)',
    'Florida(FL)', 'Georgia(GA)', 'Hawaii(HI)', 'Idaho(ID)', 'Illinois(IL)', 'Indiana(IN)', 'Iowa(IA)', 'Kansas(KS)', 'Kentucky(KY)', 'Louisiana(LA)',
    'Maine(ME)', 'Maryland(MD)', 'Massachusetts(MA)', 'Michigan(MI)', 'Minnesota(MN)', 'Mississippi(MS)', 'Missouri(MO)', 'Montana(MT)', 'Nebraska(NE)',
    'Nevada(NV)', 'New Hampshire(NH)', 'New Jersey(NJ)', 'New Mexico(NM)', 'New York(NY)', 'North Carolina(NC)', 'North Dakota(ND)', 'Ohio(OH)',
    'Oklahoma(OK)', 'Oregon(OR)', 'Pennsylvania(PA)', 'Rhode Island(RI)', 'South Carolina(SC)', 'South Dakota(SD)', 'Tennessee(TN)', 'Texas(TX)',
    'Utah(UT)', 'Vermont(VT)', 'Virginia(VA)', 'Washington(WA)', 'West Virginia(WV)', 'Wisconsin(WI)', 'Wyoming(WY)', 'American Samoa(AS)',
    'Guam(GU)', 'Northern Mariana Islands(MP)', 'Puerto Rico(PR)', 'Virgin Islands(VI)'
  ];
  filteredStates: Observable<string[]>;

  /** NewEventForm ctor */
  constructor(private eventservice: KalendariumApiService, private userService: LoginService, private route: Router) {
    this.eventslist = eventservice;
    this.userslist = userService;
    this.date = this.eventservice.currentdate;

    console.log(this.state);
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

  // onSubmit() {
  //   let newDate = `${this.date.getYear()+1900}-${this.date.getMonth()+1}-${this.date.getDate()}`;
  //   // console.log(this.event, newDate, this.userslist.currentuser.id, this.isPrivate);
  //   //console.log(this.isprivate);

  //   this.eventservice.MakeNewEvent(this.userslist.currentuser.id, this.event, this.isPrivate, newDate, eventresult => {
  //     this.eventservice.currentevent = eventresult;

  //   // console.log('this one: ', this.eventservice.currentevent);
  //   // console.log(this.street, this.city, this.state, this.zip);
  //   });
  //   this.eventservice.AddLocation(this.city, this.state, this.street, this.zip, locationresult => {
  //     console.log(this.city)
  //     this.eventservice.currentloc = locationresult;
  //     debugger

  //     console.log('this is the location', this.eventservice.currentloc);
  //   this.route.navigateByUrl('/events/addEvent');
  //     this.eventservice.UpdateEvent(this.eventservice.currentevent.id, this.event, this.isPrivate, newDate, this.eventservice.currentloc.id, this.userslist.currentuser.id);
  //   });

  //   //this.route.navigateByUrl('/user/usershowday');
  // }

  streetInput(event: Event) {
    let input = (event.target as HTMLInputElement).value;
    this.street = input;
    console.log(this.state);
  }

  cityInput(event: Event) {
    let input = (event.target as HTMLInputElement).value;
    this.city = input;
    console.log(this.state);
  }

  stateInput(event: Event) {
    let input = (event.target as HTMLInputElement).value;
    this.state = input;
    console.log(this.state);
  }

  zipInput(event: Event) {
    let input = (event.target as HTMLInputElement).value;
    this.zip = input
    console.log(this.state)
  }

  onSubmit() {
    let newDate = `${this.date.getYear() + 1900}-${this.date.getMonth() + 1}-${this.date.getDate()}`;

    this.eventservice.MakeNewEvent(this.userslist.currentuser.id, this.event, this.isPrivate, newDate, eventresult => {
      this.eventservice.currentevent = eventresult;
    });

    //this.eventservice.AddLocation(this.city, this.state, this.street, this.zip, locationresult => {
      //this.eventservice.currentloc = locationresult;

      //this.route.navigateByUrl('/events/addEvent');
      //this.eventservice.UpdateEvent(this.eventservice.currentevent.id, this.event, this.isPrivate, newDate, this.eventservice.currentloc.id, this.userslist.currentuser.id);
    //});

    this.route.navigateByUrl('/user/usershowday');
  }

  ngOnInit() {
    this.filteredStates = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.states.filter(state => this._normalizeValue(state).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
