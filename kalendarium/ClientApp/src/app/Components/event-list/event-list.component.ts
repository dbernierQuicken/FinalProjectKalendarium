import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Console } from 'console';
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
  displayedColumns: string[] = ['date', 'eventName', 'name', 'delete', 'edit'];
  dataSource;
  users;
  userslist: LoginService = null;

  constructor(private eventservice: KalendariumApiService, private userService: LoginService, private route: Router) {
    this.userslist = userService;

    this.eventservice.getAllEventsWithLocationAndUser(eventResult => {
        this.dataSource = new MatTableDataSource(eventResult)
  });

    this.userService.GetAllUsers(userResult => this.users = userResult);

  }

  ngOnInIt() {
  }



  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //public EventClick(id) {
  //  this.eventslist.getOneEventWithLocationAndUser(id, result => {
  //    console.log(result);
  //  });
  //}

  public CoworkerClick(firstName: string, lastName: string) {
    /*    alert(`Click works for ${firstName} ${lastName}:

        Eventually will show coworker details`)*/
  }

  OnDelete(eventID) {
    this.eventservice.DeleteEvent(eventID);
    this.eventservice.getAllEventsWithLocationAndUser(eventresult => {
      this.dataSource =  new MatTableDataSource(eventresult);
      });
    // this.route.navigateByUrl('/user/usershowday');
  }

  EventClick(id) {
    this.eventservice.getOneEventWithLocationAndUser(id, eventresult => {
      console.log(eventresult);
      this.eventservice.oneevent = eventresult;
    });
    this.route.navigateByUrl('/event/details');
  }

  redirecttoedit(id) {
    this.eventservice.ReadOneEventByID(id, eventresult => {
      console.log('check to see if this is empty', eventresult);
      this.eventservice.oneevent = eventresult;
      console.log('still good?', this.eventservice.oneevent);
    });
    this.route.navigateByUrl('/event/edit');
  }
}
