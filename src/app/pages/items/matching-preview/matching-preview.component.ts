import { StimulusList } from "./../matching/model/matching";
import { Component, OnInit, Input, Output, EventEmitter, ElementRef, QueryList, ViewChild, ViewChildren, AfterViewInit } from "@angular/core";
import {
  CdkDragDrop,
  CdkDragEnter,
  CdkDragMove,
  CdkDragStart,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Option } from "../models/option";
import { ItemDetails, ItemUtilitiesService } from "../item-utilities.service";
import { Router } from "@angular/router";
import { ItemHttpService } from "../item-http.service";
import { Account } from "src/app/authentication/model/account.model";
import { UserService } from "src/app/shared/user.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AllPassagesService } from "../../passages/list-passages/all-passages.service";
import { RecycleService } from "../../recycle/recycle.service";
import Swal from "sweetalert2";
import { HttpErrorResponse } from "@angular/common/http";
import { UsageHistory } from "../models/usage-history";
import { NotifierService } from "angular-notifier";

@Component({
  selector: "app-matching-preview",
  templateUrl: "./matching-preview.component.html",
  styleUrls: ["./matching-preview.component.scss"],
})
export class MatchingPreviewComponent implements OnInit, AfterViewInit {
  @Input() component!: string;
  @Input() formType!: string;
  @Input() previewData!: any;
  @Input() itemTrailInfo!: any;
  @Output() return = new EventEmitter();
  @Output() returnPreviewData = new EventEmitter();
  @Output() reload = new EventEmitter();

  option: string = "Options";
  subjectName: string = "";
  subjectId: string = this.itemService.subjectId;
  selectedItemId: string;
  modalRef: any;
  processing_delete: boolean = false;
  opts: any[] = [];
  ans: string[] = [];
  showAnswer: boolean = false;
  // matched: any[] = [];
  itemTrailInformation: ItemDetails;
  currentUser: Account;
  assessmentActive: boolean;
  recycleComponentActive: boolean = this.recycleService.recycleActive;
  itemUsageHistory: UsageHistory[] = [];
  loading_usage_history: boolean = false;
  isEditPreview: boolean = false;

  matched: (any | null)[] = [];
  options: any[] = [];
  connectedLists: string[] = [];
  lines: any[] = [];

  @ViewChildren('leftBox', { read: ElementRef }) leftBoxes!: QueryList<ElementRef>;
  @ViewChildren('rightBox', { read: ElementRef }) rightBoxes!: QueryList<ElementRef>;
  @ViewChild('wrapper') wrapper!: ElementRef;



  constructor(
    private router: Router,
    private itemService: ItemHttpService,
    private userService: UserService,
    private modalService: NgbModal,
    private passageService: AllPassagesService,
    private recycleService: RecycleService,
    private notifier: NotifierService,
    private itemUtil: ItemUtilitiesService
  ) { }

  // ngOnInit(): void {
  //   //console.log(this.previewData.options);
  //   this.currentUser = this.userService.getCurrentUser();
  //   this.subjectName = this.itemService.subjectName;

  //   this.isEditPreview = this.router.url.includes('edit-item')
  //   this.assessmentActive = this.itemService.assessmentActive;
  //   this.previewData.options.forEach((option) => {
  //     this.opts.push(option);
  //   });
  //   this.opts = this.shuffleOptions(this.opts);
  //   // this.ans = this.previewData.scoringOption.answers;

  //   console.log(this.previewData);
  //   // console.log(this.ans);

  //   const orderedAnswers = this.previewData.scoringOption.answers.map(
  //     (answerValue) => {
  //       const option = this.previewData.options.find(
  //         (opt) => opt.value === answerValue
  //       );
  //       return option ? option.label : null;
  //     }
  //   );
  //   this.ans = orderedAnswers;


  //   console.log(this.ans);
  // }

  ngOnInit(): void {

    this.currentUser = this.userService.getCurrentUser();

    this.options = this.shuffleOptions([...this.previewData.options]);


    // one box per stem
    this.matched = this.previewData.stems.map(() => null);

    this.connectedLists = [
      'option-list',
      ...this.previewData.stems.map((_, i) => `right-box-${i}`)
    ];
  }

  ngAfterViewInit() {
    setTimeout(() => this.updateLines());
  }


  updateLines() {

    const wrapperRect = this.wrapper.nativeElement.getBoundingClientRect();

    this.lines = this.leftBoxes.map((leftRef, i) => {

      const rightRef = this.rightBoxes.toArray()[i];

      const lRect = leftRef.nativeElement.getBoundingClientRect();
      const rRect = rightRef.nativeElement.getBoundingClientRect();

      return {
        x1: lRect.right - wrapperRect.left,
        y1: lRect.top - wrapperRect.top + lRect.height / 2,
        x2: rRect.left - wrapperRect.left,
        y2: rRect.top - wrapperRect.top + rRect.height / 2,
      };
    });
  }


  addStyle(event: CdkDragMove) {
    const target = event.source.element.nativeElement;
    console.log('t...', target.innerHTML);

    target.style.outline = "2px solid #007bff"; // Add a blue outline
    target.style.zIndex = "1000"; // Ensure the dragged item is on top
  }

