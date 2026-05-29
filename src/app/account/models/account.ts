export interface AccountRegistration {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  organizationName: string;
}

export interface SetCredentialRequest {
  token: string;
  username: string;
  password: string;
}
