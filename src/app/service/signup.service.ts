import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
  })

  export class signupServices{


    constructor(private http: HttpClient) { }
    // private signupUrl = 'http://localhost:8000/user/signup';
    private signupUrl = 'https://chatapp-server-side.onrender.com/user/signup';

    signup(name: string, email: string, password: string) : Observable <HttpResponse<any> >{
        // console.log(name,email,password);
        
        return this.http.post(this.signupUrl, { name, email, password },{observe:'response'});
      }
    }