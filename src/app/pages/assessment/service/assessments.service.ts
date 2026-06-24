import { NewAssessmentSectionTemplate } from "./../model/new-assessment-section-template.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResourceCreated } from "src/app/shared/model/resource-created";
import { environment } from "src/environments/environment";
import { NewAssessmentDetailTemplate } from "../model/new-assessment-detail-template.model";
import { NewAssessmentSettingsTemplate } from "../model/new-assessment-settings-template.model";
import { AssessmentList, AssessmentListPage, ExaminerAppDownloadPage, ExaminerClearAppPage } from "../model/assessment-list";
import { SingleAssessment } from "../model/single-assessment";
import { NewAssessment } from "../model/new-assessment.model";
import { AssessmentSettings } from "../model/assessment-settings";
import { NewAssessmentSection } from "../model/new-assessment-section";
import { BlockDetails, SectionDetails } from "../model/section-details";
import { AssessmentSections } from "../model/assessment-sections";
import { NewSectionBlock } from "../model/new-section-block";
import { AssessmentFilterResult } from "../model/assessment-filter-result";
import { AssessmentFilterInformation } from "../../items/models/assessment-filter-information";
import { AssessmentPassageFilter } from "../model/assessment-passage-filter";
import { ListAllItemsPage } from "../../items/models/list-all-items-page.model";
import { ListBlockItems } from "../model/list-block-items";
import { NewAssessmentTemplate } from "../model/new-assessment-template";
import { Publish } from "../model/publish";
import { SectionItemCount } from "../model/section-item-count";
import { ImportTemplate } from "../model/import-template";
import { NotifierService } from "angular-notifier";
import { AssessmentFromTemplateRequest } from "../model/assessment-template.model";

@Injectable({
  providedIn: "root",
})
export class AssessmentsService {
  activeAssessment: string;
  activeAssessmentDeliveryMethod: string;
  schedulerAssessmentId: string;
  activeAssessmentId: string;
  currentBlock: BlockDetails;

  constructor(private http: HttpClient, private notifier: NotifierService) {}

  validateBlockSection(newBlock: NewSectionBlock, section: SectionDetails) {
    // console.log(this.currentBlock, "currentBlock");
    // console.log(newBlock, "newblock");
    // console.log(section, "section");
    let totalBlockQuestions = 0;
    let totalQuestionPerCandidate = 0;

    if (newBlock.totalQuestions <= 0) {
      // todo: ask if this is it : "change the error message on new question block to total question in block from total question expected"
      this.notifier.notify(
        "error",
        "The total questions in block must be above 0!"
      );
      return false;
    }

    if (newBlock.totalQuestions > section.totalQuestions) {
      this.notifier.notify(
        "error",
        `The total questions expected cannot exceed ${section.totalQuestions}!`
      );
      return false;
    }

    if (newBlock.totalQuestionsPerCandidate > newBlock.totalQuestions) {
      this.notifier.notify(
        "error",
        "The total question per candidate cannot be more than the total questions specified for the block!"
      );
    }

    section.blockDetailsDTOS.forEach((block) => {
      // console.log(block.totalQuestionsPerStudent, "block total question");
      totalQuestionPerCandidate += Number(block.totalQuestionsPerStudent || 0);
    });
    // console.log(newBlock.totalQuestionsPerCandidate + totalQuestionPerCandidate);

    if (
      newBlock.totalQuestionsPerCandidate + totalQuestionPerCandidate >
      section.totalQuestionsPerCandidate
    ) {
      this.notifier.notify(
        "error",
        `The total questions per candidate cannot exceed ${section.totalQuestionsPerCandidate} in this subject!`
      );

      return false;
    }
    if (
      newBlock.totalQuestionsPerCandidate > section.totalQuestionsPerCandidate
    ) {
      this.notifier.notify(
        "error",
        `The total questions per candidate cannot exceed ${section.totalQuestionsPerCandidate}  question per candidate!`
      );

      return false;
    }

    // if(newBlock.totalQuestionsPerCandidate < this.currentBlock.totalQuestionsPerCandidate){
    //   this.notifier.notify(
    //     "error",
    //     `error message!`
    //   );
    //   console.log("hello")

    //   return false;
    // }

    if (newBlock.totalQuestionsPerCandidate <= 0) {
      this.notifier.notify(
        "error",
        "The total questions expected per candidate must be above 0!"
      );
      return false;
    }

    section.blockDetailsDTOS.forEach((block) => {
      totalBlockQuestions += block.totalQuestions;
    });

    if (
      newBlock.totalQuestions + totalBlockQuestions >
      section.totalQuestions
    ) {
      const remainder = section.totalQuestions - totalBlockQuestions;
      if (remainder > 0) {
        this.notifier.notify(
          "error",
          `You have room for only ${remainder} more questions!`
        );
        return false;
      } else if (remainder <= 0) {
        this.notifier.notify(
          "error",
          `You have room for only ${remainder} more questions!`
        );
        return false;
      }
    }

    return true;
  }

