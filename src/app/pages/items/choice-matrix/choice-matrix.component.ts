import { ItemUtilitiesService } from "./../item-utilities.service";
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnDestroy,
} from "@angular/core";
import { ChoiceMatrix } from "./model/choice-matrix";
//import { Option } from '../models/option';
import { ItemHttpService } from "../item-http.service";
import Swal from "sweetalert2";
import { HttpErrorResponse } from "@angular/common/http";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ItemStatusEnum } from "../models/item-status-enum";
import { RejectionReason } from "../models/rejection-reason";
import { SinglePassageModel } from "../passage-item/model/single-passage-model.model";
import { NewAssociationItem } from "../matching/model/new-association-item.model";
import { Account } from "src/app/authentication/model/account.model";
import { Location } from "@angular/common";
import { NotifierService } from "angular-notifier";
import { DefaultItemProperties } from "../models/default-item-properties";
import { ItemTagsDtos } from "../models/item-tags-dtos";
import { Option } from "../models/option";
import { StimulusList } from "../matching/model/matching";
import { ItemTypes } from "../models/item-types";
import { AllPassagesService } from "../../passages/list-passages/all-passages.service";
import { UserService } from "src/app/shared/user.service";
import { ScoringTypeEnum } from "../models/scoring-type-enum";
import { MatchingRuleEnums } from "../models/matching-rule-enums";
import { ActivatedRoute, Router } from "@angular/router";
import { ItemTagComponent } from "../item-tag/item-tag.component";

declare var tinymce: any;
declare const MathJax: any;
@Component({
  selector: "app-choice-matrix",
  templateUrl: "./choice-matrix.component.html",
  styleUrls: ["./choice-matrix.component.scss"],
})
export class ChoiceMatrixComponent implements OnInit, OnDestroy {
  //@Input() formType: string = '';
  @Input() formType!: string;
  @Input() selectedItemType!: string;
  @Input() editData!: any;
  @Output() savedItem = new EventEmitter();
  @ViewChild("tagRef") tagRef: ItemTagComponent;

  currentUser: Account;

  init_Options_Count: number = 4;

  defaultCount: number = 4;

  item: ChoiceMatrix = new ChoiceMatrix();

  matchingRules: string[];

  defaultItemProperties: DefaultItemProperties = new DefaultItemProperties();

  preview: boolean = false;

  tags: ItemTagsDtos[] = [];

  previewData: any;

  passageWorkFlow: boolean = this.itemUtil.passageItemWorkflow;

  newRejectionReason: RejectionReason = new RejectionReason();

  subjectModerationStatusEnabled: boolean =
    this.itemService.currentSubjectModerationEnabled;

  itemPassage: SinglePassageModel;

  selectedAnswers: string[] = [];

  scoringType: string[];

  matchingRule: string[];

  difficultyLevels: Array<number> = [1, 2, 3, 4, 5];

  //item: ChoiceMatrix = new ChoiceMatrix();
  options: Option[] = [];
  stems: StimulusList[] = [];

  itemStems: string[] = [];

  publishingItem: boolean = false;
  showPassage: boolean = false;
  passageId: string = "";
  passageForPreview: SinglePassageModel;
  processingRejection =  false;

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

