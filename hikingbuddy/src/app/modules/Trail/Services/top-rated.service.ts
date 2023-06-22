import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TopRatedComponent } from '../Components/top-rated/top-rated.component';
import { Trail } from 'src/app/models/Trail';

@Injectable({
  providedIn: 'root'
})
export class TopRatedService {

  constructor(private http: HttpClient) { }

 getTrails(): Observable<Trail[]>
 {
    return this.http.get<Trail[]>("http://localhost:8080/hikingbuddy/api/ratings/getTop");
 }
}
