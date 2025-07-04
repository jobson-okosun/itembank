import { DropdownSubjectList } from "./../models/dropdown-subject-list.model";
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
import { ShortText } from "./model/short-text.model";
import { ItemTypes } from "../models/item-types";
import { ItemStatusEnum } from "../models/item-status-enum";
import { ItemHttpService } from "../item-http.service";
import { ScoringTypeEnum } from "../models/scoring-type-enum";
import { MatchingRuleEnums } from "../models/matching-rule-enums";
import { ItemTagsDtos } from "../models/item-tags-dtos";
import Swal from "sweetalert2";
import { ItemUtilitiesService } from "../item-utilities.service";
import { Location } from "@angular/common";
import { NotifierService } from "angular-notifier";
import { UserService } from "src/app/shared/user.service";
import { Account } from "src/app/authentication/model/account.model";
import { RejectionReason } from "../models/rejection-reason";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SinglePassageModel } from "../passage-item/model/single-passage-model.model";
import { AllPassagesService } from "../../passages/list-passages/all-passages.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ItemTagComponent } from "../item-tag/item-tag.component";

declare var tinymce: any;
declare const MathJax: any;
@Component({
  selector: "app-create-item",
  templateUrl: "./create-item.component.html",
  styleUrls: ["./create-item.component.scss"],
})
export class CreateItemComponent implements OnInit, OnDestroy {
  @Input() selectedItemType!: string;
  @Input() formType!: string;
  @Input() editData!: any;
  @Output() hidePreview = new EventEmitter<string>();
  @Output() savedItem = new EventEmitter();

  breadCrumbItems!: Array<{}>;

  subjects: DropdownSubjectList[] = [];

  topics: any[];

  selectedSubject: any;

  selectedTopic: any;

  preview: boolean = false;

  previewData: ShortText;

  passageWorkFlow: boolean = this.itemUtil.passageItemWorkflow;

  defaultItemProperties: DefaultItemProperties = new DefaultItemProperties();

  tags: ItemTagsDtos[] = [];

  answer: string = null;

  scoringType: ScoringTypeEnum[] = [];

  matchingRule: MatchingRuleEnums[] = [];

  difficultyLevel: number[] = [1, 2, 3, 4, 5];

  currentUser: Account;

  subjectModerationStatus: boolean = false;

  publishingItem: boolean = false;

  newRejectionReason: RejectionReason = new RejectionReason();

  itemPassage: SinglePassageModel;

  passageId: string = "";
  passageForPreview: SinglePassageModel;
  showPassage: boolean = false;
  processingRejection: boolean = false;
  @ViewChild("tagRef") tagRef: ItemTagComponent;

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
    private location: Location,
    private notifier: NotifierService,
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
    // console.log(this.passageId);
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

    this.matchingRule = Object.values(MatchingRuleEnums);
    this.subjectModerationStatus =
      this.itemService.currentSubjectModerationEnabled;
    this.defaultItemProperties.scoringOption.matchingRule =
      MatchingRuleEnums.EXACT_MATCH;
    if (this.editData) {
      this.defaultItemProperties.reference = this.editData.reference;
      this.defaultItemProperties.difficultyLevel =
        this.editData.difficultyLevel;
      this.defaultItemProperties.stimulus = this.editData.stimulus;
      this.defaultItemProperties.shuffleOptions = this.editData.shuffleOptions;

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
      this.defaultItemProperties.numerical = this.editData.numerical;

      this.defaultItemProperties.maxLength = this.editData.maxLength;

      this.tags = this.editData.itemTagDTOs;
      this.editData.scoringOption.answers; //Setting the right answer
    } else {
      this.defaultItemProperties.numerical = false;

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

  recieveTag(tags: any) {
    this.tags = tags;
  }

  saveSubject($event: any) {
    this.selectedSubject = $event;
    let newItemTrail = {
      subjectId: this.selectedSubject.subjectId,
      subjectName: this.selectedSubject.subjectName,
    };
    // console.log(this.selectedSubject);
    this.itemUtil.currentItemTrail = { ...newItemTrail };
    this.itemService
      .fetchSubjectTopicsTreeAdmin(this.selectedSubject.subjectId)
      .subscribe((value) => {
        if (value) {
          this.topics = value.topics;
          // console.log(this.topics);
        }
      });
  }

  viewTrailInformation($event: any) {
    this.selectedTopic = $event;
    this.itemUtil.currentItemTrail.topicId = this.selectedTopic.topicId;
    this.itemUtil.currentItemTrail.topicName = this.selectedTopic.topicName;
    // console.log(this.itemUtil.currentItemTrail);
  }

  buildItem(itemForm?: any) {
    let item: ShortText = new ShortText();

    item.reference = this.defaultItemProperties.reference;
    item.stimulus = this.defaultItemProperties.stimulus;
    item.scoringOption = this.defaultItemProperties.scoringOption;
    item.difficultyLevel = this.defaultItemProperties.difficultyLevel;
    item.shuffleOptions = this.defaultItemProperties.shuffleOptions;
    item.subjectId = this.itemUtil.currentItemTrail.subjectId;
    item.topicId = this.itemUtil.currentItemTrail.topicId;
    item.subtopicId = this.itemUtil.currentItemTrail.subtopicId
      ? this.itemUtil.currentItemTrail.subtopicId
      : null;
    item.numerical = this.defaultItemProperties.numerical;
    item.maxLength = this.defaultItemProperties.maxLength;
    item.images = this.defaultItemProperties.images;

    item.itemType = ItemTypes.SHORT_TEXT;

    if (this.itemUtil.passageId) {
      item.passageId = this.itemUtil.passageId;
    }

    //item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;

    item.itemTagsDTOS = this.tags.map((tag) => {
      return { tagId: tag.tagId };
    });

    return item;
  }

  save(itemForm: any) {
    let item = this.buildItem(itemForm);
    let validated = this.itemService.validateItem(item);

    // console.log("saved called");

    if (!validated) {
      return;
    }

    this.publishingItem = true;
    this.publishLoader();

    console.log(this.subjectModerationStatus);
    if (
      this.currentUser.authorities.includes("AUTHOR") &&
      this.subjectModerationStatus
    ) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    }
    if (this.subjectModerationStatus) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
      console.log("i am here");
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }

