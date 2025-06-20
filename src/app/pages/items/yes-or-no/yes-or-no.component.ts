import { DefaultItemProperties } from "./../models/default-item-properties";
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

import { Option } from "../models/option";
import { YesOrNoModel } from "./model/yes-or-no-model.model";
import { ItemTypes } from "../models/item-types";
import { ItemStatusEnum } from "../models/item-status-enum";
import { ItemHttpService } from "../item-http.service";
import Swal from "sweetalert2";
import { ScoringTypeEnum } from "../models/scoring-type-enum";
import { MatchingRuleEnums } from "../models/matching-rule-enums";
import { ItemUtilitiesService } from "../item-utilities.service";
import { Account } from "src/app/authentication/model/account.model";
import { UserService } from "src/app/shared/user.service";
import { Location } from "@angular/common";
import { NotifierService } from "angular-notifier";
import { ItemsList } from "@ng-select/ng-select/lib/items-list";
import { RejectionReason } from "../models/rejection-reason";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AllPassagesService } from "../../passages/list-passages/all-passages.service";
import { SinglePassageModel } from "../passage-item/model/single-passage-model.model";
import { ItemTagComponent } from "../item-tag/item-tag.component";
import { ActivatedRoute } from "@angular/router";

declare var tinymce: any;
declare const MathJax: any;
@Component({
  selector: "app-yes-or-no",
  templateUrl: "./yes-or-no.component.html",
  styleUrls: ["./yes-or-no.component.scss"],
})
export class YesOrNoComponent implements OnInit, OnDestroy {
  //@Input() formType = '';
  @Input() formType!: string;
  @Input() selectedItemType!: string;
  @Input() editData!: any;
  @Output() savedItem = new EventEmitter();
  @Output() hidePreviewForParent = new EventEmitter();

  @ViewChild(ItemTagComponent) childComponent!: ItemTagComponent;
  @ViewChild("tagRef") tagRef: ItemTagComponent;

  breadCrumbItems!: Array<{}>;

  displayTagModal = false;

  preview: boolean = false;

  previewData: YesOrNoModel;

  passageWorkFlow: boolean = this.itemUtil.passageItemWorkflow;

  tags: any[] = [];

  selectedAnswers: Set<number> = new Set();

  defaultItemProperties: DefaultItemProperties = new DefaultItemProperties();

  scoringType: string[];

  matchingRules: string[];

  difficultyLevel: number[] = [1, 2, 3, 4, 5];

  publishingItem: boolean = false;

  item: YesOrNoModel = new YesOrNoModel();
  options: Option[] = [];

  newItem: YesOrNoModel[] = [];

  subjectModerationStatus: boolean = false;

  newRejectionReason: RejectionReason = new RejectionReason();

  currentUser: Account;

  assessmentActive: boolean = false;

