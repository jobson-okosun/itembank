import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
export interface ItemDetails {
  subjectId: string;
  subjectName?: string;
  topicId?: string;
  topicName?: string;
  subtopicId?: string;
  subtopicName?: string;
  assessmentActive?: boolean
}

@Injectable({
  providedIn: "root",
})
export class ItemUtilitiesService {
  passageItemWorkflow: boolean = false;

  passageId: string = "";

  subjectId: string;

  subjectName: string;

  previewItem: boolean = false;

  currentItemTrail: ItemDetails = {
    subjectId: "01975e81-f133-72b3-86a4-9d3e4f29ea24",
    subjectName: "account",
    topicId: "01975f9e-516f-744d-8d43-6beb39dc2d42",
    topicName: "accounts of not-for-profit-making organizations"
}
  private tagSource = new BehaviorSubject<any[]>([]);
  selectedTags$ = this.tagSource.asObservable();

  constructor(private http: HttpClient) {}

  setSelectedTags(tags: any[]) {
    this.tagSource.next(tags);
  }

  convertLatexToBase64(latex: string) {
    const payload = {
      text: latex,
    };
    return this.http.post(
      `${environment.developmentIP}/itembank/items/choice-matrix`,
      payload,
      { withCredentials: true }
    );
  }

  saveCurrentItemTrail(itemTrail?: ItemDetails) {
    localStorage.setItem('item-trail', JSON.stringify(itemTrail?? this.currentItemTrail))
  }

  getSavedItemTrail():ItemDetails | null {
    return localStorage.getItem('item-trail') ? JSON.parse(localStorage.getItem('item-trail')) : null
  }
}
