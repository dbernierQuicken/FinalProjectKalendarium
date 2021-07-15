import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { KalendariumApiService } from '../../Services/kalendarium-api.service';
import { LoginService } from '../../Services/login.service';


/**
 * @title Table with filtering
 */

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})

export class EventListComponent {
  displayedColumns: string[] = ['name', 'eventName', 'privateEvent', 'date','delete','edit'];

  events = null;
  eventslist: KalendariumApiService = null;

  dataSource = new MatTableDataSource();
  users = null;
  userslist: LoginService = null;

  constructor(private eventservice: KalendariumApiService, private userService: LoginService, private route: Router) {
    this.eventslist = eventservice;
    this.userslist = userService;
    this.showall();

  }

  ngOnInIt() {
  }

  showall() {
    this.eventslist.getAllEventsWithLocationAndUser(eventresult => {
      this.events = eventresult;
      /*   console.log(this.events);*/
    });
  }
  showuser() {
    this.userslist.GetAllUsers(userresult => {
      this.users = userresult;
      /*    console.log(this.users);*/
    });
  }

  //showevents() {
  //  this.eventslist.getAllPublicEvents(eventresult => {
  //    this.events = eventresult;
  //    console.log(this.events);
  //  });

  //}

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.events.filter = filterValue.trim().toLowerCase();
  }

  public EventClick(id) {
    this.eventslist.getOneEventWithLocationAndUser(id, result => {
      console.log(result);
    });
  }



  public CoworkerClick(firstName: string, lastName: string) {
    /*    alert(`Click works for ${firstName} ${lastName}:

        Eventually will show coworker details`)*/
  }


  OnDelete(eventID) {
    console.log(eventID);
    this.eventslist.DeleteEvent(eventID);

    this.route.navigateByUrl('/user/usershowday');
  }

  redirecttoedit(id) {

    this.eventservice.ReadOneEventByID(id, eventresult => {
      console.log(eventresult);
      this.eventservice.oneevent = eventresult;
    });
    this.route.navigateByUrl('/event/edit');

  }
}
