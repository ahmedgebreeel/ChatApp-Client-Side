import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../service/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  providers:[MessageService, DataService],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent implements OnInit{
 @Input() currentChId:any;
 message: string = ''; // Variable to store the input field value
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
  addMessage() {
    console.log(this.message);
    console.log(this.currentChId);
    this.messService.sendMessage(this.message, this.currentChId).subscribe({
      next: (data) => {
        console.log(data);
        // Refresh the page after sending the message
        // window.location.reload();
        this.message = '';
      },
      error: (err)=>{console.log(err); }
    })

  }
}
