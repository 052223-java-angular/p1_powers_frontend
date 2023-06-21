import { Injectable } from '@angular/core';
import { Principal } from '../models/Principal';

@Injectable({
  providedIn: 'root'
})
export class PrincipalServiceService {

  principal!: Principal;
  /*constructor(id:String, username:String, token:String, role:String) {
    this.principal.id = id;
    this.principal.username = username;
    this.principal.token = token;
    this.principal.role = role;
   }*/

   getPrincipal() : Principal
   {
      return this.principal;
   }

   setPrincipal(id:String, username:String, token:String, role:String) : void
   {
      this.principal.id = id;
      this.principal.username = username;
      this.principal.token = token;
      this.principal.role = role;
   }

  
}
