
import { MessageComponent } from '../message/message.component';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [HttpClientModule, MessageComponent],
  providers: [MessageService],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css'
})
export class ChatBoxComponent implements OnInit {
   userId = "";
   messages : any;
 
  constructor(private messService : MessageService, private dataService: DataService){
      
  }
  ngOnInit(){
   ///calling dataService to get userId from one-user component
   this.dataService.data$.subscribe({
    next: (data)=>{
      // console.log(data);
      this.userId = data._id;
      console.log(this.userId);

      ///calling getMessage service to get messages
      this.messService.getMessages(this.userId).subscribe({
        next: (data: any)=>{
          console.log(data);
          this.messages = data;
        },
        error: (err: any)=>{
          console.log(err);
          
        }
      })
      
    },
    error: (err)=>{console.log(err);
    }
  })
  }
 

}
