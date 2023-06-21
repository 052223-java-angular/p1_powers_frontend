import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPayload } from '../../../models/LoginPayload';
import { Principal } from '../../../models/Principal';
import { Observable } from 'rxjs';
import { RegisterPayload } from '../../../models/RegisterPayload';
import { Auth } from 'src/app/models/Auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  submit(payload:LoginPayload): Observable<Principal>
  {
      return this.http.post<Auth>("http://localhost:8080/hikingbuddy/api/auth/login", payload);
     
  }


}
