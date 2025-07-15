import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AssessmentSettings } from "../model/assessment-settings";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AssessmentInstruction } from "../model/assessment-instruction";
import { SectionSettings } from "../model/new-assessment-section-template.model";
import { AssessmentSections } from "../model/assessment-sections";
import { DropdownSubjectList } from "../../items/models/dropdown-subject-list.model";
import { ItemHttpService } from "../../items/item-http.service";
import { AssessmentsService } from "../service/assessments.service";
import { HttpErrorResponse } from "@angular/common/http";
import { AssessmentDeliveryEnum } from "../model/assessment-delivery-enum";
import Swal from "sweetalert2";
import { FontSizes } from "../model/font-sizes";
import { BlockTypesEnum } from "../model/block-types-enum";
import { BlockQuestionsSelectionTypesEnum } from "../model/block-questions-selection-types-enum";
import { NewAssessmentSection } from "../model/new-assessment-section";
import { SingleAssessment } from "../model/single-assessment";
import { BlockDetails, SectionDetails } from "../model/section-details";
import { NewSectionBlock } from "../model/new-section-block";
import { NotifierService } from "angular-notifier";
import { ListBlockItems } from "../model/list-block-items";
import { NewAssessmentTemplate } from "../model/new-assessment-template";
import { SectionItemCount } from "../model/section-item-count";
import { TemplatesService } from "../../templates/service/templates.service";
import { TemplatesPage } from "../../templates/model/templates-page.model";
import { ImportTemplate } from "../model/import-template";
import { Publish } from "../model/publish";
import { SubjectComponent } from "../../items/subject/subject.component";

interface Card {
  title: string;
  count?: number;
}

@Component({
  selector: "app-view-assessment",
  templateUrl: "./view-assessment.component.html",
  styleUrls: ["./view-assessment.component.scss"],
})
export class ViewAssessmentComponent implements OnInit, OnDestroy {
  breadCrumbItems!: any;
  assessmentId: string;
  cards: Card[] = [];
  editSection: AssessmentSections = new AssessmentSections();
  editBlock: BlockDetails = new BlockDetails();
  submitted: boolean = false;
  startExamInstruction: string = `
  <ol>
  <li>
    Make sure that the picture and the exam number on the computer screen
    are yours. If they are not yours report to the supervisor.
  </li>
  <li>
    The examination consists of serveral questions,
    and you are expected to answer all questions.
  </li>
  <li>
    The duration of the examination is
    <strong> 120 minutes</strong> and you can attempt the
    questions in any order you wish.
  </li>
  <li>
    If you are not familiar with the use of the computer mouse, you can use
    the keyboard to answer all your questions and to move from one question
    to another
  </li>
  <li>
    If you are not familiar with the use of the computer mouse, use the
    <strong>"A", "B", "C", "D"</strong> buttons on the keyboard to
    <strong>select an answer</strong> and use the
    <strong>"N" &amp; "P</strong>" buttons on the keyboard to navigate to
    <strong>Next and Previous question</strong>&nbsp;
  </li>
  <li>
    If you are familiar with the mouse, you can select answers to the
    questions by clicking on the option, and you can move to any question by
    clicking the question number at the bottom of the page.
  </li>
  <li>You are free to skip a question and come back to it later.</li>
  <li>
    Once a candidate submits his/her exam, it is not possible to go back or
    undo the submission.
  </li>
  <li>
    If your time is up, the examination will submit itself and you will be
    logged out.&nbsp;
  </li>
  <li>
    Click the&nbsp;<strong>&nbsp;Start Exam Button</strong> to begin your
    examination.
  </li>
</ol> `;
  endExamInstruction: string = `
  You have completed your examination, kindly leave the hall quietly.`;
  assessment: SingleAssessment;
  assessmentSettings: AssessmentSettings = new AssessmentSettings();
  assessmentInstruction: AssessmentInstruction = new AssessmentInstruction();
  newSection: NewAssessmentSection = new NewAssessmentSection();
  sectionSettings: SectionSettings = new SectionSettings();
  newBlock: NewSectionBlock = new NewSectionBlock();
  fontSizes: string[] = [];
  subjects: DropdownSubjectList[] = [];
  selectedSubject: DropdownSubjectList;
  selectedSection: SectionDetails = new SectionDetails();
  selectedBlock: BlockDetails;
  selectionTypes: string[] = [];
  deliveryMethods: string[] = [];
  blockTypes: string[] = [];
  currentAssessment: string;
  currentAssessmentDeliveryMethod: string;
  newlyAddedSection: SectionDetails = new SectionDetails();
  selectedItems: any[] = [];
  selectedPassageIds: string[] = [];
  itemProps: any;
  previewData: any;
  items: ListBlockItems[] = [];
  activePreviewItem: number = 0;
  passages: any[] = [];
  newAssessmentTemplate: NewAssessmentTemplate = new NewAssessmentTemplate();
  newSectionTemplate: NewAssessmentTemplate = new NewAssessmentTemplate();
  fetchingBlockItems: boolean = false;
  currentTab: string = "EXAMS";
  totalPassages: number = 0;
  sectionItems: SectionItemCount[] = [];
  schedulerAssessmentId: string;
  assessment_templates: TemplatesPage;
  templateImport: ImportTemplate = new ImportTemplate();
  quickGuide = ``;
  enablePublishButton: boolean = true;
  incompleteSections: number = 0;
  loading: boolean = true;
  existingItemIds: string[] = [];
  existingPassageIds: string[] = [];
  savingManualSelectedPassageItems: boolean = false;
  showPassageItems: boolean = false;
  loadingPassageItemPreview: boolean = false;
  loadingExistingItemIds: boolean = false;
  loadingExistingPassageIds: boolean = false;
  inactivityChecked: boolean = false;
  compensatoryChecked: boolean = false;
  warnEndOfReadingTimeChecked: boolean = false;
  instructionReadTimeChecked: boolean = false;

