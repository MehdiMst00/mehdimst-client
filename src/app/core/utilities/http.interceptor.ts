import { HttpRequest, HttpEvent, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomainName } from './path-tools';

export function httpInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const clonedRequest = req.clone({
    url: DomainName + req.url,
  });

  return next(clonedRequest);
}
