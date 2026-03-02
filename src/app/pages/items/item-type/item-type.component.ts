import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

interface ItemTypeModel {
  type: string;
  imgPath: string;
  code: string;
}

@Component({
  selector: 'app-item-type',
  templateUrl: './item-type.component.html',
  styleUrls: ['./item-type.component.scss'],
})
export class ItemTypeComponent implements OnInit {
  @Input() activeItemType: string = '';
  @Output() sendItemType = new EventEmitter<string>();
  @Output() sendFormType = new EventEmitter<string>();

  selectedItemType!: string;
  lastCommittedItemType!: string; // Track the last successfully committed type
  paramsObject: any;
  formType: string;
  itemTypes: string[] = [
    'Multiple choice',
    'Fill in the gap',
    'Written',
    'Match & Order',
    'DRAWING_AND_WRITING'
    /* 'Passage', */
  ];

  mcq: ItemTypeModel[] = [
    {
      type: 'Single Response',
      imgPath: 'assets/images/Itembank/mcq_single_response.png',
      code: 'MCQ',
    },
    {
      type: 'Multiple Response',
      imgPath: 'assets/images/Itembank/mcq_multiple_response.png',
      code: 'MRQ',
    },
    {
      type: 'True or False',
      imgPath: 'assets/images/Itembank/mcq_true_false.png',
      code: 'TOF',
    },
    {
      type: 'Yes or No',
      imgPath: 'assets/images/Itembank/yes_no.png',
      code: 'YON',
    },
    {
      type: 'Choice Matrix',
      imgPath: 'assets/images/Itembank/choice_matrix.png',
      code: 'CHM'
    },
  ];

  fig: ItemTypeModel[] = [
    {
      type: 'Cloze with dropdown',
      imgPath: 'assets/images/Itembank/clozedropdown.png',
      code: 'CLD'
    },
    {
      type: 'Cloze with Text',
      imgPath: 'assets/images/Itembank/clozetext.png',
      code: 'CLT'
    },
    {
      type: 'Cloze with Radio Select',
      imgPath: 'assets/images/Itembank/cloze-radio.png',
      code: 'CLR'
    },
    {
      type: 'Label Image with Text',
      imgPath: 'assets/images/Itembank/label_image_text.png',
      code: 'LBT'
    },
    {
      type: 'Label Image with Dropdown',
      imgPath: 'assets/images/Itembank/label_image_dropdown.png',
      code: 'LBD'
    },
    {
      type: 'Label Image with Drag and Drop',
      imgPath: 'assets/images/Itembank/label_image_drag_n_drop.png',
      code: 'LDD'
    },
    /* {type:'Numeric', imgPath:''}, */
  ];

  wr: ItemTypeModel[] = [
    {
      type: 'Rich Text Essay',
      imgPath: 'assets/images/Itembank/richEssay.png',
      code: 'ESS'
    },
    { type: 'Short Answer', imgPath: 'assets/images/Itembank/shorttext.png', code: 'SHT' },
    /* {type:'Plain Text Essay', imgPath:''},
    {type:'Audio Response', imgPath:''},
    {type:'Video Response', imgPath:''}, */
  ];

  cmo: ItemTypeModel[] = [
    { type: 'Matching', imgPath: 'assets/images/Itembank/association.png', code: 'ASS' },
    { type: 'Ordering', imgPath: 'assets/images/Itembank/order_list.png', code: 'ORD' },
  ];

  drawingAndWriting: ItemTypeModel[] = [
    { type: 'DRAWING_AND_WRITING', imgPath: 'assets/images/itemTypes/drawing-and-writing.jpg', code: 'DAW'}
  ]

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.paramsObject = { ...params };
      // console.log(this.paramsObject);
    });

    this.selectedItemType = 'Multiple choice';
    this.lastCommittedItemType = 'Multiple choice';
    this.formType = 'Single Response';

    /* if (this.paramsObject) {
      if (
        this.paramsObject.type === 'MCQ' ||
        this.paramsObject.type === 'MRQ' ||
        this.paramsObject.type === 'TRUE_FALSE' ||
        this.paramsObject.type === 'YES_NO'
      ) {
        this.selectedItemType = 'Multiple Choice';
      } else if (
        this.paramsObject.type === 'CLOZE_TEXT' ||
        this.paramsObject.type === 'CLOZE_DROPDOWN'
      ) {
        this.selectedItemType = 'Fill in the gap';
      } else if (
        this.paramsObject.type === 'ESSAY_RICH_TEXT' ||
        this.paramsObject.type === 'SHORT_TEXT' ||
        this.paramsObject.type === 'ESSAY_PLAIN_TEXT'
      ) {
        this.selectedItemType = 'Written & Recorded';
      } else if(this.paramsObject.type === 'ASSOCIATION' || this.paramsObject.type === 'ORDER') {
        this.selectedItemType = 'Classify, Match & Order';
      }
    }else{ // This sets the default form page to single response view on new item creation
      this.selectedItemType = this.itemTypes[0];
    } */
  }

  ngOnInit(): void {
    this.setItemType(this.selectedItemType);
  }

  onItemTypeChange(newType: string) {
    // Called when ngModelChange event fires (before model update)
    if(this.hasUnsavedContent()) {
      Swal.fire({
        title: 'You have unsaved data',
        text: 'Discard changes and switch item type?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Leave',
        cancelButtonText: 'Stay',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.selectedItemType = newType;
          this.setItemType(newType);
        } else {
          // User cancelled - revert to last committed type
          this.selectedItemType = this.lastCommittedItemType;
        }
      });
      return;
    }

    // No unsaved content, proceed with change
    this.selectedItemType = newType;
    this.setItemType(newType);
  }

  setItemType(itemType: string) {
    this.formType = ''
    this.sendItemType.emit(itemType);
  }

  setFormType(formType: string) {
    this.formType = formType
    this.sendFormType.emit(formType);
  }

  private hasUnsavedContent(): any {
    let hasTitle = false;
 
    const labels = document.querySelectorAll('label');
    for (const element of Array.from(labels)) {
      if (element.textContent.toLowerCase().trim() === 'title') {
          hasTitle = !!(element.nextElementSibling as HTMLInputElement).value;
          break;
      }
    }

    if(hasTitle) {
      return true;
    };

    
    const editors = (window as any)?.tinymce?.editors ?? [];
    const found = editors.some(editor => {
      const content = editor.getContent({ format: "text" }).trim();
      if(content.length && (content.includes('option') || content.includes('stimulus'))) {
        return false; // Skip editors with 'option' in content
      }

      return content.length > 0;
    });
    
    return found;
  }
}
