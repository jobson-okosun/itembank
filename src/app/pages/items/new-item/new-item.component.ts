import { ItemHttpService } from './../item-http.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ItemUtilitiesService } from './../item-utilities.service';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { AllPassagesService } from '../../passages/list-passages/all-passages.service';
import { Location } from '@angular/common';
import { ClozeDropdown } from '../cloze-dropdown/cloze-dropdown.model';
import { newClozeDropDown } from '../utility/ClozeTextUtil';
import { ItemService } from '../../exam-preview/services/item.service';
import { ItemServiceService } from 'src/app/shared/item-services/item-service.service';

declare var tinymce: any;
@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
})
export class NewItemComponent implements OnInit, OnDestroy {
  @Input() currentActivity: string;
  @Input() itemTrail!: any;
  @Output() backToAssessment = new EventEmitter();

  breadCrumbItems!: Array<{}>;

  paramsObject: any;

  passageWorkflow: boolean = this.itemUtil.passageItemWorkflow;

  selectedItemType!: string;

  formType!: string;

  itemId: string = null;

  savedItem: any;

  itemTrailInformation: any;
  preview: boolean;
  stimulus: string = '';

  constructor(
    private itemUtil: ItemUtilitiesService,
    private passageService: AllPassagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _itemService: ItemHttpService,
    private _itemServiceService: ItemServiceService,
    private location: Location,
  ) {
    /* this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.itemId = params.get('id');
    }); */
  }

  ngOnDestroy(): void {
    this._itemServiceService.clearItem('Moderation_Enabled');
  }

  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
    const rightBar = document.getElementById('theme-settings-offcanvas');
    if (rightBar != null) {
      rightBar.classList.toggle('show');
      rightBar.setAttribute('style', 'visibility: visible;');
    }
  }

  ngOnInit(): void {
    if (this.itemTrailInformation === undefined) {
      /* else {
        this.router.navigate(['/itembank/items/subjects']);
      } */
    }
    /* else{
      this.selectedItemType = 'Multiple choice';
      this.formType = 'Single Response';
    } */
    this.selectedItemType = 'Multiple choice';
    this.formType = 'Single Response';

    console.log('WANT TO CREATE QUESTIONS.');

    this._itemService.currentSubjectModerationEnabled = Boolean(this._itemServiceService.getItem('Moderation_Enabled'));

    this.breadCrumbItems = [
      { label: 'Questions' },
      { label: 'New question', active: true },
    ];

    if (this.itemId !== null) {
    }
    this.itemTrailInformation =
      this.itemUtil.currentItemTrail ?? this.itemUtil.getSavedItemTrail();
    // console.log(this.itemTrailInformation);
    /* console.log(this.itemId); */
  }

  setItemType(value: string) {
    // if (this.hasUnsavedContent()) {
    //   const leave = window.confirm('You have content in the Compose Question editor. Discard changes and switch item type?');
    //   if (!leave) return;
    // }

    this.selectedItemType = value;

    if (this.selectedItemType === 'Fill in the gap') {
      this.setFormType('Cloze with dropdown');
    } else if (this.selectedItemType === 'Multiple choice') {
      this.setFormType('Single Response');
    } else if (this.selectedItemType === 'Written') {
      // this.setFormType("Rich Text Essay");
      this.setFormType('Essay');
    } else if (this.selectedItemType === 'Match & Order') {
      this.setFormType('Matching');
    } else if (this.selectedItemType === 'Passage') {
      this.setFormType('Passage');
    } else if (this.selectedItemType === 'DRAWING_AND_WRITING') {
      this.setFormType('DRAWING_AND_WRITING');
    }
  }


  setFormType(formType: string) {
    this.itemUtil.setSelectedTags([]);
    this.formType = formType;
    //this.stimulus = '';
  }

  handleStimulusChangeOnQuestionTypes(value: string): void {
    this.stimulus = value;
  }

  saved(item: any) {
    this.savedItem = item;
    // console.log('new item just created in assessment', this.savedItem);
  }

  goBackToAssessment() {
    if (this.savedItem) {
      this.backToAssessment.emit(this.savedItem);
    } else {
      this.backToAssessment.emit(undefined);
    }
  }

  myEvent(event) {
    console.log(event);
  }

  goBack() {
    if (this.itemUtil.previewItem) {
      this.itemUtil.previewItem = false;
    }
    this.location.back();
    // history.back();
  }
}
