import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './service/auth-interceptor.service';



@Component({
  selector: 'app-root',
  standalone: true,
imports: [RouterOutlet , LoginComponent, SignupComponent ,ReactiveFormsModule,HttpClientModule],
providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
