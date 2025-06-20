import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passage } from '../passage-item/model/passage.model';
import { ItemUtilitiesService } from '../item-utilities.service';

@Component({
  selector: 'app-passage-preview',
  templateUrl: './passage-preview.component.html',
  styleUrls: ['./passage-preview.component.scss']
})
export class PassagePreviewComponent implements OnInit {

  @Input() previewData!: any;
  @Output() returnPreviewData = new EventEmitter();

  constructor(private itemUtil: ItemUtilitiesService) {}

  ngOnInit(): void {}

  edit() {
    this.itemUtil.previewItem = false;
    this.returnPreviewData.emit(this.previewData);
  }

}
