import { ItemTypes } from "./../models/item-types";
import { ItemServiceService } from "src/app/shared/item-services/item-service.service";
import { Component, OnInit, Input, ViewChild, OnDestroy } from "@angular/core";
//import {getTinymce as Tmce} from "@tinymce/tinymce-angular/TinyMCE";
import { EditorComponent } from "@tinymce/tinymce-angular";
import { Browser } from "leaflet";
import { imageUpload } from "../utility/FileUpload";
import { FileUploader } from "ng2-file-upload";
import { newClozeDropDown } from "../utility/ClozeTextUtil";
import { NewClozeItem } from "./model/new-cloze-item.model";
import { DefaultItemProperties } from "../models/default-item-properties";
import { ItemTagsDtos } from "../models/item-tags-dtos";
import { Option } from "../models/option";
import { ScoringTypeEnum } from "../models/scoring-type-enum";
import { MatchingRuleEnums } from "../models/matching-rule-enums";
import { ItemUtilitiesService } from "../item-utilities.service";
import { ItemHttpService } from "../item-http.service";
import { HttpErrorResponse } from "@angular/common/http";
import Swal from "sweetalert2";
import { Account } from "src/app/authentication/model/account.model";
import { UserService } from "src/app/shared/user.service";
import { ItemStatusEnum } from "../models/item-status-enum";
import { NotifierService } from "angular-notifier";
import { Location } from "@angular/common";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RejectionReason } from "../models/rejection-reason";
import { finalize } from "rxjs/operators";
import { ItemTagComponent } from "../item-tag/item-tag.component";

declare var tinymce: any;
declare const MathJax: any;

// Load WIRISplugins.js dynamically
// const jsDemoImagesTransform = document.createElement("script");
// jsDemoImagesTransform.type = "text/javascript";
// jsDemoImagesTransform.src =
//   "https://www.wiris.net/demo/plugins/app/WIRISplugins.js?viewer=image";
// // Load generated scripts.
// document.head.appendChild(jsDemoImagesTransform);

@Component({
  selector: "app-cloze",
  templateUrl: "./cloze.component.html",
  styleUrls: ["./cloze.component.scss"],
})
export class ClozeComponent implements OnInit, OnDestroy {
  @Input() selectedItemType!: string;
  @Input() formType!: string;
  @Input() editData!: any;
  @ViewChild("tagRef") tagRef: ItemTagComponent;

  editor: any;

  dropdownCount: any = 0;

  input_boxes: HTMLInputElement[] = [];

  currentUser!: Account;

  breadCrumbItems!: Array<{}>;

  displayTagModal = false;

  preview: boolean = false;

  previewData: any;

  selectedIndexes: Set<number> = new Set();

  defaultItemProperties: DefaultItemProperties = new DefaultItemProperties();

  uploader: FileUploader;

  tags: ItemTagsDtos[] = [];

  options: Option[] = [];

  scoringType: string[];

  matchingRule: string[];

  itemStatus!: string;

  temporalStimulus: string;

  difficultyLevels: Array<number> = [1, 2, 3, 4, 5];

  publishingItem: boolean = false;

  passageWorkFlow: boolean = this.itemUtil.passageItemWorkflow;

  editDataResponseFieldsPositions: any[] = [];
  editDataResponseFields: any[] = [];
  moderationStatus: boolean = false;
  newRejectionReason: RejectionReason = new RejectionReason();
  updatingItem: boolean = false;
  processingRejection: boolean = false;

