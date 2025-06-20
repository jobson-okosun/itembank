import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { EditItemService } from "../edit-item.service";
import { ItemHttpService } from "../item-http.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ItemDetails, ItemUtilitiesService } from "../item-utilities.service";
import { AllPassagesService } from "../../passages/list-passages/all-passages.service";
import { Location } from "@angular/common";
import { ItemTypes } from "../models/item-types";

@Component({
  selector: "app-edit-item",
  templateUrl: "./edit-item.component.html",
  styleUrls: ["./edit-item.component.scss"],
  providers: [],
})
export class EditItemComponent implements OnInit, OnDestroy {
  formType!: string;

  savedItem: any;

  item: any;

  itemType: string;

  itemId: string;

  paramsObject: any;

  breadCrumbItems!: Array<{}>;

  subjectId: string = this.itemService.subjectId;

  topicId: string = this.itemService.topicId;

  subtopicId: string = this.itemService.subtopicId;

  subjectName: string = this.itemService.subjectName;

  topicName: string = this.itemService.topicName;

  subtopicName: string = this.itemService.subtopicName;

  itemTrailInformation: ItemDetails = this.itemUtil.currentItemTrail;
  exitEdit: boolean = true;
  constructor(
    private editItemService: EditItemService,
    private itemService: ItemHttpService,
    private activatedRoute: ActivatedRoute,
    private itemUtil: ItemUtilitiesService,
    private router: Router,
    private passageService: AllPassagesService,
    private location: Location
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.itemId = params["id"];
      this.itemType = params["type"];
    });

    if (this.itemType === "MCQ") {
      this.formType = "Single Response";
      //console.log(this.formType);
    } else if (this.itemType === "MRQ") {
      this.formType = "Multiple Response";
    } else if (this.itemType === "TRUE_FALSE") {
      this.formType = "True or False";
    } else if (this.itemType === "YES_NO") {
      this.formType = "Yes or No";
    } else if (this.itemType === "CLOZE_TEXT") {
      this.formType = "Cloze with Text";
    } else if (this.itemType === "CLOZE_DROPDOWN") {
      this.formType = "Cloze with dropdown";
    } else if (this.itemType === "ESSAY_RICH_TEXT") {
      this.formType = "Rich Text Essay";
    } else if (this.itemType === "SHORT_TEXT") {
      this.formType = "Short Answer";
    } else if (this.itemType === "ASSOCIATION") {
      this.formType = "Matching";
    } else if (this.itemType === "ORDER_LIST") {
      this.formType = "Ordering";
    } else if (this.itemType === "CHOICE_MATRIX") {
      this.formType = "Choice Matrix";
    } else if (this.itemType === ItemTypes.CLOZE_DROPDOWN_IMAGE) {
      this.formType = "Label Image with Dropdown";
    } else if (this.itemType === ItemTypes.IMAGE_DRAG_AND_DROP) {
      this.formType = "Label Image with Drag and Drop";
    } else if (this.itemType === ItemTypes.CLOZE_TEXT_IMAGE){
      this.formType = "Label Image with Text";
    }
  }

  ngOnInit(): void {
    console.log(this.itemTrailInformation);
    this.breadCrumbItems = [
      {
        label: "edit-question",
        active: false,
      },
      {
        label: this.itemService.subjectName,
        active: true,
      },
    ];

    this.itemService.fetchIndividualItem(this.itemId).subscribe((item) => {
      this.item = item;

      console.log(this.item);
    });
  }

  saved(item: any) {
    this.savedItem = item;
    // console.log('new item just created in assessment', this.savedItem);
  }

  editPassage() {
    // console.log(this.item.passageId);
    this.router.navigate([
      "itembank/passages/subjects/" + this.item.passageId + "/edit-passage",
    ]);
  }

  back() {
    if (this.itemUtil.previewItem) {
      this.itemUtil.previewItem = false;
    } else {
      this.location.back();
    }
  }

  ngOnDestroy(): void {
    this.itemUtil.previewItem = false;
  }
}
