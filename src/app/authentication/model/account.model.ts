import { Role } from '../../shared/enum/role';

export class Account {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  enabled: true;
  authorities: [string];

  org_id: string;
  organization_name: string;
  roles: Array<string>;

  authority: Role;
}