  constructor(
    private itemService: ItemHttpService,
    public itemUtil: ItemUtilitiesService,
    private userService: UserService,
    private notifier: NotifierService,
    private location: Location,
    private modalService: NgbModal
  ) {
    this.moderationStatus = this.itemService.currentSubjectModerationEnabled;
    this.uploader = new FileUploader({
      url: "//post",
      disableMultipart: false,
      autoUpload: true,
      method: "post",
      itemAlias: "attachment",
      allowedFileType: ["image"],
    });
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
    this.matchingRule = Object.values(MatchingRuleEnums);
    this.defaultItemProperties.scoringOption.matchingRule =
      MatchingRuleEnums.EXACT_MATCH;

    this.defaultItemProperties.scoringOption.ignoreLeadingAndTrailingSpaces =
      true;

    if (this.editData) {
      this.tags = this.editData.itemTagDTOs;
      this.editData.stimulus = this.editData.stimulus
        .split("{{response}}")
        .join('<input type="text"/>');
      this.defaultItemProperties.stimulus = this.editData.stimulus;
      this.defaultItemProperties.reference = this.editData.reference;
      this.defaultItemProperties.difficultyLevel =
        this.editData.difficultyLevel;
      this.defaultItemProperties.scoringOption.answers =
        this.editData.scoringOption.answers;
      this.defaultItemProperties.scoringOption.score =
        this.editData.scoringOption.score;
      this.options = this.editData.options;
      this.defaultItemProperties.scoringOption.autoScore =
        this.editData.scoringOption.autoScore;

      this.defaultItemProperties.scoringOption.ignoreLeadingAndTrailingSpaces =
        this.editData.scoringOption.ignoreLeadingAndTrailingSpaces;
      this.defaultItemProperties.scoringOption.penalty =
        this.editData.scoringOption.penalty;

      this.defaultItemProperties.scoringOption.matchingRule =
        this.editData.scoringOption.matchingRule;
      this.defaultItemProperties.scoringOption.scoringType =
        this.editData.scoringOption.scoringType;
    } else {
      this.defaultItemProperties.scoringOption.autoScore = true;

      this.defaultItemProperties.difficultyLevel = 1;
      this.defaultItemProperties.scoringOption.ignoreLeadingAndTrailingSpaces =
        true;
    }
  }

  logEditor(event: any) {
    let input_boxes: HTMLInputElement[] = tinymce
      .get("xyz")
      .getDoc()
      .querySelectorAll("input");
    // console.log('this are the input fields', input_boxes);

    if (this.previewData) {
      input_boxes.forEach((input, i) => {
        input.value = this.previewData.scoringOption.answers[i];
      });
    }

    if (this.editData) {
      // console.log(this.editData);
      input_boxes.forEach((input, i) => {
        input.value = this.editData.scoringOption.answers[i];
      });
    }
  }

  option: Object = {
    min_height: 300,
    max_height: 500,
    menubar: true,
    branding: false,
    base_url: "/tinymce",
    suffix: ".min",
    plugins: "image autoresize media table quickbars lists charmap paste",
    file_picker_callback: imageUpload,
    paste_preprocess: function (pl, o) {
      // console.log(o);
    },
    /* images_upload_url:'http://192.168.0.131:8081/itembank/api/images',
    images_upload_credentials:true,*/
    setup: this.setup,
    draggable_modal: true,
    external_plugins: {
      //tiny_mce_wiris: `${window.location.href}/node_modules/@wiris/mathtype-tinymce5/plugin.min.js`,
    },
    toolbar:
      // myimage2 **former image toolbar icon
      "undo redo | formatselect | bold italic underline | subscript superscript | alignleft aligncenter alignright alignjustify myimage | bullist numlist outdent indent | table quickimage quicklink equation-editor | charmap",
  };

  changeFunc = function () {
    // console.log('i am called');
    alert("on change");
  };

