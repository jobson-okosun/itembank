import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AllPassagesResponseModel } from '../model/all-passages-response-model.model';
import { SinglePassageModel } from '../../items/passage-item/model/single-passage-model.model';
import { ResourceCreated } from 'src/app/shared/model/resource-created';
import { SinglePassageItems } from '../../items/passage-item/model/single-passage-items.model';
import { PassageFilter } from '../model/passage-filter';
import { UsageHistory } from '../../items/models/usage-history';

export interface passage {
  reference: string;
  stimulus: string;
  createdAt: string;
  itemCount: number;
  author: string;
  isSelected: boolean;
}

interface ItemDetails {
  subjectId: string;
  subjectName: string;
  topicId: string;
  topicName: string;
  passageId?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AllPassagesService {
  currentPassageTrail: ItemDetails;
  subjectId: string;
  topicId: string;
  topicName: string;
  subjectName: string;

  constructor(private passagehttpService: HttpClient) {}

  fetchAllPassages(): Observable<AllPassagesResponseModel> {
    return this.passagehttpService.get<AllPassagesResponseModel>(
      `${environment.developmentIP}/itembank/items/passage`,
      { withCredentials: true }
    );
  }

  fetchSinglePassage(passageId: string): Observable<SinglePassageModel> {
    return this.passagehttpService.get<SinglePassageModel>(
      `${environment.developmentIP}/itembank/items/${passageId}/passage`,
      { withCredentials: true }
    );
  }

  fetchPassageItems(passageId: string): Observable<SinglePassageItems> {
    return this.passagehttpService.get<SinglePassageItems>(
      `${environment.developmentIP}/itembank/items/${passageId}/passage-items`,
      { withCredentials: true }
    );
  }

  filterPassage(filter: PassageFilter): Observable<AllPassagesResponseModel> {
    return this.passagehttpService.post<AllPassagesResponseModel>(
      `${environment.developmentIP}/itembank/items/passage-filter/items_in_passage`,
      filter,
      { withCredentials: true }
    );
  }

  editPassage(passageId: string, passage: any): Observable<ResourceCreated> {
    return this.passagehttpService.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${passageId}/passage`,
      passage,
      { withCredentials: true }
    );
  }

  deletePassage(passageId: string): Observable<ResourceCreated> {
    return this.passagehttpService.delete<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${passageId}/passage`,
      { withCredentials: true }
    );
  }

  listPassagesAndItems(itemsInPassage: any): Observable<any> {
    //items/assessment/passage-filter/assessment/items_in_passage/{itemsInPassage}
    return this.passagehttpService.post<any>(
      `${environment.developmentIP}/itembank/items/assessment/passage-filter/assessment/items_in_passage/${itemsInPassage}`,
      itemsInPassage
    );
  }

  deletePassageItem(
    itemId: string,
    passageId: string
  ): Observable<ResourceCreated> {
    return this.passagehttpService.delete<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${itemId}/item/${passageId}/passage`,
      { withCredentials: true }
    );
  }

  getPassageUsageHistory(passageId: string): Observable<UsageHistory[]> {
    return this.passagehttpService.get<UsageHistory[]>(
      `${environment.developmentIP}/itembank/items/passage/${passageId}/usages`,
      { withCredentials: true }
    );
  }
}
