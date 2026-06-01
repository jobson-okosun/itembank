import { Component, OnInit } from '@angular/core';
import { ItemUtilitiesService } from '../../items/item-utilities.service';

@Component({
  selector: 'app-new-passage-item',
  templateUrl: './new-passage-item.component.html',
  styleUrls: ['./new-passage-item.component.scss']
})
export class NewPassageItemComponent implements OnInit {

  itemTrail: any;

  constructor(private itemUtil: ItemUtilitiesService) { }

  ngOnInit(): void {
    // console.log(this.itemUtil.currentItemTrail);
    this.itemTrail = this.itemUtil.currentItemTrail;
  }

}
