import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginPayload } from 'src/app/models/LoginPayload';
import { UserService } from '../../Services/user.service';
import { Auth } from 'src/app/models/Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formGroup! : FormGroup;
  
  



  constructor(private fb: FormBuilder, private userservice: UserService, private toastr: ToastrService, private router: Router){}

  ngOnInit()
  {
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    
  }

  submitForm()
  {
      const payload:LoginPayload = new LoginPayload(
        this.formGroup.controls['username'].value.trim(),
        this.formGroup.controls['password'].value.trim()
      )

      this.userservice.login(payload).subscribe
      (
        (resp) =>{
            const auth: Auth= {...resp};
            localStorage.setItem('auth', JSON.stringify(auth));
            this.toastr.success('Login Successful');
            this.router.navigate(['/home']);
        },
        (error) =>{
          console.log(error.error.message);
          this.formGroup.reset();
          this.toastr.error(error.error.message);
        }
      );
  }

}
