import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { OneUserComponent } from '../one-user/one-user.component';

@Component({
  selector: 'app-users-panel',
  standalone: true,
  imports: [OneUserComponent , HttpClientModule],
  providers: [UsersService],
  templateUrl: './users-panel.component.html',
  styleUrl: './users-panel.component.css'
})
export class UsersPanelComponent implements OnInit {
  constructor(private Uservice : UsersService){}
  ngOnInit(){
   this.Uservice.getUsers().subscribe({
    next: (data)=>{
      console.log(data);
    },
    error: (err)=>{
      console.log(err);
    }
   });
  }

}
