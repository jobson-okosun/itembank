import { ListPassageTopics } from "./../passages/model/list-passage-topics.model";
import { NotifierService } from "angular-notifier";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { SingleChoiceModel } from "./single-response/model/single-response-model.model";
import { environment } from "../../../environments/environment";
import { ResourceCreated } from "../../shared/model/resource-created";
import { ListAllItemsPage } from "./models/list-all-items-page.model";
import { TrueOrFalseModel } from "./true-or-false/model/true-or-false-model.model";
import { YesOrNoModel } from "./yes-or-no/model/yes-or-no-model.model";
import { MultipleResponseModel } from "./multiple-response/model/multiple-response-model.model";
import { RichEssayModel } from "./rich-essay/model/rich-essay-model.model";
import { ShortText } from "./create-item/model/short-text.model";
import { Passage } from "./passage-item/model/passage.model";
import { SinglePassageModel } from "./passage-item/model/single-passage-model.model";
import { FilterItems } from "./models/filter-items.model";
import { NewSubject } from "./models/new-subject.model";
import { ListAllSubjects } from "./models/list-all-subjects.model";
import { NewTopic } from "./models/new-topic.model";
import { SubjectTopicsTree } from "./models/subject-topics-tree.model";
import { NewSubTopic } from "./models/new-sub-topic.model";
import { DropdownSubjectList } from "./models/dropdown-subject-list.model";
import { IndividualItem } from "./models/individual-item.model";
import { NewAssociationItem } from "./matching/model/new-association-item.model";
import { AllPassagesResponseModel } from "../passages/model/all-passages-response-model.model";
import { SinglePassageItems } from "./passage-item/model/single-passage-items.model";
import { NewClozeItem } from "./cloze/model/new-cloze-item.model";
import { ClozeDropdown } from "./cloze-dropdown/cloze-dropdown.model";
import { CopyMoveItems } from "./models/copy-move-items";
import { OrderingItem } from "./ordering/model/ordering-item";
import { OrderingModel } from "./ordering/model/ordering-model";
import { RejectionReason } from "./models/rejection-reason";
import { AuthorModerationNotification } from "./models/author-moderation-notification";
import { ItemTypes } from "./models/item-types";
import { ChoiceMatrix } from "./choice-matrix/model/choice-matrix";
import { ExistingItemsAndPasaagesInExamBlock } from "./models/existing-items-and-pasaages-in-exam-block";
import { UsageHistory } from "./models/usage-history";
import { ItemDetails } from "./item-utilities.service";
import DOMPurify from "dompurify";
import { LabelImageDropdown } from "./label-image-dropdown/models/label-image-dropdown";
import { LabelImageDragDrop } from "./label-image-drag-drop/models/label-image-drag-drop";
import { RejectItemRequest } from "../assessment/model/reject-item";
import { DrawAndWritingModel } from "./drawing-and-writing/model/drawing-and-writing..model";

@Injectable({
  providedIn: "root",
})
export class ItemHttpService {
  assessmentActive: boolean = false;
  subjectId: string;
  subjectName: string;
  currentActivity: string;
  topicId: string;
  topicName: string;
  subtopicId: string;
  subtopicName: string;
  currentSubjectModerationEnabled: boolean = false;
  totalItemsInCurrentSubject: number;
  duplicateItem: any = new BehaviorSubject("");
  itemTrail: ItemDetails;

  public duplicateFound$ = this.duplicateItem.asObservable();

  constructor(private http: HttpClient, private notifier: NotifierService) {
    DOMPurify.setConfig({
      ALLOWED_TAGS: [
        "b",
        "i",
        "em",
        "strong",
        "p",
        "div",
        "span",
        "ul",
        "ol",
        "li",
        "a",
        "br",
        "img",
        "table",
        "tbody",
        "thead",
        "tr",
        "th",
        "td",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
      ],
      ALLOWED_ATTR: ["href", "src", "alt", "title", "style"], // Allow only safe attributes
      FORBID_ATTR: ["onclick", "onerror", "onload"], // Block any inline JS
      FORBID_TAGS: ["script", "iframe"], // Block any script or iframe tags
    });
  }

