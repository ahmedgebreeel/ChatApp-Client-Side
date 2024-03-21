import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CopyUsersPanelComponent } from './components/copy-user-panel/copy-user-panel.component';



@Component({
  selector: 'app-root',
  standalone: true,
imports: [RouterOutlet , LoginComponent, SignupComponent ,ReactiveFormsModule,HttpClientModule,CopyUsersPanelComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
