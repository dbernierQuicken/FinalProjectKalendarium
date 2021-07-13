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
  displayedColumns: string[] = ['id', 'name', 'eventName', 'privateEvent', 'date', 'location'];

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
    //this.showall();
  }

  ngOnInIt() {
  }

  //showall() {
  //  this.eventslist.getAllEventsWithLocationAndUser(eventresult => {
  //    this.events = eventresult;
  //    /*   console.log(this.events);*/
  //  });
  //}
  //showuser() {
  //  this.userslist.GetAllUsers(userresult => {
  //    this.users = userresult;
  //    /*    console.log(this.users);*/
  //  });
  //}

  editevent() {

  }

  showeventsbyuser(id) {
    
    this.eventslist.ReadOneEventByID(id, result => {

    });
  }


}
