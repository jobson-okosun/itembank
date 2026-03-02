import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  Inject,
  Renderer2,
  HostListener,
  AfterViewInit,
  ChangeDetectorRef,
  OnDestroy,
} from "@angular/core";
import { NewClozeItem } from "../cloze/model/new-cloze-item.model";
import { ItemStatusEnum } from "../models/item-status-enum";
import {
  CdkDragDrop,
  CdkDragEnd,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Option } from "../models/option";
import { ScoringTypeEnum } from "../models/scoring-type-enum";
import { MatchingRuleEnums } from "../models/matching-rule-enums";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "src/app/shared/user.service";
import { ItemUtilitiesService } from "../item-utilities.service";
import { RejectionReason } from "../models/rejection-reason";
import { DefaultItemProperties } from "../models/default-item-properties";
import { ItemTagsDtos } from "../models/item-tags-dtos";
import { Images } from "../models/images";
import { Account } from "src/app/authentication/model/account.model";
import { DOCUMENT, Location } from "@angular/common";
import { NewLabelImageText } from "../label-image-text/models/label-image-text-model";
import { NotifierService } from "angular-notifier";
import { LabelImageDragDrop } from "./models/label-image-drag-drop";
import Swal from "sweetalert2";
import { ItemHttpService } from "../item-http.service";
import { HttpErrorResponse } from "@angular/common/http";
import { ItemTypes } from "../models/item-types";
import { DropzoneComponent, DropzoneConfigInterface } from "ngx-dropzone-wrapper";
import { ItemTagComponent } from "../item-tag/item-tag.component";

export class ResponseContainer {
  name: string;
  position: { x: number; y: number };
}

declare var tinymce: any;
declare const MathJax: any;

