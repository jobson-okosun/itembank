import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ItemHttpService } from './../../items/item-http.service';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';
import { AssessmentsService } from './../service/assessments.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NewAssessmentDetailTemplate } from '../model/new-assessment-detail-template.model';
import { NewAssessmentSettingsTemplate } from '../model/new-assessment-settings-template.model';
import { NewAssessmentSectionTemplate } from '../model/new-assessment-section-template.model';
import { UUID } from 'angular2-uuid';
import { Blocks } from '../model/new-assessment-section-template.model';
import { WizardComponent } from 'angular-archwizard';
import { DropdownSubjectList } from '../../items/models/dropdown-subject-list.model';
import { NotifierService } from 'angular-notifier';
import { Account } from 'src/app/authentication/model/account.model';
import { Item } from '../model/item.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SubjectTopicsTree } from '../../items/models/subject-topics-tree.model';
import { NewAssessmentController } from '../model/new-assessment-controller.model';

@Component({
  selector: 'app-create-assessment',
  templateUrl: './create-assessment.component.html',
  styleUrls: ['./create-assessment.component.scss'],
})
export class CreateAssessmentComponent implements OnInit {
  breadCrumbItems!: any;

  randomSelectClicked: boolean = false;

  randomPick: boolean = false;

  fontSizes: string[] = ['SMALL', 'NORMAL', 'LARGE'];

  newAssessmentDetailsTemplate: NewAssessmentDetailTemplate =
    new NewAssessmentDetailTemplate();

  newAssessmentSettingsTemplate: NewAssessmentSettingsTemplate =
    new NewAssessmentSettingsTemplate();

  fullAssessmentController: NewAssessmentController =
    new NewAssessmentController();

  newAssessmentSectionTemplate: NewAssessmentSectionTemplate =
    new NewAssessmentSectionTemplate();

  blocks: Blocks[] = [];

  sections: NewAssessmentSectionTemplate[] = [];

  activeSectionIndex: number;

  activeSectionBlockIndex: number;

  numbers: number[] = [];

  tags: any[] = [];

  subjects: DropdownSubjectList[] = [];

  tagIds: string[] = [];

  currentUser: Account;

  item: Item = new Item();

  randomItems: Item[] = [];

  maxItems: number;

  currentActivity: string = 'assessment';

  showTagField: boolean = false;

  assessmentItems: any[] = [];

  previewData: any;

  assessmentWizard: any;

  removedItem: any;

  selectedSubject: DropdownSubjectList;

  selectedTopic: any;

  selectedSubtopic: any;

  randomSelectionProcess: boolean = false;

  passageSelection: boolean = false;

  topics: any;

  subtopics: any;

  topicTrees: SubjectTopicsTree;

  @ViewChild('wizard') public wizard: WizardComponent;

  constructor(
    private authService: AuthenticationService,
    private assessmentService: AssessmentsService,
    private notifier: NotifierService,
    private itemService: ItemHttpService,
    private modal: NgbModal
  ) {}

  ngOnInit(): void {
    this.authService.getLoggedInAccount().subscribe((value) => {
      this.setCurrentUser(value);
    });

    this.breadCrumbItems = [
      { label: 'Assessments' },
      { label: 'New assessment', active: true },
    ];

    this.itemService.fetchAllSubjectsDropdown().subscribe((value) => {
      this.subjects = value;
    });

    this.createSection();
  }

  setCurrentUser(user: Account) {
    this.currentUser = user;
    // console.log(this.currentUser);
  }

  backToAssessment(activity: string) {
    this.currentActivity = activity;
  }

  buildItem(item: any) {
    this.item.authorDetails.authorName =
      this.currentUser.firstName + ' ' + this.currentUser.lastName;
    this.item.authorDetails.authorId = this.currentUser.id;
    this.item.difficultyLevel = item.difficultyLevel;
    this.item.itemId = item.itemId;
    this.item.reference = item.reference;
    this.item.stimulus = item.stimulus;
    this.item.itemStatus = item.itemStatus;
    this.item.type = item.itemType;
    this.item.itemTagDTOS = item.itemTagDTOS;
    this.item.createdAt = Date.now();
    this.item.modifiedAt = Date.now();
    this.item.showFullItem = false;

    return this.item;
  }

