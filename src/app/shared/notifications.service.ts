import { Injectable } from '@angular/core';
import { AuthorModerationNotification } from '../pages/items/models/author-moderation-notification';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  notifications: AuthorModerationNotification;
  currentGuide: string = '';
  constructor(private http: HttpClient) {}

  setGuide(guide: string) {
    this.currentGuide = guide;
    // console.log(this.currentGuide);
  }

  setNotifications(userId: string): Observable<AuthorModerationNotification> {
    return this.http.get<AuthorModerationNotification>(
      `${environment.developmentIP}/itembank/api/notifications/moderation/${userId}/author_moderator`,
      { withCredentials: true }
    );
  }

  getNotifications() {
    this.notifications;
  }
}
