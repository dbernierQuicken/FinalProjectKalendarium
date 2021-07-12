import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'oidc-client';

@Injectable()
export class LoginService {
  http: HttpClient = null;

  constructor(theHttp: HttpClient) {
    this.http = theHttp;
  }

  AddUser(fName, lName, eAddress, dPart, pWord) {
    let myformdata = new FormData();
    myformdata.append('fName', fName);
    myformdata.append('lName', lName);
    myformdata.append('eAddress', eAddress);
    myformdata.append('dPart', dPart);
    myformdata.append('pWord', pWord);
    this.http.post<any>(`/user/add`, myformdata, {

    }).subscribe(results => {
      console.log(results);
    });
  }


  GetAllUsers(cb) {
    this.http.get<any>('/user/getall').subscribe(results => {
      cb(results);
      console.log(results);
    });
  }

  isUser(fName, lName, eAddress, dPart, pWord) {
    let myformdata = new FormData();
    myformdata.append('fName', fName);
    myformdata.append('lName', lName);
    myformdata.append('eAddress', eAddress);
    myformdata.append('dPart', dPart);
    myformdata.append('pWord', pWord);
    this.http.post<any>(`/user/isuser`, myformdata, {

    }).subscribe(results => {
      console.log(results);
    });
  }

  getUserByEmail(eAddress, cb) {
    this.http.get<any>(`/user/getuser/${eAddress}`).subscribe(results => {
      cb(results);
    });
  }

  AddCoworker(toHide, thisUser, coworkerID) {
    let myformdata = new FormData();
    myformdata.append('toHide', toHide);
    myformdata.append('thisUser', thisUser);
    myformdata.append('coworkerID', coworkerID);
    this.http.post<any>(`/coworker/add`, myformdata, {

    }).subscribe(results => {
      console.log(results);
    });
  }

  GetCoworkerByUser(thisUser, cb) {
    this.http.get<any>(`/coworker/getcoworkerbyuser/${thisUser}`).subscribe(results => {
      cb(results);
    });
  }

  ToggleHide(userid, coworkerid) {
    let myformdata = new FormData();
    myformdata.append('userid', userid);
    myformdata.append('coworkerid', coworkerid);
    this.http.post<any>(`/coworker/toggle`, myformdata, {

    }).subscribe(results => {
      console.log(results);
    });
  }


}
