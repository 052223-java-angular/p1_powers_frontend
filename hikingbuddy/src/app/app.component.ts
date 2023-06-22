import { Component } from '@angular/core';
import { HomeComponent } from './shared/components/home/home.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hikingbuddy';

  constructor(private home: HomeComponent, private router: Router){}

  ngOnInit()
  {
     this.router.navigate(['/home']);
  }
}
