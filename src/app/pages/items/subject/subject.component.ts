import { NgbDropdown, NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from "@angular/core";
import Swal from "sweetalert2";
import { HttpErrorResponse } from "@angular/common/http";
import { ItemHttpService } from "../item-http.service";
import { ListAllItemsPage } from "../models/list-all-items-page.model";
import { ItemStatusEnum } from "../models/item-status-enum";
import { ItemTypes } from "../models/item-types";
import { FilterItems, ItemUsed } from "../models/filter-items.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ItemUtilitiesService } from "../item-utilities.service";
import { NewSubTopic } from "../models/new-sub-topic.model";
import { SubjectTopicsTree } from "../models/subject-topics-tree.model";
import { NewTopic } from "../models/new-topic.model";
import { Location } from "@angular/common";
import { NotifierService } from "angular-notifier";
import { SubjectService } from "../subject.service";
import { UserService } from "src/app/shared/user.service";
import { Account } from "src/app/authentication/model/account.model";
import { AssessmentFilterInformation } from "../models/assessment-filter-information";
import { DropdownSubjectList } from "../models/dropdown-subject-list.model";
import { CopyMoveItems } from "../models/copy-move-items";
import { AssessmentFilterResult } from "../../assessment/model/assessment-filter-result";
import { AssessmentsService } from "../../assessment/service/assessments.service";
import { AssessmentPassageFilter } from "../../assessment/model/assessment-passage-filter";
import { AssessmentPassageFilterInformation } from "../../assessment/model/assessment-passage-filter-information";
import { ListPassageTopics } from "../../passages/model/list-passage-topics.model";
import { ExistingItemsAndPasaagesInExamBlock } from "../models/existing-items-and-pasaages-in-exam-block";
import { UsageHistory } from "../models/usage-history";
import { ListAllSubjects } from "../models/list-all-subjects.model";
import { DomSanitizer } from "@angular/platform-browser";
import { Observable } from "rxjs";
export interface RenameTopicModel {
  name: string;
}

@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styleUrls: ["./subject.component.scss"],
})
export class SubjectComponent implements OnInit, OnChanges {
  @Input() _subjectName: string;
  @Input() _subjectId: string;
  @Input() _assessmentItemsList: any[];
  @Input() _currentActivity: string;
  @Input() _currentBlock: any;
  @Input() _noOfItems: number;
  @Input() _sectionId: string;
  @Input() _assessmentId: string;
  @Input() _existingItemIds: string[] = [];
  @Input() _loadingExistingItemIds: boolean = false;
  @Output() back = new EventEmitter();
  @Output() addItemToAssessment = new EventEmitter();
  @Output() removeItemFromAssessment = new EventEmitter();
  @Output() gotoNewItem = new EventEmitter();

  _errorMsg: string;

  breadCrumbItems!: Array<{}>;

  itemsPage: ListAllItemsPage;

  questionType: string;

  editing: boolean = false;

  previewData: any;

  copiedItems: CopyMoveItems = new CopyMoveItems();

  movedItems: CopyMoveItems = new CopyMoveItems();

  subjects: DropdownSubjectList[] = [];

  itemStatus: string[] = [];

  itemType: string[] = [];

  difficultyLevel: number[] = [1, 2, 3, 4, 5];

  tags: any[] = [];

  tagIds: string[] = [];

  page: number = 1;

  itemUsages: string[] = Object.keys(ItemUsed);

  filterInformation: FilterItems = new FilterItems();

  assessmentFilter: AssessmentFilterInformation =
    new AssessmentFilterInformation();

  assessmentPassageFilter: AssessmentPassageFilterInformation =
    new AssessmentPassageFilterInformation();

  assessmentFilters: AssessmentFilterResult[] = [];

  assessmentPassageFilters: AssessmentFilterResult[] = [];

  editQuestion: boolean = false;

  showFilter: boolean = false;

  subject: SubjectTopicsTree;

  subjectName: string;

  newTopic: NewTopic = new NewTopic();

  newSubtopic: NewSubTopic = new NewSubTopic();

  assessmentItems: any[] = [];

  currentTopic: any;

  submitted: boolean = false;

  activePreviewItem: number;

  displayLink: boolean = false;

  clickedTopic: any;

  itemProps: any;

  currentUser: Account;

  assessmentSelectedTopic: any;

  copyDestinationTopicTree: any;

  copyDestinationSubtopicTree: any;

  moveDestinationTopicTree: any;

  moveDestinationSubtopicTree: any;

  itemIdToBeCopied: string;

  itemIdToBeMoved: string;

  selectedSubtopic: string = "";

  selectedTopic: any;

  selectedSubtopicId: string;

  assessmentActive: boolean = false;

  selectedQuestionIds: string[] = [];

  pageSize: number = 20;

  pageNo: number = 0;

  modalReference: NgbModalRef;

  totalFilterSelections: number = 0;

  questionIdMarkedForDeletion: string;

  showingPreviewLoader: boolean = true;

  subject_id: string;

  totalItems: number;

  passageTopics: ListPassageTopics[] = [];

  copying: boolean = false;

  moving: boolean = false;

  manuallySelectedItemsAndPassages: ExistingItemsAndPasaagesInExamBlock =
    new ExistingItemsAndPasaagesInExamBlock();

  quickGuide = `
  <div class="p-4">
    <h6 class="mb-2 fw-bold text-uppercase">Introduction</h6>
    <p>Welcome to the Questions Page! On this page, you can efficiently add, view, manage your topics, 
      sub-topics and questions. Let's explore how to navigate this page:Here's a quick overview of what you can do:  
    </p>

    <h6 class="mb-2 fw-bold text-uppercase">How to Add a Topic</h6>

    <ol>
      <li class="text-muted mb-4">
        To create a topic, click on the “+” icon next to the Subject name
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
      <li class="text-muted mb-4">
        Enter the desired topic name(must not be less than 5 characters) and save your changes.
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
    </ol>
    <h6 class="mb-2 fw-bold text-uppercase">How to Add a Sub-Topic to a Topic</h6>
    <ol>
      <li class="text-muted mb-4">
        Click on the topic name marked in a black rectangle.
        The number badges labeled A, B, and C serve as indicators, providing information about the total 
        number of questions associated with each respective label. 
        A (Topics in a Subject), B (Questions in a Topic), and C (Questions in a SubTopic)
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
      <li class="text-muted mb-4">
        On the right-corner of your screen, click on the “Add SubTopic” yellow Icon marked in black
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
      <li class="text-muted mb-4">
        Enter the desired SubTopic name(must not be less than 5 characters) and save your changes.
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
    </ol>
    <h6 class="mb-2 fw-bold text-uppercase">How to Edit/RenameTopic</h6>
    <ol>
      <li class="text-muted mb-4">
        Click on the Topic you want to rename.
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
      <li class="text-muted mb-4">
        On the right-corner of your screen, click on the ‘pen-icon’ marked in black
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
      <li class="text-muted mb-4">
        A modal with the header “Rename Topic” will appear for you to make your desired changes, which you can now then save.
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
    </ol>
    <h6 class="mb-2 fw-bold text-uppercase">How to Remove/Delete a Topic</h6>
    <ol>
      <li class="text-muted mb-4">
        Click on the desired topic you want to remove/delete
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
      <li class="text-muted mb-4">
        On the right-corner of your screen, click on the ‘bin’ icon marked in black
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
      <li class="text-muted mb-4">
        Confirm you would like to delete the topic by clicking ‘Yes, Delete It’ in the displayed modal dialog.
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
    </ol>
    <h6 class="mb-2 fw-bold text-uppercase">How to Remove/Delete a Sub-Topic</h6>
    <ol>
      <li class="text-muted mb-4">
        Click on the Sub-Topic you want to delete
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
      <li class="text-muted mb-4">
        On the right-corner of your screen, click on the ‘bin’ icon marked in black
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
      <li class="text-muted mb-4">
        Confirm you would like to delete the Sub-Topic by clicking ‘Yes, Delete It’ in the displayed modal dialog.
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
    </ol>
    <h6 class="mb-2 fw-bold text-uppercase">How to Rename Sub-Topic</h6>
    <ol>
      <li class="text-muted mb-4">
        Click on the Sub-Topic you want to rename.
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
      <li class="text-muted mb-4">
        On the right-corner of your screen, click on the ‘pen-icon’ marked in black
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
      <li class="text-muted mb-4">
        Make your desired changes and save the new Sub-Topic name.
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
    </ol>
    <h6 class="mb-2 fw-bold text-uppercase">How to View Questions</h6>
    <ol>
      <li class="text-muted mb-4">
        To access topics within a Subject, locate them on the left side of the screen
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
      <li class="text-muted mb-4">
        Click on the main topic (circled as 'a') or a sub-topic (circled as 'b') to view questions in either a topic or subtopic
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
      <li class="text-muted mb-4">
        Once you’ve chosen a specific topic or sub-topic, questions related to that topic or subtopic within 
        the subject will be displayed
        <div class="d-flex justify-content-center align-items-center col-12">
          <img
            src="assets/images/snapshots/users/users_creation_process.gif"
            alt=""
            height="500"
            width="80%"
          />
        </div>
      </li>
    </ol>
  </div>
  `;