    this.saveFunction(item, "save");
  }

  saveToDraft() {
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

  showPassageModal(passageModal: any) {
    this.modalService.open(passageModal, { centered: true });
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

  saveAndNew() {
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

  saveFunction(item: any, type?: string) {
    let msg: string;
    if (type == "save") {
      msg = `A new item has been created successfully`;
    } else if (type == "draft") {
      msg = `A new item has been saved to draft successfully`;
    } else if (type == "passage-item") {
      msg = `A new item has been added to the passage successfully`;
    }
    this.itemService.createShortTextItem(item).subscribe(
      (value) => {
        if (this.itemService.currentActivity) {
          item.itemId = value.id;
        }
        this.publishingItem = false;
        Swal.close();
        Swal.fire({
          icon: "success",
          html: msg,
        });

        if (type === "save" || type === "draft" || type === "save-to-passage") {
          this.back();
        }

        if (type == "save_and_new" || type !== "") {
          this.defaultItemProperties = new DefaultItemProperties();
          this.tags = [];

          this.defaultItemProperties.difficultyLevel = 1;
          this.defaultItemProperties.shuffleOptions = false;
          this.tagRef.Tag = [];
          this.tagRef.ngOnInit();
          this.tagRef.sendTag([]);

          // this.createOption(4)
          this.ngOnInit();
        }
      },
      (error: HttpErrorResponse) => {
        //console.log(error);
        this.publishingItem = false;
        Swal.close();
        Swal.fire({
          icon: "error",
          html: `${error.error.message}`,
        });
      }
    );
  }

  updateItem(itemForm?: any, status?: string) {
    console.log(status);
    let item = this.buildItem(itemForm);
    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    this.publishingItem = true;
    this.publishLoader();

    item.itemId = this.editData.id;

    // if (
    //   !this.currentUser.authorities.includes("MODERATOR") &&
    //   !this.currentUser.authorities.includes("ADMIN") &&
    //   this.subjectModerationStatus
    // ) {
    //   item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    // } else {
    //   item.itemStatus = ItemStatusEnum.PUBLISHED;
    // }

    switch (status) {
      case "save":
        console.log(this.subjectModerationStatus, "mod status");
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

    this.itemService.editShortText(this.editData.id, item).subscribe(
      (value) => {
        if (value) {
          this.publishingItem = false;
          Swal.close();
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

  setItemType(value: string) {
    this.selectedItemType = value;
  }

  doPreview(itemForm: any) {
    this.previewData = this.buildItem(itemForm);
    this.itemUtil.previewItem = true;
    //console.log(this.previewData);
    this.preview = true;
  }

  returnData($event: any) {
    this.preview = false;
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
          this.processingRejection = false;
          this.notifier.notify("error", `${error.error.message}`);
        }
      );
  }

  preProcess(pl, o) {
    // console.log(pl);
    let content = o.content;
  }

  ngOnDestroy(): void {
    this.itemUtil.previewItem = false;
  }
}
