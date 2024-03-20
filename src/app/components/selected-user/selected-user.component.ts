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
  @Input() selectedUser: any;
  constructor(private dataService: DataService){
    if (sessionStorage.getItem('selectedUserName')){
      this.selectedUser = sessionStorage.getItem('selectedUserName');
      console.log(this.selectedUser);
    }
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
