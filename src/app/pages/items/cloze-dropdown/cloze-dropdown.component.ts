import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  OnDestroy,
} from "@angular/core";
//import {getTinymce as Tmce} from "@tinymce/tinymce-angular/TinyMCE";
import { imageUpload } from "../utility/FileUpload";
import { FileUploader } from "ng2-file-upload";
import { newClozeDropDown } from "../utility/ClozeTextUtil";
import { ClozeDropdown } from "./cloze-dropdown.model";
import { DefaultItemProperties } from "../models/default-item-properties";
import { ItemTypes } from "../models/item-types";
import { ItemHttpService } from "../item-http.service";
import { ItemUtilitiesService } from "../item-utilities.service";
import { ItemStatusEnum } from "../models/item-status-enum";
import { ScoringTypeEnum } from "../models/scoring-type-enum";
import { ItemTagsDtos } from "../models/item-tags-dtos";
import { Responses } from "../models/responses.model";
import { UserService } from "src/app/shared/user.service";
import { Location } from "@angular/common";
import { Account } from "src/app/authentication/model/account.model";
import Swal from "sweetalert2";
import { NotifierService } from "angular-notifier";
import { Router } from "@angular/router";
import { MatchingRuleEnums } from "../models/matching-rule-enums";
import { HttpErrorResponse } from "@angular/common/http";
import { ItemTagComponent } from "../item-tag/item-tag.component";
import { RejectionReason } from "../models/rejection-reason";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

declare var tinymce: any;
declare const MathJax: any;

// // Load WIRISplugins.js dynamically
// const jsDemoImagesTransform = document.createElement("script");
// jsDemoImagesTransform.type = "text/javascript";
// jsDemoImagesTransform.src =
//   "https://www.wiris.net/demo/plugins/app/WIRISplugins.js?viewer=image";
// // Load generated scripts.
// document.head.appendChild(jsDemoImagesTransform);

@Component({
  selector: "app-cloze-dropdown",
  templateUrl: "./cloze-dropdown.component.html",
  styleUrls: ["./cloze-dropdown.component.scss"],
})
export class ClozeDropdownComponent implements OnInit, OnDestroy {
  @Input() selectedItemType!: string;
  @Input() formType!: string;
  @Input() editData!: any;
  @Input() itemTrailInfo!: any;
  @ViewChild("tagRef") tagRef: ItemTagComponent;
  editor: any;

  editDataStatus: boolean = false;
  newEditData: ClozeDropdown = new ClozeDropdown();
  dropdownCount: any = 0;

  content: HTMLSelectElement[] = [];

  responses: Responses[] = [];

  breadCrumbItems!: Array<{}>;

  displayTagModal = false;

  preview: boolean = false;

  previewData: ClozeDropdown;

  selectedIndexes: Set<number> = new Set();

  tags: ItemTagsDtos[] = [];

  defaultItemProperties: DefaultItemProperties = new DefaultItemProperties();

  uploader: FileUploader;

  matchingRule: string[];

  difficultyLevels: Array<number> = [1, 2, 3, 4, 5];

  scoringType: Array<string> = [
    "EXACT_MATCH",
    "PARTIAL_MATCH_PER_RESPONSE",
    "PARTIAL_MATCH",
  ];

  clozeRenderArray: any[] = [];
  matchingRules: string[];
  currentUser: Account;
  publishingItem: boolean;
  subjectModerationStatusEnabled: boolean =
    this.itemService.currentSubjectModerationEnabled;

  moderationStatus: boolean = false;
  newRejectionReason: RejectionReason = new RejectionReason();
  updatingItem: boolean = false;
  processingRejection: boolean = false;
  subjectModerationStatus: boolean = false;
  selectBoxesLength: number = 0;

  constructor(
    private itemService: ItemHttpService,
    public itemUtil: ItemUtilitiesService,
    private userService: UserService,
    private notifier: NotifierService,
    private location: Location,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.uploader = new FileUploader({
      url: "//post",
      disableMultipart: false,
      autoUpload: true,
      method: "post",
      itemAlias: "attachment",
      allowedFileType: ["image"],
    });
  }

