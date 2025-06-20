import {
  Component,
  OnDestroy,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { NotificationService } from '../notification.service';
import { Account } from 'src/app/authentication/model/account.model';
import { UserService } from 'src/app/shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { AuthorModerationNotification } from '../../items/models/author-moderation-notification';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemHttpService } from '../../items/item-http.service';

@Component({
  selector: 'app-list-notifications',
  templateUrl: './list-notifications.component.html',
  styleUrls: ['./list-notifications.component.scss'],
})
export class ListNotificationsComponent implements OnInit, OnDestroy {
  @Input() status: string;
  @Input() subject: string;
  @Input() subjectId: string;

  breadCrumbItems: Array<{}>;
  notifications: AuthorModerationNotification;
  currentUser: Account;
  page: number = 0;
  pageSize: number = 25;
  item: any;
  loading: boolean = true;
  filterOption: string = '';
  filteredNotifications: any[] = [];

  constructor(
    private notificationService: NotificationService,
    private userService: UserService,
    private notifier: NotifierService,
    private router: Router,
    private modalService: NgbModal,
    private itemService: ItemHttpService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.notificationService.notificationPageOpen = true;
    this.breadCrumbItems = [
      { label: 'notifications', active: true },
      /* {
        label: this.subject ? this.subject : '',
        active: this.subject ? true : false,
      }, */
    ];
    /* if (this.subject && this.subjectId && this.status) {
      this.notificationService
        .filterNotificationsBySubject(this.status, this.subjectId)
        .subscribe(
          (value) => {
            if (value) {
              this.notifications = value;
            }
          },
          (error: HttpErrorResponse) => {
            this.notifier.notify('error', `${error.error.message}`);
          }
        );
    } else { */
      this.notificationService
        .fetchAllNotifications(this.currentUser.id, this.page, this.pageSize)
        .subscribe(
          (value) => {
            this.notifications = value;
            this.loading = false;
          },
          (error: HttpErrorResponse) => {
            this.notifier.notify('error', `${error.error.message}`);
          }
        );
    //}
  }

  ngOnDestroy(): void {
    this.notificationService.notificationPageOpen = false;
  }

  setFilter(filter: string) {
    this.notificationService.filterNotifications(filter).subscribe(
      (value) => {
        if (value) {
          this.notifications = value;
        }
      },
      (error: HttpErrorResponse) => {
        this.notifier.notify('error', `${error.error.message}`);
      }
    );
  }

  viewItem(notification: any) {
    // console.log(notification);
    this.router.navigate(
      ['/examalpha/subjects/' + notification.subjectId + '/edit-item'],
      {
        queryParams: {
          type: `${notification.itemType}`,
          id: `${notification.itemId}`,
        },
      }
    );
  }

  previewItem(notification: any) {
    
  }

  openNotification(notification?: any) {
    // console.log(notification);
    this.router.navigate(
      ['/examalpha/subjects/' + notification.subjectName + '/edit-item'],
      {
        queryParams: {
          type: `${notification.itemType}`,
          id: `${notification.itemId}`,
        },
      }
    );
  }

  openPreviewItemModal(notification: any, itemModal: any) {
    this.itemService.fetchIndividualItem(notification.itemId).subscribe(
      (value) => {
        if (value) {
          this.item = value;
        }
      },
      (error: HttpErrorResponse) => {
        // console.log(error.error.message);
      }
    );
    this.modalService.open(itemModal, { centered: true, size: 'lg' });
  }

  onPageChange(event: any) {
    this.page = event.page;
    this.pageSize = event.rows;
    this.ngOnInit();
  }
}
