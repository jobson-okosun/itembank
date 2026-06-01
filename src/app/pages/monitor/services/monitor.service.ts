import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AllParticipantPage, AllParticipantParams, AttemptedBucketParams, AttemptedBucketParticipantsPage, AttendanceParams, AttendanceParticipantsPage, BucketParticipantsPage, BvmParticipantParams, BvmParticipantsPage, DownloadedCentersPage, DurationBucketParams, EventParticipantParams, EventParticipantsPage, ExamStatusMonitorFromDb, MalpracticeCodeSummaryDTO, MalpracticeParticipantParams, MalpracticeParticipantsPage, MonitorExamDetailsDTO, PageParams, ParticipantBvmStatusDTO, ParticipantDurationBucketDTO, ParticipantEventSummaryDTO, ParticipantRescheduleStatusDTO, ParticipantStatusCountDTO, participantSummaryFilter, RescheduleParticipantParams, RescheduleParticipantsPage, RescheduleStatusParams, TechnicalIssueCategoryListPage, TechnicalIssueCategoryParams, TechnicalIssueCategorySummaryDTO, TechnicalIssueCentersPage, TechnicalReportCenterDTO, TechnicalReportCentersPage, TechnicalReportParams } from "../model/types";
import { environment } from "src/environments/environment";
import { AssessmentCenterListPage, AssessmentCenterListParams } from "../../assessment/model/assessment-list";

@Injectable({ providedIn: 'root' })
export class MonitorService {
    baseURL = environment.developmentIP + '/sch_mon_grd/reports/monitor'
    constructor(private _http: HttpClient) {}

    private buildQuery(params?: { [key: string]: any}): string {
        if (!params) return "";

        const query = Object.entries(params)
            .filter(([_, value]) => value !== undefined && value !== null && value !== '')
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join("&");

        return query ? `?${query}` : "";
    }


    fetchAssessmentOverview(assessmentId: string): Observable<MonitorExamDetailsDTO> {
        const url = this.baseURL + `/exam_details/assessment/${ assessmentId }`;

        return this._http.get<MonitorExamDetailsDTO>(url, { withCredentials: true})
    }

    fetchExamStatus(assessmentId: string): Observable<ExamStatusMonitorFromDb> {
        const url = this.baseURL + `/exam_status/assessment/${ assessmentId }`;

        return this._http.get<ExamStatusMonitorFromDb>(url, { withCredentials: true})
    }

    fetchCenterReport(assessmentId: string, type: string, params?: PageParams): Observable<DownloadedCentersPage> {
        const url = this.baseURL + `/list_centers_in_report/assessment/${ assessmentId }/report_type/${ type }` + this.buildQuery(params);

        return this._http.get<DownloadedCentersPage>(url, { withCredentials: true})
    }

    fetchCenterReportWihStatus(assessmentId: string, status: string, params?: PageParams): Observable<DownloadedCentersPage> {
        const url = this.baseURL + `/list_centers_with_status/assessment/${ assessmentId }/status/${ status }` + this.buildQuery(params);

        return this._http.get<DownloadedCentersPage>(url, { withCredentials: true})
    }

    fetchCentersWithTechnicalIssues(assessmentId: string, params?: PageParams): Observable<TechnicalIssueCentersPage> {
        const url = this.baseURL + `/list_centers_with_technical_issues/assessment/${ assessmentId }` + this.buildQuery(params);

        return this._http.get<TechnicalIssueCentersPage>(url, { withCredentials: true})
    }
    
    fetchParticipantsSummaryByAttendance(assessmentId: string, params?: participantSummaryFilter): Observable<ParticipantStatusCountDTO> {
        const url = this.baseURL + `/participants_status_count/assessment/${ assessmentId }` + this.buildQuery(params);

        return this._http.get<ParticipantStatusCountDTO>(url, { withCredentials: true})
    }

    fetchParticipantsByAttendanceStatus(assessmentId: string, status: string, params?: AttendanceParams): Observable<AttendanceParticipantsPage> {
        const url = this.baseURL + `/list_attendance_participants/assessment/${ assessmentId }/status/${ status }` + this.buildQuery(params);

        return this._http.get<AttendanceParticipantsPage>(url, { withCredentials: true})
    }

    fetchParticipantsByDuration(assessmentId: string, params?: RescheduleStatusParams): Observable<ParticipantDurationBucketDTO> {
        const url = this.baseURL + `/participant_duration_bucket/assessment/${ assessmentId }` + this.buildQuery(params);

        return this._http.get<ParticipantDurationBucketDTO>(url, { withCredentials: true})
    }

