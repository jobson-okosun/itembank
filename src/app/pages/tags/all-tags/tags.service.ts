import { Injectable } from '@angular/core';
import { TagsModel } from './tags.model';
import { TagType } from './tag-type.model';
import { AllTagsService } from './all-tags.service';

@Injectable({
  providedIn: 'root',
})
export class TagsService {

  TagTypes: TagType[] = [];

  Tags: TagsModel[] = [
    { id: '', tagName: 'Biology' },
    { id: '', tagName: 'Physics' },
    { id: '', tagName: 'Chemistry' },
    { id: '', tagName: 'English' },
    { id: '', tagName: 'Mathematics' },
    { id: '', tagName: 'Computer Science' },
    { id: '', tagName: 'Technical Drawing' },
  ];

  constructor(private tagType: AllTagsService) {
    /* this.TagTypes = this.tagType.getAllTags()
    this.TagTypes.forEach((tag) => {
      this.Tags = [{id: tag.id, tagName:}]
    }) */
  }

  getTags() {
    return this.Tags;
  }

  addTag(tag: TagsModel) {
    this.Tags.push(tag);
  }
}