  loading_items: boolean = true;
  loading_topics: boolean = true;
  randomAssessmentItemSelectionScore!: number;
  filterQuestionsScore!: number;
  itemUsageHistory: UsageHistory[] = [];
  loading_usage_history: boolean = false;
  allSubjects: ListAllSubjects[] = [];
  loadingAllSubjects: boolean = true;
  subjectId: string = "";
  itemToMove: any;

  constructor(
    private itemService: ItemHttpService,
    private subjectService: SubjectService,
    private itemUtil: ItemUtilitiesService,
    private router: Router,
    private modal: NgbModal,
    private location: Location,
    private notifier: NotifierService,
    private ar: ActivatedRoute,
    private assessmentService: AssessmentsService,
    private userService: UserService,
    private domSanitizer: DomSanitizer
  ) {
    this.currentUser = this.userService.getCurrentUser();

    this.assessmentFilter.totalQuestions -= this.totalFilterSelections;

    // console.log(this.assessmentFilter.totalQuestions);

    // dropdown for move/copy question
    if (this.currentUser.authorities.includes("ADMIN")) {
      this.itemService.fetchAllSubjectsDropdown().subscribe(
        (value) => {
          value.map((item) => {
            item.subjectName.toUpperCase();
          });
          // console.log(value);
          this.subjects = value;
          // console.log(this.subjects, "subjects");
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
        }
      );
    }
    // else{
    //   this.fetchTopicTreeUser()
    // }
    this.subject_id = this.ar.snapshot.params["id"];
  }

  updateErrorMessage(error_msg: string) {
    this._errorMsg = error_msg;
  }

  onSettingsButtonClicked() {
    document.body.classList.toggle("right-bar-enabled");
    const rightBar = document.getElementById("theme-settings-offcanvas");
    if (rightBar != null) {
      rightBar.classList.toggle("show");
      rightBar.setAttribute("style", "visibility: visible;");
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.itemService.getDuplicateStatus().subscribe((error_msg) => {
      this._errorMsg = error_msg;
    });
  }

  ngOnInit(): void {
    this.itemStatus = Object.values(ItemStatusEnum);
    this.itemType = Object.values(ItemTypes);

    this.assessmentActive = this.itemService.assessmentActive;

    // console.log({ass: this.itemService.assessmentActive, itemTrail})

    this.breadCrumbItems = [
      { label: this.itemService.subjectName, active: true },
    ];

    //console.log(this._currentBlock);
    // if (this.currentUser.authorities.includes("ADMIN")) {
    //   console.log("block 1");
    //   this.itemService.fetchAllSubjectsItems().subscribe(
    //     (value) => {
    //       this.allSubjects = value;
    //       this.loadingAllSubjects = false;

    //       if (this.subject_id === "questions" && this.allSubjects.length > 0) {
    //         // Set the default subject details
    //         const defaultSubject = this.allSubjects[0];
    //         this.itemService.setSubjectId(defaultSubject.subjectId);
    //         this.itemService.totalItemsInCurrentSubject =
    //           defaultSubject.totalItems;
    //         this.totalItems = defaultSubject.totalItems;
    //         this.itemService.setSubjectName(defaultSubject.name);
    //         this.subjectName = defaultSubject.name;
    //       }

    //       // Fetch subject topics tree if no active assessment
    //       if (!this.assessmentService.activeAssessment) {
    //         console.log("Fetching subject topics tree");
    //         this.fetchSubjectTopicsTreeAdmin();
    //       }

    //       // console.log(this.allSubjects);
    //     },
    //     (error: HttpErrorResponse) => {
    //       //console.log(error);
    //       this.loadingAllSubjects = false;
    //       this.notifier.notify("error", `${error.error.msg}`);
    //     }
    //   );
    // } else {
    //   this.fetchAllSubNonAdmin();
    // }

    /** starting point for Logic to fetch passage topic tree */
    if ( this.assessmentActive && this._currentBlock.selectionType == "AUTOMATED" && this._currentBlock.blockType == "PASSAGES") {
      this.loadingAllSubjects = false;
      this.subjectName = this._subjectName;
      // console.log(this._currentBlock);
      this.itemService.fetchAssessmentPassageTopicsTree( this._subjectId, this._currentBlock.totalQuestionsInPassage)
      .subscribe((value) => {
        this.passageTopics = value;
        console.log(this.passageTopics);
      });
    }

    if (this.assessmentActive && this._currentBlock.selectionType == "MANUAL") {
      // console.log("hello world");
      this.loadingAllSubjects = false;
      this.fetchAssessmentSubjectTopicsTree();
      this.itemService.fetchManualSelectedItemsInAssessment( this._assessmentId, this._sectionId)
      .subscribe(
        (value) => {
          this.manuallySelectedItemsAndPassages = value;
        },
        (error: HttpErrorResponse) => {
          this.notifier.notify("error", error.error.message);
        }
      );

    } else if ( this.assessmentActive && this._currentBlock.selectionType == "AUTOMATED") {
      // console.log("hello earth");
      this.loadingAllSubjects = false;
      this.fetchAssessmentSubjectTopicsTree();
    }

    if (this.itemService.totalItemsInCurrentSubject) {
      this.totalItems = this.itemService.totalItemsInCurrentSubject;
    }

    if ( this.itemService.topicId ||(this.itemService.subtopicId && !this.assessmentActive)) {
      /* console.log(this.itemService.topicId, 'topicId');
      console.log(this.itemService.subtopicId, 'subtopicId'); */

      // console.log(this.itemService.topicId, "topicId");
      this.itemService.fetchAllItems( this.itemService.subjectId, this.itemService.topicId, this.itemService.subtopicId, this.pageNo, this.pageSize)
      .subscribe(
        (value) => {
          this.itemsPage = value;
          this.itemsPage.content.forEach(
            (item) => (item.showFullItem = false)
          );
          this.itemService.topicId = "";
          this.itemService.subtopicId = "";
          this.loading_items = false;
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
        }
      );
    }

    if (
      (this.assessmentActive && this.itemService.subtopicId && this._currentBlock && this._currentBlock.sectionId) || this.itemService.topicId) {
      // console.log("asseement is active");
      /* console.log(this.itemService.topicId, 'topicId');
      console.log(this.itemService.subtopicId, 'subtopicId'); */
      this.itemService.fetchAllAssessmentItems( this._assessmentId, this._currentBlock && this._currentBlock.sectionId, this.itemService.subjectId, this.itemService.topicId, this.itemService.subtopicId, this.pageNo, this.pageSize)
        .subscribe(
          (value) => {
            this.itemsPage = value;
            this.itemsPage.content.forEach(
              (item) => (item.showFullItem = false)
            );
            this.itemService.topicId = "";
            this.itemService.subtopicId = "";
            this.loading_items = false;
          },
          (error: HttpErrorResponse) => {
            // console.log(error);
          }
        );
    }

    /** Start Fetching topic tree logic */
    this.fetchSubjectDetails();

    // persit current page state
    // console.log(this.itemService.subjectId, "sub id here");
    if (this.itemService.subjectId) {
      this.subjectId = this.itemService.subjectId;
    }
    /** End fetching topic tree logic */

    /** Start */
    if (this._currentBlock) {
      this.listAssessmentFilterBlocks();
    }

    this.subjectName = this.itemService.subjectName;

    if (this._assessmentItemsList === undefined) {
      //console.log(this.itemService.subjectId);
      return;
    } else if (this._assessmentItemsList.length > 0) {
      this.assessmentItems = this._assessmentItemsList;
      //console.log(this.assessmentItems);
    }

    if (
      this.itemService.subjectId === undefined &&
      (this._subjectId === "" || this._subjectId === undefined)
    ) {
      /* console.log(this.itemService.subjectId);
      console.log(this._subjectId); */
      this.location.back();
      //this.router.navigate(['/itembank/items/subjects']);
    }

    this.subjectName = this.itemService.subjectName;

    //this.fetchItems();

    const itemTrail = this.itemUtil.getSavedItemTrail()
    if(itemTrail) {
      //  this.itemUtil.currentItemTrail = this.itemUtil.currentItemTrail ?? itemTrail
    }
    this.breadCrumbItems = [{ label: "Subjects" }, { label: this.subjectName ?? itemTrail?.subjectName, active: true }];
  }

  fetchAssessmentSubjectTopicsTree() {
    this.loadingAllSubjects = true;
    this.itemService
      .fetchAssessmentSubjectTopicsTree(this.itemService.subjectId)
      .subscribe({
        next: (value) => {
          this.subject = value;
          // console.log(value);
          this.loadingAllSubjects = false;

          if (!this.subject.topics[0]) {
            this.loading_topics = false;
            this.loading_items = false;

            // console.log("hrllo here");
            return;
          }
          this.fetchItems(this.subject.topics[0]);
          this.clickedTopic = this.subject.topics[0];
          // console.log(this.clickedTopic);
          let itemTrail = {
            subjectId: this.itemService.subjectId,
            subjectName: this.subjectName,
            topicId: this.subject.topics[0].topicId,
            topicName: this.subject.topics[0].topicName,
          };

          this.itemProps = itemTrail;
          this.itemUtil.currentItemTrail = itemTrail;
          this.itemUtil.saveCurrentItemTrail()
          this.loading_topics = false;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error.message);
        },
      });
  }

