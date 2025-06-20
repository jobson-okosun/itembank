import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { Account } from "src/app/authentication/model/account.model";
import { UserService } from "src/app/shared/user.service";
import { ItemHttpService } from "../item-http.service";
import { ItemUtilitiesService } from "../item-utilities.service";
import { Router } from "@angular/router";
import { RecycleService } from "../../recycle/recycle.service";
import { HttpErrorResponse } from "@angular/common/http";
import Swal from "sweetalert2";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PassageService } from "src/app/shared/passage-service/passage.service";
import { AllPassagesService } from "../../passages/list-passages/all-passages.service";

@Component({
  selector: "app-label-image-text-preview",
  templateUrl: "./label-image-text-preview.component.html",
  styleUrls: ["./label-image-text-preview.component.scss"],
})
export class LabelImageTextPreviewComponent implements OnInit, AfterViewInit {
  @Input() previewData!: any;
  @Output() returnPreviewData = new EventEmitter();
  @ViewChild("previewImage") previewImage!: ElementRef;
  previewImageWidth: any;
  previewImageHeight: any;
  @Output() reload = new EventEmitter();
  @Input() component!: string;

  currentUser: Account;
  assessmentActive: boolean;
  showAnswer: boolean = false;
  subjectName: string = "";
  subjectId: string = this.itemService.subjectId;
  recycleComponentActive: boolean = this.recycleService.recycleActive;
  isEditPreview: boolean = false;
  processing_delete: boolean = false;
  selectedItemId: string = "";
  modalRef: any;
  hiddenAnswers: Array<string> = [];
  constructor(
    private userService: UserService,
    private itemService: ItemHttpService,
    private itemUtil: ItemUtilitiesService,
    private router: Router,
    private recycleService: RecycleService,
    private modalService: NgbModal,
    private passageService: AllPassagesService
  ) {
    this.assessmentActive = this.itemService.assessmentActive;
  }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.subjectName = this.itemService.subjectName;
    this.isEditPreview = this.router.url.includes("edit-item");
    this.hiddenAnswers = new Array(this.previewData.scoringOption.answers.length).fill('');
  }

  onPreviewImageLoad() {
    const img = this.previewImage.nativeElement;
    this.previewImageWidth = img.naturalWidth;
    this.previewImageHeight = img.naturalHeight;
  }

  ngAfterViewInit() {
    const imageRect = this.previewImage.nativeElement.getBoundingClientRect();
    console.log("Preview Image Dimensions:", imageRect.width, imageRect.height);

    // Validate response positions
    this.previewData.responsePositions.forEach((position, index) => {
      console.log(`Label ${index}:`, position.x, position.y);
    });

    console.log(this.previewData);
  }

  backToEdit() {
    this.itemUtil.previewItem = false;
    this.returnPreviewData.emit(this.previewData);
  }

  checkAnswer() {
    this.showAnswer = !this.showAnswer;
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

  openDeleteItemModal(deleteConfirmationModal: any, itemId: any) {
    this.selectedItemId = itemId;
    this.modalRef = this.modalService.open(deleteConfirmationModal, {
      centered: true,
      size: "md",
    });
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
  refresh() {
    this.reload.emit();
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

  check() {
    this.showAnswer = !this.showAnswer;

    // console.log(this.showAnswer);
  }
}
