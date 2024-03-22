import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private client: HttpClient) { }
  // private URL = "http://localhost:8000/";
  private URL = "https://chatapp-server-side.onrender.com/";


  getMessages (userId:string){
    return this.client.post(this.URL + "chat" , {userId});
  }

  sendMessage(content:any, chatId:string){
    return this.client.post(this.URL + "message" , {content,chatId});
  }

}
