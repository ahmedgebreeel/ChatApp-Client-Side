import { Component } from '@angular/core';
import { UsersPanelComponent } from '../../components/users-panel/users-panel.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [UsersPanelComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

}
