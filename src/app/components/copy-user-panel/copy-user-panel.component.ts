import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { OneUserComponent } from '../one-user/one-user.component';
import { FormsModule } from '@angular/forms';
import { SearchfilterPipe } from '../../../Pipe/searchfilter.pipe';
import { Router, RouterModule } from '@angular/router';
import { VisibilityServiceService } from '../../visibility-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-copy-panel',
  standalone: true,
  providers: [UsersService],
  templateUrl: './copy-user-panel.component.html',
  styleUrl: './copy-user-panel.component.css',
  imports: [OneUserComponent, HttpClientModule, FormsModule , RouterModule,  SearchfilterPipe],
})
export class CopyUsersPanelComponent implements OnInit {
  users : any;
  searchText = '';
  loggedUsername: any;
  isVisible = true;
  private subscription: Subscription;

  constructor(private Uservice: UsersService, private router: Router, private Vs: VisibilityServiceService) {

    this.subscription = this.Vs.visible$.subscribe(state => {
      this.isVisible = state;
    });
  }
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
