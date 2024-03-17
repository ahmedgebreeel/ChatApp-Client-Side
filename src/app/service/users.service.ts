import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private client: HttpClient) { }
  private URL = "http://localhost:8000/user";
  getUsers(){
    return this.client.get(this.URL);
  }
}
