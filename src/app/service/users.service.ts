import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private client: HttpClient) { }
  private URL = "http://localhost:8000/user";
  getUsers():Observable<HttpResponse<any>>{
  
    return this.client.get(this.URL, {observe:"response"});
  }
}
