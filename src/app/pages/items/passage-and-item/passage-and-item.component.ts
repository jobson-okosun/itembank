import { HttpErrorResponse } from '@angular/common/http';
import { ItemDetails, ItemUtilitiesService } from './../item-utilities.service';
import { PassageService } from 'src/app/shared/passage-service/passage.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ItemHttpService } from '../item-http.service';
import { SinglePassageItems } from '../passage-item/model/single-passage-items.model';
import { AllPassagesService } from '../../passages/list-passages/all-passages.service';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
import { UserService } from 'src/app/shared/user.service';
import { Account } from 'src/app/authentication/model/account.model';

@Component({
  selector: 'app-passage-and-item',
  templateUrl: './passage-and-item.component.html',
  styleUrls: ['./passage-and-item.component.scss'],
})
export class PassageAndItemComponent implements OnInit {
  @Input() passage!: SinglePassageItems;
  //@Input() itemTrail!: ItemDetails;

  breadCrumbItems!: Array<{}>;

  passageId: string;

  loading: boolean = true;

  //passage: SinglePassageItems;

  items: any[] = [];

  verticalRender: boolean = true;

  horizontalRender: boolean = false;

  assessmentActive: boolean = false;

  routerParameterValue: any;

  selectedItemId: string;

  processing_delete: boolean = false;

  itemTrail: ItemDetails =  this.itemUtil.currentItemTrail;

  currentUser: Account =  this.userService.getCurrentUser();

  constructor(
    private router: Router,
    private itemUtil: ItemUtilitiesService,
    private passageService: AllPassagesService,
    private itemService: ItemHttpService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private location: Location,
    private userService: UserService
  ) {
    /* this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.passageId = params.get('id');
      this.itemUtil.passageId = this.passageId;
    }); */
    this.passageId = this.activatedRoute.snapshot.params['passageId'];    
  }

  ngOnInit(): void {
    const localTrail = this.itemUtil.getSavedItemTrail()

    this.breadCrumbItems = [{ label: 'Passage-preview', active: true }];
    this.assessmentActive = this.itemService.assessmentActive ?? localTrail.assessmentActive;

    if(!this.itemTrail) {
       this.itemTrail = localTrail
    }

    this.itemService.subjectId = this.itemTrail?.subjectId;
    this.itemService.topicId = this.itemTrail?.topicId;
    this.itemService.subjectName = this.itemTrail?.subjectName;
    this.itemService.topicName = this.itemTrail?.topicName

    //this.fetchPassageItems(this.passageId);
    this.itemService.fetchPassageItem(this.passageId).subscribe(
      (value) => {
        this.passage = value;
        this.passage.items.forEach((item) => {
          item.showAnswer = false;
        });
        this.items = this.passage.items;
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
        this.location.back();
      }
    );
    //this.fetchPassage();
  }

  goBack(){
    this.location.back();
  }

  setVerticalRender() {
    this.horizontalRender = false;
    this.verticalRender = true;
  }

  setHorizontalRender() {
    this.verticalRender = false;
    this.horizontalRender = true;
  }

  addQuestionToPassage() {
    this.itemUtil.passageItemWorkflow = true;
    this.itemUtil.passageId = this.passageId;

    this.router.navigate([
      `/examalpha/passages/subjects/${this.itemTrail.subjectName}/passage/${this.passageId}/new-item`,
    ]);
  }

  editItem(item: any) {
    this.itemUtil.currentItemTrail = this.itemTrail;

    /* if ((item.type = 'MCQ')) { */
    this.router.navigate(
      ['/examalpha/subjects/' + this.itemTrail.subjectId + '/edit-item'],
      {
        queryParams: {
          type: `${item.type}`,
          id: `${item.id}`,
        },
      }
    );
    /* } */
  }

  /* fetchPassageItems(passageId: string) {
    this.itemService.fetchPassageItem(passageId).subscribe(
      (value) => {
        this.passage = value;
        this.passage.items.forEach((item) => {
          item.showAnswer = false;
        });
        this.items = this.passage.items;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  } */

  openDeletePassageConfirmationModal(
    id: string,
    deletePassageConfirmationModal: any
  ) {
    this.selectedItemId = id;
    this.modalService.open(deletePassageConfirmationModal, {
      centered: true,
      size: 'md',
    });
  }

  deletePassageItem() {
    this.processing_delete = true;
    this.passageService
      .deletePassageItem(this.selectedItemId, this.passageId)
      .subscribe(
        (value) => {
          Swal.fire({
            title: 'Congratulations!',
            text: 'You have successfully deleted the selected question.',
            icon: 'success',
          });
          this.passage.items = this.passage.items.filter(
            (item) => item.id !== this.selectedItemId
          );
          this.processing_delete = false;
          this.modalService.dismissAll();
          this.ngOnInit();
        },
        (error: HttpErrorResponse) => {
          this.processing_delete = false;
          Swal.fire({
            title: 'Failed!',
            text: `${error.error.message}`,
            icon: 'error',
          });
        }
      );
  } 
}