  openModal(modal: NgbModal) {
    this.modal.open(modal, { centered: true });
  }

  backToAssessmentFromNewItem(item: any) {
    if (item === undefined) {
      this.currentActivity = 'assessment';
      this.notifier.notify('warning', 'No Item was created');
    } else {
      this.currentActivity = 'assessment';
      let newItem = this.buildItem(item);
      //this.assessmentItems.push(newItem);
      /* this.sections[this.activeSectionIndex].blocks[
        this.activeSectionBlockIndex
      ].items.push(newItem);
      console.log(
        this.sections[this.activeSectionIndex].blocks[
          this.activeSectionBlockIndex
        ].items
      ); */
    }
  }

  gotoNewItem(activity: string) {
    this.currentActivity = activity;
    this.itemService.currentActivity = activity;
  }

  addAssessmentItem(item: Item) {
    /* this.sections[this.activeSectionIndex].blocks[
      this.activeSectionBlockIndex
    ].items.push(item);
    console.log(
      this.sections[this.activeSectionIndex].blocks[
        this.activeSectionBlockIndex
      ].items
    ); */
  }

  removeAssessmentItem(index: number) {
    /* this.sections[this.activeSectionIndex].blocks[
      this.activeSectionBlockIndex
    ].items.splice(index, 1);
    console.log(
      this.sections[this.activeSectionIndex].blocks[
        this.activeSectionBlockIndex
      ].items
    ); */
  }

  setSubject(subject: DropdownSubjectList, sectionIndex: number) {
    this.selectedSubject = subject;
    // console.log(this.selectedSubject);
    this.sections[sectionIndex].subjectName = subject.subjectName.toUpperCase();
    this.sections[sectionIndex].name = subject.subjectName.toUpperCase();
    // console.log(this.sections[sectionIndex]);
    this.itemService.subjectName = subject.subjectName;
    this.itemService.subjectId = subject.subjectId;
  }

  addQuestion(sectionIndex?: number, blockIndex?: number) {
    if (this.assessmentItems.length === this.maxItems) {
      this.notifier.notify(
        'error',
        'Oops...You have already selected the specified number of items'
      );
      return;
    }
    if (this.randomPick === true) {
      this.randomPick = !this.randomPick;
    }
    this.activeSectionIndex = sectionIndex;
    this.activeSectionBlockIndex = blockIndex;
    /* this.maxItems =
      this.sections[this.activeSectionIndex].blocks[
        this.activeSectionBlockIndex
      ].totalQuestions;
    this.assessmentItems =
      this.sections[this.activeSectionIndex].blocks[
        this.activeSectionBlockIndex
      ].items; */
    if (
      this.sections[sectionIndex].subjectName &&
      this.sections[sectionIndex].blocks[blockIndex].totalQuestions > 0
    ) {
      this.currentActivity = 'addingItems';
    } else if (
      this.sections[sectionIndex].subjectName &&
      this.sections[sectionIndex].blocks[blockIndex].totalQuestions ===
        undefined
    ) {
      return this.notifier.notify(
        'error',
        'Please enter the total number of expected questions'
      );
    } else {
      return this.notifier.notify('error', 'Please select a subject');
    }
  }

  addPassageQuestions(sectionIndex?: number, blockIndex?: number) {
    this.passageSelection = true;
    this.randomPick = false;
  }