  itemPassage: SinglePassageModel;
  reloadTags: boolean = false;
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
    private itemUtil: ItemUtilitiesService,
    private userService: UserService,
    private location: Location,
    private notifier: NotifierService,
    private modalService: NgbModal,
    private passageService: AllPassagesService,
    private ar: ActivatedRoute
  ) {}

  hidePreview(event: any) {
    this.hidePreviewForParent.emit(true);
  }
  ngOnInit(): void {
    if (!this.selectedItemType) {
      this.selectedItemType = "Multiple Choice";
    }

    this.passageId = this.ar.snapshot.params["passageId"];

    if (this.passageId) {
      this.passageService.fetchSinglePassage(this.passageId).subscribe({
        next: (value) => {
          this.passageForPreview = value;

          console.log(this.passageForPreview);
        },
      });
    }

    this.currentUser = this.userService.getCurrentUser();
    this.assessmentActive = this.itemService.assessmentActive;
    this.scoringType = Object.values(ScoringTypeEnum);
    this.matchingRules = Object.values(MatchingRuleEnums);
    this.subjectModerationStatus =
      this.itemService.currentSubjectModerationEnabled;
    this.defaultItemProperties.scoringOption.matchingRule =
      MatchingRuleEnums.EXACT_MATCH;

    this.defaultItemProperties.scoringOption.scoringType =
      ScoringTypeEnum.EXACT_MATCH;
    this.defaultItemProperties.shuffleOptions = true;

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
      this.defaultItemProperties.scoringOption.autoScore =
        this.editData.scoringOption.autoScore;
      this.defaultItemProperties.scoringOption.matchingRule =
        this.editData.scoringOption.matchingRule;
      this.defaultItemProperties.scoringOption.scoringType =
        this.editData.scoringOption.scoringType;
      this.defaultItemProperties.scoringOption.answers =
        this.editData.scoringOption.answers;

      // this.defaultItemProperties.scoringOption.autoScore =
      //   this.editData.scoringOption.caseSensitive;

      this.tags = this.editData.itemTagDTOs;

      console.log(this.tags);
      this.editData.scoringOption.answers; //Setting the right answer
      this.options.forEach((option, index) => {
        if (option.value === this.editData.scoringOption.answers[0]) {
          this.selectedAnswers.add(index);
        }
      });
    } else {
      this.createOptions(2);
      this.defaultItemProperties.scoringOption.autoScore = true;
      this.defaultItemProperties.difficultyLevel = 1;
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

  addOption(index: number): Option {
    //option.optionValue = index;

    let option: Option = new Option();
    if (this.options.length === 0) {
      (option.label = "Yes"), (option.value = index + "");
    } else {
      if (this.options[0].label === "Yes") {
        (option.label = "No"), (option.value = index + "");
      } else {
        (option.label = "Yes"), (option.value = index + "");
      }
    }
    return option;
  }

  deleteOption(index: number) {
    this.options.splice(index, 1);
    if (this.selectedAnswers.has(index)) {
      this.selectedAnswers.delete(index);
    }
  }

  createOptions(count: number) {
    for (let i = 0; i < count; i++) {
      this.options.push(this.addOption(i));
    }
  }

  setItemType(value: string) {
    this.selectedItemType = value;
  }

  newOption() {
    let currentIndex = this.options.length;
    if (currentIndex < 2) {
      this.options.push(this.addOption(currentIndex));
    } else {
      Swal.fire({
        icon: "error",
        html: "Only a maximum of two options allowed",
      });
    }
  }

  selectedAnswer(i: number) {
    if (this.selectedAnswers.size === 1) {
      this.selectedAnswers.clear();
    }
    this.selectedAnswers.add(i);
    // console.log('selected is ' + i);
  }

  recieveTags(tag: any) {
    this.tags = tag;
    console.log(tag);
  }

  buildItem() {
    let item: YesOrNoModel = new YesOrNoModel();

    item.reference = this.defaultItemProperties.reference;
    item.stimulus = this.defaultItemProperties.stimulus;
    item.scoringOption = this.defaultItemProperties.scoringOption;
    item.difficultyLevel = this.defaultItemProperties.difficultyLevel;
    item.shuffleOptions = this.defaultItemProperties.shuffleOptions;
    item.subjectId = this.itemUtil.currentItemTrail.subjectId;
    item.topicId = this.itemUtil.currentItemTrail.topicId;
    item.subtopicId = this.itemUtil.currentItemTrail.subtopicId
      ? this.itemUtil.currentItemTrail.subtopicId
      : "";

    item.images = this.defaultItemProperties.images;

    item.itemType = ItemTypes.MCQ;

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

    if (this.tags) {
      this.tags = this.tags.map((tag) => {
        return { tagId: tag.tagId };
      });
    } else {
      this.itemUtil.selectedTags$.subscribe({
        next: (value) => {
          // console.log(value, "sub");
          this.tags = value.map((tag) => {
            return { tagId: tag.tagId };
          });
        },
      });
    }

    item.itemTagsDTOS = this.tags;

    this.selectedAnswers.forEach((value) => {
      item.scoringOption.answers.push(value + "");
    });

    return item;
  }
  recieveTag(tag: any) {
    this.tags = tag;
  }

  save(form: any) {
    let item = this.buildItem();
    let result = this.itemService.validateItem(item);

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
    //this.back();
  }

  saveAndNewItem() {
    let item = this.buildItem();
    let result = this.itemService.validateItem(item);

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

  saveToDraft(itemForm: any) {
    let item = this.buildItem();
    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    this.publishingItem = true;
    this.publishLoader();

    item.itemStatus = ItemStatusEnum.DRAFT;

    this.saveFunction(item, "draft");
  }

  saveItemToPassage(itemForm: any) {
    let item = this.buildItem();
    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    this.publishingItem = true;
    this.publishLoader();

    if (this.subjectModerationStatus) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }

    item.topicId = this.itemUtil.currentItemTrail.topicId;

    this.saveFunction(item, "passage-item");
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
    this.itemService.createYesOrNoItem(item).subscribe(
      (value) => {
        if (this.itemService.currentActivity) {
          item.itemId = value.id;
          this.savedItem.emit(item);
        }
        if (value) {
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: msg,
          });
          this.publishingItem = false;
          this.publishLoader();
        }

        if (type === "save") {
          this.back();
        }

        if (type == "draft") {
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

          this.itemUtil.setSelectedTags([]);
          this.tagRef.Tag = [];
          this.tagRef.ngOnInit();
          this.tagRef.sendTag([]);
          if (this.childComponent) {
            this.childComponent.Tag = [];
          }
          this.ngOnInit();
        }
      },
      (error: HttpErrorResponse) => {
        this.publishingItem = false;
        this.publishLoader();
        Swal.close();
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: `${error.error.message}`,
        });
      }
    );
  }

  updateItem(status?: any) {
    let item = this.buildItem();
    item.itemId = this.editData.id;

    let validated = this.itemService.validateItem(item);

    if (!validated) {
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

    this.itemService.edit_Yes_No(this.editData.id, item).subscribe(
      (value) => {
        if (value) {
          this.publishingItem = false;
          Swal.fire({
            title: "Congratulations!",
            text: "The question was successfully updated.",
            icon: "success",
          });
          this.back();
        }
      },
      (error: HttpErrorResponse) => {
        this.publishingItem = false;
        Swal.close();
        this.notifier.notify("error", `${error.error.message}`);
      }
    );
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
    if (this.editData) {
      this.previewData = this.editData;
    } else {
      let item = this.buildItem();
      this.previewData = item;
    }

    this.preview = true;
  }

  closePreview(event: any) {
    this.preview = false;
    this.tags = event.itemTagDTOs;
    //this.previewData = data;
    // console.log(event);
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

  approveQuestion() {
    this.updateItem("approve");
  }

  openRejectionReasonModal(rejectionReasonModal: any) {
    this.modalService.open(rejectionReasonModal, {
      centered: true,
      size: "lg",
    });
  }

  submitRejection(questionRejectionForm: any) {
    this.processingRejection = true;
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
          this.processingRejection = false;
          this.modalService.dismissAll();
          this.back();
        },
        (error: HttpErrorResponse) => {
          this.processingRejection = false;
          this.notifier.notify("error", `${error.error.message}`);
        }
      );
  }

  preProcess(pl, o) {
    // console.log(pl);
    let content = o.content;

    /* let start = content.indexOf('<!--');
    console.log(start);

    while (start !== -1) {
      let end = content.indexOf('-->', start);

      console.log(end);

      content = content.replace(content.substring(start, end), '');

      start = content.indexOf('<!--');
    } */
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
