export interface AuditModel {
  createdAt?: string;
  createdBy?: AdminUser;
  updatedAt?: string;
  updatedBy?: AdminUser;
}

export interface AdminUser {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
}

export interface User extends AuditModel, ID {
  blocked: boolean;
  confirmed: boolean;
  email: string;
  username: string;
  profile: Profile;
  password: string;
  resetPasswordToken: string;
  confirmationToken: string
}

export interface Profile extends AuditModel, ID {
  phone: string;
  birthdate: string;
  accepted_terms_and_conditions: boolean;
}

export interface ID {
  id?: number;
}

export interface GoogleUserProfile {
  id: string;
  email: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
}

export interface FacebookUserProfile {
  id: string;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  picture: {
    data: {
      url: string;
    };
  };
}

export enum RoleEnum {
  Authenticated = "Authenticated",
  Public = "Public",
}

export interface Role extends ID, AuditModel {
    name: RoleEnum;
    description: string;
    type: string;
    permissions: any[];
  }
