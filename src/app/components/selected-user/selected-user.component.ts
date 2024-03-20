import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-selected-user',
  standalone: true,
  imports: [],
  templateUrl: './selected-user.component.html',
  styleUrl: './selected-user.component.css'
})
export class SelectedUserComponent implements OnChanges{
  @Input() selectedUser: string = '';
  constructor(private dataService: DataService){
  //  this.loggedUsername = localStorage.getItem('username');
  this.dataService.data$.subscribe({
    next: (data)=>{
      console.log(data);
      this.selectedUser = data.name;
      console.log(this.selectedUser);
    }
}); 
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedUser']) {
      console.log('Selected user changed:', this.selectedUser);
      // You can perform any additional actions here when selectedUser changes
    }
  }
  
  ngOnInit(){
   
}
    
}
