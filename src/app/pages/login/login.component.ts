
import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {Router , RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,

  imports: [RouterModule,ReactiveFormsModule , NgClass ,CommonModule],
  providers:[LoginService],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  changeType:boolean=true;
  visible :boolean=true;

  constructor(private LService: LoginService , private router :Router) {}

  ///--------------------- showPassword---------
    showPassword(){
      this.changeType= !this.changeType;
      this.visible = ! this.visible ;
  }


 // #region for  loginValidation
  loginValidation = new FormGroup({
    email : new FormControl("" , [Validators.required,Validators.email]),
    password : new FormControl("" , [Validators.required , Validators.minLength(8)])
  })

  get EmailValid (){
    return this.loginValidation.controls['email'].valid;
  }

  get PassValid (){

    return this.loginValidation.controls['password'].valid;
  }

  Add(email: any, password: any){
    if(this.loginValidation.valid){
      console.log("login successfully");

    }else{
      alert("AGAIN")
    }
    this.LService.login(email, password).subscribe({
      next:(data)=>{
        console.log(data);

        this.router.navigate(['/welcome'])


      }
  });
  }

  // #endregion



}
