import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { AuthenticationService } from "../authentication/authentication.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (
          error.status === 401 &&
          error.error &&
          error.error.message.toLowerCase() ===
            "you are not logged in, please log in" &&
          request.url.includes("examalpha/api/v1/sch_mon_grd/schedule")
        ) {
          // Attempt to refresh the token
          return this.authService.getSchedulerRefreshToken().pipe(
            switchMap((response: any) => {
              // If token refresh is successful, retry the original request
              const clonedRequest = request
                .clone
                //   {
                //   setHeaders: {
                //     Authorization: `Bearer ${response.access_token}`,
                //   },
                // }
                ();
              return next.handle(clonedRequest);
            }),
            catchError((refreshError: HttpErrorResponse) => {
              // Handle token refresh error

              return throwError(refreshError);
            })
          );
        } else {
          // For other errors
          if(!['/sign-in', '/account/sign-up', '/reset-password'].includes(location.pathname)) {
            // location.href = '/'
          }
          return throwError(error);
        }
      })
    );
  }
}
