import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { Account } from 'src/app/authentication/model/account.model';
import { UserService } from 'src/app/shared/user.service';
import Swal from 'sweetalert2';
import { AllPassagesService } from '../../passages/list-passages/all-passages.service';
import { RecycleService } from '../../recycle/recycle.service';
import { ItemHttpService } from '../item-http.service';
import { ItemUtilitiesService } from '../item-utilities.service';
import { UsageHistory } from '../models/usage-history';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cloze-radio-select-preview',
  templateUrl: './cloze-radio-select-preview.component.html',
  styleUrls: ['./cloze-radio-select-preview.component.scss']
})
export class ClozeRadioSelectPreviewComponent implements OnInit {

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
  ) { }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.subjectName = this.itemService.subjectName;
    this.assessmentActive = this.itemService.assessmentActive;
    this.isEditPreview = this.router.url.includes('edit-item')
    this.renderContent()
    this.clozeRenderArray.forEach((item, i) => {
      if (!this.previewData.answers) this.previewData.answers = [];
      if (this.previewData.answers[i] === undefined) {
        this.previewData.answers[i] = '';
      }
    });
  }

  renderContent() {
    if (!this.previewData?.stimulus) return;

    const parts = this.previewData.stimulus.split('{{response}}');
    const arr: { text: string; responses: string[] }[] = [];

    for (let i = 0; i < parts.length; i++) {
      // get corresponding responses for this index
      const responses = this.previewData.possibleResponses[i]?.responses || [];
      arr.push({
        text: parts[i],
        responses
      });
    }

    this.clozeRenderArray = arr;
  }

  captureResponses(index: number, value: string) {
    this.previewData.answers[index] = value;
  }

  removePreviousCloze() {
    this.expectedCloze = [];
    this.clozeRenderArray = [];
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
      if (value) {
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

  viewAnswer() {
    this.showAnswer = !this.showAnswer
    this.renderContent();
  }
}
