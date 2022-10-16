import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomainName } from './PathTools';

@Injectable({
  providedIn: 'root',
})
export class SiteInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    const clonedRequest = request.clone({
      url: DomainName + request.url,
    });

    return next.handle(clonedRequest);
  }
}
