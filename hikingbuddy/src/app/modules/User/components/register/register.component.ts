
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Observable } from 'rxjs';
import { RegisterPayload } from '../../../../models/RegisterPayload';
import { Auth } from 'src/app/models/Auth';
import { UserService } from '../../Services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

@Injectable()
export class RegisterComponent {

  formGroup! : FormGroup;

  

  constructor(private fb: FormBuilder, private user: UserService, private toastr: ToastrService, private router: Router){}

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
      this.user.register(payload).subscribe(
        (resp) =>{
          const auth: Auth= {...resp};
          localStorage.setItem('auth', JSON.stringify(auth));
          this.toastr.success('Login Successful');
          this.router.navigate(['/login']);
      },
      (error) =>{
        console.log(error.message);
        this.formGroup.reset();
        this.toastr.error(error.error.message);
      }
      );
      

      
  }



 

}




