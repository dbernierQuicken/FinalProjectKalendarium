import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/** login component*/
export class LoginComponent {
  /** login ctor */
  emailaddress: string = '';
  password: string = '';

  constructor(private logService: LoginService, private route: Router) {
  }

  OnSubmit() {
    this.logService.getUserByEmail(this.emailaddress, userresult => {
      this.logService.userresult = userresult;
      for (let i = 0; i < this.logService.userresult.length; i++) {
        //console.log(this.logService.userresult[i]);

        if (this.logService.userresult[i].emailAddress == this.emailaddress) {

          if (this.password == this.logService.userresult[i].password) {
            this.logService.currentuser = this.logService.userresult[i];
            console.log(this.logService.currentuser.firstName);
            this.route.navigateByUrl('/user/usershowday');
            return;
          }

        }

      }
      alert('Wrong Credentials. Try Again.')

    });
  }
}
