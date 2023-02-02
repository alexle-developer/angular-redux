
// @angular-redux/data-models = ["libs/data-models/src/index.ts"]
import {Authenticate} from '@angular-redux/data-models';
import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'angular-redux-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})

export class LoginFormComponent {
  // make sure the caller component uses submitEvent as parameter
  @Output() submitEvent = new EventEmitter<Authenticate>();

  login(authenticate: Authenticate) {
    this.submitEvent.emit(authenticate);
  }
}
