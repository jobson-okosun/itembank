import { RenameSubjectModel } from './all-subjects/all-subjects.component';
import { ResourceCreated } from 'src/app/shared/model/resource-created';
import { Observable } from 'rxjs';
import { RenameTopicModel } from './subject/subject.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SubjectAnalysis } from './models/subject-analysis';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}

  renameTopic(
    item: RenameTopicModel,
    subjectId: string,
    topicId: string
  ): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/admin/subjects/${subjectId}/topic/${topicId}`,
      item,
      { withCredentials: true }
    );
  }

  renameSubject(subject: RenameSubjectModel): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/admin/subjects/${subject.subjectId}/name`,
      subject,
      { withCredentials: true }
    );
  }

  renameSubtopic(
    subtopic: any,
    subjectId: string,
    topicId: string,
    subtopicId
  ): Observable<any> {
    return this.http.put<any>(
      `${environment.developmentIP}/itembank/admin/subjects/${subjectId}/topic/${topicId}/subtopic/${subtopicId}`,
      { withCredentials: true }
    );
  }

  getSubjectAnalysis(subjectId: string): Observable<SubjectAnalysis> {
    return this.http.get<SubjectAnalysis>(
      `${environment.developmentIP}/itembank/admin/subjects/${subjectId}/analysis`,
      {
        withCredentials: true,
      }
    );
  }
}
