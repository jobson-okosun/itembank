import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { FileUploader } from 'ng2-file-upload';
import { Account } from 'src/app/authentication/model/account.model';
import { UserService } from 'src/app/shared/user.service';
import Swal from 'sweetalert2';
import { ItemHttpService } from '../item-http.service';
import { ItemTagComponent } from '../item-tag/item-tag.component';
import { ItemUtilitiesService } from '../item-utilities.service';
import { DefaultItemProperties } from '../models/default-item-properties';
import { ItemStatusEnum } from '../models/item-status-enum';
import { ItemTagsDtos } from '../models/item-tags-dtos';
import { ItemTypes } from '../models/item-types';
import { MatchingRuleEnums } from '../models/matching-rule-enums';
import { RejectionReason } from '../models/rejection-reason';
import { Responses } from '../models/responses.model';
import { ScoringTypeEnum } from '../models/scoring-type-enum';
import { imageUpload } from '../utility/FileUpload';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { ClozeRadioSelect } from './cloze-radio-select-model';
import { newClozeDropDown, newClozeRadioContainer, openClozeOptionsModal } from '../utility/ClozeTextUtil';
import katex from 'katex';

declare var tinymce: any;
declare const MathJax: any;

@Component({
  selector: 'app-cloze-radio-select',
  templateUrl: './cloze-radio-select.component.html',
  styleUrls: ['./cloze-radio-select.component.scss']
})
export class ClozeRadioSelectComponent implements OnInit {

  @Input() selectedItemType!: string;
  @Input() formType!: string;
  @Input() editData!: any;
  @Input() itemTrailInfo!: any;
  @ViewChild("tagRef") tagRef: ItemTagComponent;
  @Output() stimulus = new EventEmitter<string>();
  editor: any;

  editDataStatus: boolean = false;
  newEditData: ClozeRadioSelect = new ClozeRadioSelect();
  dropdownCount: any = 0;

  content: HTMLSpanElement[] = [];

  processingApprove: boolean = false;

  responses: Responses[] = [];

  breadCrumbItems!: Array<{}>;

  displayTagModal = false;

  preview: boolean = false;

  previewData: ClozeRadioSelect;

  selectedIndexes: Set<number> = new Set();

  tags: ItemTagsDtos[] = [];

  @ViewChild('scoringConfirmationModal') scoringConfirmationModal: any;
  
  pendingSaveAction: any;

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

  ngAfterViewInit() { }

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

    this.subjectModerationStatus = this.itemService.currentSubjectModerationEnabled;