  fetchSubjectTopicsTreeAdmin() {
    // if (
    //   this.assessmentActive &&
    //   this._currentBlock.selectionType == "AUTOMATED"
    // ) {
    //   return;
    // }
    if (this.itemService.subjectId)
      this.itemService.fetchSubjectTopicsTreeAdmin(this.itemService.subjectId)
        .subscribe(
          (value) => {
            this.subject = value;
            this.subjectId = this.itemService.subjectId;
            // console.log(value);

            if (!this.subject.topics[0]) {
              this.loading_topics = false;
              this.loading_items = false;

              // console.log("hrllo here");
              return;
            }

            // console.log(this.itemUtil.currentItemTrail, "current tril");
            // const foundTopic = this.subject.topics.find((topic)=> topic.topicId === this.itemUtil.currentItemTrail.topicId)
            // console.log(foundTopic, "found")
            this.fetchItems(this.subject.topics[0]);
            this.clickedTopic = this.subject.topics[0];
            if (this.itemUtil.currentItemTrail) {
              const foundTopic = this.subject.topics.find((topic) =>
                  topic.topicId === this.itemUtil.currentItemTrail.topicId
              );
              this.fetchItems(foundTopic);
              this.clickedTopic = foundTopic;
              // console.log(foundTopic, "found");
            }

            // console.log(this.clickedTopic);
            let itemTrail = {
              subjectId: this.itemService.subjectId,
              subjectName: this.subjectName,
              topicId: this.subject.topics[0].topicId,
              topicName: this.subject.topics[0].topicName,
            };

            this.itemProps = itemTrail;
            this.itemUtil.currentItemTrail = itemTrail;
            this.itemUtil.saveCurrentItemTrail()
            this.loading_topics = false;
            //console.log(this.subject);
          },
          (error: HttpErrorResponse) => {
            // console.log(error);
            if (error) {
              this.loading_topics = false;
              return this.notifier.notify("error", `${error.error.msg}`);
            }
          }
        );
  }

  fetchSubjectDetails() {
    if (this.currentUser.authorities.includes("ADMIN")) {
      this.handleAdminActions();
    }
    // else if (this.currentUser.authorities.includes("EXAMINER")) {
    //   this.handleExaminerActions();
    // }
    else if (this.currentUser.authorities.includes("MODERATOR")) {
      this.handleModeratorActions();
    } else if (this.currentUser.authorities.includes("AUTHOR")) {
      this.handleAuthorActions();
    } else {
      console.warn("Unhandled role");
    }
  }

  handleAdminActions() {
    // console.log("Admin block");
    this.itemService.fetchAllSubjectsItems().subscribe(
      (value) => {
        this.allSubjects = value;
        this.loadingAllSubjects = false;

        if (this.itemService.subjectId) {
          this.selectSubject(this.itemService.subjectId);
          return;
        }

        if (this.subject_id === "questions" && this.allSubjects.length > 0) {
          const defaultSubject = this.allSubjects[0];
          this.setSubjectDetails(defaultSubject);
        }

        if (!this.assessmentService.activeAssessment) {
          this.subjectId = this.itemService.subjectId;
          this.fetchSubjectTopicsTreeAdmin();
        }
      },
      (error: HttpErrorResponse) => this.handleError(error)
    );
  }

  handleExaminerActions() {
    this.fetchAllSubNonAdmin();
    this.fetchAndHandleSubjectTree(
      this.itemService.fetchAssessmentSubjectTopicsTree(
        this.itemService.subjectId
      )
    );
  }

  handleModeratorActions() {
    this.itemService.fetchAllSubjectsNonAdmin().subscribe({
      next: (value) => {
        this.allSubjects = value;
        this.loadingAllSubjects = false;

        if (this.itemService.subjectId) {
          this.selectSubject(this.itemService.subjectId);

          return;
        }
        // if (this.subject_id === "questions" && this.allSubjects.length > 0) {
        const defaultSubject = this.allSubjects[0];
        this.setSubjectDetails(defaultSubject);
        // }

        this.fetchTopicTreeModerator();
      },
      error: (err) => {
        this.handleError(err);
      },
    });
  }

  handleAuthorActions() {
    this.itemService.fetchAllSubjectsNonAdmin().subscribe({
      next: (value) => {
        this.allSubjects = value;
        this.loadingAllSubjects = false;

        if (this.itemService.subjectId) {
          this.selectSubject(this.itemService.subjectId);
          return;
        }

        // if (this.subject_id === "questions" && this.allSubjects.length > 0) {
        const defaultSubject = this.allSubjects[0];
        this.setSubjectDetails(defaultSubject);
        // }

        this.fetchTopicTreeAuthor();
        // this.fetchAndHandleSubjectTree(
        //   this.itemService.fetchSubjectTopicsTreeAuthor(
        //     this.allSubjects[0].subjectId
        //   )
        // );
      },
      error: (err) => {
        this.handleError(err);
      },
    });
  }

  fetchAndHandleSubjectTree(fetchObservable: Observable<SubjectTopicsTree>) {
    fetchObservable.subscribe(
      (value) => {
        if (value) {
          this.subject = value;
          console.log(value, "value");
          const firstTopic = this.subject.topics[0];
          this.fetchItems(firstTopic);
          this.setItemTrail(firstTopic);
          this.loading_topics = false;
        }
      },
      (error: HttpErrorResponse) => this.handleError(error)
    );
  }

  setSubjectDetails(subject: any) {
    this.itemService.setSubjectId(subject.subjectId);
    this.itemService.totalItemsInCurrentSubject = subject.totalItems;
    this.totalItems = subject.totalItems;
    this.itemService.setSubjectName(subject.name);
    this.subjectName = subject.name;
    this.subjectId = subject.subjectId;
  }

  setItemTrail(topic: any) {
    const itemTrail = {
      subjectId: this.itemService.subjectId,
      subjectName: this.subjectName,
      topicId: topic.topicId,
      topicName: topic.topicName,
    };
    this.itemProps = itemTrail;
    this.itemUtil.currentItemTrail = itemTrail;
    this.itemUtil.saveCurrentItemTrail()
  }

  handleError(error: HttpErrorResponse) {
    this.loadingAllSubjects = false;
    this.loading_topics = false;
    this.notifier.notify("error", `${error.error.msg}`);
  }

