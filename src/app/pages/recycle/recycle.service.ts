import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ListRecycleSubjects } from "./models/list-recycle-subjects.model";
import { environment } from "src/environments/environment";
import { NewRecyclePolicy } from "./models/new-recycle-policy.model";
import { ResourceCreated } from "src/app/shared/model/resource-created";
import { SubjectTopicsTree } from "../items/models/subject-topics-tree.model";
import { RestoreItems } from "./models/restore-items";

@Injectable({
  providedIn: "root",
})
export class RecycleService {
  recycleActive: boolean = false;

  constructor(private http: HttpClient) {}

  fetchAllRecycleSubjects(): Observable<ListRecycleSubjects[]> {
    return this.http.get<ListRecycleSubjects[]>(
      `${environment.developmentIP}/itembank/recycle/subjects`,
      { withCredentials: true }
    );
  }

  createNewPolicy(newPolicy: NewRecyclePolicy): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/recycle`,
      newPolicy,
      { withCredentials: true }
    );
  }

  editRecyclePolicy(
    recycleSettingId: string,
    recyclePolicy: NewRecyclePolicy
  ): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/recycle/${recycleSettingId}`,
      recyclePolicy,
      { withCredentials: true }
    );
  }

  deleteRecyclePolicy(
    recycleId: string,
    subjectId: string
  ): Observable<ResourceCreated> {
    return this.http.delete<ResourceCreated>(
      `${environment.developmentIP}/itembank/recycle/${recycleId}/${subjectId}`,
      { withCredentials: true }
    );
  }

  fetchSubjectRecycle(recycleId: string): Observable<NewRecyclePolicy> {
    return this.http.get<NewRecyclePolicy>(
      `${environment.developmentIP}/itembank/recycle/${recycleId}`,
      { withCredentials: true }
    );
  }

  fetchRecycleSubjectTree(subjectId: string): Observable<SubjectTopicsTree> {
    return this.http.get<SubjectTopicsTree>(
      `${environment.developmentIP}/itembank/admin/subjects/${subjectId}/topics_tree_recycle`,
      { withCredentials: true }
    );
  }

  restoreSubtopicItem(
    subjectId: string,
    topicId: string,
    subtopicId: string,
    details: RestoreItems
  ): Observable<ResourceCreated> {
    return this.http.patch<ResourceCreated>(
      `${environment.developmentIP}/itembank/recycle/subject/${subjectId}/topic/${topicId}/subtopic/${subtopicId}/manual_recycle`,
      details,
      { withCredentials: true }
    );
  }

  restoreTopicItem(
    subjectId: string,
    topicId: string,
    details: RestoreItems
  ): Observable<ResourceCreated> {
    return this.http.patch<ResourceCreated>(
      `${environment.developmentIP}/itembank/recycle/subject/${subjectId}/topic/${topicId}/manual_recycle`,
      details,
      { withCredentials: true }
    );
  }

  restoreSelectedItemsInSubject(
    subjectId: string,
    details: RestoreItems
  ): Observable<ResourceCreated> {
    return this.http.patch<ResourceCreated>(
      `${environment.developmentIP}/itembank/recycle/subject/${subjectId}/items/manual_recycle`,
      details,
      { withCredentials: true }
    );
  }

  restoreAllItemsInSubject(subjectId: string): Observable<ResourceCreated> {
    return this.http.patch<ResourceCreated>(
      `${environment.developmentIP}/itembank/recycle/subject/${subjectId}/items/manual_recycle`,
      {
        withCredentials: true,
      }
    );
  }
}
