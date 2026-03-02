import { NotifierService } from "angular-notifier";
import { HttpErrorResponse } from "@angular/common/http";
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnDestroy,
} from "@angular/core";
import { MultipleResponseModel } from "./model/multiple-response-model.model";
import { Option } from "../models/option";
import { ScoringTypeEnum } from "../models/scoring-type-enum";
import { MatchingRuleEnums } from "../models/matching-rule-enums";

//Enums
import { ItemStatusEnum } from "../models/item-status-enum";
import { ItemTypes } from "../models/item-types";
import { ItemHttpService } from "../item-http.service";
import Swal from "sweetalert2";
import { ItemTagsDtos } from "../models/item-tags-dtos";
import { DefaultItemProperties } from "../models/default-item-properties";
import { ItemUtilitiesService } from "../item-utilities.service";
import { Account } from "src/app/authentication/model/account.model";
import { UserService } from "src/app/shared/user.service";
import { Location } from "@angular/common";
import { RejectionReason } from "../models/rejection-reason";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SinglePassageModel } from "../passage-item/model/single-passage-model.model";
import { AllPassagesService } from "../../passages/list-passages/all-passages.service";
import { ActivatedRoute } from "@angular/router";
import { ItemTagComponent } from "../item-tag/item-tag.component";

declare var tinymce: any;
declare const MathJax: any;
@Component({
  selector: "app-multiple-response",
  templateUrl: "./multiple-response.component.html",
  styleUrls: ["./multiple-response.component.scss"],
})
export class MultipleResponseComponent implements OnInit, OnDestroy {
  //@Input() formType = '';
  @Input() formType!: string;
  @Input() hidePreview: boolean = true;
  @Input() selectedItemType!: string;
  @Input() editData: any;
  @Output() savedItem = new EventEmitter();
  @ViewChild("tagRef") tagRef: ItemTagComponent;

  breadCrumbItems!: Array<{}>;

  displayTagModal = false;

  preview: boolean = false;

  previewData: MultipleResponseModel;

  passageWorkFlow: boolean = this.itemUtil.passageItemWorkflow;

  defaultItemProperties: DefaultItemProperties = new DefaultItemProperties();

  selectedAnswers: Set<number> = new Set();

  tags: ItemTagsDtos[] = [];

  multipleResponses: boolean = true;

  options: Option[] = [];

  scoringType: string[];

  matchingRules: string[];

  difficultyLevel: number[] = [1, 2, 3, 4, 5];

  subjectModerationStatus: boolean = false;

  publishingItem: boolean = false;

  currentUser!: Account;

  newRejectionReason: RejectionReason = new RejectionReason();

