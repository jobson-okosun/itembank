import { map, mergeMap } from 'rxjs/operators';
import { Account } from './model/account.model';
import { SignUp } from './sign-up/model/sign-up';
import { environment } from './../../environments/environment';
import { ResourceCreated } from './../shared/model/resource-created';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignIn } from './sign-in/model/sign-in';
import { Role } from '../shared/enum/role';
import { UserService } from '../shared/user.service';
import { IResourceCreated } from '../pages/scheduler/models/resource-created';
import { SecureStorageService } from '../services/secure-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private secureStorage: SecureStorageService
  ) {}

  registerOrganization(signupModel: SignUp): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/register`,
      signupModel
    );
  }

  login(signInModel: SignIn): Observable<Account> {
    const data =
      `username=${encodeURIComponent(signInModel.username)}` +
      `&password=${encodeURIComponent(signInModel.password)}` +
      //`&remember-me=${credentials.rememberMe ? 'true' : 'false'}` +
      '&submit=Login';

    // console.log(data);

    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    return this.http
      .post(`${environment.developmentIP}/authentication`, data, {
        headers,
        responseType: 'json',
        withCredentials: true,
      })
      .pipe(mergeMap(() => this.getLoggedInAccount()));
  }

  authorizeItembank(data: any): Observable<any> {
    return this.http.post<any>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/auth/authorize_item_bank`, //examalpha/api/v1/sch_mon_grd/auth/login,
      data,
      { withCredentials: true }
    );
  }

  checkLogin() {}

  schedulerLogin(signInModel: SignIn): Observable<Account> {
    /* const data =
      `username=${encodeURIComponent(signInModel.username)}` +
      `&password=${encodeURIComponent(signInModel.password)}` +
      //`&remember-me=${credentials.rememberMe ? 'true' : 'false'}` +
      '&submit=Login'; */

    const data = {
      username: signInModel.username,
      password: signInModel.password,
    };
    // console.log(data);

    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json' //'application/x-www-form-urlencoded'
    );

    return this.http.post<Account>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/auth/authorize_item_bank`, //examalpha/api/v1/sch_mon_grd/auth/login,
      data,
      { headers, withCredentials: true }
    );

    //.pipe(mergeMap(() => this.getLoggedInAccount()));
  }

  getLoggedInAccount(): Observable<Account> {
    return this.http
      .get<Account>(`${environment.developmentIP}/authentication/account`, {
        withCredentials: true,
      })
      .pipe(
        map((value) => {
          value.authority = Role[value.authorities[0]];

          this.userService.setCurrentUser(value);
          this.secureStorage.setItem(environment.secureStorageId, value);
          return value;
        })
      );
  }

  storeUserAccountDetails(user: any): Observable<any> {
    this.userService.setCurrentUser(user);
    return user;
  }

  userLogin(signInModel: SignIn): Observable<Account> {
    return this.login(signInModel).pipe(
      mergeMap(() => this.getLoggedInAccount())
    );
  }

  logoutUser(): Observable<any> {
    // console.log('logged out!');
    return this.http.get<any>(`${environment.developmentIP}/logout`, {
      withCredentials: true,
    });
  }

  getSchedulerRefreshToken(): Observable<any> {
    return this.http.get(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/auth_token/auth_refresh/refresh-token`,
      { withCredentials: true }
    );
  }

  doPasswordReset(email: string): Observable<IResourceCreated> {
    return this.http.post<IResourceCreated>(
      `${environment.developmentIP}/account/reset_password`,
      { email }
    );
  }

  setNewPassword(payload): Observable<IResourceCreated> {
    return this.http.post<IResourceCreated>(
      `${environment.developmentIP}/account/reset_password/new-password`,
      payload
    );
  }
}
