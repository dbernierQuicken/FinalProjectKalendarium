import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  http: HttpClient = null;

  constructor(theHttp: HttpClient) {
    this.http = theHttp;
  }

  AddUser() {
  }

  isUser() {
  }

  getUserByEmail() {
  }

  AddCoworker() { }

  GetCoworkerByUser() { }

  ToggleHide() { }
}
