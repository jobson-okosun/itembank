import { CdkDragEnd } from '@angular/cdk/drag-drop';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  HostListener,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { LabelImageText } from '../label-image-text/label-image-text.component';
import { MatchingRuleEnums } from '../models/matching-rule-enums';
import { ScoringTypeEnum } from '../models/scoring-type-enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemUtilitiesService } from '../item-utilities.service';
import { UserService } from 'src/app/shared/user.service';
import { RejectionReason } from '../models/rejection-reason';
import { DefaultItemProperties } from '../models/default-item-properties';
import { Account } from 'src/app/authentication/model/account.model';
import { Option } from '../models/option';
import { ClozeDropdown } from '../cloze-dropdown/cloze-dropdown.model';
import { Images } from '../models/images';
import { NewLabelImageText } from '../label-image-text/models/label-image-text-model';
import { ItemStatusEnum } from '../models/item-status-enum';
import { LabelImageDropdown } from './models/label-image-dropdown';
import { HttpErrorResponse } from '@angular/common/http';
import { ItemHttpService } from '../item-http.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { ItemTypes } from '../models/item-types';
import { NotifierService } from 'angular-notifier';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ItemTagComponent } from '../item-tag/item-tag.component';
import { ActivatedRoute } from '@angular/router';
import { SinglePassageModel } from '../passage-item/model/single-passage-model.model';
import { AllPassagesService } from '../../passages/list-passages/all-passages.service';
import katex from 'katex';
import { VirtualTimeScheduler } from 'rxjs';

declare var tinymce: any;
declare const MathJax: any;
export class Responses {
  responses: string[] = [];
}

