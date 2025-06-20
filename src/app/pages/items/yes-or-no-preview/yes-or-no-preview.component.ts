import { ItemHttpService } from './../item-http.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../models/option';
import { Router } from '@angular/router';
import { ItemUtilitiesService } from '../item-utilities.service';
import { Account } from 'src/app/authentication/model/account.model';
import { UserService } from 'src/app/shared/user.service';
import { RecycleService } from '../../recycle/recycle.service';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';
import { AllPassagesService } from '../../passages/list-passages/all-passages.service';
import { UsageHistory } from '../models/usage-history';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-yes-or-no-preview',
  templateUrl: './yes-or-no-preview.component.html',
  styleUrls: ['./yes-or-no-preview.component.scss'],
})
export class YesOrNoPreviewComponent implements OnInit {
  @Input() component!: string;
  @Input() formTypePreview = '';
  @Input() subjectName = '';
  @Input() previewData!: any;
  @Input() itemTrailInfo: any;
  @Output() returnPreviewData = new EventEmitter();
  @Output() reload = new EventEmitter();

  //options: Option[] = this.previewData.options;
  currentUser: Account;
  showAnswer: boolean = false;
  answer: string;
  selected: string;
  assessmentActive: boolean;
  recycleComponentActive: boolean;
  optionLabels: string[] = ['A', 'B'];
  selectedItemId!: string;
  processing_delete: boolean = false;
  modalRef: any;
  itemUsageHistory: UsageHistory[] = [];
  loading_usage_history: boolean = false;
  isEditPreview: boolean = false;

  constructor(
    private itemService: ItemHttpService,
    private itemUtil: ItemUtilitiesService,
    private userService: UserService,
    private router: Router,
    private recycleService: RecycleService,
    private modalService: NgbModal,
    private passageService: AllPassagesService,
    private notifier: NotifierService
  ) {
    //console.log(this.previewData);
  }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.subjectName = this.itemService.subjectName;
    this.assessmentActive = this.itemService.assessmentActive;
    this.recycleComponentActive = this.recycleService.recycleActive;
    this.isEditPreview = this.router.url.includes('edit-item')

    console.log(this.isEditPreview);
    //console.log(this.previewData);
    //console.log(this.itemTrailInfo);
    this.answer = this.previewData.scoringOption.answers[0];
  }

  check() {
    this.showAnswer = !this.showAnswer;
  }

  edit() {
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

  review() {
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