  ngAfterViewInit() {
    //console.log('I am in an init!');
  }

  ngOnInit(): void {
    if (!this.selectedItemType) {
      this.selectedItemType = "Fill in the gap";
    }
    this.currentUser = this.userService.getCurrentUser();
    this.uploader.onCompleteItem = (
      item: any,
      response: string,
      status: any,
      headers: any
    ) => {
      tinymce.activeEditor.insertContent('<img src="' + location + '"/>');
    };

    this.scoringType = Object.values(ScoringTypeEnum);

    this.defaultItemProperties.scoringOption.matchingRule =
      MatchingRuleEnums.EXACT_MATCH;

    this.defaultItemProperties.scoringOption.autoScore = true;

    this.matchingRules = Object.values(MatchingRuleEnums);

    this.defaultItemProperties.shuffleOptions = true;

    this.defaultItemProperties.difficultyLevel = 1;

    this.subjectModerationStatus =
      this.itemService.currentSubjectModerationEnabled;

    // if (this.editDataStatus) {
    //   this.editData.stimulus = "<p>{{response}} are to {{response}}</p>";
    //   this.editData.itemId = "bhbcbhvyshasyhsh";
    //   this.editData.reference = "Item 1";
    //   this.editData.difficultyLevel = 3;
    //   this.editData.shuffleOptions = false;
    //   (this.editData.subjectId = "25"), (this.editData.topicId = "20");
    //   this.editData.possibleResponses = [
    //     { responses: ["cats", "dogs", "rats", "horse"] },
    //     { responses: ["meows", "whinies", "barks", "squeaks"] },
    //   ];
    //   this.editData.scoringOption.answers = ["1", "2"];
    // }

    if (this.editData) {
      console.log("here i am");
      //this.defaultItemProperties.stimulus = this.editData.stimulus;
      this.defaultItemProperties.scoringOption.answers =
        this.editData.scoringOption.answers;
      this.defaultItemProperties.reference = this.editData.reference;

      // this.editData.stimulus = this.editData.stimulus.replaceAll(
      //   "{{response}}",
      //   "<select style='width: 200px; height: 30px; border-radius: 3px'></select>"
      // );

      const selectTemplate = `<select style='width: 200px; height: 30px; border-radius: 3px; display: inline-block;'><option value="blank">--</option><option value="addRemove">click to add / remove</option></select>`;
      let modifiedStimulus = this.editData.stimulus;
      const responseMatches = modifiedStimulus.match(/{{response}}/g) || [];

      responseMatches.forEach(() => {
        modifiedStimulus = modifiedStimulus.replace(
          "{{response}}",
          selectTemplate
        );
      });

      this.defaultItemProperties.stimulus = modifiedStimulus;
      // this.defaultItemProperties.stimulus = this.editData.stimulus;

      this.defaultItemProperties.scoringOption.score =
        this.editData.scoringOption.score;

      this.defaultItemProperties.scoringOption.penalty =
        this.editData.scoringOption.penalty;

      this.defaultItemProperties.scoringOption.matchingRule =
        this.editData.scoringOption.matchingRule;

      this.defaultItemProperties.scoringOption.scoringType =
        this.editData.scoringOption.scoringType;

      this.defaultItemProperties.scoringOption.autoScore =
        this.editData.scoringOption.autoScore;

      this.defaultItemProperties.scoringOption.caseSensitive =
        this.editData.scoringOption.caseSensitive;

      this.defaultItemProperties.scoringOption.minimumScoreIfAttempted =
        this.editData.scoringOption.minimumScoreIfAttempted;

      /* let openingIndex = this.editData.stimulus.indexOf('{{response}}');
      while(true) */
    }
  }

