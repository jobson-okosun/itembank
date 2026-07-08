import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Passage } from '../../items/passage-item/model/passage.model';
import { ItemTagsDtos } from '../../items/models/item-tags-dtos';
import { ItemUtilitiesService } from '../../items/item-utilities.service';
import { AllPassagesService } from '../list-passages/all-passages.service';
import { ItemHttpService } from '../../items/item-http.service';
import { ItemStatusEnum } from '../../items/models/item-status-enum';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Location, LocationChangeEvent } from '@angular/common';
import { SinglePassageModel } from '../../items/passage-item/model/single-passage-model.model';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/authentication/model/account.model';
import { UserService } from 'src/app/shared/user.service';
import { ItemService } from '../../exam-preview/services/item.service';
import { ItemServiceService } from 'src/app/shared/item-services/item-service.service';
import { NotifierService } from 'angular-notifier';
import katex from 'katex';

@Component({
  selector: 'app-new-passage',
  templateUrl: './new-passage.component.html',
  styleUrls: ['./new-passage.component.scss'],
})
export class NewPassageComponent implements OnInit, OnDestroy {
  @Input() passageEdit!: SinglePassageModel;

  selectedItemType: string = '';

  passage: Passage = new Passage();

  tags: ItemTagsDtos[] = [];

  preview: boolean = false;

  previewData: Passage;

  passageTrail: any;

  currentUser: Account = this.userService.getCurrentUser();

