// import { HttpInterceptorFn } from '@angular/common/http';

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   debugger;
//   const token = localStorage.getItem('token');
//   console.log(token);

//   //clone the request and set headers
// const clonedReq = req.clone({
//   setHeaders : {
//     Authorization: `Bearer ${token}`
//   }
// });
//   return next(clonedReq);
// };

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class authInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // console.log("Intercepting Requests")
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    //   //clone the request and set headers
      const clonedReq = request.clone({
        setHeaders : {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(clonedReq);
      }
}
