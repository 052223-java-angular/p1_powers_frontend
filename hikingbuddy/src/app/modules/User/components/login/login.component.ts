import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPayload } from 'src/app/models/LoginPayload';
import { Principal } from 'src/app/models/Principal';
import { LoginService } from 'src/app/modules/User/Services/login.service';
import { PrincipalServiceService } from 'src/app/modules/User/Services/principal-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formGroup! : FormGroup;
  



  constructor(private fb: FormBuilder, private login: LoginService, private principalService: PrincipalServiceService){}

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

      this.login.submit(payload).subscribe
      ({
        next: value =>{
           this.principalService.setPrincipal(value.id, value.username, value.token, value.role);
           console.log("Logged in!");
        },
        error: error => {
          console.log("Login not processed");
          console.log(error);
        }
      })
  }

}
