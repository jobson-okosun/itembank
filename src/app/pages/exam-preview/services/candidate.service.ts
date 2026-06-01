import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, timer } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IAssessmentPreLoginData,
  ICandidateAutoSave,
  ICandidateAutoSaveResponse,
  ICandidateEndExamData,
  ICandidateLoginResponse,
  ICandidationEndExamResponse,
} from "../models/candidate";
import { ResourceCreated } from "../models/resource-created";
import { delayWhen, retryWhen, scan, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CandidateService {
  preloginData: IAssessmentPreLoginData = null;
  candidateData: ICandidateLoginResponse;
  isExamOn: boolean = false;
  isExamEnded: boolean = false;
  endExamResponse: ICandidationEndExamResponse;
  constructor(private http: HttpClient) {}

  fetchPreLoginData(): Observable<IAssessmentPreLoginData> {
    return this.http.get<IAssessmentPreLoginData>(
      `${environment.developmentIP}/candidate/fetch_prelogin_data`
    );
  }

  doAutoSave(
    assessmentId: string,
    loginValue: string,
    payload: ICandidateAutoSave
  ): Observable<ICandidateAutoSaveResponse> {
    return this.http
      .post<ICandidateAutoSaveResponse>(
        `${environment.developmentIP}/candidate/auto_save/assessment/${assessmentId}/login_value/${loginValue}`,
        payload
      )
      .pipe(
        retryWhen((errors) =>
          errors.pipe(
            scan((retryCount, error) => {
              console.error(`Retry attempt #${retryCount + 1}`, error);
              return retryCount + 1;
            }, 0),

            // Delay increases exponentially: 2s, 4s, 8s, etc.
            delayWhen((retryCount) => timer(Math.pow(2, retryCount) * 1000)),
            tap(() => console.log("Retrying..."))
          )
        )
      );
  }

  doEndExam(
    payload: ICandidateAutoSave,
    assessmentId: string,
    loginValue: string,
    timedOut: boolean
  ): Observable<ICandidationEndExamResponse> {
    const endExamPayload: ICandidateEndExamData = {
      autosave: payload,
      timed_out: timedOut,
    };
    return this.http.post<ICandidationEndExamResponse>(
      `${environment.developmentIP}/candidate/end_exam/assessment/${assessmentId}/login_value/${loginValue}`,
      endExamPayload
    );
  }

  setPreLoginData(preloginData: IAssessmentPreLoginData) {
    this.preloginData = preloginData;
  }

  getPreLoginData(): IAssessmentPreLoginData {
    return this.preloginData;
  }

  setCandidateData(candidateDate: ICandidateLoginResponse) {
    this.candidateData = candidateDate;
  }

  getCandidateData(): ICandidateLoginResponse {
    return this.candidateData;
  }

  clearPreLoginData() {
    this.preloginData = null;
  }

  clearCandidateData() {
    this.candidateData = null;
  }
}
