import { SingleChoiceModel } from './../single-response/model/single-response-model.model';
import { Option } from '../models/option';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ItemHttpService } from '../item-http.service';
import { ItemDetails, ItemUtilitiesService } from '../item-utilities.service';
import { UserService } from 'src/app/shared/user.service';
import { Account } from 'src/app/authentication/model/account.model';
import { RecycleService } from '../../recycle/recycle.service';
import { NotificationService } from '../../notifications/notification.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AllPassagesService } from '../../passages/list-passages/all-passages.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { UsageHistory } from '../models/usage-history';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  @Input() component!: string;
  @Input() formTypePreview = '';
  @Input() previewData: any; //SingleChoiceModel;
  @Input() itemTrailInfo: any;
  @Output() hidePreview = new EventEmitter<boolean>(false);
  @Output() returnPreviewData = new EventEmitter();
  @Output() reload = new EventEmitter();

  answer: string;

  showAnswer: boolean = false;

  currentUser: Account;

  subjectId: string = '';

  selected: string;

  itemTrailInformation: ItemDetails;

  assessmentActive: boolean;

  recycleComponentActive: boolean = false;

  isNotificationsPageOpen: boolean =
    this.notificationService.notificationPageOpen;

  optionLabels: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
  ];

  selectedItemId!: string;
  processing_delete: boolean = false;
  modalRef: any;
  itemUsageHistory: UsageHistory[] = [];
  loading_usage_history: boolean = false;

  constructor(
    private router: Router,
    private itemService: ItemHttpService,
    private itemUtil: ItemUtilitiesService,
    private modalService: NgbModal,
    private passageService: AllPassagesService,
    private userService: UserService,
    private recycleService: RecycleService,
    private notificationService: NotificationService,
    private notifier: NotifierService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.subjectId = this.itemService.subjectId;
    this.assessmentActive = this.itemService.assessmentActive;
    this.recycleComponentActive = this.recycleService.recycleActive;
    
    
    this.answer = this.previewData.scoringOption.answers[0];
    console.log(this.previewData)
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

  edit() {
    this.itemUtil.previewItem = false;
    this.hidePreview.emit(true);
    //let data = this.previewData
    if (this.previewData.id) {
      //this.returnPreviewData.emit(this.previewData);
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

  review() {
    if (this.previewData.id) {
      //this.returnPreviewData.emit(this.previewData);
      
      this.router.navigate(
        ['/examalpha/subjects/' + this.previewData.subjectId + '/edit-item'],
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

  selection(i: string) {
    this.selected = i;
  }

  openDeleteItemModal(deleteConfirmationModal: any, itemId: any) {
    console.log(this.previewData, "preview data")
    this.selectedItemId = itemId;
    console.log(itemId, " item id")
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

    console.log(this.previewData, "preview pass data")
    console.log(itemId, " item id")
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
    this.reload.emit("reload");
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
}
