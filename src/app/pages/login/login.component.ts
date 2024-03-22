import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { HttpClientModule } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';

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
  providers: [LoginService],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  changeType: boolean = true;
  visible: boolean = true;

  constructor(
    private LService: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ///--------------------- showPassword---------
  showPassword() {
    this.changeType = !this.changeType;
    this.visible = !this.visible;
  }

  // #region for  loginValidation
  loginValidation = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  get EmailValid() {
    return this.loginValidation.controls['email'].valid;
  }

  get PassValid() {
    return this.loginValidation.controls['password'].valid;
  }

  Add(email: any, password: any, checked:any) {
    if (this.loginValidation.valid) {
      

      this.LService.login(email, password).subscribe({
        next: (data) => {
          console.log(data.body);
          if(checked){
            localStorage.setItem('token', data.body.token);
          }else{
            sessionStorage.setItem('token', data.body.token);
          }
          localStorage.setItem('username',data.body.userName)
          this.router.navigate(['/welcome']);
          this.toastr.success('You logged successfully');
        },
        error: (error) => {
          console.log(error.error);
          this.toastr.error(error.error.message);
         
        },
      });

    } 
    else {
      this.toastr.error('Your email or password is wrong');
      
    }

  }

  // #endregion
}
