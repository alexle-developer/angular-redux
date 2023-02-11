import {Authenticate, User} from '@angular-redux/data-models';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // To initialize the BehaviorSubject with null value
  // you must define the type as User | null.  Otherwise,
  // you will get the 'null is not assignable to parameter of type User'
  private userSubject$ = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject$.asObservable();

  constructor (private httpClient: HttpClient) { }

  // The name of the collection is important, and has to be named 'register', 'signup', or 'users'.
  // When you are making a POST request, json-server - auth will look for these to route correctly.
  // collection locates in the db.json

  // add types to auth service - replace unknown with User
  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient
      .post<User>('http://localhost:3000/login', authenticate)
      .pipe(
        tap((user: User) => this.userSubject$.next(user))
      );
  }
}
