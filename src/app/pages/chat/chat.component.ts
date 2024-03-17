import { Component } from '@angular/core';
import { UsersPanelComponent } from '../../components/users-panel/users-panel.component';
import { SelectedUserComponent } from '../../components/selected-user/selected-user.component';
import { ChatBoxComponent } from '../../components/chat-box/chat-box.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [UsersPanelComponent,SelectedUserComponent,ChatBoxComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

}
