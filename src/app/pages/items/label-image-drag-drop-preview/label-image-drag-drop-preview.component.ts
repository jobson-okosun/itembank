import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Account } from "src/app/authentication/model/account.model";
import { UserService } from "src/app/shared/user.service";
import { ItemHttpService } from "../item-http.service";
import { CdkDragDrop, transferArrayItem } from "@angular/cdk/drag-drop";
import { Option } from "../models/option";
import { NewClozeItem } from "../cloze/model/new-cloze-item.model";
import { ItemUtilitiesService } from "../item-utilities.service";
import { AllPassagesService } from "../../passages/list-passages/all-passages.service";
import { RecycleService } from "../../recycle/recycle.service";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";
import { NotifierService } from "angular-notifier";
import { UsageHistory } from "../models/usage-history";

@Component({
  selector: "app-label-image-drag-drop-preview",
  templateUrl: "./label-image-drag-drop-preview.component.html",
  styleUrls: ["./label-image-drag-drop-preview.component.scss"],
})
export class LabelImageDragDropPreviewComponent implements OnInit {
  @Input() previewData!: any;
  @Output() returnPreviewData = new EventEmitter();
  @ViewChild("previewImage") previewImage!: ElementRef;
  @Input() component!: string;
  @Output() reload = new EventEmitter();

  currentUser: Account;
  assessmentActive: boolean;
  showAnswer: boolean = false;
  options: Option[] = [
    { label: "option A", value: "0" },
    { label: "option B", value: "1" },
    { label: "option C", value: "2" },
    { label: "option D", value: "3" },
  ];
  answers: any[] = ["0", "1", "2", "3"];
  containerList: string[] = [];
  containers: any[] = [];
  previewImageWidth: any;
  previewImageHeight: any;
  recycleComponentActive: boolean = false;
  isEditPreview: boolean = false;
  selectedItemId!: string;
  processing_delete: boolean = false;
  modalRef: any;
  itemUsageHistory: UsageHistory[] = [];
  loading_usage_history: boolean = false;
  subjectName: string;
  hiddenAnswers: Array<string> = [];

  constructor(
    private userService: UserService,
    private itemService: ItemHttpService,
    private itemUtil: ItemUtilitiesService,
    private passageService: AllPassagesService,
    private recycleService: RecycleService,
    private router: Router,
    private modalService: NgbModal,
    private notifier: NotifierService
  ) {
    // console.log('preview:', this.previewData);
    this.assessmentActive = this.itemService.assessmentActive;
  }

  ngAfterViewInit() {
    const imageRect = this.previewImage.nativeElement.getBoundingClientRect();
    console.log("Preview Image Dimensions:", imageRect.width, imageRect.height);

    // Validate response positions
    this.previewData.responsePositions.forEach((position, index) => {
      console.log(`Label ${index}:`, position.x, position.y);
    });
  }
  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    // console.log('preview:', this.previewData);
    this.previewData.options.forEach((option, index) => {
      let data: Option[] = [];
      let container = {
        id: `container ${index + 1}`,
        answer: data,
      };
      this.containers.push(container);
    });
    this.containerList = this.getContainers();
    this.recycleComponentActive = this.recycleService.recycleActive;

    this.isEditPreview = this.router.url.includes("edit-item");
    this.subjectName = this.itemService.subjectName;

    this.hiddenAnswers = new Array(this.previewData.scoringOption.answers.length).fill('');

    console.log(this.previewData);
  }
  review(){
    
  }

  backToEdit() {
    this.itemUtil.previewItem = false;
    this.returnPreviewData.emit(this.previewData);
  }

  check() {
    this.showAnswer = !this.showAnswer;
  }

  getContainers() {
    let container_answers = [];
    this.containers.forEach((container) => {
      container_answers.push(container.id);
    });
    // console.log(container_answers);
    return container_answers;
  }

  drop(event: CdkDragDrop<Option[]>) {
    // console.log(event);
    if (event.container.data.length > 0) {
      this.options.push(event.container.data[0]);
      event.container.data.splice(0, 1);
      transferArrayItem(
        event.previousContainer.data,
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
      //console.log(this.containers);
      //console.log('original answers', this.answers);
    }
  }

  // onPreviewImageLoad() {
  //   const imageRect = this.previewImage.nativeElement.getBoundingClientRect();
  //   console.log('Loaded Preview Image Dimensions:', imageRect.width, imageRect.height);

  //   // Update positions based on the image's loaded dimensions
  //   this.calculateLabelPositions();
  // }

  onPreviewImageLoad() {
    const img = this.previewImage.nativeElement;
    this.previewImageWidth = img.naturalWidth;
    this.previewImageHeight = img.naturalHeight;
  }
  // calculateLabelPositions() {
  //   const imageRect = this.previewImage.nativeElement.getBoundingClientRect();
  //   this.previewData.responsePositions.forEach((position, index) => {
  //     console.log(
  //       `Label ${index}: Position X: ${position.x}% Y: ${position.y}% Relative to ${imageRect.width}x${imageRect.height}`
  //     );
  //   });
  // }

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

  getScaledPosition(position: { x: number; y: number }) {
    const x = (position.x / 100) * this.previewImageWidth;
    const y = (position.y / 100) * this.previewImageHeight;
    return { x, y };
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


  onDragStart(event: DragEvent, item: string) {
    // this.draggedItem = item;
    // event.dataTransfer?.setData("text", item);
  }

  onDrop(event: DragEvent, labelIndex: number) {
    event.preventDefault();
    // const targetLabel = this.dropdownLabels[labelIndex];

    // // Check if the label is already occupied
    // if (this.draggedItem && !targetLabel.item) {
    //   targetLabel.item = this.draggedItem; // Assign item to label
    //   this.distractors = this.distractors.filter(
    //     (item) => item !== this.draggedItem
    //   ); // Remove from list
    //   console.log(
    //     `Item "${this.draggedItem}" dropped on label ${targetLabel.id}`
    //   );
    //   this.notifierService.notify(
    //     "success",
    //     `Item "${this.draggedItem}" dropped on label ${targetLabel.id}`
    //   );
    //   this.draggedItem = null; // Reset dragged item
    // } else if (targetLabel.item) {
    //   this.notifierService.notify("warning", "Label is already occupied.");
    //   console.error("Label is already occupied.");
    // } else {
    //   console.error("Invalid drop target.");
    // }

    // console.log(this.dropdownLabels);
  }

  onDragEnd() {
    // this.draggedItem = null; // Reset dragged item
  }
}
