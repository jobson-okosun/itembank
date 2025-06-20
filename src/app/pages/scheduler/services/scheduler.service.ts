import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  IEditRegField,
  INewFieldValue,
  // INewRegField,
  IRegField,
} from "../models/registration-fileds";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import {
  IAssessmentBatchDTO,
  IAssessmentDetail,
  IAssessmentList,
  ICenter,
  ICenterAdminDashboard,
  ICenterAdmins,
  ICenterDashboard,
  ICenterDetail,
  ICenterFilters,
  ICenters,
  // IAssessmentBatchDTO,
  IEditAssessmentParticipantDTO,
  IFilterCenter,
  IFilterCenterAdmin,
  IFilterUnAssignedCenterAdmin,
  IMoveAdminToCenter,
  IMovePartipantToCenter,
  IMovePartipantToGroup,
  INewAdmin,
  INewAssessmentBatchDTO,
  INewAssessmentCenter,
  INewAssessmentParticipantFieldValue,
  INewCenterFilters,
  INewSectionGroup,
  IParticipant,
  IParticipantBatchMovementDTO,
  IParticipantDashboard,
  IParticipantForEdit,
  IParticipantList,
  IRemoveEnableLoginFlagDTO,
  ISearchParticipant,
  ISection,
  ISectionGroup,
  ISectionGroupDashboard,
  ISectionGroups,
  ISuspendOrResumeAdmin,
  ISuspendOrResumeParticipant,
  IUnassignedAdminList,
  IUnassignedCenterAdmin,
} from "../models/assessments";
import { IResourceCreated } from "../models/resource-created";
import { ResourceCreated } from "src/app/shared/model/resource-created";
//import { ThirdPartyDraggable } from "@fullcalendar/interaction";

@Injectable({
  providedIn: "root",
})
export class SchedulerService {
  constructor(private http: HttpClient) {}

