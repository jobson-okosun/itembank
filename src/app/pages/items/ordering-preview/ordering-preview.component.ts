import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ItemHttpService } from '../item-http.service';
import { UserService } from 'src/app/shared/user.service';
import { Account } from 'src/app/authentication/model/account.model';
import { Option } from '../models/option';
import { RecycleService } from '../../recycle/recycle.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AllPassagesService } from '../../passages/list-passages/all-passages.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { UsageHistory } from '../models/usage-history';
import { NotifierService } from 'angular-notifier';
import { ItemUtilitiesService } from '../item-utilities.service';

@Component({
  selector: 'app-ordering-preview',
  templateUrl: './ordering-preview.component.html',
  styleUrls: ['./ordering-preview.component.scss'],
})
export class OrderingPreviewComponent implements OnInit {
  @Input() component!: string;
  @Input() formType!: string;
  @Input() previewData!: any;
  @Input() itemTrailInfo: any;
  @Input() editData!: any;
  @Output() returnPreviewData = new EventEmitter();
  @Output() reload = new EventEmitter();

  showAnswer: boolean = false;
  subjectName: string;
  currentUser: Account;
  assessmentActive: boolean = false;
  opts: any[] = [];
  ans: string[] = [];
  recycleComponentActive: boolean = this.recycleService.recycleActive;
  selectedItemId!: string;
  modalRef: any;
  processing_delete: boolean = false;
  subjectId: string = this.itemService.subjectId;
  //optionLabels: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
  itemUsageHistory: UsageHistory[] = [];
  loading_usage_history: boolean = false;
  isEditPreview: boolean = false;

  constructor(
    private router: Router,
    private itemService: ItemHttpService,
    private userService: UserService,
    private recycleService: RecycleService,
    private modalService: NgbModal,
    private passageService: AllPassagesService,
    private notifier: NotifierService,
    private itemUtil: ItemUtilitiesService
  ) { }

  ngOnInit(): void {
    this.assessmentActive = this.itemService.assessmentActive;
    this.currentUser = this.userService.getCurrentUser();
    this.subjectName = this.itemService.subjectName;
    this.isEditPreview = this.router.url.includes('edit-item')
    this.previewData.options.forEach((option, index) => {
      this.opts.push(option.label);

      this.ans[index] = option.label;
    });

    // this.ans = this.previewData.scoringOption.answers;
    this.opts = this.shuffleOptions(this.opts);
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

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      event.container.data,   // <-- THIS is ans or opts
      event.previousIndex,
      event.currentIndex
    );
  }


  shuffleOptions(options: Option[]) {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = options[i];

      options[i] = options[j];
      options[j] = temp;
    }
    console.log('shuffled ordering options:::::', options);
    return options;
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
