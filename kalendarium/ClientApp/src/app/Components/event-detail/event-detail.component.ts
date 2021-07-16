import { Component, OnInit } from '@angular/core';
import { KalendariumApiService } from '../../Services/kalendarium-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from '../../Services/login.service';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent {
  displayedColumns: string[] = [ 'eventName', 'privateEvent', 'date', 'location','edit','delete'];

  events = null;
  eventslist: KalendariumApiService = null;

  dataSource = new MatTableDataSource();
  users = null;
  userslist: LoginService = null;
  user = null;
  eventbyuser = null;

  constructor(private eventservice: KalendariumApiService, private userService: LoginService) {
    this.eventslist = eventservice;
    this.userslist = userService;

    this.events = eventservice.oneevent;
  }


  ngOnInIt() {
  }



}
