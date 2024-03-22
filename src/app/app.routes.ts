import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ChatComponent } from './pages/chat/chat.component';
import { GroupsComponent } from './components/groups/groups.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'chat', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: SignupComponent},

    {path: 'welcome', component: WelcomeComponent,canActivate:[authGuard]},
    {path: 'chat', component: ChatComponent,canActivate:[authGuard]},
    {path: 'groups', component: GroupsComponent,canActivate:[authGuard]},

];
