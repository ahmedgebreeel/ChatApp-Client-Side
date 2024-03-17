import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
  })

export class signupServices{


constructor(private http: HttpClient) { }
private signupUrl = 'http://localhost:8000/user/signup';
signup(name: string, email: string, password: string) {
    console.log(name,email,password);
    
    return this.http.post(this.signupUrl, { name, email, password });
  }
}