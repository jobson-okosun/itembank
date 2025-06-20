import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemDetails, ItemUtilitiesService } from '../item-utilities.service';
import { Router } from '@angular/router';
import { ItemHttpService } from '../item-http.service';
import { UserService } from 'src/app/shared/user.service';
import { Account } from 'src/app/authentication/model/account.model';
import { RecycleService } from '../../recycle/recycle.service';
import { AllPassagesService } from '../../passages/list-passages/all-passages.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { UsageHistory } from '../models/usage-history';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Cloze {
  text: string;
  textBox: boolean;
  index: number;
}

@Component({
  selector: 'app-cloze-text-preview',
  templateUrl: './cloze-text-preview.component.html',
  styleUrls: ['./cloze-text-preview.component.scss'],
})
export class ClozeTextPreviewComponent implements OnInit {
  @Input() component!: string;
  @Input() previewData: any;
  @Input() itemTrailInfo: any;
  //@Input() assessmentActive: boolean;
  //@Output() hidePreview = new EventEmitter<string>();
  @Output() returnPreviewData = new EventEmitter();
  @Output() reload = new EventEmitter();

  clozeRenderArray: Array<any> = [];
  extractedTexts: Array<any> = [];
  expectedCloze: Array<any> = [];
  totalTextBoxes: number = 0;
  currentQuestion: any;
  currentQuestionNumber: number;

  answers: string;

  showAnswer: boolean = false;

  assessmentActive: boolean = false;

  subjectName: string = '';

  subjectId: string = this.itemService.subjectId;

  selected: string;

  itemTrailInformation: ItemDetails;

  responseFieldsPositions: any[] = [];
  responseFields: any[] = [];
  clozeBoxes: any[] = [];
  currentUser: Account;
  modalRef: any;
  selectedItemId!: string;
  recycleComponentActive: boolean = this.recycleService.recycleActive;
  processing_delete: boolean = false;
  itemUsageHistory: UsageHistory[] = [];
  loading_usage_history: boolean = false;
  isEditPreview: boolean = false;
  sanitizedContent: SafeHtml;

  constructor(
    private router: Router,
    private itemService: ItemHttpService,
    private userService: UserService,
    private recycleService: RecycleService,
    private passageService: AllPassagesService,
    private modalService: NgbModal,
    private notifier: NotifierService,
    private itemUtil: ItemUtilitiesService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.isEditPreview = this.router.url.includes('edit-item');
    this.answers = this.previewData.scoringOption.answers;
    this.assessmentActive = this.itemService.assessmentActive;
    this.subjectName = this.itemService.subjectName;
    this.getCurrentQuestion();
    this.renderContent();
  }

  renderContent() {
    if (this.previewData && this.previewData.stimulus) {
      let content = this.previewData.stimulus;
      
      if (this.showAnswer && this.previewData.scoringOption.answers) {
        this.previewData.scoringOption.answers.forEach((answer: string, index: number) => {
          content = content.replace(
            '{{response}}',
            `<input type="text" class="form-control-sm d-inline-block mt-0" style="width: auto; margin-left: 5px;" value="${answer}" disabled />`
          );
        });
      } else {
        content = content.replace(
          /\{\{response\}\}/g,
          '<input type="text" class="form-control-sm d-inline-block mt-0" style="width: auto; margin-left: 5px;" disabled />'
        );
      }

      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(content);
    }
  }

  viewAnswer() {
    this.showAnswer = !this.showAnswer;
    this.renderContent();
  }

  removePreviousCloze() {
    this.expectedCloze = [];
    this.clozeRenderArray = [];
  }

  edit() {
    this.itemUtil.previewItem = false;
    //this.hidePreview.emit(formType);
    //let data = this.previewData
    if (this.previewData.id) {
      this.returnPreviewData.emit(this.previewData);
      this.router.navigate(
        ['/examalpha/subjects/' + this.subjectName + '/edit-item'],
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

  // checkForClozeTextBoxes() {
  //   let clozeTextBoxes = this.previewData.stimulus.split('{{response}}');
  //   for (let i = 0; i < clozeTextBoxes.length; i++) {
  //     this.clozeView(clozeTextBoxes[i], i, clozeTextBoxes.length);
  //   }
  // }

  // clozeView(cloze: any, i: number, totalClozeTextBoxes: number) {
  //   let dropboxes = 0;
  //   if (i === totalClozeTextBoxes - 1) {
  //     let clozeRender: Cloze = { text: cloze, textBox: false, index: i };
  //     this.clozeRenderArray.push(clozeRender);
  //   } else {
  //     let clozeRender: Cloze = { text: cloze, textBox: false, index: i };
  //     this.clozeRenderArray.push(clozeRender);
  //     ++dropboxes;
  //   }
  // }

  enableShowAnswer(element?: HTMLElement) {
    this.showAnswer = !this.showAnswer;
    if (this.showAnswer) {
      element.childNodes[0].childNodes.forEach((node, index) => {
        if (node.nodeValue === null) {
          this.responseFieldsPositions.push(index);
          this.responseFields.push(node);
        }
      });

      for (let i = 0; i < this.responseFieldsPositions.length; i++) {
        this.responseFields[i].value = this.answers[i];
      }
    } else {
      for (let i = 0; i < this.responseFieldsPositions.length; i++) {
        this.responseFields[i].value = '';
      }
      this.responseFields = [];
      this.responseFieldsPositions = [];
    }
  }

  getCurrentQuestion(): any {
    // console.log(this.previewData)
    
    // let data: string[] = this.previewData.stimulus.split('{{response}}');
    // let totalTextBoxes = this.renderCloze(data);
    // console.log(totalTextBoxes);
    //this.expectedCloze.push(this.previewData);
    // this.previewData.answers = new Array<string>(totalTextBoxes);
  }

  /* checkCloze(expectedCloze: Array<any>): void {
    expectedCloze.forEach((element) => {
      this.extractedTexts = element.stimulus.split('{{response}}');
      let totalTextBoxes = this.renderCloze(this.extractedTexts);
      this.currentQuestion.answers = new Array<string>(totalTextBoxes);
      console.log(totalTextBoxes + "textboxes")
    });
  } */

  renderCloze(extractedTexts: string[]): number {
    let inputBoxes = 0;
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
        let clozeRender = { text: element, inputBox: false, index: index };
        this.clozeRenderArray.push(clozeRender);
      } else {
        let clozeRender = { text: element, inputBox: true, index: index };
        this.clozeRenderArray.push(clozeRender);
        ++inputBoxes;
      }
    });
    // console.log(this.clozeRenderArray);
    return inputBoxes;
  }

  captureResponses(index, inputBoxValue: string) {
    const answerSet = new Array();
    /* this.textBoxRefList.forEach((element) => {
      answerSet.push(element.value);
      this.currentQuestion.answers = answerSet;
    });*/
    this.previewData.answers[index] = inputBoxValue;
    // console.log(index);
    // console.log(this.previewData.answers);
  }

  // viewAnswer() {
  //   this.showAnswer = !this.showAnswer;
  // }

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

  check() {
    this.showAnswer = !this.showAnswer;
  }

  selection(i: string) {
    this.selected = i;
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
    this.itemService.fetchItemUsageCount(itemId).subscribe(
      (value) => {
        if (value) {
          this.itemUsageHistory = value;
          this.loading_usage_history = false;
        }
      },
      (error: HttpErrorResponse) => {
        this.loading_usage_history = false;
        this.notifier.notify('error', error.error.message);
      }
    );
  }
}
