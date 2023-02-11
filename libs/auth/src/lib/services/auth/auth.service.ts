import {Authenticate, User} from '@angular-redux/data-models';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (private httpClient: HttpClient) { }

  // The name of the collection is important, and has to be named 'register', 'signup', or 'users'.
  // When you are making a POST request, json-server - auth will look for these to route correctly.
  // collection locates in the db.json

  // add types to auth service - replace unknown with User
  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient.post<User>(
      'http://localhost:3000/login',
      authenticate);
  }
}
