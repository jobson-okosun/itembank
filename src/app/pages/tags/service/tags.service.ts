import { ResourceCreated } from './../../../shared/model/resource-created';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewTag } from '../model/new-tag.model';
import { ListTags } from '../model/list-tags.model';
import { TagAnalysis } from '../model/tag-analysis';

export class TagSubjects {
  name: string;
  subjectId: string;
  totalPassages: number;
  subjectCode: string;
  totalItems: number;
  entityId: string;
  loading?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  activeTag: string;

  constructor(private http: HttpClient) {}

  //Creating a new tag
  createNewTag(tag: NewTag): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/admin/tags`,
      tag,
      { withCredentials: true }
    );
  }

  //Renaming an existing tagName
  renameTag(tagId: string, tag: NewTag): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/admin/tags/${tagId}`,
      tag,
      { withCredentials: true }
    );
  }

  //Listing all the available tagTypes
  listAllTags(page?: number, size?: number): Observable<ListTags> {
    return this.http.get<ListTags>(
      `${environment.developmentIP}/itembank/admin/tags/list?page=${page}&size=${size}`,
      {
        withCredentials: true,
      }
    );
  }

  //List all subjects with a particular tag
  listTagSubjects(tagId: string): Observable<TagSubjects[]> {
    return this.http.get<TagSubjects[]>(
      `${environment.developmentIP}/itembank/admin/subjects/tag/${tagId}`,
      { withCredentials: true }
    );
  }

  getTagAnalysis(subjectId: string, tagId: string): Observable<TagAnalysis> {
    return this.http.get<TagAnalysis>(
      `${environment.developmentIP}/itembank/admin/subjects/${subjectId}/tag/${tagId}/tag_analysis`,
      { withCredentials: true }
    );
  }

  searchTag(searchTecx: string): Observable<any> {
    return this.http.get<any>(
      `${environment.developmentIP}/itembank/admin/tags/filter_by/${searchTecx}`,
      { withCredentials: true }
    );
  }
}