  savingPassage: boolean = false;

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
    },
    extended_valid_elements: 'span[*],svg[*],path[*],g[*],defs[*],line[*],rect[*],circle[*],ellipse[*],polygon[*],polyline[*],math[*],semantics[*],annotation[*],annotation-xml[*],merror[*],mtext[*],mspace[*],mover[*],munder[*],munderover[*],mstack[*],mrow[*],msrow[*],mfenced[*],menclose[*],mphantom[*],msup[*],msub[*],msubsup[*],mmultiscripts[*],mi[*],mn[*],mo[*],ms[*],mtable[*],mtr[*],mtd[*],mlabeledtr[*],mfrac[*],mfraction[*],msline[*],msqrt[*],mroot[*],mscarries[*],mscarry[*]',
    toolbar:
      'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent table quickimage quicklink equation-editor | subscript superscript charmap',
  };

  /* subjectId: string = this.ar.snapshot.params['subjectId']; */

  constructor(
    private itemUtil: ItemUtilitiesService,
    private passageService: AllPassagesService,
    private location: Location,
    private itemService: ItemHttpService,
    private userService: UserService,
    private _itemServiceService: ItemServiceService,
    private notifier: NotifierService
  ) { }

  ngOnDestroy(): void {
    this._itemServiceService.clearItem('Passage_Trail');
  }

  ngOnInit(): void {
    this.passageTrail = this.passageService.currentPassageTrail || this._itemServiceService.getItem('Passage_Trail');
    // console.log(
    //   'Is moderation currently enabled on this subject?::::',
    //   this.itemService.currentSubjectModerationEnabled
    // );
    //console.log(this.passageTrail);
    if (this.passageEdit) {
      this.passage.stimulus = this.passageEdit.stimulus;
      this.passage.reference = this.passageEdit.reference;
      this.passage.itemTagsDTOS = this.passageEdit.itemTagsDTOS;
    }
  }

  setItemType(value: string) {
    this.selectedItemType = value;
  }

  doPreview(itemForm: any) {

    if (!this.passage.stimulus) {
      this.notifier.notify('error', `Please compose a passage`);
      return;
    }

    this.itemUtil.previewItem = true
    this.preview = true;
    this.previewData = this.passage;
  }

  recieveTags(tags: any) {
    tags.forEach((tag) => {
      let data = { tagId: tag.tagId };
      this.tags.push(data);
    });
  }

  buildItem(itemForm?: any) {
    // this.tags = this.tags.map((tag) => {
    //   return { tagId: tag.tagId };
    // });

    this.passage.itemTagsDTOS = this.tags.map((tag) => {
      return { tagId: tag.tagId }
    });

    this.passage.subjectId = this.passageService.currentPassageTrail.subjectId;

    this.passage.topicId = this.passageService.currentPassageTrail.topicId;

    /* if(this.passageEdit) {
      this.passage.itemStatus = this.passageEdit.itemStatus;
    } */
  }

  savePassage(itemForm: any) {
    if (this.itemService.currentSubjectModerationEnabled) {
      this.passage.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else if (!this.itemService.currentSubjectModerationEnabled) {
      this.passage.itemStatus = ItemStatusEnum.PUBLISHED;
    }
    this.buildItem(itemForm);
    this.saveFunction();
  }

  back() {
    this.location.back();
  }

  savePassageAsDraft(itemForm: any) {
    this.passage.itemStatus = ItemStatusEnum.DRAFT;
    this.buildItem(itemForm);
    this.saveFunction();
  }

  saveFunction() {
    this.savingPassage = true;
    this.publishLoader();

    this.itemService
      .createNewPassage(this.passage)
      .toPromise()
      .then((response) => {
        if (response) {
          // console.log(response);
          this.savingPassage = false;
          Swal.close();
          Swal.fire({
            icon: 'success',
            title: 'Congratulations',
            text: 'You have successfully added a new passage.',
          });
        }
        this.location.back();
      })
      .catch((error: HttpErrorResponse) => {
        // console.log(error);
        this.savingPassage = false;
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: error.error.message,
        });
      });
  }

  returnData(data) {
    this.preview = false;
    //this.previewData = data;
    this.passage = data;
    // console.log(data);
  }

  updatePassage(status?: string) {
    // console.log(this.tags);
    let temp_tags: any[] = [];
    if (status) {
      this.passage.itemStatus = ItemStatusEnum.DRAFT;
    } else if (this.itemService.currentSubjectModerationEnabled) {
      this.passage.itemStatus = ItemStatusEnum.AWAITING_MODERATION;
    } else {
      this.passage.itemStatus = ItemStatusEnum.PUBLISHED;
    }
    /* this.tags.forEach((tag) => {
      let data = { tagId: tag.tagId }
      this.passage.itemTagsDTOS.push(data);
    }); */

    if (this.tags.length > 0) {
      this.passage.itemTagsDTOS = this.tags;
    } else {
      this.passageEdit.itemTagsDTOS.forEach((tag) => {
        temp_tags.push({ tagId: tag.tagId });
      });
    }
    this.passage.itemTagsDTOS = temp_tags;
    this.passage.subjectId = this.passageTrail.subjectId;
    this.passage.topicId = this.passageTrail.topicId;
    //this.passageEdit.reference = this.passage.reference;
    //this.passageEdit.itemTagsDTOS = this.tags;
    //console.log('passage to update', this.passage);

    this.savingPassage = true;
    this.publishLoader();

    this.passageService
      .editPassage(this.passageEdit.id, this.passage)
      .subscribe(
        (value) => {
          if (value) {
            this.savingPassage = false;
            Swal.close();
            Swal.fire({
              title: 'Congratulations!',
              text: 'You have successfully updated this passage.',
              icon: 'success',
            });
          }
          //this.passage = new Passage();
          this.back();
        },

        (error: HttpErrorResponse) => {
          // console.log(error);
          this.savingPassage = false;
          Swal.close();
          Swal.fire({
            title: 'Failed!',
            text: error.error.message,
            icon: 'error',
          });
        }
      );
  }

  publishLoader(msg?: string) {
    if (!this.savingPassage) {
      return;
    } else {
      Swal.fire({
        title: msg ? msg : 'Saving the passage, Please Wait...',
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
            const renderedHtml = katex.renderToString(updatedLatex, { throwOnError: false });
            if (activeEquation.tagName === 'IMG') {
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
      editorBody.addEventListener('click', (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.closest('.math-expression')) {
          const equationElement = target.closest('.math-expression') as HTMLElement;
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
            editor.selection.collapse(false);
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
}