  // @ViewChild('Pills') nav; */

  /* ngAfterViewInit() {
    console.log('loaded child component', this.subjectComponent);
    console.log('pills navigation', this.nav);
  } */

  constructor(
    private ar: ActivatedRoute,
    private modalService: NgbModal,
    private assessmentService: AssessmentsService,
    public itemService: ItemHttpService,
    private notifier: NotifierService,
    private templateService: TemplatesService
  ) {
    this.assessmentId = this.ar.snapshot.params["assessmentId"];
    this.currentAssessment = this.assessmentService.activeAssessment;
    this.currentAssessmentDeliveryMethod =
      this.assessmentService.activeAssessmentDeliveryMethod;
  }

  setTotalQuestionsPerStudent(blockTotalQuestions: any) {
    this.newBlock.totalQuestionsPerCandidate = blockTotalQuestions;
  }

  // Open manual drawer
  onSettingsButtonClicked() {
    document.body.classList.toggle("right-bar-enabled");
    const rightBar = document.getElementById("theme-settings-offcanvas");
    if (rightBar != null) {
      rightBar.classList.toggle("show");
      rightBar.setAttribute("style", "visibility: visible;");
    }
  }

  switchTab($event: any) {
    // console.log($event);
  }

  ngOnInit(): void {
    console.log(this.assessmentService.activeAssessment)

    
    this.totalPassages = 0;
    this.itemService.assessmentActive = true;
    this.getAssessment();
    this.getTotalItemsAndScores(); // get the total items and the scores per section

    // Fetch Assessment settings
    this.assessmentService
      .fetchSingleAssessmentSettings(this.assessmentId)
      .subscribe(
        (value) => {
          this.assessmentSettings = value;
          this.assessmentSettings.startExamInstruction = this.assessmentSettings
            .startExamInstruction
            ? this.assessmentSettings.startExamInstruction
            : this.startExamInstruction;
          this.assessmentSettings.endExamInstruction = this.assessmentSettings
            .endExamInstruction
            ? this.assessmentSettings.endExamInstruction
            : this.endExamInstruction;
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
        }
      );

    // Fetch subjects for dropdown
    this.itemService
      .fetchAllSubjectsDropdownForAssessment()
      .subscribe((value) => {
        this.subjects = value;
      });

    // Fetch Assessment Templates
    this.templateService.fetchAllAssessmentTemplates().subscribe(
      (value) => {
        this.assessment_templates = value;
      },
      (error: HttpErrorResponse) => {
        this.notifier.notify("error", `${error.error.message}`);
      }
    );

    // Breadcrumbs
    this.breadCrumbItems = [
      { label: "Exams", active: false },
      {
        label: this.assessmentService?.activeAssessment?.toLowerCase(),
        active: true,
      },
    ];
    this.fontSizes = Object.values(FontSizes);
    this.blockTypes = Object.values(BlockTypesEnum);
    this.deliveryMethods = Object.values(AssessmentDeliveryEnum);
    this.selectionTypes = Object.values(BlockQuestionsSelectionTypesEnum);
    // this.getAssessment();
  }

  /* resetSelectionTypes(selectionType) {
    console.log(selectionType);
    if (selectionType === 'PASSAGES') {
      let new_selectionTypes = [];
      Object.values(BlockQuestionsSelectionTypesEnum).forEach((value) => {
        if (value !== 'AUTOMATED_WITHOUT_CRITERIA') {
          new_selectionTypes.push(value);
        }
      });
      this.selectionTypes = new_selectionTypes;
      console.log(this.selectionTypes);
    } else {
      this.selectionTypes = Object.values(BlockQuestionsSelectionTypesEnum);
      
    }
  } */

