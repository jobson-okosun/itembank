import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ItemAnalysisResponse,
  BehaviourAnalysisCandidate,
  BehaviourAnalysisAssessment,
  IntegrityFlagsResponse,
  BehaviourEventsResponse,
  ItemEventsResponse
} from '../models/analytics';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: HttpClient) {}

  private buildQuery(params?: { [key: string]: any }): string {
    if (!params) return "";

    const query = Object.entries(params)
      .filter(([_, value]) => value !== undefined && value !== null && value !== '')
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join("&");

    return query ? `?${query}` : "";
  }

  // 1. Item analysis
  getItemAnalysis(assessmentId: string | undefined, page = 1, size = 50, subjectId?: string, examGroupId?: string, sectionId?: string): Observable<ItemAnalysisResponse> {
    const query = this.buildQuery({
      assessment_id: assessmentId,
      exam_group_id: examGroupId,
      subject_id: subjectId,
      page,
      size
    });

    return this.http.get<ItemAnalysisResponse>(`${environment.developmentIP}/sch_mon_grd/item_analysis${query}`, { withCredentials: true });
  }

  // 2. Candidate behaviour profile
  getCandidateBehaviourProfile(assessmentId: string, participantId: string): Observable<BehaviourAnalysisCandidate> {
    const query = this.buildQuery({
      assessment_id: assessmentId,
      participant_id: participantId
    });

    return this.http.get<BehaviourAnalysisCandidate>(`${environment.developmentIP}/sch_mon_grd/behaviour_analysis/candidate${query}`, { withCredentials: true });
  }

  // 3. Assessment cohort behaviour summary
  getAssessmentCohortBehaviour(assessmentId?: string, examGroupId?: string): Observable<BehaviourAnalysisAssessment> {
    const query = this.buildQuery({
      assessment_id: assessmentId,
      exam_group_id: examGroupId
    });

    return this.http.get<BehaviourAnalysisAssessment>(`${environment.developmentIP}/sch_mon_grd/behaviour_analysis/assessment${query}`, { withCredentials: true });
  }

  // 4. High-risk candidates report
  getIntegrityFlags(assessmentId: string | undefined, page = 1, size = 50, centerId?: string, minIntegrityScore?: number, examGroupId?: string): Observable<IntegrityFlagsResponse> {
    const query = this.buildQuery({
      assessment_id: assessmentId,
      exam_group_id: examGroupId,
      center_id: centerId,
      min_integrity_score: minIntegrityScore,
      page,
      size
    });

    return this.http.get<IntegrityFlagsResponse>(`${environment.developmentIP}/sch_mon_grd/behaviour_analysis/integrity_flags${query}`, { withCredentials: true });
  }

  // 5. Candidate event timeline
  getCandidateEvents(assessmentId: string, participantId: string, page = 1, size = 100, eventType?: string): Observable<BehaviourEventsResponse> {
    const query = this.buildQuery({
      assessment_id: assessmentId,
      participant_id: participantId,
      event_type: eventType,
      page,
      size
    });

    return this.http.get<BehaviourEventsResponse>(`${environment.developmentIP}/sch_mon_grd/behaviour_analysis/events${query}`, { withCredentials: true });
  }

  // 6. Item events analysis
  getItemEvents(assessmentId: string | undefined, page = 1, size = 50, sectionId?: string, examGroupId?: string): Observable<ItemEventsResponse> {
    const query = this.buildQuery({
      assessment_id: assessmentId,
      exam_group_id: examGroupId,
      section_id: sectionId,
      page,
      size
    });

    return this.http.get<ItemEventsResponse>(`${environment.developmentIP}/sch_mon_grd/behaviour_analysis/item_events${query}`, { withCredentials: true });
  }
}
