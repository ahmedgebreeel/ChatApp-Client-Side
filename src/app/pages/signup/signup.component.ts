import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';
import { signupServices } from '../../service/signup.service';

@Component({
  selector: 'app-login',
  standalone: true,

  imports: [
    RouterModule,
    ReactiveFormsModule,
    NgClass,
    CommonModule,
    HttpClientModule,
  ],
  providers: [signupServices],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  changeType: boolean = true;
  visible: boolean = true;
password: any;
email: any;

  constructor(
    private  signupServices:signupServices,
    private router: Router,
    private toastr: ToastrService
  ) {}

  
  showPassword() {
    this.changeType = !this.changeType;
    this.visible = !this.visible;
  }

  // #region for  signupValidation
  signupValidation = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  get NameValid(){
    return this.signupValidation.controls['name'].valid;
  }

  get EmailValid() {
    return this.signupValidation.controls['email'].valid;
  }

  get PassValid() {
    return this.signupValidation.controls['password'].valid;
  }

  Add(name :any , email: any, password: any) {
    if (this.signupValidation.valid) {

      this.signupServices.signup(name,email, password).subscribe({
        next: (data) => {
          console.log(data.body);
          localStorage.setItem('token', data.body.token);
          localStorage.setItem('username',data.body.userName)
          this.router.navigate(['/chat']);
          this.toastr.success(' signup successfully');
        },
        error: (error) => {
          console.log(error.error);
          this.toastr.error(error.error.message);
          // this.toastr.error(error.message);
        },
      });

    } 
    else {
      this.toastr.error('Your name, email or password is wrong');
      
    }

  }
}
