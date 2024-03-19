import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [HttpClientModule],
  providers:[MessageService, DataService],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent implements OnInit{
  constructor(private messService : MessageService, private dataService: DataService){
  }
  ngOnInit() {
    // ///calling dataService to get chatId from chat-box component
    // this.dataService.anotherData$.subscribe({
    //   next : (data)=>{
    //     console.log(data);
    //   }
    // })
  }
  addMessage(message:any){
    console.log(message);
    // this.messService.sendMessage(message,)
  }
}
