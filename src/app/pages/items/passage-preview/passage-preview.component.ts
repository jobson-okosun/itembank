import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passage } from '../passage-item/model/passage.model';
import { ItemUtilitiesService } from '../item-utilities.service';

@Component({
  selector: 'app-passage-preview',
  templateUrl: './passage-preview.component.html',
  styleUrls: ['./passage-preview.component.scss'],
})
export class PassagePreviewComponent implements OnInit {
  @Input() previewData!: any;
  @Input() showEditBtnInProfileActivitiesPassagePreview: boolean = true;
  @Output() returnPreviewData = new EventEmitter();
  @Input() passageTrail!: any;

  constructor(private itemUtil: ItemUtilitiesService) { }

  ngOnInit(): void {

  }

  edit() {
    this.itemUtil.previewItem = false;
    this.returnPreviewData.emit(this.previewData);
  }

  back(): void {
    this.itemUtil.previewItem = false;
    this.returnPreviewData.emit(this.previewData);
  }
}