  addRandomQuestion(sectionIndex?: number, blockIndex?: number) {
    this.passageSelection = false;
    if (this.assessmentItems.length === this.maxItems) {
      this.notifier.notify(
        'error',
        'Oops...You have already selected the specified number of items'
      );
      return;
    }
    this.activeSectionIndex = sectionIndex;
    this.activeSectionBlockIndex = blockIndex;
    /* this.maxItems =
      this.sections[this.activeSectionIndex].blocks[
        this.activeSectionBlockIndex
      ].totalQuestions;
    this.assessmentItems =
      this.sections[this.activeSectionIndex].blocks[
        this.activeSectionBlockIndex
      ].items; */
    if (
      this.sections[sectionIndex].subjectName &&
      this.sections[sectionIndex].blocks[blockIndex].totalQuestions > 0
    ) {
      this.randomPick = true;
      this.showTagField = true;
      this.itemService
        .fetchSubjectTopicsTreeAdmin(this.selectedSubject.subjectId)
        .subscribe((value) => {
          this.topics = value.topics;
        });
    } else if (
      this.sections[sectionIndex].subjectName &&
      this.sections[sectionIndex].blocks[blockIndex].totalQuestions ===
        undefined
    ) {
      return this.notifier.notify(
        'error',
        'Please enter the total number of expected questions'
      );
    } else {
      return this.notifier.notify('error', 'Please select a subject');
    }
  }

  pickAtRandom() {
    this.randomSelectionProcess = true;
    this.randomSelectClicked = true;
    this.maxItems =
      this.sections[this.activeSectionIndex].blocks[
        this.activeSectionBlockIndex
      ].totalQuestions;
    if (this.selectedSubtopic) {
      this.itemService
        .fetchAllItems(
          this.selectedSubject.subjectId,
          this.selectedTopic,
          this.selectedSubtopic.subtopicId
        )
        .subscribe(
          (value) => {
            this.fillRandomItems(value.content);
          },
          (err: HttpErrorResponse) => {
            // console.log(err);
            this.randomSelectionProcess = false;
          }
        );
    } else if (this.selectedTopic) {
      this.itemService
        .fetchAllItems(
          this.selectedSubject.subjectId,
          this.selectedTopic.topicId
        )
        .subscribe(
          (value) => {
            if (value) {
              this.fillRandomItems(value.content);
            }
          },
          (err: HttpErrorResponse) => {
            // console.log(err);
            this.randomSelectionProcess = false;
          }
        );
    } else {
      this.randomSelectionProcess = false;
      this.randomSelectClicked = false;
      return this.notifier.notify('error', 'Please select a topic');
    }
  }

  fillRandomItems(value: any) {
    this.randomItems = value;
   /*  this.sections[this.activeSectionIndex].blocks[
      this.activeSectionBlockIndex
    ].items.length = 0; */
    if (
      this.randomItems.length === 0 ||
      this.randomItems.length < this.maxItems
    ) {
      this.randomSelectionProcess = false;
      this.randomSelectClicked = false;
      this.notifier.notify(
        'error',
        'Oops...Sorry, this topic does not have enough questions for you!'
      );
    } else {
      let randomPicked = [];
      for (let i = 0; i < this.maxItems; i++) {
        let randomIndex = Math.floor(Math.random() * this.randomItems.length);
        if (randomPicked.includes(this.randomItems[randomIndex])) {
          continue;
        } else {
          randomPicked.push(this.randomItems[randomIndex]);
        }
      }

      this.randomItems.filter((item) => {
        if (
          !randomPicked.includes(item) &&
          randomPicked.length < this.maxItems
        ) {
          randomPicked.push(item);
        }
      });

      this.randomSelectionProcess = false;

      /* this.sections[this.activeSectionIndex].blocks[
        this.activeSectionBlockIndex
      ].items = randomPicked;
      this.assessmentItems = randomPicked; */
      /* this.sections[this.activeSectionIndex].blocks[
              this.activeSectionBlockIndex
            ].items = randomPicked;
            console.log('These are the randomly picked Items', randomPicked);
            console.log('These are all returned items', this.randomItems); */
    }
  }

  setTopic($event) {
    // console.log($event);
    this.selectedTopic = $event;
    this.subtopics = $event.subtopics;
  }

