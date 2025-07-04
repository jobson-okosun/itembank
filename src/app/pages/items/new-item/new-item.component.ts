import { ItemHttpService } from "./../item-http.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ItemUtilitiesService } from "./../item-utilities.service";
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from "@angular/core";
import { AllPassagesService } from "../../passages/list-passages/all-passages.service";
import { Location } from "@angular/common";
import { ClozeDropdown } from "../cloze-dropdown/cloze-dropdown.model";
import { newClozeDropDown } from "../utility/ClozeTextUtil";

declare var tinymce: any;
@Component({
  selector: "app-new-item",
  templateUrl: "./new-item.component.html",
  styleUrls: ["./new-item.component.scss"],
})
export class NewItemComponent implements OnInit {
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

  constructor(
    private itemUtil: ItemUtilitiesService,
    private passageService: AllPassagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    /* this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.itemId = params.get('id');
    }); */
  }

  onSettingsButtonClicked() {
    document.body.classList.toggle("right-bar-enabled");
    const rightBar = document.getElementById("theme-settings-offcanvas");
    if (rightBar != null) {
      rightBar.classList.toggle("show");
      rightBar.setAttribute("style", "visibility: visible;");
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
    this.selectedItemType = "Multiple choice";
    this.formType = "Single Response";

    this.breadCrumbItems = [
      { label: "Questions" },
      { label: "New question", active: true },
    ];

    if (this.itemId !== null) {
    }
    this.itemTrailInformation = this.itemUtil.currentItemTrail ?? this.itemUtil.getSavedItemTrail();
    // console.log(this.itemTrailInformation);
    /* console.log(this.itemId); */
  }

  setItemType(value: string) {
    //console.log('current item type::::::', value);

    this.selectedItemType = value;
  
    if (this.selectedItemType === "Fill in the gap") {
      this.setFormType("Cloze with dropdown");
    } else if (this.selectedItemType === "Multiple choice") {
      this.setFormType("Single Response");
    } else if (this.selectedItemType === "Written") {
      this.setFormType("Rich Text Essay");
    } else if (this.selectedItemType === "Match & Order") {
      this.setFormType("Matching");
    } else if (this.selectedItemType === "Passage") {
      this.setFormType("Passage");
    }
    else if (this.selectedItemType === "DRAWING_AND_WRITING") {
      this.setFormType("DRAWING_AND_WRITING");
    }
  }

  setFormType(formType: string) {
    this.itemUtil.setSelectedTags([]);
    this.formType = formType;
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
  }
}
