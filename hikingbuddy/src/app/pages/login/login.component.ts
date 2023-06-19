import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formGroup! : FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit()
  {
    this.formGroup = this.fb.group({
      username: this.formGroup.controls['Username'].value,
      password: this.formGroup.controls['Password'].value
    })
  }

  submitForm()
  {
      
  }

}