  getAssessment() {
    let count = 0;
    this.totalPassages = 0;
    this.assessmentService.fetchSingleAssessment(this.assessmentId).subscribe(
      (value) => {
        value.sectionDetails.forEach((section, index) => {
          section.totalCandidateSelectedQuestions = 0;
          section.totalSelectedQuestions = 0;
          section.blockDetailsDTOS.forEach((block) => {
            if (
              block.blockType === "PASSAGES" &&
              block.totalFound > block.totalQuestionsPerStudent
            ) {
              section.totalCandidateSelectedQuestions +=
                block.totalQuestionsPerStudent * block.totalQuestionsInPassage;
              section.totalSelectedQuestions +=
                block.totalFound * block.totalQuestionsInPassage;
            }
            if (
              block.blockType === "PASSAGES" &&
              block.totalFound <= block.totalQuestionsPerStudent
            ) {
              section.totalCandidateSelectedQuestions +=
                block.totalFound * block.totalQuestionsInPassage;
              section.totalSelectedQuestions +=
                block.totalFound * block.totalQuestionsInPassage;
            }
            if (
              block.blockType === "SINGLE_QUESTIONS" &&
              block.totalFound >= block.totalQuestionsPerStudent
            ) {
              section.totalCandidateSelectedQuestions +=
                block.totalQuestionsPerStudent;
              section.totalSelectedQuestions += block.totalFound;
            }
            if (
              block.blockType === "SINGLE_QUESTIONS" &&
              block.totalFound < block.totalQuestionsPerStudent
            ) {
              section.totalCandidateSelectedQuestions += block.totalFound;
              section.totalSelectedQuestions += block.totalFound;
            }
            if (block.blockType === BlockTypesEnum.PASSAGES) {
              this.totalPassages += block.totalQuestions;
            }
            /* if (block.selectionType === 'FULL_RANDOM')
              block.selectionType = Object.values(
                BlockQuestionsSelectionTypesEnum
              )[1];
            if (block.selectionType === 'AUTOMATED')
              block.selectionType = Object.values(
                BlockQuestionsSelectionTypesEnum
              )[0];
            if (block.selectionType === 'MANUAL')
              block.selectionType = Object.values(
                BlockQuestionsSelectionTypesEnum
              )[2]; */
          });
          if (
            section.totalSelectedQuestions !== section.totalQuestions ||
            section.totalCandidateSelectedQuestions !==
              section.totalQuestionsPerCandidate
          ) {
            this.incompleteSections++;
            // console.log(this.incompleteSections);
          }
          // console.log(section.totalCandidateSelectedQuestions);
        });

        this.assessment = value;

        console.log(value, "assessment");

        // console.log(this.assessment);
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }

  openAssessmentSettingsModal(assessmentSettingsModal: any) {
    this.modalService.open(assessmentSettingsModal, {
      centered: true,
      size: "lg",
      backdrop: "static",
      keyboard: false,
    });
  }

  openAssessmentInstructionModal(assessmentInstructionModal: any) {
    this.modalService.open(assessmentInstructionModal, {
      centered: true,
      size: "lg",
    });
  }

  openAssessmentPreviewModal(content: any) {
    this.modalService.open(content, {
      centered: true,
      size: "xl",
      windowClass: "modal-fullscreen",
    });
  }

  fetchAlreadyExistingPassageIds(manualPassageItemSelectionModal) {
    if (this.selectedBlock.selectionType === "MANUAL") {
      this.loadingExistingPassageIds = true;
      this.modalService.open(manualPassageItemSelectionModal, {
        centered: true,
        size: "xl",
        windowClass: "modal-fullscreen",
      });
      this.assessmentService
        .fetchExistingPassageIds(
          this.assessmentId,
          this.selectedSection.sectionId
        )
        .subscribe({
          next: (value) => {
            this.existingPassageIds = value;
            this.loadingExistingPassageIds = false;
          },
          error: (err: HttpErrorResponse) => {
            this.loadingExistingPassageIds = false;
            Swal.fire({
              title: "Failed!",
              text: `${err.error.message}`,
              icon: "error",
            });
          },
        });
    } else {
      this.modalService.open(manualPassageItemSelectionModal, {
        centered: true,
        size: "xl",
        windowClass: "modal-fullscreen",
      });
    }
  }

  fetchAlreadyExistingItemIds(manualItemSelectionModal) {
    if (this.selectedBlock.selectionType === "MANUAL") {
      this.loadingExistingItemIds = true;
      this.modalService.open(manualItemSelectionModal, {
        backdrop: "static",
        keyboard: false,
        centered: true,
        size: "xl",
        windowClass: "modal-fullscreen",
      });
      this.assessmentService
        .fetchExistingItemIds(this.assessmentId, this.selectedSection.sectionId)
        .subscribe({
          next: (value) => {
            this.existingItemIds = value;
            this.loadingExistingItemIds = false;
          },
          error: (err: HttpErrorResponse) => {
            this.loadingExistingItemIds = false;
            Swal.fire({
              title: "Failed!",
              text: `${err.error.message}`,
              icon: "error",
            });
          },
        });
    } else {
      this.modalService.open(manualItemSelectionModal, {
        backdrop: "static",
        keyboard: false,
        centered: true,
        size: "xl",
        windowClass: "modal-fullscreen",
      });
    }
  }

  openAssessmentSectionModal(assessmentSectionModal: any, section?: any) {
    //this.selectedSection = this.assessment.sectionDetails;
    this.assessmentService
      .getSectionSettings(this.assessmentId, section.sectionId)
      .subscribe(
        (value) => {
          if (value) {
            this.editSection = value;
            // console.log('editSection', this.editSection);
          }
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
        }
      );
    this.selectedSubject = new DropdownSubjectList();
    this.modalService.open(assessmentSectionModal, {
      centered: true,
      size: "lg",
      backdrop: "static",
      keyboard: false,
    });
  }

  openNewSectionModal(newSectionModal: any) {
    this.modalService.open(newSectionModal, { centered: true, size: "md" });
  }

  openEditSectionSettingsModal(editSectionSettingsModal: any) {
    this.modalService.open(editSectionSettingsModal, {
      centered: true,
      size: "md",
    });
  }

  openNewBlockModal(newBlockModal: any, section: any) {
    this.newBlock.name = "BLOCK " + (section.blockCount + 1);
    this.newBlock.totalQuestions;
    console.log(section, "section");
    this.modalService.open(newBlockModal, { centered: true, size: "md" });
  }

  openManualItemSelectionModal(manualItemSelectionModal: any) {
    this.fetchAlreadyExistingItemIds(manualItemSelectionModal);
  }

  openManualPassageItemSelectionModal(manualPassageItemSelectionModal: any) {
    this.fetchAlreadyExistingPassageIds(manualPassageItemSelectionModal);
  }

  openListBlockItemsModal(listBlockItemsModal: any) {
    this.modalService.open(listBlockItemsModal, {
      centered: true,
      size: "xl",
      windowClass: "modal-fullscreen",
    });
  }

  openListBlockPassagesModal(listBlockPassagesModal: any) {
    this.modalService.open(listBlockPassagesModal, {
      centered: true,
      size: "xl",
      windowClass: "modal-fullscreen",
    });
  }

  openEditBlockModal(editBlockModal: any, block?: any) {
    this.editBlock = block;
    this.editBlock.name = block.blockName;
    this.modalService.open(editBlockModal, { centered: true, size: "md" });
  }

  openNewAssessmentTemplateModal(newAssessmentTemplateModal: any) {
    this.modalService.open(newAssessmentTemplateModal, {
      size: "md",
      centered: true,
    });
  }

  openNewSectionTemplateModal(newSectionTemplateModal: any) {
    this.modalService.open(newSectionTemplateModal, {
      centered: true,
      size: "md",
    });
  }

  setSelectedSection(section: any) {
    this.selectedSection = section;
    // console.log('selected section', section);
  }

  onInactivityWarningChange(event: any): void {
    this.inactivityChecked = event.target.checked;
    if (!event.target.checked) {
      this.assessmentSettings.inactivityWaringSec = 0;
    }
  }

  onCompensatoryTimeChange(event: any): void {
    this.compensatoryChecked = event.target.checked;
    if (!event.target.checked) {
      this.assessmentSettings.compensatoryTimeMins = 0;
    }
  }

  onWarnEndOfReadingTimeChange(event: any) {
    this.warnEndOfReadingTimeChecked = event.target.checked;
    if (!event.target.checked) {
      this.assessmentSettings.warnEndOfReadingTimeSec = 0;
    }
  }

  onInstructionReadingTimeSecChange(event: any) {
    // console.log(event.target.checked);
    this.instructionReadTimeChecked = event.target.checked;
    if (!event.target.checked) {
      this.assessmentSettings.instructionReadTimeSec = 120;
    }
  }

  saveSectionSettings(sectionSettingForm: any) {
    this.submitted = true;
    this.editSection.name = this.editSection.name.trim();
    this.editSection.subjectName = this.editSection.subjectName.trim();
    this.assessmentService
      .updateSectionSettings(
        this.assessmentId,
        this.selectedSection.sectionId,
        this.editSection
      )
      .subscribe(
        (value) => {
          if (value) {
            Swal.fire({
              title: "Congratulations!",
              text: "You have successfully updated the section settings.",
              icon: "success",
            });
            this.submitted = false;
            this.modalService.dismissAll();
            this.editSection = new AssessmentSections();
            this.getAssessment();
          }
        },
        (error: HttpErrorResponse) => {
          Swal.fire({
            title: "Failed!",
            text: `${error.error.message}`,
            icon: "error",
          });
          this.submitted = false;
          //console.log(error);
        }
      );
  }

  setSelectedBlock(block, section: SectionDetails) {
    this.selectedBlock = block;
    this.itemService.setSubjectId(section.subjectId);
    this.itemService.setSubjectName(section.subjectName);
    this.selectedSection = section;
    this.assessmentService.currentBlock = block;
    //this.selectedSection = this.sections
    // console.log('selected block', block);
  }

  saveBlock(newBlock?: any) {
    /* if (this.newBlock.selectionType == BlockQuestionsSelectionTypesEnum.AUTOMATED) {
      this.newBlock.selectionType = 'FULL_RANDOM';
      this.newBlock.selectionType = 'AUTOMATED_WITH_CRITERIA';
    } else if (this.newBlock.selectionType == BlockQuestionsSelectionTypesEnum.A) {
      this.newBlock.selectionType = 'AUTOMATED_WITH_CRITERIA';
    } */
    this.submitted = true;
    this.newBlock.assessmentId = this.assessmentId;
    this.newBlock.subjectId = this.selectedSection.subjectId;
    this.newBlock.sectionId = this.selectedSection.sectionId;
    this.newBlock.index = this.selectedSection.blockCount + 1;

    let validated = this.assessmentService.validateBlockSection(
      this.newBlock,
      this.selectedSection
    );

    if (!validated) {
      this.submitted = false;
      return;
    }

    this.assessmentService
      .createNewBlock(
        this.assessmentId,
        this.selectedSection.sectionId,
        this.newBlock
      )
      .subscribe(
        (value) => {
          if (value) {
            Swal.fire({
              title: "Congratulations!",
              text: "You have successfuly added a new TOS block.",
              icon: "success",
            });
          }
          this.submitted = false;
          this.modalService.dismissAll();
          this.newBlock = new NewSectionBlock();
          this.getTotalItemsAndScores();
          this.getAssessment();
        },
        (error: HttpErrorResponse) => {
          this.submitted = false;
          this.notifier.notify("error", `${error.error.message}`);
        }
      );
  }

  openTemplateImportModal(importTemplateModal: any) {
    this.modalService.open(importTemplateModal, { centered: true, size: "md" });
  }

  importTemplate() {
    this.submitted = true;
    this.templateImport.assessmentId = this.assessmentId;
    this.assessmentService
      .importAssessmentTemplate(this.templateImport)
      .subscribe(
        (value) => {
          if (value) {
            this.assessment = value;
            this.ngOnInit();
            this.modalService.dismissAll();
          }
          this.submitted = false;
          this.modalService.dismissAll();
          this.getAssessment();
          this.getTotalItemsAndScores();
        },
        (error: HttpErrorResponse) => {
          this.submitted = false;
          this.notifier.notify(`error`, `${error.error.message}`);
        }
      );
  }

  getTotalItemsAndScores() {
    this.loading = true;
    this.assessmentService
      .getTotalAssessmentItemsAndMarks(this.assessmentId)
      .subscribe(
        (value) => {
          let totalMarks = 0;
          let totalQuestions = 0;

          value.forEach((section, i) => {
            totalQuestions += section.totalItems;
            totalMarks += section.totalScores;

            /* this.assessment.sectionDetails.forEach((sectionDetail) => {
              if (section.sectionId == sectionDetail.sectionId) {
                sectionDetail.totalSelectedQuestions = section.totalItems;
                sectionDetail.blockDetailsDTOS.forEach((block) => {
                  if(block.blockType === 'PASSAGES'){
                    this.totalPassages += block.totalFound;
                  }
                })
                sectionDetail.totalCandidateSelectedQuestions =
                  section.totalItemsPerCandidate;
              } 
            }); */

            // get total marks for each section
            if (this.assessment) {
              this.assessment.sectionDetails.forEach((assessmentSection) => {
                if (assessmentSection.sectionId === section.sectionId) {
                  assessmentSection.totalScore = section.totalScores;
                }
              });
            }
          });
          this.sectionItems = value;

          this.cards = [
            {
              title: "Total Section(s)",
              count: this.sectionItems.length,
            },
            { title: "Total Question(s)", count: totalQuestions },
            { title: "Total Passage(s)", count: this.totalPassages },
            { title: "Total Mark(s)", count: totalMarks },
          ];

          this.loading = false;
          //console.log(this.assessment);
        },
        (error: HttpErrorResponse) => {
          this.notifier.notify("error", `${error.error.message}`);
          this.loading = false;
        }
      );
  }

  updateBlock(editBlockForm: any) {
    this.submitted = true;
    this.editBlock.sectionId = this.selectedSection.sectionId;
    this.editBlock.assessmentId = this.assessmentId;
    this.editBlock.subjectId = this.selectedSection.subjectId;

    this.assessmentService
      .updateBlock(
        this.assessmentId,
        this.selectedSection.sectionId,
        this.selectedBlock.blockId,
        this.editBlock
      )
      .subscribe(
        (value) => {
          if (value) {
            Swal.fire({
              title: "Congratulations!",
              text: "You have successfully updated a block information.",
              icon: "success",
            });
          }
          this.submitted = false;
          this.getAssessment();
          this.getTotalItemsAndScores();
          this.modalService.dismissAll();
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

  openDeleteBlockConfirmationModal(
    deleteBlockConfirmationModal: any,
    section?: any,
    block?: any
  ) {
    this.selectedSection = section;
    this.selectedBlock = block;
    this.modalService.open(deleteBlockConfirmationModal, {
      centered: true,
      size: "md",
    });
  }

  deleteBlock(block?: any, sectionId?: string) {
    this.submitted = true;
    this.assessmentService
      .deleteBlock(
        this.assessmentId,
        this.selectedSection.sectionId,
        this.selectedBlock.blockId
      )
      .subscribe(
        (value) => {
          if (value) {
            Swal.fire({
              title: "Congratulations!",
              text: `You have successfully deleted ${this.selectedBlock.blockName} of ${this.selectedSection.sectionName}`,
              icon: "success",
            });
          }
          this.submitted = false;
          this.getAssessment();
          this.getTotalItemsAndScores();
          this.modalService.dismissAll();
        },
        (error: HttpErrorResponse) => {
          Swal.fire({
            title: "Failed!",
            text: `${error.error.message}`,
            icon: "error",
          });
          this.submitted = false;
        }
      );
  }

  openDeleteSectionConfirmationModal(
    deleteSectionConfirmationModal: any,
    selectedSection: any
  ) {
    this.setSelectedSection(selectedSection);
    this.modalService.open(deleteSectionConfirmationModal, {
      centered: true,
      size: "md",
    });
  }

  deleteSection() {
    this.submitted = true;
    this.assessmentService
      .deleteSection(this.assessmentId, this.selectedSection.sectionId)
      .subscribe(
        (value) => {
          if (value) {
            Swal.fire({
              title: "Congratulations!",
              text: "You have successfully deleted a new section.",
              icon: "success",
            });
          }
          this.submitted = false;
          this.getAssessment();
          this.getTotalItemsAndScores();
          this.modalService.dismissAll();
        },
        (error: HttpErrorResponse) => {
          this.submitted = false;
          this.notifier.notify("error", `${error.error.message}`);
        }
      );
  }

  saveAssessmentSettings(assessmentSettingsForm?: any) {
    console.log(this.assessmentSettings);
    // console.log(assessmentSettingsForm, "form");

    // Ensure startDate and endDate are strings and end with "Z"
    this.assessmentSettings.startDate =
      typeof this.assessmentSettings.startDate === "string"
        ? this.assessmentSettings.startDate
        : this.assessmentSettings.startDate.toISOString();

    this.assessmentSettings.startDate =
      !this.assessmentSettings.startDate.endsWith("Z")
        ? this.assessmentSettings.startDate + "Z"
        : this.assessmentSettings.startDate;

    this.assessmentSettings.endDate =
      typeof this.assessmentSettings.endDate === "string"
        ? this.assessmentSettings.endDate
        : this.assessmentSettings.endDate.toISOString();

    this.assessmentSettings.endDate = !this.assessmentSettings.endDate.endsWith(
      "Z"
    )
      ? this.assessmentSettings.endDate + "Z"
      : this.assessmentSettings.endDate;

    // Ensure unchecked settings are set to 0

    if (this.compensatoryChecked) {
      if (this.assessmentSettings.compensatoryTimeMins < 5) {
        return this.notifier.notify(
          "error",
          "Compensatory time cannot be less than 5"
        );
      }
    }

    if (this.inactivityChecked) {
      if (this.assessmentSettings.inactivityWaringSec < 15) {
        return this.notifier.notify(
          "error",
          "Inactivity warning  cannot be less than 15"
        );
      }
    }

    console.log(this.instructionReadTimeChecked, "instructionReadTimeChecked");
    if (this.instructionReadTimeChecked) {
      console.log(this.assessmentSettings.instructionReadTimeSec, "inredtime");
      if (
        this.assessmentSettings.instructionReadTimeSec !== 0 &&
        this.assessmentSettings.instructionReadTimeSec < 40
      ) {
        return this.notifier.notify(
          "error",
          "Instruction read time cannot be less than 40"
        );
      }
    }

    if (this.warnEndOfReadingTimeChecked) {
      if (
        this.assessmentSettings.warnEndOfReadingTimeSec !== 0 &&
        this.assessmentSettings.warnEndOfReadingTimeSec < 20
      ) {
        return this.notifier.notify(
          "error",
          "Warn end of read time  cannot be less than 20"
        );
      }
    }

    this.assessmentSettings.description =
      this.assessmentSettings.description.trim();
    this.assessmentSettings.name = this.assessmentSettings.name.trim();

    if (!this.assessmentSettings.instantResult) {
      delete this.assessmentSettings.passMark;
    }
    console.log(this.assessmentSettings, "assessment seetings");

    this.submitted = true;
    this.assessmentService
      .saveAssessmentSettings(this.assessmentSettings, this.assessmentId)
      .subscribe(
        (value) => {
          if (value) {
            Swal.fire({
              title: "Congratulations!",
              text: "Your exam settings has been saved successfully.....",
              icon: "success",
            });

            this.ngOnInit();
            this.submitted = false;
            this.modalService.dismissAll();
          }
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

  canPublish(assessmentStatus: string) {
    this.incompleteSections = 0;
    this.assessment.sectionDetails.forEach((section, index) => {
      if (
        section.totalSelectedQuestions !== section.totalQuestions ||
        section.totalCandidateSelectedQuestions !==
          section.totalQuestionsPerCandidate
      ) {
        this.incompleteSections++;
        // console.log(this.incompleteSections);
      }
      console.log(section, "section");
      if (section.totalSelectedQuestions !== section.totalQuestions) {
        this.notifier.notify(
          "error",
          `The total expected questions and total found questions are not equal per section`
        );
        console.log(
          `totalslected and ${section.totalSelectedQuestions} section total found ${section.totalQuestions} are not equal`
        );

        return;
      } else if (
        section.totalQuestionsPerCandidate !==
        section.totalCandidateSelectedQuestions
      ) {
        this.notifier.notify(
          "error",
          `The total expected question per candidate and total found questions  per candidate are  not equal per sections`
        );
        console.log(
          `total question percandiate ${section.totalQuestionsPerCandidate} is not equal to totalfound for percandidate in section ${section.totalCandidateSelectedQuestions}`
        );
        return;
      }
      // console.log(section.totalCandidateSelectedQuestions);
    });

    console.log(this.incompleteSections, "incompleteSection");
    if (assessmentStatus === "PUBLISHED" || this.incompleteSections > 0) {
      return false;
    }
    return true;
  }

  saveAssessmentInstruction(assessmentInstructionForm: any) {}

  /* createNewSection(){
    this.assessmentService.createNewSection(this.assessmentId, this.newSection).subscribe((value) => {
      if(value){
        this.ngOnInit();
        this.modalService.dismissAll();
      }
    }, (error: HttpErrorResponse) => {
      console.log(error);
    })
  } */

  saveSection(newSection?: any) {
    this.submitted = true;
    this.newSection.assessmentId = this.assessmentId;

    let validated = this.assessmentService.validateSection(this.newSection);

    if (!validated) {
      this.submitted = false;
      return;
    }

    this.assessmentService
      .createNewSection(this.assessmentId, this.newSection)
      .subscribe(
        (value) => {
          if (value) {
            Swal.fire({
              title: "Congratulations!",
              text: "You have successfully created a new section.",
              icon: "success",
            });
          }
          
          (document.getElementById('modalbtn') as HTMLButtonElement)?.click()
          this.getAssessment();
          this.getTotalItemsAndScores();
          this.submitted = false;
          this.modalService.dismissAll();
          this.newSection = new NewAssessmentSection();
        },
        (error: HttpErrorResponse) => {
          this.submitted = false;
          this.notifier.notify("error", `${error.error.message}`);
        }
      );
  }

  setSubject(subject: DropdownSubjectList) {
    this.newSection.name = subject.subjectName;
    //this.newSection.subjectName = subject.subjectName.toUpperCase();
    //this.newSection.subjectId = subject.subjectId;
    this.itemService.subjectName = subject.subjectName;
    this.itemService.subjectId = subject.subjectId;
  }

  setSectionName($event: any) {
    this.selectedSection.sectionName = $event.name;
  }

  changeSelectedSection($event: any) {
    // console.log($event);
    //this.selectedSection = this.assessment.sectionDetails[this.assessment.sectionDetails.indexOf($event)]
  }

  setSelectionMethod(selectedMethod: string) {
    //set the selection method of questions to either manual or random
    //this.newBlock.selectionProcess = selectedMethod;
  }

  saveItemsToAssessment(questions: any) {
    this.selectedItems = questions;
    // console.log('selectedItems', this.selectedItems);
    /* this.selectedBlock.items.push(question.itemId);
    //this.sections.includes(this.selectedBlock)
    console.log('newly added item to assessment', this.selectedBlock.items);
    console.log(this.sections); */
  }

  removeAssessmentItem(questionIndex: number) {
    this.selectedItems.splice(questionIndex, 1);
    // console.log(this.selectedItems);
  }

  saveAssessment() {
    // console.log(this.editSection);
  }

  saveAutomaticallySelectedItemsToBlock() {}

  recievePassageIds(passageIds: any) {
    // console.log(passageIds);
    this.selectedPassageIds = passageIds;
    // console.log('selected passage Ids', this.selectedPassageIds);
  }

  saveManualSelectedPassageItemsToBlock() {
    this.savingManualSelectedPassageItems = true;
    this.assessmentService
      .saveManualSelectedQuestionsToAssessment(
        this.assessmentId,
        this.selectedSection.sectionId,
        this.selectedBlock.blockId,
        this.selectedPassageIds
      )
      .subscribe(
        (value) => {
          Swal.fire({
            title: "Congratulations!",
            text: "The selected passage(s) has been added to your assessment.",
            icon: "success",
          });
          this.modalService.dismissAll();
          this.getTotalItemsAndScores();
          this.getAssessment();
          this.savingManualSelectedPassageItems = false;
        },
        (error: HttpErrorResponse) => {
          this.itemService.setDuplicateStatus(error.error.message);
          this.notifier.notify("error", `${error.error.message}`);
          this.savingManualSelectedPassageItems = false;
        }
      );
  }

  saveManualSelectedItemsToBlock() {
    this.submitted = true;
    // console.log('Manual single question selectedItems', this.selectedItems);
    if (this.selectedItems.length > 0) {
      this.assessmentService
        .saveManualSelectedQuestionsToAssessment(
          this.assessmentId,
          this.selectedSection.sectionId,
          this.selectedBlock.blockId,
          this.selectedItems
        )
        .subscribe(
          (value) => {
            if (value) {
              Swal.fire({
                title: "Congratulations!",
                text: `You have successfully added ${this.selectedBlock.totalQuestions} question(s) to the Block.`,
                icon: "success",
              });
            }
            this.modalService.dismissAll();
            this.getTotalItemsAndScores();
            this.getAssessment();
            this.submitted = false;
          },
          (error: HttpErrorResponse) => {
            this.submitted = false;
            this.notifier.notify("error", `${error.error.message}`);
          }
        );
    } else {
      return this.notifier.notify(
        "error",
        `You have selected only ${this.selectedItems.length}/${this.selectedBlock.totalQuestions} questions!`
      );
    }
  }

  viewBlockItems(listBlockItemsModal: any, sectionId: string, blockId: string) {
    this.fetchingBlockItems = true;
    this.loader();
    this.assessmentService
      .fetchBlockItems(this.assessmentId, sectionId, blockId)
      .subscribe(
        (value) => {
          if (value) {
            this.items = value;
            this.items.forEach((item) => (item.showFullItem = false));
          }
          this.fetchingBlockItems = false;
          this.loader();
          // console.log(this.fetchingBlockItems);
          this.openListBlockItemsModal(listBlockItemsModal);
        },
        (error: HttpErrorResponse) => {
          this.fetchingBlockItems = false;
          this.loader();
          // console.log(this.fetchingBlockItems);
          Swal.fire({
            title: "Failed!",
            text: `${error.error.message}`,
            icon: "error",
          });
        }
      );
  }

  viewBlockPassages(
    listBlockPassagesModal: any,
    sectionId: string,
    blockId: string
  ) {
    this.fetchingBlockItems = true;
    this.loader();
    this.assessmentService
      .fetchBlockPassages(this.assessmentId, sectionId, blockId)
      .subscribe(
        (value) => {
          if (value) {
            this.passages = value;
            // console.log(this.passages);
          }
          this.fetchingBlockItems = false;
          this.loader();
          this.openListBlockPassagesModal(listBlockPassagesModal);
        },
        (error: HttpErrorResponse) => {
          this.fetchingBlockItems = false;
          this.loader();
          Swal.fire({
            title: "Failed!",
            text: `${error.error.message}`,
            icon: "error",
          });
        }
      );
  }

  preview(item: any, index: number) {
    if (this.previewData) {
      this.items[this.activePreviewItem].showFullItem = false;
    }
    this.itemService.fetchIndividualItem(item.itemId).subscribe(
      (value) => {
        if (value) {
          this.activePreviewItem = index;
          this.previewData = value;
          item.showFullItem = true;
        }
      },
      (err: HttpErrorResponse) => {
        // console.log(err);
      }
    );
  }

  hidePreview(item: any, index: number) {
    item.showFullItem = false;
    this.previewData = {};
  }

  saveAssessmentAsTemplate() {
    this.submitted = true;
    this.newAssessmentTemplate.assessmentId = this.assessmentId;
    /* console.log(this.newAssessmentTemplate); */
    this.assessmentService
      .saveAssessmentTemplate(this.assessmentId, this.newAssessmentTemplate)
      .subscribe(
        (value) => {
          if (value) {
            Swal.fire({
              title: "Congratulations!",
              text: "This assessment has been saved to your assessment templates.",
              icon: "success",
            });
          }
          this.newAssessmentTemplate = new NewAssessmentTemplate();
          //this.ngOnInit();
          this.submitted = false;
          this.modalService.dismissAll();
        },
        (error: HttpErrorResponse) => {
          this.submitted = false;
          this.notifier.notify("error", `${error.error.message}`);
        }
      );
  }

  saveSectionAsTemplate() {
    this.submitted = true;
    this.newSectionTemplate.assessmentId = this.assessmentId;
    this.newSectionTemplate.sectionId = this.selectedSection.sectionId;
    //console.log(this.newSectionTemplate);
    this.assessmentService
      .saveAssessmentSectionTemplate(
        this.assessmentId,
        this.selectedSection.sectionId,
        this.newSectionTemplate
      )
      .subscribe(
        (value) => {
          if (value) {
            Swal.fire({
              title: "Congratulations!",
              text: "You have successfully saved a new section to your section templates",
              icon: "success",
            });
          }
          this.submitted = false;
          this.newSectionTemplate = new NewAssessmentTemplate();
          this.modalService.dismissAll();
        },
        (error: HttpErrorResponse) => {
          this.submitted = false;
          this.notifier.notify("error", `${error.error.message}`);
        }
      );
  }

  loader() {
    if (this.fetchingBlockItems === false) {
      Swal.close();
    } else {
      // console.log('I am still displaying');
      Swal.fire({
        title: "Loading your questions, Please Wait...",
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

  ngOnDestroy(): void {
    this.itemService.assessmentActive = false;
  }

  openPublishExamConfirmationModal(publishAssessmentConfirmationModal: any) {
    this.modalService.open(publishAssessmentConfirmationModal, {
      centered: true,
      size: "md",
    });
  }

  publishExam() {
    this.submitted = true;
    let publish: Publish = {
      assessmentId: this.assessmentId,
    };

    if (this.canPublish(this.assessment.status) === false) {
      this.submitted = false;
    } else {
      this.assessmentService
        .publishAssessment(this.assessmentId, publish)
        .subscribe(
          (value) => {
            if (value) {
              this.submitted = false;
              this.publishLoader();
              Swal.fire({
                title: "Congratulations!",
                text: `You have successfully published ${this.assessment.name}`,
                icon: "success",
              });
              this.ngOnInit();
              this.modalService.dismissAll();
            }
          },
          (error: HttpErrorResponse) => {
            this.submitted = false;
            Swal.close();
            this.notifier.notify("error", `${error.error.message}`);
          }
        );
    }
  }

  publishLoader() {
    if (!this.submitted) {
      return;
    } else {
      Swal.fire({
        title: "Saving your question, Please Wait...",
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

  hidePassageItems() {
    this.showPassageItems = false;
    this.previewData = [];
  }

  viewSelectedPassageItemsInBlock(passageId: string) {
    this.loadingPassageItemPreview = true;

    this.itemService.fetchPassageItem(passageId).subscribe(
      (value) => {
        if (value) {
          // this.activePreviewItem = index;
          this.showPassageItems = true;
          this.previewData = value;

          this.loadingPassageItemPreview = false;
        }
      },
      (err: HttpErrorResponse) => {
        this.loadingPassageItemPreview = false;
        // console.log(err);
      }
    );
  }

  handleDispayAllSectionOption(value: string) {
    if (value === "allAtOnce") {
      this.assessmentSettings.displayAllSectionsAtOnce = true;
    } else {
      this.assessmentSettings.displayAllSectionsAtOnce = false;
    }
  }
}
