import { HttpErrorResponse } from '@angular/common/http';
import { ListAllSubjects } from './../../items/models/list-all-subjects.model';
import { ItemHttpService } from './../../items/item-http.service';
import { Component, OnInit } from '@angular/core';
import { NewModeration } from '../models/new-moderation.model';
import { ModerationService } from '../moderation.service';
import { NotifierService } from 'angular-notifier';
import { ModeratedSubjects } from '../models/moderated-subjects.model';
import { Account } from 'src/app/authentication/model/account.model';
import { UserService } from 'src/app/shared/user.service';
import Swal from 'sweetalert2';

interface Subject {
  name: string;
  itemCount: number;
  topicCount: number;
  usedCount: number;
}

@Component({
  selector: 'app-moderation',
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.scss'],
})
export class ModerationComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  subjects: ModeratedSubjects[] = [];
  allSubjects: ModeratedSubjects[] = [];
  currentSubject: string;
  subjectName: string = '';
  topicName: string = '';
  showExtraField: boolean = false;
  newModeration: NewModeration = new NewModeration();
  currentUser: Account;
  searchSubject!: string;
  loading: boolean = true;
  processing: boolean = false;

  constructor(
    private itemService: ItemHttpService,
    private moderationService: ModerationService,
    private notifier: NotifierService,
    private userService: UserService
  ) {}

  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
    const rightBar = document.getElementById('theme-settings-offcanvas');
    if (rightBar != null) {
      rightBar.classList.toggle('show');
      rightBar.setAttribute('style', 'visibility: visible;');
    }
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Moderation' }];
    this.currentUser = this.userService.getCurrentUser();
    /* this.itemService.fetchAllSubjectsItems().subscribe((value) => {
      this.allSubjects = value;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    }) */
    this.moderationService.fetchAllModeratedSubjects().subscribe(
      (value) => {
        if (value) {
          value.forEach((element) => {
            if (!element.moderationId) {
              element.moderationId = null;
            }
          });
          value.sort((a: ModeratedSubjects, b: ModeratedSubjects) => {
            if (a.moderationId == null && b.moderationId !== null) {
              return 1;
            } else if (a.moderationId !== null && b.moderationId === null) {
              return -1;
            } else {
              return 0;
            }
          });
          this.subjects = value;
          this.loading = false;
          /* console.log(this.subjects); */
        }
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        this.notifier.notify('error', `${error}`);
      }
    );
  }

  enableDisableModerationActionCall(subject: ModeratedSubjects) {
    // console.log(subject);
    if (subject.moderationId === null) {
      this.newModeration.subjectEntityId = subject.entityId;
      this.newModeration.subjectId = subject.subjectId;
      this.newModeration.enableModeration = true;
    } else {
      this.newModeration.subjectEntityId = subject.entityId;
      this.newModeration.subjectId = subject.subjectId;
      this.newModeration.enableModeration = false;
    }
    //console.log(this.newModeration, 'moderation value');
    this.processing = true;
    this.activityLoader(subject.moderationId, subject.subjectName);
    this.moderationService
      .enableDisableModeration(this.newModeration)
      .subscribe(
        (value) => {
          if (value.id && value.id !== 'Moderation disabled for subject') {
            this.notifier.notify(
              'success',
              `Moderation has been enabled for ${subject.subjectName}`
            );
          } else if (
            value.id &&
            value.id === 'Moderation disabled for subject'
          ) {
            this.notifier.notify('error', `${value.id} ${subject.subjectName}`);
          }
          this.processing = false;
          this.activityLoader();
          this.ngOnInit();
        },
        (error: HttpErrorResponse) => {
          this.processing = false;
          this.activityLoader();
          Swal.fire({
            icon: 'error',
            title: 'Failed!',
            text: `${error.error.message}`,
          });
        }
      );
  }

  filterSubjects() {
    let filteredSubjects = [];
    if (this.allSubjects.length == 0) {
      this.allSubjects = this.subjects;
    }
    // console.log(this.searchSubject);
    if (this.searchSubject) {
      for (let i = 0; i <= this.searchSubject.length; i++) {
        this.subjects.filter((subject) => {
          if (
            subject.subjectName.startsWith(this.searchSubject) &&
            !filteredSubjects.includes(subject)
          ) {
            filteredSubjects.push(subject);
            //return subject;
          }
        });
      }
    }
    this.subjects = filteredSubjects;
    if (this.subjects.length === 0) {
      this.subjects = this.allSubjects;
      this.allSubjects = [];
    }

    //console.log(filteredSubjects);
  }

  activityLoader(status?: string, subject?: string) {
    if (!this.processing) {
      Swal.close();
      //Swal.hideLoading();
    } else {
      Swal.fire({
        title: status === null
          ? `Enabling moderation for ${subject}`
          : `Disabling moderation for ${subject}`,
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
