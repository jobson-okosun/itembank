export interface IAssessmentList {
  count: 1;
  content: Array<IAssessment>;
  page: string;
  size: string;
}

export interface IAssessment {
  id: string;
  name: string;
  deliveryMethod: string;
  duration: number;
  participants: number;
  createdDate: string;
  startDate: null;
  endDate: null;
}

export interface IParticipant {
  assessmentId: string;
  centerId?: string;
  fieldValues: Array<IFieldValue>;
  groupId?: string;
  batch?: string;
}

export interface IFieldValue {
  assessment_id: string;
  registration_field_id: string;
  value: string;
  values: Array<string>;
}

export interface IParticipantList {
  total: number;
  content: Array<IParticipantContent>;
  headers: any;
  page: number;
  size: number;
}

export interface IParticipantContent {
  id: string;
  assessmentId: string;
  groupName: string;
  fields: Record<string, string>;
  centerId?: string;
  registeredOn: string;
  batch?: IAssessmentBatchDTO;
  batch_id?: string;
}

export interface INewAssessmentCenter {
  address: string;
  assessment_id: string;
  center_id: string;
  contact_email: string;
  contact_phone: string;
  map_location?: string;
  name: string;
  org_id: string;
  state: string;
  id?: string;
}

export interface INewCenterFilters {
  assessmentId: string;
  centerId: string;
  fieldId: string;
  fieldValue: string;
  operatorType: OperatorType;
}

export interface ICenterFilters {
  field_id: string;
  field_name: string;
  field_value: string;
  id: number;
  operator_type: OperatorType;
}

export enum OperatorType {
  EQUAL = "EQUAL",
  IN = "IN",
}

export interface ICenters {
  centers: Array<ICenter>;

  page: number;
  size: number;
  total: number;
}
export interface ICenterFilter {
  fieldName: string;
  fieldValue: string;
  operatorType: OperatorType;
}

export interface ICenter {
  id: string;
  centerId: string;
  centerName: string;
  state: string;
  participants: number;
  assessmentId: string;
  filters: Array<ICenterFilter>;
}

export interface INewAdmin {
  address: string;
  assessmentId: string;
  centerId: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  state: string;
  id?: string;
}

export interface ICenterAdmins {
  centerAdmins: Array<ICenterAdmin>;
  total: number;
  page: number;
  size: number;
}
export interface ICenterAdmin {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  enabled: boolean;
  centerIdString: string;
  assessmentId: string;
  centerId: string;
  suspended: boolean;
}

export interface ICenterDetail {
  address: string;
  admins: ICenterAdmin[];
  assessment_id: string;
  center_id: string;
  contact_email: string;
  contact_phone: string;
  filters: string[];
  id: string;
  name: string;
  state: string;
}

export interface ICenterAdmin {
  address: string;
  email: string;
  enabled: boolean;
  id: string;
  name: string;
  phone: string;
  state: string;
}

export interface INewSectionGroup {
  name: string;
  sections: Array<ISection>;
  id?: string;
}

export interface ISection {
  id: string;
  name: string;
}

export interface IAssessmentDetail {
  centers: number;
  createdDate: string;
  deliveryMethod: string;
  duration: number;
  endDate: string;
  id: string;
  items: number;
  name: string;
  participants: number;
  sections: number;
  startDate: string;
  totalActiveAdmins: number;
}

export interface ISectionGroups {
  page: number;
  sectionGroups: Array<ISectionGroup>;
  size: number;
  total: number;
}

export interface ISectionGroup {
  assessmentId: string;
  // filters: ["string"];
  groupName: string;
  id: string;
  participants: number;
  sections: Array<ISection>;
}

export interface IMovePartipantToGroup {
  newGroupId: string;
  participantIds: Array<string>;
}
export interface IMovePartipantToCenter {
  newCenterId: string;
  participantIds: Array<string>;
}

export interface IMoveAdminToCenter {
  adminIds: Array<string>;
  newCenterId: string;
}

