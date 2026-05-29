import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditItemService {

  //private data = new Subject<any>();
  formType: string;
  data: any;

  constructor() { }

  /* setEditItem(previewData: any, itemType: string){
    this.data.next(previewData);
    this.formType = itemType;
    console.log(this.data, this.formType);
  } */

  /* getData(){
    return this.data.asObservable();
  } */
}