  moderationAction: string = "";
  constructor(
    public itemUtil: ItemUtilitiesService,
    private itemService: ItemHttpService,
    private modalService: NgbModal,
    private location: Location,
    private notifier: NotifierService,
    private passageService: AllPassagesService,
    private userService: UserService,
    private router: Router,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!this.selectedItemType) {
      this.selectedItemType = "Choice Matrix";
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
    this.scoringType = Object.values(ScoringTypeEnum);
    this.matchingRule = Object.values(MatchingRuleEnums);

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
  
      this.defaultItemProperties.scoringOption.minimumScoreIfAttempted =
        this.editData.scoringOption.minimumScoreIfAttempted;

        
      this.defaultItemProperties.scoringOption.score =
        this.editData.scoringOption.score;
      this.defaultItemProperties.scoringOption.penalty =
        this.editData.scoringOption.penalty;
  
      this.defaultItemProperties.scoringOption.matchingRule =
        this.editData.scoringOption.matchingRule;

      this.defaultItemProperties.scoringOption.scoringType =
        this.editData.scoringOption.scoringType;

      this.defaultItemProperties.scoringOption.answers =
        this.editData.scoringOption.answers;

      this.defaultItemProperties.scoringOption.autoScore =
        this.editData.scoringOption.autoScore;

      this.defaultItemProperties.scoringOption.caseSensitive =
        this.editData.scoringOption.caseSensitive;

      this.tags = this.editData.itemTagDTOs;
      this.editData.scoringOption.answers; //Setting the right answer
      this.editData.stems.forEach((stem, i) => {
        const edit_stem: StimulusList = new StimulusList();
        edit_stem.stem = stem;
        edit_stem.selectedAnswer = this.editData.scoringOption.answers[i];
        this.stems.push(edit_stem);
      });
      console.log("editData stems::::::::::::::", this.stems);
    } else {
      this.createOptions(2);
      this.createStems(this.init_Options_Count);
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

  createOptions(count: number) {
    for (let i = 0; i < count; i++) {
      this.options.push(this.addOption(i));
    }
  }

  createStems(count: number) {
    for (let i = 0; i < count; i++) {
      this.stems.push(this.addStem(i));
    }
  }

  addOption(index: number) {
    let option: Option = new Option();
    option.label = `[option${index + 1}]`;
    option.value = index + "";
    return option;
  }

  addStem(index: number) {
    let stems: StimulusList = new StimulusList();
    stems.stem = `[stimulus${index + 1}]`;
    return stems;
  }

  newStem() {
    let stem: StimulusList = new StimulusList();
    stem.stem = `[stimulus${this.stems.length + 1}]`;
    this.stems.push(stem);
  }

  newOption() {
    let option: Option = new Option();
    option.label = `[option${this.options.length + 1}]`;
    option.value = this.options.length + "";
    this.options.push(option);
  }

  removeStem(index: number) {
    this.stems.splice(index, 1);
  }

  removeOption(index: number) {
    this.options.splice(index, 1);
  }

  selectedAnswer(stem: StimulusList, optionValue: string) {
    /* this.stems = this.stems.filter((item) => {
      return item.id === stem.id;
    }) */
    /* this.stems.find((stem, i) => {
      //if (stem.id === stem.id) stem.selected = optionValue;
      if(stem[i] === optionValue) {
        //stem.selected = optionValue;
        return;
      }
    }); */
    stem.selectedAnswer = optionValue;
  }

  recieveTags(tags: any) {
    this.tags = tags;
  }

  buildItem(itemForm?: any) {
    let item: ChoiceMatrix = new ChoiceMatrix();

    item.reference = this.defaultItemProperties.reference;
    item.stimulus = this.defaultItemProperties.stimulus;
    item.scoringOption = this.defaultItemProperties.scoringOption;
    item.shuffleOptions = this.defaultItemProperties.shuffleOptions;
    item.difficultyLevel = this.defaultItemProperties.difficultyLevel;
    item.itemType = ItemTypes.CHOICE_MATRIX;

    item.options = [];
    item.stems = [];
    item.scoringOption.answers = [];

    item.options = this.options;
    item.images = this.defaultItemProperties.images;
    if (this.itemUtil.passageId) {
      item.passageId = this.itemUtil.passageId;
    }
    item.subjectId = this.itemUtil.currentItemTrail.subjectId;
    item.topicId = this.itemUtil.currentItemTrail.topicId;
    item.subtopicId = this.itemUtil.currentItemTrail.subtopicId
      ? this.itemUtil.currentItemTrail.subtopicId
      : "";
    item.itemTagsDTOS = this.tags.map((tag) => {
      return { tagId: tag.tagId };
    });
    //item.scoringOption.answers = this.selectedAnswers;
    //console.log(this.stems);
    this.stems.forEach((stem) => {
      item.stems.push(stem.stem);
      item.scoringOption.answers.push(stem.selectedAnswer);
      // console.log(item.scoringOption.answers);
    });

    return item;
  }

  saveAsItem(itemForm?: any) {
    let item = this.buildItem(itemForm);
    const validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    if (this.subjectModerationStatusEnabled) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }

    if (
      this.currentUser.authorities.includes("AUTHOR") &&
      this.subjectModerationStatusEnabled
    ) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    }

