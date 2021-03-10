import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import AuthService from '../core/services/auth-service/auth-service.service';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       console.log('INTERCEPTOR');
       const token = this.authService.getAuthToken();
       let newHeaders = req.headers;
       console.log(token);
       if (token) {
          // If we have a token, we append it to our new headers
          newHeaders = newHeaders.append('authtoken', token);
          console.log(newHeaders);
       }
       const authReq = req.clone({headers: newHeaders});
       return next.handle(authReq).pipe(retry(2));
    }
 }
