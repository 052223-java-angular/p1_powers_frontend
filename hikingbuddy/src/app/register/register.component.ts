
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { RegisterService } from '../services/register.service';
import { Observable } from 'rxjs';
import { RegisterPayload } from '../models/RegisterPayload';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

@Injectable()
export class RegisterComponent {

  formGroup! : FormGroup;

  

  constructor(private fb: FormBuilder, private rg : RegisterService){}

  ngOnInit()
  {
    this.formGroup = this.fb.group({
       username:['', Validators.required],
       password: ['', Validators.required],
       confirmPassword: ['', Validators.required]
    })
  }

  submitForm()
  {
      let payload:RegisterPayload = new RegisterPayload(
        this.formGroup.controls['username'].value,
        this.formGroup.controls['password'].value,
        this.formGroup.controls['confirmPassword'].value
      );
      this.rg.submit(payload).subscribe({
        next: value => {
          console.log("Form submitted")
        },
        error: error => {
          console.log("Form nut submitted");
          console.log(error);
        }
      });
      

      
  }



 

}




