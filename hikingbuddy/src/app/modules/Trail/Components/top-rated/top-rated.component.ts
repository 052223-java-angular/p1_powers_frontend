import { Component } from '@angular/core';
import { TopRatedService } from '../../Services/top-rated.service';
import { Trail } from '../../../../models/Trail';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent {
   trails!: Trail[];

   constructor(private topratedservice: TopRatedService){}

   ngOnInit()
   {
      this.topratedservice.getTrails().subscribe(res => {
        this.trails = res;
      });
   }

   

  

}
