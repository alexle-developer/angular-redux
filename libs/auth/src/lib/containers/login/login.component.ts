import {Authenticate} from '@angular-redux/data-models';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

// Change the ChangeDetectionStrategy to OnPush

@Component({
  selector: 'angular-redux-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  constructor (private authService: AuthService) { }

  // Note the .subscribe() is needed to make sure the observer is registered
  // with the observable returned from our AuthService.
  login(authenticate: Authenticate): void {
    this.authService.login(authenticate).subscribe(x => console.log(x));
  }

}


// Now that we are using the presentation and container component pattern and
// we know that we only need to check the child components for changes if a
// DOM event or a @Input or @Output passes new primitives or reference values.
// In this way we can tell Angular not check the whole component tree which
// can cause performance issues in larger applications.;
