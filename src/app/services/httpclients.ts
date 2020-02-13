import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class HttpClientServices {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('First Request Data', request);

    request = request.clone({
      setHeaders: {
        Accept: 'Deepak kumar'
      }
    });
    console.log('After Interceptor Request Data', request);
    return next.handle(request);
  }


};