import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  OnDestroy,
} from "@angular/core";
import { DefaultItemProperties } from "../models/default-item-properties";
import { ScoringTypeEnum } from "../models/scoring-type-enum";
import { MatchingRuleEnums } from "../models/matching-rule-enums";
import { ItemUtilitiesService } from "../item-utilities.service";
import { Account } from "src/app/authentication/model/account.model";
import { UserService } from "src/app/shared/user.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  CdkDragDrop,
  CdkDragEnd,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { RejectionReason } from "../models/rejection-reason";
import { NewClozeItem } from "../cloze/model/new-cloze-item.model";
import { Images } from "../models/images";
import { ItemStatusEnum } from "../models/item-status-enum";
import { ItemTagsDtos } from "../models/item-tags-dtos";
import { Option } from "../models/option";
import Swal from "sweetalert2";
import { ItemHttpService } from "../item-http.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Location } from "@angular/common";
import { ItemTypes } from "../models/item-types";
import { NewLabelImageText } from "./models/label-image-text-model";
import { NotifierService } from "angular-notifier";
import { ItemTagComponent } from "../item-tag/item-tag.component";

declare var tinymce: any;
declare const MathJax: any;
export class Image {
  url: string | ArrayBuffer;
  width: number | string;
  height: number | string;
  hoverText: string;
  altText: string;
  label: string;
}

export class LabelImageText {
  stimulus: string;
  image: Image = new Image();
  options: Option[] = [];
}

/* export class Option {
  label: string;
  positionX: string | number;
  positionY: string | number;
} */

@Component({
  selector: "app-label-image-text",
  templateUrl: "./label-image-text.component.html",
  styleUrls: ["./label-image-text.component.scss"],
})
export class LabelImageTextComponent implements OnInit, OnDestroy {
  @Input() selectedItemType!: string;
  @Input() formType!: string;
  @Input() editData!: NewLabelImageText;
  @Output() savedItem = new EventEmitter();

  @ViewChild("imgUpload") imgUpload: ElementRef;
  @ViewChild("imageRef") imageElement: ElementRef;
  @ViewChild("tagRef") tagRef: ItemTagComponent;

  previewData: NewLabelImageText = new NewLabelImageText();
  currentUser: Account;
  preview: boolean = false;
  image: Images = new Images();
  tags: ItemTagsDtos[] = [];
  labelImageText: LabelImageText = new LabelImageText();
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
  publishingItem: boolean = false;
  subjectModerationStatus: boolean = false;
  isDragging: boolean = false;
  currentLabelIndex: number;
  offsetX: number;
  offsetY: number;
  private imageWidth: number;
  private imageHeight: number;
  processingRejection: boolean = false;

  dropdownLabels: Array<{
    x: number;
    y: number;
    inputValue: string;
    selectedOptionIndex: number | null;

    id: string;
    item: null;
  }> = [
    {
      x: 50,
      y: 50,
      inputValue: "",
      selectedOptionIndex: null,

      id: "1",
      item: null,
    },
    {
      x: 80,
      y: 80,
      inputValue: "",
      selectedOptionIndex: null,

      id: "2",
      item: null,
    },
  ];

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
  constructor(
    public itemUtil: ItemUtilitiesService,
    private authService: UserService,
    private modalService: NgbModal,
    private itemService: ItemHttpService,
    private location: Location,
    private notifierService: NotifierService
  ) {}

  // ngAfterViewInit() {
  //   // console.log();
  //   // Capture the initial size of the image after the view is initialized
  //   this.imageWidth = this.imageElement.nativeElement.offsetWidth;
  //   this.imageHeight = this.imageElement.nativeElement.offsetHeight;
  //   const rect = this.imageElement.nativeElement.getBoundingClientRect();
  //   console.log("Image Dimensions:", rect.width, rect.height);
  // }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.scoringType = Object.values(ScoringTypeEnum);
    this.matchingRules = Object.values(MatchingRuleEnums);
    this.defaultItemProperties.scoringOption.autoScore = true;
    this.defaultItemProperties.difficultyLevel = 1;
    this.subjectModerationStatus =
      this.itemService.currentSubjectModerationEnabled;

    this.defaultItemProperties.scoringOption.ignoreLeadingAndTrailingSpaces =
      true;

    this.itemUtil.setSelectedTags(this.tags);

