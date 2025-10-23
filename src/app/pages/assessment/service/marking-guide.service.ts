import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResourceCreated } from "src/app/shared/model/resource-created";
import { environment } from "src/environments/environment";
import { AddEditSchemeQuestionMarkingGuideDTO, EditMarkTypeDTO, EditSchemeQuestionSectionScoreDB, GeneralScoreDB, GeneralScoreDTO, markingGuideDTO, MarkTypeDBDTO, MarkTypeDTO, NewSchemeQuestionDTO, NewSchemeQuestionSectionDTO, ResourceModified, SchemePageData, SchemeQuestion, SchemeQuestionSections, SchemeQuestionSectionScoreDB, SchemeQuestionSectionScoreDTO, SchemeSectionsResponseDTO, SelectSchemeQuestionToAdd } from "../model/marking-guide-types";

@Injectable({
    providedIn: "root",
})
export class MarkingGuideService {
    constructor(private http: HttpClient) { }

    fetchMarkingGuideAssessmentSections(assessmentId: string): Observable<SchemeSectionsResponseDTO[]> {
        return this.http.get<SchemeSectionsResponseDTO[]>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/list_subjects_in_exam`,
            { withCredentials: true }
        );
    }

    addMarkingSchemeToAssementSection(assessmentId: string, sectionId: string): Observable<ResourceCreated> {
        return this.http.post<ResourceCreated>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/add_scheme`,
            { section_id: sectionId },
            { withCredentials: true }
        );
    }

    fetchMarkingGuideAssessmentSectionScheme(assessmentId: string, sectionId: string, schemeId: string): Observable<SchemePageData> {
        return this.http.get<SchemePageData>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme_id/${schemeId}/fetch_scheme_page`,
            { withCredentials: true }
        );
    }

    createMarkTypes(assessmentId: string, sectionId: string, payload: MarkTypeDTO): Observable<MarkTypeDBDTO> {
        return this.http.patch<MarkTypeDBDTO>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/add_mark_type`,
            payload,
            { withCredentials: true }
        );
    }

    editMarkTypes(assessmentId: string, sectionId: string, payload: EditMarkTypeDTO): Observable<MarkTypeDBDTO> {
        return this.http.patch<MarkTypeDBDTO>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/edit_mark_type`,
            payload,
            { withCredentials: true }
        );
    }

    deleteMarkType(assessmentId: string, sectionId: string, schemeId: string, markTypeId: string, markTypeCategory: string): Observable<ResourceModified> {
        return this.http.delete<MarkTypeDBDTO>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme/${schemeId}/mark_type/${markTypeId}/category/${markTypeCategory}/delete_mark_type`,
            { withCredentials: true }
        );
    }

    updateGeneralMarkingGuide(assessmentId: string, sectionId: string, payload: markingGuideDTO): Observable<ResourceModified> {
        return this.http.patch<MarkTypeDBDTO>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/add_general_guide`,
            payload,
            { withCredentials: true }
        );
    }

    addScoreToGeneralMarkingGuide(assessmentId: string, sectionId: string, payload: GeneralScoreDTO): Observable<GeneralScoreDB> {
        return this.http.patch<GeneralScoreDB>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/add_general_score`,
            payload,
            { withCredentials: true }
        );
    }

    editGeneralScore(assessmentId: string, sectionId: string, payload: GeneralScoreDB): Observable<ResourceModified> {
        return this.http.patch<ResourceModified>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/edit_general_score`,
            payload,
            { withCredentials: true }
        );
    }

    deleteGeneralScore(assessmentId: string, sectionId: string, schemeId: string, markTypeId: string, markTypeCategory: string, generalScoreId: string): Observable<ResourceModified> {
        return this.http.delete<MarkTypeDBDTO>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme/${schemeId}/mark_type/${markTypeId}/general_score/${generalScoreId}/category/${markTypeCategory}/delete_general_score`,
            { withCredentials: true }
        );
    }

    fetchQuestionsForSelection(assessmentId: string, sectionId: string): Observable<SelectSchemeQuestionToAdd[]> {
        return this.http.get<SelectSchemeQuestionToAdd[]>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/list_questions_to_add_to_scheme`,
            { withCredentials: true }
        );
    }

    addQuestionToScheme(assessmentId: string, sectionId: string, schemeId: string, payload: NewSchemeQuestionDTO): Observable<SchemeQuestion> {
        return this.http.patch<SchemeQuestion>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme_id/${schemeId}/add_question`,
            payload,
            { withCredentials: true }
        );
    }

    addOrEditQuestionMarkingGuide(assessmentId: string, sectionId: string, schemeId: string, payload: AddEditSchemeQuestionMarkingGuideDTO): Observable<ResourceModified> {
        return this.http.patch<ResourceModified>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme_id/${schemeId}/add_edit_question_marking_guide`,
            payload,
            { withCredentials: true }
        );
    }

    addSectionToSchemeQuestion(assessmentId: string, sectionId: string, schemeId: string, payload: NewSchemeQuestionSectionDTO): Observable<SchemeQuestionSections> {
        return this.http.patch<SchemeQuestionSections>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme_id/${schemeId}/scheme_add_section_to_question`,
            payload,
            { withCredentials: true }
        );
    }

    editSchemeQuestionSection(assessmentId: string, sectionId: string, schemeId: string, schemeQuestionId: string, payload: SchemeQuestionSections): Observable<ResourceModified> {
        return this.http.patch<ResourceModified>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme_id/${schemeId}/scheme_question/${ schemeQuestionId }/scheme_edit_question_section`,
            payload,
            { withCredentials: true }
        );
    }

    addScoreToSchemeQuestionSection(assessmentId: string, sectionId: string, schemeId: string, payload: SchemeQuestionSectionScoreDTO): Observable<SchemeQuestionSectionScoreDB> {
        return this.http.patch<SchemeQuestionSectionScoreDB>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme_id/${schemeId}/scheme_add_score_to_question_section`,
            payload,
            { withCredentials: true }
        );
    }

    editScoreInSchemeQuestionSection(assessmentId: string, sectionId: string, schemeId: string, payload: EditSchemeQuestionSectionScoreDB): Observable<ResourceModified> {
        return this.http.patch<ResourceModified>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme_id/${schemeId}/scheme_edit_score_in_question_section`,
            payload,
            { withCredentials: true }
        );
    }

    deleteSchemeQuestionSectionScore(
        assessmentId: string,
        sectionId: string,
        schemeId: string,
        markTypeId: string,
        scoreId: string,
        schemeQuestionId: string,
        markCategory: string): Observable<ResourceModified> {
        return this.http.delete<ResourceModified>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme/${schemeId}/mark_type/${markTypeId}/score/${scoreId}/scheme_question/${schemeQuestionId}/category/${markCategory}/delete_section_score`,
            { withCredentials: true }
        );
    }



} 