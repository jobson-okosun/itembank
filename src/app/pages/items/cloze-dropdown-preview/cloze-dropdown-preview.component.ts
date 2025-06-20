import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ItemHttpService } from '../item-http.service';
import { UserService } from 'src/app/shared/user.service';
import { Account } from 'src/app/authentication/model/account.model';
import { AllPassagesService } from '../../passages/list-passages/all-passages.service';
import { RecycleService } from '../../recycle/recycle.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { UsageHistory } from '../models/usage-history';
import { NotifierService } from 'angular-notifier';
import { ItemUtilitiesService } from '../item-utilities.service';
import { IndividualItem } from '../models/individual-item.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cloze-dropdown-preview',
  templateUrl: './cloze-dropdown-preview.component.html',
  styleUrls: ['./cloze-dropdown-preview.component.scss'],
})
export class ClozeDropdownPreviewComponent implements OnInit {
  @Input() component!: string;
  @Input() previewData: any;
  @Input() itemTrailInfo!: any;
  @Output() returnPreviewData = new EventEmitter();
  @Output() reload = new EventEmitter();

  currentUser: Account;
  displaySplit: boolean = false;
  clozeRenderArray: Array<any> = [];
  extractedTexts: Array<any> = [];
  extractedOptions: any;
  expectedCloze: any = [];
  showAnswer: boolean = false;
  subjectName: string = '';
  preview: boolean = false;
  assessmentActive: boolean = false;
  recycleComponentActive: boolean = this.recycleService.recycleActive;
  processing_delete: boolean = false;
  subjectId: string = this.itemService.subjectId;
  selectedItemId!: string;
  modalRef: any;
  itemUsageHistory: UsageHistory[] = [];
  loading_usage_history: boolean = false;
  isEditPreview: boolean = false;
  sanitizedContent: any;

  constructor(
    private router: Router,
    private itemService: ItemHttpService,
    private userService: UserService,
    private passageService: AllPassagesService,
    private recycleService: RecycleService,
    private modalService: NgbModal,
    private notifier: NotifierService,
    private itemUtil: ItemUtilitiesService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.subjectName = this.itemService.subjectName;
    this.assessmentActive = this.itemService.assessmentActive;
    /* let startIndex = 3;
    let lastIndex = this.previewData.stimulus.indexOf('</p>', startIndex);
    let content = this.previewData.stimulus.slice(startIndex, lastIndex); */
    //this.previewData.stimulus;
    // console.log(this.previewData.stimulus);
    // console.log(this.previewData.scoringOption.answers);
    this.isEditPreview = this.router.url.includes('edit-item')
    // this.getCurrentQuestion();
    this.renderContent()
    //this.checkCloze(this.expectedCloze);
    // console.log('cloze dropdown preview', this.previewData);

    // this.addOptions(this.clozeRenderArray, this.extractedOptions);
  }

  renderContent() {
    if (this.previewData && this.previewData.stimulus) {
      let content = this.previewData.stimulus;
      
      // Process each response placeholder
      const parts = content.split('{{response}}');
      for (let i = 0; i < parts.length - 1; i++) {
        const selectHtml = this.createSelectElement(i);
        parts[i] = parts[i] + selectHtml;
      }
      
      content = parts.join('');
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(content);
    }
  }
  // getCurrentQuestion(): any {
  //   console.log(this.previewData , "previewdata")
  //   let data: string[] = this.previewData.stimulus.split('{{response}}');
  //   let totalTextBoxes = this.renderCloze(data);
  //   // console.log(totalTextBoxes);
  //   //this.expectedCloze.push(this.previewData);
  //   this.previewData.answers = new Array<string>(totalTextBoxes);
  // }

  /* checkCloze(expectedCloze: Array<any>) {
    expectedCloze.forEach((element) => {
      this.extractedTexts = element.stimulus.split('{{response}}');
      let totalTextBoxes = this.renderCloze(this.extractedTexts);
      this.previewData.answers = new Array<string>(totalTextBoxes);
    });
  } */

  removePreviousCloze() {
    this.expectedCloze = [];
    this.clozeRenderArray = [];
  }

  renderCloze(extractedTexts: string[]): number {
    let dropBoxes = 0;
    // console.log(extractedTexts.length);
    // console.log('extracted texts', extractedTexts);
    extractedTexts.forEach((element: any, index: number) => {
      // dont add textbox to the last text
      // console.log(
      //   'current index',
      //   index,
      //   'expression value',
      //   extractedTexts.length - 1
      // );
      if (index == extractedTexts.length - 1) {
        let clozeRender = { text: element, dropBox: false, index: index };
        this.clozeRenderArray.push(clozeRender);
      } else {
        let clozeRender = { text: element, dropBox: true, index: index };
        this.clozeRenderArray.push(clozeRender);
        ++dropBoxes;
      }
    });
    // console.log(this.clozeRenderArray);
    return dropBoxes;
  }



