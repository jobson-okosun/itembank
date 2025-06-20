export class UserDetail {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  activated: boolean;
  createdAt: string;
  organizationId: string;
  role?: string;
  userRolesDTOList: [
    {
      roleId: string;
      role: string;
    }
  ];
  userSubjectsDTOS: [
    {
      id: string;
      subjectId: string;
      subjectName: string;
    }
  ];
}
