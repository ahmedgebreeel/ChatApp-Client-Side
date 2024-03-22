
import { MessageComponent } from '../message/message.component';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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
   userId : any;
   messages : any;
  @Output() myEvent = new EventEmitter();
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
 
  constructor(private messService : MessageService, private dataService: DataService){
    if (sessionStorage.getItem('selectedUserId')){
      this.userId = sessionStorage.getItem('selectedUserId');
      console.log(this.userId);
    }
  }
  ngOnInit(){

    setInterval(() =>{
      if (this.scrollContainer) {
        this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
      }
    },100);
   
    if(this.userId){
      setInterval(() => {
        // console.log("Interval");
        
        this.messService.getMessages(this.userId).subscribe({
         next: (data: any)=>{
           console.log(data);
           this.messages = data.message;
           const chatId = data.chatId;
           console.log(chatId);
           this.myEvent.emit(chatId);

          
           
           // //calling dataService to send chatId to inputFiled Component
           // this.dataService.sendAnotherData(chatId);
  
         },
         error: (err: any)=>{
           console.log(err);
           
         }
       })

      }, 1000);
       ///calling getMessage service to get messages
      
    }
   ///calling dataService to get userId from one-user component
   this.dataService.data$.subscribe({
    next: (data)=>{
      console.log(data);
      this.userId = data._id;
      console.log(this.userId);

      ///calling getMessage service to get messages
      this.messService.getMessages(this.userId).subscribe({
        next: (data: any)=>{
          console.log(data);
          this.messages = data.message;
          const chatId = data.chatId;
          console.log(chatId);
          this.myEvent.emit(chatId);

          
          
          // //calling dataService to send chatId to inputFiled Component
          // this.dataService.sendAnotherData(chatId);

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
