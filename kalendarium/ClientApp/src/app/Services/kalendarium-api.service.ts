import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class KalendariumApiService {
  http: HttpClient = null;
  allevents = null;
  alleventsLocUsr = null;
  oneevent = null;
  /*  userName = null;*/

  constructor(theHttp: HttpClient) {
    this.http = theHttp;
  }

  MakeNewEvent(userID, userName, isPrivate, dateID) {
    let myformdata = new FormData();
    myformdata.append('userID', userID);
    myformdata.append('userName', userName);
    myformdata.append('isPrivate', isPrivate);
    myformdata.append('dateID', dateID);
    this.http.post<any>(`/event/addevent`, myformdata, {}).subscribe(results => {
      console.log(results);
    });
  }
  ReadOneEventByID(eventId, cb) {
    this.http.get<any>(`/event/getevent/${eventId}`).subscribe(results => {
      cb(results);

    });
  }
  ReadAllPublicEvents(cb) {
    this.http.get<any>(`/event`).subscribe(results => {
      cb(results);
    });
  }
  ReadAllCoworkerPublicEvents(coworkerId, cb) {
    this.http.get<any>(`/event/readcoworker/${coworkerId}`).subscribe(results => {
      cb(results);

    });
  }
  ReadAllEventsByUser(userId, cb) {
    this.http.get<any>(`/event/readcoworker/${userId}`).subscribe(results => {
      cb(results);

    });
  }

  AddLocation(city, state, street, zip) {
    let myformdata = new FormData();
    myformdata.append('city', city);
    myformdata.append('state', state);
    myformdata.append('street', street);
    myformdata.append('zip', zip);
    this.http.post<any>(`/location/add`, myformdata, {

    }).subscribe(results => {
      console.log(results);
    });
  }
  UpdateLocation(Lid, Lcity, Lstate, Lstreet, Lzip) {
    let myformdata = new FormData();
    myformdata.append('Lid', Lid);
    myformdata.append('Lcity', Lcity);
    myformdata.append('Lstate', Lstate);
    myformdata.append('Lstreet', Lstreet);
    myformdata.append('Lzip', Lzip);
    this.http.put<any>(`/location/update`, myformdata, {

    }).subscribe(results => {
      console.log(results);
    });
  }

  DeleteLocation(Lid) {
    this.http.delete<any>(`/location/remove/${Lid}`, {}).subscribe(results => {
      console.log(results);
    });
  }

  GetAllEventsWithLocation(cb) {
    this.http.get<any>('/location/withevent').subscribe(results => {
      cb(results);
    });
  }
  GetTheCalendar(start, end) {
    this.http.delete<any>(`/calendar/${start}/${end}`, {}).subscribe(results => {
      console.log(results);
    });
  }
  getAllPublicEvents(cb) {
    this.http.get<any>('/event/public').subscribe(result => {
      console.log(result);
      this.allevents = result;
      cb(this.allevents);
    }, error => {
      console.log(error);
    });
  }

  getAllEventsWithLocationAndUser(cb) {
    this.http.get<any>('/event/getallwitheventanduser').subscribe(result => {
      console.log(result);
      this.alleventsLocUsr = result;
      cb(this.alleventsLocUsr);
    }, error => {
      console.log(error);
    });
  }

  getOneEventWithLocationAndUser(id, cb) {
    this.http.get<any>(`/event/GetOneEventDetail/${id}`).subscribe(result => {
      console.log(result);
      this.oneevent = result;
      cb(this.oneevent);
    }, error => {
      console.log(error);
    });
  }
}
