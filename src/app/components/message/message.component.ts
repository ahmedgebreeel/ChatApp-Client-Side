import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnChanges {
  @Input() messageToShow: any;
  sameUser :unknown;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const messageObj = changes['messageToShow'].currentValue;
    const sender = messageObj.sender[0].name ;
    if (sender === localStorage.getItem('username')){
      this.sameUser = true;
      console.log(this.sameUser);
    }
  }
}