  setup(editor_: any) {
    let editor = editor_;
    //this.editor = editor_;
    let count = 0;
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

    if (this.editData) {
      this.input_boxes = tinymce
        .get("xyz")
        .getContent()
        .querySelectorAll("input[type=text]");

      for (let i = 0; i < this.input_boxes.length; i++) {
        this.input_boxes[i].value = this.editData.scoringOption.answers[i];
      }
    }
    //To add a custom  icon:
    editor.ui.registry.addIcon(
      "cloze",
      '<svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59375 25.25V5.25H7.21875V6.78125H4.34375V23.7188H7.21875V25.25H2.59375ZM11.002 22.125C10.6165 22.125 10.2858 21.987 10.0098 21.7109C9.73372 21.4349 9.5957 21.1042 9.5957 20.7187C9.5957 20.3333 9.73372 20.0026 10.0098 19.7266C10.2858 19.4505 10.6165 19.3125 11.002 19.3125C11.3874 19.3125 11.7181 19.4505 11.9941 19.7266C12.2702 20.0026 12.4082 20.3333 12.4082 20.7187C12.4082 20.974 12.3431 21.2083 12.2129 21.4219C12.0879 21.6354 11.9186 21.8073 11.7051 21.9375C11.4967 22.0625 11.2624 22.125 11.002 22.125ZM17.0605 22.125C16.6751 22.125 16.3444 21.987 16.0684 21.7109C15.7923 21.4349 15.6543 21.1042 15.6543 20.7187C15.6543 20.3333 15.7923 20.0026 16.0684 19.7266C16.3444 19.4505 16.6751 19.3125 17.0605 19.3125C17.446 19.3125 17.7767 19.4505 18.0527 19.7266C18.3288 20.0026 18.4668 20.3333 18.4668 20.7187C18.4668 20.974 18.4017 21.2083 18.2715 21.4219C18.1465 21.6354 17.9772 21.8073 17.7637 21.9375C17.5553 22.0625 17.321 22.125 17.0605 22.125ZM23.1191 22.125C22.7337 22.125 22.403 21.987 22.127 21.7109C21.8509 21.4349 21.7129 21.1042 21.7129 20.7187C21.7129 20.3333 21.8509 20.0026 22.127 19.7266C22.403 19.4505 22.7337 19.3125 23.1191 19.3125C23.5046 19.3125 23.8353 19.4505 24.1113 19.7266C24.3874 20.0026 24.5254 20.3333 24.5254 20.7187C24.5254 20.974 24.4603 21.2083 24.3301 21.4219C24.2051 21.6354 24.0358 21.8073 23.8223 21.9375C23.6139 22.0625 23.3796 22.125 23.1191 22.125ZM31.5215 5.25V25.25H26.8965V23.7188H29.7715V6.78125H26.8965V5.25H31.5215Z" fill="#1E1E1E"/></svg>'
    );

    editor.ui.registry.addButton("myimage", {
      icon: "cloze",
      onAction(): void {
        // editor.execCommand('openImageDialog', false, null);
        //console.log('button clicked');
        editor.insertContent('<input type="text" />');
        /* console.log(editor.getDoc().querySelectorAll('input[type=text]'));
        console.log(count + ' this is count'); */
        ++count;
        //newClozeDropDown(editor,count);

        let newItem = tinymce.get("xyz").getContent();
        newItem = newItem.replace(
          /^.*[a-zA-Z]+\s[a-zA-Z]+=\\"(?:[^"]|"")*"\s\/>$/g,
          "{{response}}"
        );
        // console.log(newItem);
      },
    });

    editor.ui.registry.addButton("myimage2", {
      text: "image 2",
      onAction(): void {
        editor.execCommand("openImageDialog", false, null);
      },
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

  recieveTag(tag: any) {
    this.tags = tag;
  }

  // buildItem(form?: any) {
  //   let item: NewClozeItem = new NewClozeItem();

  //   item.options = []
  //   item.reference = this.defaultItemProperties.reference;
  //   item.stimulus = this.defaultItemProperties.stimulus;
  //   item.itemType = ItemTypes.CLOZE_TEXT;
  //   item.scoringOption = this.defaultItemProperties.scoringOption;
  //   item.difficultyLevel = this.defaultItemProperties.difficultyLevel;
  //   item.shuffleOptions = false;
  //   item.subjectId = this.itemUtil.currentItemTrail.subjectId;
  //   item.topicId = this.itemUtil.currentItemTrail.topicId;
  //   item.subtopicId = this.itemUtil.currentItemTrail.subtopicId
  //     ? this.itemUtil.currentItemTrail.subtopicId
  //     : "";

  //   if (this.itemUtil.passageId) {
  //     item.passageId = this.itemUtil.passageId;
  //   }
  //   item.itemTagsDTOS = this.tags.map((tag) => {
  //     return { tagId: tag.tagId };
  //   });

  //   if (
  //     !this.currentUser.authorities.includes("MODERATOR") &&
  //     !this.currentUser.authorities.includes("ADMIN")
  //   ) {
  //     item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
  //   } else {
  //     item.itemStatus = ItemStatusEnum.PUBLISHED;
  //   }

  //   if (this.editData) {
  //     item.options = this.options;
  //     // console.log('options after build:', item.options);
  //   }

  //   /* this.selectedIndexes.forEach((value) => {
  //     this.item.scoringOption.answer.push(value);
  //   }); */
  //   return item;
  // }

  saveItem(form: any, type?: any) {
    const original_content = '<input type="text" />';
    let item = this.buildItem(form);

    console.log(item);

    item.scoringOption.answers = [];
    item.options =[]
    // this.options = []
    this.input_boxes = tinymce
      .get("xyz")
      .getDoc()
      .querySelectorAll("input[type=text]");

    // Loop through each input box and process the options
    for (let i = 0; i < this.input_boxes.length; i++) {
      let inputValue = this.input_boxes[i].value.trim();

      // Check if an option with the same value (index) already exists
      let existingOption = this.options.find(
        (option) => option.value === i.toString()
      );

      if (existingOption) {
        // Update the label of the existing option
        existingOption.label = inputValue;
      } else {
        // Create a new option if it doesn't exist
        let opt = new Option();
        opt.value = i.toString(); // Set value to the index as a string
        opt.label = inputValue; // Set label to the answer (input value)
        this.options.push(opt);
      }

      // Update scoring answers with the current input value
      item.scoringOption.answers.push(inputValue.trim());
    }

    let content = tinymce.activeEditor.getContent();
    let newContent = content.replaceAll(original_content, "{{response}}");
    tinymce.get("xyz").dom.select();

    item.options = this.options.map((option) => {
      return { label: option.label.trim(), value: option.value };
    });
    item.stimulus = newContent;

    // Validate the item before saving
    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    console.log(item);
    this.publishingItem = true;
    this.publishLoader();
    this.saveFunction(item, type);
  }

  saveToDraft() {}

  saveAndNew() {}

  saveItemToPassage(itemForm?: any) {
    const original_content = '<input type="text" />';
    let item = this.buildItem(itemForm);

    item.scoringOption.answers = [];
    this.input_boxes = tinymce
      .get("xyz")
      .getDoc()
      .querySelectorAll("input[type=text]");

    for (let i = 0; i < this.input_boxes.length; i++) {
      let opt = new Option();
      item.scoringOption.answers.push(this.input_boxes[i].value);
      opt.label = this.input_boxes[i].value;
      opt.value = i + "";
      this.options.push(opt);
      //console.log(item.scoringOption.answers);
    }

    let content = tinymce.activeEditor.getContent();
    let newContent = content.replaceAll(original_content, "{{response}}");
    tinymce.get("xyz").dom.select();

    //console.log(newContent);
    item.options = this.options;
    item.stimulus = newContent;

    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    this.publishingItem = true;
    this.publishLoader();

    if (this.moderationStatus) {
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
      msg = `A new question has been created successfully`;
    } else if (type == "draft") {
      item.itemStatus = ItemStatusEnum.DRAFT;
      msg = `A new question has been saved to draft successfully`;
    } else if (type == "passage-item") {
      msg = `A new question has been added to the passage successfully`;
    }

    if (
      this.currentUser.authorities.includes("AUTHOR") &&
      this.moderationStatus
    ) {
      msg = `item successfully sent for moderation`;
    }
    this.itemService.createClozeItem(item).subscribe(
      (value) => {
        if (value) {
          this.publishingItem = false;
          this.publishLoader();
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: msg,
          });
        }

        if (type === "save" || type === "draft") {
          this.back();
        }

        if (type == "save_and_new" || type !== "") {
          this.defaultItemProperties = new DefaultItemProperties();
          this.tags = [];
          this.defaultItemProperties.scoringOption.autoScore = true;
          this.defaultItemProperties.difficultyLevel = 1;
          this.defaultItemProperties.shuffleOptions = true;

          this.options = [];
          this.tagRef.Tag = [];
          this.tagRef.ngOnInit();
          this.tagRef.sendTag([]);
          this.ngOnInit();
        }
      },
      (err: HttpErrorResponse) => {
        this.publishingItem = false;
        this.publishLoader();
        Swal.close();
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: `${err.error.message}`,
        });
        item.options = [];
      }
    );
  }

  setItemType(value: string) {
    this.selectedItemType = value;
  }


  doPreview(itemForm: any) {
    let item = this.buildItem(itemForm);

    console.log(item, "item");

    // If we're editing, clear options and answers in editData
    if (this.editData) {
        this.editData.options = [];
        this.editData.scoringOption.answers = [];
    }

    // Reset options and answers for the new item
    item.scoringOption.answers = [];
    item.options = [];

    // Getting all the input elements (cloze select tags)
    let collection: HTMLInputElement[] = tinymce
        .get("xyz")
        .getDoc()
        .getElementsByTagName("input");

    // Loop through each input element
    for (let i = 0; i < collection.length; i++) {
        let new_option = new Option();
        let answer = collection[i].value;
        new_option.label = answer;
        new_option.value = i + "";

        // If we are editing, ensure no duplicates in editData
        if (this.editData) {
            const existingOption = this.editData.options.find(option => option.label === new_option.label);
            if (!existingOption) {
                this.editData.options.push(new_option);
                this.editData.scoringOption.answers.push(answer);
            }
        }

        // Ensure no duplicates in item
        const existingItemOption = item.options.find(option => option.label === new_option.label);
        if (!existingItemOption) {
            item.options.push(new_option);
            item.scoringOption.answers.push(answer);
        }
    }

    // Handle the final options assignment if editData exists
    if (this.editData) {
        item.options = this.options;  // This assignment may need validation depending on the use case
    }

    // Get the transformed content from TinyMCE
    let content = tinymce.activeEditor.getContent();

    // Replace the <input> tags with {{response}}
    let openingTagIndex = content.indexOf("<input");
    while (openingTagIndex != -1) {
        let closingTagIndex = content.indexOf("/>", openingTagIndex);
        let selectTag = content.substring(openingTagIndex, closingTagIndex + 2);
        content = content.replace(selectTag, "{{response}}");
        openingTagIndex = content.indexOf("<input");
    }

    // Assign the transformed content to the stimulus
    item.stimulus = content;

    // If we are editing, update the editData stimulus and validate
    if (this.editData) {
        this.editData.stimulus = item.stimulus;
        this.previewData = item;
        let validated = this.itemService.validateItem(this.previewData);

        if (!validated) {
            this.itemUtil.previewItem = false;
            return;
        }
    } else {
        this.previewData = item;
    }

    // Final validation of the item
    let validated = this.itemService.validateItem(item);

    if (!validated) {
        this.itemUtil.previewItem = false;
        return;
    }

    // Mark the preview as valid
    this.itemUtil.previewItem = true;
}