  handleSubjectSelection(subject: ListAllSubjects) {
    this.selectSubject(subject.subjectId);
  }
  selectSubject(subjectId: string) {
    this.itemService.subjectId = subjectId;
    const foundSubject = this.allSubjects.find(
      (subject) => subject.subjectId === subjectId
    );

    this.itemService.setSubjectName(foundSubject.name);
    this.totalItems = foundSubject.totalItems;
    this.itemService.totalItemsInCurrentSubject = foundSubject.totalItems;
    this.subjectName = this.itemService.subjectName;

    this.itemService.setSubjectId(foundSubject.subjectId);

    this.itemService.currentSubjectModerationEnabled = foundSubject.moderationId
      ? true
      : false;

    if (this.currentUser.authorities.includes("ADMIN")) {
      this.fetchSubjectTopicsTreeAdmin();
    } else if (this.currentUser.authorities.includes("AUTHOR")) {
      this.fetchTopicTreeAuthor();
    } else if (this.currentUser.authorities.includes("MODERATOR")) {
      this.fetchTopicTreeModerator();
    }

    // Add a trail
    const itemTrail = {
      subjectId: foundSubject.subjectId,
      subjectName: foundSubject.name,
      topicId: null,
      topicName: null,
      subtopicId: null,
      subtopicName: null,
    };
    this.itemUtil.saveCurrentItemTrail(itemTrail)
  }

  fetchTopicTreeAuthor() {
    // console.log(this.itemService.subjectId);
    this.itemService
      .fetchSubjectTopicsTreeAuthor(this.itemService.subjectId)
      .subscribe(
        (value) => {
          if (value) {
            this.subject = value;

            this.fetchItems(this.subject.topics[0]);
            this.clickedTopic = this.subject.topics[0];
            let itemTrail = {
              subjectId: this.itemService.subjectId,
              subjectName: this.subjectName,
              topicId: this.subject.topics[0].topicId,
              topicName: this.subject.topics[0].topicName,
            };

            this.itemProps = itemTrail;
            this.itemUtil.currentItemTrail = itemTrail;
            this.itemUtil.saveCurrentItemTrail()
            this.loading_topics = false;
          }
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
          this.loading_topics = false;
        }
      );
  }

  fetchTopicTreeModerator() {
    console.log(this.itemService.subjectId);
    this.itemService
      .fetchItemsAwaitingModerationTopicsTree(
        this.itemService.subjectId,
        ItemStatusEnum.AWAITING_MODERATION
      )
      .subscribe(
        (value) => {
          if (value) {
            this.subject = value;

            this.fetchItems(this.subject.topics[0]);
            this.clickedTopic = this.subject.topics[0];
            let itemTrail = {
              subjectId: this.itemService.subjectId,
              subjectName: this.subjectName,
              topicId: this.subject.topics[0].topicId,
              topicName: this.subject.topics[0].topicName,
            };

            this.itemProps = itemTrail;
            this.itemUtil.currentItemTrail = itemTrail;
            this.itemUtil.saveCurrentItemTrail()
            this.loading_topics = false;
            this.loading_topics = false;
          }
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
          this.loading_topics = false;
        }
      );
  }

  fetchTopicTreeUser() {
    // console.log(this.allSubjects);
    this.itemService
      .fetchSubjectTopicsTreeUser(this.itemService.subjectId)
      .subscribe(
        (value) => {
          this.subject = value;
          // console.log(value);

          if (!this.subject.topics[0]) {
            this.loading_topics = false;
            this.loading_items = false;

            // console.log("hrllo here");
            return;
          }
          this.fetchItems(this.subject.topics[0]);
          this.clickedTopic = this.subject.topics[0];
          // console.log(this.clickedTopic);
          let itemTrail = {
            subjectId: this.itemService.subjectId,
            subjectName: this.subjectName,
            topicId: this.subject.topics[0].topicId,
            topicName: this.subject.topics[0].topicName,
          };

          this.itemProps = itemTrail;
          this.itemUtil.currentItemTrail = itemTrail;
          this.itemUtil.saveCurrentItemTrail()
          this.loading_topics = false;
          //console.log(this.subject);
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
          if (error) {
            this.loading_topics = false;
            return this.notifier.notify("error", `${error.error.msg}`);
          }
        }
      );
  }
  listAssessmentFilterBlocks() {
    this.assessmentService
      .listFilterBlocks(
        this._assessmentId,
        this._sectionId,
        this._subjectId,
        this._currentBlock.blockId
      )
      .subscribe(
        (value) => {
          if (this._currentBlock.blockType === "SINGLE_QUESTIONS") {
            this.assessmentFilters = value;
            this.updateSelectedBlockFilterQuestionsCount();
          } else if (this._currentBlock.blockType === "PASSAGES") {
            this.assessmentPassageFilters = value;
            this.updateSelectedBlockFilterPassagesCount();
          }
        },
        (error) => {
          this.notifier.notify("error", `${error.error.message}`);
        }
      );
  }

  displayItemTags(roleDropdown: NgbDropdown) {
    roleDropdown.open();
  }

  fetchAllSubNonAdmin() {
    this.itemService.fetchAllSubjectsNonAdmin().subscribe({
      next: (value) => {
        this.allSubjects = value;
        this.itemService.subjectId = value[0].subjectId;
        this.loadingAllSubjects = false;
      },
      error: (err: HttpErrorResponse) => this.handleError(err),
    });
  }

  hideItemTags(roleDropdown: NgbDropdown) {
    roleDropdown.close();
  }

  openNewRandomSelectionFilterModal(randomFilterModal: any) {
    if (
      this.subject.topics[0].topicId !== "00000000-0000-0000-0000-000000000000"
    ) {
      this.subject.topics.unshift({
        topicName: "ALL-TOPIC(S)",
        topicId: "00000000-0000-0000-0000-000000000000",
        totalItems: this.itemService.totalItemsInCurrentSubject,
      }); //add all-topics to topic list
    }
    this.assessmentFilter.totalQuestions = this._currentBlock.totalQuestions;
    this.modalReference = this.modal.open(randomFilterModal, {
      centered: true,
      size: "md",
      backdrop: "static",
      keyboard: false,
    });
    this.assessmentFilter.totalQuestions -= this.totalFilterSelections;

    console.log(this.assessmentFilter.totalQuestions);
  }

  removeAllTopics() {
    this.subject.topics.splice(0, 1);
  }

  openNewPassageSelectionFilterModal(randomFilterOptions: any) {
    this.modalReference = this.modal.open(randomFilterOptions, {
      centered: true,
      size: "md",
    });

    console.log(this._currentBlock, "current block");
    this.assessmentPassageFilter.totalPassages =
      this._currentBlock.totalQuestions;
    this.assessmentPassageFilter.totalPassages -= this.totalFilterSelections;
    // console.log(this.modalReference);
  }

  recieveTag($event: any) {
    let tags = [];
    $event.forEach((tag) => {
      tags.push(tag.tagId);
    });
    this.assessmentFilter.tagIds = tags;
    this.assessmentPassageFilter.tagIds = tags;
    // console.log(this.assessmentFilter);
    // console.log(this.assessmentPassageFilter);
  }

  pickTopic(event: any) {
    // console.log('selected topic', event);
    this.assessmentSelectedTopic = event;
    console.log(event, "selected topic");
    //this.assessmentFilter.topicName = event.topicName;
    this.assessmentFilter.topicId = event.topicId;
    this.assessmentFilter.topicName = event.topicName;
    // console.log(this.assessmentFilter);
  }

  pickTopicForAssessmentPassageFilter(event: any) {
    this.assessmentSelectedTopic = event;
    console.log(event, "selected topic");
    //this.assessmentFilter.topicName = event.topicName;
    this.assessmentPassageFilter.topicId = event.topicId;
    this.assessmentPassageFilter.topicName = event.topicName;
  }

