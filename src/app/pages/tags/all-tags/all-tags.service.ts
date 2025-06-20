import { Injectable } from '@angular/core';
import { TagType } from './tag-type.model';

@Injectable({
  providedIn: 'root',
})
export class AllTagsService {
  TagTypes: TagType[] = [];
  pageSize=5;
  page=1;

  constructor() {
    this.TagTypes = [
      {
        id: 'eedecfgyhaqi335cedd',
        tagTypeName: 'Subjects',
      },
      {
        id: '',
        tagTypeName: 'Topics',
      },
      {
        id: '',
        tagTypeName: 'Category',
      },
      {
        id: '',
        tagTypeName: 'Sciences',
      },
      {
        id: '',
        tagTypeName: 'History',
      },
      {
        id: 'eedecfgyhaqi335cedd',
        tagTypeName: 'Subjects',
      },
      {
        id: '',
        tagTypeName: 'Topics',
      },
      {
        id: '',
        tagTypeName: 'Category',
      },
      {
        id: '',
        tagTypeName: 'Sciences',
      },
      {
        id: '',
        tagTypeName: 'History',
      },
    ];
  }

  getAllTags() {
    return this.TagTypes;
  }

  getTag(index: number){
    //let tag = this.TagTypes.filter(tagType => {tag = this.})
  }

  addTag(tags: TagType){
    this.TagTypes.push(tags);
  }
}
