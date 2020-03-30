import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        if (this.authService.isAuthenticated()) {
            request = request.clone({
                setHeaders: {
                    authorization: `Bearer ${this.authService.getCurrentUser()}`
                }
            });
        }

        return next.handle(request);
    }
}