import { CdkDragEnd } from "@angular/cdk/drag-drop";
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  HostListener,
  AfterViewInit,
  OnDestroy,
} from "@angular/core";
import { LabelImageText } from "../label-image-text/label-image-text.component";
import { MatchingRuleEnums } from "../models/matching-rule-enums";
import { ScoringTypeEnum } from "../models/scoring-type-enum";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ItemUtilitiesService } from "../item-utilities.service";
import { UserService } from "src/app/shared/user.service";
import { RejectionReason } from "../models/rejection-reason";
import { DefaultItemProperties } from "../models/default-item-properties";
import { Account } from "src/app/authentication/model/account.model";
import { Option } from "../models/option";
import { ClozeDropdown } from "../cloze-dropdown/cloze-dropdown.model";
import { Images } from "../models/images";
import { NewLabelImageText } from "../label-image-text/models/label-image-text-model";
import { ItemStatusEnum } from "../models/item-status-enum";
import { LabelImageDropdown } from "./models/label-image-dropdown";
import { HttpErrorResponse } from "@angular/common/http";
import { ItemHttpService } from "../item-http.service";
import { Location } from "@angular/common";
import Swal from "sweetalert2";
import { ItemTypes } from "../models/item-types";
import { NotifierService } from "angular-notifier";
import { DropzoneConfigInterface } from "ngx-dropzone-wrapper";
import { ItemTagComponent } from "../item-tag/item-tag.component";

declare var tinymce: any;
declare const MathJax: any;
export class Responses {
  responses: string[] = [];
}

