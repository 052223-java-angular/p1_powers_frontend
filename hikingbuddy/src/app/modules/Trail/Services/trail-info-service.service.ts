import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trail } from 'src/app/models/Trail';
import { TrailInfo } from 'src/app/models/TrailInfo';

@Injectable({
  providedIn: 'root'
})
export class TrailInfoServiceService {


  constructor(private http: HttpClient) { }
  
  trailInfo! : TrailInfo

  getTrails(name:String): Observable<TrailInfo>
  {
    
    return this.http.post<TrailInfo>("http://localhost:8080/hikingbuddy/api/trails/getByName", {"trail_name" : name});
  }

  setTrailInfo(trailInfo: TrailInfo)
  {
    this.trailInfo = trailInfo;
  }

  getTrailInfo() : TrailInfo
  {
    return this.trailInfo;
  }
}
