import {Authenticate} from '@angular-redux/data-models';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (private httpClient: HttpClient) { }

  login(authenticate: Authenticate): Observable<any> {
    return this.httpClient.post('http://localhost:3000/login', authenticate);
  }
}
