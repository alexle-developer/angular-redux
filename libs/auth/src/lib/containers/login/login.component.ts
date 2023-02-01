import {Component} from '@angular/core';

@Component({
  selector: 'angular-redux-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  login(authenticate: unknown) {
    console.log(authenticate);
  }

}