  validateSection(newSection: NewAssessmentSection) {
    if (newSection.totalQuestions <= 0) {
      this.notifier.notify(
        "error",
        "The total number of questions expected must be above 0!"
      );
      return false;
    }

    if (newSection.totalQuestionsPerStudent <= 0) {
      this.notifier.notify(
        "error",
        "The total questions expected per candidate must be above 0!"
      );
      return false;
    }

    return true;
  }

  importAssessmentTemplate(
    template: ImportTemplate
  ): Observable<SingleAssessment> {
    return this.http.patch<SingleAssessment>(
      `${environment.developmentIP}/itembank/assessments/assessment/${template.assessmentId}/import_template`,
      template,
      { withCredentials: true }
    );
  }

  fetchSchedulerAssessmentId(
    assessmentId: string
  ): Observable<ResourceCreated> {
    return this.http.get<ResourceCreated>(
      `${environment.schedulerIP}/schedule/assessment/remote/${assessmentId}/get_scheduler_id`,
      { withCredentials: true }
    );
  }

  createAssessmentDetailsTemplate(
    newAssessmentDetails: NewAssessmentDetailTemplate
  ): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/template/assessmentdetails/`,
      newAssessmentDetails,
      { withCredentials: true }
    );
  }

  createAssessmentSettingsTemplate(
    newAssessmentSettings: NewAssessmentSettingsTemplate
  ): Observable<ResourceCreated> {
    return this.http.post(
      `${environment.developmentIP}/itembank/items/template/assessmentsettings/`,
      newAssessmentSettings,
      { withCredentials: true }
    );
  }

  createAssessmentSectionTemplate(
    newAssessmentSectionTemplate: NewAssessmentSectionTemplate
  ): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/items/template/assessmentsections/`,
      newAssessmentSectionTemplate,
      { withCredentials: true }
    );
  }

  createNewAssessment(assessment: NewAssessment): Observable<NewAssessment> {
    return this.http.post<NewAssessment>(
      `${environment.developmentIP}/itembank/assessments`,
      assessment,
      { withCredentials: true }
    );
  }

  saveAssessmentTemplate(
    assessmentId: string,
    assessment: NewAssessmentTemplate
  ): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/save_as_template`,
      assessment,
      { withCredentials: true }
    );
  }

  createNewSection(
    assessmentId: string,
    section: NewAssessmentSection
  ): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/new_section`,
      section,
      { withCredentials: true }
    );
  }

  saveAssessmentSectionTemplate(
    assessmentId: string,
    sectionId: string,
    newSectionTemplate: NewAssessmentTemplate
  ): Observable<NewAssessmentTemplate> {
    return this.http.post<any>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/save_as_template`,
      newSectionTemplate,
      { withCredentials: true }
    );
  }

  createNewBlock(
    assessmentId: string,
    sectionId: string,
    block: NewSectionBlock
  ): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/new_block`,
      block,
      { withCredentials: true }
    );
  }

  updateBlock(
    assessmentId: string,
    sectionId: string,
    blockId: number,
    block: BlockDetails
  ): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/block/${blockId}`,
      block,
      { withCredentials: true }
    );
  }

  deleteBlock(
    assessmentId: string,
    sectionId: string,
    blockId: string | number
  ): Observable<ResourceCreated> {
    return this.http.delete<ResourceCreated>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/block/${blockId}`,
      { withCredentials: true }
    );
  }

  deleteSection(
    assessmentId: string,
    sectionId: string
  ): Observable<ResourceCreated> {
    return this.http.delete<ResourceCreated>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}`,
      { withCredentials: true }
    );
  }

  saveManualSelectedQuestionsToAssessment(
    assessmentId: string,
    sectionId: string,
    blockId: number,
    items: string[]
  ): Observable<ResourceCreated> {
    return this.http.post<ResourceCreated>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/new_block/${blockId}/manual_selection/passage_single_item`,
      items,
      { withCredentials: true }
    );
  }

  fetchAllAssessment(
    page?: number,
    pageSize?: number
  ): Observable<AssessmentList> {
    return this.http.get<AssessmentList>(
      `${environment.developmentIP}/itembank/assessments?page=${page}&size=${pageSize}`,
      { withCredentials: true }
    );
  }

  fetchAllAssessmentV2(
    page?: number,
    pageSize?: number
  ): Observable<AssessmentListPage> {
    return this.http.get<AssessmentListPage>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/list_assessments_v2?page=${page}&size=${pageSize}`,
      { withCredentials: true }
    );
  }

  fetchSingleAssessmentSettings(
    assessmentId: string
  ): Observable<AssessmentSettings> {
    return this.http.get<AssessmentSettings>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/assessment_settings`,
      /* `${environment.developmentIP}/itembank/assessments/${assessmentId}/assessment_settings`, */
      { withCredentials: true }
    );
  }

  fetchSingleAssessment(assessmentId: string): Observable<SingleAssessment> {
    return this.http.get<SingleAssessment>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}`,
      { withCredentials: true }
    );
  }

  fetchSections(assessmentId: string, sectionId: string): Observable<any> {
    return this.http.get<any>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/settings`,
      { withCredentials: true }
    );
  }

  listFilterBlocks(
    assessmentId: string,
    sectionId: string,
    subjectId: string,
    blockId: string
  ): Observable<any> {
    return this.http.get<any>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/subject/${subjectId}/block/${blockId}/listblockfilters`,
      { withCredentials: true }
    );
  }

  getSectionSettings(
    assessmentId: string,
    sectionId: string
  ): Observable<AssessmentSections> {
    return this.http.get<AssessmentSections>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/settings`,
      { withCredentials: true }
    );
  }

  updateSectionSettings(
    assessmentId: string,
    sectionId: string,
    settings: AssessmentSections
  ): Observable<ResourceCreated> {
    return this.http.put<ResourceCreated>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/edit_settings`,
      settings,
      { withCredentials: true }
    );
  }

  saveAssessmentSettings(
    assessment: AssessmentSettings,
    assessmentId: string
  ): Observable<AssessmentSettings> {
    return this.http.put<AssessmentSettings>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/edit_assessment_settings`,
      /* `${environment.developmentIP}/itembank/assessments/${assessmentId}/edit_assessment_settings`, */
      assessment,
      { withCredentials: true }
    );
  }

  newAssessmentFilter(
    filter: AssessmentFilterInformation,
    assessmentId?: string,
    sectionId?: string,
    blockId?: string
  ): Observable<AssessmentFilterResult> {
    return this.http.post<AssessmentFilterResult>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/new_block/${blockId}/new_filter_single`,
      filter,
      { withCredentials: true }
    );
  }

  deleteAssessmentFilter(
    assessmentId: string,
    sectionId: string,
    blockId: string,
    filterId: string
  ): Observable<ResourceCreated> {
    return this.http.delete<ResourceCreated>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/block/${blockId}/filter/${filterId}`,
      { withCredentials: true }
    );
  }

  newAssessmentPassageFilter(
    assessmentId,
    sectionId,
    blockId,
    filterOptions
  ): Observable<AssessmentFilterResult> {
    return this.http.post<AssessmentFilterResult>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/new_block/${blockId}/new_filter_passage`,
      filterOptions,
      { withCredentials: true }
    );
  }

  assessmentPassageFilterWithPassageQuestionsSpecified(
    filterOptions: AssessmentPassageFilter
  ): Observable<AssessmentFilterResult> {
    // itembank/api/items/assessment/passage-filter/assessment/items_in_passage/
    return this.http.post<AssessmentFilterResult>(
      `${environment.developmentIP}/itembank/items/assessment/passage-filter/items_in_passage/${filterOptions.maxPassageItemsCount}`,
      filterOptions,
      { withCredentials: true }
    );
  }

  fetchBlockItems(
    assessmentId: string,
    sectionId: string,
    blockId: string
  ): Observable<ListBlockItems[]> {
    return this.http.get<ListBlockItems[]>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/new_block/${blockId}/items`,
      { withCredentials: true }
    );
  }

  fetchBlockPassages(
    assessmentId: string,
    sectionId: string,
    blockId: string
  ): Observable<any> {
    return this.http.get<any>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/new_block/${blockId}/passages`,
      { withCredentials: true }
    );
  }

  publishAssessment(
    assessmentId: string,
    assessment: Publish
  ): Observable<any> {
    return this.http.patch<any>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/publish`,
      assessment,
      { withCredentials: true }
    );
  }

  getTotalAssessmentItemsAndMarks(
    assessmentId: string
  ): Observable<SectionItemCount[]> {
    return this.http.get<SectionItemCount[]>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/itemscount`,
      { withCredentials: true }
    );
  }

  fetchAssessmentPassages(
    subjectId: string,
    topicId: string,
    itemsInPassage,
    page?: number,
    size?: number
  ): Observable<any> {
    return this.http.get<any>(
      `${environment.developmentIP}/itembank/items/assessment/passage/${subjectId}/${topicId}/assessment/items_in_passage/${itemsInPassage}?page=${page}&size=${size}`,
      { withCredentials: true }
    );
  }

  fetchExistingItemIds(
    assessmentId: string,
    sectionId: string
  ): Observable<Array<string>> {
    return this.http.get<Array<string>>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/existing_items`,
      { withCredentials: true }
    );
  }

  fetchExistingPassageIds(
    assessmentId: string,
    sectionId: string
  ): Observable<Array<string>> {
    return this.http.get<Array<string>>(
      `${environment.developmentIP}/itembank/assessments/${assessmentId}/section/${sectionId}/existing_passages`,
      { withCredentials: true }
    );
  }

  createExamUsingTemplate(
    payload: AssessmentFromTemplateRequest,
    templateId: string
  ): Observable<ResourceCreated> {
    return this.http.post(
      `${environment.developmentIP}/itembank/assessments/assessment_template/${templateId}`,
      payload,
      { withCredentials: true }
    );
  }

  baseURL = environment.developmentIP + '/sch_mon_grd/reports/monitor'

  fetchAppDownloads(page?: number,pageSize?: number): Observable<ExaminerAppDownloadPage> {
      const url = this.baseURL + `/list_examiners_app_download_registration?page=${ page }&size=${ pageSize }`

      return this.http.get<ExaminerAppDownloadPage>(url, { withCredentials: true})
  }

  fetchAppInstallations(page?: number,pageSize?: number): Observable<ExaminerClearAppPage> {
      const url = this.baseURL + `/list_examiners_clear_app?page=${ page }&size=${ pageSize }`

      return this.http.get<ExaminerClearAppPage>(url, { withCredentials: true})
  }

  fetchAppClears(page?: number,pageSize?: number): Observable<ExaminerClearAppPage> {
      const url = this.baseURL + `/list_examiners_clear_app?page=${ page }&size=${ pageSize }`

      return this.http.get<ExaminerClearAppPage>(url, { withCredentials: true})
  }

  // In-memory Mock Data Store for Exam Groups
  private mockExamGroups: any[] = [
    {
      id: "group-1",
      name: "Standard Recruitment 2026",
      dateCreated: new Date("2026-01-15T09:00:00Z").toISOString(),
      exams: [
        { id: "exam-1", name: "Aptitude Test Phase 1", createdDate: new Date("2026-01-15T09:00:00Z").toISOString() },
        { id: "exam-2", name: "Critical Thinking Exam", createdDate: new Date("2026-01-16T10:30:00Z").toISOString() }
      ]
    },
    {
      id: "group-2",
      name: "Management Trainee Selection",
      dateCreated: new Date("2026-03-10T14:30:00Z").toISOString(),
      exams: [
        { id: "exam-3", name: "Numerical Reasoning", createdDate: new Date("2026-03-10T14:30:00Z").toISOString() },
        { id: "exam-4", name: "Verbal Reasoning Test", createdDate: new Date("2026-03-11T11:00:00Z").toISOString() },
        { id: "exam-5", name: "Leadership Competency Assessment", createdDate: new Date("2026-03-12T15:00:00Z").toISOString() }
      ]
    },
    {
      id: "group-3",
      name: "Technical Internship Evaluation",
      dateCreated: new Date("2026-05-01T08:15:00Z").toISOString(),
      exams: []
    }
  ];

  createExamGroup(name: string): Observable<any> {
    const newGroup = {
      id: 'group-' + Math.random().toString(36).substring(2, 9),
      name: name,
      dateCreated: new Date().toISOString(),
      exams: []
    };
    this.mockExamGroups.unshift(newGroup);
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({ success: true, data: newGroup });
        observer.complete();
      }, 500);
    });
  }

  fetchExamGroups(page: number, size: number): Observable<any> {
    const start = page * size;
    const end = start + size;
    const content = this.mockExamGroups.slice(start, end).map(g => ({
      id: g.id,
      name: g.name,
      dateCreated: g.dateCreated,
      examsCount: g.exams.length
    }));
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({
          content: content,
          total: this.mockExamGroups.length,
          size: size,
          number: page
        });
        observer.complete();
      }, 400);
    });
  }

  deleteExamGroup(groupId: string): Observable<any> {
    this.mockExamGroups = this.mockExamGroups.filter(g => g.id !== groupId);
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({ success: true });
        observer.complete();
      }, 300);
    });
  }

  fetchExamsInGroup(groupId: string, page: number, size: number): Observable<any> {
    const group = this.mockExamGroups.find(g => g.id === groupId);
    const exams = group ? group.exams : [];
    const start = page * size;
    const end = start + size;
    const content = exams.slice(start, end);
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({
          content: content,
          total: exams.length,
          size: size,
          number: page,
          groupName: group ? group.name : ''
        });
        observer.complete();
      }, 400);
    });
  }

  removeExamFromGroup(groupId: string, examId: string): Observable<any> {
    const group = this.mockExamGroups.find(g => g.id === groupId);
    if (group) {
      group.exams = group.exams.filter(e => e.id !== examId);
    }
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({ success: true });
        observer.complete();
      }, 300);
    });
  }

  addExamToGroup(groupId: string, exam: any): Observable<any> {
    const group = this.mockExamGroups.find(g => g.id === groupId);
    if (group) {
      const exists = group.exams.some(e => e.id === exam.id);
      if (!exists) {
        group.exams.push({
          id: exam.id,
          name: exam.name,
          createdDate: exam.createdDate || new Date().toISOString()
        });
      }
    }
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({ success: true });
        observer.complete();
      }, 300);
    });
  }
}
