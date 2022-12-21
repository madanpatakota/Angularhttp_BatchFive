import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let userHeaders =  new HttpHeaders({
      Password: 'QWERT$',
    });

    let userParams = new HttpParams().set("userName","Madan");

    let cloneAPI = request.clone({
      headers: userHeaders,
      params : userParams,
    })

    return next.handle(cloneAPI);
  }
}
