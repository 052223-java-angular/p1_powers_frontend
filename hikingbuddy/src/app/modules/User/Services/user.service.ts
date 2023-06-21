import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/models/Auth';
import { LoginPayload } from 'src/app/models/LoginPayload';
import { RegisterPayload } from 'src/app/models/RegisterPayload';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(payload : LoginPayload): Observable<Auth>
  {
    return this.http.post<Auth>("http://localhost:8080/hikingbuddy/api/auth/login", payload);
  }

  register(payload : RegisterPayload): Observable<Auth>
  {
    return this.http.post<Auth>("http://localhost:8080/hikingbuddy/api/register", payload);
  }
}
