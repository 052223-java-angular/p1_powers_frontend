import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterPayload } from '../models/RegisterPayload';
import { Auth } from '../models/Auth';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { }

  submit(payload:RegisterPayload): Observable<Auth>
  {
    console.log("In registerservice.submit()");
     return this.http.post<Auth>("http://localhost:8080/hikingbuddy/api/auth/register", payload);
  }
}
