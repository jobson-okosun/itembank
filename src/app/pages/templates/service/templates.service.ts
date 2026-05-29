import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssessmentTemplatePage } from '../../assessment/model/assessment-template-page.model';
import { SingleAssessmentDetailTemplate } from '../../assessment/model/single-assessment-detail-template.model';
import { environment } from 'src/environments/environment';
import { ResourceCreated } from 'src/app/shared/model/resource-created';
import { TemplatesPage } from '../model/templates-page.model';
import { SingleAssessment } from '../../assessment/model/single-assessment';

@Injectable({
  providedIn: 'root',
})
export class TemplatesService {
  currentTemplate: string;

  constructor(private http: HttpClient) {}

  fetchAllAssessmentTemplates(): Observable<TemplatesPage> {
    return this.http.get<TemplatesPage>(
      `${environment.developmentIP}/itembank/assessments/assessment_template`,
      { withCredentials: true }
    );
  }

  fetchSingleAssessmentTemplate(
    assessmentTemplateId
  ): Observable<SingleAssessment> {
    return this.http.get<SingleAssessment>(
      `${environment.developmentIP}/itembank/assessments/assessment_template/${assessmentTemplateId}`,
      { withCredentials: true }
    );
  }

  deleteAssessmentTemplate(templateId: string): Observable<ResourceCreated> {
    return this.http.delete<ResourceCreated>(
      `${environment.developmentIP}/itembank/assessments/assessment_template/${templateId}`,
      { withCredentials: true }
    );
  }

  fetchAllAssessmentDetailsTemplate(): Observable<AssessmentTemplatePage> {
    return this.http.get<AssessmentTemplatePage>(
      `${environment.developmentIP}/itembank/items/template/assessmentdetails/`,
      { withCredentials: true }
    );
  }

  fetchAssessmentTemplateDetailById(
    templateId: string
  ): Observable<SingleAssessmentDetailTemplate> {
    return this.http.get<SingleAssessmentDetailTemplate>(
      `${environment.developmentIP}/itembank/items/template/assessmentdetails/${templateId}`,
      { withCredentials: true }
    );
  }

  deleteAssessmentDetailsTemplate(
    templateId: string
  ): Observable<ResourceCreated> {
    return this.http.delete(
      `${environment.developmentIP}/itembank/items/template/assessmentdetails/${templateId}`,
      { withCredentials: true }
    );
  }
}
