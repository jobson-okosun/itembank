import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AccountRegistration, SetCredentialRequest } from "../models/account";
import { Observable } from "rxjs";
import { ResourceCreated } from "src/app/shared/model/resource-created";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  constructor(private http: HttpClient) {}

  doRegistration(payload: AccountRegistration): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/account/register`,
      payload
    );
  }

  setCredentials(payload: SetCredentialRequest): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/accounts/new-user-account/set-credentials`,
      payload
    );
  }
}
