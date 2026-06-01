import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  AssessmentResultSummary,
  Participant_Result_Data_DTO,
  ParticipantSectionTranscript,
  ParticipantsParams,
  ParticipantsScoreList,
  ResultSummaryParams,
  ScoreAnalysisParams,
  ScoreAnalysisScaledScore,
  ScoreDistributionParams,
  ScoreDistributionScaledScore,
  TranscriptListParams,
} from '../pages/items/models/result';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  getAssessmentSummary(
    assessmentId: string,
    queryParams?: ResultSummaryParams
  ): Observable<AssessmentResultSummary> {
    // assessmentId = '0196a9b3-85b2-794d-8ad5-a8abac57fa57';
    const centerId = '0196a9b9-9c4a-7fc0-abb8-50e93b2852bf'; // This variable is declared but not used.
    const url = `/examalpha/api/v1/sch_mon_grd/reports/result/result_summary/${assessmentId}`;

    return this._http.get<AssessmentResultSummary>(
      environment.schedulerIP + url,
      { withCredentials: true, params: { ...queryParams } }
    );
  }

  getScoreDistribution(
    assessmentId: string,
    queryParams?: ScoreDistributionParams
  ): Observable<ScoreDistributionScaledScore> {
    // assessmentId = '0196a9b3-85b2-794d-8ad5-a8abac57fa57';
    const url = `/examalpha/api/v1/sch_mon_grd/reports/result/score_distribution/${assessmentId}`;

    return this._http.get<ScoreDistributionScaledScore>(
      environment.schedulerIP + url,
      { withCredentials: true, params: { ...queryParams } }
    );
  }

  getScoreAnalysis(
    assessmentId: string,
    queryParams?: ScoreAnalysisParams
  ): Observable<ScoreAnalysisScaledScore> {
    // assessmentId = '0196a9b3-85b2-794d-8ad5-a8abac57fa57';
    const url = `/examalpha/api/v1/sch_mon_grd/reports/result/score_analysis/${assessmentId}`;

    return this._http.get<ScoreAnalysisScaledScore>(
      environment.schedulerIP + url,
      { withCredentials: true, params: { ...queryParams } }
    );
  }

  getParticipants(
    assessmentId: string,
    queryParams?: ParticipantsParams
  ): Observable<ParticipantsScoreList> {
    // assessmentId = '0196a9b3-85b2-794d-8ad5-a8abac57fa57';
    const url = `/examalpha/api/v1/sch_mon_grd/reports/result/list_participants/${assessmentId}`;

    return this._http.get<ParticipantsScoreList>(
      environment.schedulerIP + url,
      { withCredentials: true, params: { ...queryParams } }
    );
  }

  getTranscriptParticipants(
    assessmentId: string,
    queryParams: TranscriptListParams
  ): Observable<ParticipantsScoreList> {
    // assessmentId = '0196a9b3-85b2-794d-8ad5-a8abac57fa57';
    const url = `/examalpha/api/v1/sch_mon_grd/reports/result/list_participants_transcript/${assessmentId}`;

    return this._http.get<ParticipantsScoreList>(
      environment.schedulerIP + url,
      {
        withCredentials: true,
        params: { ...queryParams },
      }
    );
  }

  getParticipantTranscript(
    assessmentId: string,
    sectionId: string,
    participantId: string
  ): Observable<ParticipantSectionTranscript[]> {
    // assessmentId = '0196a9b3-85b2-794d-8ad5-a8abac57fa57';
    const url = `/examalpha/api/v1/sch_mon_grd/reports/result/participant_transcript/assessment/${assessmentId}/section/${sectionId}/participant/${participantId}`;

    return this._http.get<ParticipantSectionTranscript[]>(
      environment.schedulerIP + url,
      { withCredentials: true }
    );
  }

  getCandidateResult(assessmentId: string, participantId: string): Observable<Participant_Result_Data_DTO> {
    // assessmentId = '0196a9b3-85b2-794d-8ad5-a8abac57fa57';
    const url = `/examalpha/api/v1/sch_mon_grd/reports/result/participant_result/assessment/${assessmentId}/participant/${ participantId }`;

    return this._http.get<Participant_Result_Data_DTO>(
      environment.schedulerIP + url,
      { withCredentials: true }
    );
  }

  
  downloadResult( assessmentId: string, queryParams?: ParticipantsParams): Promise<any> {
    const url = `/examalpha/api/v1/sch_mon_grd/reports/result/download_result/${assessmentId}`;

    // Remove pagination params if present
    if (queryParams) {
      delete queryParams.size;
      delete queryParams.page;
    }

    // Build query string
    const queryString = queryParams
      ? '?' + new URLSearchParams(queryParams as Record<string, string>).toString()
      : '';

    return fetch(environment.schedulerIP + url + queryString, {
      method: 'GET',
      credentials: 'include' 
    });
  }

  fetchTranscript(params: any): Observable<ParticipantSectionTranscript[]> {
    // assessmentId = '0196a9b3-85b2-794d-8ad5-a8abac57fa57';
    const url = `/examalpha/api/v1/sch_mon_grd/exam_server/participant_transcript/assessment/${ params.assessmentId }/section/${ params.sectionId }/participant/${ params.participantId }/o/${ params.oId }`;

    // /section_name/${ params.sectionName }

    return this._http.get<ParticipantSectionTranscript[]>(
      environment.schedulerIP + url,
      { withCredentials: true }
    );
  }

  downloadTranscript(assessmentId: string, sectionName: string, queryParams: any): Promise<any> {
    
    const url = `/examalpha/api/v1/sch_mon_grd/reports/result/download_transcript/${assessmentId}/section_name/${ sectionName }`;

    if (queryParams) {
      delete queryParams.size;
      delete queryParams.page;
    }

    const queryString = queryParams
      ? '?' + new URLSearchParams(queryParams as Record<string, string>).toString()
      : ''

    return fetch(environment.schedulerIP + url + queryString, {
      method: 'GET',
      credentials: 'include'
    });
  }
}