    fetchParticipantsWithDuration(assessmentId: string, params?: DurationBucketParams): Observable<BucketParticipantsPage> {
        const url = this.baseURL + `/list_duration_bucket_participants/assessment/${ assessmentId }` + this.buildQuery(params);

        return this._http.get<BucketParticipantsPage>(url, { withCredentials: true})
    }

    fetchParticipantsByAttempts(assessmentId: string, params?: RescheduleStatusParams): Observable<ParticipantDurationBucketDTO> {
        const url = this.baseURL + `/participant_attempted_percent_bucket/assessment/${ assessmentId }` + this.buildQuery(params);

        return this._http.get<ParticipantDurationBucketDTO>(url, { withCredentials: true})
    }

    fetchParticipantsWithAttempts(assessmentId: string, params?: AttemptedBucketParams): Observable<AttemptedBucketParticipantsPage> {
        const url = this.baseURL + `/list_attempted_percent_bucket_participants/assessment/${ assessmentId }` + this.buildQuery(params);

        return this._http.get<AttemptedBucketParticipantsPage>(url, { withCredentials: true})
    }

    fetchParticipantsByBiometrics(assessmentId: string, params?: RescheduleStatusParams): Observable<ParticipantBvmStatusDTO> {
        const url = this.baseURL + `/participant_bvm_status_summary/assessment/${ assessmentId }` + this.buildQuery(params);

        return this._http.get<ParticipantBvmStatusDTO>(url, { withCredentials: true})
    }

    fetchParticipantsWithBiometrics(assessmentId: string, params?: BvmParticipantParams): Observable<BvmParticipantsPage> {
        const url = this.baseURL + `/list_bvm_status_participants/assessment/${ assessmentId }` + this.buildQuery(params);

        return this._http.get<BvmParticipantsPage>(url, { withCredentials: true})
    }

    fetchParticipantsByReschedule(assessmentId: string, params?: RescheduleStatusParams): Observable<ParticipantRescheduleStatusDTO> {
        const url = this.baseURL + `/participant_reschedule_status/assessment/${ assessmentId }` + this.buildQuery(params);

        return this._http.get<ParticipantRescheduleStatusDTO>(url, { withCredentials: true})
    }

    fetchParticipantsWithReschedule(assessmentId: string, params?: RescheduleParticipantParams): Observable<RescheduleParticipantsPage> {
        const url = this.baseURL + `/list_reschedule_status_participants/assessment/${ assessmentId }` + this.buildQuery(params);

        return this._http.get<RescheduleParticipantsPage>(url, { withCredentials: true})
    }

    fetchParticipantsByMalpractice(assessmentId: string, params?: RescheduleStatusParams): Observable<MalpracticeCodeSummaryDTO> {
        const url = this.baseURL + `/participant_malpractice_code_summary/assessment/${ assessmentId }` + this.buildQuery(params);

        return this._http.get<MalpracticeCodeSummaryDTO>(url, { withCredentials: true})
    }

    fetchParticipantsWithMalpracticeCode(assessmentId: string, params?: MalpracticeParticipantParams): Observable<MalpracticeParticipantsPage> {
        const url = this.baseURL + `/list_malpractice_code_participants/assessment/${ assessmentId }` + this.buildQuery(params);

        return this._http.get<MalpracticeParticipantsPage>(url, { withCredentials: true})
    }

    fetchParticipantsByEvents(assessmentId: string, params?: RescheduleStatusParams): Observable<ParticipantEventSummaryDTO> {
        const url = this.baseURL + `/participant_event_summary/assessment/${ assessmentId }` + this.buildQuery(params);

        return this._http.get<ParticipantEventSummaryDTO>(url, { withCredentials: true})
    }

    fetchParticipantsWithEvents(assessmentId: string, params?: EventParticipantParams): Observable<EventParticipantsPage> {
        const url = this.baseURL + `/list_event_participants/assessment/${ assessmentId }` + this.buildQuery(params);

        return this._http.get<EventParticipantsPage>(url, { withCredentials: true})
    }

    fetchTechnicalIssuesCategories(assessmentId: string, params?: TechnicalIssueCategoryParams): Observable<TechnicalIssueCategorySummaryDTO> {
        const url = this.baseURL + `/technical_issue_category_summary/assessment/${ assessmentId }` + this.buildQuery(params);

        return this._http.get<TechnicalIssueCategorySummaryDTO>(url, { withCredentials: true})
    }

    fetchCentersTechnicalReport(assessmentId: string, category: string, params: PageParams): Observable<TechnicalIssueCategoryListPage> {
        const url = this.baseURL + `/list_technical_issue_category_centers/assessment/${ assessmentId }/category/${ category }` + this.buildQuery(params);

        return this._http.get<TechnicalIssueCategoryListPage>(url, { withCredentials: true})
    }

