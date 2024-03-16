
import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroupDirective } from '@angular/forms';
import { CommonModule } from '@angular/common';


import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';



@Component({
  selector: 'app-signup',
  standalone: true,

  imports: [FormsModule,ReactiveFormsModule,CommonModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent  {


regValidation = new FormGroup({
  name: new FormControl("salma" , [Validators.required,Validators.minLength(3)],),
  email:new FormControl("salma@gmail.com",[Validators.required,Validators.email]),
  password:new FormControl("",[Validators.required,Validators.minLength(5)])
})

get nameValid(){
  return this.regValidation.controls["name"].valid;
}
get emailValid(){
  return this.regValidation.controls["email"].valid;
}
get passwordValid()
{
  return this.regValidation.controls["password"].valid;

}

Add(){
  console.log(this.regValidation);
  
}

}