@Component({
  selector: "app-label-image-drag-drop",
  templateUrl: "./label-image-drag-drop.component.html",
  styleUrls: ["./label-image-drag-drop.component.scss"],
})
export class LabelImageDragDropComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() selectedItemType!: string;
  @Input() formType!: string;
  @Input() editData!: any;
  @Output() savedItem = new EventEmitter();
  @ViewChild('dzRef') dzRef!: DropzoneComponent;

  dropZoneConfig: DropzoneConfigInterface = {
    maxFilesize: 200,
  };
  startX = 0;
  startY = 0;
  newX = 0;
  newY = 0;
  currentXPercent = 45;
  currentYPercent = 42;
  clientHeight = 0;
  clientWidth = 0;

  labels: Array<{ text: string; x: number; y: number }> = [
    { text: "Label 1", x: 50, y: 50 },
    { text: "Label 2", x: 80, y: 80 },
  ];
  processingRejection: boolean = false;
  @ViewChild("draggable") draggableElement: ElementRef;
  @ViewChild("tagRef") tagRef: ItemTagComponent;

  private isDragging = false;
  private offsetX: number;
  private offsetY: number;
  private currentLabelIndex: number;

  @ViewChild("imgUpload") imgUpload: ElementRef;

  @ViewChild("container", { static: false }) containerRef!: ElementRef;
  @ViewChild("card", { static: false }) cardRef!: ElementRef;

  @ViewChild("imageRef") imageElement: ElementRef;

  // Store labels and their relative positions as percentages

  private imageWidth: number;
  private imageHeight: number;

  previewData: LabelImageDragDrop = new LabelImageDragDrop();
  currentUser: Account;
  preview: boolean = false;
  image: Images = new Images();
  tags: ItemTagsDtos[] = [];
  defaultItemProperties: DefaultItemProperties = new DefaultItemProperties();
  scoringType: string[] = [];
  matchingRules: string[] = [];
  difficultyLevel: number[] = [1, 2, 3, 4, 5];
  passageWorkFlow: boolean = this.itemUtil.passageItemWorkflow;
  newRejectionReason: RejectionReason = new RejectionReason();
  options: Option[] = [];
  countAxis: number = 0;
  countXAxis: number = 0;
  file: File;
  responseContainers: any[] = [];
  publishingItem: boolean = false;

  dropdownLabels: Array<{
    x: number;
    y: number;
    inputValue: string;
    selectedOptionIndex: number | null;

    id: string;
    item: null;
  }> = [
    {
      x: 0,
      y: 0,
      inputValue: "",
      selectedOptionIndex: null,

      id: "1",
      item: null,
    },
    // {
    //   x: 80,
    //   y: 80,
    //   inputValue: "",
    //   selectedOptionIndex: null,

    //   id: "2",
    //   item: null,
    // },
  ];
  selectedOptionIndex: number | null = null;
  draggedItem: any = null;
  distractor: string = "";
  subjectModerationStatus: boolean = false;
  rect: any;

  option: Object = {
    height: 200,
    menubar: true,
    branding: false,
    base_url: "/tinymce",
    suffix: ".min",
    plugins: "table quickbars lists autoresize charmap paste",
    quickbars_insert_toolbars: false,
    setup: this.setup.bind(this),
    paste_preprocess: function (pl, o) {
      // console.log(o.content);
    },
    toolbar:
      "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent table quickimage quicklink | subscript superscript charmap",
  };

  activeTab = 0
  constructor(
    @Inject(DOCUMENT) private document: any,
    public itemUtil: ItemUtilitiesService,
    private authService: UserService,
    private modalService: NgbModal,
    private el: ElementRef,
    private renderer: Renderer2,
    private cdRef: ChangeDetectorRef,
    private notifierService: NotifierService,
    private location: Location,
    private itemService: ItemHttpService
  ) {}

  ngAfterViewInit() {
    // Capture the initial size of the image after the view is initialized
    this.imageWidth = this.imageElement.nativeElement.offsetWidth;
    this.imageHeight = this.imageElement.nativeElement.offsetHeight;
    const rect = this.imageElement.nativeElement.getBoundingClientRect();
    // console.log("Image Dimensions:", rect.width, rect.height);
  }

 

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.scoringType = Object.values(ScoringTypeEnum);
    this.matchingRules = Object.values(MatchingRuleEnums);
    this.defaultItemProperties.difficultyLevel = 1;
    this.defaultItemProperties.scoringOption.matchingRule =
      MatchingRuleEnums.EXACT_MATCH;

      this.defaultItemProperties.scoringOption.autoScore = true

    this.subjectModerationStatus =
      this.itemService.currentSubjectModerationEnabled;

    this.itemUtil.setSelectedTags(this.tags);

    if (this.editData) {
      this.defaultItemProperties.reference = this.editData.reference;
      this.defaultItemProperties.difficultyLevel =
        this.editData.difficultyLevel;
      this.defaultItemProperties.stimulus = this.editData.stimulus;
      this.defaultItemProperties.shuffleOptions = this.editData.shuffleOptions;
      
      this.options = this.editData.options;

      //scoring Options
      this.defaultItemProperties.scoringOption.answers =
        this.editData.scoringOption.answers;
      this.defaultItemProperties.scoringOption.caseSensitive =
        this.editData.scoringOption.caseSensitive;
      this.defaultItemProperties.scoringOption.minimumScoreIfAttempted =
        this.editData.scoringOption.minimumScoreIfAttempted;
      this.defaultItemProperties.scoringOption.score =
        this.editData.scoringOption.score;
      this.defaultItemProperties.scoringOption.penalty =
        this.editData.scoringOption.penalty;
      // this.defaultItemProperties.scoringOption.scoringType =
      //   this.editData.scoringOption.autoScore;
      this.defaultItemProperties.scoringOption.matchingRule =
        this.editData.scoringOption.matchingRule;
        
      this.defaultItemProperties.scoringOption.scoringType =
        this.editData.scoringOption.scoringType;
      this.defaultItemProperties.scoringOption.answers =
        this.editData.scoringOption.answers;
      this.defaultItemProperties.scoringOption.autoScore =
        this.editData.scoringOption.autoScore;

      this.image.url = this.editData.images[0].url;
      this.image.width = this.editData.images[0].width;
      this.image.height = this.editData.images[0].height;
      this.defaultItemProperties.images[0] = {
        height: this.editData.images[0].height,
        url: this.editData.images[0].url,
        width: this.editData.images[0].width,
        altText: "",
        hoverText: "",
        label: "",
      };

      // this.dropdownLabels = this.dropdownLabels.map((label, index) => ({
      //   ...label,
      //   x: this.editData.responsePositions[index]?.x || label.x,
      //   y: this.editData.responsePositions[index]?.y || label.y,
      //   inputValue: this.editData.options[index].label,
      //   id: index.toString(),
      // }));

      this.dropdownLabels = this.editData.responsePositions.map(
        (position, index) => ({
          x: position.x || 50, // Default to 50 if not provided
          y: position.y || 50, // Default to 50 if not provided

          inputValue: this.editData.options[index].label || "",
          id: index.toString(),
          item: this.editData.options[index].label || "",
          selectedOptionIndex: null,
        })
      );

      this.tags = this.editData.itemTagsDTOS;
      this.itemUtil.setSelectedTags(this.tags);

      this.editData.scoringOption.answers; //Setting the right answer
      /* this.options.forEach((option, index) => {
            if(this.editData.scoringOption.answers.includes(option.value)){
              this.selectedAnswers.add(index);
            }
          }); */
    }
    // this.createOption();
  }

  openFileExplorer() {
    (document.querySelector(".dz-text") as HTMLElement).click();
  }

  log() {
    console.log('unploading')
  }

  setup(editor: any) {
    let activeEquation: HTMLElement | null = null;

    const openDialog = (latex: string) => {
      editor.windowManager.open({
        title: "Edit Equation",
        size: "normal",
        body: {
          type: "panel",
          items: [
            {
              type: "htmlpanel",
              html: `<math-field id="mathfield" style="width: 100%; height: 200px; border: 1px solid grey">${latex}</math-field>`,
            },
          ],
        },
        buttons: [
          { type: "cancel", name: "cancel", text: "Cancel" },
          { type: "submit", name: "update", text: "Update", primary: true },
        ],
        onSubmit: (api) => {
          const mathField = document.getElementById("mathfield") as any;
          const updatedLatex = mathField.getValue();

          if (activeEquation) {
            // Update the selected equation
            activeEquation.setAttribute("data-latex", updatedLatex);
            activeEquation.innerHTML = `\\(${updatedLatex}\\)`;
            activeEquation.classList.add("math-expression");

            // Trigger MathJax to re-render
            MathJax.typesetPromise([editor.getBody()])
              .then(() => console.log("Math rendering updated"))
              .catch((err) => console.error("Math rendering failed:", err));
          }

          activeEquation = null;
          api.close();
        },
      });
    };

    editor.on("init", () => {
      const editorBody = editor.getBody();

      // Event  for equations
      editorBody.addEventListener("click", (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.closest(".math-expression")) {
          const equationElement = target.closest(
            ".math-expression"
          ) as HTMLElement;
          activeEquation = equationElement;

          const latex = equationElement.getAttribute("data-latex") || "";

          openDialog(latex);
        }
      });
    });

    editor.ui.registry.addButton("equation-editor", {
      text: "Insert Math",
      icon: "character-count",
      onAction: () => {
        editor.windowManager.open({
          title: "Insert Equation",
          size: "normal",
          body: {
            type: "panel",
            items: [
              {
                type: "htmlpanel",
                html: `<math-field id="mathfield" style="width: 100%; height: 200px; border: 1px solid grey"></math-field>`,
              },
            ],
          },
          buttons: [
            { type: "cancel", name: "cancel", text: "Cancel" },
            { type: "submit", name: "insert", text: "Insert", primary: true },
          ],
          onSubmit: (api) => {
            const mathField = document.getElementById("mathfield") as any;
            const latex = mathField.getValue();

            // Create span for the math equation
            const content = `<span class="math-expression" data-latex="${latex}">\\(${latex}\\)</span>`;
            editor.insertContent(content);
            editor.insertContent("&nbsp;");

            // Ensure cursor placement is outside the equation
            editor.selection.collapse(false);

            MathJax.typesetPromise([editor.getBody()])
              .then(() => console.log("Math rendering complete"))
              .catch((err) => console.error("Math rendering failed:", err));

            api.close();
          },
        });
      },
    });
  }

  createOption() {
    let option: Option = new Option();
    option.label = null; //`option ${this.options.length + 1}`;
    option.value = 0 + "";
    /* option.positionX = `${
      this.options.length === 0 ? 0 : this.countXAxis * 25
    }%`; */
    option.position.x = 10;
    option.position.y = 10;
    /* option.positionY = `${this.countAxis === 0 ? 3 : this.countAxis * 10}%`; */
    this.options.push(option);
  }

  createContainer() {
    let responseContainer: ResponseContainer = new ResponseContainer();

    responseContainer.position = { x: 100, y: 100 };
    this.responseContainers.push(responseContainer);
  }

  onChange() {}

  changePosition(e: any, option: Option) {
    /* console.log(e);*/
    // console.log(e.target);
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; //y position within the element.
    // console.log('current position', 'Left? : ' + x + ' ; Top? : ' + y + '.');
  }

  showPosition(index: number, event: CdkDragEnd, element: HTMLDivElement) {
    //console.log(event);
    //console.log(element);
    //console.log('position of element in parent container', element.getBoundingClientRect())
    //assets/images/Itembank/association.png
    /* let offsets = element.getBoundingClientRect();
    this.options[index].positionX = offsets.left;
    this.options[index].positionY = offsets.top;
    console.log(event.distance);
    console.log(event.dropPoint); */

    /* this.document.getElementById('image-container').onclick = function (e) {
      console.log(e);
      console.log(e.target.getBoundingClientRect());
      e = Mouse click event.
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left; //x position within the element.
      var y = e.clientY - rect.top; //y position within the element.
      console.log('Left? : ' + x + ' ; Top? : ' + y + '.');
    }; */
    const transform = element.style.transform;
    let regex =
      /translate3d\(\s?(?<x>[-]?\d*)px,\s?(?<y>[-]?\d*)px,\s?(?<z>[-]?\d*)px\)/;
    var values = regex.exec(transform);
    // console.log(transform);
    this.options[index].position.x = parseInt(values[1]);
    this.options[index].position.y = parseInt(values[2]);
  }

  openImageUploadModal(imageUploadModal: any) {
    this.modalService.open(imageUploadModal, { centered: true, size: "lg" });
  }

  addResponsePosition() {
    this.createOption();
  }

  addOption() {
    this.createOption();
  }

  removeResponsePosition(index: number) {
    this.options.splice(index, 1);
  }

  uploadImage() {
    /* if (this.file) {
      let reader = new FileReader();

      reader.onload = () => {
        this.labelImageText.image.url =
          'assets/images/Itembank/association.png';
      };

      reader.readAsDataURL(this.file);
      reader.onload = (e) => {
        var image = new Image();
        image.url = e.target.result;
      };
    } */
    // console.log(this.image);
  }

  // drop(event: any) {
  //   // console.log(event);
  //   moveItemInArray(
  //     event.container.data,
  //     event.previousIndex,
  //     event.currentIndex
  //   );
  // }

  deleteOption(index: number) {
    this.options.splice(index, 1);
  }

  onUploadError(event: any) {
    const [file, message] = event;

    if (file.size > 100 * 1024) {
      this.notifierService.notify('error', 'File size must not exceed 100KB')
    } else {
      this.notifierService.notify('error', 'An error occurred during file upload. Please try again.')
    }
  }

  onUploadSuccess(event: any) {
    console.log(event, "drag drop");
    this.image = new Images();
    this.image.width = event[0].width;
    this.image.height = event[0].height;
    this.image.url = event[0].dataURL;
    this.defaultItemProperties.images.push(this.image);
    console.log(this.defaultItemProperties.images[0]);

    this.cdRef.detectChanges();
    this.modalService.dismissAll();

    // this.initializeDraggable();
    setTimeout(() => {
      const element = document.getElementById("labels");
      element?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
      });
    }, 1000)
  }

  dragEnd(event: any) {
    // console.log(event);
  }

  handleImageUpload(event: any) {
    this.file = event.target.files[0];
    //console.log(event.target.files);
    // console.log(this.image);
  }

  recieveTags(tags: any) {
    this.tags = tags;
  }

  reset() {
    this.modalService.dismissAll();
    this.defaultItemProperties.images = [];
    this.image = new Images();
  }

  buildItem(itemForm?: any) {
    if (!this.imageElement) {
      this.notifierService.notify("error", "Please upload an image");
    }
    const imageRect = this.imageElement.nativeElement.getBoundingClientRect();
    let item: LabelImageDragDrop = new LabelImageDragDrop();
    item.options = [];
    item.responsePositions = [];
    item.scoringOption.answers = [];
    this.options = [];
    // item.scoringOption.answers = [];
    item.stimulus = this.defaultItemProperties.stimulus;
    item.difficultyLevel = this.defaultItemProperties.difficultyLevel;
    item.scoringOption = {
      ...this.defaultItemProperties.scoringOption,
      answers: [],
    };
    item.images = this.defaultItemProperties.images;
    item.itemType = ItemTypes.IMAGE_DRAG_AND_DROP;
    item.itemStatus = ItemStatusEnum.DRAFT;
    item.subjectId = this.itemUtil.currentItemTrail.subjectId;
    item.topicId = this.itemUtil.currentItemTrail.topicId;
    item.subtopicId = this.itemUtil.currentItemTrail.subtopicId;

    item.imageData = {
      altText: this.image.altText,
      dimension: "",
      height: imageRect.height,
      image: item.images[0].url,
      width: imageRect.width,
    };

    this.options.map((option, i) => {
      item.options.push(option);
    });
    // console.log(item.options);

    this.dropdownLabels.forEach((option) => {
      let reponsePosition: {
        x: number;
        y: number;
      } = {
        x: option.x,
        y: option.y,
      };

      item.responsePositions.push(reponsePosition);
    });

    this.options.forEach((option) => {
      item.scoringOption.answers.push(option.value);
    });

    this.dropdownLabels.forEach((label, index) => {
      if (label.item) {
        item.options.push({ label: label.item, value: index.toString() });
        item.distractors.push({ label: label.item, value: index.toString() });
        item.scoringOption.answers.push(index.toString());
      }
    });

    if (this.itemUtil.passageId) {
      item.passageId = this.itemUtil.passageId;
    }

    item.distractors = this.distractors.map((distractor, index) => {
      return {
        label: distractor.value,
        value: (
          item.distractors.length + parseInt(index.toString())
        ).toString(),
      };
    });

    item.itemTagsDTOS = this.tags
      ? this.tags.map((tag) => {
          return { tagId: tag.tagId };
        })
      : [];
    console.log(item);
    return item;
  }

  doPreview(itemForm?: any) {
    this.itemUtil.previewItem = true;
    this.previewData = this.buildItem();
    // console.log(this.previewData);
    this.preview = true;
  }

  closePreview(event: any) {
    this.preview = false;
  }

  saveItem(itemForm?: any) {
    let item = this.buildItem();
    let result = this.itemService.validateItem(item);

    // item.scoringOption.answers = item.options.map((option) => option.label);

    if (!result) {
      return;
    }

    this.publishingItem = true;

    if (
      this.currentUser.authorities.includes("AUTHOR") &&
      this.subjectModerationStatus
    ) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    }

    if (this.subjectModerationStatus) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }

    this.publishLoader();
    this.saveFunction(item, "save");
  }

  saveFunction(item: any, type?: string) {
    let msg: string;
    if (type == "save" || type === "save_and_new") {
      msg = `A new item has been created successfully`;
    } else if (type == "draft") {
      msg = `A new item has been saved to draft successfully`;
    } else if (type == "passage-item") {
      msg = `A new item has been added to the passage successfully`;
    }

    // if (
    //   this.currentUser.authorities.includes("AUTHOR") &&
    //   this.subjectModerationStatus
    // ) {
    //   msg = `item successfully sent for moderation`;
    // }
    this.itemService.createClozeDragDropImageItem(item).subscribe(
      (value) => {
        if (this.itemService.currentActivity) {
          item.itemId = value.id;
          this.savedItem.emit(item);
        }
        // console.log(value);
        Swal.fire({
          icon: "success",
          html: msg,
        });
        this.publishingItem = false;
        this.publishLoader();

        if (type === "save" || type === "draft") {
          this.back();
        }

        if (type == "save_and_new" || type !== "") {
          this.defaultItemProperties = new DefaultItemProperties();
          this.tags = [];
          this.defaultItemProperties.scoringOption.autoScore = true;
          this.defaultItemProperties.difficultyLevel = 1;
          this.defaultItemProperties.shuffleOptions = true;
          this.itemUtil.setSelectedTags([]);

          this.image = {
            height: null,
            url: "",
            width: null,
            altText: "",
            hoverText: "",
            label: "",
          };

          this.dropdownLabels = [
            {
              x: 0,
              y: 0,
              inputValue: "",
              selectedOptionIndex: null,
              id: "1",
              item: null,
            },
            {
              x: 0,
              y: 0,
              inputValue: "",
              selectedOptionIndex: null,
              id: "2",
              item: null,
            },
          ];

          this.options = [];
          this.tagRef.Tag = [];
          this.tagRef.ngOnInit();
          this.tagRef.sendTag([]);
          this.distractors = [{ value: "" }];
          this.ngOnInit();
        }
      },
      (error: HttpErrorResponse) => {
        this.publishingItem = false;
        this.publishLoader();
        Swal.close();
        Swal.fire({
          icon: "error",
          html: `${error.error.message}`,
        });
      }
    );
  }

  back() {
    this.location.back();
  }

  publishLoader() {
    if (!this.publishingItem) {
      return;
    } else {
      Swal.fire({
        title: "Saving your question, Please Wait...",
        allowEnterKey: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    }
  }

  saveAndNewItem(itemForm: any) {
    let item = this.buildItem(itemForm);
    let result = this.itemService.validateItem(item);
    //console.log(result);
    if (!result) {
      return;
    }

    this.publishingItem = true;

    if (this.subjectModerationStatus) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }
    this.publishLoader();
    this.saveFunction(item, "save_and_new");
  }

  saveToDraft(itemForm?: any) {
    let item = this.buildItem(itemForm);
    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    // item.scoringOption.answers = item.options.map((option) => option.label);
    this.image = new Images();

    this.publishingItem = true;
    this.publishLoader();

    item.itemStatus = ItemStatusEnum.DRAFT;

    this.saveFunction(item, "draft");
  }

  saveItemToPassage(itemForm?: any) {}

  updateItem(itemForm?: any, status?: string) {
    let item = this.buildItem(itemForm);
    item.itemId = this.editData.id;

    console.log(this.editData, "edit data");
    // let validated = this.itemService.validateItem(item);

    // if (!validated) {
    //   return;
    // }

    console.log("builtItem", item);
    this.publishingItem = true;
    this.publishLoader();

    switch (status) {
      case "save":
        if (
          this.subjectModerationStatus ||
          item.itemStatus === ItemStatusEnum.AWAITING_MODERATION
        ) {
          item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
        } else {
          item.itemStatus = ItemStatusEnum.PUBLISHED;
        }

        break;

      case "draft":
        item.itemStatus = ItemStatusEnum.DRAFT;
        break;

      case "approve":
        item.itemStatus = ItemStatusEnum.PUBLISHED;
        item.moderation_status = "accepted";

        break;

      default:
        break;
    }

    this.itemService.editClozeDragDropImageItem(item).subscribe(
      (value) => {
        if (value) {
          Swal.fire({
            title: "Congratulations!",
            text: "The question was successfully updated.",
            icon: "success",
          });
        }
        this.back();
      },
      (error: HttpErrorResponse) => {
        this.publishingItem = false;
        this.publishLoader();
        Swal.close();
        Swal.fire({
          icon: "error",
          html: `${error.error.message}`,
        });
      }
    );
  }

  approveQuestion(itemForm: any) {
    this.updateItem(itemForm, "approve");
  }

  openRejectionReasonModal(rejectionModal: any) {
    this.modalService.open(rejectionModal, { centered: true, size: "lg" });
  }

  submitRejection(questionRejectionForm: any) {
    this.processingRejection = true;
  }

  //new implementation
  onMouseDown(event: MouseEvent, index: number) {
    console.log("i am down");
    console.log(index);
    this.isDragging = true;
    this.currentLabelIndex = index;
    this.offsetX = event.clientX - this.imageElement.nativeElement.offsetLeft;
    this.offsetY = event.clientY - this.imageElement.nativeElement.offsetTop;
    document.addEventListener("mousemove", this.onMouseMove.bind(this));
    document.addEventListener("mouseup", this.onMouseUp.bind(this));
  }

  // While dragging
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      // const rect = this.imageElement.nativeElement.getBoundingClientRect();
      this.rect = this.imageElement.nativeElement.getBoundingClientRect();

      // console.log("Image Dimensions:", this.rect.width, this.rect.height);
      const xPercent =
        ((event.clientX - this.rect.left) / this.rect.width) * 100;
      const yPercent =
        ((event.clientY - this.rect.top) / this.rect.height) * 100;

      this.dropdownLabels[this.currentLabelIndex].x = Math.max(
        0,
        Math.min(100, xPercent)
      );
      this.dropdownLabels[this.currentLabelIndex].y = Math.max(
        0,
        Math.min(100, yPercent)
      );

      // console.log("Authoring Position:", this.dropdownLabels);
    }
  }

  // When mouse button is released
  onMouseUp() {
    // console.log("release");
    this.isDragging = false;
    document.removeEventListener("mousemove", this.onMouseMove.bind(this));
    document.removeEventListener("mouseup", this.onMouseUp.bind(this));
  }

  // Add a new label to the array at a fixed position
  // addLabel() {
  //   this.labels.push({
  //     text: `Label ${this.labels.length + 1}`,
  //     x: 10,
  //     y: 10, // Initial position (10% from top-left corner)
  //   });
  // }

  addDropdownLabel() {
    const newLabel = {
      id: `label${this.dropdownLabels.length + 1}`,
      // x: Math.random() * 80, // Random position within bounds
      // y: Math.random() * 80,
      x: 0,
      y: 0,
      item: null, // Initially no item is associated
      inputValue: "",
      selectedOptionIndex: 1,
    };


    this.dropdownLabels.push(newLabel);
    this.notifierService.notify("success", "Label Added");
  }

  // Update the image size on window resize
  onWindowResize() {
    if (this.imageElement) {
      const rect = this.imageElement.nativeElement.getBoundingClientRect();
      this.imageWidth = rect.width;
      this.imageHeight = rect.height;

      // Update the positions of the labels
      this.dropdownLabels = [...this.dropdownLabels];

      // console.log(this.dropdownLabels);
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.onWindowResize();
  }

  distractors = [
    { value: "Zero" },
    // { value: "One" }
  ];

  get labelDropListIds(): string[] {
    return this.dropdownLabels.map((_, i) => `label-${i}`);
  }

  allowDrop(event: DragEvent) {
    event.preventDefault(); // Necessary to allow dropping
  }

  onDragStart(event: DragEvent, item: string) {
    this.draggedItem = item;
    event.dataTransfer?.setData("text", item);
  }

  onDrop(event: DragEvent, labelIndex: number) {
    event.preventDefault();
    const targetLabel = this.dropdownLabels[labelIndex];

    // Check if the label is already occupied
    if (this.draggedItem && !targetLabel.item) {
      targetLabel.item = this.draggedItem; // Assign item to label
      this.distractors = this.distractors.filter(
        (item) => item !== this.draggedItem
      ); // Remove from list
      console.log(
        `Item "${this.draggedItem}" dropped on label ${targetLabel.id}`
      );
      this.notifierService.notify(
        "success",
        `Item "${this.draggedItem}" dropped on label ${targetLabel.id}`
      );
      this.draggedItem = null; // Reset dragged item
    } else if (targetLabel.item) {
      this.notifierService.notify("warning", "Label is already occupied.");
      console.error("Label is already occupied.");
    } else {
      console.error("Invalid drop target.");
    }

    // console.log(this.dropdownLabels);
  }

  onDragEnd() {
    this.draggedItem = null; // Reset dragged item
  }

  isDropValid(targetId: string): boolean {
    return this.dropdownLabels.some((label) => label.id === targetId);
  }

  addDistractor() {
    this.distractors.push({ value: this.distractor });
    this.distractor = "";
  }

  deleteDistractor(index: number) {
    this.distractors.splice(index, 1);
  }

  deleteLabel(index: number) {
    this.dropdownLabels.splice(index, 1);
    this.notifierService.notify(
      "success",
      `Label ${index} deleted successfully`
    );
  }

  updateDistractor(index: number, value: string) {
    this.distractors[index].value = value;
  }

  preProcess(pl, o) {
    // console.log(pl);
    let content = o.content;
  }

  openConfirmationModal(content: any){
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      windowClass: 'modal-holder'
    });

  }

  ngOnDestroy(): void {
    this.itemUtil.previewItem = false
     
   }
}
