import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trail } from 'src/app/models/Trail';

@Injectable({
  providedIn: 'root'
})
export class TrailInfoServiceService {

  
  constructor(private http: HttpClient) { }

  getTrails(name:String): Observable<Trail>
  {
    return this.http.post<Trail>("http://localhost:8080/hikingbuddy/api/trails/getByName", name);
  }
}