  sanitize(html: string): string {
    return DOMPurify.sanitize(html);
  }

  validateItem(item: any): boolean {
    // console.log('=>', {item});
    if (item.stimulus == "") {
      this.notifier.notify("error", `Please compose a question!`);
      return false;
    }

    if (
      item.stimulus.trim() === "" ||
      item.stimulus.trim() === "<p></p>" ||
      item.stimulus.replace(/(&nbsp;|\s|\n|\r|<[^>]+>)/g, "").trim() === ""
    ) {
      this.notifier.notify(
        "error",
        "You can not create a question with only empty space(s)"
      );
      return false;
    }

    if (item.itemType === ItemTypes.CLOZE_DROPDOWN_IMAGE) {
      if (
        item.scoringOption.answers.some(
          (answer) =>
            answer.replace(/(&nbsp;|\s|\n|\r|<[^>]+>)/g, "").trim() === "" ||
            answer.trim() === "" ||
            answer.trim() === "<p></p>"
        )
      ) {
        this.notifier.notify("error", "Label found without a selected answer");
        return false;
      }
    }

    if (
      item.options &&
      item.options.some(
        (option) =>
          option.label.replace(/(&nbsp;|\s|\n|\r|<[^>]+>)/g, "").trim() ===
            "" ||
          item.stimulus.trim() === "" ||
          item.stimulus.trim() === "<p></p>"
      )
    ) {
      this.notifier.notify("error", "Found Option with empty space(s)");
      return false;
    }

    // todo: check for null and thr

    // if( item.itemType === ItemTypes.CHOICE_MATRIX){
    //   if(item.scoringOption.answers.every((answer)=>)){

    //   }

    // }

    if (
      item.itemType === ItemTypes.CHOICE_MATRIX &&
      item.scoringOption.answers.length !== item.stems.length
    ) {
      this.notifier.notify(
        "error",
        "Please ensure you have provided answers to all questions!"
      );
      return false;
    }

    if (
      item.itemType !== ItemTypes.ESSAY_RICH_TEXT &&
      item.itemType !== ItemTypes.SHORT_TEXT &&
      item.itemType !== ItemTypes.CLOZE_DROPDOWN &&
      item.itemType !== ItemTypes.CLOZE_DROPDOWN_IMAGE &&
      item.itemType !== ItemTypes.DRAW_WRITING
    ) {
      // console.log(item.itemType);
      for (let i = 0; i < item.options.length; i++) {
        if (item.options[i].label == "") {
          this.notifier.notify(
            "error",
            `Please provide a valid response for option ${i + 1}`
          );
          return false;
        }
      }
    }

    // if (item.itemType !== ItemTypes.ESSAY_RICH_TEXT) {
    //   if (item.scoringOption.answers.length < 1) {
    //     this.notifier.notify("error", `Please select an answer!`);
    //     return false;
    //   }
    // }

    if (item.itemType === ItemTypes.ORDER_LIST) {
      if (item.options.length < 2) {
        this.notifier.notify(
          "error",
          `Order list cannot have less than 2 options!`
        );
        return false;
      }
    }
    console.log(item + "negative score");

    if (item.itemType === ItemTypes.CLOZE_TEXT) {
      if (item.options.some((option) => option.label.trim() === "")) {
        this.notifier.notify("error", `Please provide answer in input box!`);
        return false;
      }

      if (item.scoringOption.answers.some((answer) => answer.trim() === "")) {
        this.notifier.notify("error", `Please provide answer in input box!`);
        return false;
      }
    }

    if (item.scoringOption.score < 0) {
      this.notifier.notify(
        "error",
        `Please ensure the score is not a negative value!`
      );
      return false;
    }

    if (!Number.isInteger(item.scoringOption.score)) {
      this.notifier.notify(
        "error",
        `Please ensure the score is an integer value!`
      );
      return false;
    }

    if (
      item.itemType === ItemTypes.MRQ &&
      item.scoringOption.answers.length < 2
    ) {
      this.notifier.notify(
        "error",
        "kindly, provide at least two correct responses to the question!"
      );
      return false;
    }

    if (
      item.scoringOption.score === "" ||
      item.scoringOption.score === undefined
    ) {
      this.notifier.notify("error", `Please ensure the score is not empty!`);
      return false;
    }

    if (item.itemType === ItemTypes.MCQ) {
      if (item.options.length < 2) {
        this.notifier.notify(
          "error",
          `Please ensure the options is two or more!`
        );
        return false;
      }
    }
    console.log(item.scoringOption.penalty);
    console.log(item, "here");
    if (item.scoringOption.penalty < 0) {
      this.notifier.notify(
        "error",
        `Please ensure the penalty is not a negative value!`
      );
      return false;
    }

    if (item.scoringOption.minimumScoreIfAttempted < 0) {
      this.notifier.notify(
        "error",
        `Please ensure the minimum Score on attempt is not a negative value!`
      );
      return false;
    }

    if (item.itemType === ItemTypes.SHORT_TEXT && item.maxLength < 0) {
      this.notifier.notify(
        "error",
        `Please ensure the max length  is not a negative value!`
      );
      return false;
    }

    if (item.ItemType === ItemTypes.SHORT_TEXT) {
      if (
        item.scoringOption.answers[0]
          .replace(/(&nbsp;|\s|\n|\r|<[^>]+>)/g, "")
          .trim() == "" ||
        item.scoringOption.answers[0].trim() === "" ||
        item.scoringOption.answers[0].trim() === "<p></p>"
      ) {
        this.notifier.notify(
          "error",
          `Please ensure you provide an answer to question!`
        );
        return false;
      }
    }

    // if (
    //   (item.itemType === ItemTypes.SHORT_TEXT &&

    // ) {

    // }

    if (item.ItemType === ItemTypes.CLOZE_DROPDOWN) {
      if (
        item.scoringOption.answers &&
        item.scoringOption.answers.some(
          (answer) =>
            answer.replace(/(&nbsp;|\s|\n|\r|<[^>]+>)/g, "").trim() === "" ||
            answer.replace(/(&nbsp;|\s|\n|\r|<[^>]+>)/g, "").trim() === "--"
        )
      ) {
        this.notifier.notify(
          "error",
          `Please ensure you provide an answer to question!`
        );
        return false;
      }
    }

    if (!Number.isInteger(item.scoringOption.penalty)) {
      this.notifier.notify("error", `Please ensure the penalty is an integer!`);
      return false;
    }

    return true;
  }

