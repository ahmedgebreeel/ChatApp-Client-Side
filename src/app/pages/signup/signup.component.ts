import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroupDirective,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { signupServices } from '../../service/signup.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
  
  FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
  ],
  providers: [signupServices],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private signupService: signupServices, private router: Router, private toastr: ToastrService) {}
  // #region for signup form
  regValidation = new FormGroup({
    name: new FormControl('salma', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('salma@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  get nameValid() {
    return this.regValidation.controls['name'].valid;
  }
  get emailValid() {
    return this.regValidation.controls['email'].valid;
  }
  get passwordValid() {
    return this.regValidation.controls['password'].valid;
  }

  Add() {
    console.log(this.regValidation);
  }

  // #endregion

  signup(name: any, email: any, password: any): void {
    
    // console.log(name,email,password);

    this.signupService.signup(name, email, password).subscribe(
      (data) => {
         console.log('Signup successful:', data.body);
         localStorage.setItem('token', data.body.token)
         localStorage.setItem('username',data.body.userName)
          this.router.navigate(['/chat']);
          this.toastr.success('You logged successfully');

       },
      
         (error) => {
           console.error('Signup failed:', error);
          this.toastr.error(error.error.message);

      }
    );
  }
}
