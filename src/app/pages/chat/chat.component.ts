import { Component } from '@angular/core';
import { UsersPanelComponent } from '../../components/users-panel/users-panel.component';
import { SelectedUserComponent } from '../../components/selected-user/selected-user.component';
import { ChatBoxComponent } from '../../components/chat-box/chat-box.component';
import { InputFieldComponent } from '../../components/input-field/input-field.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [UsersPanelComponent,SelectedUserComponent,ChatBoxComponent,InputFieldComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  chatId :any;
  reciveChatId(_chatId: any){
    this.chatId = _chatId;
    console.log(this.chatId);
  }
}