  reload(event: any) {
    // console.log("i am here");
    // console.log(event);
    // todo: refactor this
    // reload topics tree
    if (this.currentUser.authorities.includes("ADMIN")) {
      this.itemService
        .fetchSubjectTopicsTreeAdmin(this.itemService.subjectId)
        .subscribe(
          (value) => {
            this.subject = value;
            /* this.subject.topics.unshift({ topicName: 'ALL-TOPIC(S)', topicId: '00000000-0000-0000-0000-000000000000', totalItems: 0 }) */
            this.fetchItems(
              this.clickedTopic ? this.clickedTopic : this.subject.topics[0]
            );
            let itemTrail = {
              subjectId: this.itemService.subjectId,
              subjectName: this.subjectName,
              topicId: this.subject.topics[0].topicId,
              topicName: this.subject.topics[0].topicName,
              subtopicId: null,
              subtopicName: null,
            };

            this.itemProps = itemTrail;
            this.itemUtil.currentItemTrail = itemTrail;
            this.itemUtil.saveCurrentItemTrail()

            this.loading_topics = false;
            //console.log(this.subject);
          },
          (error: HttpErrorResponse) => {
            //console.log(error);
            if (error) {
              this.loading_topics = false;
              return this.notifier.notify("error", `${error.error.msg}`);
            }
          }
        );
    } else if (this.currentUser.authorities.includes("AUTHOR")) {
      this.itemService
        .fetchSubjectTopicsTreeAuthor(this.itemService.subjectId)
        .subscribe(
          (value) => {
            this.subject = value;
            /* this.subject.topics.unshift({ topicName: 'ALL-TOPIC(S)', topicId: '00000000-0000-0000-0000-000000000000', totalItems: 0 }) */
            this.fetchItems(
              this.clickedTopic ? this.clickedTopic : this.subject.topics[0]
            );
            let itemTrail = {
              subjectId: this.itemService.subjectId,
              subjectName: this.subjectName,
              topicId: this.subject.topics[0].topicId,
              topicName: this.subject.topics[0].topicName,
              subtopicId: null,
              subtopicName: null,
            };

            this.itemProps = itemTrail;
            this.itemUtil.currentItemTrail = itemTrail;
            this.itemUtil.saveCurrentItemTrail()

            this.loading_topics = false;
            //console.log(this.subject);
          },
          (error: HttpErrorResponse) => {
            //console.log(error);
            if (error) {
              this.loading_topics = false;
              return this.notifier.notify("error", `${error.error.msg}`);
            }
          }
        );
    } else if (this.currentUser.authorities.includes("MODERATOR")) {
      this.itemService
        .fetchItemsAwaitingModerationTopicsTree(
          this.itemService.subjectId,
          ItemStatusEnum.AWAITING_MODERATION
        )
        .subscribe(
          (value) => {
            this.subject = value;
            /* this.subject.topics.unshift({ topicName: 'ALL-TOPIC(S)', topicId: '00000000-0000-0000-0000-000000000000', totalItems: 0 }) */
            this.fetchItems(
              this.clickedTopic ? this.clickedTopic : this.subject.topics[0]
            );
            let itemTrail = {
              subjectId: this.itemService.subjectId,
              subjectName: this.subjectName,
              topicId: this.subject.topics[0].topicId,
              topicName: this.subject.topics[0].topicName,
              subtopicId: null,
              subtopicName: null,
            };

            this.itemProps = itemTrail;
            this.itemUtil.currentItemTrail = itemTrail;
            this.itemUtil.saveCurrentItemTrail()

            this.loading_topics = false;
            //console.log(this.subject);
          },
          (error: HttpErrorResponse) => {
            //console.log(error);
            if (error) {
              this.loading_topics = false;
              return this.notifier.notify("error", `${error.error.msg}`);
            }
          }
        );
    }
  }

  pickSubTopic($event: any) {
    //this.assessmentFilter.subtopicName = $event.subtopicName
    this.assessmentFilter.subtopicId = $event.topicId;
    this.assessmentFilter.subtopicName = $event.subtopicName;
    // console.log(this.assessmentFilter);
  }

  pickSubTopicForAssessmentPassageFilter($event: any) {
    this.assessmentPassageFilter.subtopicId = $event.topicId;
    // this.assessmentPassageFilter.subtopicName = $event.subtopicName;
  }

  addNewFilterToBlock() {}

  addQuestionToAssessment(assessmentItem: any) {
    if (this.assessmentItems.length === this._noOfItems) {
      return this.notifier.notify(
        "error",
        "Sorry, you already have the required number of items!"
      );
    } else if (this.assessmentItems.includes(assessmentItem)) {
      this.notifier.notify(
        "error",
        "Oops...Sorry, this question has already been picked!"
      );
    } else {
      this.addItemToAssessment.emit(assessmentItem);
      this.assessmentItems.push(assessmentItem);
    }
  }

  removeQuestionFromAssessment(item, i) {
    this.assessmentItems.splice(this.assessmentItems.indexOf(i), 1);
    this.removeItemFromAssessment.emit(this.assessmentItems.indexOf(item));
  }

  backToAssessment() {
    this._currentActivity = "assessment";
    this.back.emit(this._currentActivity);
  }

  onHover(drop: NgbDropdown): void {
    drop.open();
  }

  out(drop: NgbDropdown): void {
    drop.close();
  }

  showFilters() {
    this.showFilter = !this.showFilter;
  }

  showTopicDetails(topic: any, subtopicId?: string, index?: number) {
    if (
      this.assessmentActive &&
      this._currentBlock.selectionType === "AUTOMATED"
    ) {
      return;
    }
    this.showFilter = false;
    let subtopicName = "";
    this.selectedTopic = topic;
    this.selectedSubtopicId = subtopicId;
    this.itemService.topicId = topic.topicId;
    this.itemService.subtopicId = topic.subtopicId;
    if (
      this.assessmentActive &&
      this._currentBlock.selectionType === "AUTOMATED"
    ) {
      this.fetchItems(topic);
      this.selectedSubtopic = "";
      this.clickedTopic = topic;
      // return;
    }
    if (subtopicId) {
      this.fetchItems(topic, subtopicId);
      topic.subtopics.filter((subtopic, position) => {
        if (index === position) {
          this.clickedTopic = { topic, ...subtopic };
          // console.log(this.clickedTopic);
          subtopicName = subtopic.subtopicName;
          this.selectedSubtopic = subtopicName;
        }
      });
    } else {
      this.fetchItems(topic);
      this.selectedSubtopic = "";
      this.clickedTopic = topic;
      // console.log('selected topic', this.clickedTopic);
    }
    let itemTrail = {
      subjectId: this.itemService.subjectId,
      subjectName: this.subjectName,
      topicId: topic.topicId,
      topicName: topic.topicName,
      subtopicId: subtopicId,
      subtopicName: subtopicName,
    };

    this.itemProps = itemTrail;
    this.itemUtil.currentItemTrail = itemTrail;
    this.itemUtil.saveCurrentItemTrail()
  }

  fetchItems(topic: any, subtopicId?: string) {
    // console.log("fetch items called here");
    this.loading_items = true;
    this.pageNo = 0;
    this.pageSize = 20;
    this.currentTopic = topic;
    if (this.assessmentActive && this._sectionId) {
      this.itemService
        .fetchAllAssessmentItems(
          this._assessmentId,
          this._sectionId,
          this.itemService.subjectId,
          topic.topicId,
          subtopicId,
          this.pageNo,
          this.pageSize
        )
        .subscribe(
          (value) => {
            this.itemsPage = value;
            this.itemsPage.content.forEach((item) => {
              item.showFullItem = false;
              item.showingPreviewLoader = false;
            });
            this.loading_items = false;
            // console.log(this.itemsPage.content);
          },
          (error: HttpErrorResponse) => {
            // console.log(error);
            this.loading_items = false;
          }
        );
    } else {
      this.itemService
        .fetchAllItems(
          this.itemService.subjectId,
          topic?.topicId,
          subtopicId,
          this.pageNo,
          this.pageSize
        )
        .subscribe(
          (value) => {
            this.itemsPage = value;
            this.itemsPage.content.forEach((item) => {
              item.showFullItem = false;
              item.stimulusSafeHtml = this.domSanitizer.bypassSecurityTrustHtml(
                this.itemService.sanitize(item.stimulus)
              );

              // Store a plain string version for previewing
              item.stimulusPreview = item.stimulus.slice(0, 50);
            });
            this.loading_items = false;
            // console.log(this.itemsPage.content);
          },
          (error: HttpErrorResponse) => {
            // console.log(error);
            this.loading_items = false;
          }
        );
    }
  }

  openUsageHistoryModal(itemUsageModal: any, itemId: string) {
    this.loading_usage_history = true;
    this.modalReference = this.modal.open(itemUsageModal, {
      centered: true,
      size: "md",
    });
    this.itemService.fetchItemUsageCount(itemId).subscribe(
      (value) => {
        if (value) {
          this.itemUsageHistory = value;
          this.loading_usage_history = false;
        }
      },
      (error: HttpErrorResponse) => {
        this.loading_usage_history = false;
        this.notifier.notify("error", error.error.message);
      }
    );

    /* this.router.navigate([
      '/examalpha/subjects/' +
        this.subject_id +
        '/questions/' +
        itemId +
        '/usage-history',
    ]); */
  }

