export interface Organization {
  organizationName: string;
  country: string;
  state: string;
  industry: string;
  addressLine1: string;
  addressLine2: string;
}

export interface UpdateOrganization {
  organizationName: string;
  country: string;
  state: string;
  industry: string;
  addressLine1: string;
  addressLine2: string;
}

export interface UpdatePassword {
  oldPassword: string;
  newPassword: string;
}
