import { Component, Input } from '@angular/core';
import { Trail } from 'src/app/models/Trail';
import { TrailInfoServiceService } from '../../../Services/trail-info-service.service';
import { TrailInfo } from 'src/app/models/TrailInfo';

@Component({
  selector: 'app-trail-info',
  templateUrl: './trail-info.component.html',
  styleUrls: ['./trail-info.component.css']
})
export class TrailInfoComponent {
  trail! : Trail;

  constructor(private trailInfoService: TrailInfoServiceService){}

  @Input() 
   name!:String;

  ngOnInit()
  {
     this.trailInfoService.getTrails(this.name).subscribe(
        resp =>{
          this.trail = resp;
        },
        error => {
          console.log(error.message);
        }
     );
  }

  

}
