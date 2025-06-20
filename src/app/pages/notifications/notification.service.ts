import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorModerationNotification } from '../items/models/author-moderation-notification';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notificationPageOpen: boolean = false;

  constructor(private http: HttpClient) {}

  fetchAllNotifications(
    userId: string,
    page?: number,
    size?: number
  ): Observable<AuthorModerationNotification> {
    return this.http.get<AuthorModerationNotification>(
      `${environment.developmentIP}/itembank/notifications/moderation/${userId}/author_moderator/?page=${page}&size=${size}`,
      { withCredentials: true }
    );
  }

  filterNotifications(
    moderation_status: string
  ): Observable<AuthorModerationNotification> {
    return this.http.get<AuthorModerationNotification>(
      `${environment.developmentIP}/itembank/notifications/moderation/author_moderator/${moderation_status}`,
      { withCredentials: true }
    );
  }

  filterNotificationsBySubject(
    moderation_status: string,
    subjectId: string
  ): Observable<AuthorModerationNotification> {
    return this.http.get<AuthorModerationNotification>(
      `${environment.developmentIP}/itembank/notifications/moderation/author_moderator/${moderation_status}/subject/${subjectId}`,
      { withCredentials: true }
    );
  }
}
