import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
 constructor(private http: HttpClient) {}

  private url = 'http://localhost:8000/user/login';

 login(email: string, password: string) {
    return this.http.post(this.url, { email, password });
  }


}
