import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class KalendariumApiService {
  http: HttpClient = null;
  allevents = null;
  alleventsLocUsr = null;
  oneevent = null;
  dayevent = null;
  //anID = null;
  //MAYBE?  id = null;
  /*  userName = null;*/
  currentevent = null;
  currentloc = null;
  currentdate = null;

  constructor(theHttp: HttpClient) {
    this.http = theHttp;
  }

  MakeNewEvent(userID, eventName, isPrivate, dateID, cb) {
    let myformdata = new FormData();
    myformdata.append('userID', userID);
    myformdata.append('eventName', eventName);
    myformdata.append('isPrivate', isPrivate);
    myformdata.append('dateID', dateID);
    this.http.post<any>(`/event/addevent`, myformdata, {}).subscribe(results => {
      cb(results);
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

  AddLocation(ccity, sstate, sstreet, zzip, cb) {
    let myformdata = new FormData();
    myformdata.append('ccity', ccity);
    myformdata.append('sstate', sstate);
    myformdata.append('sstreet', sstreet);
    myformdata.append('zzip', zzip);
    this.http.post<any>(`/location/add`, myformdata, {
    }).subscribe(results => {
      cb(results);
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

  addLoctoEvent(eventid, locid) {
    let myformdata = new FormData();
    myformdata.append('eventid', eventid);
    myformdata.append('locid', locid);
    this.http.put<any>(`/event/addLoc`, myformdata, {}).subscribe(results => {
      console.log(results);
    });
  }

  UpdateEvent(eventid, uid, eventname, isPrivate, locID, date) {
    let myformdata = new FormData();
    myformdata.append('eventid', eventid);
    myformdata.append('uid', uid);
    myformdata.append('eventname', eventname);
    myformdata.append('isPrivate', isPrivate);
    myformdata.append('locID', locID);
    myformdata.append('date', date);

    this.http.post<any>(`/event/update`, myformdata, {}).subscribe(results => {
      console.log(results);
    });
  }

  DeleteLocation(Lid) {
    this.http.delete<any>(`/location/remove/${Lid}`, {}).subscribe(results => {
      console.log(results);
    });
  }

  DeleteEvent(eventID) {
    this.http.delete<any>(`/event/remove/${eventID}`).subscribe(result => {
      console.log(result);
    });
  }

  GetAllEventsWithLocation(cb) {
    this.http.get<any>('/location/withevent').subscribe(results => {
      cb(results);
    });
  }
  GetTheCalendar(cb) {
    this.http.get<any>(`/calendar/fetchCal`, {}).subscribe(results => {
      cb(results);
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

  getEventsForToday(user_id, cb) {
    this.http.get<any>(`/event/today/${user_id}`).subscribe(result => {
      console.log(result);
      this.dayevent = result;
      cb(this.dayevent);
    }, error => {
      console.log(error);
    });
  }

  getEventsByDay(date, user_id, cb) {
    this.http.get<any>(`/event/byday/${date}/${user_id}`).subscribe(result => {
      console.log(result);
      this.dayevent = result;
      cb(this.dayevent);
    }, error => {
      console.log(error);
    });
  }
}