  logEditor(event: any) {
    if (this.editData) {
      let selectBoxes: HTMLSelectElement[] = tinymce
        .get("abc")
        .getDoc()
        .querySelectorAll("select");
      console.log("These are the select boxes", selectBoxes);
      this.selectBoxesLength = selectBoxes.length;
      selectBoxes.forEach((selectBox, i) => {
        selectBox.setAttribute("id", i + "");
        console.log(selectBoxes.length, "select box length");

        // Add default options if not present
        if (selectBox.options.length === 0) {
          let option1 = document.createElement("option");
          let option2 = document.createElement("option");
          option1.label = "--";
          option1.value = "blank";
          option2.label = "click to add / remove";
          option2.value = "addRemove";
          selectBox.options.add(option1);
          selectBox.options.add(option2);
        }

        // Add dynamic response options
        const responses = this.editData.possibleResponses[i].responses;
        responses.forEach((response, j) => {
          let new_option = document.createElement("option");
          new_option.label = response;
          new_option.value = j + "";
          // Check if option already exists, avoid duplicates
          if (
            !Array.from(selectBox.options).some(
              (option) => option.value === j + ""
            )
          ) {
            selectBox.options.add(new_option);
          }
        });

        // Insert space after the last select box if it's the last one
        if (i === selectBoxes.length - 1) {
          let p = document.createElement("p");
          p.innerHTML = "&nbsp;";
          tinymce.activeEditor.getDoc().body.appendChild(p);
        }

        // Set the selected answer
        const correctAnswer = this.editData.scoringOption.answers[i]; // Correct answer for this selectBox
        for (let k = 0; k < selectBox.options.length; k++) {
          const optionLabel = selectBox.options[k].label; // Current option's label
          if (optionLabel === correctAnswer) {
            selectBox.options[k].selected = true; // Set as selected
            console.log(`Answer set for selectBox ${i}: ${correctAnswer}`);
            break;
          }
        }

        // Add event listener for handling "add/remove"
        selectBox.addEventListener("change", (event) => {
          console.log("change event added for", i);
          let selectElement = event.currentTarget as HTMLSelectElement; // Cast to HTMLSelectElement

          // Skip if "add/remove" is not clicked
          if (
            selectElement.options[selectElement.selectedIndex].value !==
            "addRemove"
          ) {
            return;
          }

          // Build the options array for add/remove functionality
          let optionsArray = [
            { value: "selectOption", text: "Select option to delete" },
          ];

          for (let j = 0; j < selectElement.options.length; j++) {
            if (
              selectElement.options[j].value === "blank" ||
              selectElement.options[j].value === "addRemove"
            ) {
              continue;
            }
            optionsArray.push({
              value: selectElement.options[j].value,
              text: selectElement.options[j].label,
            });
          }

          // Execute the TinyMCE command for add/remove functionality
          tinymce.activeEditor.execCommand("addRemoveClozeOption", false, {
            select: event.currentTarget,
            options: optionsArray,
          });

          selectElement.selectedIndex = 0; // Reset selection
        });

        console.log(`SelectBox ${i} initialized in TinyMCE.`);
      });

      /* selectBoxes.forEach((selectBox, i) => {
            let options: HTMLOptionElement[] = [];
            for (let j = 0; j < selectBox.options.length; j++) {
              //selectBox.options((option) => {
    
              if (
                selectBox.options[j].value === 'blank' ||
                selectBox.options[j].value === 'addRemove'
              ) {
                continue;
              } else {
                if (j - 2 == +this.previewData.scoringOption.answers[i]) {
                  selectBox.options[j].selected = true;
                  console.log('answer found');
                }
              }
              //})
            }
          }); */
    }
    // if (this.previewData) {
    //   let selectedBoxes: HTMLSelectElement[] = tinymce
    //     .get("abc")
    //     .getDoc()
    //     .querySelectorAll("select");
    //   // console.log('These are the selected boxes', selectedBoxes);
    //   selectedBoxes.forEach((selectBox, i) => {
    //     let options: HTMLOptionElement[] = [];
    //     for (let j = 0; j < selectBox.options.length; j++) {
    //       //selectBox.options((option) => {

    //       if (
    //         selectBox.options[j].value === "blank" ||
    //         selectBox.options[j].value === "addRemove"
    //       ) {
    //         continue;
    //       } else {
    //         if (j - 2 == +this.previewData.scoringOption.answers[i]) {
    //           selectBox.options[j].selected = true;
    //           // console.log('answer found');
    //         }
    //       }
    //       //})
    //     }

    //     /* for (let j = 0; j < options.length; j++) {

    //       let option = options[j];
    //       console.log('Logging answer', option, this.previewData.scoringOption.answers[j]);
    //       if (j == +this.previewData.scoringOption.answers[j]) {
    //         option.selected = true;
    //         console.log('answer found');
    //       }
    //     } */
    //   });
    // }
  }

