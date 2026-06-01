import { NgbDropdown, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnDestroy, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { ItemHttpService } from '../../items/item-http.service';
import { ListAllItemsPage } from '../../items/models/list-all-items-page.model';
import { ItemStatusEnum } from '../../items/models/item-status-enum';
import { ItemTypes } from '../../items/models/item-types';
import { FilterItems } from '../../items/models/filter-items.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RecycleService } from '../recycle.service';
import { RestoreItems } from '../models/restore-items';
import { NotifierService } from 'angular-notifier';
import { Account } from 'src/app/authentication/model/account.model';
import { UserService } from 'src/app/shared/user.service';

interface Topic {
  topicName: string;
  subtopic: boolean;
  subtopics?: SubTopic[];
  count: number;
}

interface SubTopic {
  subtopicName: string;
  itemsCount: number;
}

@Component({
  selector: 'app-subject-recycle',
  templateUrl: './subject-recycle.component.html',
  styleUrls: ['./subject-recycle.component.scss'],
})
export class SubjectRecycleComponent implements OnInit, OnDestroy {
  subjectId: string;

  subject: string = '';

  breadCrumbItems!: Array<{}>;

  itemsPage: ListAllItemsPage;

  questionType: string;

  previewData: any;

  /* showFullItem: boolean = false; */

  passageStatus: string[] = [];

  itemType: string[] = [];

  difficultyLevel: number[] = [1, 2, 3, 4, 5];

  tags: any[] = [];

  page: number = 0;

  pageSize: number = 20;

  filterInformation: FilterItems = new FilterItems();

  editQuestion: boolean = false;

  previewedItem: any;

  activePreviewItem: number;

  showFilter: boolean = false;

  new_subtopic: string = '';

  recycleTopicsTree: any;

  selectedTopic: any;

  selectedSubtopic: any;

  currentTopicName: string;

  currentSubtopicName: string;

  loading: boolean = true;

  currentUser: Account;

  restoredItemDetails: RestoreItems = new RestoreItems();

  constructor(
    private itemService: ItemHttpService,
    private ar: ActivatedRoute,
    private modal: NgbModal,
    private recycleService: RecycleService,
    private notifier: NotifierService,
    private userService: UserService
  ) {
    this.subjectId = this.ar.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.recycleService.recycleActive = true;
    this.currentUser = this.userService.getCurrentUser();
    this.subject = this.ar.snapshot.paramMap.get('subject');
    this.breadCrumbItems = [
      { label: 'recycle' },
      { label: this.subject, active: true },
    ];
    this.subjectId;
    this.recycleService.fetchRecycleSubjectTree(this.subjectId).subscribe(
      (value) => {
        if (value) this.recycleTopicsTree = value;
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );

    this.passageStatus = Object.values(ItemStatusEnum);
    this.itemType = Object.values(ItemTypes);
    //this.fetchItems();
  }

  ngOnDestroy(): void {
    this.recycleService.recycleActive = false;
  }

  showFilters() {
    this.showFilter = !this.showFilter;
  }

  displayItemTags(roleDropdown: NgbDropdown) {
    roleDropdown.open();
  }

  hideItemTags(roleDropdown: NgbDropdown) {
    roleDropdown.close();
  }

  showTopicDetails(topic: any, subtopic?: any) {
    this.selectedTopic = topic;
    if (subtopic) {
      this.selectedSubtopic = subtopic;
    }
    if (subtopic) {
      this.itemService
        .fetchAllRecycleItems(
          this.subjectId,
          topic.topicId,
          this.page,
          this.pageSize,
          subtopic.topicId
        )
        .subscribe(
          (value) => {
            this.itemsPage = value;
            this.itemsPage.content.forEach((item) => {
              return (item.showFullItem = false);
            });
            this.currentSubtopicName = this.selectedSubtopic.subtopicName;
          },
          (error: HttpErrorResponse) => {
            // console.log(error);
          }
        );
    } else {
      this.currentSubtopicName = '';
      this.itemService
        .fetchAllRecycleItems(
          this.subjectId,
          topic.topicId,
          this.page,
          this.pageSize
        )
        .subscribe(
          (value) => {
            this.itemsPage = value;
            this.itemsPage.content.forEach((item) => {
              return (item.showFullItem = false);
            });
            this.currentTopicName = this.selectedTopic.topicName;
          },
          (error: HttpErrorResponse) => {
            // console.log(error);
          }
        );
    }
  }

  fetchTopicItems(topicId: string) {
    this.itemService
      .fetchAllRecycleItems(this.subjectId, topicId, this.page, this.pageSize)
      .subscribe(
        (value) => {
          this.itemsPage = value;
          this.itemsPage.content.forEach((item) => {
            return (item.showFullItem = false);
          });
          this.currentTopicName = this.selectedTopic.topicName;
          // console.log(this.itemsPage.content);
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
        }
      );
  }

  fetchSubtopicItems(topicId: string, subtopicId: string) {
    this.itemService
      .fetchAllRecycleItems(
        this.subjectId,
        topicId,
        this.page,
        this.pageSize,
        subtopicId
      )
      .subscribe(
        (value) => {
          this.itemsPage = value;
          this.itemsPage.content.forEach((item) => {
            return (item.showFullItem = false);
          });
          this.currentSubtopicName = this.selectedSubtopic.subtopicName;
          // console.log(this.itemsPage.content);
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
        }
      );
  }

  preview(item: any, i: number) {
    if (this.previewData) {
      this.itemsPage.content[this.activePreviewItem].showFullItem = false;
    }
    this.itemService.fetchIndividualItem(item.itemId).subscribe(
      (value) => {
        if (value) {
          this.activePreviewItem = i;
          this.previewData = value;
          item.showFullItem = true;
        }
      },
      (err: HttpErrorResponse) => {
        // console.log(err);
      }
    );
  }

  /* fetchItems() {
    this.itemService.fetchAllRecycleItems(this.subjectId,).subscribe(
      (value) => {
        this.itemsPage = value;
        this.itemsPage.content.forEach(item => {
          return item.showFullItem = false;
        })
        console.log(this.itemsPage.content);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  } */

  showTags() {
    // console.log('these are the tags associated with this question');
  }

  recieveTags(tags: any) {
    this.tags = tags;
  }

  hidePreview(item, i) {
    item.showFullItem = false;
  }

  edit() {
    //this.showFullItem = false;
    this.editQuestion = !this.editQuestion;
  }

  buildFilter(filterForm: any) {
    // console.log(this.filterInformation);

    this.tags = this.tags.map((tag) => {
      return tag.tagId;
    });

    this.filterInformation.tagIds = this.tags;
  }

  filter(filterForm: any) {
    this.buildFilter(filterForm);

    this.itemService.filterItems(this.filterInformation).subscribe(
      (value) => {
        // console.log(value);
        this.itemsPage = value;
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }

  openNewTopicModal(newTopicModal: any) {
    this.modal.open(newTopicModal, { centered: true });
  }

  openNewSubTopicModal(newSubTopicModal: any, topic: string) {
    this.new_subtopic = topic;
    this.modal.open(newSubTopicModal, { centered: true });
  }

  onPageChange(event: any) {
    this.page = event.page;
    this.pageSize = event.rows;
    if (this.selectedSubtopic) {
      this.showTopicDetails(this.selectedTopic, this.selectedSubtopic);
    } else {
      this.showTopicDetails(this.selectedTopic);
    }
  }

  restoreItemsInTopic() {
    this.restoredItemDetails.subjectId = this.subjectId;
    this.restoredItemDetails.topicId = this.selectedTopic.topicId;
    this.recycleService
      .restoreTopicItem(
        this.subjectId,
        this.selectedTopic.topicId,
        this.restoredItemDetails
      )
      .subscribe(
        (value) => {
          if (value) {
            this.notifier.notify(
              `success`,
              `Congratulations! You have have successfully restored all the questions in ${this.selectedTopic.name}!`
            );
          }
          this.ngOnInit();
          this.restoredItemDetails = new RestoreItems();
          this.showTopicDetails(this.selectedTopic);
        },
        (error: HttpErrorResponse) => {
          this.notifier.notify('', `${error.error.message}`);
        }
      );
  }

  restoreSelectedItem(itemId?: string) {
    this.restoredItemDetails.subjectId = this.subjectId;
    if (itemId) {
      this.restoredItemDetails.itemIds.push(itemId);
    }
    this.recycleService
      .restoreSelectedItemsInSubject(this.subjectId, this.restoredItemDetails)
      .subscribe(
        (value) => {
          if (value) {
            this.notifier.notify(
              'success',
              `Congratulations! The question has been restored successfully.`
            );
          }
          this.ngOnInit();
          this.restoredItemDetails = new RestoreItems();
          if (!this.currentSubtopicName)
            this.showTopicDetails(this.selectedTopic);
          if (this.currentSubtopicName)
            this.showTopicDetails(this.selectedTopic, this.selectedSubtopic);
        },
        (error: HttpErrorResponse) => {
          this.notifier.notify('error', `${error.error.message}`);
        }
      );
  }

  restoreQuestionsInSubTopic() {
    this.restoredItemDetails.subjectId = this.subjectId;
    this.restoredItemDetails.topicId = this.selectedTopic.topicId;
    this.restoredItemDetails.subtopicId = this.selectedSubtopic.topicId;
    this.recycleService
      .restoreSubtopicItem(
        this.subjectId,
        this.selectedTopic.topicId,
        this.selectedSubtopic.topicId,
        this.restoredItemDetails
      )
      .subscribe(
        (value) => {
          if (value) {
            this.notifier.notify(
              'success',
              `Congratulations! You have successfully restored all the questions in ${this.selectedSubtopic.name}`
            );
          }
          this.ngOnInit();
          this.restoredItemDetails = new RestoreItems();
          this.showTopicDetails(this.selectedTopic, this.selectedSubtopic);
        },
        (error: HttpErrorResponse) => {
          this.notifier.notify('error', `${error.error.message}`);
        }
      );
  }

  // selection of questions to be deleted
  selectQuestionId(itemId: string, index: number) {
    if (!this.restoredItemDetails.itemIds.includes(itemId)) {
      this.restoredItemDetails.itemIds.push(itemId);
    } else {
      this.restoredItemDetails.itemIds.splice(index, 1);
    }
  }

  
}
