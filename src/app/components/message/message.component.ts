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

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log( changes['messageToShow'].currentValue);
  }
}
