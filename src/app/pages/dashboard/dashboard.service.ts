import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { DashboardCards } from "./model/dashboard-cards";
import { environment } from "src/environments/environment";
import { DashboardGraph } from "./model/dashboard-graph";
import { PassageGraph } from "./model/passage-graph";
import { TagsGraph } from "./model/tags-graph";
import { CurrentExamMonitorGraph } from "./main/main.component";
import {
  ExamsForTheDayResponse,
  UpcomingExamsResponse,
  AIInfractionSummaryDTO,
  ExamCalendarDTO,
  ProctorWeeklyCalendarDTO,
} from "./model/dashboard-types";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  fetchDashboardData(): Observable<DashboardCards> {
    return this.http.get<DashboardCards>(
      `${environment.developmentIP}/itembank/dashboard`,
      { withCredentials: true },
    );
  }

  fetchGraphInformationForSingleSubject(
    subjectId: string,
  ): Observable<DashboardGraph> {
    return this.http.get<DashboardGraph>(
      `${environment.developmentIP}/itembank/dashboard/${subjectId}/graph/question_moderation`,
      { withCredentials: true },
    );
  }

  fetchGraphInformationForCurrentExamMonitorFromSingleSubject(
    subjectId: string,
  ): Observable<CurrentExamMonitorGraph> {
    return this.http.get<CurrentExamMonitorGraph>(
      `${environment.developmentIP}/itembank/dashboard/${subjectId}/graph/current_exam_monitor`,
      { withCredentials: true },
    );
  }

  fetchTagsGraph(subjectId: string): Observable<TagsGraph[]> {
    return this.http.get<TagsGraph[]>(
      `${environment.developmentIP}/itembank/dashboard/${subjectId}/graph/tag`,
      { withCredentials: true },
    );
  }

  fetchPassageGraph(subjectId: string): Observable<PassageGraph> {
    return this.http.get<PassageGraph>(
      `${environment.developmentIP}/itembank/dashboard/${subjectId}/graph/passage`,
      { withCredentials: true },
    );
  }

  // --- NEW MONITORING DASHBOARD APIS (MOCKED) ---

  // fetchExamsForTheDay(params?: any): Observable<ExamsForTheDayResponse> {
  //   console.log("SERVICE PARAMS: ", params);
  //   return of({
  //     total: 24,
  //     page: 1,
  //     size: 20,
  //     total_candidates_scheduled: 1200,
  //     total_candidates_present: 1050,
  //     total_candidates_absent: 100,
  //     total_candidates_online: 50,
  //     day_total_centers: 45,
  //     day_total_centers_downloaded: 40,
  //     day_total_centers_uploaded: 35,
  //     day_total_centers_downloaded_passport: 42,
  //     content: [
  //       {
  //         id: "1",
  //         exam_name: "Mathematics 101",
  //         delivery_method: "COMPUTER_BASED",
  //         total_centers: 10,
  //         total_participants: 500,
  //         total_participants_present: 400,
  //         total_participants_absent: 50,
  //         total_participants_online: 0,
  //         total_centers_downloaded_exam: 10,
  //         total_centers_uploaded_exam: 8,
  //         total_centers_downloaded_passport: 10,
  //       },
  //       {
  //         id: "2",
  //         exam_name: "Physics Advanced",
  //         delivery_method: "LIVE_PROCTORING",
  //         total_centers: 5,
  //         total_participants: 300,
  //         total_participants_present: 280,
  //         total_participants_absent: 20,
  //         total_participants_online: 280,
  //         total_centers_downloaded_exam: 5,
  //         total_centers_uploaded_exam: 5,
  //         total_centers_downloaded_passport: 5,
  //       },
  //       {
  //         id: "3",
  //         exam_name: "Physics Advanced",
  //         delivery_method: "LIVE_PROCTORING",
  //         total_centers: 5,
  //         total_participants: 300,
  //         total_participants_present: 280,
  //         total_participants_absent: 20,
  //         total_participants_online: 280,
  //         total_centers_downloaded_exam: 5,
  //         total_centers_uploaded_exam: 5,
  //         total_centers_downloaded_passport: 5,
  //       },
  //       {
  //         id: "4",
  //         exam_name: "Physics Advanced",
  //         delivery_method: "LIVE_PROCTORING",
  //         total_centers: 5,
  //         total_participants: 300,
  //         total_participants_present: 280,
  //         total_participants_absent: 20,
  //         total_participants_online: 280,
  //         total_centers_downloaded_exam: 5,
  //         total_centers_uploaded_exam: 5,
  //         total_centers_downloaded_passport: 5,
  //       },
  //       {
  //         id: "5",
  //         exam_name: "Physics Advanced",
  //         delivery_method: "LIVE_PROCTORING",
  //         total_centers: 5,
  //         total_participants: 300,
  //         total_participants_present: 280,
  //         total_participants_absent: 20,
  //         total_participants_online: 280,
  //         total_centers_downloaded_exam: 5,
  //         total_centers_uploaded_exam: 5,
  //         total_centers_downloaded_passport: 5,
  //       },
  //     ],
  //   });
  // }

  fetchExamsForTheDay(params?: any): Observable<ExamsForTheDayResponse> {
    console.log("SERVICE PARAM: ", params);
    return this.http.get<ExamsForTheDayResponse>(
      `${environment.developmentIP}/sch_mon_grd/dashboard/exams_for_the_day`,
      {
        withCredentials: true,
        params: params,
      },
    );
  }

  // fetchUpcomingExams(params?: any): Observable<UpcomingExamsResponse> {
  //   console.log("SERVICE PARAMS: ", params);
  //   return of({
  //     total: 3,
  //     page: 1,
  //     size: 20,
  //     content: [
  //       {
  //         id: "1",
  //         exam_name: "Chemistry Final",
  //         delivery_method: "COMPUTER_BASED",
  //         exam_status: "PUBLISHED",
  //         exam_start_date: new Date(Date.now() + 86400000).toISOString(),
  //         exam_end_date: new Date(Date.now() + 172800000).toISOString(),
  //         total_centers: 12,
  //         total_participants: 800,
  //         total_proctors: 24,
  //       },
  //       {
  //         id: "2",
  //         exam_name: "Biology Midterm",
  //         delivery_method: "PAPER_BASED",
  //         exam_status: "DRAFT",
  //         exam_start_date: new Date(Date.now() + 86400000 * 3).toISOString(),
  //         exam_end_date: new Date(Date.now() + 86400000 * 4).toISOString(),
  //         total_centers: 8,
  //         total_participants: 400,
  //         total_proctors: 16,
  //       },
  //       {
  //         id: "3",
  //         exam_name: "History Quiz",
  //         delivery_method: "LIVE_PROCTORING",
  //         exam_status: "CLOSED",
  //         exam_start_date: new Date(Date.now() + 86400000 * 5).toISOString(),
  //         exam_end_date: new Date(Date.now() + 86400000 * 6).toISOString(),
  //         total_centers: 0,
  //         total_participants: 150,
  //         total_proctors: 5,
  //       },
  //       {
  //         id: "4",
  //         exam_name: "Animal Husbandry Quiz",
  //         delivery_method: "LIVE_PROCTORING",
  //         exam_status: "CLOSED",
  //         exam_start_date: new Date(Date.now() + 86400000 * 5).toISOString(),
  //         exam_end_date: new Date(Date.now() + 86400000 * 6).toISOString(),
  //         total_centers: 0,
  //         total_participants: 150,
  //         total_proctors: 5,
  //       },
  //     ],
  //   });
  // }

  fetchUpcomingExams(params?: any): Observable<UpcomingExamsResponse> {
    console.log("UPCOMING PARAM: ", params);
    return this.http.get<UpcomingExamsResponse>(
      `${environment.developmentIP}/sch_mon_grd/dashboard/upcoming_exams`,
      {
        withCredentials: true,
        params: params,
      },
    );
  }

  // fetchAIInfractionsForTheDay(
  //   params?: any,
  // ): Observable<AIInfractionSummaryDTO[]> {
  //   console.log("AI INFRACTION SERVICE PARAM: ", params);
  //   return of([
  //     {
  //       infraction_type: "LOOKING_AWAY",
  //       total_candidates: 45,
  //       total_candidates_with_max_strikes_reached: 12,
  //     },
  //     {
  //       infraction_type: "MULTIPLE_FACES",
  //       total_candidates: 15,
  //       total_candidates_with_max_strikes_reached: 5,
  //     },
  //     {
  //       infraction_type: "NO_FACE_DETECTED",
  //       total_candidates: 25,
  //       total_candidates_with_max_strikes_reached: 8,
  //     },
  //     {
  //       infraction_type: "MOBILE_PHONE",
  //       total_candidates: 4,
  //       total_candidates_with_max_strikes_reached: 4,
  //     },
  //   ]);
  // }

  fetchAIInfractionsForTheDay(
    params?: any,
  ): Observable<AIInfractionSummaryDTO[]> {
    console.log("AI INFRACTION SERVICE PARAM: ", params);
    return this.http.get<AIInfractionSummaryDTO[]>(
      `${environment.developmentIP}/sch_mon_grd/dashboard/ai_infractions_for_the_day`,
      {
        withCredentials: true,
        params: params,
      },
    );
  }

  // fetchExamCalendar(params?: any): Observable<ExamCalendarDTO[]> {
  //   return of([
  //     {
  //       id: "1",
  //       exam_name: "General Studies",
  //       status: "PUBLISHED",
  //       delivery_method: "COMPUTER_BASED",
  //       start_date: new Date(Date.now() + 86400000 * 2).toISOString(),
  //       end_date: new Date(Date.now() + 86400000 * 3).toISOString(),
  //       total_batches: 2,
  //       total_centers: 15,
  //       total_candidates: 1000,
  //       total_candidates_present: 950,
  //       total_candidates_absent: 50,
  //       total_proctors: 30,
  //       total_center_admins: 15,
  //       total_centers_downloaded: 15,
  //       total_centers_uploaded: 15,
  //       total_centers_downloaded_passport: 15,
  //       total_centers_with_technical_issues: 2,
  //       total_candidates_with_infractions: 10,
  //     },
  //     {
  //       id: "2",
  //       exam_name: "Math Prep",
  //       status: "DRAFT",
  //       delivery_method: "LIVE_PROCTORING",
  //       start_date: new Date(Date.now() + 86400000 * 10).toISOString(),
  //       end_date: new Date(Date.now() + 86400000 * 11).toISOString(),
  //       total_batches: 1,
  //       total_centers: 0,
  //       total_candidates: 200,
  //       total_candidates_present: 0,
  //       total_candidates_absent: 0,
  //       total_proctors: 10,
  //       total_center_admins: 0,
  //       total_centers_downloaded: 0,
  //       total_centers_uploaded: 0,
  //       total_centers_downloaded_passport: 0,
  //       total_centers_with_technical_issues: 0,
  //       total_candidates_with_infractions: 0,
  //     },
  //   ]);
  // }

  fetchExamCalendar(params?: any): Observable<ExamCalendarDTO[]> {
    console.log("CALENDER PARAM: ", params);
    return this.http.get<ExamCalendarDTO[]>(
      `${environment.developmentIP}/sch_mon_grd/dashboard/exam_calendar`,
      {
        withCredentials: true,
        params: params,
      },
    );
  }

  // fetchProctorWeeklyCalendar(
  //   params?: any,
  // ): Observable<ProctorWeeklyCalendarDTO[]> {
  //   console.log("PROCTOR WEEKLY CALENDAR SERVICE PARAM: ", params);
  //   return of([
  //     {
  //       id: "db689442-1a6b-48fe-88b5-8a5373bc48a8",
  //       exam_name: "Angular Certification",
  //       status: "SCHEDULED",
  //       delivery_method: "PROCTORING",
  //       total_participants: 25,
  //       proctor_full_name: "John Doe",
  //       proctor_username: "jdoe",
  //       batch_name: "Batch A",
  //       batch_start_time: "2026-07-02T08:00:00Z",
  //       batch_end_time: "2026-07-02T10:00:00Z",
  //       total_participants_assigned: 25,
  //     },
  //     {
  //       id: "e4c19b88-3f44-4b51-9dc2-7c8fa17df01a",
  //       exam_name: "UTME Certification",
  //       status: "IN_PROGRESS",
  //       delivery_method: "LIVE_PROCTORING",
  //       total_participants: 30,
  //       proctor_full_name: "Sarah Jenkins",
  //       proctor_username: "sjenkins",
  //       batch_name: "Batch B",
  //       batch_start_time: "2026-06-29T08:00:00Z",
  //       batch_end_time: "2026-06-29T10:00:00Z",
  //       total_participants_assigned: 30,
  //     },
  //     {
  //       id: "7fa8412e-912b-4cd7-ba48-1123498ffae3",
  //       exam_name: "AWS Cloud Practitioner",
  //       status: "COMPLETED",
  //       delivery_method: "LIVE_PROCTORING",
  //       total_participants: 15,
  //       proctor_full_name: "Marcus Vance",
  //       proctor_username: "mvance",
  //       batch_name: "Morning Group",
  //       batch_start_time: "2026-06-29T08:00:00Z",
  //       batch_end_time: "2026-06-29T10:00:00Z",
  //       total_participants_assigned: 15,
  //     },
  //     {
  //       id: "219bbfa0-ee71-4122-8ea3-df817ea2d411",
  //       exam_name: "Docker & Kubernetes Architect",
  //       status: "SCHEDULED",
  //       delivery_method: "LIVE_PROCTORING",
  //       total_participants: 40,
  //       proctor_full_name: "Elena Rostova",
  //       proctor_username: "erostova",
  //       batch_name: "Global Batch 1",
  //       batch_start_time: "2026-06-29T08:00:00Z",
  //       batch_end_time: "2026-06-29T10:00:00Z",
  //       total_participants_assigned: 38,
  //     },
  //     {
  //       id: "cb104f29-5511-47a3-b09e-647dfa92cc88",
  //       exam_name: "Senior TypeScript Developer",
  //       status: "CANCELLED",
  //       delivery_method: "LIVE_PROCTORING",
  //       total_participants: 12,
  //       proctor_full_name: "John Doe",
  //       proctor_username: "jdoe",
  //       batch_name: "Weekend Makeup",
  //       batch_start_time: "2026-06-30T08:00:00Z",
  //       batch_end_time: "2026-06-30T10:00:00Z",
  //       total_participants_assigned: 0,
  //     },
  //     {
  //       id: "fa934812-cc84-47ef-8d19-91823bcda902",
  //       exam_name: "UI/UX Principles Specialist",
  //       status: "SCHEDULED",
  //       delivery_method: "LIVE_PROCTORING",
  //       total_participants: 50,
  //       proctor_full_name: "System Automated",
  //       proctor_username: "sys_auto",
  //       batch_name: "Cohort 4",
  //       batch_start_time: "2026-07-05T00:00:00Z",
  //       batch_end_time: "2026-07-05T23:59:59Z",
  //       total_participants_assigned: 50,
  //     },
  //   ]);
  // }

  fetchProctorWeeklyCalendar(
    params?: any,
  ): Observable<ProctorWeeklyCalendarDTO[]> {
    console.log("WEEKLY PARAM: ", params);
    return this.http.get<ProctorWeeklyCalendarDTO[]>(
      `${environment.developmentIP}/sch_mon_grd/dashboard/proctor_weekly_calendar`,
      {
        withCredentials: true,
        params: params,
      },
    );
  }
}
