import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private dataSubject = new Subject<any>();
data$ = this.dataSubject.asObservable();

private anotherDataSubject = new Subject<any>();
anotherData$ = this.anotherDataSubject.asObservable();

sendData(data:any){
  this.dataSubject.next(data);
}

sendAnotherData(data:any){
  this.anotherDataSubject.next(data);
}
  
}