  itemPassage: SinglePassageModel;
  showPassage: boolean = false;
  passageId: string = "";
  passageForPreview: SinglePassageModel;
  processingRejection: boolean = false;

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
    private itemService: ItemHttpService,
    public itemUtil: ItemUtilitiesService,
    private notifier: NotifierService,
    private userService: UserService,
    private location: Location,
    private modalService: NgbModal,
    private passageService: AllPassagesService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!this.selectedItemType) {
      this.selectedItemType = "Multiple Choice";
    }
    this.passageId = this.ar.snapshot.params["passageId"];
    console.log(this.passageId);
    if (this.passageId) {
      this.passageService.fetchSinglePassage(this.passageId).subscribe({
        next: (value) => {
          this.passageForPreview = value;

          console.log(this.passageForPreview);
        },
      });
    }

    this.currentUser = this.userService.getCurrentUser();
    this.scoringType = Object.values(ScoringTypeEnum);
    this.matchingRules = Object.values(MatchingRuleEnums);
    this.subjectModerationStatus =
      this.itemService.currentSubjectModerationEnabled;
    this.defaultItemProperties.scoringOption.matchingRule =
      MatchingRuleEnums.EXACT_MATCH;

      this.defaultItemProperties.scoringOption.scoringType =
      ScoringTypeEnum.EXACT_MATCH;


    this.itemUtil.setSelectedTags(this.tags);

    //console.log(this.formType);
    if (this.editData) {
      this.defaultItemProperties.reference = this.editData.reference;
      this.defaultItemProperties.difficultyLevel =
        this.editData.difficultyLevel;
      this.defaultItemProperties.stimulus = this.editData.stimulus;
      this.defaultItemProperties.shuffleOptions = this.editData.shuffleOptions;
      this.options = this.editData.options;
      // this.defaultItemProperties.shuffleOptions = true;

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
      // this.defaultItemProperties.scoringOption.autoScore =
      //   this.editData.scoringOption.caseSensitive;

      this.tags = this.editData.itemTagDTOs;
      this.itemUtil.setSelectedTags(this.tags);
      this.editData.scoringOption.answers; //Setting the right answer
      this.options.forEach((option, index) => {
        if (this.editData.scoringOption.answers.includes(option.value)) {
          this.selectedAnswers.add(index);
        }
      });
      //this.selectedAnswers = this.editData.scoringOption.answers;
    } else {
      this.createOptions(4);
      this.defaultItemProperties.scoringOption.autoScore = true;
      this.defaultItemProperties.difficultyLevel = 1;
      this.defaultItemProperties.shuffleOptions = true;
      this.tags = [];
    }
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

  setShowPassage(value: boolean) {
    this.showPassage = value;
  }

  addOption(index: number) {
    let options: Option = new Option();
    (options.label = `[Option${index + 1}]`), (options.value = index + "");
    return options;
  }

  deleteOption(index: number) {
    this.options.splice(index, 1);
    this.options.map((option, i) => {
      option.value = i + "";
    });
    if (this.selectedAnswers.has(index)) {
      this.selectedAnswers.delete(index);
    }
  }

  createOptions(count: number) {
    for (let i = 0; i < count; i++) {
      this.options.push(this.addOption(i));
    }
  }

  newOption(e: any) {
    e.preventDefault();
    let currentIndex = this.options.length;
    this.options.push(this.addOption(currentIndex));
  }

  selectedAnswer(i: number) {
    //this.options.push();
    if (this.selectedAnswers.has(i)) {
      this.selectedAnswers.delete(i);
      // console.log(this.selectedAnswers);
    } else {
      this.selectedAnswers.add(i);
      // console.log(this.selectedAnswers);
    }
  }

  recieveTag(tags: any) {
    this.tags = tags;
  }

  buildItem(form: any) {
    let item: MultipleResponseModel = new MultipleResponseModel();

    item.reference = this.defaultItemProperties.reference;
    item.stimulus = this.defaultItemProperties.stimulus;
    item.scoringOption = this.defaultItemProperties.scoringOption;
    item.difficultyLevel = this.defaultItemProperties.difficultyLevel;
    item.shuffleOptions = this.defaultItemProperties.shuffleOptions;
    item.multipleResponses = this.multipleResponses;
    item.subjectId = this.itemUtil.currentItemTrail.subjectId;
    item.topicId = this.itemUtil.currentItemTrail.topicId;
    item.subtopicId = this.itemUtil.currentItemTrail.subtopicId
      ? this.itemUtil.currentItemTrail.subtopicId
      : "";

    item.images = this.defaultItemProperties.images;

    item.itemType = ItemTypes.MRQ;

    this.options.forEach((option, index) => {
      option.value = index + "";
      /* if (this.selectedAnswers.has(index)) {
        option.value = index + '';
      } */
    });

    if (this.itemUtil.passageId) {
      item.passageId = this.itemUtil.passageId;
    }

    item.scoringOption.answers = [];
    item.options = this.options;

    //item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;

    item.itemTagsDTOS = this.tags.map((tag) => {
      return { tagId: tag.tagId };
    });

    this.selectedAnswers.forEach((value) => {
      item.scoringOption.answers.push(value + "");
    });

    return item;
  }

  saveItem(form: any) {
    let item = this.buildItem(form);
    let result = this.itemService.validateItem(item);

    if (!result) {
      return;
    }

    // ensure MCQ has at least 3 options
    if (!this.validateMinOptions(item)) {
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

    console.log(this.currentUser.authorities);
    console.log(this.subjectModerationStatus, "mod status");
    this.publishLoader();
    this.saveFunction(item, "save");
    //this.back();
  }

  saveFunction(item: any, type?: string) {
    let msg: string;
    if (type == "save") {
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
    this.itemService.createMultipleResponseItem(item).subscribe(
      (value) => {
        if (this.itemService.currentActivity) {
          item.itemId = value.id;
          this.savedItem.emit(item);
        }
        Swal.fire({
          icon: "success",
          html: msg,
          title: "Congratulations!",
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
          this.selectedAnswers.clear();
          this.options = [];
          this.tagRef.Tag = [];
          this.tagRef.ngOnInit();
          this.tagRef.sendTag([]);
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

  saveToDraft(form: any) {
    let item = this.buildItem(form);
    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    if (!this.validateMinOptions(item)) {
      return;
    }

    this.publishingItem = true;
    this.publishLoader();

    item.itemStatus = ItemStatusEnum.DRAFT;

    this.saveFunction(item, "draft");
  }

  saveItemToPassage(itemForm: any) {
    let item = this.buildItem(itemForm);
    this.publishingItem = true;
    this.publishLoader();

    if (this.subjectModerationStatus) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }

    item.topicId = this.itemUtil.currentItemTrail.topicId;

    // console.log(itemForm);

    if (!this.validateMinOptions(item)) {
      this.publishingItem = false;
      return;
    }

    this.saveFunction(item, "passage-item");
  }

  saveAndNewItem(itemForm: any) {
    let item = this.buildItem(itemForm);
    let result = this.itemService.validateItem(item);
    //console.log(result);
    if (!result) {
      return;
    }

    if (!this.validateMinOptions(item)) {
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

  addTag() {
    this.displayTagModal = true;
  }

  setItemType(value: string) {
    this.selectedItemType = value;
  }

  viewPassage(passageModal: any) {
    this.passageService.fetchSinglePassage("passage_id").subscribe(
      (value) => {
        this.itemPassage = value;
        this.showPassageModal(passageModal);
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }

  showPassageModal(passageModal: any) {
    this.modalService.open(passageModal, { centered: true });
  }

  doPreview(itemForm: any) {
    this.itemUtil.previewItem = true;
    let item = this.buildItem(itemForm);
    if (!this.validateMinOptions(item)) {
      return;
    }

    this.previewData = item;
    this.preview = true;
  }

  returnData(data) {
    this.preview = false;
    // console.log(data);
  }

  updateItem(itemForm?: any, status?: string) {
    let item = this.buildItem(itemForm);
    item.itemId = this.editData.id;

    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    if (!this.validateMinOptions(item)) {
      return;
    }

    this.publishingItem = true;
    this.publishLoader();

    // if (
    //   !this.currentUser.authorities.includes("MODERATOR") &&
    //   !this.currentUser.authorities.includes("ADMIN") &&
    //   (this.subjectModerationStatus ||
    //     item.itemStatus === ItemStatusEnum.AWAITING_MODERATION)
    // ) {
    //   item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    // } else {
    //   item.itemStatus = ItemStatusEnum.PUBLISHED;
    // }

    switch (status) {
      case "save":
        if (
          (!this.currentUser.authorities.includes("MODERATOR") &&
            !this.currentUser.authorities.includes("ADMIN")) || // Both roles are missing
          this.subjectModerationStatus ||
          item.itemStatus === ItemStatusEnum.AWAITING_MODERATION //
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
    this.itemService.edit_MRQ(this.editData.id, item).subscribe(
      (value) => {
        if (value) {
          Swal.fire({
            title: "Congratulations!",
            text: "The question was successfully updated.",
            icon: "success",
          });
          this.publishingItem = false;
          Swal.close();
          this.back();
        }
      },
      (error: HttpErrorResponse) => {
        Swal.fire({
          title: "Failed!",
          text: `${error.error.message}`,
          icon: "error",
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

  approveQuestion(itemForm: any) {
    this.updateItem(itemForm, "approve");
  }

  openRejectionReasonModal(rejectionReasonModal: any) {
    this.modalService.open(rejectionReasonModal, {
      centered: true,
      size: "lg",
    });
  }

  submitRejection(questionRejectionForm: any) {
    this.processingRejection = true
    this.newRejectionReason.itemId = this.editData.id;
    // console.log(this.newRejectionReason);
    this.itemService
      .rejectItem({
        itemId: this.newRejectionReason.itemId,
        reason: this.newRejectionReason.reason,
        subjectId: this.itemUtil.currentItemTrail.subjectId,
      })
      .subscribe(
        (value) => {
          if (value) {
            Swal.fire({
              title: "Congratulations!",
              text: `The question was rejected sucessfully.`,
              icon: "success",
            });
          }
          //this.notificationService.setNotifications();
          this.processingRejection= false
          this.modalService.dismissAll();
          this.back();
        },
        (error: HttpErrorResponse) => {
          this.processingRejection = false
          this.notifier.notify("error", `${error.error.message}`);
        }
      );
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

  validateMinOptions(item: any): boolean {
    const opts = item && item.options ? item.options : this.options;
    if (!opts || opts.length < 3) {
      this.notifier.notify("error", "Multiple choice questions require at least 3 options.");
      return false;
    }
    return true;
  }
}
