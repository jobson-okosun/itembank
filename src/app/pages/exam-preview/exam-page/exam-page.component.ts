import {
  Component,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription, timer } from "rxjs";
import Swal from "sweetalert2";
import { ISectionProgress, ItemService } from "../services/item.service";
import { ItemType } from "src/app/shared/enum/itemTypes";
import { TrueOrFalseComponent } from "./true-or-false/true-or-false.component";
import { StandardChoiceComponent } from "./standard-choice/standard-choice.component";
import { MultipleResponseComponent } from "./multiple-response/multiple-response.component";
import { ClozeWithDropDownComponent } from "./cloze-with-drop-down/cloze-with-drop-down.component";
import { ClozeWithTextComponent } from "./cloze-with-text/cloze-with-text.component";
import { EssayWithRichTextComponent } from "./essay-with-rich-text/essay-with-rich-text.component";
import { EssayWithShortTextComponent } from "./essay-with-short-text/essay-with-short-text.component";
import { ClassifyByMatchingComponent } from "./classify-by-matching/classify-by-matching.component";
import { ClassifyByOrderingComponent } from "./classify-by-ordering/classify-by-ordering.component";
import { PrimeNGConfig } from "primeng/api";
// import { SettingsService } from "../services/settings.service";
import { Paginator } from "primeng/paginator";
import {
  ICandidateAutoSave,
  ICandidateAutoSaveItems,
  ICandidateAutoSaveResponse,
  ICandidateData,
  ICandidateEndExamData,
  ICandidateItem,
} from "../models/candidate";
import { CandidateService } from "../services/candidate.service";
import { DOCUMENT } from "@angular/common";
import { YesOrNoComponent } from "./yes-or-no/yes-or-no.component";
import { HttpErrorResponse } from "@angular/common/http";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AssessmentFont } from "src/app/shared/enum/assessmentFonts";
import { NotifierService } from "angular-notifier";
import { BlockType } from "src/app/shared/enum/blockTypes";
import { ChoiceMatrixComponent } from "./choice-matrix/choice-matrix.component";
import { ExamPreviewService } from "../services/exam-preview.service";
import {
  ExamPreviewData,
  SectionPreviewData,
} from "../models/exam-preview-data";
import { ClozeImageWithDragDropComponent } from "./cloze-image-with-drag-drop/cloze-image-with-drag-drop.component";
import { ClozeImageWithDropdownComponent } from "./cloze-image-with-dropdown/cloze-image-with-dropdown.component";
import { ClozeImageWithTextComponent } from "./cloze-image-with-text/cloze-image-with-text.component";

@Component({
  selector: "app-exam-page",
  templateUrl: "./exam-page.component.html",
  styleUrls: ["./exam-page.component.scss"],
})
export class ExamPageComponent implements OnInit, OnDestroy {
  @Input() assessmentId: string = "";
  currentQuestionNumber: number = 0;
  currentQuestion: ICandidateItem;
  itemTypes = ItemType;
  itemsLength: number;
  keyPressed: string = "";
  shortcutKeys: string[] = ["a", "b", "c", "d"];
  attemptedQuestionsNumbers: number[] = [];
  sections: Array<{ name: string; id: string }> = [];
  questionNumbers: number[] = [];
  unAttemptedQuestionNumbers: number[] = [];
  examTimerSub$: Subscription;
  examDuration: number;
  autoSaveInterval: number;
  page: any;
  lastAutoSaveTimeSec: number = 0;
  saved: boolean = false;
  questionNumbersForRevisit: Array<number> = [];
  assessmentName: string;
  currentCandidateData: ICandidateData;
  element: any;
  timeDisplay = {
    hrs: 0o00,
    mins: 0o00,
    secs: 0o00,
  };
  unAttemptedQuestionNumbersInAllSections: any[];
  currentSectionName: string = "";
  lastAutoSaveTime: Date = new Date();
  isOffline: boolean = false;

  // @ViewChildren(NgModel) modelRefList: QueryList3e<NgModel>;
  @ViewChild(TrueOrFalseComponent)
  trueFalseRef!: TrueOrFalseComponent;

  @ViewChild(ChoiceMatrixComponent)
  choiceMatrixRef!: ChoiceMatrixComponent;

  @ViewChild(ClozeImageWithDragDropComponent)
  clozeImageWithDragDropRef!: ClozeImageWithDragDropComponent;

  @ViewChild(ClozeImageWithDropdownComponent)
  clozeImageWithDropdownRef!: ClozeImageWithDropdownComponent;

  @ViewChild(ClozeImageWithTextComponent)
  clozeImageWithTextRef!: ClozeImageWithTextComponent;