  option: Object = {
    min_height: 300,
    max_height: 500,
    menubar: true,
    base_url: "/tinymce",
    branding: false,
    inline_boundaries: false,
    suffix: ".min",
    plugins: "image autoresize media table quickbars lists charmap",
    file_picker_callback: imageUpload,
    /* images_upload_url:'http://192.168.0.131:8081/itembank/api/images',
    images_upload_credentials:true,*/
    setup: this.setup,
    draggable_modal: true,

    /* external_plugins: {
      tiny_mce_wiris: `${window.location.href}/node_modules/@wiris/mathtype-tinymce5/plugin.min.js`,
    }, */
    toolbar:
      "undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify myimage myimage2 bullist numlist outdent indent table quickimage quicklink equation-editor | subscript superscript charmap",
  };

  changeFunc = function () {
    // console.log('i am called');
    alert("on change");
  };

  recieveTag(tag: any) {
    this.tags = tag;
  }

  setup(editor_: any) {
    // let tinymce : any;
    // console.log("this is tmce",tinymce)

    let editor = editor_;
    this.editor = editor;
    let activeEquation: HTMLElement | null = null;

    console.log(this.editor, "this");
    let count = 0;

    //   let selectBoxes: HTMLSelectElement[] = editor
    // .get("abc")
    // .getDoc()
    // .querySelectorAll("select");

    console.log(editor.getBody(), "editor");
    // console.log(selectBoxes, 'editor selectBoxes');
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
    editor.ui.registry.addIcon(
      "cloze",
      '<svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59375 25.25V5.25H7.21875V6.78125H4.34375V23.7188H7.21875V25.25H2.59375ZM11.002 22.125C10.6165 22.125 10.2858 21.987 10.0098 21.7109C9.73372 21.4349 9.5957 21.1042 9.5957 20.7187C9.5957 20.3333 9.73372 20.0026 10.0098 19.7266C10.2858 19.4505 10.6165 19.3125 11.002 19.3125C11.3874 19.3125 11.7181 19.4505 11.9941 19.7266C12.2702 20.0026 12.4082 20.3333 12.4082 20.7187C12.4082 20.974 12.3431 21.2083 12.2129 21.4219C12.0879 21.6354 11.9186 21.8073 11.7051 21.9375C11.4967 22.0625 11.2624 22.125 11.002 22.125ZM17.0605 22.125C16.6751 22.125 16.3444 21.987 16.0684 21.7109C15.7923 21.4349 15.6543 21.1042 15.6543 20.7187C15.6543 20.3333 15.7923 20.0026 16.0684 19.7266C16.3444 19.4505 16.6751 19.3125 17.0605 19.3125C17.446 19.3125 17.7767 19.4505 18.0527 19.7266C18.3288 20.0026 18.4668 20.3333 18.4668 20.7187C18.4668 20.974 18.4017 21.2083 18.2715 21.4219C18.1465 21.6354 17.9772 21.8073 17.7637 21.9375C17.5553 22.0625 17.321 22.125 17.0605 22.125ZM23.1191 22.125C22.7337 22.125 22.403 21.987 22.127 21.7109C21.8509 21.4349 21.7129 21.1042 21.7129 20.7187C21.7129 20.3333 21.8509 20.0026 22.127 19.7266C22.403 19.4505 22.7337 19.3125 23.1191 19.3125C23.5046 19.3125 23.8353 19.4505 24.1113 19.7266C24.3874 20.0026 24.5254 20.3333 24.5254 20.7187C24.5254 20.974 24.4603 21.2083 24.3301 21.4219C24.2051 21.6354 24.0358 21.8073 23.8223 21.9375C23.6139 22.0625 23.3796 22.125 23.1191 22.125ZM31.5215 5.25V25.25H26.8965V23.7188H29.7715V6.78125H26.8965V5.25H31.5215Z" fill="#1E1E1E"/></svg>'
    );

    editor.ui.registry.addButton("myimage", {
      icon: "cloze",
      onAction(): void {
        // editor.execCommand('openImageDialog', false, null);
        // console.log('button clicked');
        //editor.insertContent("<input type = 'text'/>", { class : 'form-control'});
        //console.log(editor.getDoc().querySelectorAll('input[type=text]'));
        // console.log(count + ' this is count');

        ++count;
        newClozeDropDown(editor, count);
      },
    });

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

    /* editor.ui.registry.addButton('myimage2', {
      text: 'image 2',
      onAction(): void {
        editor.execCommand('openImageDialog', false, null);
      },
    }); */

    editor.addCommand("addRemoveClozeOption", (ui: any, v: any) => {
      editor.windowManager.open({
        size: "normal",
        title: "Add Or Remove option",
        body: {
          type: "panel",
          items: [
            {
              type: "input",
              name: "option_data",
              label: "Enter option to add",
            },
            {
              type: "selectbox",
              name: "option_to_delete",
              label: "Choose Option to delete",
              items: v.options,
            },
          ],
        },
        buttons: [
          {
            type: "cancel",
            name: "closeButton",
            text: "Cancel",
          },
          {
            type: "custom",
            name: "deleteOption",
            text: "Delete Option",
          },
          {
            type: "submit",
            name: "submitButton",
            text: "Add Option",
            primary: true,
          },
        ],
        onSubmit: function (api) {
          // console.log(api.getData().option_data);
          let option = document.createElement("option");
          option.label = api.getData().option_data;
          option.value = Math.random() + "";

          v.select.add(option);

          api.close();
        },
        onAction: function (api, details) {
          let indexToDelete = -1;
          if (details.name == "deleteOption") {
            // console.log(api.getData());
            let optToDelete = api.getData().option_to_delete;
            if (optToDelete == "selectOption") {
              alert("Please select an option to delete ");
            } else {
              for (let i = 0; i < v.select.options.length; i++) {
                if (v.select.item(i).value == optToDelete) {
                  indexToDelete = i;
                  // console.log('found');
                  break;
                }
              }

              if (indexToDelete != -1) {
                v.select.item(indexToDelete).remove();
                api.close();
              }
            }
          }
        },
      });
    });

    editor.addCommand("openImageDialog", (ui: any, v: any) => {
      editor.windowManager.open({
        size: "normal",
        title: "Images",
        body: {
          type: "panel",
          items: [
            {
              type: "urlinput",
              filetype: "image",
              disabled: false,
              name: "url",
              label: "Paste or enter an Url as the link to the page.",
            },
            {
              type: "input",
              name: "linkText",
              label: "Link Text",
            },
          ],
        },
        buttons: [
          {
            type: "cancel",
            name: "closeButton",
            text: "Cancel",
          },
          {
            type: "submit",
            name: "submitButton",
            text: "Insert Link to Page",
            primary: true,
          },
        ],
        onSubmit: function (api) {
          //  console.log(api.getData().url);
          let blob = api.getData().url;
          // console.log(blob.value);
          editor.insertContent(`<img src = '${blob.value}'`);
          var reader = new FileReader();
          reader.readAsDataURL(blob.value);
          reader.onloadend = function () {
            var base64String = reader.result;
            // console.log('Base64 String - ', base64String);

            editor.insertContent(`<img src = '${blob.value}'`);
          };
          /*let option = document.createElement('option')
          option.label = api.getData().option_data;
          option.value = Math.random()+"";
          v.select.add(option);*/

          api.close();
        },
      });
    });

    if (this.editDataStatus) {
      // console.log(editor.getContent());
    }
  }

