import { DefaultItemProperties } from "./../models/default-item-properties";
import { HttpErrorResponse } from "@angular/common/http";
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  OnDestroy,
} from "@angular/core";
import Swal from "sweetalert2";
import { ItemHttpService } from "../item-http.service";
import { ItemStatusEnum } from "../models/item-status-enum";
import { ItemTypes } from "../models/item-types";
import { MatchingRuleEnums } from "../models/matching-rule-enums";
import { ScoringTypeEnum } from "../models/scoring-type-enum";
import { RichEssayModel } from "./model/rich-essay-model.model";
import { ItemUtilitiesService } from "../item-utilities.service";
import { NotifierService } from "angular-notifier";
import { Location } from "@angular/common";
import { UserService } from "src/app/shared/user.service";
import { Account } from "src/app/authentication/model/account.model";
import { RejectionReason } from "../models/rejection-reason";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AllPassagesService } from "../../passages/list-passages/all-passages.service";
import { SinglePassageModel } from "../passage-item/model/single-passage-model.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ItemTagComponent } from "../item-tag/item-tag.component";

declare var tinymce: any;
declare const MathJax: any;
@Component({
  selector: "app-rich-essay",
  templateUrl: "./rich-essay.component.html",
  styleUrls: ["./rich-essay.component.scss"],
})
export class RichEssayComponent implements OnInit, OnDestroy {
  @Input() selectedItemType!: string;
  @Input() formType!: string;
  @Input() editData!: any;
  @Output() savedItem = new EventEmitter();
  @ViewChild("tagRef") tagRef: ItemTagComponent;

  breadCrumbItems!: Array<{}>;

  data: string = "";

  displayTagModal = false;

  preview: boolean = false;

  previewData: RichEssayModel;

  defaultItemProperties: DefaultItemProperties = new DefaultItemProperties();

  tags: any[] = [];

  scoringType: ScoringTypeEnum[] = [];

  matchingRule: MatchingRuleEnums[] = [];

  difficultyLevel: number[] = [1, 2, 3, 4, 5];

  item: RichEssayModel = new RichEssayModel();

  currentUser: Account;

  subjectModerationStatus: boolean = false;

  newRejectionReason: RejectionReason = new RejectionReason();

  publishingItem: Boolean = false;

  moderationStatus!: boolean;

  itemPassage: SinglePassageModel;

  passageWorkFlow: boolean = this.itemUtil.passageItemWorkflow;
  passageId: string = "";
  passageForPreview: SinglePassageModel;
  showPassage: boolean = false;
  processingRejection: boolean = false;

  constructor(
    private itemService: ItemHttpService,
    public itemUtil: ItemUtilitiesService,
    private notifier: NotifierService,
    private location: Location,
    private userService: UserService,
    private modalService: NgbModal,
    private passageService: AllPassagesService,
    private router: Router,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!this.selectedItemType) {
      this.selectedItemType = "Written";
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
    this.subjectModerationStatus =
      this.itemService.currentSubjectModerationEnabled;
    this.scoringType = Object.values(ScoringTypeEnum);
    this.moderationStatus = this.itemService.currentSubjectModerationEnabled;
    this.matchingRule = Object.values(MatchingRuleEnums);
    this.defaultItemProperties.scoringOption.matchingRule ==
      MatchingRuleEnums.EXACT_MATCH;
    this.itemUtil.setSelectedTags(this.tags);

    if (this.editData) {
      this.defaultItemProperties.reference = this.editData.reference;
      this.defaultItemProperties.difficultyLevel =
        this.editData.difficultyLevel;
      this.defaultItemProperties.stimulus = this.editData.stimulus;
      this.defaultItemProperties.shuffleOptions = this.editData.shuffleOptions;
      this.defaultItemProperties.allowCopy = this.editData.allowCopy;
      this.defaultItemProperties.allowCut = this.editData.allowCut;
      this.defaultItemProperties.allowPaste = this.editData.allowPaste;
      // this.defaultItemProperties.scoringOption.maxWords = this.editData.maxWords;
      this.defaultItemProperties.plainText = this.editData.plainText;

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
      this.defaultItemProperties.scoringOption.scoringType =
        this.editData.scoringOption.autoScore;
      this.defaultItemProperties.scoringOption.matchingRule =
        this.editData.scoringOption.matchingRule;
      this.defaultItemProperties.scoringOption.scoringType =
        this.editData.scoringOption.scoringType;
      this.defaultItemProperties.scoringOption.answers =
        this.editData.scoringOption.answers;
      this.defaultItemProperties.scoringOption.autoScore =
        this.editData.scoringOption.autoScore;
      this.defaultItemProperties.scoringOption.autoScore =
        this.editData.scoringOption.caseSensitive;
      this.tags = this.editData.itemTagDTOs;
      this.itemUtil.setSelectedTags(this.tags);
    } else {
      this.defaultItemProperties.scoringOption.matchingRule = "EXACT_MATCH";
    }
  }

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

