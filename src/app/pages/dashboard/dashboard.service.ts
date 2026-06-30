import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardCards } from './model/dashboard-cards';
import { environment } from 'src/environments/environment';
import { DashboardGraph } from './model/dashboard-graph';
import { PassageGraph } from './model/passage-graph';
import { TagsGraph } from './model/tags-graph';
import { CurrentExamMonitorGraph } from './main/main.component';
import {
  ExamsForTheDayResponse,
  UpcomingExamsResponse,
  AIInfractionSummaryDTO,
  ExamCalendarDTO,
  ProctorWeeklyCalendarDTO
} from './model/dashboard-types';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) { }

  fetchDashboardData(): Observable<DashboardCards> {
    return this.http.get<DashboardCards>(
      `${environment.developmentIP}/itembank/dashboard`,
      { withCredentials: true }
    );
  }

  fetchGraphInformationForSingleSubject(
    subjectId: string
  ): Observable<DashboardGraph> {
    return this.http.get<DashboardGraph>(
      `${environment.developmentIP}/itembank/dashboard/${subjectId}/graph/question_moderation`,
      { withCredentials: true }
    );
  }

  fetchGraphInformationForCurrentExamMonitorFromSingleSubject(
    subjectId: string
  ): Observable<CurrentExamMonitorGraph> {
    return this.http.get<CurrentExamMonitorGraph>(
      `${environment.developmentIP}/itembank/dashboard/${subjectId}/graph/current_exam_monitor`,
      { withCredentials: true }
    );
  }

  fetchTagsGraph(subjectId: string): Observable<TagsGraph[]> {
    return this.http.get<TagsGraph[]>(
      `${environment.developmentIP}/itembank/dashboard/${subjectId}/graph/tag`,
      { withCredentials: true }
    );
  }

  fetchPassageGraph(subjectId: string): Observable<PassageGraph> {
    return this.http.get<PassageGraph>(
      `${environment.developmentIP}/itembank/dashboard/${subjectId}/graph/passage`,
      { withCredentials: true }
    );
  }

  // --- NEW MONITORING DASHBOARD APIS (MOCKED) ---

  fetchExamsForTheDay(params?: any): Observable<ExamsForTheDayResponse> {
    return of({
      total: 24,
      page: 1,
      size: 20,
      total_candidates_scheduled: 1200,
      total_candidates_present: 1050,
      total_candidates_absent: 100,
      total_candidates_online: 50,
      day_total_centers: 45,
      day_total_centers_downloaded: 40,
      day_total_centers_uploaded: 35,
      day_total_centers_downloaded_passport: 42,
      content: [
        {
          id: '1', exam_name: 'Mathematics 101', delivery_method: 'COMPUTER_BASED',
          total_centers: 10, total_participants: 500, total_participants_present: 450, total_participants_absent: 50, total_participants_online: 0,
          total_centers_downloaded_exam: 10, total_centers_uploaded_exam: 8, total_centers_downloaded_passport: 10
        },
        {
          id: '2', exam_name: 'Physics Advanced', delivery_method: 'LIVE_PROCTORING',
          total_centers: 5, total_participants: 300, total_participants_present: 280, total_participants_absent: 20, total_participants_online: 280,
          total_centers_downloaded_exam: 5, total_centers_uploaded_exam: 5, total_centers_downloaded_passport: 5
        }
      ]
    });
  }

  fetchUpcomingExams(params?: any): Observable<UpcomingExamsResponse> {
    return of({
      total: 3, page: 1, size: 20,
      content: [
        { id: '1', exam_name: 'Chemistry Final', delivery_method: 'COMPUTER_BASED', exam_status: 'PUBLISHED', exam_start_date: new Date(Date.now() + 86400000).toISOString(), exam_end_date: new Date(Date.now() + 172800000).toISOString(), total_centers: 12, total_participants: 800, total_proctors: 24 },
        { id: '2', exam_name: 'Biology Midterm', delivery_method: 'PAPER_BASED', exam_status: 'DRAFT', exam_start_date: new Date(Date.now() + 86400000 * 3).toISOString(), exam_end_date: new Date(Date.now() + 86400000 * 4).toISOString(), total_centers: 8, total_participants: 400, total_proctors: 16 },
        { id: '3', exam_name: 'History Quiz', delivery_method: 'LIVE_PROCTORING', exam_status: 'PUBLISHED', exam_start_date: new Date(Date.now() + 86400000 * 5).toISOString(), exam_end_date: new Date(Date.now() + 86400000 * 6).toISOString(), total_centers: 0, total_participants: 150, total_proctors: 5 }
      ]
    });
  }

  fetchAIInfractionsForTheDay(params?: any): Observable<AIInfractionSummaryDTO[]> {
    return of([
      { infraction_type: 'LOOKING_AWAY', total_candidates: 45, total_candidates_with_max_strikes_reached: 12 },
      { infraction_type: 'MULTIPLE_FACES', total_candidates: 15, total_candidates_with_max_strikes_reached: 5 },
      { infraction_type: 'NO_FACE_DETECTED', total_candidates: 25, total_candidates_with_max_strikes_reached: 8 },
      { infraction_type: 'MOBILE_PHONE', total_candidates: 4, total_candidates_with_max_strikes_reached: 4 }
    ]);
  }

  fetchExamCalendar(params?: any): Observable<ExamCalendarDTO[]> {
    return of([
      { id: '1', exam_name: 'General Studies', status: 'PUBLISHED', delivery_method: 'COMPUTER_BASED', start_date: new Date(Date.now() + 86400000 * 2).toISOString(), end_date: new Date(Date.now() + 86400000 * 3).toISOString(), total_batches: 2, total_centers: 15, total_candidates: 1000, total_candidates_present: 950, total_candidates_absent: 50, total_proctors: 30, total_center_admins: 15, total_centers_downloaded: 15, total_centers_uploaded: 15, total_centers_downloaded_passport: 15, total_centers_with_technical_issues: 2, total_candidates_with_infractions: 10 },
      { id: '2', exam_name: 'Math Prep', status: 'DRAFT', delivery_method: 'LIVE_PROCTORING', start_date: new Date(Date.now() + 86400000 * 10).toISOString(), end_date: new Date(Date.now() + 86400000 * 11).toISOString(), total_batches: 1, total_centers: 0, total_candidates: 200, total_candidates_present: 0, total_candidates_absent: 0, total_proctors: 10, total_center_admins: 0, total_centers_downloaded: 0, total_centers_uploaded: 0, total_centers_downloaded_passport: 0, total_centers_with_technical_issues: 0, total_candidates_with_infractions: 0 }
    ]);
  }

  fetchProctorWeeklyCalendar(params?: any): Observable<ProctorWeeklyCalendarDTO[]> {
    return of([
      { id: '1', exam_name: 'Physics Advanced', status: 'PUBLISHED', delivery_method: 'LIVE_PROCTORING', total_participants: 300, proctor_full_name: 'Jane Doe', proctor_username: 'jane_d', batch_name: 'Morning Batch A', batch_start_time: new Date().toISOString(), batch_end_time: new Date(Date.now() + 7200000).toISOString(), total_participants_assigned: 50 },
      { id: '2', exam_name: 'Physics Advanced', status: 'PUBLISHED', delivery_method: 'LIVE_PROCTORING', total_participants: 300, proctor_full_name: 'John Smith', proctor_username: 'john_s', batch_name: 'Morning Batch B', batch_start_time: new Date().toISOString(), batch_end_time: new Date(Date.now() + 7200000).toISOString(), total_participants_assigned: 45 },
      { id: '3', exam_name: 'History Quiz', status: 'PUBLISHED', delivery_method: 'LIVE_PROCTORING', total_participants: 150, proctor_full_name: 'Mark Taylor', proctor_username: 'mark_t', batch_name: 'Afternoon Batch A', batch_start_time: new Date(Date.now() + 14400000).toISOString(), batch_end_time: new Date(Date.now() + 21600000).toISOString(), total_participants_assigned: 75 }
    ]);
  }
}
