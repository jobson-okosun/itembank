export class ListUsersModel {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  activated: boolean;
  organizationId: string;
  userSubjectsDTOS: Array<{subjectName: string, rowId: string}>;
  userRolesDTOList: Array<{roleId: string; role: string;}>;
  userTagsDTOList: Array<{tagId: string; tagName: string;}>;
  status?: string;
  updatingUserStatus?: boolean;
  registrationComplete: boolean
}
