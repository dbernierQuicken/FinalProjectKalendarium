import { Component } from '@angular/core';

@Component({
  selector: 'app-account-button',
  templateUrl: './account-button.component.html',
  styleUrls: ['./account-button.component.css']
})
/** HomeButton component*/
export class AccountButtonComponent {
  /** HomeButton ctor */
  constructor() {
  }

  OnLogOut() {
    alert("Logout")
  }
}
