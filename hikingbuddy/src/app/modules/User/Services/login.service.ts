import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPayload } from '../../../models/LoginPayload';
import { Principal } from '../../../models/Principal';
import { Observable } from 'rxjs';
import { RegisterPayload } from '../../../models/RegisterPayload';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  submit(payload:LoginPayload): Observable<Principal>
  {
      let params = new HttpParams();

      params = params.set("username", payload.username.toString());
      params = params.set("password", payload.password.toString());

     return this.http.get<Principal>("http://localhost:8080/hikingbuddy/api/auth/login", {
          params: params
     });
  }
}
