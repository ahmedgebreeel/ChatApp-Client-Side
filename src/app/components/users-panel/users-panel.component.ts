import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { OneUserComponent } from '../one-user/one-user.component';
import { FormsModule } from '@angular/forms';
import { SearchfilterPipe } from "../../../Pipe/searchfilter.pipe";

@Component({
    selector: 'app-users-panel',
    standalone: true,
    providers: [UsersService],
    templateUrl: './users-panel.component.html',
    styleUrl: './users-panel.component.css',
    imports: [OneUserComponent, HttpClientModule, FormsModule, SearchfilterPipe]
})
export class UsersPanelComponent implements OnInit {
  users: any;
  searchText= ''

  constructor(private Uservice : UsersService){}
  ngOnInit(){
   this.Uservice.getUsers().subscribe({
    next: (data)=>{
      console.log(data);
      this.users = data;
    },
    error: (err)=>{
      console.log(err);
    }
   });
  }

  logOut(){
    localStorage.clear();

    // make a req and navigat to login page
  }

}
