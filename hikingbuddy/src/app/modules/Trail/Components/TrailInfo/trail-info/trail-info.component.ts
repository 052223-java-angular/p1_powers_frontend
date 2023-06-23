import { Component, Input } from '@angular/core';
import { Trail } from 'src/app/models/Trail';
import { TrailInfoServiceService } from '../../../Services/trail-info-service.service';
import { TrailInfo } from 'src/app/models/TrailInfo';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trail-info',
  templateUrl: './trail-info.component.html',
  styleUrls: ['./trail-info.component.css']
})
export class TrailInfoComponent {
  trail! : TrailInfo;

  

  constructor(private trailInfoService: TrailInfoServiceService, private router: Router, private toastr: ToastrService){}

  @Input() 
   name!:String;

  ngOnInit()
  {
     console.log("Name in trail-info" + this.name);
     this.trailInfoService.getTrails(this.name).subscribe(
      resp => {
        const trail:TrailInfo = {...resp};
        this.trailInfoService.setTrailInfo(trail);
        this.trail = this.trailInfoService.getTrailInfo();
        
        

      },
      error => {
        console.log("In error");
        console.log(error.message);
        this.router.navigate(['/notfound']);
      }
     );
  }

 



}
