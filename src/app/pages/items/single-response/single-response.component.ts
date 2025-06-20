import { MatchingRuleEnums } from "./../models/matching-rule-enums";
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  NgZone,
  ViewChild,
  ElementRef,
  OnDestroy,
} from "@angular/core";
import { SingleChoiceModel } from "./model/single-response-model.model";
import { Option } from "../models/option";
import { ItemTagsDtos } from "../models/item-tags-dtos";
import { ItemUtilitiesService } from "../item-utilities.service";
import { ItemHttpService } from "../item-http.service";
import { HttpErrorResponse } from "@angular/common/http";
import { ScoringTypeEnum } from "../models/scoring-type-enum";
import { ItemStatusEnum } from "../models/item-status-enum";
import { ItemTypes } from "../models/item-types";
import Swal from "sweetalert2";
import { DefaultItemProperties } from "../models/default-item-properties";
import { UserService } from "src/app/shared/user.service";
import { Account } from "src/app/authentication/model/account.model";
import { NotifierService } from "angular-notifier";
import { Location } from "@angular/common";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RejectionReason } from "../models/rejection-reason";
import { ActivatedRoute, Router } from "@angular/router";
import { SinglePassageModel } from "../passage-item/model/single-passage-model.model";
import { AllPassagesService } from "../../passages/list-passages/all-passages.service";
// import { Editor } from "dist/velzon/tinymce/tinymce";
import { ItemTagComponent } from "../item-tag/item-tag.component";
import { environment } from "src/environments/environment";

declare var tinymce: any;
declare const MathJax: any;
@Component({
  selector: "app-single-response",
  templateUrl: "./single-response.component.html",
  styleUrls: ["./single-response.component.scss"],
})
export class SingleResponseComponent implements OnInit, OnDestroy {
  @Input() itemTrail!: any;

  //@Input() formType = '';
  @Input() editData!: any;
  @Input() selectedItemType!: string;
  @Input() formType!: string;
  @Output() savedItem = new EventEmitter();
  @Output() getTopicQuestions = new EventEmitter();

  @ViewChild("eqEditorModal") eqEditorModal: ElementRef;
  @ViewChild("tagRef") tagRef: ItemTagComponent;

  breadCrumbItems!: Array<{}>;

  moderationStatus!: boolean;

  preview: boolean = false;

  currentUser!: Account;

  previewData: SingleChoiceModel;

  passageWorkFlow: boolean = this.itemUtil.passageItemWorkflow;

  selectedAnswers: Set<number> = new Set();

  defaultItemProperties: DefaultItemProperties = new DefaultItemProperties();

  tags: ItemTagsDtos[] = [];

  options: Option[] = [];

  scoringType: string[];

  matchingRule: string[];

  difficultyLevels: Array<number> = [1, 2, 3, 4, 5];

  publishingItem: boolean = false;

  itemPassage: SinglePassageModel;

  newRejectionReason: RejectionReason = new RejectionReason();

  displayEquationEditor: boolean = false;
  showPassage: boolean = false;
  passageId: string = "";
  passageForPreview: SinglePassageModel;
  processingRejection: boolean = false;
  itemUtil_: ItemUtilitiesService = null;

  constructor(
    public itemUtil: ItemUtilitiesService,
    private createItem: ItemHttpService,
    private passageService: AllPassagesService,
    private userService: UserService,
    private notifier: NotifierService,
    private location: Location,
    private itemService: ItemHttpService,
    private modalService: NgbModal,
    private router: Router,
    private ar: ActivatedRoute,
    private ngZone: NgZone
  ) {
    this.itemUtil_ = itemUtil;
  }

  // ngAfterViewInit() {
  //   tinymce.activeEditor.on('SetContent', () => {
  //     const editorContent = tinymce.activeEditor.getBody();
  //     MathLive.renderMathInElement(editorContent);
  //   });
  // }

