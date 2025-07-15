import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Participant_Result_Data_DTO, ParticipantSectionTranscript } from "../../items/models/result";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Grading } from "./grade.component";
import { ResourceCreated } from "src/app/shared/model/resource-created";

@Injectable({ providedIn: 'root' })

export class GradingService { 
    constructor(private _http: HttpClient) { }

    getGradingSections( assessmentId: string, sectionId: string, participantId: string): Observable<ParticipantSectionTranscript[]> {
      const url = `/examalpha/api/v1/sch_mon_grd/reports/grading/items_to_grade/assessment/${assessmentId}/section/${sectionId}/participant/${participantId}`;
  
      return this._http.get<ParticipantSectionTranscript[]>( environment.schedulerIP + url, { withCredentials: true });
    }

    getParticipantGradingData(assessmentId: string, sectionId: string, participantId: string): Observable<Participant_Result_Data_DTO> {
        const url = `/examalpha/api/v1/sch_mon_grd/reports/result/participant_data/assessment/${assessmentId}/section/${sectionId}/participant/${ participantId }`;
    
        return this._http.get<Participant_Result_Data_DTO>( environment.schedulerIP + url, { withCredentials: true });
    }

    createManualGrade(payload: Grading[], assessmentId, sectionId, participantId): Observable<ResourceCreated> {
        const url = `/examalpha/api/v1/sch_mon_grd/reports/grading/grade_manual_items/assessment/${assessmentId}/section/${sectionId}/participant/${ participantId }`;
    
        return this._http.post<ResourceCreated>( environment.schedulerIP + url, payload, { withCredentials: true });
    }
}
