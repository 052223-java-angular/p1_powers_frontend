import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable()
export class HomeComponent {
  

  constructor(private http: HttpClient){}

  search(text:String)
  {
      this.http.get("http://localhost:8080/hikingbuddy/api/")
  }
  

    

}