  fetchRegistrationFields(assessmentId: string): Observable<IRegField[]> {
    return this.http.get<IRegField[]>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/prf/list_registration_fields`,
      { withCredentials: true }
    );
  }

  fetchAssessments(page?: number, size?: number): Observable<IAssessmentList> {
    return this.http.get<IAssessmentList>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment?page=${page}&size=${size}`,
      { withCredentials: true }
    );
  }

  fetchAssessmentDetails(assessmentId: string): Observable<IAssessmentDetail> {
    return this.http.get<IAssessmentDetail>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/fetch_assessment`,
      { withCredentials: true }
    );
  }

  fetchAssessmentSectionGroups(
    assessmentId: string,
    page?: number,
    size?: number
  ): Observable<ISectionGroups> {
    return this.http.get<ISectionGroups>(
      `${
        environment.schedulerIP
      }/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/section_group/list_section_groups?page=${
        page ? page : 0
      }&size=${size ? size : 250}`,
      { withCredentials: true }
    );
  }

  deleteRegistrationField(
    assessmentId: string,
    fieldId: string
  ): Observable<IResourceCreated> {
    return this.http.delete<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/prf/field/${fieldId}`,
      { withCredentials: true }
    );
  }
  addRegistrationFieldValue(
    payload: INewFieldValue
  ): Observable<IResourceCreated> {
    return this.http.post<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${payload.assessment_id}/prf/new_field_value`,
      payload,
      { withCredentials: true }
    );
  }
  deleteRegistrationFieldValue(
    assessmentId: string,
    fieldId: string,
    arrayValue: string
  ): Observable<IResourceCreated> {
    return this.http.delete<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/prf/field/${fieldId}/array_value/${arrayValue}`,
      { withCredentials: true }
    );
  }

  addRegistrationField(payload: IRegField): Observable<IResourceCreated> {
    return this.http.post<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${payload.assessment_id}/prf/add_registration_field`,
      payload,
      { withCredentials: true }
    );
  }

  addParticipantToAssessment(
    payload: IParticipant
  ): Observable<IResourceCreated> {
    return this.http.post<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${payload.assessmentId}/prf/add_participant`,
      payload,
      { withCredentials: true }
    );
  }

  editRegistrationField(payload: IEditRegField): Observable<IResourceCreated> {
    return this.http.patch<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${payload.assessmentId}/prf/edit_registration_field`,
      payload,
      { withCredentials: true }
    );
  }

  downloadRegFieldTemplate(assessmentId: string): Observable<Blob> {
    return this.http.get(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/prf/download_template`,
      { withCredentials: true, responseType: "blob" }
    );
  }

  downloadTemplateForAdminUpload(): Observable<Blob> {
    return this.http.get(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/centers/admins/download_template`,
      { withCredentials: true, responseType: "blob" }
    );
  }
  downloadTemplateForCenterUpload(): Observable<Blob> {
    return this.http.get(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/centers/download_template`,
      { withCredentials: true, responseType: "blob" }
    );
  }

  uploadParticipantFile(
    assessmentId: string,
    payload: FormData
  ): Observable<IResourceCreated> {
    // console.log(
    //   `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/prf/upload_participants`
    // );
    return this.http.post<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/prf/upload_participants`,
      payload,
      { withCredentials: true }
    );
  }

  fetchParticipants(
    assessmentId: string,
    page: number,
    size: number
  ): Observable<IParticipantList> {
    return this.http.get<IParticipantList>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/prf/list_assessment_participants?page=${page}&size=${size}`,
      { withCredentials: true }
    );
  }

  createAssessmentCenter(
    payload: INewAssessmentCenter
  ): Observable<IResourceCreated> {
    return this.http.post<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${payload.assessment_id}/centers/new`,
      payload,
      { withCredentials: true }
    );
  }
  uploadCenters(
    assessmentId: string,
    payload: FormData
  ): Observable<IResourceCreated> {
    return this.http.post<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/centers/upload`,
      payload,
      { withCredentials: true }
    );
  }

  createCenterFilters(
    payload: INewCenterFilters
  ): Observable<IResourceCreated> {
    return this.http.post<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${payload.assessmentId}/centers/${payload.centerId}/filter`,
      payload,
      { withCredentials: true }
    );
  }

  fetchCenterFilters(
    assessmentId: string,
    centerId: string
  ): Observable<ICenterFilters[]> {
    return this.http.get<ICenterFilters[]>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/center/${centerId}/list_center_filters`,
      { withCredentials: true }
    );
  }

  fetchParticipantsInCenter(
    assessmentId: string,
    centerId: string,
    page?: number,
    size?: number
  ): Observable<IParticipantList> {
    return this.http.get<IParticipantList>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/center/${centerId}/list_participants?page=${page}&size=${size}`,
      { withCredentials: true }
    );
  }

  fetchAssessmentCenters(
    assessmentId: string,
    page?: number,
    size?: number
  ): Observable<ICenters> {
    // if (page && size) {
    return this.http.get<ICenters>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/centers/list_centers?page=${page}&size=${size}`,
      { withCredentials: true }
    );
    // }
  }

  fetchAssessmentCenterWithoutPagination(
    assessmentId: string
  ): Observable<ICenters> {
    return this.http.get<ICenters>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/centers/list_centers`,
      { withCredentials: true }
    );
  }

  addAdministrator(payload: INewAdmin): Observable<IResourceCreated> {
    return this.http.post<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${payload.assessmentId}/centers/${payload.centerId}/new_admin`,
      payload,
      { withCredentials: true }
    );
  }

  fetchCenterAdmins(
    assessmentId: string,
    page?: number,
    size?: number
  ): Observable<ICenterAdmins> {
    return this.http.get<ICenterAdmins>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/admins/center_admins?page=${page}&size=${size}`,
      { withCredentials: true }
    );
  }

  fetchSectionsDropdown(assessmentId: string): Observable<ISection[]> {
    return this.http.get<ISection[]>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/sections/dropdown`,
      { withCredentials: true }
    );
  }

  fetchSectionGroupParticipant(
    assessmentId: string,
    sectionGroupId: string,
    page?: number,
    size?: number
  ): Observable<IParticipantList> {
    return this.http.get<IParticipantList>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/section_group/${sectionGroupId}/list_participants?page=${page}&size=${size}`,
      { withCredentials: true }
    );
  }

  uploadCenterAdmins(
    assessmentId: string,
    payload: any
  ): Observable<IResourceCreated> {
    return this.http.post<IResourceCreated>(
      `
    ${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/admins/upload`,
      payload,
      { withCredentials: true }
    );
  }

  deleteFilter(
    assessmentId: string,
    centerId: string,
    filterId: string
  ): Observable<IResourceCreated> {
    return this.http.delete<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/center/${centerId}/filter/${filterId}/delete`,
      {
        withCredentials: true,
      }
    );
  }

  fetchCenterDetails(
    assessmentId: string,
    centerId: string
  ): Observable<ICenterDetail> {
    return this.http.get<ICenterDetail>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/center/${centerId}/center_details`,
      { withCredentials: true }
    );
  }

  addGroupSection(
    payload: INewSectionGroup,
    assessmentId: string
  ): Observable<IResourceCreated> {
    return this.http.post<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/section_group/new`,
      payload,
      { withCredentials: true }
    );
  }

  moveParticipantToAnotherSectionGroup(
    assessmentId: string,
    sectionGroupId: string,
    participantsToMoveDto: IMovePartipantToGroup
  ): Observable<ResourceCreated> {
    return this.http.patch<ResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/section_group/${sectionGroupId}/move_participants`,
      participantsToMoveDto,
      { withCredentials: true }
    );
  }

  moveParticipantToAnotherCenter(
    assessmentId: string,
    centerId: string,
    participantsToMoveToCenterDto: IMovePartipantToCenter
  ): Observable<ResourceCreated> {
    return this.http.patch<ResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/center/${centerId}/move_participants`,
      participantsToMoveToCenterDto,
      { withCredentials: true }
    );
  }

  moveAdminToAnotherCenter(
    assessmentId: string,
    centerId: string,
    adminsToMoveToNewCenterDto: IMoveAdminToCenter
  ): Observable<ResourceCreated> {
    return this.http.patch<ResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/centers/${centerId}/admins/move_admins`,
      adminsToMoveToNewCenterDto,
      { withCredentials: true }
    );
  }

  editAssessmentCenter(
    payload: INewAssessmentCenter
  ): Observable<ResourceCreated> {
    return this.http.patch<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${payload.assessment_id}/center/${payload.id}/edit`,
      payload,
      { withCredentials: true }
    );
  }

  editGroupSection(
    payload: INewSectionGroup,
    assessmentId: string,
    sectionGroupId: string
  ): Observable<IResourceCreated> {
    return this.http.patch<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/section_group/${sectionGroupId}/edit`,
      payload,
      { withCredentials: true }
    );
  }

  searchForParticipant(
    assessmentId: string,
    payload: ISearchParticipant,
    page?: number,
    size?: number
  ): Observable<IParticipantList> {
    return this.http.post<IParticipantList>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/prf/search_participants?page=${page}&size=${size}`,
      payload,
      { withCredentials: true }
    );
  }

  fetchSectionGroupDetails(
    assessmentId: string,
    sectionGroupId: string
  ): Observable<ISectionGroup> {
    return this.http.get<ISectionGroup>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/section_group/${sectionGroupId}/section_group_details`,
      { withCredentials: true }
    );
  }

  suspendOrResumeAdmin(
    assessmentId: string,
    payload: ISuspendOrResumeAdmin
  ): Observable<ResourceCreated> {
    return this.http.patch<ResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/admins/${payload.adminId}/suspend_resume`,
      payload,
      { withCredentials: true }
    );
  }

  suspendOrResumeParticipant(
    assessmentId: string,
    payload: ISuspendOrResumeParticipant
  ): Observable<ResourceCreated> {
    return this.http.patch<ResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/prf/${payload.participant_id}/suspend_resume_participant`,
      payload,
      { withCredentials: true }
    );
  }
  editAdministrator(payload: INewAdmin): Observable<IResourceCreated> {
    return this.http.patch<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${payload.assessmentId}/centers/${payload.centerId}/admins/${payload.id}/edit`,
      payload,
      { withCredentials: true }
    );
  }

  filterCenterByField(
    payload: IFilterCenter,
    page?: number,
    size?: number
  ): Observable<ICenters> {
    return this.http.post<ICenters>(
      `${
        environment.schedulerIP
      }/examalpha/api/v1/sch_mon_grd/schedule/assessment/${
        payload.assessmentId
      }/centers/filter_center?page=${page ? page : 0}&size=${
        size ? size : 250
      }`,
      payload,
      { withCredentials: true }
    );
  }

  filterCenterAdminByField(
    payload: IFilterCenterAdmin,
    assessmentId: string,
    page?: number,
    size?: number
  ): Observable<ICenterAdmins> {
    return this.http.post<ICenterAdmins>(
      `${
        environment.schedulerIP
      }/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/admins/center_admins/filter?page=${
        page ? page : 0
      }&size=${size ? size : 250}`,
      payload,
      { withCredentials: true }
    );
  }

  fetchUnassignedCenterAdmins(
    payload: IFilterUnAssignedCenterAdmin,
    assessmentId: string
  ): Observable<IUnassignedAdminList> {
    return this.http.post<IUnassignedAdminList>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/admins/un_assigned_center_admins`,
      payload,
      { withCredentials: true }
    );
  }

  assignAdminToCenter(
    assessmentId: string,
    centerId: string,
    unassaignedAdminIds: Array<string>
  ): Observable<IResourceCreated> {
    return this.http.post<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/admins/un_assigned_center_admins/center/${centerId}/assign`,
      unassaignedAdminIds,
      { withCredentials: true }
    );
  }

  uploadParticipantsPassport(
    assessmentId: string,
    payload: FormData
  ): Observable<IResourceCreated> {
    return this.http.post<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/prf/upload_participant_passports`,
      payload,
      { withCredentials: true }
    );
  }

  fetchCenterDashBoard(assessmentId: string): Observable<ICenterDashboard> {
    return this.http.get<ICenterDashboard>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/centers/dashboard`,
      { withCredentials: true }
    );
  }

  fetchCenterAdminDashboard(
    assessmentId: string
  ): Observable<ICenterAdminDashboard> {
    return this.http.get<ICenterAdminDashboard>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/admins/center_admins/dashboard`,
      { withCredentials: true }
    );
  }

  fetchParticipantsDashboard(
    assessmentId: string
  ): Observable<IParticipantDashboard> {
    return this.http.get<IParticipantDashboard>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/prf/dashboard`,
      { withCredentials: true }
    );
  }

  deleteCenter(
    assessmentId: string,
    centerId: string
  ): Observable<IResourceCreated> {
    return this.http.delete<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/center/${centerId}/delete`,
      { withCredentials: true }
    );
  }

  deleteSectionGroup(
    assessmentId: string,
    sectionGroupId: string
  ): Observable<IResourceCreated> {
    return this.http.delete<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/section_group/${sectionGroupId}/delete`,
      { withCredentials: true }
    );
  }

  fetchParticipantById(
    assessmentId: string,
    participantId: string
  ): Observable<IParticipantForEdit> {
    return this.http.get<IParticipantForEdit>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/prf/participant/${participantId}`,
      { withCredentials: true }
    );
  }

  editParticipant(
    payload: IEditAssessmentParticipantDTO
  ): Observable<IResourceCreated> {
    return this.http.patch<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${payload.assessmentId}/prf/participant/${payload.id}/edit`,
      payload,
      { withCredentials: true }
    );
  }

  moveParticipantToBatch(
    payload: IParticipantBatchMovementDTO,
    assessmentId: string
  ): Observable<IResourceCreated> {
    return this.http.patch<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/batch/${payload.newBatchId}/move_participants`,
      payload,
      { withCredentials: true }
    );
  }

  removeLoginFlag(payload: IRemoveEnableLoginFlagDTO): Observable<IResourceCreated> {
    return this.http.patch<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${payload.assessmentId}/prf/${payload.fieldId}/toggle_login`,
      payload,
      { withCredentials: true }
    );
  }

  fetchSectionGroupDashboard(
    assessmentId: string
  ): Observable<ISectionGroupDashboard> {
    return this.http.get<ISectionGroupDashboard>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/section_group/dashboard`,
      { withCredentials: true }
    );
  }

  createBatch(
    payload: INewAssessmentBatchDTO,
    assessmentId: string
  ): Observable<ResourceCreated> {
    return this.http.post(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/batch/new_batch`,
      payload,
      { withCredentials: true }
    );
  }
  deleteBatch(
    batchId: string,
    assessmentId: string
  ): Observable<ResourceCreated> {
    return this.http.delete<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/batch/${batchId}/delete_batch`,
      { withCredentials: true }
    );
  }

  editBatch(
    payload: IAssessmentBatchDTO,
    assessmentId: string
  ): Observable<IResourceCreated> {
    return this.http.patch<IResourceCreated>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/batch/edit_batch`,
      payload,
      { withCredentials: true }
    );
  }

  fetchBatch(assessmentId: string): Observable<Array<IAssessmentBatchDTO>> {
    return this.http.get<Array<IAssessmentBatchDTO>>(
      `${environment.schedulerIP}/examalpha/api/v1/sch_mon_grd/schedule/assessment/${assessmentId}/batch/list`,

      { withCredentials: true }
    );
  }
}
