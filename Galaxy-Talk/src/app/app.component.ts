import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SignupComponent } from '../pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
imports: [RouterOutlet , LoginComponent, SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
