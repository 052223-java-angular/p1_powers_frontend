import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';
import { Trail } from 'src/app/models/Trail';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable()
export class HomeComponent {
  
  name! : String
  clicked : Boolean = false

  constructor(private http: HttpClient, private router: Router){}

  search(text:String) 
  {
    this.name = text;
    //console.log(this.name);
  }

 
  
  
  

    

}