  //pagination for non assessment view event
  itemsPageChange(event: any) {
    this.loading_items = true;
    this.pageSize = event.rows;
    this.pageNo = event.page;

    // console.log(this.clickedTopic);
    // console.log(this.selectedSubtopic);
    // console.log(this.selectedSubtopicId);
    this.itemService
      .fetchAllItems(
        this.itemService.subjectId,
        this.clickedTopic
          ? this.clickedTopic.topicId
          : this.subject.topics[0].topicId,
        this.selectedSubtopicId,
        this.pageNo,
        this.pageSize
      )
      .subscribe(
        (value) => {
          this.itemsPage = value;
          this.itemsPage.content.forEach((item) => (item.showFullItem = false));
          this.loading_items = false;
          // console.log(this.itemsPage.content);
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
          this.loading_items = false;
        }
      );
  }

  //pagination for assessment view event
  itemsPageChangeAssessment(event: any) {
    this.loading_items = true;
    this.pageSize = event.rows;
    this.pageNo = event.page;
    this.itemService
      .fetchAllAssessmentItems(
        this._assessmentId,
        this._sectionId,
        this.itemService.subjectId,
        this.selectedTopic.topicId,
        this.selectedSubtopicId,
        this.pageNo,
        this.pageSize
      )
      .subscribe(
        (value) => {
          this.itemsPage = value;
          this.itemsPage.content.forEach((item) => (item.showFullItem = false));
          // console.log(this.itemsPage.content);
          this.loading_items = false;
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
          this.loading_items = false;
        }
      );
  }

  recieveItemTags(tags: any) {
    // console.log(tags);
    this.tags = tags;
    // console.log('logging selected tag:', this.tags);
  }

  recieveTags(tags: any) {
    // console.log(tags);
    this.assessmentPassageFilter.tagIds = tags;
    //console.log(this.tags);
  }

  preview(item: any, i: number) {
    item.showingPreviewLoader = true;
    
    if (this.previewData) {
      this.itemsPage.content[this.activePreviewItem].showFullItem = false;
      item.showingPreviewLoader = false;
    }

    this.itemService.fetchIndividualItem(item.itemId).subscribe(
      (value) => {
        item.showingPreviewLoader = false;
        if (value) {
          this.activePreviewItem = i;
          this.previewData = value;
          const sanitizedHtml = this.itemService.sanitize(this.previewData.stimulus);
          // this.previewData.stimulus =
          //   this.domSanitizer.bypassSecurityTrustHtml(sanitizedHtml);
          item.showFullItem = true;
          // console.log({ value })
        }
      },
      (err: HttpErrorResponse) => {
        item.showingPreviewLoader = false;
        //console.log(err);
        this.notifier.notify("error", `${err.error.message}`);
      }
    );
  }

  hidePreview(item, i) {
    item.showFullItem = false;
    this.previewData = {};
  }

  edit() {
    this.editQuestion = !this.editQuestion;
    //this.router.navigate(['/itembank/subjects/' + this.itemService.subjectId + '/new-item'], {queryParams: { type: `${}`}})
  }

  buildFilter() {
    // console.log('Tags', this.tags);
    this.tags = this.tags.map((tag) => {
      return tag.tagId;
    });
    this.tagIds = this.tags;
    // console.log(this.tagIds);

    if (this.filterQuestionsScore < 0) {
      return this.notifier.notify(
        "error",
        "Please ensure the score is not a negative value!"
      );
    }

    if (this.filterQuestionsScore) {
      this.filterInformation.score = this.filterQuestionsScore;
    } else {
      this.filterInformation.score = 10000000;
    }

    this.filterInformation.tagIds = this.tags;
    this.filterInformation.subjectId = this.itemService.subjectId;
    this.filterInformation.topicId = this.itemUtil.currentItemTrail.topicId;
    this.filterInformation.subtopicId =
      this.itemUtil.currentItemTrail.subtopicId !== null
        ? this.itemUtil.currentItemTrail.subtopicId
        : null;
    //this.filterInformation.subtopicId = null; *****For filter from tags
    //this.filterInformation.topicId = null;
    // console.log(this.filterInformation);
  }

  filter(filterForm?: any) {
    this.loading_items = true;
    this.buildFilter();
    //this.showFilter = !this.showFilter;

    if (this.assessmentActive) {
      this.itemService
        .filterAssessmentItems(
          this._assessmentId,
          this._sectionId,
          this.filterInformation
        )
        .subscribe(
          (value) => {
            //console.log(value);
            this.loading_items = false;
            this.itemsPage = value;
            this.itemsPage.content.forEach(
              (item) => (item.showFullItem = false)
            );
          },
          (error: HttpErrorResponse) => {
            this.loading_items = false;
            this.notifier.notify("error", error.error.message);
          }
        );
    } else {
      this.itemService.filterItems(this.filterInformation).subscribe(
        (value) => {
          //console.log(value);
          this.loading_items = false;
          this.itemsPage = value;
          this.itemsPage.content.forEach((item) => (item.showFullItem = false));
        },
        (error: HttpErrorResponse) => {
          //console.log(error);
          this.loading_items = false;
          this.notifier.notify("error", error.error.message);
        }
      );
    }
  }

