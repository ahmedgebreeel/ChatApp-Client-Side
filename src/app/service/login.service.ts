import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:8000/user/login';

  login(email: string, password: string): Observable<HttpResponse<any>> {
    return this.http.post(
      this.url,
      { email, password },
      { observe: 'response' }
    );
  }
}






























// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { tap } from 'rxjs/operators'; // Corrected import statement

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {
//   constructor(private http: HttpClient) {}

//   private url = 'http://localhost:8000/user/login';

//   login(email: string, password: string) {
//     return this.http.post(this.url, { email, password }).pipe(
//       tap((response: any) => this.storeJwtToken(response.token))
//     );
//   }

//   private storeJwtToken(token: string) {
//     // Store the JWT token securely in the browser's local storage
//     localStorage.setItem('jwtToken', token);
//   }
// }
