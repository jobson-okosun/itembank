import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResourceCreated } from 'src/app/shared/model/resource-created';
import { environment } from 'src/environments/environment';
import { NewModeration } from './models/new-moderation.model';
import { ModeratedSubjects } from './models/moderated-subjects.model';

@Injectable({
  providedIn: 'root',
})
export class ModerationService {
  constructor(private http: HttpClient) {}

  fetchAllModeratedSubjects(): Observable<ModeratedSubjects[]>{
    return this.http.get<ModeratedSubjects[]>(`${environment.developmentIP}/itembank/moderation/policy`, {withCredentials: true});
  }

  enableDisableModeration(moderationPolicy: NewModeration): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/moderation/policy`,
      moderationPolicy,
      { withCredentials: true }
    );
  }
}
