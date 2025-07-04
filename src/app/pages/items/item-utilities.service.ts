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

  currentItemTrail: ItemDetails;
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