    Swal.close();
    this.saveFunction(item, "save");
  }

  saveAndNew(itemForm: any) {
    let item = this.buildItem(itemForm);
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

  saveItemToPassage(itemForm: any) {
    let item = this.buildItem(itemForm);
    const validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    if (this.subjectModerationStatusEnabled) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }

    this.saveFunction(item, "passage-item");
  }

  saveFunction(item: any, type: string) {
    let msg: string;

    if (type == "save" || type === "save_and_new") {
      msg = `A new item has been created successfully`;
    } else if (type == "draft") {
      msg = `A new item has been saved to draft successfully`;
    } else if (type == "passage-item") {
      msg = `A new item has been added to the passage successfully`;
    }

    if (
      this.currentUser.authorities.includes("AUTHOR")
      //  && this. check mod atatus
    ) {
      msg = `item successfully sent for moderation`;
    }
    this.itemService.createChoiceMatrixItem(item).subscribe(
      (value) => {
        if (value) {
          this.publishingItem = false;
          Swal.close();
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: msg,
          });
        }

        if (type === "save" || type == "draft") {
          this.back();
        }

        if (type == "save_and_new" || type !== "") {
          this.defaultItemProperties = new DefaultItemProperties();
          this.tags = [];
          this.defaultItemProperties.scoringOption.autoScore = true;
          this.defaultItemProperties.difficultyLevel = 1;
          this.defaultItemProperties.shuffleOptions = true;
          this.options = [];

          this.options = [];
          this.stems = [];

          this.tagRef.Tag = [];
          this.tagRef.ngOnInit();
          this.tagRef.sendTag([]);
          // this.createOptions(4)
          // this.createStems(4)
          this.ngOnInit();
        }
      },
      (err: HttpErrorResponse) => {
        this.publishingItem = false;
        Swal.close();
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: err.error.message,
        });
      }
    );
  }

  updateItem(itemForm?: any, status?: string) {
    let item: ChoiceMatrix = this.buildItem(itemForm);
    item.itemId = this.editData.id;

    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    // if (
    //   item.itemStatus == ItemStatusEnum.AWAITING_MODERATION &&
    //   !this.currentUser.authorities.includes("MODERATOR") &&
    //   !this.currentUser.authorities.includes("ADMIN")
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
          this.subjectModerationStatusEnabled ||
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

    this.itemService.editChoiceMatrixItem(this.editData.id, item).subscribe(
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
  openConfirmationModal(content: any){
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      windowClass: 'modal-holder'
    });

  }

  back() {
    this.location.back();
  }

  doPreview(item: any) {
    this.previewData = this.buildItem(item);
    this.preview = true;
    this.itemUtil.previewItem = true;
  }

  editPreviewData() {
    this.preview = false;
  }

  showAnswer(event: any) {}

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

  showPassageModal(passageModal: any) {
    this.modalService.open(passageModal, { centered: true });
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
    this.processingRejection =  true
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
          this.processingRejection =  false
          this.modalService.dismissAll();
          this.back();
        },
        (error: HttpErrorResponse) => {
          this.processingRejection =  false
          this.notifier.notify("error", `${error.error.message}`);
        }
      );
  }

  preProcess(pl, o) {
    // console.log(pl);
    let content = o.content;
  }

  ngOnDestroy(): void {
    this.itemUtil.previewItem = false
     
   }
}
