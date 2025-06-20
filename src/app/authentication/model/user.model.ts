export interface IUser {
  firstName: string;
  lastName: string;
  org_id: string;
  organization_name: string;
  roles: Array<string>;
  username: string;
}

export interface ILogin {
  username: string;
  password: string;
}
