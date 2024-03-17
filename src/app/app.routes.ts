import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ChatComponent } from './pages/chat/chat.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { SelectedUserComponent } from './components/selected-user/selected-user.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: SignupComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'chat', component: ChatComponent},
    {path: 'input', component: InputFieldComponent},
    {path: 'how', component: ChatBoxComponent},




];
