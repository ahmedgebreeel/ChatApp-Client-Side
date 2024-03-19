import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private client: HttpClient) { }
  private URL = "http://localhost:8000/";

  getMessages (userId:string){
    return this.client.post(this.URL + "chat" , {userId});
  }

  sendMessage(content:any, chatId:string){
    this.client.post(this.URL + "message" , {content,chatId});
  }

}
