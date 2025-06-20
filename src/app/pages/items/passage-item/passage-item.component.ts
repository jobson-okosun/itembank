import { AllPassagesService } from './../../passages/list-passages/all-passages.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ItemUtilitiesService } from './../item-utilities.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Passage } from './model/passage.model';
import { PassageService } from 'src/app/shared/passage-service/passage.service';
import { ItemHttpService } from '../item-http.service';
import { ItemTagsDtos } from '../models/item-tags-dtos';
import { ItemStatusEnum } from '../models/item-status-enum';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-passage-item',
  templateUrl: './passage-item.component.html',
  styleUrls: ['./passage-item.component.scss'],
})
export class PassageItemComponent implements OnInit, OnDestroy {
  @Input() formType: string = '';

  selectedItemType: string = '';

  passage: Passage = new Passage();

  tags: ItemTagsDtos[] = [];

  preview: boolean = false;

  previewData: Passage;

  constructor(
    public itemUtil: ItemUtilitiesService,
    private passageService: AllPassagesService,
    private location: Location,
    private itemService: ItemHttpService
  ) {}

  ngOnInit(): void {}

  setItemType(value: string) {
    this.selectedItemType = value;
  }

  doPreview(itemForm: any) {
    this.preview = true;
    this.itemUtil.previewItem = true
    this.previewData = this.passage;
  }

  recieveTags(tags: any) {
    this.tags = tags;
  }

  buildItem(itemForm: any) {
   

    this.passage.itemTagsDTOS = this.tags.map((tag) => {
      return { tagId: tag.tagId };
    });;

    this.passage.itemStatus = ItemStatusEnum.PUBLISHED;

    this.passage.subjectId = this.passageService.currentPassageTrail.subjectId;

    this.passage.topicId = this.passageService.currentPassageTrail.topicId;
  }

  savePassage(itemForm: any) {
    this.buildItem(itemForm);
    /* this.itemUtil.passageId = this.item.passageId;

    this.passageService.savePassage(this.item);
    console.log(this.item); */
    this.itemService
      .createNewPassage(this.passage)
      .toPromise()
      .then((response) => {
        if(response){
          // console.log(response)
          Swal.fire({
            icon: 'success',
            title: 'Congratulations',
            text: 'You have successfully added a new passage.'
          })
        }
        this.location.back();
      })
      .catch((error: HttpErrorResponse) => {
        // console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'failed',
          text: error.error.message
        })
      });
  }

  savePassageAsDraft(itemForm: any) {}

  savePassageAndAddQuestion(itemForm: any) {
    // console.log(this.passage);
  }

  returnData(data) {
    this.preview = false;
    //this.previewData = data;
    this.passage = data;
    // console.log(data);
  }

  ngOnDestroy(): void {
    this.itemUtil.previewItem = false
     
   }
}
