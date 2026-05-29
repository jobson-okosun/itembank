import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardCards } from './model/dashboard-cards';
import { environment } from 'src/environments/environment';
import { DashboardGraph } from './model/dashboard-graph';
import { PassageGraph } from './model/passage-graph';
import { TagsGraph } from './model/tags-graph';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

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
}
