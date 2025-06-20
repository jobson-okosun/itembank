import { Component, OnInit, Input, ViewChild, OnDestroy } from "@angular/core";
import { ItemUtilitiesService } from "../item-utilities.service";
import { OrderingItem, Options } from "./model/ordering-item";
import { DefaultItemProperties } from "../models/default-item-properties";
import { UserService } from "src/app/shared/user.service";
import { Account } from "src/app/authentication/model/account.model";
import { ItemHttpService } from "../item-http.service";
import { ItemStatusEnum } from "../models/item-status-enum";
import { OrderingModel } from "./model/ordering-model";
import { ItemTypes } from "../models/item-types";
import { Option } from "../models/option";
import Swal from "sweetalert2";
import { HttpErrorResponse } from "@angular/common/http";
import { ItemTagsDtos } from "../models/item-tags-dtos";
import { ScoringTypeEnum } from "../models/scoring-type-enum";
import { MatchingRuleEnums } from "../models/matching-rule-enums";
import { NotifierService } from "angular-notifier";
import { RejectionReason } from "../models/rejection-reason";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Location } from "@angular/common";
import { AllPassagesService } from "../../passages/list-passages/all-passages.service";
import { SinglePassageModel } from "../passage-item/model/single-passage-model.model";
import { Router } from "@angular/router";
import { ItemTagComponent } from "../item-tag/item-tag.component";

declare var tinymce: any;
declare const MathJax: any;
@Component({
  selector: "app-ordering",
  templateUrl: "./ordering.component.html",
  styleUrls: ["./ordering.component.scss"],
})
export class OrderingComponent implements OnInit, OnDestroy {
  @Input() selectedItemType!: string;
  @Input() formType!: string;
  @Input() editData!: any;
  @ViewChild("tagRef") tagRef: ItemTagComponent;

  preview: boolean = false;

  previewData: any;