@Component({
  selector: 'app-label-image-dropdown',
  templateUrl: './label-image-dropdown.component.html',
  styleUrls: ['./label-image-dropdown.component.scss'],
})
export class LabelImageDropdownComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @Input() selectedItemType!: string;
  @Input() formType!: string;
  @Input() editData!: any;
  @Output() savedItem = new EventEmitter();
  @Output() stimulus = new EventEmitter<string>();
  @ViewChild('imgUpload') imgUpload: ElementRef;

  dropZoneConfig: DropzoneConfigInterface = {
    maxFilesize: 200,
    // maxFilesize: 0.1,
  };
  startX = 0;
  startY = 0;
  newX = 0;
  newY = 0;
  currentXPercent = 45;
  currentYPercent = 42;
  clientHeight = 0;
  clientWidth = 0;
  currentLabelIndex: number;

  private offsetX: number;
  private offsetY: number;

  processingApprove: boolean = false;

  // labels: Array<{ text: string; x: number; y: number }> = [
  //   { text: "Label 1", x: 50, y: 50 },
  //   { text: "Label 2", x: 80, y: 80 },
  // ];

  dropdownLabels: Array<{
    options: Array<string>;
    x: number;
    y: number;
    inputValue: string;
    selectedOptionIndex: number | null;
    correctAnswerIndex: number | null;
    showEnterOptionInput: boolean;
    direction?: string;
  }> = [
      {
        options: [],
        x: 0,
        y: 0,
        inputValue: "",
        selectedOptionIndex: null,
        correctAnswerIndex: null,
        showEnterOptionInput: false,
        direction: 'RIGHT'
      },
    ];

  private imageWidth: number;
  private imageHeight: number;
  isDragging = false;
  // @ViewChild("imgUpload") imgUpload: ElementRef;

  option: Object = {
    height: 200,
    menubar: true,
    branding: false,
    base_url: '/tinymce',
    content_css: '/katex/dist/katex.min.css',
    statusbar: false,
    suffix: '.min',
    plugins: 'table quickbars lists autoresize charmap paste',
    quickbars_insert_toolbars: false,
    setup: this.setup.bind(this),
    paste_preprocess: function (pl, o) {
      // console.log(o.content);
    },
    extended_valid_elements: 'span[*],svg[*],path[*],g[*],defs[*],line[*],rect[*],circle[*],ellipse[*],polygon[*],polyline[*],math[*],semantics[*],annotation[*],annotation-xml[*],merror[*],mtext[*],mspace[*],mover[*],munder[*],munderover[*],mstack[*],mrow[*],msrow[*],mfenced[*],menclose[*],mphantom[*],msup[*],msub[*],msubsup[*],mmultiscripts[*],mi[*],mn[*],mo[*],ms[*],mtable[*],mtr[*],mtd[*],mlabeledtr[*],mfrac[*],mfraction[*],msline[*],msqrt[*],mroot[*],mscarries[*],mscarry[*]',
    toolbar:
      'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent table quickimage quicklink equation-editor | subscript superscript charmap',
  };

  optionSmall: Object = {
    min_height: 100,
    menubar: true,
    branding: false,
    base_url: '/tinymce',
    content_css: '/katex/dist/katex.min.css',
    statusbar: false,
    suffix: '.min',
    plugins: 'table quickbars lists autoresize charmap paste',
    quickbars_insert_toolbars: false,
    setup: this.setup.bind(this),
    extended_valid_elements: 'span[*],svg[*],path[*],g[*],defs[*],line[*],rect[*],circle[*],ellipse[*],polygon[*],polyline[*],math[*],semantics[*],annotation[*],annotation-xml[*],merror[*],mtext[*],mspace[*],mover[*],munder[*],munderover[*],mstack[*],mrow[*],msrow[*],mfenced[*],menclose[*],mphantom[*],msup[*],msub[*],msubsup[*],mmultiscripts[*],mi[*],mn[*],mo[*],ms[*],mtable[*],mtr[*],mtd[*],mlabeledtr[*],mfrac[*],mfraction[*],msline[*],msqrt[*],mroot[*],mscarries[*],mscarry[*]',
    toolbar:
      'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent table quickimage quicklink equation-editor | subscript superscript charmap',
  };

  @ViewChild('container', { static: false }) containerRef!: ElementRef;
  @ViewChild('card', { static: false }) cardRef!: ElementRef;

  @ViewChild('imageRef') imageElement: ElementRef;
  @ViewChild('tagRef') tagRef: ItemTagComponent;
  @ViewChild('scoringConfirmationModal') scoringConfirmationModal: any;
  pendingSaveAction: any;

  currentUser: Account;
  previewData: LabelImageDropdown = new LabelImageDropdown();
  image: Images = new Images();
  preview: boolean = false;
  defaultItemProperties: DefaultItemProperties = new DefaultItemProperties();
  scoringType: string[] = [];
  matchingRules: string[] = [];
  difficultyLevel: number[] = [1, 2, 3, 4, 5];
  passageWorkFlow: boolean = this.itemUtil.passageItemWorkflow;
  newRejectionReason: RejectionReason = new RejectionReason();
  options: Option[] = [];
  countAxis: number = 0;
  countXAxis: number = 0;
  file: File;
  responses: string[] = [];
  possibleResponses: Responses[] = [];
  j: number;
  tags: { tagId: string }[];
  publishingItem: boolean = false;

  inputValue: string = ''; // Stores the input value
  selectedOptionIndex: number | null = null; //
  base64Image: string;
  subjectModerationStatus: boolean = false;
  processingRejection: boolean = false;
  isDragOver = false;

  passageId: string = '';
  showPassage: boolean = false;
  passageForPreview: SinglePassageModel;

  constructor(
    private itemUtil: ItemUtilitiesService,
    private authService: UserService,
    private modalService: NgbModal,
    private itemService: ItemHttpService,
    private location: Location,
    private notifierService: NotifierService,
    private ar: ActivatedRoute,
    private passageService: AllPassagesService,
  ) {}

  onSelect(event: any): void {
    // console.log(event);
    const file: File = event.addedFiles[0];

    // Check file size (already restricted in Dropzone, but double-checking)
    const maxSizeInBytes = 5242880; // 5 MB
    if (file.size > maxSizeInBytes) {
      alert('File size exceeds the 5 MB limit.');
      return;
    }

    // Convert to Base64
    const reader = new FileReader();
    reader.onload = () => {
      this.base64Image = reader.result as string;
      // console.log(this.base64Image);
    };
    reader.onerror = () => {
      alert('Failed to convert the file.');
    };
    reader.readAsDataURL(file);
  }

  ngAfterViewInit() {
    // Capture the initial size of the image after the view is initialized
    this.imageWidth = this.imageElement?.nativeElement?.offsetWidth;
    this.imageHeight = this.imageElement?.nativeElement?.offsetHeight;
    const rect = this.imageElement?.nativeElement?.getBoundingClientRect();
    // console.log('Image Dimensions:', rect.width, rect.height);
  }

  ngOnInit(): void {
    this.passageId = this.ar.snapshot.params['passageId'];
    // console.log('PASS ID: ', this.passageId);
    // console.log('SHOW PASS: ', this.showPassage);

    if (this.passageId) {
      this.passageService.fetchSinglePassage(this.passageId).subscribe({
        next: (value) => {
          this.passageForPreview = value;

          // console.log('PASS PREVIEW: ', this.passageForPreview);
        },
      });
    }

    this.currentUser = this.authService.getCurrentUser();
    this.scoringType = Object.values(ScoringTypeEnum);
    this.matchingRules = Object.values(MatchingRuleEnums);
    this.defaultItemProperties.difficultyLevel = 1;
    this.defaultItemProperties.scoringOption.matchingRule =
      MatchingRuleEnums.EXACT_MATCH;

    this.defaultItemProperties.scoringOption.autoScore = true;
    this.defaultItemProperties.scoringOption.ignoreLeadingAndTrailingSpaces = true;
    this.subjectModerationStatus = this.itemService.currentSubjectModerationEnabled;
    this.itemUtil.setSelectedTags(this.tags);

    if (this.editData) {
      // console.log('edit data');
      // console.log(this.editData);
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

      this.image.url = this.editData.images[0].url;
      this.image.width = this.editData.images[0].width;
      this.image.height = this.editData.images[0].height;
      this.defaultItemProperties.images[0] = {
        height: this.editData.images[0].height,
        url: this.editData.images[0].url,
        width: this.editData.images[0].width,
        altText: '',
        hoverText: '',
        label: '',
      };

      // this.dropdownLabels = this.dropdownLabels.map((label, index) => ({
      //   ...label,
      //   x: this.editData.responsePositions[index]?.x || label.x,
      //   y: this.editData.responsePositions[index]?.y || label.y,
      //   // inputValue: this.editData.options[index].label,
      //   id: index.toString(),
      //   options: this.editData.possibleResponses[index].responses,
      //   correctAnswerIndex: this.editData.scoringOption.answers[index],
      //   // correctAnswerIndex : this.editData.answe
      // }));

      // to fill inputValue with coreect answer
      // this.editData.possibleResponses[index].responses[parseInt(this.editData.scoringOption.answers[index])],

      // this.editData.possibleResponses[index].responses[0]
      this.dropdownLabels = this.editData.responsePositions.map(
        (position: any, index: number) => {
          const incomingOptions = this.editData.possibleResponses[index]?.responses || [];
          const stringifiedOptions = incomingOptions.map((opt: any) => opt.label !== undefined ? opt.label : opt);

          const resolvedIndex = (() => {
            const ans = this.editData.scoringOption.answers[index];
            if (ans === undefined || ans === null) return null;

            // 1. Check against the option's value first (since value stores the index)
            const valIdx = incomingOptions.findIndex((opt: any) => opt.value !== undefined && String(opt.value) === String(ans));
            if (valIdx !== -1) return valIdx;

            // 2. If no match by value, fallback to parsing it as an integer index
            const parsed = parseInt(ans);
            if (!isNaN(parsed) && parsed >= 0 && parsed < stringifiedOptions.length) {
              return parsed;
            }

            // 3. Fallback for legacy items that might have saved the label itself
            const labelIdx = stringifiedOptions.indexOf(ans);
            if (labelIdx !== -1) return labelIdx;

            return null;
          })();

          return {
            options: stringifiedOptions,
            x: position.x || 50, // Default to 50 if not provided
            y: position.y || 50, // Default to 50 if not provided
            inputValue: resolvedIndex !== null ? stringifiedOptions[resolvedIndex] : '',
            selectedOptionIndex: resolvedIndex,
            correctAnswerIndex: resolvedIndex,
            id: index.toString(),
            direction: position.direction || 'RIGHT',
            showEnterOptionInput: false
          };
        }
      );
      // console.log();
      this.defaultItemProperties.possibleResponses =
        this.editData.possibleResponses;

      this.tags = this.editData.itemTagDTOs;
      this.itemUtil.setSelectedTags(this.tags);

      this.editData.scoringOption.answers; //Setting the right answer
      /* this.options.forEach((option, index) => {
            if(this.editData.scoringOption.answers.includes(option.value)){
              this.selectedAnswers.add(index);
            }
          }); */
    }

    // console.log(this.dropdownLabels);
  }

  onStimulusChange(value: string): void {
    this.stimulus.emit(value);
  }

  setShowPassage(value: boolean) {
    this.showPassage = value;
  }

  setup(editor: any) {
    let activeEquation: HTMLElement | null = null;

    const openDialog = (latex: string) => {
      editor.windowManager.open({
        title: 'Edit Equation',
        size: 'normal',
        body: {
          type: 'panel',
          items: [
            {
              type: 'htmlpanel',
              html: `<math-field id="mathfield" style="width: 100%; height: 200px; border: 1px solid grey">${latex}</math-field>`,
            },
          ],
        },
        buttons: [
          { type: 'cancel', name: 'cancel', text: 'Cancel' },
          { type: 'submit', name: 'update', text: 'Update', primary: true },
        ],
        onSubmit: async (api) => {
          const mathField = document.getElementById('mathfield') as any;
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

    editor.on('init', () => {
      const editorBody = editor.getBody();

      // Event  for equations
      editorBody.addEventListener('click', (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.closest('.math-expression')) {
          const equationElement = target.closest(
            '.math-expression',
          ) as HTMLElement;
          activeEquation = equationElement;

          const latex = equationElement.getAttribute('data-latex') || '';

          openDialog(latex);
        }
      });
    });

    editor.ui.registry.addButton('equation-editor', {
      text: 'Insert Math',
      icon: 'character-count',
      onAction: () => {
        editor.windowManager.open({
          title: 'Insert Equation',
          size: 'normal',
          body: {
            type: 'panel',
            items: [
              {
                type: 'htmlpanel',
                html: `<math-field id="mathfield" style="width: 100%; height: 200px; border: 1px solid grey"></math-field>`,
              },
            ],
          },
          buttons: [
            { type: 'cancel', name: 'cancel', text: 'Cancel' },
            { type: 'submit', name: 'insert', text: 'Insert', primary: true },
          ],
          onSubmit: async (api) => {
            const mathField = document.getElementById('mathfield') as any;
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
  }
  preProcess(pl, o) {
    // console.log(pl);
    let content = o.content;
  }

  createOption() {
    let option: Option = new Option();
    let options = ['A', 'B', 'C', 'D'];
    let responses = [];
    let possibleResponse = new Responses();

    // console.log('new option created:');
    option.label = `option ${this.options.length + 1}`;
    /* option.positionX = `${
      this.options.length === 0 ? 0 : this.countXAxis * 25
    }%`; */
    option.position = { x: 100, y: 100 };
    //option.positionX = 10;
    //option.positionY = 10;
    /* option.positionY = `${this.countAxis === 0 ? 3 : this.countAxis * 10}%`; */
    this.options.push(option);

    for (let i = 0; i < options.length; i++) {
      responses.push('option' + options[i]);
    }
    possibleResponse.responses = responses;
    this.possibleResponses.push(possibleResponse);
  }

  onChange() { }

  showPosition(index: number, event: CdkDragEnd, element: any) {
    // console.log('drag-ended');
    //console.log(event);
    //console.log(element);
    //console.log('position of element in parent container', element.getBoundingClientRect())
    //assets/images/Itembank/association.png
    /* let offsets = element.getBoundingClientRect();
    this.options[index].positionX = offsets.left;
    this.options[index].positionY = offsets.top;
    console.log(event.distance);
    console.log(event.dropPoint); */
    const transform = element.style.transform;
    let regex =
      /translate3d\(\s?(?<x>[-]?\d*)px,\s?(?<y>[-]?\d*)px,\s?(?<z>[-]?\d*)px\)/;
    var values = regex.exec(transform);

    // console.log(transform);
    //console.log('position:', element.position());
    //console.log(event.distance.x / 100 + '%')
    this.options[index].position.x = parseInt(values[1]);
    this.options[index].position.y = parseInt(values[2]);
    // console.log((this.options[index].positionX = parseInt(values[1])));
    // console.log((this.options[index].positionY = parseInt(values[2])));
  }

  openImageUploadModal(imageUploadModal: any) {
    this.modalService.open(imageUploadModal, { centered: true, size: 'lg' });
  }

  addResponsePosition() {
    this.createOption();
  }

  removeResponsePosition(index: number) {
    this.options.splice(index, 1);
  }

  onUploadSuccess(event: any) {
    // console.log(event);
    this.image.width = event[0].width;
    this.image.height = event[0].height;
    this.image.url = event[0].dataURL;
    this.defaultItemProperties.images = [this.image];
    // console.log(this.defaultItemProperties.images[0]);
    // this.cdRef.detectChanges();
    this.createOption();
    this.modalService.dismissAll();
    setTimeout(() => {
      const element = document.getElementById("labels");
      element?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
      });
    }, 1000)
  }

  editPassage() { }

  doPreview(itemForm: any) {

    if (!this.defaultItemProperties.stimulus) {
      this.notifierService.notify('error', 'Please compose a question to preview');
      return;
    }

    if (!this.validateLabelImageDropdown()) {
      return;
    }

    this.itemUtil.previewItem = true;
    let item = this.buildItem(itemForm);
    this.previewData = item;
    this.preview = true;
  }

  onUploadError(event: any) {
    const [file, message] = event;

    if (file.size > 200 * 1024) {
      this.notifierService.notify('error', 'File size must not exceed 200KB')
    } else {
      this.notifierService.notify('error', 'An error occurred during file upload. Please try again.')
    }
  }

  uploadImage() {
    if (this.file) {
      let reader = new FileReader();

      reader.onload = () => {
        this.image.url = 'assets/images/Itembank/association.png';
      };

      reader.readAsDataURL(this.file);
    }
  }

  handleImageUpload(event: any) {
    this.file = event.target.files[0];
    //console.log(event.target.files);
  }
  openFileExplorer() {
    (document.querySelector(".dz-text") as HTMLElement).click();
  }

  onOfflineDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  onOfflineDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  onOfflineFileDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.processOfflineFile(event.dataTransfer.files[0]);
    }
  }

  onOfflineFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.processOfflineFile(event.target.files[0]);
    }
  }

  processOfflineFile(file: File) {
    if (file.size > 200 * 1024) {
      this.notifierService.notify('error', 'File size must not exceed 200KB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const dataURL = e.target.result;
      const img = new window.Image();
      img.onload = () => {
        this.image = new Images();
        this.image.width = img.width;
        this.image.height = img.height;
        this.image.url = dataURL;
        this.defaultItemProperties.images = [this.image];
        this.createOption();

        this.modalService.dismissAll();

        setTimeout(() => {
          const element = document.getElementById("labels");
          element?.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
          });
        }, 1000);
      };
      img.src = dataURL;
    };
    reader.onerror = () => {
      this.notifierService.notify('error', 'An error occurred during file upload. Please try again.');
    };
    reader.readAsDataURL(file);
  }

  reset() {
    this.modalService.dismissAll();
    this.defaultItemProperties.images = [];
    this.image = new Images();
  }

  buildItem(itemForm?: any) {
    if (!this.imageElement) {
      this.notifierService.notify('error', 'Please upload an image');
    }

    const imageRect = this.imageElement.nativeElement.getBoundingClientRect();
    const item: LabelImageDropdown = new LabelImageDropdown();

    item.images = [...this.defaultItemProperties.images];
    item.responsePositions = [];
    item.possibleResponses = [];
    item.itemStatus = ItemStatusEnum.DRAFT;

    // Copying default properties
    item.reference = this.defaultItemProperties.reference;
    item.stimulus = this.defaultItemProperties.stimulus;
    item.scoringOption = {
      ...this.defaultItemProperties.scoringOption,
      answers: [],
    };
    item.difficultyLevel = this.defaultItemProperties.difficultyLevel;
    item.shuffleOptions = this.defaultItemProperties.shuffleOptions;
    item.subjectId = this.itemUtil.currentItemTrail.subjectId;
    item.topicId = this.itemUtil.currentItemTrail.topicId;
    item.subtopicId = this.itemUtil.currentItemTrail.subtopicId;

    item.itemType = ItemTypes.CLOZE_DROPDOWN_IMAGE;

    item.imageData = {
      altText: this.image.altText,
      dimension: '',
      height: imageRect.height,
      image: item.images[0]?.url || '',
      width: imageRect.width,
    };

    if (this.itemUtil.passageId) {
      item.passageId = this.itemUtil.passageId;
    }

    this.dropdownLabels.forEach((label, index) => {
      const responsePosition = { x: label.x, y: label.y, direction: label.direction || 'RIGHT' };
      const correctAnswerValue =
        label.correctAnswerIndex !== null && label.correctAnswerIndex !== undefined
          ? label.correctAnswerIndex.toString()
          : '';

      const objectOptions = label.options.map((optLabel, idx) => ({ label: optLabel, value: String(idx) }));

      item.possibleResponses[index] = { responses: objectOptions };
      item.responsePositions.push(responsePosition);

      if (correctAnswerValue !== '') {
        item.scoringOption.answers[index] = correctAnswerValue;
      }
    });

    item.itemTagsDTOS = this.tags?.map((tag) => ({ tagId: tag.tagId })) || [];
    // console.log(item);
    return item;
  }

  // each cloze should send the value in the answers and not index

  closePreview(event: any) {
    this.preview = false;
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

  saveItem(itemForm?: any, skipScoringCheck: boolean = false) {
    if (!skipScoringCheck) {
      this.confirmScoringAndSave(() => this.saveItem(itemForm, true));
      return;
    }
    if (!this.validateLabelImageDropdown()) {
      return;
    }
    let item = this.buildItem();
    let result = this.itemService.validateItem(item);

    // item.scoringOption.answers = item.options.map((option) => option.label);

    if (!result) {
      return;
    }

    this.publishingItem = true;
    if (
      !this.currentUser.authorities.includes('MODERATOR') &&
      !this.currentUser.authorities.includes('ADMIN') && 
      !this.currentUser.authorities.includes('GROUP_ADMIN') &&
      this.subjectModerationStatus
    ) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }

    this.publishLoader();
    this.saveFunction(item, 'save');
  }

  validateLabelImageDropdown(): boolean {
    if (this.dropdownLabels.length === 0) {
      this.notifierService.notify('error', 'Please add at least one label position to the image.');
      return false;
    }

    for (let i = 0; i < this.dropdownLabels.length; i++) {
      const label = this.dropdownLabels[i];
      if (!label.options || label.options.length === 0) {
        this.notifierService.notify('error', `Label ${i + 1} does not contain any options. Please add options.`);
        return false;
      }

      for (let j = 0; j < label.options.length; j++) {
        const optionText = label.options[j];
        if (!optionText || optionText.trim() === '') {
          this.notifierService.notify('error', `Option labels in Label ${i + 1} cannot be empty or contain only spaces.`);
          return false;
        }
        if (optionText.startsWith(' ') || optionText.endsWith(' ')) {
          this.notifierService.notify('error', `Option labels in Label ${i + 1} cannot start or end with spaces.`);
          return false;
        }
      }

      if (label.correctAnswerIndex === null || label.correctAnswerIndex === undefined) {
        this.notifierService.notify('error', `Please select the correct answer for Label ${i + 1}.`);
        return false;
      }
    }

    return true;
  }

  saveFunction(item: any, type?: string) {
    let msg: string;
    if (type == 'save' || type === 'save_and_new') {
      msg = `A new item has been created successfully`;
    } else if (type == 'draft') {
      msg = `A new item has been saved to draft successfully`;
    } else if (type == 'passage-item') {
      msg = `A new item has been added to the passage successfully`;
    }

    // if (
    //   this.currentUser.authorities.includes("AUTHOR") &&
    //   this.subjectModerationStatus
    // ) {
    //   msg = `item successfully sent for moderation`;
    // }
    this.itemService.createClozeDropdownImageItem(item).subscribe(
      (value) => {
        if (this.itemService.currentActivity) {
          item.itemId = value.id;
          this.savedItem.emit(item);
        }
        // console.log(value);
        this.publishingItem = false;
        Swal.close();
        Swal.fire({
          icon: 'success',
          html: msg,
        });

        if (type === 'save' || type === 'draft') {
          this.back();
        }

        if (type == 'save_and_new' || type !== '') {
          this.defaultItemProperties = new DefaultItemProperties();
          this.tags = [];
          this.defaultItemProperties.scoringOption.autoScore = true;
          this.defaultItemProperties.difficultyLevel = 1;
          this.defaultItemProperties.shuffleOptions = true;
          this.itemUtil.setSelectedTags([]);

          this.image = {
            height: null,
            url: '',
            width: null,
            altText: '',
            hoverText: '',
            label: '',
          };

          this.dropdownLabels = [
            {
              x: 0,
              y: 0,
              inputValue: '',
              selectedOptionIndex: null,

              correctAnswerIndex: null,
              options: [],
              showEnterOptionInput: false,
              direction: 'RIGHT'
            },
          ];

          this.options = [];
          this.tagRef.Tag = [];
          this.tagRef.ngOnInit();
          this.tagRef.sendTag([]);

          this.ngOnInit();
          this.options = [];
          this.ngOnInit();
        }
      },
      (error: HttpErrorResponse) => {
        this.publishingItem = false;
        Swal.close();
        Swal.fire({
          icon: 'error',
          html: `${error.error.message}`,
        });
      },
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
        title: msg ? msg : 'Saving your question, Please Wait...',
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

  saveAndNew(itemForm?: any, skipScoringCheck: boolean = false) {
    if (!skipScoringCheck) {
      this.confirmScoringAndSave(() => this.saveAndNew(itemForm, true));
      return;
    }
  }

  saveToDraft(itemForm?: any, skipScoringCheck: boolean = false) {
    if (!skipScoringCheck) {
      this.confirmScoringAndSave(() => this.saveToDraft(itemForm, true));
      return;
    }
    if (!this.validateLabelImageDropdown()) {
      return;
    }
    let item = this.buildItem(itemForm);
    let validated = this.itemService.validateItem(item);

    if (!validated) {
      return;
    }

    // item.scoringOption.answers = item.options.map((option) => option.label);
    this.image = new Images();

    this.publishingItem = true;
    this.publishLoader();

    item.itemStatus = ItemStatusEnum.DRAFT;

    this.saveFunction(item, 'draft');
  }

  saveItemToPassage(itemForm?: any, skipScoringCheck: boolean = false) {
    if (!skipScoringCheck) {
      this.confirmScoringAndSave(() => this.saveItemToPassage(itemForm, true));
      return;
    }
  }

  recieveTag(event: any) {
    this.tags = event;
  }

  saveAndNewItem(itemForm: any, skipScoringCheck: boolean = false) {
    if (!skipScoringCheck) {
      this.confirmScoringAndSave(() => this.saveAndNewItem(itemForm, true));
      return;
    }
    if (!this.validateLabelImageDropdown()) {
      return;
    }
    let item = this.buildItem(itemForm);
    let result = this.itemService.validateItem(item);
    //console.log(result);
    if (!result) {
      return;
    }

    this.publishingItem = true;

    if (
      !this.currentUser.authorities.includes('MODERATOR') &&
      !this.currentUser.authorities.includes('ADMIN') && 
      !this.currentUser.authorities.includes('GROUP_ADMIN') &&
      this.subjectModerationStatus
    ) {
      item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      item.itemStatus = ItemStatusEnum.PUBLISHED;
    }
    this.publishLoader();
    this.saveFunction(item, 'save_and_new');
  }

  approveQuestion(itemForm: any) {
    this.updateItem(itemForm, 'approve');
  }

  updateItem(itemForm?: any, status?: string, skipScoringCheck: boolean = false) {
    if (!skipScoringCheck) {
      this.confirmScoringAndSave(() => this.updateItem(itemForm, status, true));
      return;
    }
    if (!this.validateLabelImageDropdown()) {
      return;
    }
    let item = this.buildItem(itemForm);
    item.itemId = this.editData.id;

    // console.log(this.editData, "edit data");
    // let validated = this.itemService.validateItem(item);

    // if (!validated) {
    //   return;
    // }

    this.publishingItem = true;
    this.publishLoader('Updating your question, Please Wait...');

    switch (status) {
      case 'save':
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

      case 'draft':
        item.itemStatus = ItemStatusEnum.DRAFT;
        break;

      case 'approve':
        item.itemStatus = ItemStatusEnum.PUBLISHED;
        item.moderation_status = 'accepted';

        break;

      default:
        break;
    }

    this.processingApprove = true;

    this.itemService.editClozeDropdownImageItem(item).subscribe(
      (value) => {
        this.publishingItem = false;
        Swal.close();
        if (value) {
          Swal.fire({
            title: 'Congratulations!',
            text: 'The question was successfully updated.',
            icon: 'success',
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
          icon: 'error',
          html: `${error.error.message}`,
        });
        this.processingApprove = false;
      },
    );
  }

  openRejectionReasonModal(rejectionModal: any) {
    this.modalService.open(rejectionModal, { centered: true, size: 'lg' });
  }

  submitRejection(questionRejectionForm: any) {
    this.processingRejection = true;
  }

  private boundMouseMove = this.onMouseMove.bind(this);
  private boundMouseUp = this.onMouseUp.bind(this);

  //new implementation
  onMouseDown(event: MouseEvent, index: number) {
    this.isDragging = true;
    this.currentLabelIndex = index;
    this.offsetX = event.clientX - this.imageElement.nativeElement.offsetLeft;
    this.offsetY = event.clientY - this.imageElement.nativeElement.offsetTop;
    document.addEventListener('mousemove', this.boundMouseMove);
    document.addEventListener('mouseup', this.boundMouseUp);
  }

  // While dragging
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const rect = this.imageElement.nativeElement.getBoundingClientRect();
      // const left = event.clientX - imageRect.left;
      // const top = event.clientY - imageRect.top;

      // Calculate the position as a percentage relative to the image size
      const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
      const yPercent = ((event.clientY - rect.top) / rect.height) * 100;

      // Constrain within image bounds (0-100%)
      this.dropdownLabels[this.currentLabelIndex].x = Math.max(
        0,
        Math.min(100, xPercent),
      );
      this.dropdownLabels[this.currentLabelIndex].y = Math.max(
        0,
        Math.min(100, yPercent),
      );

      // console.log(this.dropdownLabels);
    }
  }

  // When mouse button is released
  onMouseUp() {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.boundMouseMove);
    document.removeEventListener('mouseup', this.boundMouseUp);
  }

  // Add a new label to the array at a fixed position
  // addLabel() {
  //   this.labels.push({
  //     text: `Label ${this.labels.length + 1}`,
  //     x: 10,
  //     y: 10, // Initial position (10% from top-left corner)
  //   });
  // }

  addDropdownLabel() {
    this.dropdownLabels.push({
      options: [],
      // x: 50,
      // y: 50,
      x: 0,
      y: 0,
      inputValue: "",
      selectedOptionIndex: null,
      correctAnswerIndex: null,
      showEnterOptionInput: false,
      direction: 'RIGHT'
    });

    this.notifierService.notify('success', 'New label added')
  }

  // Update the image size on window resize
  onWindowResize() {
    if (this.imageElement) {
      const rect = this.imageElement.nativeElement.getBoundingClientRect();
      this.imageWidth = rect.width;
      this.imageHeight = rect.height;

      this.dropdownLabels = [...this.dropdownLabels]; // Trigger change detection
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.onWindowResize();
  }
  addDropOption(index: number, value: string) {
    if (value.startsWith(' ') || value.endsWith(' ')) {
      this.notifierService.notify('error', 'Option value cannot start or end with spaces');
      return;
    }
    if (value.trim()) {
      this.dropdownLabels[index].options.push(value);
      this.dropdownLabels[index].inputValue = ''; // Clear the input box for this label
      this.notifierService.notify(
        'success',
        `Drop option ${value} added to label ${index + 1}`,
      );
    }
  }

  editDropOption(labelIndex: number, optionIndex: number, newValue: string) {
    if (newValue.startsWith(' ') || newValue.endsWith(' ')) {
      this.notifierService.notify('error', 'Option value cannot start or end with spaces');
      return;
    }
    if (optionIndex !== null && newValue.trim()) {
      this.dropdownLabels[labelIndex].options[optionIndex] = newValue;
      this.dropdownLabels[labelIndex].inputValue = ''; // Clear input box after editing
      this.selectedOptionIndex = null; // Reset selected option index
      this.notifierService.notify(
        'success',
        `Drop option edited to ${newValue} for label ${labelIndex + 1}`,
      );
    }
  }

  onSelectOption(labelIndex: number, event: Event) {
    const selectedOptionIndex = (event.target as HTMLSelectElement).value;
    this.dropdownLabels[labelIndex].selectedOptionIndex = +selectedOptionIndex;
    this.dropdownLabels[labelIndex].inputValue = this.dropdownLabels[labelIndex].options[selectedOptionIndex];
  }

  setCorrectAnswer(labelIndex: number) {
    const selectedOptionIndex =
      this.dropdownLabels[labelIndex].selectedOptionIndex;
    // if (selectedOptionIndex !== null) {
    this.dropdownLabels[labelIndex].correctAnswerIndex = selectedOptionIndex;
    this.notifierService.notify(
      "success",
      `Correct answer set to "${this.dropdownLabels[labelIndex].options[selectedOptionIndex]
      }" for label ${labelIndex + 1}`
    );
    // }
  }

  selectAnwser(labelIndex: number, event: Event) {
      this.onSelectOption(labelIndex, event)
      this.setCorrectAnswer(labelIndex)
  }

  deleteDropOption(labelIndex: number) {
    const selectedOptionIndex =
      this.dropdownLabels[labelIndex].selectedOptionIndex;
    if (selectedOptionIndex !== null) {
      this.dropdownLabels[labelIndex].options.splice(selectedOptionIndex, 1);
      this.dropdownLabels[labelIndex].inputValue = ''; // Clear input box after deletion
      this.dropdownLabels[labelIndex].selectedOptionIndex = null; // Clear selected index
      this.dropdownLabels[labelIndex].correctAnswerIndex = null; // Clear selected index
      this.notifierService.notify(
        'success',
        `Drop option deleted from label ${labelIndex + 1}`,
      );
    }
  }

  deleteLabel(index: number) {
    this.dropdownLabels.splice(index, 1);
    this.notifierService.notify("success", `Label deleted`);
  }

  openConfirmationModal(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      windowClass: 'modal-holder',
    });
  }

  openModal(content: any, size?: string) {
    this.modalService.open(content, {
      size: size ? size : "lg",
      centered: true,
    });
  }

  tempOptions: string[] = [];

  openOptionsModal(labelIndex: number, content: any) {
    this.tempOptions = [...this.dropdownLabels[labelIndex].options];
    this.openModal(content, 'md')
  }

  saveOptions(labelIndex: number, modal: any) {
    for (let i = 0; i < this.tempOptions.length; i++) {
      const opt = this.tempOptions[i];
      if (!opt || opt.trim() === '') {
        this.notifierService.notify('error', 'Option value cannot be empty');
        return;
      }
      if (opt.startsWith(' ') || opt.endsWith(' ')) {
        this.notifierService.notify('error', 'Option value cannot start or end with spaces');
        return;
      }
    }
    this.dropdownLabels[labelIndex].options = [...this.tempOptions];
    modal.close();
  }

  removeTempOption(index: number) {
    this.tempOptions.splice(index, 1);
  }

  removeOption(labelIndex: number, optionIndex: number) {
    this.dropdownLabels[labelIndex].options.splice(optionIndex, 1);
  }

  removeLabel(labelIndex: number) {
    this.dropdownLabels.splice(labelIndex, 1);
    this.notifierService.notify("success", `Label deleted`);
  }

  ngOnDestroy(): void {
    this.itemUtil.previewItem = false;
  }
}