export interface ISearchParticipant {
  searchField: IParticipantSearchEnum;
  searchValue: string;
  dateRange: ISearchDateRange | null;
  batchId: string
}

export interface ISearchDateRange {
  start_date: String;
  end_date: String;
}

export enum IParticipantSearchEnum {
  CENTER_ID = "CENTER_ID",
  GROUP_NAME = "GROUP_NAME",
  REG_FIELD = "REG_FIELD",
  REG_DATE = "REG_DATE",
  REG_FIELD_DATE = "REG_FIELD_DATE",
  BATCH = 'BATCH'
}

export interface ISuspendOrResumeAdmin {
  adminId: string;
  suspended: boolean;
}
export interface ISuspendOrResumeProctor {
  adminId: string,
  suspended: boolean,
}

export interface ISuspendOrResumeParticipant {
  participant_id: string;
  flag: boolean;
}

export interface IFilterCenter {
  assessmentId: string;
  centerId?: string;
  centerName?: string;
  state?: string;
}

export interface IFilterCenterAdmin {
  name?: string;
  email?: string;
  centerId?: string;
  active?: boolean;
  suspended?: boolean;
}

export interface IFilterUnAssignedCenterAdmin {
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  username?: string;
}

export interface IUnassignedCenterAdmin {
  email: string;

  r_id: string;

  last_name: string;

  first_name: string;

  phone: string;

  username: string;
}

export interface ICenterDashboard {
  total_centers: number;

  total_assigned: number;
}

export interface ICenterAdminDashboard {
  total_admins: number;

  total_suspended: number;
}

export interface IParticipantDashboard {
  total_parts: number;

  total_suspended: number;

  total_completed: number;

  batches: Array<IAssessmentBatchDTO>;
}

export interface IUnassignedAdminList {
  admins: IUnassignedCenterAdmin[];
  page: number;
  size: number;
}

export interface FieldTextEditParticipantToJson {
  field_value: string;
  field_values?: string[];
  field_name: string;
  field_type: string;
  placement: number;
  field_id: string;
  display: boolean;
  login: boolean;
}

export interface IParticipantForEdit {
  id: string;
  assessmentId: string;
  groupName?: string;
  fields: Record<string, FieldTextEditParticipantToJson>;
  centerId: string;
  suspended: boolean;
  registeredOn: Date;
  batch_id: string;
}

export interface INewAssessmentParticipantFieldValue {
  value: string;
  values?: string[];
  assessment_id: string;
  org_id: string;
  registration_field_id: string;
  assessment_participant_id: string;
}

export interface IEditAssessmentParticipantDTO {
  assessmentId: string;
  fieldValues: Array<INewAssessmentParticipantFieldValue>;
  id: string;
  // batch_id?: string;
}

export interface IRemoveEnableLoginFlagDTO {
  fieldId: string;
  assessmentId: string;
  disable_login: boolean;
}

export interface ISectionGroupDashboard {
  total_participants: number;

  total_sections: number;

  total_section_groups: number;
}

export interface INewAssessmentBatchDTO {
  name: string;
  start_date_time: string;
  end_date_time: string;
}

export interface IAssessmentBatchDTO {
  id: string;
  name: string;
  start_date_time: string;
  end_date_time: string;
  participants_count?: number;
  // paticipant
}

export interface IParticipantBatchMovementDTO {
  newBatchId: string;
  participantIds: Array<string>;
}

export interface UnassignedProctorsResponse {
  data: Proctor[];
  meta: PaginationDTO;
}

export interface PaginationDTO {
  page: number;
  limit: number;
  total: number;
}

export interface Proctor {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  assignedCenters: any[];
}

export interface proctorQueryParams {
  page?: number,
  limit?: number,
  q?: string
}

export interface ProctorList {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  enabled: boolean;
  assessmentId: string;
  state?: string;
  address?: string;
  suspended: boolean;
}

export interface ListProctorPage {
  proctors: ProctorList[];
  admins?: ProctorList[];
  total: number;
  page: number;
  size: number;
}

// export interface InfractionsResponse {
//   data: Infraction[];
//   meta: Meta;
// }

