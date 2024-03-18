import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { OneUserComponent } from '../one-user/one-user.component';
import { FormsModule } from '@angular/forms';
import { SearchfilterPipe } from '../../../Pipe/searchfilter.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-panel',
  standalone: true,
  providers: [UsersService],
  templateUrl: './users-panel.component.html',
  styleUrl: './users-panel.component.css',
  imports: [OneUserComponent, HttpClientModule, FormsModule, SearchfilterPipe],
})
export class UsersPanelComponent implements OnInit {
  users: any;
  searchText = '';

  constructor(private Uservice: UsersService, private router: Router) {}
  ngOnInit() {
    const token = localStorage.getItem('token');
    this.Uservice.getUsers(token).subscribe({
      next: (data) => {
        // console.log(data);
        this.users = data.body;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ////-------logout----------------------------
  logOut() {
    localStorage.clear();
    // navigate to login page
    this.router.navigateByUrl('/login');
  }
}