  buildItem(form?: any) {
    let item: ClozeDropdown = new ClozeDropdown();

    item.reference = this.defaultItemProperties.reference;
    item.stimulus = this.defaultItemProperties.stimulus;
    item.shuffleOptions = false;
    item.itemType = ItemTypes.CLOZE_DROPDOWN;
    item.difficultyLevel = this.defaultItemProperties.difficultyLevel;

    item.subjectId = this.itemUtil.currentItemTrail.subjectId;
    item.topicId = this.itemUtil.currentItemTrail.topicId;
    item.subtopicId = this.itemUtil.currentItemTrail.subtopicId
      ? this.itemUtil.currentItemTrail.subtopicId
      : "";
    /* item.subjectId = this.itemService.subjectId ? this.itemService.subjectId : null;
    item.topicId = this.itemUtil.currentItemTrail.topicId ? this.itemUtil.currentItemTrail.topicId : null;
    item.subtopicId = this.itemUtil.currentItemTrail.subtopicId
      ? this.itemUtil.currentItemTrail.subtopicId
      : null; */

    item.scoringOption = {
      ...this.defaultItemProperties.scoringOption,
      answers: [],
    };

    if (this.itemUtil.passageId) {
      item.passageId = this.itemUtil.passageId;
    }
    item.possibleResponses = [];

    item.itemTagsDTOS = this.tags.map((tag) => {
      return { tagId: tag.tagId };
    });

    return item;
  }

