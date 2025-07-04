import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemHttpService } from '../../items/item-http.service';
import { ItemUtilitiesService } from '../../items/item-utilities.service';
import { ListAllItemsPage } from '../../items/models/list-all-items-page.model';
import { SubjectTopicsTree } from '../../items/models/subject-topics-tree.model';
import { FilterItems } from '../../items/models/filter-items.model';
import { AssessmentFilterInformation } from '../../items/models/assessment-filter-information';

@Component({
  selector: 'app-view-subject-tag',
  templateUrl: './view-subject-tag.component.html',
  styleUrls: ['./view-subject-tag.component.scss']
})
export class ViewSubjectTagComponent implements OnInit {

  breadCrumbItems!: Array<{}>;

  itemsPage: ListAllItemsPage;

  subject: SubjectTopicsTree;

  previewData: any;

  difficultyLevel: number[] = [1, 2, 3, 4, 5];

  tags: any[] = [];

  tagIds: string[] = [];

  page: number = 1;

  filterInformation: FilterItems = new FilterItems();

  assessmentFilter: AssessmentFilterInformation = new AssessmentFilterInformation();

  assessmentFilters: AssessmentFilterInformation[] = [];

  editQuestion: boolean = false;

  showFilter: boolean = false;

  subjectName: string;

  assessmentItems: any[] = [];

  currentTopic: any;

  submitted: boolean = false;

  activePreviewItem: number;

  displayLink: boolean = false;

  clickedTopic: any;

  constructor(private itemService: ItemHttpService, private itemUtil: ItemUtilitiesService, private router: Router) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      {
        label:''
      }
    ];

    this.fetchSubjectTree(this.itemService.subjectId);
  }

  fetchSubjectTree(subjectId: string) {
    this.itemService.fetchSubjectTopicsTreeAdmin(subjectId).subscribe(
      (value) => {
        this.subject = value;
        // console.log(this.subject);
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }

  showTopicDetails(topic: any, subtopicId?: string) {
    if (subtopicId) {
      this.fetchItems(topic, subtopicId);
    } else {
      this.fetchItems(topic);
    }
  }

  fetchItems(topic: any, subtopicId?: string) {
    this.itemService
      .fetchAllItems(this.itemService.subjectId, topic.topicId, subtopicId)
      .subscribe(
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

  sendInformation(topic?: any, subtopic?: any) {
    let itemTrail = {
      subjectId: this.itemService.subjectId,
      subjectName: this.itemService.subjectName,
      topicId: topic.topicId,
      topicName: topic.topicName,
    };

    if (subtopic) {
      let newItemTrail = {
        ...itemTrail,
        subtopicName: subtopic.subtopicName,
        subtopicId: subtopic.topicId,
      };
      this.itemUtil.currentItemTrail = newItemTrail;
    } else {
      this.itemUtil.currentItemTrail = itemTrail;
      this.itemUtil.saveCurrentItemTrail()
    }

    this.router.navigate(['/examalpha/items/new-item']);
    /* routerLink="/examalpha/items/new-item" */
  }

  recieveTags(tags: any) {
    this.tags = tags;
  }

}
