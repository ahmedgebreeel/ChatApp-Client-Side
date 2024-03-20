import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VisibilityServiceService {

  private visibleSubject = new BehaviorSubject<boolean>(true);
  public visible$ = this.visibleSubject.asObservable();

  constructor() { }

  setVisible(isVisible: boolean): void {
    this.visibleSubject.next(isVisible);
  }

  toggleVisible(): void {
    this.visibleSubject.next(!this.visibleSubject.value);
  }


}


