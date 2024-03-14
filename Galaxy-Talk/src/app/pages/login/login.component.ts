import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule , NgClass ,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  changeType:boolean=true;
  visible :boolean=true;

 // #region for  loginValidation
  loginValidation = new FormGroup({
    email : new FormControl("" , Validators.required),
    password : new FormControl("" , [Validators.required , Validators.minLength(8)])
  })

  get EmailValid (){
    return this.loginValidation.controls['email'].valid;
  }

  get PassValid (){

    return this.loginValidation.controls['password'].valid;
  }

  Add(){
    if(this.loginValidation.valid){
      console.log("login successfully");
      
    }else{
      alert("AGAIN")
    }
  }

  // #endregion

  ///--------------------- showPassword---------
  showPassword(){
    this.changeType= !this.changeType;
    this.visible = ! this.visible ;
}
}
