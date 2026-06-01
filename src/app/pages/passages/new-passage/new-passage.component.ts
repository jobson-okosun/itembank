import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passage } from '../../items/passage-item/model/passage.model';
import { ItemTagsDtos } from '../../items/models/item-tags-dtos';
import { ItemUtilitiesService } from '../../items/item-utilities.service';
import { AllPassagesService } from '../list-passages/all-passages.service';
import { ItemHttpService } from '../../items/item-http.service';
import { ItemStatusEnum } from '../../items/models/item-status-enum';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Location, LocationChangeEvent } from '@angular/common';
import { SinglePassageModel } from '../../items/passage-item/model/single-passage-model.model';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/authentication/model/account.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-new-passage',
  templateUrl: './new-passage.component.html',
  styleUrls: ['./new-passage.component.scss'],
})
export class NewPassageComponent implements OnInit {
  @Input() passageEdit!: SinglePassageModel;

  selectedItemType: string = '';

  passage: Passage = new Passage();

  tags: ItemTagsDtos[] = [];

  preview: boolean = false;

  previewData: Passage;

  passageTrail: any;

  currentUser: Account = this.userService.getCurrentUser();

  savingPassage: boolean = false;

  /* subjectId: string = this.ar.snapshot.params['subjectId']; */

  constructor(
    private itemUtil: ItemUtilitiesService,
    private passageService: AllPassagesService,
    private location: Location,
    private itemService: ItemHttpService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.passageTrail = this.passageService.currentPassageTrail;
    console.log(
      'Is moderation currently enabled on this subject?::::',
      this.itemService.currentSubjectModerationEnabled
    );
    //console.log(this.passageTrail);
    if (this.passageEdit) {
      this.passage.stimulus = this.passageEdit.stimulus;
      this.passage.reference = this.passageEdit.reference;
      this.passage.itemTagsDTOS = this.passageEdit.itemTagsDTOS;
    }
  }

  setItemType(value: string) {
    this.selectedItemType = value;
  }

  doPreview(itemForm: any) {
    this.itemUtil.previewItem = true
    this.preview = true;
    this.previewData = this.passage;
  }

  recieveTags(tags: any) {
    tags.forEach((tag) => {
      let data = { tagId: tag.tagId };
      this.tags.push(data);
    });
  }

  buildItem(itemForm?: any) {
    // this.tags = this.tags.map((tag) => {
    //   return { tagId: tag.tagId };
    // });

    this.passage.itemTagsDTOS = this.tags.map((tag)=> {
      return {tagId: tag.tagId}
    });

    this.passage.subjectId = this.passageService.currentPassageTrail.subjectId;

    this.passage.topicId = this.passageService.currentPassageTrail.topicId;

    /* if(this.passageEdit) {
      this.passage.itemStatus = this.passageEdit.itemStatus;
    } */
  }

  savePassage(itemForm: any) {
    if (this.itemService.currentSubjectModerationEnabled) {
      this.passage.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else if (!this.itemService.currentSubjectModerationEnabled) {
      this.passage.itemStatus = ItemStatusEnum.PUBLISHED;
    }
    this.buildItem(itemForm);
    this.saveFunction();
  }

  back() {
    this.location.back();
  }

  savePassageAsDraft(itemForm: any) {
    this.passage.itemStatus = ItemStatusEnum.DRAFT;
    this.buildItem(itemForm);
    this.saveFunction();
  }

  saveFunction() {
    this.savingPassage = true;
    this.publishLoader();

    this.itemService
      .createNewPassage(this.passage)
      .toPromise()
      .then((response) => {
        if (response) {
          // console.log(response);
          this.savingPassage = false;
          Swal.close();
          Swal.fire({
            icon: 'success',
            title: 'Congratulations',
            text: 'You have successfully added a new passage.',
          });
        }
        this.location.back();
      })
      .catch((error: HttpErrorResponse) => {
        // console.log(error);
        this.savingPassage = false;
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: error.error.message,
        });
      });
  }

  returnData(data) {
    this.preview = false;
    //this.previewData = data;
    this.passage = data;
    // console.log(data);
  }

  updatePassage(status?: string) {
    // console.log(this.tags);
    let temp_tags: any[] = [];
    if (status) {
      this.passage.itemStatus = ItemStatusEnum.DRAFT;
    } else if (this.itemService.currentSubjectModerationEnabled) {
      this.passage.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      this.passage.itemStatus = ItemStatusEnum.PUBLISHED;
    }
    /* this.tags.forEach((tag) => {
      let data = { tagId: tag.tagId }
      this.passage.itemTagsDTOS.push(data);
    }); */

    if (this.tags.length > 0) {
      this.passage.itemTagsDTOS = this.tags;
    } else {
      this.passageEdit.itemTagsDTOS.forEach((tag) => {
        temp_tags.push({ tagId: tag.tagId });
      });
    }
    this.passage.itemTagsDTOS = temp_tags;
    this.passage.subjectId = this.passageTrail.subjectId;
    this.passage.topicId = this.passageTrail.topicId;
    //this.passageEdit.reference = this.passage.reference;
    //this.passageEdit.itemTagsDTOS = this.tags;
    //console.log('passage to update', this.passage);

    this.savingPassage = true;
    this.publishLoader();

    this.passageService
      .editPassage(this.passageEdit.id, this.passage)
      .subscribe(
        (value) => {
          if (value) {
            this.savingPassage = false;
            Swal.close();
            Swal.fire({
              title: 'Congratulations!',
              text: 'You have successfully updated this passage.',
              icon: 'success',
            });
          }
          //this.passage = new Passage();
          this.back();
        },

        (error: HttpErrorResponse) => {
          // console.log(error);
          this.savingPassage = false;
          Swal.close();
          Swal.fire({
            title: 'Failed!',
            text: error.error.message,
            icon: 'error',
          });
        }
      );
  }

  publishLoader(msg?: string) {
    if (!this.savingPassage) {
      return;
    } else {
      Swal.fire({
        title: msg ? msg : 'Saving the passage, Please Wait...',
        allowEnterKey: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    }
  }
}
