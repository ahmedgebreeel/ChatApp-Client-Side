import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MainChat1Component } from './pages/main-chat1/main-chat1/main-chat1.component';
import { MainChat2Component } from './pages/main-chat2/main-chat2/main-chat2.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: SignupComponent},
    {path: 'main-chat1', component: MainChat1Component},
    {path: 'main-chat2', component: MainChat2Component},

];