    if (this.editData) {
      // Normalize old possibleResponses string array to objects
      if (this.editData.possibleResponses) {
        this.editData.possibleResponses = this.editData.possibleResponses.map((pr: any) => {
          if (pr.responses) {
            pr.responses = pr.responses.map((resp: any, idx: number) => {
              if (typeof resp === 'string') {
                return { label: resp, value: String(idx) };
              }
              return resp;
            });
          }
          return pr;
        });
      }

      this.defaultItemProperties.scoringOption.answers =
        this.editData.scoringOption.answers;
      this.defaultItemProperties.reference = this.editData.reference;

      const selectTemplate = `
       <span class="cloze-radio-container mceNonEditable" contenteditable="false" data-mce-style="display:inline-flex; flex-wrap:wrap; border:1px solid #ccc; padding: 3px; gap:5px;" style="display: inline-flex; flex-wrap: wrap; border: 1px solid rgb(204, 204, 204); padding: 3px; gap: 5px;" data-mce-selected="1">
          <span class="options-wrapper" contenteditable="true" data-mce-style="display:flex; gap:5px; flex-wrap:wrap; align-items:center;" style="display: flex; gap: 5px; flex-wrap: wrap; align-items: center;"></span>

          <span class="actions" data-mce-style="display:inline-flex; align-items:center;" style="display: inline-flex; align-items: center;">
            <button type="button" class="add-remove-btn" contenteditable="false" data-mce-style="padding:5px; font-size:12px; cursor:pointer;" style="padding: 5px; font-size: 12px; cursor: pointer;">Add / Edit</button>
          </span>
        </span>
      `;


      let modifiedStimulus = this.editData.stimulus;
      const responseMatches = modifiedStimulus.match(/{{response}}/g) || [];

      responseMatches.forEach(() => {
        modifiedStimulus = modifiedStimulus.replace(
          "{{response}}",
          selectTemplate
        );
      });

      this.defaultItemProperties.stimulus = modifiedStimulus;

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
    }
  }

  onStimulusChange(value: string): void {
    this.stimulus.emit(value);
  }

  logEditor(event: any) {
    if (this.editData) {
      let selectContainers: HTMLElement[] = tinymce
        .get("abc")
        .getDoc()
        .querySelectorAll(".cloze-radio-container");

      this.selectBoxesLength = selectContainers.length;

      selectContainers.forEach((container, i) => {
        container.setAttribute("id", i + "");
        const groupName = `option-group-${i + 1}`;
        const containerId = `container-${i + 1}`;

        const responses = this.editData.possibleResponses[i].responses;
        const correctAnswer = this.editData.scoringOption.answers[i];

        const optionsWrapper = container.querySelector('.options-wrapper');

        if (optionsWrapper && optionsWrapper.children.length === 0) {
          responses.forEach((response: any, j: number) => {
            const responseLabel = response.label !== undefined ? response.label : response;
            const responseValue = response.value !== undefined ? response.value : String(j);

            let option = tinymce.activeEditor.dom.create("span", {
              class: "option",
              style: "display:inline-flex; align-items:center; gap:3px; border:1px dashed #ccc;",
              contenteditable: "false"
            });

            let input = tinymce.activeEditor.dom.create("input", {
              type: "radio",
              contenteditable: "true",
              name: groupName,
              value: responseValue
            });

            input.checked = String(responseValue) === String(correctAnswer)

            let label = tinymce.activeEditor.dom.create(
              "label",
              { for: `${containerId}-option-${j}` },
              responseLabel
            );

            option.appendChild(input);
            option.appendChild(label);

            optionsWrapper.appendChild(option)
          });
        }

        // Insert space after the last select box if it's the last one
        if (i === selectContainers.length - 1) {
          let p = document.createElement("p");
          p.innerHTML = "&nbsp;";
          tinymce.activeEditor.getDoc().body.appendChild(p);
        }

        // Add event listener for handling "add/remove"
        container.querySelector('.add-remove-btn').addEventListener("click", (event) => {
          let btn = event.currentTarget as HTMLButtonElement;
        });

      });
    }
  }

  option: Object = {
    min_height: 300,
    max_height: 500,
    menubar: true,
    base_url: "/tinymce",
    content_css: '/katex/dist/katex.min.css',
    branding: false,
    statusbar: false,
    inline_boundaries: false,
    suffix: ".min",
    plugins: "image autoresize media table quickbars lists charmap",
    file_picker_callback: imageUpload,
    setup: this.setup,
    draggable_modal: true,
    extended_valid_elements: 'span[*],svg[*],path[*],g[*],defs[*],line[*],rect[*],circle[*],ellipse[*],polygon[*],polyline[*],math[*],semantics[*],annotation[*],annotation-xml[*],merror[*],mtext[*],mspace[*],mover[*],munder[*],munderover[*],mstack[*],mrow[*],msrow[*],mfenced[*],menclose[*],mphantom[*],msup[*],msub[*],msubsup[*],mmultiscripts[*],mi[*],mn[*],mo[*],ms[*],mtable[*],mtr[*],mtd[*],mlabeledtr[*],mfrac[*],mfraction[*],msline[*],msqrt[*],mroot[*],mscarries[*],mscarry[*]',
    toolbar:
      "undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify myimage myimage2 bullist numlist outdent indent table quickimage quicklink equation-editor | subscript superscript charmap",
  };

  changeFunc = function () {
    alert("on change");
  };

  recieveTag(tag: any) {
    this.tags = tag;
  }

  setup(editor_: any) {
    let editor = editor_;
    this.editor = editor;
    let activeEquation: HTMLElement | null = null;

    let count = 0;
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
            // Local KaTeX Rendering
            const renderedHtml = katex.renderToString(updatedLatex, { throwOnError: false });
            if (activeEquation.tagName === 'IMG') {
              // Replace the old IMG element with a new SPAN element
              const newSpan = document.createElement('span');
              newSpan.className = 'math-expression';
              newSpan.setAttribute('data-latex', updatedLatex);
              newSpan.setAttribute('contenteditable', 'false');
              newSpan.style.display = 'inline-block';
              newSpan.style.verticalAlign = 'middle';
              newSpan.style.margin = '4px 5px';
              newSpan.style.padding = '2px 0';
              newSpan.innerHTML = renderedHtml;
              activeEquation.parentNode?.replaceChild(newSpan, activeEquation);
            } else {
              // It is already a SPAN element
              activeEquation.setAttribute('data-latex', updatedLatex);
              activeEquation.setAttribute('contenteditable', 'false');
              activeEquation.style.display = 'inline-block';
              activeEquation.style.verticalAlign = 'middle';
              activeEquation.innerHTML = renderedHtml;
            }
            editor.setDirty(true);
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
        ++count;
        newClozeRadioContainer(editor, count);
        // newClozeDropDown(editor, count);
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

    editor.on('click', function (e) {
      const target = e.target as HTMLElement;

      if (target && target.classList.contains('add-remove-btn')) {
        e.preventDefault();
        e.stopPropagation();

        const container = target.closest('.cloze-radio-container') as HTMLElement;
        if (!container) return;

        const radioInput =
          container.querySelector('input[type="radio"]') as HTMLInputElement | null;

        const groupName = radioInput?.name || 'option-group-unknown';

        openClozeOptionsModal(container, groupName);
      }
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
          onSubmit: async (api) => {
            const mathField = document.getElementById("mathfield") as any;
            const latex = mathField.getValue();

            // Ensure cursor placement is outside the equation
            editor.selection.collapse(false);

            // Local KaTeX Rendering
            const renderedHtml = katex.renderToString(latex, { throwOnError: false });
            const content = `<span class="math-expression" data-latex="${latex}" contenteditable="false" style="display: inline-block; vertical-align: middle; margin: 4px 5px; padding: 2px 0;">${renderedHtml}</span>&nbsp;`;
            editor.insertContent(content);
            editor.selection.collapse(false);

            api.close();
          },
        });
      },
    });

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
          let option = document.createElement("option");
          option.label = api.getData().option_data;
          option.value = Math.random() + "";

          v.select.add(option);

          api.close();
        },
        onAction: function (api, details) {
          let indexToDelete = -1;
          if (details.name == "deleteOption") {
            let optToDelete = api.getData().option_to_delete;
            if (optToDelete == "selectOption") {
              alert("Please select an option to delete ");
            } else {
              for (let i = 0; i < v.select.options.length; i++) {
                if (v.select.item(i).value == optToDelete) {
                  indexToDelete = i;
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
          let blob = api.getData().url;
          editor.insertContent(`<img src = '${blob.value}'`);
          var reader = new FileReader();
          reader.readAsDataURL(blob.value);
          reader.onloadend = function () {
            var base64String = reader.result;
            editor.insertContent(`<img src = '${blob.value}'`);
          };
          api.close();
        },
      });
    });

    if (this.editDataStatus) {
    }
  }

  buildItem(form?: any) {
    let item: ClozeRadioSelect = new ClozeRadioSelect();

    item.reference = this.defaultItemProperties.reference;
    item.stimulus = this.defaultItemProperties.stimulus;
    item.shuffleOptions = false;
    item.itemType = ItemTypes.CLOZE_RADIO;
    item.difficultyLevel = this.defaultItemProperties.difficultyLevel;

    item.subjectId = this.itemUtil.currentItemTrail.subjectId;
    item.topicId = this.itemUtil.currentItemTrail.topicId;
    item.subtopicId = this.itemUtil.currentItemTrail.subtopicId
      ? this.itemUtil.currentItemTrail.subtopicId
      : "";

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

  validateClozeRadioContainers(editor: any): boolean {
    if (!editor) return false;
    const doc = editor.getDoc();
    const containers: NodeListOf<HTMLElement> = doc.querySelectorAll(".cloze-radio-container");

    if (containers.length === 0) {
      this.notifier.notify("error", "Please add at least one radio select block to your question stimulus.");
      return false;
    }

    for (let i = 0; i < containers.length; i++) {
      const container = containers[i];
      const optionNodes = container.querySelectorAll<HTMLElement>(".option");

      if (optionNodes.length === 0) {
        this.notifier.notify("error", `Radio block ${i + 1} does not contain any options. Please add options or remove the block.`);
        return false;
      }

      let selectedCount = 0;
      let hasEmptyOption = false;

      optionNodes.forEach(opt => {
        const labelText = opt.querySelector("label")?.textContent?.trim() || "";
        if (labelText === "") {
          hasEmptyOption = true;
        }
        const radio = opt.querySelector<HTMLInputElement>('input[type="radio"]');
        if (radio?.checked) {
          selectedCount++;
        }
      });

      if (hasEmptyOption) {
        this.notifier.notify("error", `Option labels in Radio block ${i + 1} cannot be empty or contain only spaces.`);
        return false;
      }

      if (selectedCount === 0) {
        this.notifier.notify("error", `Please select a correct answer for Radio block ${i + 1}.`);
        return false;
      }
    }

    return true;
  }

  buildClozeRadioPayload(editor: any) {
    const doc = editor.getDoc();
    const containers: NodeListOf<HTMLElement> = doc.querySelectorAll(".cloze-radio-container");

    const answers: string[] = [];
    const possibleResponses: Responses[] = [];

    containers.forEach(container => {

      const optionNodes = container.querySelectorAll<HTMLElement>(".option");

      const options: any[] = [];
      let correctAnswer = "";

      optionNodes.forEach(opt => {
        const label = opt.querySelector("label")?.textContent?.trim() || "";
        const radio = opt.querySelector<HTMLInputElement>('input[type="radio"]');

        if (!label) return;

        options.push({
          label: label,
          value: String(options.length)
        });

        if (radio?.checked) {
          correctAnswer = String(options.length - 1);
        }
      });

      answers.push(correctAnswer);

      const pr = new Responses();
      pr.responses = options;
      possibleResponses.push(pr);
    });

    const rawHtml = tinymce.activeEditor.getContent();

    const parser = new DOMParser();
    const docEL = parser.parseFromString(rawHtml, 'text/html');

    const q = docEL.querySelectorAll(".cloze-radio-container");
    q.forEach(el => {
      const placeholder = document.createTextNode("{{response}}");
      el.parentNode?.replaceChild(placeholder, el);
    });

    const stimulus = docEL.body.innerHTML;

    return {
      stimulus,
      answers,
      possibleResponses
    };
  }

  confirmScoringAndSave(action: () => void) {
    // TO DISABLE SCORING CONFIRMATION, UNCOMMENT THE LINE BELOW AND COMMENT THE REST:
    // action(); return;

    this.pendingSaveAction = action;
    this.modalService.open(this.scoringConfirmationModal, { centered: true });
  }

  proceedWithSave() {
    this.modalService.dismissAll();
    if (this.pendingSaveAction) {
      this.pendingSaveAction();
      this.pendingSaveAction = null;
    }
  }

  saveItem(itemForm: any, type?: string, skipScoringCheck: boolean = false) {
    if (!skipScoringCheck) {
      this.confirmScoringAndSave(() => this.saveItem(itemForm, type, true));
      return;
    }
    let item = this.buildItem(itemForm);

    const editor = tinymce.get("abc");
    if (!editor) return;

    if (!this.validateClozeRadioContainers(editor)) return;

    const payload = this.buildClozeRadioPayload(editor);

    item.scoringOption.answers = payload.answers;
    item.possibleResponses = payload.possibleResponses;
    item.stimulus = payload.stimulus;

    if (
      !this.currentUser.authorities.includes('MODERATOR') &&
      !this.currentUser.authorities.includes('ADMIN') && 
      !this.currentUser.authorities.includes('GROUP_ADMIN') &&
      this.itemService.currentSubjectModerationEnabled
    ) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }

    const validated = this.itemService.validateItem(item);
    if (!validated) return;

    this.saveFunction(item, "save");
  }

  saveToDraft(itemForm: any, skipScoringCheck: boolean = false) {
    if (!skipScoringCheck) {
      this.confirmScoringAndSave(() => this.saveToDraft(itemForm, true));
      return;
    }
    let item = this.buildItem(itemForm);

    const editor = tinymce.get("abc");
    if (!editor) return;

    if (!this.validateClozeRadioContainers(editor)) return;

    const payload = this.buildClozeRadioPayload(editor);

    item.scoringOption.answers = payload.answers;
    item.possibleResponses = payload.possibleResponses;
    item.stimulus = payload.stimulus;
    item.itemStatus = ItemStatusEnum.DRAFT;

    const validated = this.itemService.validateItem(item);
    if (!validated) return;

    this.saveFunction(item, "draft");
  }

  saveAndNew(itemForm: any, skipScoringCheck: boolean = false) {
    if (!skipScoringCheck) {
      this.confirmScoringAndSave(() => this.saveAndNew(itemForm, true));
      return;
    }
    let item = this.buildItem(itemForm);

    const editor = tinymce.get("abc");
    if (!editor) return;

    if (!this.validateClozeRadioContainers(editor)) return;

    const payload = this.buildClozeRadioPayload(editor);

    item.scoringOption.answers = payload.answers;
    item.possibleResponses = payload.possibleResponses;
    item.stimulus = payload.stimulus;
    item.itemStatus = ItemStatusEnum.DRAFT;

    if (
      !this.currentUser.authorities.includes('MODERATOR') &&
      !this.currentUser.authorities.includes('ADMIN') && 
      !this.currentUser.authorities.includes('GROUP_ADMIN') &&
      this.itemService.currentSubjectModerationEnabled
    ) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }

    const validated = this.itemService.validateItem(item);
    if (!validated) return;

    this.saveFunction(item, "save_and_new");
  }

  doPreview(itemForm: any) {

    if (!this.defaultItemProperties.stimulus) {
      this.notifier.notify('error', 'Please compose a question to preview');
      return;
    }

    // console.log(this.itemUtil.currentItemTrail)
    const item = this.buildItem(itemForm);

    const editor = tinymce.get("abc");
    if (!editor) return;

    if (!this.validateClozeRadioContainers(editor)) return;

    const payload = this.buildClozeRadioPayload(editor);

    item.scoringOption.answers = payload.answers;
    item.possibleResponses = payload.possibleResponses;
    item.stimulus = payload.stimulus;

    this.itemUtil.previewItem = true;
    this.previewData = item;
    this.preview = true;
  }

  saveFunction(item: any, type: string) {

        this.publishingItem = true;
    this.publishLoader();

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

    this.itemService.createClozeRadioItem(item).subscribe(
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

  returnPreviewData() {
    this.preview = false;

    setTimeout(() => {
      const editor = tinymce.get("abc");
      if (!editor) return;

      const selectContainers = editor
        .getDoc()
        .querySelectorAll(".cloze-radio-container");

      Array.from(selectContainers).forEach((container: HTMLDivElement, index: number) => {
        const correctAnswer = this.previewData.scoringOption.answers[index];
        const options = container.querySelectorAll<HTMLElement>(".option")

        for (let i = 0; i < Array.from(options).length; i++) {
          const option = Array.from(options)[i];
          const optionInput = option.querySelector('input[type="radio"]') as HTMLInputElement

          if (optionInput.value === String(correctAnswer) || optionInput.getAttribute('value') === String(correctAnswer)) {
            optionInput.checked = true;
            break;
          }
        }
      });

      editor.fire("change");
    }, 2000);
  }

  back() {
    this.location.back();
  }

  approveQuestion(itemForm: any) {
    this.updateItem(itemForm, "approve");
  }

  updateItem(itemForm?: any, status?: string, skipScoringCheck: boolean = false) {
    if (!skipScoringCheck) {
      this.confirmScoringAndSave(() => this.updateItem(itemForm, status, true));
      return;
    }
    let item = this.buildItem(itemForm);
    item.itemId = this.editData.id;

    this.responses = [];

    const editor = tinymce.get("abc");
    if (!editor) return;

    if (!this.validateClozeRadioContainers(editor)) return;

    const payload = this.buildClozeRadioPayload(editor);

    item.scoringOption.answers = payload.answers;
    item.possibleResponses = payload.possibleResponses;
    item.stimulus = payload.stimulus;

    const validated = this.itemService.validateItem(item);
    if (!validated) return;



    this.publishingItem = true;
    this.publishLoader('Updating your question, Please Wait...');

    switch (status) {
      case "save":
        if (
          !this.currentUser.authorities.includes('MODERATOR') &&
          !this.currentUser.authorities.includes('ADMIN') && 
          !this.currentUser.authorities.includes('GROUP_ADMIN') &&
          (this.subjectModerationStatus ||
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

    this.processingApprove = true;

    this.itemService.edit_cloze_radio(this.editData.id, item).subscribe(
      value => {
        this.publishingItem = false;
        Swal.close();
        if (value) {
          Swal.fire({
            title: "Congratulations!",
            text: "The question was successfully updated.",
            icon: "success",
          });
        }
        this.back();
        this.processingApprove = false;
        this.modalService.dismissAll();
      },
      (error: HttpErrorResponse) => {
        this.publishingItem = false;
        Swal.close();
        Swal.fire({
          icon: "error",
          html: `${error.error.message}`,
        });
        this.processingApprove = false;
      }
    );
  }

  openRejectionReasonModal(rejectionModal: any) {
    this.modalService.open(rejectionModal, { centered: true, size: "lg" });
  }

  submitRejection(questionRejectionForm?: any) {
    this.processingRejection = true;
    this.newRejectionReason.itemId = this.editData.id;

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

  openConfirmationModal(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      windowClass: 'modal-holder'
    });

  }
}
