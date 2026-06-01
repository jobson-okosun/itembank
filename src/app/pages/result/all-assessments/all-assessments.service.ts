import { Injectable } from '@angular/core';


export interface Assessment{
  name: string;
  deliveryMethod: string;
  totalItems: number;
  duration: number;
  totalSections: number;
  dateCreated: string;
  status: string;
  isSelected: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AllAssessmentsResultsService {

  assessments: Assessment[] = [];

  constructor() { }

  _getAsssessments(){
    return this.assessments;
  }
}
