import { Component, OnInit } from '@angular/core';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { KalendariumApiService } from '../../Services/kalendarium-api.service';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  displayedColumns: string[] = ['id', 'eventName', 'privateEvent', 'date', 'location', 'edit', 'delete'];

  events = null;
  eventslist: KalendariumApiService = null;

  dataSource = new MatTableDataSource();
  users = null;
  userslist: LoginService = null;

  constructor(private eventservice: KalendariumApiService, private userService: LoginService, private route: Router) {
    this.eventslist = eventservice;
    this.userslist = userService;
    this.showtoday();
  }

  ngOnInit(): void {
  }

  showall() {
    this.eventslist.getAllEventsWithLocationAndUser(eventresult => {
      this.events = eventresult;
      /*   console.log(this.events);*/
    });
  }

  showtoday() {
    this.eventslist.getEventsForToday(this.userslist.currentuser.id, eventresult => {
      this.events = eventresult;
      console.log(this.events);
    });
  }

  OnDelete(eventID) {
    console.log(eventID);
    this.eventslist.DeleteEvent(eventID);

    this.route.navigateByUrl('/user/usershowday');
  }
  /*
   * Work On this later
  updateEvent(eventID) {
    console.log(eventID);
    this.eventslist.UpdateEvent.
  } */

  showuser() {
    this.userslist.GetAllUsers(userresult => {
      this.users = userresult;
      /*    console.log(this.users);*/
    });
  }

  redirecttoedit(id) {
    this.eventservice.ReadOneEventByID(id, eventresult => {
      console.log(eventresult);
      this.eventservice.oneevent = eventresult;
    });
    this.route.navigateByUrl('/event/edit');
  }
}
