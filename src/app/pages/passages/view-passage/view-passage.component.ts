import { Component, Input, OnInit } from '@angular/core';
import { AllPassagesService } from '../list-passages/all-passages.service';
import { ItemHttpService } from '../../items/item-http.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SinglePassageItems } from '../../items/passage-item/model/single-passage-items.model';
import { ItemUtilitiesService } from '../../items/item-utilities.service';

@Component({
  selector: 'app-view-passage',
  templateUrl: './view-passage.component.html',
  styleUrls: ['./view-passage.component.scss']
})
export class ViewPassageComponent implements OnInit {
  @Input() passage: SinglePassageItems;
  
  itemTrail!: any;

  id: string;

  constructor(private itemService: ItemHttpService, private ar: ActivatedRoute, private itemUtil: ItemUtilitiesService) { 
  }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
    // console.log(this.passage)
    //console.log(this.itemTrail);
    /* this.itemService.fetchPassageItem(this.id).subscribe((res) => {
      if(res){
        this.passage = res;
        console.log(this.passage);
      }

    }, (error: HttpErrorResponse) => {
      console.log(error);
    }) */
  }

}