@Component({
  selector: "app-label-image-dropdown",
  templateUrl: "./label-image-dropdown.component.html",
  styleUrls: ["./label-image-dropdown.component.scss"],
})
export class LabelImageDropdownComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() selectedItemType!: string;
  @Input() formType!: string;
  @Input() editData!: any;
  @Output() savedItem = new EventEmitter();
  @ViewChild("imgUpload") imgUpload: ElementRef;

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
  currentLabelIndex: number;

  private offsetX: number;
  private offsetY: number;

  // labels: Array<{ text: string; x: number; y: number }> = [
  //   { text: "Label 1", x: 50, y: 50 },
  //   { text: "Label 2", x: 80, y: 80 },
  // ];

  dropdownLabels: Array<{
    options: Array<string>;
    x: number;
    y: number;
    inputValue: string;
    selectedOptionIndex: number | null;
    correctAnswerIndex: number | null;
  }> = [
    {
      options: [],
      x: 50,
      y: 50,
      inputValue: "",
      selectedOptionIndex: null,
      correctAnswerIndex: null,
    },
    {
      options: [],
      x: 80,
      y: 80,
      inputValue: "",
      selectedOptionIndex: null,
      correctAnswerIndex: null,
    },
  ];

  private imageWidth: number;
  private imageHeight: number;
  isDragging = false;
  // @ViewChild("imgUpload") imgUpload: ElementRef;

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

  @ViewChild("container", { static: false }) containerRef!: ElementRef;
  @ViewChild("card", { static: false }) cardRef!: ElementRef;

  @ViewChild("imageRef") imageElement: ElementRef;
  @ViewChild("tagRef") tagRef: ItemTagComponent;

  currentUser: Account;
  previewData: LabelImageDropdown = new LabelImageDropdown();
  image: Images = new Images();
  preview: boolean = false;
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
  responses: string[] = [];
  possibleResponses: Responses[] = [];
  j: number;
  tags: { tagId: string }[];
  publishingItem: boolean = false;

  inputValue: string = ""; // Stores the input value
  selectedOptionIndex: number | null = null; //
  base64Image: string;
  subjectModerationStatus: boolean = false;
  processingRejection: boolean = false;

  constructor(
    private itemUtil: ItemUtilitiesService,
    private authService: UserService,
    private modalService: NgbModal,
    private itemService: ItemHttpService,
    private location: Location,
    private notifierService: NotifierService
  ) {}

  onSelect(event: any): void {
    console.log(event);
    const file: File = event.addedFiles[0];

    // Check file size (already restricted in Dropzone, but double-checking)
    const maxSizeInBytes = 5242880; // 5 MB
    if (file.size > maxSizeInBytes) {
      alert("File size exceeds the 5 MB limit.");
      return;
    }

    // Convert to Base64
    const reader = new FileReader();
    reader.onload = () => {
      this.base64Image = reader.result as string;
      console.log(this.base64Image);
    };
    reader.onerror = () => {
      alert("Failed to convert the file.");
    };
    reader.readAsDataURL(file);
  }

  ngAfterViewInit() {
    // Capture the initial size of the image after the view is initialized
    this.imageWidth = this.imageElement.nativeElement.offsetWidth;
    this.imageHeight = this.imageElement.nativeElement.offsetHeight;
    const rect = this.imageElement.nativeElement.getBoundingClientRect();
    console.log("Image Dimensions:", rect.width, rect.height);
  }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.scoringType = Object.values(ScoringTypeEnum);
    this.matchingRules = Object.values(MatchingRuleEnums);
    this.defaultItemProperties.difficultyLevel = 1;
    this.defaultItemProperties.scoringOption.matchingRule =
      MatchingRuleEnums.EXACT_MATCH;

    this.defaultItemProperties.scoringOption.autoScore = true;
    this.defaultItemProperties.scoringOption.ignoreLeadingAndTrailingSpaces =
      true;
    this.subjectModerationStatus =
      this.itemService.currentSubjectModerationEnabled;
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
      //   // inputValue: this.editData.options[index].label,
      //   id: index.toString(),
      //   options: this.editData.possibleResponses[index].responses,
      //   correctAnswerIndex: this.editData.scoringOption.answers[index],
      //   // correctAnswerIndex : this.editData.answe
      // }));

      // to fill inputValue with coreect answer
      // this.editData.possibleResponses[index].responses[parseInt(this.editData.scoringOption.answers[index])],

      // this.editData.possibleResponses[index].responses[0]
      this.dropdownLabels = this.editData.responsePositions.map(
        (position, index) => ({
          options: this.editData.possibleResponses[index]?.responses || [],
          x: position.x || 50, // Default to 50 if not provided
          y: position.y || 50, // Default to 50 if not provided
          inputValue: "",
          selectedOptionIndex: 0, // Or a default value
          correctAnswerIndex:
            this.editData.scoringOption.answers[index] || null,
          id: index.toString(),
        })
      );
      console.log();
      this.defaultItemProperties.possibleResponses =
        this.editData.possibleResponses;

      this.tags = this.editData.itemTagDTOs;
      this.itemUtil.setSelectedTags(this.tags);

      this.editData.scoringOption.answers; //Setting the right answer
      /* this.options.forEach((option, index) => {
            if(this.editData.scoringOption.answers.includes(option.value)){
              this.selectedAnswers.add(index);
            }
          }); */
    }

    console.log(this.dropdownLabels);
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
  preProcess(pl, o) {
    // console.log(pl);
    let content = o.content;
  }

  createOption() {
    let option: Option = new Option();
    let options = ["A", "B", "C", "D"];
    let responses = [];
    let possibleResponse = new Responses();

    // console.log('new option created:');
    option.label = `option ${this.options.length + 1}`;
    /* option.positionX = `${
      this.options.length === 0 ? 0 : this.countXAxis * 25
    }%`; */
    option.position = { x: 100, y: 100 };
    //option.positionX = 10;
    //option.positionY = 10;
    /* option.positionY = `${this.countAxis === 0 ? 3 : this.countAxis * 10}%`; */
    this.options.push(option);

    for (let i = 0; i < options.length; i++) {
      responses.push("option" + options[i]);
    }
    possibleResponse.responses = responses;
    this.possibleResponses.push(possibleResponse);
  }

  onChange() {}

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
    // console.log((this.options[index].positionX = parseInt(values[1])));
    // console.log((this.options[index].positionY = parseInt(values[2])));
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

  onUploadSuccess(event: any) {
    // console.log(event);
    this.image.width = event[0].width;
    this.image.height = event[0].height;
    this.image.url = event[0].dataURL;
    this.defaultItemProperties.images.push(this.image);
    // console.log(this.defaultItemProperties.images[0]);
    // this.cdRef.detectChanges();
    this.createOption();
    this.modalService.dismissAll();
  }

  editPassage() {}

  doPreview(itemForm: any) {
    this.itemUtil.previewItem = true;
    let item = this.buildItem(itemForm);
    this.previewData = item;
    this.preview = true;
  }

  onUploadError(event: any) {
    // console.log(event);
  }

  uploadImage() {
    if (this.file) {
      let reader = new FileReader();

      reader.onload = () => {
        this.image.url = "assets/images/Itembank/association.png";
      };

      reader.readAsDataURL(this.file);
    }
  }

  handleImageUpload(event: any) {
    this.file = event.target.files[0];
    //console.log(event.target.files);
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
    const item: LabelImageDropdown = new LabelImageDropdown();

    item.images = [...this.defaultItemProperties.images];
    item.responsePositions = [];
    item.possibleResponses = [];
    item.itemStatus = ItemStatusEnum.DRAFT;

    // Copying default properties
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
    item.subtopicId = this.itemUtil.currentItemTrail.subtopicId;

    item.itemType = ItemTypes.CLOZE_DROPDOWN_IMAGE;

    item.imageData = {
      altText: this.image.altText,
      dimension: "",
      height: imageRect.height,
      image: item.images[0]?.url || "",
      width: imageRect.width,
    };

    if (this.itemUtil.passageId) {
      item.passageId = this.itemUtil.passageId;
    }

    this.dropdownLabels.forEach((label, index) => {
      const responsePosition = { x: label.x, y: label.y };
      const correctAnswerIndex =
        label.correctAnswerIndex !== null &&
        label.correctAnswerIndex !== undefined
          ? label.correctAnswerIndex.toString()
          : "";

      label.options = label.options.map((option) => option.trim());
      item.possibleResponses[index] = { responses: label.options };
      item.responsePositions.push(responsePosition);

      if (correctAnswerIndex) {
        item.scoringOption.answers[index] = correctAnswerIndex;
      }
    });

    item.itemTagsDTOS = this.tags?.map((tag) => ({ tagId: tag.tagId })) || [];
    console.log(item);
    return item;
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
    this.itemService.createClozeDropdownImageItem(item).subscribe(
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

              correctAnswerIndex: null,
              options: null,
            },
            {
              x: 80,
              y: 80,
              inputValue: "",
              selectedOptionIndex: null,

              correctAnswerIndex: null,
              options: null,
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

  saveAndNew(itemForm?: any) {}

  saveToDraft(itemForm?: any) {
    let item = this.buildItem(itemForm);
    let validated = this.itemService.validateItem(item);

    // item.scoringOption.answers = item.options.map((option) => option.label);
    this.image = new Images();

    if (!validated) {
      return;
    }

    this.publishingItem = true;
    this.publishLoader();

    item.itemStatus = ItemStatusEnum.DRAFT;

    this.saveFunction(item, "draft");
  }

  saveItemToPassage(itemForm?: any) {}

  recieveTag(event: any) {
    this.tags = event;
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

  approveQuestion(itemForm: any) {
    this.updateItem(itemForm, "approve");
  }

  updateItem(itemForm?: any, status?: string) {
    let item = this.buildItem(itemForm);
    item.itemId = this.editData.id;

    console.log(this.editData, "edit data");
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

    this.itemService.editClozeDropdownImageItem(item).subscribe(
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

  openRejectionReasonModal(rejectionModal: any) {
    this.modalService.open(rejectionModal, { centered: true, size: "lg" });
  }

  submitRejection(questionRejectionForm: any) {
    this.processingRejection = true;
  }

  //new implementation
  onMouseDown(event: MouseEvent, index: number) {
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
      // const left = event.clientX - imageRect.left;
      // const top = event.clientY - imageRect.top;

      // Calculate the position as a percentage relative to the image size
      const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
      const yPercent = ((event.clientY - rect.top) / rect.height) * 100;

      // Constrain within image bounds (0-100%)
      this.dropdownLabels[this.currentLabelIndex].x = Math.max(
        0,
        Math.min(100, xPercent)
      );
      this.dropdownLabels[this.currentLabelIndex].y = Math.max(
        0,
        Math.min(100, yPercent)
      );

      console.log(this.dropdownLabels);
    }
  }

  // When mouse button is released
  onMouseUp() {
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
    this.dropdownLabels.push({
      options: [],
      x: 50,
      y: 50,
      inputValue: "",
      selectedOptionIndex: null,
      correctAnswerIndex: null,
    });
  }

  // Update the image size on window resize
  onWindowResize() {
    if (this.imageElement) {
      const rect = this.imageElement.nativeElement.getBoundingClientRect();
      this.imageWidth = rect.width;
      this.imageHeight = rect.height;

      this.dropdownLabels = [...this.dropdownLabels]; // Trigger change detection
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.onWindowResize();
  }
  addDropOption(index: number, value: string) {
    if (value.trim()) {
      this.dropdownLabels[index].options.push(value);
      this.dropdownLabels[index].inputValue = ""; // Clear the input box for this label
      this.notifierService.notify(
        "success",
        `Drop option ${value} added to label ${index + 1}`
      );
    }
  }

  editDropOption(labelIndex: number, optionIndex: number, newValue: string) {
    if (optionIndex !== null && newValue.trim()) {
      this.dropdownLabels[labelIndex].options[optionIndex] = newValue;
      this.dropdownLabels[labelIndex].inputValue = ""; // Clear input box after editing
      this.selectedOptionIndex = null; // Reset selected option index
      this.notifierService.notify(
        "success",
        `Drop option edited to ${newValue} for label ${labelIndex + 1}`
      );
    }
  }

  onSelectOption(labelIndex: number, event: Event) {
    const selectedOptionIndex = (event.target as HTMLSelectElement).value;
    this.dropdownLabels[labelIndex].selectedOptionIndex = +selectedOptionIndex;
    this.dropdownLabels[labelIndex].inputValue =
      this.dropdownLabels[labelIndex].options[selectedOptionIndex];
  }

  setCorrectAnswer(labelIndex: number) {
    const selectedOptionIndex =
      this.dropdownLabels[labelIndex].selectedOptionIndex;
    // if (selectedOptionIndex !== null) {
    this.dropdownLabels[labelIndex].correctAnswerIndex = selectedOptionIndex;
    this.notifierService.notify(
      "success",
      `Correct answer set to "${
        this.dropdownLabels[labelIndex].options[selectedOptionIndex]
      }" for label ${labelIndex + 1}`
    );
    // }
  }

  deleteDropOption(labelIndex: number) {
    const selectedOptionIndex =
      this.dropdownLabels[labelIndex].selectedOptionIndex;
    if (selectedOptionIndex !== null) {
      this.dropdownLabels[labelIndex].options.splice(selectedOptionIndex, 1);
      this.dropdownLabels[labelIndex].inputValue = ""; // Clear input box after deletion
      this.dropdownLabels[labelIndex].selectedOptionIndex = null; // Clear selected index
      this.dropdownLabels[labelIndex].correctAnswerIndex = null; // Clear selected index
      this.notifierService.notify(
        "success",
        `Drop option deleted from label ${labelIndex + 1}`
      );
    }
  }

  deleteLabel(index: number) {
    this.dropdownLabels.splice(index, 1);
    this.notifierService.notify("success", `Label deleted`);

    console.log(this.dropdownLabels);
  }

  openConfirmationModal(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      centered: true,
      windowClass: "modal-holder",
    });
  }

  ngOnDestroy(): void {
    this.itemUtil.previewItem = false;
  }
}
