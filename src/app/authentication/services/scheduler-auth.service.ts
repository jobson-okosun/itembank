import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ILogin, IUser } from "../model/user.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SchedulerAuthService {
  constructor(private http: HttpClient) {}

  doLogin(credentials: ILogin): Observable<IUser> {
    return this.http.post<IUser>(
      `${environment.developmentIP}/examalpha/api/v1/auth/login`,
      credentials,{withCredentials:true}
    );
  }
}
