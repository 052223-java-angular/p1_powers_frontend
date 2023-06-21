import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPayload } from '../../../models/LoginPayload';
import { Principal } from '../../../models/Principal';
import { Observable } from 'rxjs';
<<<<<<< HEAD:hikingbuddy/src/app/services/login.service.ts
import { RegisterPayload } from '../models/RegisterPayload';
import { Auth } from '../models/Auth';
=======
import { RegisterPayload } from '../../../models/RegisterPayload';
>>>>>>> c707dfa3478e5a42890e22e32b109bd0aa85ea8c:hikingbuddy/src/app/modules/User/Services/login.service.ts

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
