import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import {
  ICandidateAutoSave,
  ICandidateLoginDTO,
  ICandidateLoginResponse,
} from "../models/candidate";
import { Observable } from "rxjs";
import { ResourceCreated } from "../models/resource-created";

@Injectable({
  providedIn: "root",
})
export class CandidateAuthService {
  constructor(private http: HttpClient) {}

  doLogin(payload: ICandidateLoginDTO): Observable<ICandidateLoginResponse> {
    return this.http.post<ICandidateLoginResponse>(
      `${environment.developmentIP}/auth/candidate_login`,
      payload
    );
  }

  refreshToken(): Observable<any> {
    return this.http.get<any>(
      `${environment.developmentIP}/candidate/candidate_auth_token/auth_refresh_candidate/refresh_token_candidate`,
      { withCredentials: true }
    );
  }
}