buildItem(form?: any) {
    let item: NewClozeItem = new NewClozeItem();

    // Initialize the item properties
    item.options = [];
    item.reference = this.defaultItemProperties.reference;
    item.stimulus = this.defaultItemProperties.stimulus;
    item.itemType = ItemTypes.CLOZE_TEXT;
    item.scoringOption = this.defaultItemProperties.scoringOption;
    item.difficultyLevel = this.defaultItemProperties.difficultyLevel;
    item.shuffleOptions = false;
    item.subjectId = this.itemUtil.currentItemTrail.subjectId;
    item.topicId = this.itemUtil.currentItemTrail.topicId;
    item.subtopicId = this.itemUtil.currentItemTrail.subtopicId || "";

    if (this.itemUtil.passageId) {
        item.passageId = this.itemUtil.passageId;
    }

    // Add tags if applicable
    item.itemTagsDTOS = this.tags.map((tag) => {
        return { tagId: tag.tagId };
    });

    // Set the item status based on user role
    if (
        !this.currentUser.authorities.includes("MODERATOR") &&
        !this.currentUser.authorities.includes("ADMIN")
    ) {
        item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
        item.itemStatus = ItemStatusEnum.PUBLISHED;
    }

    // If we're editing, set options from editData
    if (this.editData) {
        item.options = this.options;
    }

    return item;
}


  returnData($event: any) {
    this.preview = false;
    this.itemUtil.previewItem = false;
  }

  updateItem(itemForm?: any, status?: string) {
    this.updatingItem = true;
    const original_content = '<input type="text" />';
    let item = this.buildItem(itemForm);
    //item.options = this.editData.options;
    item.itemId = this.editData.id;
    item.stimulus = item.stimulus.replaceAll(original_content, "{{response}}");

    this.input_boxes = tinymce
      .get("xyz")
      .getDoc()
      .querySelectorAll("input[type=text]");

    // console.log(this.input_boxes);
    // console.log(this.editData.options);
    item.scoringOption.answers = [];

    for (
      let i = (this.editData.options.length = 0);
      i < this.input_boxes.length;
      i++
    ) {
      let opt = new Option();
      item.scoringOption.answers.push(this.input_boxes[i].value);
      opt.label = this.input_boxes[i].value;
      opt.value = i + "";
      this.editData.options.push(opt);
      // console.log('current answer iteration:', item.scoringOption.answers);
      // console.log('current option iteration:', opt)
    }

    item.options = this.editData.options;
    // console.log(this.editData.options);

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
          !this.currentUser.authorities.includes("MODERATOR") &&
          !this.currentUser.authorities.includes("ADMIN") &&
          (this.moderationStatus ||
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

    this.itemService
      .edit_cloze_text(this.editData.id, item)
      .pipe(finalize(() => (this.updatingItem = true)))
      .subscribe(
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

  openConfirmationModal(content: any){
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      windowClass: 'modal-holder'
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
