import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
    formGroup! : FormGroup

    constructor(private fb : FormBuilder){}

    ngOnInit()
    {
       this.formGroup = this.fb.group(
        [
          
        ]
       );
    }
}