    if (this.editData) {
      console.log("edit data");
      console.log(this.editData);
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
          item: null,
          selectedOptionIndex: null,
        })
      );

      this.tags = this.editData.itemTagDTOs;
      this.itemUtil.setSelectedTags(this.tags);

      console.log(this.tags);

      //Setting the right answer
      /* this.options.forEach((option, index) => {
            if(this.editData.scoringOption.answers.includes(option.value)){
              this.selectedAnswers.add(index);
            }
          }); */
    }
    //this.createOption();
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
    // console.log('new option created:');
    let option: Option = new Option();
    option.label = `option ${this.options.length + 1}`;
    /* option.positionX = `${
      this.options.length === 0 ? 0 : this.countXAxis * 25
    }%`; */
    option.position = { x: 100, y: 100 };
    //option.positionX = 10;
    //option.positionY = 10;
    /* option.positionY = `${this.countAxis === 0 ? 3 : this.countAxis * 10}%`; */
    this.options.push(option);
    this.countAxis++;
    this.countXAxis++;
    if (this.countAxis < 3 && this.countXAxis < 3) {
      this.countAxis = 0;
      this.countXAxis = 0;
    }
  }

  onChange() {}

  onUploadError(event: any) {
    // console.log(event);
  }

  onUploadSuccess(event: any) {
    console.log(event);
    this.image.width = event[0].width;
    this.image.height = event[0].height;
    this.image.url = event[0].dataURL;
    this.defaultItemProperties.images.push(this.image);
    // console.log(this.defaultItemProperties.images[0]);
    this.createOption();
    this.modalService.dismissAll();
  }

  showPosition(index: number, event: CdkDragEnd, element: any) {
    // console.log('drag-ended');
    //console.log(event);
    //console.log(element);
    //console.log('position of element in parent container', element.getBoundingClientRect())
    //assets/images/Itembank/association.png
    /* let offsets = element.getBoundingClientRect();
    this.options[index].positionX = offsets.left;
    this.options[index].positionY = offsets.top;
    console.log(event.distance);
    console.log(event.dropPoint); */
    const transform = element.style.transform;
    let regex =
      /translate3d\(\s?(?<x>[-]?\d*)px,\s?(?<y>[-]?\d*)px,\s?(?<z>[-]?\d*)px\)/;
    var values = regex.exec(transform);
    // console.log(transform);
    //console.log('position:', element.position());
    //console.log(event.distance.x / 100 + '%')
    this.options[index].position.x = parseInt(values[1]);
    this.options[index].position.y = parseInt(values[2]);
    // console.log(this.options[index].positionX = parseInt(values[1]));
    // console.log(this.options[index].positionY = parseInt(values[2]));
  }

  openImageUploadModal(imageUploadModal: any) {
    this.modalService.open(imageUploadModal, { centered: true, size: "lg" });
  }

  addResponsePosition() {
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
    if (!this.imageElement.nativeElement) {
      this.notifierService.notify("error", "Please upload an image");
    }
    const imageRect = this.imageElement.nativeElement.getBoundingClientRect();
    let item: NewLabelImageText = new NewLabelImageText();
    // item.images = [];
    item.options = [];
    item.responsePositions = [];
    item.scoringOption.answers = [];

    //item.images.push(this.image);
    item.itemStatus = ItemStatusEnum.DRAFT;

    item.reference = this.defaultItemProperties.reference;
    item.stimulus = this.defaultItemProperties.stimulus;
    item.scoringOption = {
      ...this.defaultItemProperties.scoringOption,
      answers: [],
    };
    item.difficultyLevel = this.defaultItemProperties.difficultyLevel;
    item.shuffleOptions = this.defaultItemProperties.shuffleOptions;
    item.subjectId = this.itemUtil.currentItemTrail.subjectId;
    item.topicId = this.itemUtil.currentItemTrail.topicId;
    item.subtopicId = this.itemUtil.currentItemTrail.subtopicId
      ? this.itemUtil.currentItemTrail.subtopicId
      : "";

    item.images = this.defaultItemProperties.images;

    item.imageData = {
      altText: this.image.altText,
      dimension: "",
      height: imageRect.height,
      image: item.images[0].url,
      width: imageRect.width,
    };

    if (this.itemUtil.passageId) {
      item.passageId = this.itemUtil.passageId;
    }

    console.log(item.imageData);

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

    this.dropdownLabels.forEach((label, index) => {
      item.scoringOption.answers[index] = label.inputValue;
    });

    console.log(item);
    // this.options[0].positionX;
    // this.options[0].positionY;

    item.itemType = ItemTypes.CLOZE_TEXT_IMAGE;

    this.dropdownLabels.map((option, i) => {
      item.options.push({
        label: option.inputValue,
        value: i.toString(),
      });
    });
    // this.tags =

    // item.itemTagDTOs = this.tags
    //   ? this.tags.map((tag) => {
    //       return { tagId: tag.tagId };
    //     })
    //   : [];

    item.itemTagsDTOS = this.tags
      ? this.tags.map((tag) => {
          return { tagId: tag.tagId };
        })
      : [];

    return item;
  }

  doPreview(itemForm?: any) {
    this.itemUtil.previewItem = true;
    this.previewData = this.buildItem();
    console.log(this.previewData);
    this.preview = true;
  }

  closePreview(event: any) {
    this.preview = false;
  }

  save(form: any) {
    let item = this.buildItem(form);
    let result = this.itemService.validateItem(item);

    item.scoringOption.answers = item.options.map((option) => option.label);

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

  recieveTag(tag: any) {
    this.tags = tag;
  }

  saveToDraft(itemForm: any) {
    let item = this.buildItem(itemForm);
    let validated = this.itemService.validateItem(item);

    item.scoringOption.answers = item.options.map((option) => option.label);
    this.image = new Images();

    if (!validated) {
      return;
    }

    this.publishingItem = true;
    this.publishLoader();

    item.itemStatus = ItemStatusEnum.DRAFT;

    this.saveFunction(item, "draft");
  }

  saveItemToPassage(itemForm: any) {
    let item = this.buildItem(itemForm);
    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    this.publishingItem = true;
    this.publishLoader();

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

    item.topicId = this.itemUtil.currentItemTrail.topicId;

    this.saveFunction(item, "passage-item");
  }

  saveAndNew(itemForm: any) {
    let item = this.buildItem(itemForm);
    let result = this.itemService.validateItem(item);

    item.scoringOption.answers = item.options.map((option) => option.label);
    this.image = new Images();

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

  saveFunction(item: any, type?: string) {
    let msg: string;
    if (type == "save" || type === "save_and_new") {
      msg = `A new item has been created successfully`;
    } else if (type == "draft") {
      msg = `A new item has been saved to draft successfully`;
    } else if (type == "passage-item") {
      msg = `A new item has been added to the passage successfully`;
    }

    if (
      this.currentUser.authorities.includes("AUTHOR") &&
      this.subjectModerationStatus
    ) {
      msg = `item successfully sent for moderation`;
    }
    this.itemService.createClozeTextImageItem(item).subscribe(
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
              x: 50,
              y: 50,
              inputValue: "",
              selectedOptionIndex: null,

              id: "1",
              item: null,
            },
            {
              x: 80,
              y: 80,
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

          this.ngOnInit();
          this.options = [];
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

  updateItem(itemForm?: any, status?: string) {
    let item = this.buildItem(itemForm);
    item.itemId = this.editData.id;

    console.log(this.editData, "edit data");
    console.log(item, "built item");
    // let validated = this.itemService.validateItem(item);

    // if (!validated) {
    //   return;
    // }
    this.publishingItem = true;
    this.publishLoader();

    console.log("builtItem", item);

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

    this.itemService.editClozeTextImageItem(item).subscribe(
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
      const rect = this.imageElement.nativeElement.getBoundingClientRect();

      // console.log("Image Dimensions:", rect.width, rect.height);
      const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
      const yPercent = ((event.clientY - rect.top) / rect.height) * 100;

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
    console.log("release");
    this.isDragging = false;
    document.removeEventListener("mousemove", this.onMouseMove.bind(this));
    document.removeEventListener("mouseup", this.onMouseUp.bind(this));
  }

  onWindowResize() {
    if (this.imageElement) {
      const rect = this.imageElement.nativeElement.getBoundingClientRect();
      this.imageWidth = rect.width;
      this.imageHeight = rect.height;

      // No need to recalculate label.x and label.y since they're percentages
      this.dropdownLabels = [...this.dropdownLabels]; // Trigger change detection
    }
  }

  addDropdownLabel() {
    const newLabel = {
      id: `label${this.dropdownLabels.length + 1}`,
      x: Math.random() * 80, // Random position within bounds
      y: Math.random() * 80,
      item: null, // Initially no item is associated
      inputValue: "",
      selectedOptionIndex: 1,
    };
    this.dropdownLabels.push(newLabel);
  }

  deleteLabel(index: number) {
    this.dropdownLabels.splice(index, 1);
    this.notifierService.notify("success", "Label Deleted");
  }



  openConfirmationModal(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      centered: true,
      windowClass: "modal-holder",
    });
  }
  preProcess(pl, o) {
    // console.log(pl);
    let content = o.content;
  }

  ngOnDestroy(): void {
    this.itemUtil.previewItem = false
     
   }
}
