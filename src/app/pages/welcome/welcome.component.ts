import { Component } from '@angular/core';
import { UsersPanelComponent } from '../../components/users-panel/users-panel.component';
import { CopyUsersPanelComponent } from '../../components/copy-user-panel/copy-user-panel.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [UsersPanelComponent,CopyUsersPanelComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

}
