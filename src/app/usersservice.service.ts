import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UsersserviceService {
  private baseUrl="https://portfolio-carlos-c-olivares.koyeb.app/user/users/login";
  constructor(private httpClient: HttpClient) { }

  loginUser(user: User): Observable<object> {
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`, user);
  }
}
