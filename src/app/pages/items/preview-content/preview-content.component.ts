import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview-content',
  templateUrl: './preview-content.component.html',
  styleUrls: ['./preview-content.component.scss']
})
export class PreviewContentComponent implements OnInit {

  @Input() item: any = {};

  constructor() { }

  ngOnInit(): void {
    // console.log(this.item);
  }

}