  @ViewChild(YesOrNoComponent)
  yesNoRef!: YesOrNoComponent;
  @ViewChild(StandardChoiceComponent)
  standardChoiceRef!: StandardChoiceComponent;
  @ViewChild(MultipleResponseComponent)
  multipleResponseRef!: MultipleResponseComponent;
  @ViewChild(ClozeWithDropDownComponent)
  clozeWithDropDownRef!: ClozeWithDropDownComponent;
  @ViewChild(ClozeWithTextComponent)
  clozeWithtextRef!: ClozeWithTextComponent;
  @ViewChild(EssayWithRichTextComponent)
  essayWithRichTextRef!: EssayWithRichTextComponent;
  @ViewChild(EssayWithShortTextComponent)
  essayWithShortTextRef!: EssayWithShortTextComponent;
  @ViewChild(ClassifyByMatchingComponent)
  classifyByMatchingRef!: ClassifyByMatchingComponent;
  @ViewChild(ClassifyByOrderingComponent)
  classifyByOrderingRef!: ClassifyByOrderingComponent;
  @ViewChild("paginator", { static: false }) paginator: Paginator;
  fontSize: string;
  fontsEnum = AssessmentFont;
  autoSaveResponse: ICandidateAutoSaveResponse;
  totalAttemptedQuestionInAllSections: number = 0;
  onLastSection: boolean = false;
  currentSectionIndex: number = 0;
  sectionProgress: ISectionProgress[] = [];
  totalQuestionsInAllSections: number = 0;
  // assessmentId: string = "";
  currentSectionData: SectionPreviewData;
  assessmentPreviewDetails: ExamPreviewData;
  loadingSectionQuestions: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private router: Router,
    private itemService: ItemService,
    private primeNG: PrimeNGConfig,
    // private settingsService: SettingsService,
    private candidateService: CandidateService,
    private modalService: NgbModal,
    private notifierService: NotifierService,
    private examPreviewService: ExamPreviewService,
    private ar: ActivatedRoute
  ) {}

  @HostListener("document:keypress", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keyPressed = event.key;
    //shortCuts
    //shortcut not to work with short text ,rich text and cloze text
    if (
      this.currentQuestion.item_type != ItemType.ESSAY_RICH_TEXT &&
      this.currentQuestion.item_type != ItemType.SHORT_TEXT &&
      this.currentQuestion.item_type != ItemType.CLOZE_TEXT
    ) {
      this.useShortcut();
    }
  }

  ngOnInit(): void {
    this.assessmentId = this.ar.snapshot.params["assessmentId"];

    //  0194b283-8417-78da-a9ae-76f71c13d3df
    // 0194cc2c-d704-75d5-bcd0-d8e4b9438477

    // this.examPreviewService.
    // let sections: ExamPreviewData;
    this.examPreviewService
      .fetchAssesmentPreviewDetails(this.assessmentId)
      .subscribe({
        next: (value) => {
          this.assessmentPreviewDetails = value;
          // sections = value;
          console.log(value);

          this.sections = value.assessmentSections.map((section) => {
            return {
              name: section.name,
              id: section.id,
            };
          });

          this.currentSectionName = this.sections[0].name;

          console.log(this.sections[0].id, "id");

          this.getCandidateDataForSection(
            this.assessmentId,
            this.sections[0].id
          );
        },
      });

    // this.timerSub = this.timeService.startTimer().subscribe({
    //   next: (val) => {
    //     // console.log(val + '' + 'Countdown')
    //     // console.log(--this.timeLeft);
    //     --this.timeLeft
    //   },
    //   complete: () => {
    //     this.endExam();
    //     Swal.fire({
    //       title: "Exam submitted!",
    //       text: "You ran out of time.",
    //       confirmButtonColor: "rgb(3, 142, 220)",
    //       icon: "info",
    //     });
    //   },
    // });
    // this.itemTypes = itemType;

    // if (
    //   this.candidateService.candidateData.assessment_data
    //     .display_all_sections_at_once
    // ) {
    //   this.itemService.displayAllSectionsAtOnce();
    // }
  }

  getCandidateDataForSection(assessmentId: string, sectionId: string) {
    this.loadingSectionQuestions = true;
    this.examPreviewService
      .fetchAssessmentSectionPreview(assessmentId, sectionId)
      .subscribe({
        next: (value) => {
          this.currentSectionData = value;
          this.buildItemForSection(value);
          const foundSection = this.sections.find(
            (section) => section.id === sectionId
          );
          this.sections = this.itemService.getAssessmentSections();
          this.captureSectionAndSetQuestion(foundSection.name);
          console.log(value + "section preview");

          this.itemService.setSectionQuestion(this.sections[0].name);
          this.currentSectionName = this.itemService.currentSection;
          this.attemptedQuestionsNumbers =
            this.itemService.attemptedQuestionNumbers;

          this.itemsLength = this.itemService.getItems().length;
          this.currentCandidateData =
            this.candidateService.getCandidateData().candidate_data;
          this.assessmentName =
            this.candidateService.getCandidateData().assessment_data.name;
          this.setFontSize(
            this.candidateService.getCandidateData().assessment_data.font_size
          );
          // this.setQuestionNumbers();

          this.setCurrentQuestionNumber();
          this.itemService.currentQuestionNumber = 0;
          this.getCurrentQuestion();
          this.setQuestionNumbers();
          this.getTotalQuestionsInAllSections();

          // this.currentQuestion =this.itemService.getCurrentQuestion()

          console.log(this.itemsLength);
          this.startExamTimer();
          this.lastAutoSaveTimeSec = 0;
          this.element = document.documentElement;
          this.currentSectionName = foundSection.name;
          // this.checkForCompensatoryTime();
          console.log(this.itemService.getCurrentQuestion());
          this.loadingSectionQuestions = false;
        },
      });
  }

  buildItemForSection(value: SectionPreviewData) {
    // trae
    this.currentSectionData = value;

    console.log(this.currentSectionData, "current section data");

    this.candidateService.candidateData = {
      assessment_data: {
        allow_end_exam_after_xquestions: 10,
        // value.assessmentSettings.allowEndExamAfterXQuestions,
        auto_save_sec: 4000,
        // value.assessmentSettings.autoSaveSec,
        compensatory_time_value:
          this.assessmentPreviewDetails.assessmentSettings.compensatoryTimeMins,
        display_all_sections_at_once:
          this.assessmentPreviewDetails.assessmentSettings
            .displayAllSectionsAtOnce,
        duration_minutes:
          this.assessmentPreviewDetails.assessmentSettings.durationMinutes,
        end_exam_confirmation:
          this.assessmentPreviewDetails.assessmentSettings.endExamConfirmation,
        font_size: this.assessmentPreviewDetails.assessmentSettings
          .fontSize as any,
        inactivity_waring_sec:
          this.assessmentPreviewDetails.assessmentSettings.inactivityWaringSec,
        instruction_read_time_sec:
          this.assessmentPreviewDetails.assessmentSettings
            .instructionReadTimeSec,
        name: this.assessmentPreviewDetails.name,
        preserve_section_order:
          this.assessmentPreviewDetails.assessmentSettings.preserveSectionOrder,
        warn_end_of_reading_time_sec:
          this.assessmentPreviewDetails.assessmentSettings
            .warnEndOfReadingTimeSec,
        warn_unattempted_questions:
          this.assessmentPreviewDetails.assessmentSettings
            .warnUnattemptedQuestions,
        end_exam_instruction:
          this.assessmentPreviewDetails.assessmentSettings.endExamInstruction,
        start_exam_instruction:
          this.assessmentPreviewDetails.assessmentSettings.startExamInstruction,
      },
      candidate_data: {
        id: "123456",
        login_field_value: "previewcandiate@gmail.com",
        login_times: [],
        minutes_left: 1000,
        name: "Test Candidate",
        passport: "",
        seconds_left: 100,
        section_ids: this.assessmentPreviewDetails.assessmentSections.map(
          (section) => section.id
        ),
      },
      sections_overview: this.assessmentPreviewDetails.assessmentSections.map(
        (section) => {
          return {
            duration: section.sectionSettings.durationInMinutes,
            name: section.name,
            total_questions: section.totalQuestions,
          };
        }
      ),

      sections_questions: this.assessmentPreviewDetails.assessmentSections.map(
        (section) => {
          return {
            id: section.id,
            name: section.name,
            section_settings: {
              allow_calculator: section.sectionSettings.allowCalculator,
              duration_in_minutes: section.sectionSettings.durationInMinutes,
              minutes_left: 100,
              prevent_navigation_to_attempted_items:
                section.sectionSettings.preventNavigationToAttemptedItems,
              seconds_left: 100,
              shuffle_blocks: section.sectionSettings.shuffleBlocks,
              shuffle_items: section.sectionSettings.shuffleItems,
              shuffle_options: section.sectionSettings.shuffleOptions,
              section_instruction: section.sectionSettings.sectionInstruction,
            },
            question_blocks: this.currentSectionData.blocks.map((block) => {
              return {
                id: block.id,
                total_questions: block.totalQuestions,
                index: block.index,
                block_type: block.blockType as BlockType,
                items: block.items.map((item) => {
                  return {
                    id: item.id,
                    passage_stimulus: item.passageStimulus,
                    stimulus: item.stimulus,
                    options: item.options,
                    stems: item.stems,
                    possible_responses: item.possibleResponses,
                    response_positions: item.responsePositions,
                    item_type: item.itemType,
                    numerical: item.numerical,
                    case_sensitive: item.caseSensitive,
                    shuffle_options: item.shuffleOptions,
                    multiple_response: item.multipleResponse,
                    max_words: item.maxWords,
                    max_length: item.maxLength,
                    allow_paste: item.allowPaste,
                    allow_copy: item.allowCopy,
                    allow_cut: item.allowCut,
                    plain_text: item.plainText,
                    responses: [],
                    selectedResponse: "",
                    block_id: block.id,
                    revisit: false,
                    max_responses: item.maxWords,
                    image_data: item.images,

                    answers: item.scoringOption.answers,
                    showAnswer: false
                  };
                }),
                passages: block.passages.map((passage) => {
                  return {
                    id: passage.id,
                    stimulus: passage.stimulus,
                    items: passage.items.map((item) => {
                      return {
                        id: item.id,
                        passage_stimulus: item.passageStimulus,
                        stimulus: item.stimulus,
                        options: item.options,
                        stems: item.stems,
                        possible_responses: item.possibleResponses,
                        response_positions: item.responsePositions,
                        item_type: item.itemType as ItemType,
                        numerical: item.numerical,
                        case_sensitive: item.caseSensitive,
                        shuffle_options: item.shuffleOptions,
                        multiple_response: item.multipleResponse,
                        max_words: item.maxWords,
                        max_length: item.maxLength,
                        allow_paste: item.allowPaste,
                        allow_copy: item.allowCopy,
                        allow_cut: item.allowCut,
                        plain_text: item.plainText,
                        responses: [],
                        selectedResponse: "",
                        block_id: block.id,
                        revisit: false,
                        max_responses: item.maxWords,
                        image_data: item.images,
                        answers: item.scoringOption.answers,
                        showAnswer: false
                      };
                    }),
                  };
                }),
              };
            }),
          };
        }
      ),
    };

    console.log(this.candidateService.candidateData, "candidate data");
  }

  confirm(): void {
    let itemSection = {};

    Swal.fire({
      title: "Are you sure you want to end this exam?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(3, 142, 220)",
      cancelButtonColor: "rgb(243, 78, 78)",
      confirmButtonText: "Yes, end exam!",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: "Exam submitted!",
          text: "You have submitted successfully.",
          confirmButtonColor: "rgb(3, 142, 220)",
          icon: "success",
        });

        this.doEndExam(false);
      }
    });
  }

  // checkForCompensatoryTime() {
  //   if (
  //     this.candidateService.getCandidateData().assessment_data
  //       .compensatory_time_value
  //   ) {
  //     this.currentCandidateData.minutes_left =
  //       this.candidateService.getCandidateData().assessment_data.compensatory_time_value;

  //     this.notifierService.notify("success", "Compensatory time added");
  //   }
  // }

  // displayConectionLossModal(): void {
  //   Swal.fire({
  //     title: "Loss of Connection",
  //     text: "You Have lost connection to the exam server, kindly contact admin for assisstance",
  //     icon: "warning",
  //     showCancelButton: false,
  //     confirmButtonColor: "rgb(3, 142, 220)",
  //     cancelButtonColor: "rgb(243, 78, 78)",
  //     confirmButtonText: "Yes, Relogin",
  //     allowOutsideClick: false,
  //     allowEscapeKey: false,
  //   }).then((result) => {
  //     if (result.value) {
  //       this.candidateService.isExamOn = false;
  //       this.candidateService.isExamEnded = true;
  //       this.router.navigate(["examalpha/on-premise/candidate"]);
  //     }
  //   });
  // }

  callAttemptedQuestions() {
    console.log(this.attemptedQuestionsNumbers);
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  endExam(content?: any): void {
    console.log(
      "section prg",
      this.itemService.getUnattemptedQuestionsInAllSections()
    );

    if (this.warnCandidatesOfUnattemptedQuestions() === true) {
      //add check for if the cadidtae has already attempted app question in section, there wont be need to display the modal anymore
      this.unAttemptedQuestionNumbersInAllSections =
        this.itemService.getUnattemptedQuestionsInAllSections();
      this.openModal(content);
    } else {
      if (this.displayConfirmationWindowOnSubmission()) {
        this.confirm();
      }
    }
  }

  doEndExam(timedOut: boolean) {
    this.candidateService
      .doEndExam(
        this.generatePayLoadForAutoSave(),
        this.candidateService.getPreLoginData().id,

        this.currentCandidateData.login_field_value,

        timedOut
      )
      .subscribe({
        next: (value) => {
          this.candidateService.endExamResponse = value;
          this.candidateService.isExamOn = false;
          this.candidateService.isExamEnded = true;
          Swal.close();

          if (this.examTimerSub$ !== undefined) {
            this.examTimerSub$.unsubscribe();
          }
          this.router.navigate(["examalpha/on-premise/candidate/end-exam"]);
        },
      });
  }

  ngOnDestroy(): void {
    this.candidateService.isExamOn = false;
    if (this.examTimerSub$ !== undefined) {
      this.examTimerSub$.unsubscribe();
    }
    // console.log("i have been destroyed");
  }

  nextQuestion(): void {
    let currentQuestion = this.itemService.getCurrentQuestion();

    //console.log(currentQuestion);
    this.getCurrentQuestionResponse(currentQuestion);
    this.itemService.captureAttemptedQuestionNumber();
    // check to current question and next question type to know if they are the same type so as to reinitialize component
    // console.log(this.attemptedQuestionsNumbers);
    this.fetchProgressUpdates();
    this.changePaginatorToNext();
    if (this.isTheSameItemType("nextQuestion")) {
      this.callNgOnInit();
    } else {
      this.setCurrentQuestionNumber();
      this.getCurrentQuestion();
    }
    //console.log(this.currentQuestion);
    //this.nextQuestion()

    //  this.modelRefList.forEach((element)=>{
    //   console.log( element)
    //  })
  }

  previousQuestion(): void {
    let currentQuestion = this.itemService.getCurrentQuestion();
    this.getCurrentQuestionResponse(currentQuestion);
    this.itemService.captureAttemptedQuestionNumber();
    this.fetchProgressUpdates();
    this.changePaginatorToPrevious();
    if (this.isTheSameItemType("previousQuestion")) {
      this.callNgOnInit();
    } else {
      this.setCurrentQuestionNumber();
      this.getCurrentQuestion();
    }
  }

  getCurrentQuestionResponse(item: ICandidateItem) {
    console.log(item);
  }

  getCurrentQuestion(): ICandidateItem {
    this.currentQuestion = this.itemService.getCurrentQuestion();
    return this.currentQuestion;
  }

  callNgOnInit(): void {
    // Mapping of item types to the corresponding reference and ngOnInit method
    const itemTypeToRefMap: { [key: string]: any } = {
      [ItemType.TRUE_FALSE]: this.trueFalseRef,
      [ItemType.MCQ]: this.standardChoiceRef,
      [ItemType.MRQ]: this.multipleResponseRef,
      [ItemType.ESSAY_RICH_TEXT]: this.essayWithRichTextRef,
      [ItemType.SHORT_TEXT]: this.essayWithShortTextRef,
      [ItemType.ORDER_LIST]: this.classifyByOrderingRef,
      [ItemType.ASSOCIATION]: this.classifyByMatchingRef,
      [ItemType.CLOZE_TEXT]: this.clozeWithtextRef,
      [ItemType.CLOZE_DROPDOWN]: this.clozeWithDropDownRef,
      [ItemType.YES_NO]: this.yesNoRef,
      [ItemType.CHOICE_MATRIX]: this.choiceMatrixRef,
      [ItemType.IMAGE_DRAG_AND_DROP]: this.clozeImageWithDragDropRef,
      [ItemType.CLOZE_TEXT_IMAGE]: this.clozeImageWithTextRef,
      [ItemType.CLOZE_DROPDOWN_IMAGE]: this.clozeImageWithDropdownRef,
    };

    

    const currentItemType = this.itemService.getCurrentQuestion().item_type;

    // Check if the reference exists for the current item type, and call ngOnInit if so
    if (itemTypeToRefMap[currentItemType]) {
      itemTypeToRefMap[currentItemType]?.ngOnInit();
    }

    // Set the current question number
    this.setCurrentQuestionNumber();
  }

  setCurrentQuestionNumber() {
    this.currentQuestionNumber = this.itemService.currentQuestionNumber;
  }

  useShortcut(): void {
    if (this.currentQuestionNumber != 0) {
      switch (this.keyPressed.toLowerCase()) {
        case "p":
          this.previousQuestion();
          break;
      }
    }
    if (this.currentQuestionNumber + 1 != this.itemsLength) {
      switch (this.keyPressed.toLowerCase()) {
        case "n":
          this.nextQuestion();
          break;
      }
    }

    if (this.getCurrentQuestion().item_type === this.itemTypes.MRQ) {
      // for (let i = 0; i < this.shortcutKeys.length; i++) {
      switch (this.keyPressed.toLowerCase()) {
        case `a`:
          this.multipleResponseRef.optionClicked(
            this.getCurrentQuestion().options[0].value
          );
          break;
        case "b":
          this.multipleResponseRef.optionClicked(
            this.getCurrentQuestion().options[1].value
          );
          break;
        case "c":
          this.multipleResponseRef.optionClicked(
            this.getCurrentQuestion().options[2].value
          );
          break;
        case "d":
          this.multipleResponseRef.optionClicked(
            this.getCurrentQuestion().options[3].value
          );
          break;
        // }
      }
    } else if (this.getCurrentQuestion().item_type === this.itemTypes.MCQ) {
      // for (let i = 0; i < this.shortcutKeys.length; i++) {
      switch (this.keyPressed.toLowerCase()) {
        case `a`:
          this.standardChoiceRef.optionSelected(
            this.getCurrentQuestion().options[0].value
          );
          // this.getCurrentQuestion().responses[0] = "0";
          break;
        case "b":
          this.standardChoiceRef.optionSelected(
            this.getCurrentQuestion().options[1].value
          );
          // this.getCurrentQuestion().responses[0] = "1";
          break;
        case "c":
          this.standardChoiceRef.optionSelected(
            this.getCurrentQuestion().options[2].value
          );
          // this.getCurrentQuestion().responses[0] = "2";
          break;
        case "d":
          this.standardChoiceRef.optionSelected(
            this.getCurrentQuestion().options[3].value
          );
          // this.getCurrentQuestion().responses[0] = "3";
          break;
      }
    } else if (
      this.getCurrentQuestion().item_type === this.itemTypes.TRUE_FALSE ||
      this.getCurrentQuestion().item_type === this.itemTypes.YES_NO
    ) {
      switch (this.keyPressed.toLowerCase()) {
        case `a`:
          this.getCurrentQuestion().responses[0] =
            this.getCurrentQuestion().options[0].value;
          break;
        case "b":
          this.getCurrentQuestion().responses[0] =
            this.getCurrentQuestion().options[1].value;
          break;
      }
      // }
    }
  }

  isTheSameItemType(reference: string): boolean {
    switch (reference) {
      case "nextQuestion":
        if (
          this.itemService.getCurrentQuestion().item_type ==
          this.itemService.getNextQuestionItemType()
        ) {
          return true;
        }
        break;
      case "previousQuestion":
        if (
          this.itemService.getCurrentQuestion().item_type ==
          this.itemService.getPreviousQuestionItemType()
        ) {
          return true;
        }
        break;
    }
    return false;
  }

  // captureAttemptedQuestionNumbers(): void {
  //   if (
  //     this.getCurrentQuestion().answers.length != 0 &&
  //     !this.getCurrentQuestion().answers.includes(undefined) &&
  //     !this.attemptedQuestionsNumbers.includes(this.getCurrentQuestionNumber())
  //   ) {
  //     this.attemptedQuestionsNumbers.push(this.getCurrentQuestionNumber());
  //     console.log("i have been attempted" + this.getCurrentQuestion().stimulus);
  //     console.log(this.getCurrentQuestion().answers);
  //   }
  // }

  setQuestionNumbers(): void {
    this.questionNumbers = [];
    for (let i = 0; i < this.itemsLength; i++) {
      this.questionNumbers.push(i + 1);
    }
  }

  navigateTo(index: number): void {
    this.paginator.changePage(index);
    if (
      this.itemService.navigateTo(index).item_type ==
      this.currentQuestion.item_type
    ) {
      this.callNgOnInit();
    } else {
      this.currentQuestion = this.itemService.navigateTo(index);
      this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
    }
  }

  fetchProgressUpdates(): void {
    const currentSectionIndex = this.itemService.sectionProgress.findIndex(
      (section) => section.sectionName === this.itemService.currentSection
    );
    this.attemptedQuestionsNumbers =
      this.itemService.sectionProgress[currentSectionIndex].attemptedQuestions;

    console.log(this.attemptedQuestionsNumbers);
    // console.log(this.itemService.attemptedQuestionsNumbers);
    this.setUnattemptedQuestionNumbers();
    this.setQuestionNumbersForRevisit();
    this.setQuestionNumbers();
  }

  getAttemptedQuestionPecentage(): number {
    return (this.attemptedQuestionsNumbers.length / this.itemsLength) * 100;
  }

  setUnattemptedQuestionNumbers(): void {
    // const unAttemptedItems = this.itemService
    //   .getItems()
    //   .filter((item) => item.answers.length === 0);

    // this.itemService.captureUnattemptedQuestionNumbers()
    this.unAttemptedQuestionNumbers =
      this.itemService.getUnattemptedQuestionNumbersInSection(
        this.itemService.currentSection
      );

    // console.log(this.unAttemptedQuestionNumbers)
  }

  setQuestionNumbersForRevisit(): void {
    this.questionNumbersForRevisit =
      this.itemService.getQuestionNumbersForRevisitInsection(
        this.itemService.currentSection
      );
  }

  checkIfAttempted(number: number): string {
    // console.log(this.attemptedQuestionsNumbers);
    // this.fetchProgressUpdates();
    const itemFound = this.attemptedQuestionsNumbers.find(
      (item) => item + 1 == number
    );

    // console.log(itemFound);
    if (itemFound != null) {
      return "#ffffff";
    }
    return "#25a0e2";
    // return "";
  }

  // getStyleObject(number: number): object {
  //   this.fetchProgressUpdates();
  //   var itemFound = this.attemptedQuestionsNumbers.find(
  //     (item) => item + 1== number
  //   );
  //   // let borderColor = itemFound ? "red" : "pink";
  //   let backgroundColor = itemFound ? "black" : "green";
  //   // let textColor = itemFound ? "black" : "white";
  //   // console.log(itemFound);

  //   return {
  //     // "border-color": borderColor,
  //     "background-color": backgroundColor,
  //   //  "color": textColor
  //   };
  // }

  getClassObject(currentQuestionNumber: number): string {
    // this.fetchProgressUpdates();
    // console.log("calle");
    const foundAttemptedQuestionNumber = this.attemptedQuestionsNumbers.find(
      (attemptedQuestionNumber) =>
        attemptedQuestionNumber + 1 == currentQuestionNumber
    );

    const foundRevisitQuestionNumber = this.questionNumbersForRevisit.find(
      (revisitQuestionNumber) =>
        revisitQuestionNumber + 1 == currentQuestionNumber
    );

    if (foundAttemptedQuestionNumber != undefined) {
      return " btn-success border-success";
    } else if (foundRevisitQuestionNumber != undefined) {
      return "btn-warning border-warming";
    } else {
      return "border-danger btn-danger";
    }
  }

  showInstruction(): void {
    const rightBar = document.getElementById("instructionSideBar");
    if (rightBar != null) {
      rightBar.classList.toggle("show");
      rightBar.setAttribute("style", "visibility: visible;");
    }
  }

  hideSideBar(): void {
    const rightBar = document.getElementById("instructionSideBar");
    if (rightBar != null) {
      rightBar.classList.remove("show");
      rightBar.removeAttribute("style");
    }
  }

  startAutoSave() {
    this.doAutoSave();
    this.lastAutoSaveTimeSec = 0;
  }

  startExamTimer() {
    this.examDuration =
      this.candidateService.getCandidateData().candidate_data.minutes_left * 60; // Convert minutes to seconds
    this.autoSaveInterval =
      this.candidateService.getCandidateData().assessment_data.auto_save_sec;
    this.examTimerSub$ = timer(1000, 1000).subscribe(() => {
      const currentTime = new Date();
      const timeDifference =
        (currentTime.getTime() - this.lastAutoSaveTime.getTime()) / 1000; // in seconds
      if (timeDifference >= 300) {
        //5mins and above
        if (this.examTimerSub$) {
          this.examTimerSub$.unsubscribe();
          // this.displayConectionLossModal();
        }
      }
      if (timeDifference >= 120) {
        this.isOffline = true;
      } else {
        this.isOffline = false;
      }
      if (this.examDuration > 0) {
        const minutes = Math.floor((this.examDuration % 3600) / 60);
        const seconds = this.examDuration % 60;
        // console.log(`Time left: ${hours}h ${minutes}m ${seconds}s`);

        // jamb@jamb.gov.ng452 43:01
        this.timeDisplay.mins = minutes;
        this.timeDisplay.secs = seconds;
        this.examDuration--;

        this.startLastAutoSaveCounter();

        if (this.examDuration % this.autoSaveInterval === 0) {
          this.startAutoSave();
        }
      } else if (this.examDuration <= 0) {
        console.log("Exam time is up");
        this.doEndExam(true);
        // this.examTimerSub$.unsubscribe();
      }
    });
  }

  startLastAutoSaveCounter(): void {
    if (this.saved) {
      ++this.lastAutoSaveTimeSec;
      this.lastAutoSaveTime = new Date();
    }
  }

  displayConfirmationWindowOnSubmission(): boolean {
    return this.candidateService.candidateData.assessment_data
      .end_exam_confirmation;
  }

  // getFontSize(): string {
  //   return this.candidateService.candidateData.assessment_data.font_size;
  // }

  setFontSize(font: AssessmentFont) {
    if (font === AssessmentFont.LARGE) {
      this.fontSize = "20px!important";
    } else if (font === AssessmentFont.NORMAL) {
      this.fontSize = "16px!important";
    } else if (font === AssessmentFont.SMALL) {
      this.fontSize = "12px!important";
    }
  }

  warnCandidatesOfUnattemptedQuestions(): boolean {
    return this.candidateService.candidateData.assessment_data
      .warn_unattempted_questions;
  }

  onPageChange(event): void {
    this.page = event.page;

    console.log(event);
  }

  captureSectionAndSetQuestion(sectionName: string): void {
    const foundSelectedSectionIndex = this.sections.findIndex(
      (section) => section.name === sectionName
    );

    console.log(foundSelectedSectionIndex, "section index");

    if (foundSelectedSectionIndex !== -1) {
      this.currentSectionIndex = foundSelectedSectionIndex;
    }
    console.log(this.sections, "sections");
    this.currentSectionName = sectionName;
    console.log(this.currentSectionName, "current section name");

    // todo: handle when switching section and the question type is the same, question number is not updating
    // this.setCurrentQuestionNumber

    this.itemService.setSectionQuestion(sectionName);
    this.itemService.currentQuestionNumber = 0;
    this.currentQuestionNumber = 0;
    this.callNgOnInit();
    // const currentSectionIndex = this.itemService.sectionProgress.findIndex(
    //   (section) => section.sectionName === this.itemService.currentSection
    // );

    this.attemptedQuestionsNumbers = this.itemService.attemptedQuestionNumbers;
    if (this.paginator) this.paginator.changePage(0);
    this.itemsLength = this.itemService.getItems().length;
    this.itemService.currentQuestionNumber = 0;
    this.getCurrentQuestion();

    console.log(this.itemsLength), console.log(this.currentQuestion);
    console.log(this.currentQuestion.item_type);
    console.log(this.currentQuestionNumber);
  }

  onPageLinkClick() {
    this.navigateTo(this.page);
  }

  changePaginatorToNext() {
    console.log("hello");
    this.paginator.changePageToNext(event);
  }

  changePaginatorToPrevious() {
    this.paginator.changePageToPrev(event);
  }

  fullscreen() {
    document.body.classList.toggle("fullscreen-enable");
    if (
      !document.fullscreenElement &&
      !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement
    ) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  generatePayLoadForAutoSave(): ICandidateAutoSave {
    const autoSaveData: ICandidateAutoSave = {
      sections_map: {},
      section_times: {},
      minutes: this.timeDisplay.mins,
      seconds: this.timeDisplay.secs,
      cand_id: this.currentCandidateData.id,
    };
    this.candidateService
      .getCandidateData()
      .sections_questions.forEach((section) => {
        // store ICandidateAutoSaveItems for this section
        const sectionItems: ICandidateAutoSaveItems[] = [];

        // Loop through questions in the section
        section.question_blocks.forEach((sectionBlock) => {
          // const attemptedQuestions = sectionBlock.items.filter(
          //   (item) => item.responses.length !== 0
          // );
          // let result = sectionBlock.items.filter(
          //   (item) => item.revisit == false || item.responses.length !== 0
          // );
          // console.log(sectionBlock.items);
          if (sectionBlock.block_type === BlockType.PASSAGES) {
            section.question_blocks.forEach((block) => {
              block.passages.forEach((passage) => {
                passage.items.forEach((itemInPassage) => {
                  if (
                    itemInPassage.item_type === ItemType.CLOZE_TEXT ||
                    itemInPassage.item_type === ItemType.CLOZE_DROPDOWN
                  ) {
                    // use map

                    for (let i = 0; i < itemInPassage.responses.length; i++) {
                      if (typeof itemInPassage.responses[i] !== "string") {
                        itemInPassage.responses[i] = ""; // Replace non-string elements with an empty string
                      }
                    }

                    console.log(itemInPassage, "itemInPassage in block");
                  }
                  // Create an ICandidateAutoSaveItems object for each question
                  const passageItem: ICandidateAutoSaveItems = {
                    item_id: itemInPassage.id,
                    blk_id: sectionBlock.id,
                    answers: itemInPassage.responses,
                    revisit_later: itemInPassage.revisit,
                    passage_id: passage.id,
                  };

                  // add passage_id if it exists
                  // if (question.passage_id) {
                  //   item.passage_id = itemInBlock.;
                  // }

                  // Add the ICandidateAutoSaveItems to the sectionItems array
                  sectionItems.push(passageItem);
                });
              });
            });
          } else if (sectionBlock.block_type === BlockType.SINGLE_QUESTIONS) {
            sectionBlock.items.forEach((itemInBlock) => {
              if (
                itemInBlock.item_type === ItemType.CLOZE_TEXT ||
                itemInBlock.item_type === ItemType.CLOZE_DROPDOWN
              ) {
                //rodo: use a map
                let modRes = itemInBlock.responses.map((response) => {
                  if (typeof response !== "string") {
                    return {
                      response: "",
                    };

                    // itemInBlock.responses[i] = ""; // Replace non-string elements with an empty string
                  }
                  return response;
                });

                for (let i = 0; i < itemInBlock.responses.length; i++) {
                  if (typeof itemInBlock.responses[i] !== "string") {
                    itemInBlock.responses[i] = ""; // Replace non-string elements with an empty string
                  }
                }

                console.log(itemInBlock, "item in block");
              }
              // Create an ICandidateAutoSaveItems object for each question
              const item: ICandidateAutoSaveItems = {
                item_id: itemInBlock.id,
                blk_id: sectionBlock.id,
                answers: itemInBlock.responses,
                revisit_later: itemInBlock.revisit,
              };

              // add passage_id if it exists
              // if (question.passage_id) {
              //   item.passage_id = itemInBlock.;
              // }

              // Add the ICandidateAutoSaveItems to the sectionItems array
              sectionItems.push(item);
            });
          }

          // Add the sectionItems to the sections_map with the section key
          // const filteredSections = sectionItems.filter(
          //   (section) =>
          //     section.answers.length !== 0 || section.revisit_later == true
          // );
          autoSaveData.sections_map[section.id] = sectionItems;
          // console.log(filteredSections);
          // set section times here (minutes and seconds)
          autoSaveData.section_times[section.id] = {
            minutes: section.section_settings.minutes_left,
            seconds: section.section_settings.seconds_left,
          };
        });
      });

    console.log("autoSaveData", autoSaveData);
    return autoSaveData;
  }

  doAutoSave() {
    // console.log(this.generatePayLoadForAutoSave());

    this.candidateService
      .doAutoSave(
        this.candidateService.getPreLoginData().id,
        this.currentCandidateData.login_field_value,
        this.generatePayLoadForAutoSave()
      )
      .subscribe({
        next: (value) => {
          this.autoSaveResponse = value;
          this.saved = this.autoSaveResponse.auto_saved;
          this.lastAutoSaveTime = new Date();
          if (value.compensatory_time_added) {
            this.handleCompensatoryTimeAddition();
          }
          if (value.message_from_admin) {
            this.handleMessageFromAdmin(value.message_from_admin);
          }
        },
        error: (err: HttpErrorResponse) => {
          this.saved = false;
          console.log(err.error.error);
        },
      });
  }
  handleCompensatoryTimeAddition() {
    this.currentCandidateData.minutes_left +=
      this.candidateService.getCandidateData().assessment_data.compensatory_time_value;

    this.timeDisplay.mins +=
      this.candidateService.getCandidateData().assessment_data.compensatory_time_value;

    this.examDuration +=
      60 *
      this.candidateService.getCandidateData().assessment_data
        .compensatory_time_value;

    console.log(this.currentCandidateData.minutes_left, "minu");

    this.notifierService.notify("success", "Compensatory time added");
  }

  handleMessageFromAdmin(message: string) {
    this.notifierService.notify("success", message);
  }

  getTotalQuestionsInAllSections() {
    let totalQuestions = 0;
    this.candidateService.candidateData.sections_overview.forEach((section) => {
      totalQuestions += section.total_questions;
    });
    this.totalQuestionsInAllSections = totalQuestions;
    // return totalQuestions;
  }

  gotoNextSection() {
    // Get the index of the current section
    const currentSectionIndex = this.sections.findIndex(
      (section) => section.name === this.currentSectionName
    );

    // Get the next section if available
    if (
      currentSectionIndex !== -1 &&
      currentSectionIndex + 1 < this.sections.length
    ) {
      const nextSectionName = this.sections[currentSectionIndex + 1];
      this.currentSectionIndex += 1;
      // Set the new section and reset questions
      this.getCandidateDataForSection(this.assessmentId, nextSectionName.id);
      this.captureSectionAndSetQuestion(nextSectionName.name);
    } else {
      this.onLastSection = true;
      console.log("No more sections available.");
      // Optionally, handle end of sections (e.g., show a message, disable the button)
    }
  }

  isOnfirstQuestionOfSection() {
    // and there is a previous sections
    if (this.currentQuestionNumber === 0 && this.currentSectionIndex > 0) {
      return true;
    } else {
      return false;
    }
  }

  prevSection() {
    const currentSectionIndex = this.sections.findIndex(
      (section) => section.name === this.currentSectionName
    );

    if (currentSectionIndex > 0) {
      this.currentSectionIndex = currentSectionIndex - 1;
      this.currentSectionName = this.sections[this.currentSectionIndex].name;
      this.getCandidateDataForSection(
        this.assessmentId,
        this.sections[this.currentSectionIndex].id
      );
      this.captureSectionAndSetQuestion(this.currentSectionName);

      this.onLastSection = false; // Reset the flag if it's not the last section
    }
  }

  // canEndExam(): boolean {
  //   let totalAttemptedQuestionInAllSections = 0;

  //   this.candidateService.candidateData.sections_questions.forEach(
  //     (section) => {
  //       section.question_blocks.forEach((questionBlock) => {
  //         if (questionBlock.block_type === BlockType.SINGLE_QUESTIONS) {
  //           questionBlock.items.forEach((item) => {
  //             if (
  //               item.item_type !== ItemType.CLOZE_TEXT &&
  //               item.item_type !== ItemType.CLOZE_DROPDOWN
  //             ) {
  //               if (item.responses.length !== 0) {
  //                 totalAttemptedQuestionInAllSections += 1;
  //               }
  //             } else {
  //               // Count as attempted if at least one valid response exists
  //               let hasValidResponse = item.responses.some(
  //                 (value) => value !== undefined && value.trim() !== ""
  //               );
  //               if (hasValidResponse) {
  //                 totalAttemptedQuestionInAllSections += 1;
  //               }
  //             }
  //           });
  //         } else if (questionBlock.block_type === BlockType.PASSAGES) {
  //           questionBlock.passages.forEach((passage) => {
  //             passage.items.forEach((item) => {
  //               if (
  //                 item.item_type !== ItemType.CLOZE_TEXT &&
  //                 item.item_type !== ItemType.CLOZE_DROPDOWN
  //               ) {
  //                 if (item.responses.length !== 0) {
  //                   totalAttemptedQuestionInAllSections += 1;
  //                 }
  //               } else {
  //                 // Count as attempted if at least one valid response exists
  //                 let hasValidResponse = item.responses.some(
  //                   (value) => value !== undefined && value.trim() !== ""
  //                 );
  //                 if (hasValidResponse) {
  //                   totalAttemptedQuestionInAllSections += 1;
  //                 }
  //               }
  //             });
  //           });
  //         }
  //       });
  //     }
  //   );

  //   this.totalAttemptedQuestionInAllSections =
  //     totalAttemptedQuestionInAllSections;

  //   if (
  //     totalAttemptedQuestionInAllSections >=
  //     this.candidateService.candidateData.assessment_data
  //       .allow_end_exam_after_xquestions
  //   ) {
  //     return true;
  //   }

  //   return false;
  // }

  getExamInstruction(): string {
    return this.candidateService.getCandidateData().assessment_data
      .start_exam_instruction;
  }

  getSectionInstruction(): string {
    return this.candidateService
      .getCandidateData()
      .sections_questions.find(
        (section) =>
          section.name.toLowerCase() ==
          this.itemService.currentSection.toLowerCase()
      ).section_settings.section_instruction;
  }

  getSectionOverview(sectionName: string) {
    console.log(sectionName);
    let result = this.itemService.getSectionOverview(sectionName);
    this.attemptedQuestionsNumbers = result.attempted;
    this.questionNumbersForRevisit = result.revisit;
    this.unAttemptedQuestionNumbers = result.unAttempted;

    console.log(result);

    return result;
  }

  getSectionProgress() {
    return this.itemService.getSectionProgress();
  }
}
