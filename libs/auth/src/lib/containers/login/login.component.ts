import {ChangeDetectionStrategy, Component} from '@angular/core';

// Change the ChangeDetectionStrategy to OnPush

@Component({
  selector: 'angular-redux-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  login(authenticate: unknown) {
    console.log(authenticate);
  }

}


// Now that we are using the presentation and container component pattern and
// we know that we only need to check the child components for changes if a
// DOM event or a @Input or @Output passes new primitives or reference values.
// In this way we can tell Angular not check the whole component tree which
// can cause performance issues in larger applications.;
