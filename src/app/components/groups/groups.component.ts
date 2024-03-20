import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { SearchfilterPipe } from '../../../Pipe/searchfilter.pipe';
import { UsersService } from '../../service/users.service';
import { OneUserComponent } from '../one-user/one-user.component';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [ OneUserComponent,HttpClientModule, FormsModule , RouterModule,  SearchfilterPipe],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent {
  groups : any;
  searchText = '';
  loggedUsername: any;

  constructor(private Uservice: UsersService, private router: Router) {}
  ngOnInit() {
    this.loggedUsername = localStorage.getItem('username');
    this.Uservice.getGroups().subscribe({
      next: (data) => {
        console.log(data);
        this.groups = data.body;
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