  // onDrop(event: CdkDragDrop<any[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   }
  // }

  drop(event: CdkDragDrop<any>) {

    const prevId = event.previousContainer.id;
    const currId = event.container.id;

    if (prevId === currId) return;

    // OPTION → BOX
    if (prevId === 'option-list' && currId.startsWith('right-box-')) {

      const index = +currId.split('-')[2];

      if (this.matched[index]) return; // already filled

      const option = event.item.data;

      this.matched[index] = option;

      this.options = this.options.filter(o => o !== option);

      setTimeout(() => this.updateLines());
      return;
    }

    // BOX → OPTIONS
    if (currId === 'option-list' && prevId.startsWith('right-box-')) {

      const index = +prevId.split('-')[2];

      const item = this.matched[index];

      if (item) {
        this.options.push(item);
        this.matched[index] = null;
      }

      setTimeout(() => this.updateLines());
      return;
    }

    // BOX ↔ BOX SWAP
    if (prevId.startsWith('right-box-') && currId.startsWith('right-box-')) {

      const p = +prevId.split('-')[2];
      const c = +currId.split('-')[2];

      const temp = this.matched[p];
      this.matched[p] = this.matched[c];
      this.matched[c] = temp;

      setTimeout(() => this.updateLines());
    }
  }

  log() {
    console.log(true)
  }



  onDrop_(event: CdkDragDrop<string[]>) {
    /* if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(this.matched);
    } */
    moveItemInArray(this.opts, event.previousIndex, event.currentIndex);
    // console.log(this.previewData.stimulusList, this.opts);
  }

  /* onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(this.matched);
    }
  } */

  shuffleOptions(options: Option[]) {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = options[i];

      options[i] = options[j];
      options[j] = temp;
    }
    return options;
  }

  check() {
    this.showAnswer = !this.showAnswer;
    // console.log(this.showAnswer);
  }

  edit() {
    this.itemUtil.previewItem = false;
    if (this.previewData.id) {
      this.returnPreviewData.emit(this.previewData);
      this.router.navigate(
        ["/examalpha/subjects/" + this.subjectName + "/edit-item"],
        {
          queryParams: {
            type: `${this.previewData.type}`,
            id: `${this.previewData.id}`,
          },
        }
      );
    } else {
      this.returnPreviewData.emit(this.previewData);
    }
  }

  editData($event: any) {
    this.return.emit($event);
  }

  review() {
    if (this.previewData.id) {
      //this.return.emit();
      this.router.navigate(
        ["/examalpha/subjects/" + this.subjectId + "/edit-item"],
        {
          queryParams: {
            type: `${this.previewData.type}`,
            id: `${this.previewData.id}`,
          },
        }
      );
    } else {
      this.reload.emit();
    }
  }

  selection(i: string) {
    //this.selected = i;
  }

  openDeleteItemModal(deleteConfirmationModal: any, itemId: any) {
    this.selectedItemId = itemId;
    this.modalRef = this.modalService.open(deleteConfirmationModal, {
      centered: true,
      size: "md",
    });
  }

  openDeletePassageItemModal(
    deletePassageQuestionConfirmationModal: any,
    itemId: any
  ) {
    this.selectedItemId = itemId;
    this.modalRef = this.modalService.open(
      deletePassageQuestionConfirmationModal,
      {
        centered: true,
        size: "md",
      }
    );
  }

  deleteItem() {
    this.processing_delete = true;
    this.itemService.deleteItem(this.selectedItemId).subscribe(
      (value) => {
        if (value) {
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: "The item was deleted successfully!",
          });
          this.refresh();
        }

        this.processing_delete = false;
        this.modalService.dismissAll();
      },
      (error: HttpErrorResponse) => {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: `${error.error.message}`,
        });
        this.processing_delete = false;
        this.modalService.dismissAll();
      }
    );
  }

  refresh() {
    this.reload.emit();
  }

  deletePassageItem() {
    this.processing_delete = true;
    this.passageService
      .deletePassageItem(this.selectedItemId, this.previewData.passageId)
      .subscribe(
        (value) => {
          Swal.fire({
            title: "Congratulations!",
            text: "You have successfully deleted the selected question.",
            icon: "success",
          });
          /* this.passage.items = this.passage.items.filter(
            (item) => item.id !== this.selectedItemId
          ); */
          this.processing_delete = false;
          this.refresh();
          this.modalService.dismissAll();
          //this.ngOnInit();
        },
        (error: HttpErrorResponse) => {
          this.processing_delete = false;
          Swal.fire({
            title: "Failed!",
            text: `${error.error.message}`,
            icon: "error",
          });
        }
      );
  }

  openUsageHistoryModal(itemUsageModal: any, itemId: string) {
    this.loading_usage_history = true;
    this.modalService.open(itemUsageModal, {
      centered: true,
      size: "md",
    });
    this.itemService.fetchItemUsageCount(itemId).subscribe(
      (value) => {
        if (value) {
          this.itemUsageHistory = value;
          this.loading_usage_history = false;
        }
      },
      (error: HttpErrorResponse) => {
        this.loading_usage_history = false;
        this.notifier.notify("error", error.error.message);
      }
    );
  }
}
