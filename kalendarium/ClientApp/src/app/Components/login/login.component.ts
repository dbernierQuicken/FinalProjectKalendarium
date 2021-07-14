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
      console.log(this.logService.userresult);
      if (this.logService.userresult[0] != null) {

        if (this.password == this.logService.userresult[0].password) {
          this.logService.currentuser = this.logService.userresult[0];
          console.log(this.logService.currentuser.firstName);
          this.route.navigateByUrl('/user/usershowday');
      }
      else {
          //DO THIS PART
          alert('Wrong Credentials. Try again.')
      }
    }
    });
  }
}
