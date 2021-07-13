import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
/** signUp component*/
export class SignUpComponent {
  /** signUp ctor */
  constructor() {
  }

  OnSubmit() {
    alert("clicked Submit")
  }
}