  saveItem(form: any, type?: string) {
    console.log("called me");
    let item = this.buildItem(form);
    const original_content = "";
    this.responses = [];

    console.log(form, "form");

    this.content = tinymce.get("abc").getDoc().getElementsByTagName("select");
    for (let i = 0; i < this.content.length; i++) {
      item.scoringOption.answers.push(
        this.content[i].selectedOptions[0].label.trim()
      );
    }
    for (let i = 0; i < this.content.length; i++) {
      let possibleResponse: Responses = new Responses();
      let options: string[] = [];
      for (let j = 2; j < this.content[i].options.length; j++) {
        options.push(this.content[i].options[j].label.trim());
      }
      possibleResponse.responses = options.map((option) => option.trim());
      possibleResponse.responses = options;
      this.responses.push(possibleResponse);
    }

    item.possibleResponses = this.responses;

    console.log(item);

    let content = tinymce.activeEditor.getContent();
    let newContent = content.replaceAll(
      /<select[^>]*>[\s\S]*?<\/select>/g,
      "{{response}}"
    );
    tinymce.get("abc").dom.select();

    item.stimulus = newContent;

    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    if (
      this.currentUser.authorities.includes("AUTHOR") &&
      this.itemService.currentSubjectModerationEnabled
    ) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    }

    if (this.itemService.currentSubjectModerationEnabled) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }
    console.log(original_content, "original");
    console.log(item.stimulus);

    this.saveFunction(item, "save");
    return;
    this.itemService.createClozeDropdownItem(item).subscribe(
      (value) => {
        if (value) {
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: "You have successfully created a new item.",
          });
          // this.saveFunction("save")
        }
      },
      (err: any) => {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: `${err.error.message}`,
        });
        item.possibleResponses = [];
        // console.log(err);
      }
    );

    // console.log(item);

    // console.log(item);
  }

  saveToDraft(itemForm: any) {
    console.log("called me");
    let item = this.buildItem(itemForm);
    const original_content = "";
    // this.content = []

    // console.log(form, "form");

    this.content = tinymce.get("abc").getDoc().getElementsByTagName("select");
    for (let i = 0; i < this.content.length; i++) {
      item.scoringOption.answers.push(this.content[i].selectedOptions[0].label);
    }
    for (let i = 0; i < this.content.length; i++) {
      let possibleResponse: Responses = new Responses();
      let options: string[] = [];
      for (let j = 2; j < this.content[i].options.length; j++) {
        options.push(this.content[i].options[j].label);
      }
      possibleResponse.responses = options;
      this.responses.push(possibleResponse);
    }

    item.possibleResponses = this.responses;

    console.log(item);

    let content = tinymce.activeEditor.getContent();
    let newContent = content.replaceAll(
      /<select[^>]*>[\s\S]*?<\/select>/g,
      "{{response}}"
    );
    tinymce.get("abc").dom.select();

    item.stimulus = newContent;
    item.itemStatus = ItemStatusEnum.DRAFT;

    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    // if (
    //   this.currentUser.authorities.includes("AUTHOR") &&
    //   this.itemService.currentSubjectModerationEnabled
    // ) {
    //   item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    // }

    // if (this.itemService.currentSubjectModerationEnabled) {
    //   item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    // } else {
    //   item.itemStatus = ItemStatusEnum.PUBLISHED;
    // }
    console.log(original_content, "original");
    console.log(item.stimulus);

    this.saveFunction(item, "draft");
  }

  saveAndNew(itemForm: any) {
    console.log("called me");
    let item = this.buildItem(itemForm);
    const original_content = "";
    // this.content = []

    // console.log(form, "form");

    this.content = tinymce.get("abc").getDoc().getElementsByTagName("select");
    for (let i = 0; i < this.content.length; i++) {
      item.scoringOption.answers.push(this.content[i].selectedOptions[0].label);
    }
    for (let i = 0; i < this.content.length; i++) {
      let possibleResponse: Responses = new Responses();
      let options: string[] = [];
      for (let j = 2; j < this.content[i].options.length; j++) {
        options.push(this.content[i].options[j].label);
      }
      possibleResponse.responses = options;
      this.responses.push(possibleResponse);
    }

    item.possibleResponses = this.responses;

    console.log(item);

    let content = tinymce.activeEditor.getContent();
    let newContent = content.replaceAll(
      /<select[^>]*>[\s\S]*?<\/select>/g,
      "{{response}}"
    );
    tinymce.get("abc").dom.select();

    item.stimulus = newContent;
    item.itemStatus = ItemStatusEnum.DRAFT;

    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    if (
      this.currentUser.authorities.includes("AUTHOR") &&
      this.itemService.currentSubjectModerationEnabled
    ) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    }

    if (this.itemService.currentSubjectModerationEnabled) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }
    console.log(original_content, "original");
    console.log(item.stimulus);

    this.saveFunction(item, "save_and_new");
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

    this.itemService.createClozeDropdownItem(item).subscribe(
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
          this.responses = [];
          this.content = [];
          this.defaultItemProperties.stimulus = "";
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

  doPreview(itemForm: any) {
    let item = this.buildItem(itemForm);
    this.itemUtil.previewItem = true;

    item.scoringOption.answers = [];
    this.responses = [];
    item.possibleResponses = [];

    let collection: HTMLSelectElement[] = tinymce
      .get("abc")
      .getDoc()
      .getElementsByTagName("select");

    for (let i = 0; i < collection.length; i++) {
      let options = collection[i].options;
      let possibleResponse: Responses = new Responses();
      let itemOptions: string[] = [];

      if (options.length > 2) {
        for (let j = 0; j < options.length; j++) {
          if (
            options[j].value === "blank" ||
            options[j].value === "addRemove"
          ) {
            continue;
          }

          const optionLabel = options[j].label.trim();
          itemOptions.push(optionLabel);

          if (options[j].selected) {
            item.scoringOption.answers.push(optionLabel);
          }
        }

        possibleResponse.responses = itemOptions;
        this.responses.push(possibleResponse);
      }
    }

    item.possibleResponses = this.responses;
    // Store the original select elements state
    this.content = collection;

    let content = tinymce.activeEditor.getContent();
    let openingTagIndex = content.indexOf("<select");

    while (openingTagIndex != -1) {
      let closingTagIndex = content.indexOf("</select>", openingTagIndex);
      let selectTag = content.substring(openingTagIndex, closingTagIndex + 9);
      content = content.replace(selectTag, "{{response}}");
      openingTagIndex = content.indexOf("<select");
    }

    item.stimulus = content;
    this.previewData = item;
    this.preview = true;
  }

  editPreview() {
    let item = this.buildItem();
    let content = this.defaultItemProperties.stimulus;

    let openingTagIndex = content.indexOf("<select");
    while (openingTagIndex != -1) {
      let closingTagIndex = content.indexOf("</select>", openingTagIndex);
      let selectTag = content.substring(openingTagIndex, closingTagIndex + 9);
      //console.log('selected tag', selectTag);
      content = content.replace(selectTag, "{{response}}");
      //console.log('after replace', content);
      openingTagIndex = content.indexOf("<select");
    }
    // console.log('content', content);
    item.stimulus = content;
    item.possibleResponses = this.editData.possibleResponses;
    item.scoringOption.answers = this.editData.scoringOption.answers;

    this.previewData = item;

    this.preview = true;

    //    item.stimulus = content;
  }

  returnPreviewData() {
    this.preview = false;
    setTimeout(() => {
      const editor = tinymce.get("abc");
      if (!editor) return;

      const selectBoxes = editor.getDoc().getElementsByTagName("select");
      Array.from(selectBoxes).forEach(
        (selectBox: HTMLSelectElement, index: number) => {
          // First, ensure all options from preview are present
          const responses =
            this.previewData.possibleResponses[index]?.responses || [];
          const correctAnswer = this.previewData.scoringOption.answers[index];

          // Find and select the correct answer
          for (let i = 2; i < selectBox.options.length; i++) {
            const option = selectBox.options[i];
            if (option.label.trim() === correctAnswer) {
              selectBox.selectedIndex = i;
              break;
            }
          }
        }
      );

      // Force TinyMCE to recognize the changes
      editor.fire("change");
    }, 200);
  }

  back() {
    this.location.back();
  }

  approveQuestion(itemForm: any) {
    this.updateItem(itemForm, "approve");
  }

  updateItem(itemForm?: any, status?: string) {
    let item = this.buildItem(itemForm);
    item.itemId = this.editData.id;

    this.responses = [];

    console.log(this.editData, "edit data");

    console.log("called me");

    const original_content = "";

    this.content = tinymce.get("abc").getDoc().getElementsByTagName("select");
    for (let i = 0; i < this.content.length; i++) {
      item.scoringOption.answers.push(
        this.content[i].selectedOptions[0].label.trim()
      );
    }
    for (let i = 0; i < this.content.length; i++) {
      let possibleResponse: Responses = new Responses();
      let options: string[] = [];
      for (let j = 2; j < this.content[i].options.length; j++) {
        options.push(this.content[i].options[j].label.trim());
      }
      possibleResponse.responses = options.map((option) => option.trim());
      possibleResponse.responses = options;
      this.responses.push(possibleResponse);
    }

    item.possibleResponses = this.responses;

    console.log(item);

    let content = tinymce.activeEditor.getContent();
    let newContent = content.replaceAll(
      /<select[^>]*>[\s\S]*?<\/select>/g,
      "{{response}}"
    );
    tinymce.get("abc").dom.select();

    item.stimulus = newContent;

    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    if (
      this.currentUser.authorities.includes("AUTHOR") &&
      this.itemService.currentSubjectModerationEnabled
    ) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    }

    if (this.itemService.currentSubjectModerationEnabled) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }
    console.log(original_content, "original");
    console.log(item.stimulus);

    // this.saveFunction(item, "save");
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

    this.itemService.edit_cloze_dropdown(this.editData.id, item).subscribe(
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

  submitRejection(questionRejectionForm?: any) {
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
  ngOnDestroy(): void {
   this.itemUtil.previewItem = false
    
  }

  openConfirmationModal(content: any){
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      windowClass: 'modal-holder'
    });

  }
}
