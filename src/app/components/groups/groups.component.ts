import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { SearchfilterPipe } from '../../../Pipe/searchfilter.pipe';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [ HttpClientModule, FormsModule , RouterModule,  SearchfilterPipe],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent {
  users : any;
  searchText = '';
  loggedUsername: any;

  constructor(private Uservice: UsersService, private router: Router) {}
  ngOnInit() {
    this.loggedUsername = localStorage.getItem('username');
    this.Uservice.getUsers().subscribe({
      next: (data) => {
        console.log(data);
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
