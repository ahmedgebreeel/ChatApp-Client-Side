import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ChatComponent } from './pages/chat/chat.component';
import { GroupsComponent } from './components/groups/groups.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: SignupComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'chat', component: ChatComponent},
    {path: 'groups', component: GroupsComponent},
];
