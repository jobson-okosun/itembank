import { ItemUtilitiesService } from './../item-utilities.service';
import { ItemHttpService } from './../item-http.service';
import { ListAllSubjects } from './../models/list-all-subjects.model';
import { Component, OnInit } from '@angular/core';
import { DropdownSubjectList } from '../models/dropdown-subject-list.model';

@Component({
  selector: 'app-items-subject-and-topic-addition',
  templateUrl: './items-subject-and-topic-addition.component.html',
  styleUrls: ['./items-subject-and-topic-addition.component.scss']
})
export class ItemsSubjectAndTopicAdditionComponent implements OnInit {

  subjects: DropdownSubjectList[] = [];
  topics: any[]
  selectedSubject: any;

  constructor(private itemService: ItemHttpService, private itemUtil: ItemUtilitiesService) { }

  ngOnInit(): void {
    this.itemService.fetchAllSubjectsDropdown().subscribe((value) => {
      if(value){
        this.subjects = value;
      }
    })
  }

  saveItemTrail($event: any){
    this.itemUtil.currentItemTrail.subjectId = $event;
    // console.log(this.selectedSubject);
  }

}