  ngOnInit(): void {
    console.log("hello");
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

    if (!this.selectedItemType) {
      this.selectedItemType = "Multiple choice";
    }
    this.currentUser = this.userService.getCurrentUser();
    this.scoringType = Object.values(ScoringTypeEnum);
    this.matchingRule = Object.values(MatchingRuleEnums);
    this.defaultItemProperties.scoringOption.matchingRule =
      MatchingRuleEnums.EXACT_MATCH;

    this.defaultItemProperties.scoringOption.scoringType =
      ScoringTypeEnum.EXACT_MATCH;
    this.defaultItemProperties.shuffleOptions = true;
    this.itemUtil.setSelectedTags(this.tags);

    /* console.log(this.itemUtil.currentItemTrail);
    console.log(this.itemUtil.passageId); */
    //console.log('item for editing', this.editData);
    this.moderationStatus = this.itemService.currentSubjectModerationEnabled;
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

      this.itemUtil.setSelectedTags(this.tags);

      this.editData.scoringOption.answers; //Setting the right answer
      this.options.forEach((option, index) => {
        if (option.value === this.editData.scoringOption.answers[0]) {
          this.selectedAnswers.add(index);
        }
      });
    } else {
      this.createUIOptions(4);
      this.defaultItemProperties.scoringOption.autoScore = true;
      this.defaultItemProperties.difficultyLevel = 1;
      this.defaultItemProperties.shuffleOptions = true;
      this.tags = [];
      this.itemUtil.setSelectedTags(this.tags);
    }
    //console.log(this.itemUtil.passageItemWorkflow);
    //console.log(this.itemUtil.passageId);
  }

  option: Object = {
    height: 200,
    menubar: true,
    branding: false,
    base_url: "/tinymce",
    suffix: ".min",
    plugins: "table quickbars lists autoresize charmap paste",
    quickbars_insert_toolbars: false,
    setup: this.setup,

    paste_preprocess: function (pl, o) {
      // console.log(o.content);
    },
    toolbar:
      "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent table quickimage quicklink | subscript superscript charmap",
  };

  setShowPassage(value: boolean) {
    this.showPassage = value;
  }
  canShowModal() {
    return this.displayEquationEditor;
  }

  click() {
    console.log("clikced");
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
        onSubmit: async (api) => {
          const mathField = document.getElementById("mathfield") as any;
          const updatedLatex = mathField.getValue();

          if (activeEquation) {
            // Update the selected equation
            activeEquation.setAttribute("data-latex", updatedLatex);
            activeEquation.innerHTML = `\\(${updatedLatex}\\)`;
            activeEquation.classList.add("math-expression");

            const response = await fetch(
              `${environment.developmentIP}/itembank/items/convert_to_latex`,
              {
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ text: updatedLatex }),
              }
            );
            response.json().then((data) => {
              console.log(data.base64Equation, "data");
              const value = data.base64Equation;
              const content = `<img src="${
                "data:image/jpg;base64," + value
              }" class="math-expression" data-latex="${updatedLatex}">`;
              editor.insertContent(content);
              editor.selection.collapse(false);
            });

            // Trigger MathJax to re-render
            // MathJax.typesetPromise([editor.getBody()])
            //   .then(() => console.log("Math rendering updated"))
            //   .catch((err) => console.error("Math rendering failed:", err));
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
        this.convertLatexToBase64,
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
            onSubmit: async (api) => {
              const mathField = document.getElementById("mathfield") as any;
              const latex = mathField.getValue();

              // Create span for the math equations
              // const content = `<span class="math-expression" data-latex="${latex}">\\(${latex}\\)</span>`;

              // this.convertLatexToBase64();
              // this.itemUtil_.convertLatexToBase64(latex).subscribe({
              //   next: (value) => {
              //     const content = `<img src="${value}" class="math-expression" data-latex="${latex}">`;
              //     editor.insertContent(content);
              //     editor.selection.collapse(false);
              //   },
              // });
              // editor.insertContent(latex);
              // editor.insertContent("&nbsp;");

              // Ensure cursor placement is outside the equation
              editor.selection.collapse(false);
              const response = await fetch(
                `${environment.developmentIP}/itembank/items/convert_to_latex`,
                {
                  credentials: "include",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  method: "POST",
                  body: JSON.stringify({ text: latex }),
                }
              );
              response.json().then((data) => {
                console.log(data.base64Equation, "data");
                const value = data.base64Equation;
                const content = `<img src="${
                  "data:image/jpg;base64," + value
                }" class="math-expression" data-latex="${latex}">`;
                editor.insertContent(content);
                editor.selection.collapse(false);
              });

              // MathJax.typesetPromise([editor.getBody()])
              //   .then(() => console.log("Math rendering complete"))
              //   .catch((err) => console.error("Math rendering failed:", err));

              api.close();
            },
          });
      },
    });
  }

  


  convertLatexToBase64 = () => {
    return new Promise((resolve) => {
      // Perform some action
      const result = "Data from Angular";
      resolve(result);
    });
  };
  renderMathInEditor() {
    // Get the editor's body
  }

  // Close Mathlive modal
  closeMathModal(content: any) {
    this.modalService.dismissAll(this.eqEditorModal);
    console.log(content);
  }
  addOption(index: number): Option {
    let option: Option = new Option();
    (option.label = `[option${index + 1}]`), (option.value = index + "");
    return option;
  }

  openEquationEditorModal() {
    this.displayEquationEditor = true;
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

  createUIOptions(count: number) {
    for (let i = 0; i < count; i++) {
      this.options.push(this.addOption(i));
    }
  }

  newOption(e) {
    e.preventDefault();
    let currentIndex = this.options.length;
    this.options.push(this.addOption(currentIndex));
  }

  selectedAnswer(i: number) {
    if (this.selectedAnswers.size > 0) {
      this.selectedAnswers.clear();
    }
    this.selectedAnswers.add(i);
    // console.log(this.selectedAnswers);
  }

  recieveTag(tag: any) {
    this.tags = tag;
    console.log(tag);
  }

  buildItem(form?: any): SingleChoiceModel {
    let item: SingleChoiceModel = new SingleChoiceModel();

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

    //item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;

    // this.tags

    item.itemTagsDTOS = this.tags?.map((tag) => ({ tagId: tag.tagId })) || [];

    this.selectedAnswers.forEach((value) => {
      /* if (item.scoringOption.answers.length === 0) {
        item.scoringOption.answers.push(value + '');
      } else {
        item.scoringOption.answers = []; */
      item.scoringOption.answers.push(value + "");
      //}
    });

    return item;
  }

  saveItem(form: any) {
    /* if (this.defaultItemProperties.stimulus === '') {
      return this.notifier.notify('error', 'please the question is required!');
    } */

    let item = this.buildItem(form);
    let result = this.itemService.validateItem(item);
    //console.log(result);
    if (!result) {
      return;
    }
    //this.publishingItem = true;

    /* if (item.scoringOption.answers.length == 0) {
      return this.notifier.notify(
        'error',
        'Please select the right answer to the question!'
      );
    } */

    if (
      this.currentUser.authorities.includes("AUTHOR") &&
      this.moderationStatus
    ) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    }

    if (this.moderationStatus) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }
    //this.publishLoader();
    this.saveFunction(item, "save");
    //this.back();
  }

  saveToDraft(form: any) {
    let item = this.buildItem(form);
    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    this.publishingItem = true;
    this.publishLoader();

    item.itemStatus = ItemStatusEnum.DRAFT;

    this.saveFunction(item, "draft");
  }

  saveAndNew(form?: any) {
    let item = this.buildItem(form);
    let result = this.itemService.validateItem(item);

    if (!result) {
      return;
    }
    this.publishingItem = true;

    if (this.moderationStatus) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }
    this.publishLoader();
    this.saveFunction(item, "save_and_new", "save");
  }

  saveFunction(item: any, action?: string, type?: string) {
    this.publishingItem = true;
    this.publishLoader();

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
      this.moderationStatus
    ) {
      msg = `item successfully sent for moderation`;
    }
    this.createItem.createMultipleChoiceItem(item).subscribe(
      (value) => {
        if (this.createItem.currentActivity) {
          item.itemId = value.id;
          this.savedItem.emit(item);
        }
        this.publishingItem = false;
        Swal.close();
        Swal.fire({
          title: "Congratulations!",
          icon: "success",
          html: msg,
        });
        if (
          action === "save" ||
          action == "draft" ||
          action == "save-to-passage"
        ) {
          this.back();
        }

        if (action == "save_and_new" || action !== "") {
          console.log("hello");
          this.defaultItemProperties = new DefaultItemProperties();
          this.tags = [];
          this.defaultItemProperties.scoringOption.autoScore = true;
          this.defaultItemProperties.difficultyLevel = 1;
          this.defaultItemProperties.shuffleOptions = true;
          this.selectedAnswers.clear();
          this.options = [];
          this.createUIOptions(4);
          this.tagRef.Tag = [];
          this.tagRef.ngOnInit();
          this.tagRef.sendTag([]);
          // this.ngOnInit();
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

  saveItemToPassage(itemForm: any) {
    let item = this.buildItem(itemForm);
    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    //this.publishingItem = true;
    //this.publishLoader();

    if (this.moderationStatus) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }

    item.topicId = this.itemUtil.currentItemTrail.topicId;

    // console.log(itemForm);

    this.saveFunction(item, "save-to-passage", "passage-item");

    /* this.createItem.createMultipleChoiceItem(item).subscribe(
      (value) => {
        console.log(value);
        Swal.fire({
          icon: 'success',
          html: 'A new item has been added to the passage successfully',
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          html: `${error.error.errors[0]}`,
        });
      }
    ); */
  }

  updateItem(itemForm?: any, status?: string) {
    let item = this.buildItem(itemForm);
    item.itemId = this.editData.id;

    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    switch (status) {
      case "save":
        if (
          this.moderationStatus ||
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

    this.createItem.editItem(this.editData.id, item).subscribe(
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

  setItemType(value: string) {
    this.selectedItemType = value;
  }

  doPreview(itemForm: any) {
    this.itemUtil.previewItem = true;
    let item = this.buildItem(itemForm);

    if (this.editData) {
      this.previewData = this.editData;
    } else {
      this.previewData = item;
    }

    this.preview = true;
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

  returnData(data) {
    this.preview = false;
    this.tags = data.itemTagDTOs;
    //this.previewData = data;
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
    //console.log(this.newRejectionReason);
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
    this.itemUtil.previewItem = false;
  }
}
