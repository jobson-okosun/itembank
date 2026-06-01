import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { RichEssayModel } from '../rich-essay/model/rich-essay-model.model';
import { ItemUtilitiesService } from '../item-utilities.service';

@Component({
  selector: 'app-essay-preview',
  templateUrl: './essay-preview.component.html',
  styleUrls: ['./essay-preview.component.scss']
})
export class EssayPreviewComponent implements OnInit {

  @Input() previewData: RichEssayModel;
  @Output() returnPreviewData = new EventEmitter();
  answer: string;

  constructor(private itemUtil: ItemUtilitiesService) { }

  ngOnInit(): void {
  }

  edit() {
    this.itemUtil.previewItem = false;
    this.returnPreviewData.emit(this.previewData);
  }
  
}
