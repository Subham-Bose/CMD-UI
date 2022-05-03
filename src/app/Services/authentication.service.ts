import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Model/user';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthenticationService {
  readonly rootUrl = 'http://localhost:44301/';
  constructor(private http: HttpClient) {}

  user: any = { Name: '' };

  userAuthentication(userName, password) {
    var data =
      'username=' + userName + '&password=' + password + '&grant_type=password';
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/x-www-urlencoded',
      'No-Auth': 'True',
    });
    return this.http.post(this.rootUrl + '/token', data, {
      headers: reqHeader,
    });
  }
  async getUserClaims() {
    const user = await firstValueFrom(
      this.http.get(this.rootUrl + '/api/GetUser')
    );
    return user;
  }

  setUserType(type) {
    return this.http.post(this.rootUrl + 'api/User/UserType/' + type, type);
  }

  getUserDetails() {
    return this.user;
  }
}
