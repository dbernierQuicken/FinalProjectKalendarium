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
  { date: "01/01/2021", time: "12:00 PM", eventName: "Code Review", location: "New York -- Remote", coworker: "David Bernier" },
  { date: "01/02/2021", time: "1:00 PM", eventName: "Orientation", location: "Detroit", coworker: "Ricky" },
  { date: "01/03/2021", time: "5:00 PM", eventName: "Code Review", location: "North Carolina -- Remote", coworker: "Lassiter" },
  { date: "01/03/2021", time: "12:00 PM", eventName: "Lunch", location: "Remote", coworker: "Michael" },
  { date: "01/05/2021", time: "8:00 AM", eventName: "Code Review", location: "Detroit", coworker: "Jeff" },
  { date: "01/06/2021", time: "12:00 PM", eventName: "Hack Week Day 1", location: "Detroit", coworker: "Alaa" },
  { date: "01/07/2021", time: "9:00 AM", eventName: "Code Review", location: "Detroit", coworker: "Kirk" },
  { date: "01/08/2021", time: "12:30 PM", eventName: "HR meeting", location: "Detroit", coworker: "Johnathan" },
  { date: "01/08/2021", time: "3:00 PM", eventName: "Birthday", location: "Detroit", coworker: "Other David" },
  { date: "01/09/2021", time: "8:00 AM", eventName: "Code Review", location: "Detroit", coworker: "David Bernier" }
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
  displayedColumns: string[] = ['date', 'time', 'eventName', 'location', 'coworker'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  events = null;
  eventslist: KalendariumApiService = null;
  users = null;
  userslist: LoginService = null;

  constructor(private eventservice: KalendariumApiService, private userService: LoginService) {
    this.eventslist = eventservice;
    this.userslist = userService;
    this.showevents();
    this.showuser();
 
  }

  showuser() {

    this.userslist.GetAllUsers(userresult => {
      this.users = userresult;
      console.log(this.users);
    });

  }


  showevents() {
    this.eventslist.getAllPublicEvents(eventresult => {
      this.events = eventresult;
      console.log(this.events);
    });
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public EventClick(result: string) {
    alert(`Click works for ${result}:

    Eventually will show event Details`)
  }

  public CoworkerClick(result: string) {
    alert(`Click works for ${result}:

    Eventually will show coworker details`)
  }
}
