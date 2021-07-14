import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-account-button',
  templateUrl: './account-button.component.html',
  styleUrls: ['./account-button.component.css']
})
/** HomeButton component*/
export class AccountButtonComponent {
  /** HomeButton ctor */
  constructor(private logService: LoginService, private route: Router) {
  }

  OnLogOut() {
    this.logService.currentuser = null;
    alert("Logged Out, Broham!");
    this.route.navigateByUrl('events/getallevents');
  }
}
