import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemHttpService } from '../../items/item-http.service';
import { ListAllItemsPage } from '../../items/models/list-all-items-page.model';
import { ListAllSubjects } from '../../items/models/list-all-subjects.model';
import { TagSubjects, TagsService } from '../service/tags.service';
import { Account } from 'src/app/authentication/model/account.model';
import { NotifierService } from 'angular-notifier';
import { UserService } from 'src/app/shared/user.service';
import { TagAnalysis } from '../model/tag-analysis';

@Component({
  selector: 'app-view-tag',
  templateUrl: './view-tag.component.html',
  styleUrls: ['./view-tag.component.scss'],
})
export class ViewTagComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  selectedSubject!: TagSubjects;
  page: number = 1;
  subjects: ListAllSubjects[] = [];
  allSubjects: TagSubjects[] = [];
  tagId!: string;
  currentUser: Account;
  currentTag: string;
  itemsPage: ListAllItemsPage;
  analysis: TagAnalysis;
  loading: boolean = true;
  openedSubjects: string[] = [];

  constructor(
    private itemService: ItemHttpService,
    private tagService: TagsService,
    private ar: ActivatedRoute,
    private notifier: NotifierService,
    private userService: UserService
  ) {}

  /** Handler function for the quick guide pull out */
  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
    const rightBar = document.getElementById('theme-settings-offcanvas');
    if (rightBar != null) {
      rightBar.classList.toggle('show');
      rightBar.setAttribute('style', 'visibility: visible;');
    }
  }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.currentTag = this.tagService.activeTag;
    this.breadCrumbItems = [
      { label: 'Tags' },
      { label: this.currentTag, active: true },
    ];
    this.tagId = this.ar.snapshot.params['tagId'];
    this.tagService.listTagSubjects(this.tagId).subscribe(
      (value) => {
        value = value?.length ? value : []
        value?.forEach((subj) => {
          subj.loading = false;
        });
        this.allSubjects = value;
        //console.log(this.allSubjects);
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        return this.notifier.notify('error', `${error.error.message}`);
      }
    );
  }

  setSubjectId(subject: TagSubjects) {
    this.selectedSubject = subject;
    this.itemService.subjectId = subject.subjectId;
    this.itemService.subjectName = subject.name;
    /* console.log(this.itemService.subjectId);
    console.log(this.itemService.subjectName); */
  }

  viewSubjectItem(subject: TagSubjects) {
    this.selectedSubject = subject;
    this.fetchItems(this.selectedSubject.subjectId);
  }

  fetchItems(subjectId: string) {
    this.itemService.fetchAllItems(subjectId).subscribe(
      (value) => {
        this.itemsPage = value;
        this.itemsPage.content.forEach((item) => (item.showFullItem = false));
        // console.log(this.itemsPage.content);
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }

  loadTagAnalysis(subject: TagSubjects, i?: number) {
    if (this.openedSubjects.includes(subject.name)) {
      this.openedSubjects = [];
      return;
    } else {
      subject.loading = true;
      this.openedSubjects = [];
      this.openedSubjects.push(subject.name);

      this.tagService.getTagAnalysis(subject.subjectId, this.tagId).subscribe(
        (value) => {
          this.analysis = value;
          subject.loading = false;
          //this.analysis;
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
          subject.loading = false;
          return this.notifier.notify('error', error.error.message);
        }
      );
    }
  }

  routeBack() {
    history.back()
  }
}
