import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppHttpService {
  constructor(private httpClient: HttpClient) {}

  getHttpClient(): HttpClient {
    return this.httpClient;
  }

  getCountriesList(country: any): Observable<any> {
    const headers = {
      'X-CSCAPI-KEY': '',
    };
    return this.httpClient.get<any>(
      `https://countriesnow.space/api/v0.1/countries`,
      { headers: headers }
    );
  }
}
