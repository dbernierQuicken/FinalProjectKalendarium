import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { KalendariumApiService } from '../../Services/kalendarium-api.service';
import { LoginService } from '../../Services/login.service';

export interface MockData {
  date: string;
  time: string;
  eventName: string;
  location: string;
  coworker: string;
}

const ELEMENT_DATA: MockData[] = [

];

/**
 * @title Table with filtering
 */

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})

export class EventListComponent {
  displayedColumns: string[] = ['id', 'name', 'eventName', 'privateEvent', 'date'];

  events = null;
  eventslist: KalendariumApiService = null;

  dataSource = new MatTableDataSource(this.events);
  users = null;
  userslist: LoginService = null;

  constructor(private eventservice: KalendariumApiService, private userService: LoginService) {
    this.eventslist = eventservice;
    this.userslist = userService;
    this.showall();
  }

  ngOnInIt() {
  }

  showall() {
    this.eventslist.getAllEventsWithLocationAndUser(eventresult => {
      this.events = eventresult;
      console.log(this.events);
    });
  }
  showuser() {
    this.userslist.GetAllUsers(userresult => {
      this.users = userresult;
      console.log(this.users);
    });
  }

  //showevents() {
  //  this.eventslist.getAllPublicEvents(eventresult => {
  //    this.events = eventresult;
  //    console.log(this.events);
  //  });

  //}

  public applyFilter(event: Event) {
    /*    console.log(event.target)
        console.log(this.eventslist)*/
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.data.map(e => {
      console.log(e);
    })
  }

  public EventClick(result: string) {
    alert(`Click works for ${result}:

    Eventually will show event Details`)
  }

  public CoworkerClick(firstName: string, lastName: string) {
    alert(`Click works for ${firstName} ${lastName}:

    Eventually will show coworker details`)
  }
}
