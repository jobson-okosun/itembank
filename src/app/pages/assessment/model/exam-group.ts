export interface CreateExamGroupRequest {
  name: string;
}

export interface EditExamGroupRequest {
  name: string;
}

export interface ExamGroupDto {
  id: string;
  name: string;
  date_created: string;
  assessment_count: number;
}

export interface ExamGroupPage {
  data: ExamGroupDto[];
  total: number;
  page: number;
  size: number;
}

export interface AddAssessmentToGroupRequest {
  assessment_id: string;
}

export interface GroupAssessmentDto {
  assessment_id: string;
  assessment_name: string;
  assessment_start_date: string | null;
  assessment_end_date: string | null;
}

export interface GroupAssessmentsPage {
  data: GroupAssessmentDto[];
  total: number;
  page: number;
  size: number;
}

export interface AssessmentGroupMembershipDto {
  belongs_to_group: boolean;
  group_id: string | null;
  group_name: string | null;
}

export interface GroupRegFieldDto {
  id: string;
  name: string;
  type_: 'TEXTBOX' | 'SELECT' | 'CALENDAR' | 'IMAGE';
  mandatory: boolean;
  placement: number;
  values: (string | null)[];
  unique: boolean;
  display: boolean;
  login: boolean;
}

export interface AddGroupRegFieldRequest {
  name: string;
  placement: number;
  fieldType: 'TEXTBOX' | 'SELECT' | 'CALENDAR' | 'IMAGE';
  values: (string | null)[];
  mandatory: boolean;
  unique: boolean;
  display: boolean;
  login: boolean;
}

export interface EditGroupRegFieldRequest {
  name: string;
  placement: number;
  mandatory: boolean;
  display: boolean;
}