  addNewTopic() {
    this.submitted = true;
    if (!this.newTopic.name.trim() || this.newTopic.name.trim().length < 5) {
      this.submitted = false;
      return this.notifier.notify(
        "error",
        "Please provide a valid topic name not less than 5 characters!"
      );
    }

    this.newTopic.subjectId = this.itemService.subjectId;
    this.newTopic.name = this.newTopic.name.trim()
    this.itemService.createNewTopic(this.newTopic).subscribe(
      (value) => {
        if (value) {
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: "You have successfully added a new topic!",
          });
        }
        this.ngOnInit();
        this.submitted = false;
        this.modal.dismissAll();
        this.newTopic = new NewTopic();
      },
      (error: HttpErrorResponse) => {
        this.submitted = false;
        this.notifier.notify("error", `${error.error.message}`);
      }
    );
  }

  saveSubTopic() {
    this.submitted = true;

    if (!this.newSubtopic.name.trim() || this.newSubtopic.name.trim().length < 5) {
      this.submitted = false;
      return this.notifier.notify(
        "error",
        "Please provide a valid subtopic name not less than 5 characters!"
      );
    }

    this.newSubtopic.subjectId = this.itemService.subjectId;
    this.newSubtopic.topicId = this.currentTopic.topicId;
    this.newSubtopic.name = this.newSubtopic.name.trim()
    // console.log(this.newSubtopic);
    this.itemService.createNewSubTopic(this.newSubtopic).subscribe(
      (value) => {
        if (value) {
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: "You have successfully added a new topic!",
          });
        }
        this.submitted = false;
        this.modal.dismissAll();
        this.ngOnInit();
        this.newSubtopic = new NewSubTopic();
      },
      (error: HttpErrorResponse) => {
        this.submitted = false;
        this.notifier.notify("error", `${error.error.message}`);
      }
    );
  }

  // open confirmation dialog when delete subtopic button is clicked
  openDeleteSubtopicConfirmationModal(
    deleteSubtopicConfirmationModal: any,
    clickedTopic: any
  ) {
    this.clickedTopic = clickedTopic;
    this.modal.open(deleteSubtopicConfirmationModal, {
      centered: true,
      size: "md",
    });
  }

  // remove/delete subtopic after confriming the delete action
  deleteSubTopic() {
    this.itemService
      .deleteSubTopic(
        this.itemService.subjectId,
        this.clickedTopic.topic.topicId,
        this.clickedTopic.topicId
      )
      .subscribe(
        (value) => {
          if (value) {
            Swal.fire({
              title: "Congratulations!",
              text: "The selected subtopic has been deleted successfully.",
              icon: "success",
            });
          }
          this.ngOnInit();
          this.modal.dismissAll();
        },
        (error: HttpErrorResponse) => {
          Swal.fire({
            title: "Failed!",
            text: `${error.error.message}`,
            icon: "error",
          });
          this.modal.dismissAll();
        }
      );
  }

  sendData() {
    // console.log(this.itemUtil)
    // return 

    this.itemUtil.passageId = "";
    if (this._currentActivity === "addingItems") {
      this._currentActivity = "addingNewItem";
      this.gotoNewItem.emit(this._currentActivity);
    } else {
      this.router.navigate([
        `/examalpha/subjects/${this.subjectName}/new-item`,
      ]);
      /* routerLink="/itembank/items/new-item" */
    }
  }

  sendInformation(topic?: any, subtopic?: any) {
    let itemTrail = {
      subjectId: this.itemService.subjectId,
      subjectName: this.itemService.subjectName,
      topicId: topic.topicId,
      topicName: topic.topicName,
    };
    // console.log(itemTrail);
    if (subtopic) {
      let newItemTrail = {
        ...itemTrail,
        subtopicName: subtopic.subtopicName,
        subtopicId: subtopic.topicId,
      };
      // console.log(newItemTrail);
      this.itemProps = newItemTrail;
      this.itemUtil.currentItemTrail = newItemTrail;
      this.itemUtil.saveCurrentItemTrail()
    } else {
      this.itemProps = itemTrail;
      this.itemUtil.currentItemTrail = itemTrail;
      this.itemUtil.saveCurrentItemTrail()
    }
    if (this._currentActivity === "addingItems") {
      this._currentActivity = "addingNewItem";
      this.gotoNewItem.emit(this._currentActivity);
    } else {
      this.router.navigate([`/itembank/subjects/${this.subjectName}/new-item`]);
      /* routerLink="/itembank/items/new-item" */
    }
  }

  openNewTopicModal(newTopicModal?: any) {
    if (this.currentUser.authorities.includes("ADMIN") && !this._currentBlock)
      this.modal.open(newTopicModal, { centered: true });
  }

  openNewSubTopicModal(newSubTopicModal: any, topic: any) {
    this.currentTopic = topic;
    this.modal.open(newSubTopicModal, { centered: true });
  }

  openRenameTopicModal(renameTopicModal: any, topic: any) {
    this.currentTopic = topic;
    // console.log(this.currentTopic);
    this.modal.open(renameTopicModal, { centered: true });
  }

  openRenameSubtopicModal(renameSubtopicModal: any, topic: any) {
    //this.currentTopic = { ...subtopic, topicName: topicName };
    this.currentTopic = { ...topic, topicName: this.itemProps.topicName };
    // console.log(this.currentTopic);
    this.modal.open(renameSubtopicModal, { centered: true });
  }

  // open modal to confirm the deletion of a topic
  openDeleteTopicConfirmationModal(
    deleteTopicConfirmationModal: any,
    topic: any
  ) {
    this.clickedTopic = topic;
    this.modal.open(deleteTopicConfirmationModal, {
      centered: true,
      size: "md",
    });
  }

  // remove/delete a topic
  deleteTopic() {
    this.itemService
      .deleteTopic(this.itemService.subjectId, this.clickedTopic.topicId)
      .subscribe(
        (value) => {
          if (value) {
            Swal.fire({
              title: "Congratulations!",
              text: "You have successfully deleted the selected Topic.",
              icon: "success",
            });
          }
          this.ngOnInit();
          this.modal.dismissAll();
        },
        (error: HttpErrorResponse) => {
          Swal.fire({
            title: "Failed!",
            text: `${error.error.message}`,
            icon: "error",
          });
          this.modal.dismissAll();
        }
      );
  }

  listSubtopicItems(subtopic: string) {
    // console.log('list items under', subtopic);
  }

  // open modal to confirm the delete action of an item
  openDeleteQuestionConfirmationModal(
    deleteQuestionConfirmationModal: any,
    item: any
  ) {
    this.questionIdMarkedForDeletion = item.itemId;
    this.modal.open(deleteQuestionConfirmationModal, {
      centered: true,
      size: "md",
    });
  }

  // Deletion of a question after confirmation
  deleteItem() {
    this.itemService.deleteItem(this.questionIdMarkedForDeletion).subscribe(
      (value) => {
        if (value) {
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: "The item was deleted successfully!",
          });
        }
        this.ngOnInit();
        this.modal.dismissAll();
        if (this.selectedSubtopicId) {
          // reload the questions list after one item has been deleted from a subtopic
          this.fetchItems(this.currentTopic, this.selectedSubtopicId);
        } else {
          // reload the questions list after one item has been deleted from a topic
          this.fetchItems(this.clickedTopic);
        }
      },
      (error: HttpErrorResponse) => {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: `${error.error.message}`,
        });
        this.modal.dismissAll();
      }
    );
  }

  renameTopic() {
    this.submitted = true;
    let topic: RenameTopicModel = {
      name: this.currentTopic.topicName.trim(),
    };
    this.subjectService
      .renameTopic(topic, this.itemService.subjectId, this.currentTopic.topicId)
      .subscribe(
        (value) => {
          Swal.fire({
            icon: "success",
            title: "Congratulations!",
            text: "You successfully changed the topic name",
          });
          this.modal.dismissAll();
          this.ngOnInit();
          this.submitted = false;
        },
        (error: HttpErrorResponse) => {
          this.submitted = false;
          Swal.fire({
            title: "",
            text: `${error.error.message}`,
            icon: "error",
          });
        }
      );
  }

  renameSubtopic() {
    // console.log('renaming subtopic:', this.currentTopic);
    this.submitted = true;
    let subtopic = {
      name: this.currentTopic.subtopicName.trim(),
      code: "",
    };
    this.subjectService
      .renameSubtopic(
        subtopic,
        this.itemService.subjectId,
        this.selectedTopic.topicId,
        this.selectedSubtopicId
      )
      .subscribe(
        (value) => {
          this.submitted = false;
          Swal.fire({
            title: "Congratulations!",
            text: "You have successfully renamed the selected subtopic.",
            icon: "success",
          });
          this.modal.dismissAll();
          this.ngOnInit();
        },
        (error: HttpErrorResponse) => {
          this.submitted = false;
          this.notifier.notify("error", `${error.error.message}`);
        }
      );
  }

  clearFilter() {
    //this.showFilter = !this.showFilter;
    if (this.selectedSubtopicId) {
      // reload the questions list after filter options are cleared
      this.fetchItems(this.currentTopic, this.selectedSubtopicId);
    } else {
      // reload the questions list after filter options are cleared
      this.fetchItems(this.clickedTopic);
    }
    this.filterInformation = new FilterItems();
    this.tags = [];
  }

  openSelectCopyLocationModal(
    copyQuestionModal: any,
    item: any,
    itemId: string
  ) {
    this.itemIdToBeCopied = itemId;
    this.modal.open(copyQuestionModal, { centered: true, size: "md" });
  }

  openSelectMoveLocationModal(
    moveQuestionModal: any,
    item: any,
    itemId: string
  ) {
    this.itemIdToBeCopied = itemId;
    this.itemToMove = item;
    this.modal.open(moveQuestionModal, { centered: true, size: "md" });
  }

  moveQuestion(movequestion: any) {
    // console.log(this.movedItems);
    this.moving = true;
    console.log(this.itemToMove, "item to move");
    console.log(this.movedItems, "moved item");
    console.log(this.movedItems.subjectId, "move sub id");
    console.log(this.itemService.subjectId, "item servive  sub id");
    console.log(this.subjectId, "  sub id");
    if (
      this.itemService.subjectId === this.movedItems.subjectId &&
      this.itemService.topicId === this.movedItems.topicId &&
      this.itemService.subtopicId === this.movedItems.subtopicId
    ) {
      this.notifier.notify("error", "Cannot move item to the same location");
      this.moving = false;
      return;
    }
    this.itemService.moveItem(this.itemIdToBeCopied, this.movedItems).subscribe(
      (value) => {
        if (value) {
          Swal.fire({
            title: "Congratulations!",
            text: "Item has been moved successfully!",
            icon: "success",
          });
          this.ngOnInit();
          this.movedItems = new CopyMoveItems();
          this.moving = false;
          this.modal.dismissAll();
        }
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
        this.moving = false;
      }
    );
  }

  // Logic to copy item from one topic or subject to another
  copyQuestion(copyQuestion: any) {
    // console.log(this.copiedItems);
    this.copying = true;

    if (
      this.itemService.subjectId === this.copiedItems.subjectId &&
      this.itemService.topicId === this.copiedItems.topicId &&
      this.itemService.subtopicId === this.copiedItems.subtopicId
    ) {
      this.notifier.notify("error", "Cannot copy item to the same location");
      this.copying = false;
      return;
    }

    this.itemService
      .copyItem(this.itemIdToBeCopied, this.copiedItems)
      .subscribe(
        (value) => {
          if (value) {
            Swal.fire({
              title: "Congratulations!",
              text: "Item has been copied successfully!",
              icon: "success",
            });
          }
          this.copying = false;
          this.ngOnInit();
          this.copiedItems = new CopyMoveItems();
          this.modal.dismissAll();
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
          this.copying = false;
        }
      );
  }

  // Function to retrieve the topics lists of the subject you want to copy the question into
  getTopicsTreeToCopyItem() {
    this.copiedItems.topicId = null; // Reset selected topic
    this.copiedItems.subtopicId = null; // Reset selected subtopic if needed
    this.copyDestinationTopicTree = []; // Clear topics array
    this.copyDestinationSubtopicTree = [];
    console.log("called me");
    this.itemService
      .fetchSubjectTopicsTreeAdmin(this.copiedItems.subjectId)
      .subscribe(
        (value) => {
          this.copyDestinationTopicTree = value;
          console.log(this.copyDestinationTopicTree);
        },
        (error: HttpErrorResponse) => {
          //console.log(error);
          if (error) {
            this.notifier.notify("error", `${error.error.msg}`);
          }
        }
      );
  }

  getTopicsTreeToMoveItem() {
    this.itemService
      .fetchSubjectTopicsTreeAdmin(this.movedItems.subjectId)
      .subscribe(
        (value) => {
          this.moveDestinationTopicTree = value;
          // console.log(this.moveDestinationTopicTree);
        },
        (error: HttpErrorResponse) => {
          //console.log(error);
          if (error) {
            this.notifier.notify("error", `${error.error.msg}`);
          }
        }
      );
  }

  // Function to set the topic to copy the selected item into
  setTopicToCopyItemInto($event: any) {
    // console.log($event);
    this.copiedItems.topicId = $event.topicId;
    this.copyDestinationSubtopicTree = $event.subtopics;
    // console.log('subtopicTree', this.copyDestinationSubtopicTree);
  }

  setTopicToMoveItemInto($event: any) {
    // console.log($event);
    this.movedItems.topicId = $event.topicId;
    this.moveDestinationSubtopicTree = $event.subtopics;
    // console.log('subtopicTree', this.moveDestinationSubtopicTree);
  }

  // Automated filter options for single items selection
  submitAssessmentFilter(assessmentFilter, score) {
    this.submitted = true;
    this.assessmentFilter.blockId = this._currentBlock.blockId;
    this.assessmentFilter.subjectId = this._subjectId;
    this.assessmentFilter.sectionId = this._sectionId;
    this.tags.map((tag) => {
      this.assessmentFilter.tagIds = tag.tagName;
    });

    console.log(assessmentFilter, "assessment filteer");
    if (score < 0) {
      this.notifier.notify("error", "Score cannot be negative");
      this.submitted = false;
      return;
    }

    // if (
    //   this.assessmentFilter.totalQuestions >
    //   this._currentBlock.totalQuestionsPerCandidate
    // ) {
    //   console.log("ok");
    // }

    // if not providing score
    if (!score) {
      this.assessmentFilter.score = 10000000;
    } else {
      this.assessmentFilter.score = parseInt(score);
    }

    if (this.assessmentFilter.totalQuestions <= 0) {
      this.notifier.notify(
        "error",
        "total questions must be greater than zero"
      );
      this.submitted = false;
      return;
    }
    //console.log(this.assessmentFilter);
    this.assessmentService
      .newAssessmentFilter(
        this.assessmentFilter,
        this._assessmentId,
        this._sectionId,
        this._currentBlock.blockId
      )
      .subscribe(
        (value) => {
          if (value) {
            //value.topicName = this.assessmentFilter.topicName;
            //value.subtopicName = this.assessmentFilter.subtopicName;
            if (value.tags === null) {
              value.tags = [];
            }
            let filter = {
              ...value,
              topicName: this.assessmentFilter.topicName,
              subtopicName: this.assessmentFilter.subtopicName
                ? this.assessmentFilter.subtopicName
                : null,
            };
            this.assessmentFilters.push(filter);
            this.notifier.notify(
              "success",
              "Filter was successfully implemented"
            );
            this.modalReference.dismiss();
            //this.updateSelectedBlockFilterQuestionsCount();
            this.subject.topics.splice(0, 1); // remove all-topics from topic list
            this.listAssessmentFilterBlocks();
            this.assessmentFilter = new AssessmentFilterInformation();
            this.listAssessmentFilterBlocks();
            this.submitted = false;
            //this.modal.dismissAll();
          }
        },
        (error: HttpErrorResponse) => {
          this.notifier.notify("error", `${error.error.message}`);
          this.submitted = false;
        }
      );
  }

  // Automated filter options for passage items selection
  submitAssessmentPassageFilter(assessmentPassageFilterForm: any) {
    this.submitted = true;
    this.assessmentPassageFilter.blockId = this._currentBlock.blockId;
    this.assessmentPassageFilter.subjectId = this._subjectId;
    this.assessmentPassageFilter.sectionId = this._sectionId;
    // this.assessmentPassageFilter.maxPassageItemsCount =
    //   this._currentBlock.totalQuestion;

    // this.tags.forEach((tag) => {
    //   this.assessmentPassageFilter.tagIds = tag.tagName;
    // });

    this.tags.map((tag) => {
      this.assessmentFilter.tagIds = tag.tagName;
    });

    // this.assessmentPassageFilter.tagIds = this.tags;

    this.assessmentPassageFilter.maxPassageItemsCount =
      this._currentBlock.totalQuestionsInPassage;

    console.log(this.assessmentPassageFilter, "filter");
    console.log(this._currentBlock, "current block");
    // console.log(this.assessmentPassageFilter);
    this.assessmentService
      .newAssessmentPassageFilter(
        this._assessmentId,
        this._sectionId,
        this._currentBlock.blockId,
        this.assessmentPassageFilter
      )

      /* .newAssessmentPassageFilter(
        this._assessmentId,
        this._sectionId,
        this._currentBlock.blockId,
        this.assessmentPassageFilter
      ) */
      .subscribe(
        (value) => {
          if (value) {
            let passageFilter = {
              ...value,
              topicName: this.assessmentPassageFilter.topicName,
            };
            this.assessmentFilters.push(passageFilter);
            this.notifier.notify(
              "success",
              "Passage Filter was successfully implemented"
            );
            this.modalReference.dismiss();
            //this.updateSelectedBlockFilterPassagesCount();
            this.listAssessmentFilterBlocks();
            this.assessmentPassageFilter =
              new AssessmentPassageFilterInformation();
            //this.modal.dismissAll();
            this.submitted = false;
          }
        },
        (error: HttpErrorResponse) => {
          this.submitted = false;
          this.notifier.notify("error", `${error.error.message}`);
          this.modalReference.closed;
        }
      );
  }

  addQuestionIdToAssessment(itemId: string) {
    if (this.selectedQuestionIds.includes(itemId)) {
      this.selectedQuestionIds.splice(
        this.selectedQuestionIds.indexOf(itemId),
        1
      );
      this.addItemToAssessment.emit(this.selectedQuestionIds);
    } else {
      this.selectedQuestionIds.push(itemId);
      this.addItemToAssessment.emit(this.selectedQuestionIds);
    }
  }

  updateSelectedBlockFilterQuestionsCount() {
    this.totalFilterSelections = 0;
    this.assessmentFilters.forEach((filter) => {
      this.totalFilterSelections += filter.totalQuestions;
    });
  }

  updateSelectedBlockFilterPassagesCount() {
    this.totalFilterSelections = 0;
    this.assessmentPassageFilters.forEach((filter) => {
      this.totalFilterSelections += filter.totalPassages;
    });
  }

  deleteAssessmentFilter(assessmentFilter: any) {
    this.submitted = true;
    this.assessmentService
      .deleteAssessmentFilter(
        this._assessmentId,
        this._sectionId,
        this._currentBlock.blockId,
        assessmentFilter.filterId
      )
      .subscribe(
        (value) => {
          if (value) this.submitted = false;
          Swal.fire({
            title: "Congratulations!",
            text: `The selected block criteria has been deleted successfully.`,
            icon: "success",
          });
          //this.ngOnInit();
          this.listAssessmentFilterBlocks();
        },
        (error: HttpErrorResponse) => {
          this.submitted = false;
          Swal.fire({
            title: "Failed!",
            text: `${error.error.message}`,
            icon: "error",
          });
        }
      );
  }

  routeToUsageHistoryPage(itemId: string) {
    this.router
      .navigate([`examalpha/subjects/usage/item/${itemId}`])
      .catch((err) => console.log(err));
  }

  onQuestionTypeChange(selectedItemType: string) {
    if (selectedItemType.toLowerCase() == "any") {
      this.assessmentFilter.itemType = null;
    } else {
      this.assessmentFilter.itemType = selectedItemType;
    }
  }

  onDiffLevelChange(selectedDiffLevel: string) {
    if (selectedDiffLevel == "any") {
      this.assessmentFilter.difficultyLevel = null;
    } else {
      this.assessmentFilter.difficultyLevel = parseInt(selectedDiffLevel);
    }
  }
}
