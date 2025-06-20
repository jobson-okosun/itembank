import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthorModerationNotification } from '../../items/models/author-moderation-notification';
import { NotifierService } from 'angular-notifier';
import { ItemHttpService } from '../../items/item-http.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Account } from 'src/app/authentication/model/account.model';

@Component({
  selector: 'app-subject-notifications',
  templateUrl: './subject-notifications.component.html',
  styleUrls: ['./subject-notifications.component.scss'],
})
export class SubjectNotificationsComponent implements OnInit {
  subject: string;
  subjectId: string;
  status: string;
  currentUser: Account;
  page: number = 0;
  pageSize: number = 25;
  notifications: AuthorModerationNotification;
  item: any;
  previewData: any;
  breadCrumbItems!: Array<{}>;
  loading: boolean = true;

  constructor(
    private ar: ActivatedRoute,
    private notificationService: NotificationService,
    private notifier: NotifierService,
    private itemService: ItemHttpService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subject = this.itemService.subjectName;
    this.subjectId = this.ar.snapshot.params['id'];
    this.status = this.ar.snapshot.params['stats'].toUpperCase();

    this.breadCrumbItems = [
      { label: 'subjects', active: false },
      { label: this.subject, active: false },
      { label: this.status.toLowerCase(), active: true },
    ];

    this.notificationService
      .filterNotificationsBySubject(this.status, this.subjectId)
      .subscribe(
        (value) => {
          if (value) {
            this.notifications = value;
            this.loading = false;
          }
        },
        (error: HttpErrorResponse) => {
          this.notifier.notify('error', `${error.error.message}`);
          this.loading = false;
        }
      );
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
