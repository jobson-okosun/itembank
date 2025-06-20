import { ChangeUserDetails } from '../model/change-user-details.model';
import { ChangeUserPassword } from '../model/change-user-password.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppRoleModel } from '../model/app-role-model';
import { environment } from '../../../../environments/environment';
import { NewUserModel } from '../model/new-user-model';
import { ResourceCreated } from '../../../shared/model/resource-created';
import { ListUsersModel } from '../model/list-users-model';
import { UserDetail } from '../model/user-detail';
import { AddSubjectToUser } from '../model/add-subject-to-user.model';
import { ItemAnalysis } from '../model/item-analysis.model';
import { AuthorItems } from '../model/author-items';
import { FilterUsers } from '../model/filter-users';
import { ListUsersPage } from '../model/list-users-page';
import { map, switchMap, tap } from 'rxjs/operators';
import { ActivityListPage } from '../model/activity-list-page';
import { UserActivityFilter } from '../model/user-activity-filter';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  listAllUsers(): Observable<ListUsersModel[]> {
    return this.http.get<ListUsersModel[]>(
      `${environment.developmentIP}/itembank/admin/users`,
      { withCredentials: true }
    );
  }

  listRoles(): Observable<AppRoleModel[]> {
    return this.http
      .get<AppRoleModel[]>(
        `${environment.developmentIP}/itembank/admin/users/roles`,
        { withCredentials: true }
      )
      .pipe(
        tap((results) => {
          results.sort((a, b) => a.role.localeCompare(b.role));
        })
      );
  }

  fetchActivityListAdmin(
    activityFilter: UserActivityFilter, page: number, size: number
  ): Observable<ActivityListPage> {
    let queryParams = new HttpParams();
    queryParams = queryParams
    .append('page', page)
    .append('size', size)
    return this.http.post<ActivityListPage>(
      `${environment.developmentIP}/itembank/admin/users/activityList`, activityFilter,
      { params: queryParams, withCredentials: true }
    );
  }

  fetchSingleUserActivityList(activityFilter: UserActivityFilter, page: number, size: number): Observable<ActivityListPage> {
    let queryParams = new HttpParams();
    queryParams = queryParams
      .append('page', page)
      .append('size', size)
    return this.http.post<ActivityListPage>(
      `${environment.developmentIP}/itembank/o_users/activityList`, activityFilter,
      { params: queryParams, withCredentials: true }
    );
  }

  searchTags(text: string): Observable<any> {
    return this.http.get(
      `${environment.developmentIP}/itembank/admin/tags/searchtag?text=${text}`,
      { withCredentials: true }
    );
  }

  addNewUser(newUser: NewUserModel): Observable<ResourceCreated> {
    return this.http.post(
      `${environment.developmentIP}/itembank/admin/users`,
      newUser,
      { withCredentials: true }
    );
  }

  addSubjectToUser(newSubject: AddSubjectToUser): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/admin/users/subject_add`,
      newSubject,
      { withCredentials: true }
    );
  }

  addremoveSubjectFromUser(
    newSubject: AddSubjectToUser
  ): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/admin/users/subject`,
      newSubject,
      { withCredentials: true }
    );
  }

  getUserDetail(id: string): Observable<UserDetail> {
    return this.http.get<UserDetail>(
      `${environment.developmentIP}/itembank/admin/users/${id}`,
      { withCredentials: true }
    );
  }

  getSingleUserDetails(userId: string): Observable<UserDetail> {
    return this.http.get<UserDetail>(
      `${environment.developmentIP}/itembank/o_users/${userId}`,
      { withCredentials: true }
    );
  }

  getSingleItemAnalysisNonAdmin(userId: string): Observable<ItemAnalysis[]> {
    return this.http.get<ItemAnalysis[]>(
      `${environment.developmentIP}/itembank/o_users/${userId}/items-analysis`,
      { withCredentials: true }
    );
  }

  ChangeUserPassword(
    newPassword: ChangeUserPassword
  ): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/admin/users/user-password`,
      newPassword,
      { withCredentials: true }
    );
  }

  updateUserDetails(
    newUserDetail: ChangeUserDetails
  ): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/admin/users/user-details`,
      newUserDetail,
      { withCredentials: true }
    );
  }

  getUserItemAnalysis(userId: string): Observable<ItemAnalysis[]> {
    return this.http.get<ItemAnalysis[]>(
      `${environment.developmentIP}/itembank/admin/users/${userId}/items-analysis`,
      { withCredentials: true }
    );
  }

  activateDeactivateUser(
    userId: string,
    status: any
  ): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/admin/users/${userId}/enable-disableUser`,
      status,
      { withCredentials: true }
    );
  }

  getAuthorItems(userId: string): Observable<AuthorItems[]> {
    return this.http.get<AuthorItems[]>(
      `${environment.developmentIP}/itembank/admin/users/${userId}/items-analysis`,
      { withCredentials: true }
    );
  }

  activateDeactivateMultipleUsers(
    users: string[],
    flag: boolean
  ): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/admin/users/bulk_activate_deactivate/${flag}`,
      users,
      { withCredentials: true }
    );
  }

  bulkUserUpload(file: FormData): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/admin/users/upload`,
      file,
      { withCredentials: true }
    );
  }

  filterUsers(filter: FilterUsers): Observable<any[]> {
    return this.http.post<any[]>(
      `${environment.developmentIP}/itembank/admin/users/filter`,
      filter,
      { withCredentials: true }
    );
  }

  resendEmailVerification(
    userId: string,
    data: ResourceCreated
  ): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/admin/users/${userId}/resend-email-verification`,
      data,
      { withCredentials: true }
    );
  }

  downloadUsersTemplate(): Observable<any> {
    return this.http.get<any>(
      `${environment.developmentIP}/itembank/admin/users/download/users_template`,
      { responseType: 'blob' as 'json', withCredentials: true }
    );
  }

  downloadAllUsersFile(): Observable<any> {
    return this.http.get<any>(
      `${environment.developmentIP}/itembank/admin/users/download/all_users_file`,
      { responseType: 'blob' as 'json', withCredentials: true }
    );
  }
}
