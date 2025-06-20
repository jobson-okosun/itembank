import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { UserService } from "src/app/shared/user.service";
import { ItemHttpService } from "../item-http.service";
import { Account } from "src/app/authentication/model/account.model";
import { ItemUtilitiesService } from "../item-utilities.service";
import { HttpErrorResponse } from "@angular/common/http";
import Swal from "sweetalert2";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RecycleService } from "../../recycle/recycle.service";
import { Router } from "@angular/router";
import { AllPassagesService } from "../../passages/list-passages/all-passages.service";

@Component({
  selector: "app-label-image-dropdown-preview",
  templateUrl: "./label-image-dropdown-preview.component.html",
  styleUrls: ["./label-image-dropdown-preview.component.scss"],
})
export class LabelImageDropdownPreviewComponent
  implements OnInit, AfterViewInit
{
  @Input() component!: string;
  @Input() previewData!: any;
  @Output() returnPreviewData = new EventEmitter();
  @ViewChild("previewImage") previewImage!: ElementRef;
  @Output() reload = new EventEmitter();
  recycleComponentActive: boolean = this.recycleService.recycleActive;

  currentUser: Account;
  assessmentActive: boolean;
  showAnswer: boolean = false;
  previewImageWidth: any;
  previewImageHeight: any;
  processing_delete: boolean = false;
  selectedItemId: string = "";
  modalRef: any;
  isEditPreview: boolean = false;
  subjectName: string = "";
  subjectId: string = this.itemService.subjectId;

  constructor(
    private userService: UserService,
    private itemService: ItemHttpService,
    private itemUtil: ItemUtilitiesService,
    private modalService: NgbModal,
    private recycleService: RecycleService,
    private router: Router,
    private passageService: AllPassagesService
  ) {
    this.assessmentActive = this.itemService.assessmentActive;
  }

  ngOnInit(): void {
    // console.log(this.previewData);
    this.currentUser = this.userService.getCurrentUser();
    this.currentUser = this.userService.getCurrentUser();
    this.isEditPreview = this.router.url.includes("edit-item");
    this.assessmentActive = this.itemService.assessmentActive;
    this.subjectName = this.itemService.subjectName;
  }

  ngAfterViewInit() {
    const imageRect = this.previewImage.nativeElement.getBoundingClientRect();
    console.log("Preview Image Dimensions:", imageRect.width, imageRect.height);

    // Validate response positions
    this.previewData.responsePositions.forEach((position, index) => {
      console.log(`Label ${index}:`, position.x, position.y);
    });
  }

  backToEdit() {
    this.itemUtil.previewItem = false;
    this.returnPreviewData.emit(this.previewData);
  }
  onPreviewImageLoad() {
    const img = this.previewImage.nativeElement;
    this.previewImageWidth = img.naturalWidth;
    this.previewImageHeight = img.naturalHeight;
  }

  checkAnswer() {
    this.showAnswer = !this.showAnswer;
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

  @ViewChild('previewContainer') previewContainer!: ElementRef;
  
  check() {
    this.showAnswer = !this.showAnswer;
    
    // Get dropdowns only from this component instance
    const dropdowns = this.previewContainer.nativeElement.querySelectorAll('select');

    if (this.showAnswer && this.previewData.scoringOption?.answers) {
      // Show correct answers
      this.previewData.scoringOption.answers.forEach(
        (answer: string, index: number) => {
          const dropdown = dropdowns[index] as HTMLSelectElement;
          if (dropdown) {
            const possibleResponses =
              this.previewData.possibleResponses[index]?.responses || [];
            const correctAnswer = possibleResponses[parseInt(answer)];
            if (correctAnswer) {
              dropdown.value = correctAnswer;
            }
          }
        }
      );
    } else {
      // Reset dropdowns when unchecking
      dropdowns.forEach((dropdown: HTMLSelectElement) => {
        dropdown.selectedIndex = 0;
      });
    }
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
}