  passageWorkFlow: boolean = this.itemUtil.passageItemWorkflow;
  scoringType: string[];
  matchingRules: string[];
  defaultItemProperties: DefaultItemProperties = new DefaultItemProperties();
  tags: ItemTagsDtos[] = [];
  item: OrderingItem = new OrderingItem();
  options: Option[] = [];
  publishingItem: Boolean = false;
  newRejectionReason: RejectionReason = new RejectionReason();
  currentUser: Account;
  subjectModerationStatusEnabled: boolean = false;
  difficultyLevel: number[] = [1, 2, 3, 4, 5];
  itemPassage: SinglePassageModel;
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
    public itemUtil: ItemUtilitiesService,
    private userService: UserService,
    private itemService: ItemHttpService,
    private notifier: NotifierService,
    private modalService: NgbModal,
    private location: Location,
    private passageService: AllPassagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.selectedItemType) {
      this.selectedItemType = "Match & Order";
    }
    this.currentUser = this.userService.getCurrentUser();
    this.scoringType = [ScoringTypeEnum.EXACT_MATCH];

    this.matchingRules = Object.values(MatchingRuleEnums);
    this.subjectModerationStatusEnabled =
      this.itemService.currentSubjectModerationEnabled;
    this.defaultItemProperties.scoringOption.matchingRule =
      MatchingRuleEnums.EXACT_MATCH;
    this.defaultItemProperties.shuffleOptions = true;
    this.itemUtil.setSelectedTags(this.tags);

    // console.log('this is the current subject ID=========================>', this.itemService.subjectId);
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

      this.tags = this.editData.itemTagDTOs;
      this.itemUtil.setSelectedTags(this.tags);
      this.editData.scoringOption.answers; //Setting the right answer
      /* this.options.forEach((option, index) => {
          if(this.editData.scoringOption.answers.includes(option.value)){
            this.selectedAnswers.add(index);
          }
        }); */
    } else {
      this.createOption(4);
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

  addOption(index: number) {
    let option: Option = new Option();
    (option.label = `[option${index}]`), (option.value = index + "");
    return option;
  }

  createOption(count: number) {
    for (let i = 0; i < count; i++) {
      this.options.push(this.addOption(i));
    }
  }

  deleteOption(index: number) {
    this.options.splice(index, 1);
    this.options.map((option, i) => {
      option.value = i + "";
    });
  }

  newOption(e) {
    e.preventDefault();
    let currentIndex = this.options.length;
    this.options.push(this.addOption(currentIndex));
  }

  buildItem(form?: any) {
    let item: OrderingModel = new OrderingModel();

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

    item.itemType = ItemTypes.ORDER_LIST;

    this.options.forEach((option, index) => {
      option.value = index + "";
    });

    if (this.itemUtil.passageId) {
      item.passageId = this.itemUtil.passageId;
    }

    item.options = this.options;

    item.scoringOption.answers = [];

    for (let i = 0; i < item.options.length; i++) {
      item.scoringOption.answers.push(item.options[i].value);
    }

    item.itemTagsDTOS = this.tags.map((tag) => {
      return { tagId: tag.tagId };
    });

    console.log(item, "items");

    return item;
  }

  saveItem(itemForm: any) {
    let item = this.buildItem(itemForm);
    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    if (
      this.currentUser.authorities.includes("AUTHOR") &&
      this.subjectModerationStatusEnabled
    ) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    }

    if (this.subjectModerationStatusEnabled) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }

    this.saveFunction(item, "save");
  }

  updateItem(itemForm?: any, status?: string) {
    let item = this.buildItem(itemForm);
    item.itemId = this.editData.id;

    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    // if (
    //   (!this.currentUser.authorities.includes("MODERATOR") &&
    //     !this.currentUser.authorities.includes("ADMIN") &&
    //     this.subjectModerationStatusEnabled) ||
    //   this.currentUser.authority == "AUTHOR"
    // ) {
    //   item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    // } else {
    //   item.itemStatus = ItemStatusEnum.PUBLISHED;
    // }

    switch (status) {
      case "save":
        if (
          !this.currentUser.authorities.includes("MODERATOR") &&
          !this.currentUser.authorities.includes("ADMIN") &&
          (this.itemService.currentSubjectModerationEnabled ||
            item.itemStatus === ItemStatusEnum.AWAITING_MODERATION)
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
    this.itemService.edit_order_list(this.editData.id, item).subscribe(
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
        this.notifier.notify("error", `${error.error.message}`);
      }
    );
  }

  recieveTag(tag: any) {
    this.tags = tag;
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

  saveItemToPassage(itemForm?: any) {
    let item = this.buildItem(itemForm);
    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    this.publishingItem = true;
    this.publishLoader();

    if (this.subjectModerationStatusEnabled) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }

    item.topicId = this.itemUtil.currentItemTrail.topicId;

    this.saveFunction(item, "passage-item");
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

  saveAndNew() {
    let item = this.buildItem();
    let result = this.itemService.validateItem(item);

    if (!result) {
      return;
    }
    this.publishingItem = true;

    if (this.subjectModerationStatusEnabled) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }
    this.publishLoader();
    this.saveFunction(item, "save_and_new");
  }

  saveFunction(item: any, type: string) {
    this.publishingItem = true;
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
      this.subjectModerationStatusEnabled
    ) {
      msg = `item successfully sent for moderation`;
    }
    this.itemService.createOrderListItem(item).subscribe(
      (value) => {
        this.publishingItem = false;
        Swal.close();
        Swal.fire({
          icon: "success",
          title: "Congratulations!",
          text: msg,
        });

        if (type === "save" || type === "draft" || type === "save-to-passage") {
          this.back();
        }

        if (type == "save_and_new" || type !== "") {
          this.defaultItemProperties = new DefaultItemProperties();
          this.tags = [];
          this.defaultItemProperties.scoringOption.autoScore = true;
          this.defaultItemProperties.difficultyLevel = 1;
          this.defaultItemProperties.shuffleOptions = false;

          this.options = [];
          this.tagRef.Tag = [];
          this.tagRef.ngOnInit();
          this.tagRef.sendTag([]);
          console.log("save and new");
          // this.createOption(4)
          this.ngOnInit();
        }
      },
      (error: HttpErrorResponse) => {
        this.publishingItem = false;
        Swal.close();
        Swal.fire({
          icon: "error",
          text: `${error.error.message}`,
          title: "Failed!",
        });
      }
    );
  }

  doPreview(itemForm?: any) {
    this.itemUtil.previewItem = true;
    let item = this.buildItem(itemForm);
    this.previewData = item;
    this.preview = true;
  }

  closePreview(event: any) {
    this.preview = false;
  }

  back() {
    this.location.back();
  }

  publishLoader(msg?: string) {
    if (!this.publishingItem) {
      Swal.close();
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
