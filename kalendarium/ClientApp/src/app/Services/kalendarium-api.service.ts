import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class KalendariumApiService {
  http: HttpClient = null;
  allevents = null;
  /*  userName = null;*/

  constructor(theHttp: HttpClient) {
    this.http = theHttp;
  }

  MakeNewEvent() {
  }
  ReadOneEventByID() {
  }
  ReadAllPublicEvents() {
  }
  ReadAllCoworkerPublicEvents() {
  }
  ReadAllEventsByUser() {
  }

  AddLocation() {
  }
  UpdateLocation() {
  }

  DeleteLocation() {
  }

  GetAllEventsWithLocation() {
  }
  GetTheCalendar() {
  }
  getAllEvents(cb) {
    this.http.get<any>('/events/allevents').subscribe(result => {
      console.log(result);
      this.allevents = result;
      cb(this.allevents);
    }, error => {
      console.log(error);
    });
  }
}
