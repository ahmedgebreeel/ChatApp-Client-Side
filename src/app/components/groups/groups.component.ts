import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { SearchfilterPipe } from '../../../Pipe/searchfilter.pipe';
import { UsersService } from '../../service/users.service';
import { OneUserComponent } from '../one-user/one-user.component';
import { Subscription } from 'rxjs';
import { VisibilityServiceService } from '../../visibility-service.service';

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
  isVisible = true;
  private subscription: Subscription;

  constructor(private Uservice: UsersService, private router: Router, private Vs: VisibilityServiceService) {

    this.subscription = this.Vs.visible$.subscribe(state => {
      this.isVisible = state;
    });
  }

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
  visiblity(){
    this.Vs.toggleVisible()
  }

}
