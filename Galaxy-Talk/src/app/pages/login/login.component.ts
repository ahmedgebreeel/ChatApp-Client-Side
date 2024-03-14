import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
<<<<<<< Updated upstream
import { RouterModule } from '@angular/router';
=======
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
>>>>>>> Stashed changes

@Component({
  selector: 'app-login',
  standalone: true,
<<<<<<< Updated upstream
  imports: [RouterModule],
=======
  imports: [ReactiveFormsModule , NgClass ,CommonModule],
>>>>>>> Stashed changes
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  changeType:boolean=true;
  visible :boolean=true;

  loginValidation = new FormGroup({
    email : new FormControl(" " , Validators.required),
    password : new FormControl("" , [Validators.required , Validators.minLength(8)])
  })
email: any;

  get EmailValid (){
    return this.loginValidation.controls['email'].valid;
  }

  get PassValid (){
    return this.loginValidation.controls['password'].valid;
  }

  Add(){
    if(this.loginValidation.valid){
    }else{
      alert("AGAIN")
    }
  }

  showPassword(){
    this.changeType= !this.changeType;
    this.visible = ! this.visible ;
}
}
