import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Participant_Result_Data_DTO, ParticipantSectionTranscript } from "../../items/models/result";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ResourceCreated } from "src/app/shared/model/resource-created";
import { SchemePageData } from "../../assessment/model/marking-guide-types";
import { Grading } from "../grading-item-types/drawing-and-writing/model/question-annotation.mode";

@Injectable({ providedIn: 'root' })

export class GradingService { 
    constructor(private _http: HttpClient) { }

    fetchMarkingGuide(assessmentId: string, sectionId: string, schemeId: string): Observable<SchemePageData> {
        return this._http.get<SchemePageData>(
            `${environment.developmentIP}/sch_mon_grd/schedule/assessment/${assessmentId}/marking_scheme/section/${sectionId}/scheme_id/${schemeId}/fetch_scheme_page`,
            { withCredentials: true }
        );
    }

    getGradingSections( assessmentId: string, sectionId: string, participantId: string): Observable<ParticipantSectionTranscript[]> {
      const url = `/examalpha/api/v1/sch_mon_grd/reports/grading/items_to_grade/assessment/${assessmentId}/section/${sectionId}/participant/${participantId}`;
  
      return this._http.get<ParticipantSectionTranscript[]>( environment.schedulerIP + url, { withCredentials: true });
    }

    getParticipantGradingData(assessmentId: string, sectionId: string, participantId: string): Observable<Participant_Result_Data_DTO> {
        const url = `/examalpha/api/v1/sch_mon_grd/reports/result/participant_data/assessment/${assessmentId}/section/${sectionId}/participant/${ participantId }`;
    
        return this._http.get<Participant_Result_Data_DTO>( environment.schedulerIP + url, { withCredentials: true });
    }

    createManualGrade(payload: Grading[], assessmentId:string, sectionId:string, participantId:string): Observable<ResourceCreated> {
        const url = `/examalpha/api/v1/sch_mon_grd/reports/grading/grade_manual_items/assessment/${assessmentId}/section/${sectionId}/participant/${ participantId }`;
    
        return this._http.post<ResourceCreated>( environment.schedulerIP + url, payload, { withCredentials: true });
    }
}
