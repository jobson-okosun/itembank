export class IRegField {
  assessment_id: string;
  id?: string;
  mandatory: boolean;
  name: string;
  placement: number;
  type_: string;
  unique: boolean;
  values?: Array<string>;
  display: boolean;
  login: boolean;
}
export class INewRegField extends IRegField {
  

  assessmentId: string;
  fieldType: string;
}
// export interface INewRegField {
//   assessmentId: string;
//   fieldType: string;
//   mandatory: boolean;
//   name: string;
//   placement: number;
//   unique: boolean;
//   values?: string[];
//   display: boolean;
//   login: boolean;
// }

export interface INewFieldValue {
  assessment_id: string;
  field_value: string;
  registration_field_id: string;
}

export interface IEditRegField {
  assessmentId: string;
  display: boolean;
  field_id: string;
  name: string;
  placement: number;
  login: boolean;
  mandatory: boolean;
}