    fetchTechnicalReportCenters(assessmentId: string, params?: TechnicalReportParams): Observable<TechnicalReportCentersPage> {
        const url = this.baseURL + `/list_technical_report_centers/assessment/${ assessmentId }` + this.buildQuery(params);

        return this._http.get<TechnicalReportCentersPage>(url, { withCredentials: true})
    }

    fetchCenterTechnicalReport(assessmentId: string, centerId: string): Observable<TechnicalReportCenterDTO> {
        const url = this.baseURL + `/fetch_technical_report/assessment/${ assessmentId }/center/${ centerId }`

        return this._http.get<TechnicalReportCenterDTO>(url, { withCredentials: true})
    }

    fetchCenters(assessmentId: string, params: AssessmentCenterListParams): Observable<AssessmentCenterListPage> {
        const url = this.baseURL + `/list_centers_in_assessment/assessment/${ assessmentId }` + this.buildQuery(params);

        return this._http.get<AssessmentCenterListPage>(url, { withCredentials: true})
    }

    downloadMonitoringCenterReport(assessmentId: string, reportType: string): Observable<HttpResponse<Blob>> {
    const url = this.baseURL + `/download_centers_in_report/assessment/${assessmentId}/report_type/${ reportType }`;

    return this._http.get(url, { withCredentials: true, responseType: 'blob', observe: 'response' });
    }

    downloadReport(assessmentId: string, status: string): Observable<HttpResponse<Blob>> {
    const url = this.baseURL + `/download_centers_with_status/assessment/${assessmentId}/status/${status}`;

    return this._http.get(url, { withCredentials: true, responseType: 'blob', observe: 'response' });
    }

    downloadEventsReport(assessmentId: string, event: string, centerId: string): Observable<HttpResponse<Blob>> {
    const url = this.baseURL + `/download_event_participants/assessment/${assessmentId}/event/${event}${ centerId ? '?center_id=' + centerId : ''}`;

    return this._http.get(url, { withCredentials: true, responseType: 'blob', observe: 'response' });
    }

    downloadBVMReport(assessmentId: string, params?: BvmParticipantParams): Observable<HttpResponse<Blob>> {
    const url = this.baseURL + `/download_bvm_participants/assessment/${assessmentId}` + this.buildQuery(params);

    return this._http.get(url, { withCredentials: true, responseType: 'blob', observe: 'response' });
    }

    downloadRescheduleReport(assessmentId: string, status: string, centerId: string): Observable<HttpResponse<Blob>> {
    const url = this.baseURL + `/download_reschedule_participants/assessment/${assessmentId}/reschedule_status/${status}${ centerId ? '?center_id=' + centerId : ''}`;

    return this._http.get(url, { withCredentials: true, responseType: 'blob', observe: 'response' });
    }

    downloadMalpracticeReport(assessmentId: string, code: string, centerId: string): Observable<HttpResponse<Blob>> {
    const url = this.baseURL + `/download_malpractice_participants/assessment/${assessmentId}/malpractice_code/${code}${ centerId ? '?center_id=' + centerId : ''}`;

    return this._http.get(url, { withCredentials: true, responseType: 'blob', observe: 'response' });
    }

    downloadTechnicalIssuesReport(assessmentId: string, category: string): Observable<HttpResponse<Blob>> {
    const url = this.baseURL + `/download_technical_issues/assessment/${assessmentId}/category/${category}`;

    return this._http.get(url, { withCredentials: true, responseType: 'blob', observe: 'response' });
    }

    downloadTechnicalReportCenters(assessmentId: string, params?: TechnicalReportParams): Observable<HttpResponse<Blob>> {
    const url = this.baseURL + `/download_technical_report_centers/assessment/${assessmentId}`  + this.buildQuery(params);

    return this._http.get(url, { withCredentials: true, responseType: 'blob', observe: 'response' });
    }

    fetchParticipantsByAll(assessmentId: string, params?: AllParticipantParams): Observable<AllParticipantPage> {
    const url = this.baseURL + `/list_participants_in_assessment/assessment/${assessmentId}`  + this.buildQuery(params);

    return this._http.get<AllParticipantPage>(url, { withCredentials: true});
    }

    downloadAllParticipantReport(assessmentId: string, params?: AllParticipantParams): Observable<HttpResponse<Blob>> {
    const url = this.baseURL + `/download_participants_in_assessment/assessment/${assessmentId}`  + this.buildQuery(params);

    return this._http.get(url, { withCredentials: true, responseType: 'blob', observe: 'response' });
    }
}