import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Organization,
  UpdateOrganization,
  UpdatePassword,
} from 'src/app/core/models/settings';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private _http: HttpClient) {}

  editOrganizationSettings(
    updateOrganizationPayload: UpdateOrganization
  ): Observable<{ id: string }> {
    const url: string =
      '/examalpha/api/v1/organization/edit_organization_settings';
    return this._http.put<{ id: string }>(
      environment.schedulerIP + url,
      updateOrganizationPayload,
      { withCredentials: true }
    );
  }

  getOrganizationProfile(): Observable<Organization> {
    const url: string = '/examalpha/api/v1/organization/organization_profile';
    return this._http.get<Organization>(environment.schedulerIP + url, {
      withCredentials: true,
    });
  }

  changePassword(updatePassword: UpdatePassword): Observable<{ id: string }> {
    const url: string = '/examalpha/api/v1/itembank/o_users/user-password';
    return this._http.put<{ id: string }>(
      environment.schedulerIP + url,
      updatePassword,
      { withCredentials: true }
    );
  }
}
