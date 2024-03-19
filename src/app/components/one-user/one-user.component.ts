import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-user',
  standalone: true,
  imports: [],
  templateUrl: './one-user.component.html',
  styleUrl: './one-user.component.css'
})
export class OneUserComponent {
 @Input() oneUser:any;
 constructor(private router:Router){
 }

 selectUser(){
    console.log(this.oneUser);
  this.router.navigateByUrl("/chat");
 }
}
