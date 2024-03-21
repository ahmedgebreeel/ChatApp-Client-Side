import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-one-user',
  standalone: true,
  imports: [],
  templateUrl: './one-user.component.html',
  styleUrl: './one-user.component.css'
})
export class OneUserComponent {
 @Input() oneUser:any;
 constructor(private router:Router, private dataService: DataService){
 }

 selectUser(){
    console.log(this.oneUser);
    sessionStorage.setItem('selectedUserName', this.oneUser.name);
    sessionStorage.setItem('selectedUserId', this.oneUser._id);
    /// calling dataService to send userId
  this.dataService.sendData(this.oneUser);
  this.router.navigateByUrl("/chat");
 }
}