  createSelectElement(index: number): string {
      const options = this.previewData.possibleResponses[index].responses;
      const selectedAnswer = this.previewData.scoringOption.answers[index];
      
      let selectHtml = '<select class="form-select" style="width:auto; display:inline-block">';
      
      if (this.showAnswer) {
          // When showing answer, only display the correct answer
          selectHtml += `<option selected>${selectedAnswer}</option>`;
      } else {
          // When not showing answer, show all options without selection
          options.forEach((option: string) => {
              selectHtml += `<option>${option}</option>`;
          });
      }
      
      selectHtml += '</select>';
      return selectHtml;
  }



  // addOptions(clozeRenderArray: Array<any>, extractedOptions: Array<any>) {
  //   for (let i = 0; i < clozeRenderArray.length; i++) {
  //     for (let j = 0; j < extractedOptions.length; j++) {
  //       clozeRenderArray[j].possibleResponse = extractedOptions[j];
  //     }
  //   }
  // }
  captureResponses(index, dropBoxValue: string) {
    const answerSet = new Array();
    /* this.textBoxRefList.forEach((element) => {
      answerSet.push(element.value);
      this.currentQuestion.answers = answerSet;
    });*/
    this.previewData.answers[index] = dropBoxValue;
    // console.log(index);
    // console.log(this.previewData.answers);
  }

  edit() {
    this.itemUtil.previewItem = false;
    if (this.previewData.id) {
      // Remove this line that was clearing the answers
      // this.previewData.scoringOption.answers = [];
      this.returnPreviewData.emit(this.previewData);
      this.router.navigate(
        ['/examalpha/subjects/' + this.subjectId + '/edit-item'],
        {
          queryParams: {
            type: `${this.previewData.type}`,
            id: `${this.previewData.id}`,
          },
        }
      );
    } else {
      this.returnPreviewData.emit(this.previewData);
    }
}

  check() {
    this.showAnswer = !this.showAnswer;
  }

  review() {
    if (this.previewData.id) {
      //this.return.emit();
      this.router.navigate(
        ['/examalpha/subjects/' + this.subjectId + '/edit-item'],
        {
          queryParams: {
            type: `${this.previewData.type}`,
            id: `${this.previewData.id}`,
          },
        }
      );
    } else {
      this.reload.emit();
    }
  }

  selection(i: string) {
    //this.selected = i;
  }

  openDeleteItemModal(deleteConfirmationModal: any, itemId: any) {
    this.selectedItemId = itemId;
    this.modalRef = this.modalService.open(deleteConfirmationModal, {
      centered: true,
      size: 'md',
    });
  }

  openDeletePassageItemModal(
    deletePassageQuestionConfirmationModal: any,
    itemId: any
  ) {
    this.selectedItemId = itemId;
    this.modalRef = this.modalService.open(
      deletePassageQuestionConfirmationModal,
      {
        centered: true,
        size: 'md',
      }
    );
  }

  deleteItem() {
    this.processing_delete = true;
    this.itemService.deleteItem(this.selectedItemId).subscribe(
      (value) => {
        if (value) {
          Swal.fire({
            icon: 'success',
            title: 'Congratulations',
            text: 'The item was deleted successfully!',
          });
          this.refresh();
        }
      
        this.processing_delete = false;
        this.modalService.dismissAll();
      },
      (error: HttpErrorResponse) => {
        Swal.fire({
          icon: 'error',
          title: 'Failed!',
          text: `${error.error.message}`,
        });
        this.processing_delete = false;
        this.modalService.dismissAll();
      }
    );
  }

  refresh() {
    this.reload.emit();
  }

  deletePassageItem() {
    this.processing_delete = true;
    this.passageService
      .deletePassageItem(this.selectedItemId, this.previewData.passageId)
      .subscribe(
        (value) => {
          Swal.fire({
            title: 'Congratulations!',
            text: 'You have successfully deleted the selected question.',
            icon: 'success',
          });
          /* this.passage.items = this.passage.items.filter(
            (item) => item.id !== this.selectedItemId
          ); */
          this.processing_delete = false;
          this.refresh();
          this.modalService.dismissAll();
          //this.ngOnInit();
        },
        (error: HttpErrorResponse) => {
          this.processing_delete = false;
          Swal.fire({
            title: 'Failed!',
            text: `${error.error.message}`,
            icon: 'error',
          });
        }
      );
  }

  openUsageHistoryModal(itemUsageModal: any, itemId: string) {
    this.loading_usage_history = true;
    this.modalService.open(itemUsageModal, {
      centered: true,
      size: 'md',
    });
    this.itemService.fetchItemUsageCount(itemId).subscribe((value) => {
      if(value){
        this.itemUsageHistory = value;
        this.loading_usage_history = false;
      }
    }, (error: HttpErrorResponse) => {
      this.loading_usage_history = false;
      this.notifier.notify('error', error.error.message);
    })
    
    /* this.router.navigate([
      '/examalpha/subjects/' +
        this.subject_id +
        '/questions/' +
        itemId +
        '/usage-history',
    ]); */
  }

  viewAnswer(){
    this.showAnswer = !this.showAnswer
    this.renderContent();
  }
}
