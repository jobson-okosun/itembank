import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ItemHttpService } from '../item-http.service';
import { ItemDetails, ItemUtilitiesService } from '../item-utilities.service';
import { UserService } from 'src/app/shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AllPassagesService } from '../../passages/list-passages/all-passages.service';
import { RecycleService } from '../../recycle/recycle.service';
import { UsageHistory } from '../models/usage-history';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-short-text-preview',
  templateUrl: './short-text-preview.component.html',
  styleUrls: ['./short-text-preview.component.scss'],
})
export class ShortTextPreviewComponent implements OnInit {
  @Input() component!: string;
  @Input() formTypePreview!: string;
  @Input() previewData!: any;
  @Input() itemTrailInfo!: any;
  @Output() returnPreviewData = new EventEmitter();
  @Output() reload = new EventEmitter();

  answer: string;

  showAnswer: boolean = false;

  subjectName: string = '';

  selected: string;

  itemTrailInformation: ItemDetails;

  assessmentActive: boolean = false;

  recycleComponentActive: boolean = this.recycleService.recycleActive;

  subjectId: string = this.itemService.subjectId;

  currentUser: any;

  selectedItemId!: string;
  processing_delete: boolean = false;
  modalRef: any;
  itemUsageHistory: UsageHistory[] = [];
  loading_usage_history: boolean = false;
  isEditPreview: boolean = false

  constructor(
    private router: Router,
    private itemService: ItemHttpService,
    private userService: UserService,
    private modalService: NgbModal,
    private recycleService: RecycleService,
    private passageService: AllPassagesService,
    private notifier: NotifierService,
    public itemUtil: ItemUtilitiesService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.assessmentActive = this.itemService.assessmentActive;
    // console.log(this.previewData);

    this.isEditPreview = this.router.url.includes('edit-item')
    this.subjectName = this.itemService.subjectName;
    // console.log(this.previewData);
    // console.log(this.itemTrailInfo);
    this.answer = this.previewData.scoringOption.answers[0];
  }

  edit() {
    this.itemUtil.previewItem = false;
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
