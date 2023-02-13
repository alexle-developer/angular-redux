import {AuthService} from '@angular-redux/auth';
import {User} from '@angular-redux/data-models';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'angular-redux-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {

  // Add logic to subscribe to User Subject in the Auth Service
  user$!: Observable<User>;

  constructor (private authService: AuthService) { }

  ngOnInit() {
    this.user$ = this.authService.user$;
  }
}
