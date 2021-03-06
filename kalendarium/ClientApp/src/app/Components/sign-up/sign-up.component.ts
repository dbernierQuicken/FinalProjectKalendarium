import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
/** signUp component*/
export class SignUpComponent {
  /** signUp ctor */
  emailaddress: string = '';
  password: string = '';
  confPassword: string = '';
  dept: string = '';
  firstname: string = '';
  lastname: string = '';
  currentuser = null;

  constructor(private logService: LoginService, private route: Router) {
  }

  OnSubmit() {
    var regex;
    var test;
    this.emailaddress,
      regex = new RegExp('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'),
      test = regex.test(this.emailaddress);
    //alert(test);
    if (test == false) {
      alert('Please enter a valid email address');
      return;
    }
    if (this.password != this.confPassword) {
      alert('Please try again. Password must be confirmed.');
      return;
    }
    if (this.dept == '' || this.firstname == '' || this.lastname == '' || this.emailaddress == '' || this.password == '') {
      alert('Please fill in all fields.');
      return;
    }
    console.log(this.emailaddress, this.password, this.dept, this.firstname, this.lastname);
    //this.logService.isUser(this.firstname, this.lastname, this.emailaddress, this.dept, this.password);
    //console.log('Check over here: ', this.logService.isuser);
    //if (this.logService.isuser) {
    // this.signinmessage = 'Account for this user has already been created';
    //}
    //else {
    // this.signinmessage = null;
    // this.logService.AddUser(this.firstname, this.lastname, this.emailaddress, this.dept, this.password);
    // this.route.navigateByUrl('');
    //}
    this.logService.AddUser(this.firstname, this.lastname, this.emailaddress, this.dept, this.password);
    this.logService.getUserByEmail(this.emailaddress, userresult => {
      //this.currentuser = userresult;
    });

    //this.logService.username = this.emailaddress; }
    //console.log(this.currentuser);
    //this.logService.currentuser = this.currentuser;

    console.log('hey check this out', this.logService.currentuser);
    this.route.navigateByUrl('/user/login');
  }
}