  setShowPassage(e: any, value: boolean) {
    e.preventDefault();
    this.showPassage = value;
  }

  recieveTag(tags: any) {
    this.tags = tags;
  }

  buildItem(itemForm?: any) {
    let item: RichEssayModel = new RichEssayModel();
    item.stimulus = this.defaultItemProperties.stimulus;
    item.scoringOption = this.defaultItemProperties.scoringOption;
    item.reference = this.defaultItemProperties.reference;
    item.allowCopy = this.defaultItemProperties.allowCopy;
    item.allowCut = this.defaultItemProperties.allowCut;
    item.allowPaste = this.defaultItemProperties.allowPaste;
    item.difficultyLevel = this.item.difficultyLevel;
    item.subjectId = this.itemUtil.currentItemTrail.subjectId;
    item.topicId = this.itemUtil.currentItemTrail.topicId;
    item.subtopicId = this.itemUtil.currentItemTrail.subtopicId
      ? this.itemUtil.currentItemTrail.subtopicId
      : "";
    item.maxWords = this.defaultItemProperties.maxWords;
    item.itemTagsDTOS = this.tags.map((tag) => {
      return { tagId: tag.tagId };
    });
    item.itemType = ItemTypes.ESSAY_RICH_TEXT;
    /* item.allowCopy = this.item.allowCopy;
    item.allowCut = this.item.allowCut;
    item.allowPaste = this.item.allowPaste; */
    item.plainText = this.item.plainText;
    item.maxWords = this.item.maxWords;

    if (this.itemUtil.passageId) {
      item.passageId = this.itemUtil.passageId;
    }

    return item;
  }

  saveItem(itemForm: any) {
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

    this.saveFunction(item, "save");
  }

  saveToDraft(itemForm: any) {
    let item = this.buildItem(itemForm);
    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    this.publishingItem = true;
    this.publishLoader();

    item.itemStatus = ItemStatusEnum.DRAFT;

    this.saveFunction(item, "draft");
  }

  saveAndNewItem(itemForm: any) {
    console.log("i was called");
    let item = this.buildItem(itemForm);
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

    this.saveFunction(item, "save_and_new");
  }

  saveItemToPassage(itemForm: any) {
    let item = this.buildItem(itemForm);
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

  saveFunction(item: any, type: string) {
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

    console.log("i got here");
    this.itemService.createEssayItem(item).subscribe(
      (value) => {
        //console.log(value);
        this.publishingItem = false;
        Swal.close();
        Swal.fire({
          icon: "success",
          html: msg,
          title: "Congratulations!",
        });

        if (type === "save" || type === "draft" || type === "save-to-passage") {
          this.back();
        }

        if (type == "save_and_new" || type !== "") {
          console.log("hello");
          this.defaultItemProperties = new DefaultItemProperties();
          this.tags = [];
          this.defaultItemProperties.scoringOption.autoScore = false;
          this.defaultItemProperties.difficultyLevel = 1;
          this.defaultItemProperties.shuffleOptions = false;
          this.tagRef.Tag = [];
          this.tagRef.ngOnInit();
          this.tagRef.sendTag([]);
          this.ngOnInit();
        }
      },
      (error: HttpErrorResponse) => {
        this.publishingItem = false;
        Swal.close();
        Swal.fire({
          icon: "error",
          html: `${error.error.message}`,
          title: "Failed!",
        });
      }
    );
  }

  updateItem(itemForm?: any, status?: string) {
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
    //   (this.moderationStatus ||
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

    this.itemService.edit_Essay(this.editData.id, item).subscribe(
      (value) => {
        this.publishingItem = false;
        Swal.close();
        if (value) {
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

  addTag() {
    this.displayTagModal = true;
  }

  setItemType(value: string) {
    this.selectedItemType = value;
  }

  doPreview(itemForm: any) {
    this.preview = true;
    this.itemUtil.previewItem = true;

    this.previewData = this.buildItem();
  }

  showPassageModal(passageModal: any) {
    this.modalService.open(passageModal, { centered: true });
  }

  editPassage(e: Event) {
    e.preventDefault();
    this.router.navigate([
      "examalpha/passages/subjects/" +
        this.passageService.subjectId +
        "/passage/" +
        this.editData.passageId +
        "/edit-passage",
    ]);
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

  returnData() {
    this.preview = false;
    //this.previewData = data;
    //this.item = data;
    //console.log(data);
  }

  back() {
    this.location.back();
  }

  publishLoader(msg?: string) {
    if (!this.publishingItem) {
      return;
    } else {
      Swal.fire({
        title: msg ? msg : "Saving your question, Please Wait...",
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
          this.notifier.notify("error", `${error.error.message}`);
        }
      );
  }

  preProcess(pl, o) {
    // console.log(pl);
    let content = o.content;
  }

  openConfirmationModal(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      centered: true,
      windowClass: "modal-holder",
    });
  }

  ngOnDestroy(): void {
    this.itemUtil.previewItem = false
     
   }
}
