import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllPassagesService } from '../list-passages/all-passages.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SinglePassageModel } from '../../items/passage-item/model/single-passage-model.model';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-passage',
  templateUrl: './edit-passage.component.html',
  styleUrls: ['./edit-passage.component.scss'],
})
export class EditPassageComponent implements OnInit {
  passageId: string;
  passage: SinglePassageModel;

  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    private passageService: AllPassagesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.passageId = this.ar.snapshot.params['passageId'];
    this.fetchPassage(this.passageId);
  }

  editPassage() {
    this.passageService.editPassage(this.passageId, this.passage).subscribe(
      (value) => {
        Swal.fire({
          icon: 'success',
          title: 'Congratulations!',
          text: 'The passage has been updated successfully.',
        });
        this.location.back();
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }

  fetchPassage(passageId: string) {
    this.passageService.fetchSinglePassage(passageId).subscribe(
      (value) => {
        this.passage = value;
        this.passage.itemStatus = value.status;
        //console.log(this.passage);
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }
}