  setDuplicateStatus(newValue) {
    return this.duplicateItem.next(newValue);
  }

  getDuplicateStatus() {
    return this.duplicateFound$;
  }

  fetchAuthorModerationNotifications(
    userId: string
  ): Observable<AuthorModerationNotification> {
    return this.http.get<AuthorModerationNotification>(
      `${environment.developmentIP}/itembank/notifications/moderation/${userId}/author_moderator`,
      { withCredentials: true }
    );
  }

  setSubjectId(subjectId: string) {
    this.subjectId = subjectId;
  }

  setSubjectName(subjectName: string) {
    this.subjectName = subjectName;
  }

  setSubjectInfo(subject: any) {
    this.subjectId = subject.subjectId;
    this.subjectName = subject.subjectName;
  }

  createNewSubject(subject: NewSubject): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/admin/subjects`,
      subject,
      { withCredentials: true }
    );
  }

  createChoiceMatrixItem(item: ChoiceMatrix): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/choice-matrix`,
      item,
      { withCredentials: true }
    );
  }

  editChoiceMatrixItem(
    itemId: string,
    item: ChoiceMatrix
  ): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${itemId}/item/choice-matrix`,
      item,
      { withCredentials: true }
    );
  }

  createAssociationItem(item: NewAssociationItem): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/association`,
      item,
      { withCredentials: true }
    );
  }

  createClozeItem(item: NewClozeItem): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/cloze-text`,
      item,
      { withCredentials: true }
    );
  }

  createClozeDropdownItem(item: ClozeDropdown): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/cloze-dropdown`,
      item,
      { withCredentials: true }
    );
  }

  createOrderListItem(item: OrderingModel): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/order_list`,
      item,
      { withCredentials: true }
    );
  }

  createClozeTextImageItem(item: any) {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/cloze-text-image`,
      item,
      { withCredentials: true }
    );
  }

  editClozeTextImageItem(item: any): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${item.itemId}/item/IMAGE_CLOZE_TEXT`,
      item,
      { withCredentials: true }
    );
  }

  createClozeDropdownImageItem(
    item: LabelImageDropdown
  ): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/cloze-dropdown-image`,
      item,
      { withCredentials: true }
    );
  }

  editClozeDropdownImageItem(
    item: LabelImageDropdown
  ): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${item.itemId}/item/CLOZE_DROPDOWN_IMAGE`,
      item,
      { withCredentials: true }
    );
  }

  createClozeDragDropImageItem(
    item: LabelImageDragDrop
  ): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/drag-and-drop-image`,
      item,
      { withCredentials: true }
    );
  }

  editClozeDragDropImageItem(
    item: LabelImageDragDrop
  ): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${item.itemId}/item/IMAGE_DRAG_DROP`,
      item,
      { withCredentials: true }
    );
  }

  createNewTopic(topic: NewTopic): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/admin/subjects/topic`,
      topic,
      { withCredentials: true }
    );
  }

  createNewSubTopic(subtopic: NewSubTopic): Observable<ResourceCreated> {
    return this.http.post(
      `${environment.developmentIP}/itembank/admin/subjects/subtopic`,
      subtopic,
      { withCredentials: true }
    );
  }

  deleteSubTopic(
    subjectId: string,
    topicId: string,
    subtopicId: string
  ): Observable<ResourceCreated> {
    return this.http.delete<ResourceCreated>(
      `${environment.developmentIP}/itembank/admin/subjects/${subjectId}/${topicId}/${subtopicId}/delete_subtopic`,
      { withCredentials: true }
    );
  }

  deleteTopic(subjectId: string, topicId: string): Observable<ResourceCreated> {
    return this.http.delete<ResourceCreated>(
      `${environment.developmentIP}/itembank/admin/subjects/${subjectId}/${topicId}/delete_subtopic`,
      { withCredentials: true }
    );
  }

  createMultipleChoiceItem(
    newMultipleChoiceItem: SingleChoiceModel
  ): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/mcq`,
      newMultipleChoiceItem,
      { withCredentials: true }
    );
  }

  createMultipleResponseItem(
    newMultipleResponseItem: MultipleResponseModel
  ): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/mrq`,
      newMultipleResponseItem,
      { withCredentials: true }
    );
  }

  createTrueOrFalseItem(
    newTrueOrFalseItem: TrueOrFalseModel
  ): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/trueorfalse`,
      newTrueOrFalseItem,
      { withCredentials: true }
    );
  }

  createYesOrNoItem(newYesOrNoItem: YesOrNoModel): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/yesorno`,
      newYesOrNoItem,
      { withCredentials: true }
    );
  }

  createEssayItem(newEssayItem: RichEssayModel): Observable<ResourceCreated> {
    return this.http.post(
      `${environment.developmentIP}/itembank/items/essay`,
      newEssayItem,
      { withCredentials: true }
    );
  }

  createDrawWritingItem(newDrawWritingItem: DrawAndWritingModel): Observable<ResourceCreated> {
    return this.http.post(
      `${environment.developmentIP}/itembank/items/draw_write`,
      newDrawWritingItem,
      { withCredentials: true }
    );
  }

  editDrawWritingItem(newDrawWritingItem: DrawAndWritingModel): Observable<ResourceCreated> {
    return this.http.put(
      `${environment.developmentIP}/itembank/items/${ newDrawWritingItem.itemId  }/item/draw-write`,
      newDrawWritingItem,
      { withCredentials: true }
    );
  }

  createShortTextItem(
    newShortTextItem: ShortText
  ): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/short-text`,
      newShortTextItem,
      { withCredentials: true }
    );
  }

  createNewPassage(newPassage: Passage): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/passage`,
      newPassage,
      { withCredentials: true }
    );
  }

  fetchSubjectPassages(
    subjectId: string
  ): Observable<AllPassagesResponseModel> {
    return this.http.get<AllPassagesResponseModel>(
      `${environment.developmentIP}/itembank/items/passage/${subjectId}`,
      { withCredentials: true }
    );
  }

  fetchTopicPassages(
    subjectId: string,
    topicId: string,
    page?: number,
    size?: number
  ): Observable<AllPassagesResponseModel> {
    return this.http.get<AllPassagesResponseModel>(
      `${environment.developmentIP}/itembank/items/passage/${subjectId}/${topicId}?page=${page}&size=${size}`,
      { withCredentials: true }
    );
  }

  fetchSinglePassage(passageId: string): Observable<SinglePassageModel> {
    return this.http.get<SinglePassageModel>(
      `${environment.developmentIP}/itembank/items/${passageId}/passage`,
      { withCredentials: true }
    );
  }

  // fetchPassageTopicsTree(subjectId: string): Observable<ListPassageTopics[]> {
  //   return this.http.get<ListPassageTopics[]>(
  //     `${environment.developmentIP}/itembank/admin/subjects/${subjectId}/passage_topics_tree`,
  //     { withCredentials: true }
  //   );
  // }

  fetchAssessmentPassageTopicsTree(
    subjectId: string,
    itemsCount?: number
  ): Observable<ListPassageTopics[]> {
    return this.http.get<ListPassageTopics[]>(
      `${environment.developmentIP}/itembank/admin/subjects/${subjectId}/passage_topics_tree/assessment/items/${itemsCount}`,
      { withCredentials: true }
    );
  }

  fetchAssessmentPassageTopicsTreeWithPassageCount(
    itemsInPassage: number
  ): Observable<any> {
    return this.http.post<any>(
      ///items/assessment/passage-filter/items_in_passage/{itemsInPassage}
      `${environment.developmentIP}/itembank/items/assessment/passage-filter/assessment/items_in_passage/${itemsInPassage}`,
      { withCredentials: true }
    );
  }

  fetchPassageItem(passageId: string): Observable<SinglePassageItems> {
    return this.http.get<SinglePassageItems>(
      `${environment.developmentIP}/itembank/items/${passageId}/passage-items`,
      { withCredentials: true }
    );
  }

  fetchPassageTopicTreeAdmin(
    subjectId: string
  ): Observable<ListPassageTopics[]> {
    return this.http.get<ListPassageTopics[]>(
      `${environment.developmentIP}/itembank/admin/subjects/${subjectId}/passage_topics_tree`,
      { withCredentials: true }
    );
  }

  fetchPassageTopicTreeModerator(
    subjectId: string
  ): Observable<ListPassageTopics[]> {
    return this.http.get<ListPassageTopics[]>(
      `${environment.developmentIP}/itembank/user/subjects/${subjectId}/passage_topics_tree`,
      { withCredentials: true }
    );
  }

  fetchPassageTopicTreeAuthor(
    subjectId: string
  ): Observable<ListPassageTopics[]> {
    return this.http.get<ListPassageTopics[]>(
      `${environment.developmentIP}/itembank/user/subjects/${subjectId}/passage_topics_tree`,
      { withCredentials: true }
    );
  }

  fetchIndividualItem(itemId: string): Observable<IndividualItem> {
    return this.http.get<IndividualItem>(
      `${environment.developmentIP}/itembank/items/${itemId}/item`,
      { withCredentials: true }
    );
  }

  fetchAllItems(
    subjectId: string,
    topicId?: string,
    subtopicId?: string,
    page?: number,
    size?: number
  ): Observable<ListAllItemsPage> {
    if (subtopicId) {
      return this.http.get<ListAllItemsPage>(
        `${environment.developmentIP}/itembank/items/?subjectId=${subjectId}&topicId=${topicId}&subtopicId=${subtopicId}&page=${page}&size=${size}`,
        { withCredentials: true }
      );
    } else {
      return this.http.get<ListAllItemsPage>(
        `${environment.developmentIP}/itembank/items/?subjectId=${subjectId}&topicId=${topicId}&page=${page}&size=${size}`,
        { withCredentials: true }
      );
    }
  }

  fetchItemUsageCount(itemId: string): Observable<UsageHistory[]> {
    return this.http.get<UsageHistory[]>(
      `${environment.developmentIP}/itembank/items/${itemId}/usages`,
      {
        withCredentials: true,
      }
    );
  }

  fetchAllAssessmentItems(
    assessmentId: string,
    sectionId: string,
    subjectId: string,
    topicId?: string,
    subtopicId?: string,
    page?: number,
    size?: number
  ): Observable<ListAllItemsPage> {
    if (subtopicId) {
      return this.http.get<ListAllItemsPage>(
        /** former endpoint ==> /items/assessment/ */
        `${environment.developmentIP}/itembank/items/assessment/${assessmentId}/section/${sectionId}?subjectId=${subjectId}&topicId=${topicId}&subtopicId=${subtopicId}&page=${page}&size=${size}`,
        { withCredentials: true }
      );
    } else {
      let queryParams = new HttpParams();
      queryParams = queryParams
        .append("subjectId", subjectId)
        .append("topicId", topicId)
        .append("page", page)
        .append("size", size);

      return this.http.get<ListAllItemsPage>(
        `${environment.developmentIP}/itembank/items/assessment/${assessmentId}/section/${sectionId}`, //?subjectId=${subjectId}&topicId=${topicId}`,
        { params: queryParams, withCredentials: true }
      );
    }
  }

  fetchManualSelectedItemsInAssessment(
    assessmentId: string,
    sectionId: string
  ): Observable<ExistingItemsAndPasaagesInExamBlock> {
    return this.http.get<ExistingItemsAndPasaagesInExamBlock>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/manual/selected_items`,
      { withCredentials: true }
    );
  }

  fetchAllRecycleItems(
    subjectId: string,
    topicId?: string,
    page?: number,
    pageSize?: number,
    subtopicId?: string
  ): Observable<ListAllItemsPage> {
    if (subtopicId) {
      return this.http.get<ListAllItemsPage>(
        `${environment.developmentIP}/itembank/recycle/in-recycle?subjectId=${subjectId}&topicId=${topicId}&subtopicId=${subtopicId}&page=${page}&size=${pageSize}`,
        { withCredentials: true }
      );
    } else {
      return this.http.get<ListAllItemsPage>(
        `${environment.developmentIP}/itembank/recycle/in-recycle?subjectId=${subjectId}&topicId=${topicId}&page=${page}&size=${pageSize}`,
        { withCredentials: true }
      );
    }
  }

  fetchAllSubjectsNonAdmin(): Observable<ListAllSubjects[]> {
    return this.http.get<ListAllSubjects[]>(
      `${environment.developmentIP}/itembank/user/subjects`,
      { withCredentials: true }
    );
  }

  fetchAllSubjectsItems(): Observable<ListAllSubjects[]> {
    return this.http.get<ListAllSubjects[]>(
      `${environment.developmentIP}/itembank/admin/subjects/items`,
      { withCredentials: true }
    );
  }

  fetchAllSubjectsDropdown(): Observable<DropdownSubjectList[]> {
    return this.http.get<DropdownSubjectList[]>(
      `${environment.developmentIP}/itembank/admin/subjects`,
      { withCredentials: true }
    );
  }

  fetchAllSubjectsDropdownForAssessment(): Observable<DropdownSubjectList[]> {
    return this.http.get<DropdownSubjectList[]>(
      `${environment.developmentIP}/itembank/admin/subjects/assessment`,
      { withCredentials: true }
    );
  }

  fetchSubjectTopicsTreeAuthor(
    subjectId: string
  ): Observable<SubjectTopicsTree> {
    return this.http.get<SubjectTopicsTree>(
      `${environment.developmentIP}/itembank/user/subjects/${subjectId}/topics_tree_author`,
      { withCredentials: true }
    );
  }

  fetchSubjectTopicsTreeAdmin(
    subjectId: string
  ): Observable<SubjectTopicsTree> {
    return this.http.get<SubjectTopicsTree>(
      `${environment.developmentIP}/itembank/admin/subjects/${subjectId}/topics_tree`,
      { withCredentials: true }
    );
  }

  fetchSubjectTopicsTreeUser(subjectId: string): Observable<SubjectTopicsTree> {
    return this.http.get<SubjectTopicsTree>(
      `${environment.developmentIP}/itembank/user/subjects/${subjectId}/topics_tree`,
      { withCredentials: true }
    );
  }

  fetchAssessmentSubjectTopicsTree(
    subjectId: string
  ): Observable<SubjectTopicsTree> {
    return this.http.get<SubjectTopicsTree>(
      `${environment.developmentIP}/itembank/admin/subjects/${subjectId}/topics_tree/assessment`,
      { withCredentials: true }
    );
  }

  fetchItemsAwaitingModerationTopicsTree(
    subjectId: string,
    itemStatus: string
  ): Observable<SubjectTopicsTree> {
    return this.http.get<SubjectTopicsTree>(
      `${environment.developmentIP}/itembank/user/subjects/${subjectId}/topics_tree_moderation/item_status/${itemStatus}`,
      { withCredentials: true }
    );
  }

  filterItems(filterInformation: FilterItems): Observable<ListAllItemsPage> {
    return this.http.post<ListAllItemsPage>(
      `${environment.developmentIP}/itembank/items/item-filter`,
      filterInformation,
      { withCredentials: true }
    );
  }

  filterAssessmentItems(
    assessmentId,
    sectionId,
    filterInformation: FilterItems
  ): Observable<ListAllItemsPage> {
    return this.http.post<ListAllItemsPage>(
      /** former endpoint ===> /items/item-filter_assessment */
      `${environment.developmentIP}/itembank/items/assessment/${assessmentId}/section/${sectionId}/item-filter_assessment`,
      filterInformation,
      { withCredentials: true }
    );
  }

  rejectItem(
    rejectItemRequest: RejectItemRequest
  ): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/reject-item/${rejectItemRequest.itemId}`,
      rejectItemRequest,
      { withCredentials: true }
    );
  }

  copyItem(
    itemId: string,
    copiedItem: CopyMoveItems
  ): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${itemId}/copy`,
      copiedItem,
      { withCredentials: true }
    );
  }

  moveItem(
    itemId: string,
    movedItem: CopyMoveItems
  ): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${itemId}/move`,
      movedItem,
      { withCredentials: true }
    );
  }

  editItem(itemId: string, item: any): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${itemId}/item/MCQ`,
      item,
      { withCredentials: true }
    );
  }

  editShortText(itemId: string, item: any): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${itemId}/item/shortText`,
      item,
      { withCredentials: true }
    );
  }

  edit_Essay(itemId: string, item: any): Observable<ResourceCreated> {
    return this.http.put(
      `${environment.developmentIP}/itembank/items/${itemId}/item/essay`,
      item,
      { withCredentials: true }
    );
  }

  edit_Yes_No(itemId: string, item: any): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${itemId}/item/YES_NO`,
      item,
      { withCredentials: true }
    );
  }

  edit_True_False(itemId: string, item: any): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${itemId}/item/TRUE_FALSE`,
      item,
      { withCredentials: true }
    );
  }

  edit_order_list(itemId: string, item: any): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${itemId}/item/ORDER_LIST`,
      item,
      { withCredentials: true }
    );
  }

  edit_MRQ(itemId: string, item: any): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${itemId}/item/MRQ`,
      item,
      { withCredentials: true }
    );
  }

  editAssociation(itemId: string, item: any): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${itemId}/item/ASSOCIATION`,
      item,
      { withCredentials: true }
    );
  }

  edit_cloze_text(itemId: string, item: any): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${itemId}/item/CLOZE_TEXT`,
      item,
      { withCredentials: true }
    );
  }

  edit_cloze_dropdown(itemId: string, item: any): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${itemId}/item/CLOZE_DROPDOWN`,
      item,
      { withCredentials: true }
    );
  }

  deleteItem(itemId: string): Observable<ResourceCreated> {
    return this.http.delete<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/${itemId}/item`,
      { withCredentials: true }
    );
  }
}