  setSubtopic($event) {
    // console.log($event);
    this.selectedSubtopic = $event;
  }

  onHover(dropdown: NgbDropdown) {
    dropdown.open();
  }

  onLeave(dropdown: NgbDropdown) {
    dropdown.close();
  }

  createBlock(sectionIndex: number) {
    this.sections[sectionIndex].blocks.push(this.addNewBlock(sectionIndex));
  }

  createSection() {
    this.sections.push(this.addNewSection());
    this.createBlock(0);
    // console.log(this.sections);
  }

  addNewBlock(sectionIndex: number) {
    let block: Blocks = new Blocks();

    block.name;
    block.index = this.sections[sectionIndex].blocks.length;
    block.totalQuestions;
    block.totalQuestionsPerCandidate;

    return block;
  }

  addNewSection() {
    let section: NewAssessmentSectionTemplate =
      new NewAssessmentSectionTemplate();

    section.id;
    section.name;
    section.subjectName;
    section.sectionSettings.allowCalculator;
    section.sectionSettings.averageDifficultyLevel;
    section.sectionSettings.durationInMinutes;
    section.sectionSettings.preventNavigationToAttemptedItems;
    section.sectionSettings.shuffleBlocks;
    section.sectionSettings.shuffleItems;
    section.sectionSettings.shuffleOptions;
    section.blocks;

    return section;
  }

  addBlock(sectionIndex: number) {
    //this.blocks.push(this.addNewBlock());
    this.createBlock(sectionIndex);
    // console.log(this.sections[sectionIndex].blocks);
  }

  addSection() {
    let currentSectionLength = this.sections.length;
    this.sections.push(this.addNewSection());
    this.createBlock(currentSectionLength);
    // console.log(this.sections);
  }

  recieveTags(tags: any, index: number) {
    this.tags = tags;
    // console.log(index);

    this.tags = this.tags.map((tag) => {
      return tag.tagId;
    });

    this.tagIds = this.tags;

    // console.log('Logging TagIds:', this.tagIds);

    //this.newAssessmentSectionTemplate.blocks[index].tagIds = this.tagIds;
  }

  removeBlock(sectionIndex: number, blockIndex: number) {
    this.sections[sectionIndex].blocks.splice(blockIndex, 1);
  }

  buildAssessmentSectionTemplate() {
    this.newAssessmentSectionTemplate.blocks = this.blocks;
    this.fullAssessmentController.name = this.newAssessmentDetailsTemplate.name;
    //this.fullAssessmentController.startDate = this.newAssessmentDetailsTemplate.
    // console.log();
  }

  saveSettings() {}

  saveAssessmentDetails(assessmentDetailsForm: any) {
    // console.log(this.newAssessmentDetailsTemplate);
    this.assessmentService
      .createAssessmentDetailsTemplate(this.newAssessmentDetailsTemplate)
      .subscribe(
        (value) => {
          // console.log(value);
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
        }
      );
  }

  saveAssessmentSettings(assessmentSettingsForm: any) {
    this.newAssessmentSettingsTemplate.name = 'newAssessmentTemplate';
    this.newAssessmentSettingsTemplate.id = UUID.UUID();
    // console.log(this.newAssessmentSettingsTemplate);
    this.assessmentService
      .createAssessmentSettingsTemplate(this.newAssessmentSettingsTemplate)
      .toPromise()
      .then((response) => {
        // console.log(response);
      })
      .catch((error: HttpErrorResponse) => {
        // console.log(error);
      });
  }

  saveAssessmentSection(assessmentSectionForm: any) {
    this.buildAssessmentSectionTemplate();

    // console.log(this.newAssessmentSectionTemplate);
    this.assessmentService
      .createAssessmentSectionTemplate(this.newAssessmentSectionTemplate)
      .toPromise()
      .then((value) => {
        // console.log(value);
      })
      .catch((error: HttpErrorResponse) => {
        // console.log(error);
      });
  }
}
