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

export class AllAssessmentsService {

  assessments: Assessment[] = [];

  constructor() { 
    this.assessments = [
      {name:'Assessment-1', deliveryMethod:'Online', totalItems:20, duration:120, totalSections:5, dateCreated: '25-06-2022', status:'published', isSelected:false},
      {name:'Assessment-2', deliveryMethod:'Online', totalItems:10, duration:60, totalSections:3, dateCreated: '3-02-2022', status:'draft', isSelected:false},
      {name:'Assessment-3', deliveryMethod:'Offline', totalItems:50, duration:60, totalSections:4, dateCreated: '3-02-2022', status:'published', isSelected:false},
      {name:'Assessment-4', deliveryMethod:'Online', totalItems:25, duration:60, totalSections:5, dateCreated: '25-06-2022', status:'published', isSelected:false},
      {name:'Assessment-5', deliveryMethod:'Offline', totalItems:5, duration:60, totalSections:3, dateCreated: '3-02-2022', status:'draft', isSelected:false},
    ]
  }

  _getAsssessments(){
    return this.assessments;
  }
}
