import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-field-settings',
  templateUrl: './custom-field-settings.component.html',
  styleUrls: ['./custom-field-settings.component.scss']
})
export class CustomFieldSettingsComponent implements OnInit {

  constructor() { }

  fields: any = [{
    name:"firstName",
    type:"textBox",
    order:2
  }]

  ngOnInit(): void {
  }

  addField():void{
    let newField = {name:'', type:'', order: ''}
    this.fields.push(newField)
  }

  deleteField(indexToRemove:number):void{
    this.fields.splice(indexToRemove, 1)
  }

}