interface Meta {
  page: number;
  limit: number;
  total: number;
}

export interface Infraction {
  name: InfractionType
  description: string
  category: InfractionCategory
  severity: InfractionSeverity
  enabled: boolean
  cooldown_seconds: number
  max_duration_seconds: number
  max_strikes: number
  action: InfractionAction
}

export enum InfractionType {
  LOOKING_AWAY = "LOOKING_AWAY",
  FACE_NOT_CENTERED = "FACE_NOT_CENTERED",
  MULTIPLE_FACES = "MULTIPLE_FACES",
  FACE_MISMATCH = "FACE_MISMATCH",
  FACE_NOT_DETECTED = "FACE_NOT_DETECTED",
  MOBILE_PHONE_DETECTED = "MOBILE_PHONE_DETECTED",
  BOOK_DETECTED = "BOOK_DETECTED",
  HEAD_PHONE_DETECTED = "HEAD_PHONE_DETECTED",
  EXTERNAL_KEYBOARD_DETECTED = "EXTERNAL_KEYBOARD_DETECTED",
  EXTERNAL_MOUSE_DETECTED = "EXTERNAL_MOUSE_DETECTED",
  CALCULATOR_DETECTED = "CALCULATOR_DETECTED",
  TALKING_DETECTED = "TALKING_DETECTED",
  BACKGROUND_VOICES_DETECTED = "BACKGROUND_VOICES_DETECTED",
  APP_MINIMIZATION_DETECTED = "APP_MINIMIZATION_DETECTED",
  SCREENSHOT_DETECTED = "SCREENSHOT_DETECTED",
  SCREEN_SHARING_DETECTED = "SCREEN_SHARING_DETECTED",
  EXTERNAL_SCREEN_DETECTED = "EXTERNAL_SCREEN_DETECTED",
  SCREEN_RECORDING_DETECTED = "SCREEN_RECORDING_DETECTED",
  COPY_PASTE_ATTEMPT = "COPY_PASTE_ATTEMPT",
  VPN_DETECTED = "VPN_DETECTED",
  PROXY_DETECTED = "PROXY_DETECTED",
  NETWORK_INSTABILITY = "NETWORK_INSTABILITY",
  CAMERA_DISABLED = "CAMERA_DISABLED",
  MICROPHONE_DISABLED = "MICROPHONE_DISABLED"
}

export enum InfractionCategory {
  HEAD_POSITION = "HEAD_POSITION",
  PRESENCE_AND_IDENTITY = "PRESENCE_AND_IDENTITY",
  DEVICE_AND_OBJECTS = "DEVICE_AND_OBJECTS",
  AUDIO = "AUDIO",
  SCREEN_AND_SYSTEM = "SCREEN_AND_SYSTEM",
  NETWORK_AND_ENVIRONMENT = "NETWORK_AND_ENVIRONMENT"
}

export enum InfractionSeverity {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH"
}

export enum ProctorActions {
  LOG = "LOG",
  WARN = "WARN",
  PAUSE_EXAM = "PAUSE_EXAM",
  FLAG_FOR_REVIEW = "FLAG_FOR_REVIEW",
  END_EXAM = "END_EXAM",
  CHAT = "CHAT",
  SPEAK = "SPEAK"
}

export enum InfractionAction {
  WARN = "WARN",
  PAUSE_EXAM = "PAUSE_EXAM",
  FLAG_FOR_REVIEW = "FLAG_FOR_REVIEW",
  END_EXAM = "END_EXAM"
}

export interface InfractionTemplate {
  id: string,
  name: string,
  type: string,
  description: string,
}

export interface UpdateInfractionsDTO {
  infraction_types: Infraction[],
}

export interface UseInfractionTemplateDTO {
  template_id: string,
}

export interface NewInfractionTemplateDTO {
  name: string,
  description: string,
  infraction_types: Infraction[],
}

export interface ProctorSettings {
  proctor_guide: string,
  proctor_allowed_actions: Array<{ action: string, enabled: boolean }>,
  proctor_candidates: number
}
