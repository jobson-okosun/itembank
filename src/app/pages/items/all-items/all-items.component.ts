import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ItemHttpService } from '../item-http.service';
import { ListAllItemsPage } from '../models/list-all-items-page.model';
import { ItemStatusEnum } from '../models/item-status-enum';
import { ItemTypes } from '../models/item-types';
import { FilterItems } from '../models/filter-items.model';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss'],
})
export class AllItemsComponent implements OnInit {
  breadCrumbItems!: Array<{}>;

  itemsPage: ListAllItemsPage;

  questionType: string;

  previewData: any;

  passageStatus: string[] = [];

  itemType: string[] = [];

  difficultyLevel: number[] = [1, 2, 3, 4, 5];

  tags: any[] = [];

  filterInformation: FilterItems = new FilterItems();

  editQuestion: boolean = false;

  constructor(private itemService: ItemHttpService) {}

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Items' }];

    this.passageStatus = Object.values(ItemStatusEnum);
    this.itemType = Object.values(ItemTypes);
    this.fetchItems();
  }

  fetchItems() {
    /* this.itemService.fetchAllItems().subscribe(
      (value) => {
        this.itemsPage = value;
        this.itemsPage.content.forEach(item => item.showFullItem = false);
        console.log(this.itemsPage.content);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    ); */
  }

  recieveTags(tags: any) {
    this.tags = tags;
  }

  preview(item: any, i: number) {
    item.showFullItem = true;
    this.previewData = item;
  }

  hidePreview(item, i) {
    item.showFullItem = false;
    this.previewData = {};
  }

  edit() {
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
}
