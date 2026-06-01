import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ExamPreviewData, SectionPreviewData } from '../models/exam-preview-data';

@Injectable({
  providedIn: 'root',
})
export class ExamPreviewService {
  constructor(private http: HttpClient) {}

  fetchExamPreview(assessmentId: string): Observable<ExamPreviewData> {
    return this.http.get<ExamPreviewData>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/preview`,
      { withCredentials: true }
    );
  }

  fetchAssesmentPreviewDetails(assessmentId: string): Observable<ExamPreviewData> {
    return this.http.get<any>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/preview_assessment`,
      { withCredentials: true }
    );
  }

  fetchAssessmentSectionPreview(
    assessmentId: string,
    sectionId: string
  ): Observable<SectionPreviewData> {
    return this.http.get<SectionPreviewData>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/preview_section/${sectionId}`,
      { withCredentials: true }
    );
  }
}
