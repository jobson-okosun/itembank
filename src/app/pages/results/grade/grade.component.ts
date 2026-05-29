import { Component, OnInit } from '@angular/core';
import { Participant_Result_Data_DTO, ParticipantSectionTranscript, ParticipantsScoreList } from '../../items/models/result';
import { GradingService } from './grading.service';
import { ActivatedRoute } from '@angular/router';
import { ItemType } from 'src/app/shared/enum/itemTypes';
import { KonvaToolsEvent } from '../grading-item-types/drawing-and-writing/services/event.service';
import { DataService } from 'src/app/services/data.service';
import { forkJoin, of, Subscription, timer } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { MarkingGuideService } from '../../assessment/service/marking-guide.service';
import { SchemeMarkCategory, SchemePageData, SchemeQuestionsTransformed } from '../../assessment/model/marking-guide-types';
import { NotifierService } from 'angular-notifier';
import { Grading, QuestionAnnotation, SummaryResult } from '../grading-item-types/drawing-and-writing/model/question-annotation.mode';
import { DrawingAndWritingStore } from '../grading-item-types/drawing-and-writing/services/store.service';
import { Store } from '../grading-item-types/drawing-and-writing/model/store.model';


@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss'],
})
export class GradeComponent implements OnInit {
  loadingPageData: boolean = false;
  grade: Grading[];

  participantData: Participant_Result_Data_DTO
  sections: ParticipantSectionTranscript[]
  currentQuestion: ParticipantSectionTranscript
  currentQuestionIndex: number = 0
  itemType = ItemType;

  showQuestionPanel: boolean = false;
  gradingInputTouched: boolean = false;
  isSavingGrades: boolean = false
  modalRef: any;

  cummulativeGradingScore: number = 0
  showMarkingGuide: boolean = false
  schemeId: string
  pageSchemeData: SchemePageData
  currentQuestionMarkingGuide: SchemeQuestionsTransformed
  gradingSummary: SummaryResult
  currentQuestionMarkingSectionChanges: any
  pages: number[] = []
  storeSubscription: Subscription
  currentPage: number
  backgroundSub$: Subscription
  selectedMeasuringToolsSet = new Set()
  selectedTools: string[] = []
  backgroundType: string
 
  private params: { section_id: string, participant_id: string, assesement_id: string } = { section_id: '', participant_id: '', assesement_id: '' }

  constructor(
    private gradingService: GradingService,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private konvaEventTools: KonvaToolsEvent,
    private modalService: NgbModal,
    private markingGuideService: MarkingGuideService,
    private notifier: NotifierService,
    private drawingStore: DrawingAndWritingStore,
  ) { }

  ngOnInit(): void {
    this.getURLParams()
    this.fetchPageMarkingGuide()
    this.storeSubscription = this.drawingStore.store$.subscribe(storeState => this.onDrawingStoreChanges(storeState));
    this.backgroundSub$ = this.konvaEventTools.backgroundChange$.subscribe( type => this.backgroundType = type)
  }

  private onDrawingStoreChanges(storeState: Store) {
    this.currentPage = storeState.currentPage;
    this.pages = Array.from({ length: storeState.pages.length }, (_, i) => i)
  }

  selectPage(pageIndex: number) {
    this.drawingStore.selectPage(pageIndex)
    this.konvaEventTools._pageSelectEvent.next()
  }

  getURLParams() {
    this.activatedRoute.queryParamMap.subscribe((route) => {
      const participant_id = route.get('participant')
      const section_id = route.get('section_id')
      this.schemeId = route.get('schemeId')

      this.params = { ...this.params, participant_id, section_id }
    })

    this.activatedRoute.paramMap.subscribe((route) => {
      const assesement_id = route.get('examId')

      this.params = { ...this.params, assesement_id }
    })
  }

  async fetchPageData() {
    const requests = {
      sections: this.gradingService.getGradingSections(this.params.assesement_id, this.params.section_id, this.params.participant_id),
      participant: this.dataService.getCandidateResult(this.params.assesement_id, this.params.participant_id)
    }

    forkJoin(requests)
      .pipe(catchError(() => {
        this.loadingPageData = false

        return of({
          sections: null,
          participant: null
        })
      })
      )
      .subscribe(async ({ sections, participant }) => {
        this.sections = sections?.map( item => {
          const graded = item.item_score?.annotations?.length ? true : false
          item.item_score.annotations = item.item_score.annotations.map( ann => ({...ann, graded }))

          return item
        })

        this.participantData = participant
        this.setDefaultQuestion()
        this.setQuestionsGrading()
        this.loadingPageData = false
        this.updateCurrentQuestionGuide()
        this.calculateGradingSummary()
      })
  }

  async fetchPageMarkingGuide() {
    this.loadingPageData = true

    this.markingGuideService.fetchMarkingGuideAssessmentSectionScheme(this.params.assesement_id, this.params.section_id, this.schemeId)
      .subscribe({
        next: async (res) => {
          this.pageSchemeData = res
          await this.fetchPageData()
        },
        error: (err: HttpErrorResponse) => {
          this.notifier.notify('error', err.error?.error ?? 'Sorry! Unable to fetch marking guide')
          // this.loadingPageData = false
          // this.fetchPageData()
        }
      })
  }

  getQuestionGrading() {
    return this.grade?.[this.currentQuestionIndex]
  }

  setDefaultQuestion() {
    this.currentQuestion = this.sections?.[0]
  }

  updateCurrentQuestionItem() {
    this.currentQuestion = this.sections[this.currentQuestionIndex];
    this.updateCurrentQuestionGuide()
  }

  updateCurrentQuestionGuide() {
    this.currentQuestionMarkingGuide = this.pageSchemeData?.questions?.find(item => item.item_id == this.currentQuestion.item.id)
  }

  getCurrentQuestion(): ParticipantSectionTranscript{
    return this.currentQuestion
  }

  ToggleQuestionPane() {
    this.showQuestionPanel = !this.showQuestionPanel
    this.konvaEventTools._resizeCanvas$.next()
  }

  showGrading(): void {
    const rightBar = document.getElementById("gradingSideBar");
    if (rightBar != null) {
      rightBar.classList.toggle("show");
      rightBar.setAttribute("style", "visibility: visible;");
    }

    this.validateGradingFormForAllSections()
  }

  showMarkingGuideSideBar(): void {
    const leftBar = document.getElementById("markingGuideSideBar");
    if (leftBar != null) {
      leftBar.classList.toggle("show");
      leftBar.setAttribute("style", "visibility: visible;");
    }

    this.validateGradingFormForAllSections()
  }

  hideSideBar(): void {
    const rightBar = document.getElementById("gradingSideBar");
    if (rightBar != null) {
      rightBar.classList.remove("show");
      rightBar.removeAttribute("style");
    }
  }

  hideMarkingGuideSideBar(): void {
    const rightBar = document.getElementById("markingGuideSideBar");
    if (rightBar != null) {
      rightBar.classList.remove("show");
      rightBar.removeAttribute("style");
    }
  }

  nextQuestionItem(): void {
    if (this.currentQuestionIndex < this.sections.length - 1) {
      this.currentQuestionIndex++;
      this.updateCurrentQuestionItem();
    }
  }

  previousQuestionItem(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.updateCurrentQuestionItem();
    }
  }

  isPreviousDisabled(): boolean {
    return this.currentQuestionIndex === 0;
  }

  isNextDisabled(): boolean {
    return this.currentQuestionIndex === this.sections.length - 1;
  }

  getParticipantOverviewData() {
    if(!this.participantData) {
      return null
    }

    const section = this.participantData.section_attempts.sections.find(item => item.id == this.params.section_id)
    const participantName = `${this.participantData.reg_fields['FIRST NAME']} ${this.participantData.reg_fields['LAST NAME']}`
    const loginField = this.participantData.reg_fields[this.participantData.login_field]
    const totalQuestions = this.participantData.score.total_items
    const score = this.sections.reduce((last, curr) => curr.item_score.score + last, 0)
    const initials = participantName.split(' ').map(item => item[0].toUpperCase()).join('')

    return {
      section,
      participantName,
      loginField,
      totalQuestions,
      score,
      initials
    }
  }

  openAssignGradeToQuestionModal(assignGradeToQuestionConfirmationModal: any) {
    this.modalRef = this.modalService.open(
      assignGradeToQuestionConfirmationModal,
      {
        centered: true,
        size: 'md',
      }
    );
  }

  openSaveGradesConfirmation(saveGradesConfirmationModal: any) {
    this.modalRef = this.modalService.open(
      saveGradesConfirmationModal,
      {
        centered: true,
        size: 'md',
      }
    );
  }

  saveGrade(btn: HTMLButtonElement) {
    btn.disabled = true;

    const gradingPayload = this.sections.map( section => {
      const grading = new Grading()

      const sectionGradingSummary = this.gradingSummary?.perQuestion[section.item.id]
      if(!sectionGradingSummary) {
        return null
      }

      const sectionScore = sectionGradingSummary.score - sectionGradingSummary.penalty

      const annotations = section?.item_score?.annotations.map( item => {
         item.position = item.position.map( pos => pos.toString())
         const { contextMenuSectionId, contextMenuUniqueId, contextMenuQuestionId, contextMenuPage, action, ...restItems } = item

         return restItems
      })

      grading.item_id = section.item.id
      grading.remark = ''
      grading.score = sectionScore
      grading.include_penalty = section.item_score.has_penalty
      grading.annotations = annotations

      return grading
    })
    .filter(Boolean)
    
    this.isSavingGrades = true;
    this.gradingService.createManualGrade(gradingPayload, this.params.assesement_id, this.params.section_id, this.params.participant_id)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: () => {
        Swal.fire({
          title: 'Congratulations!',
          text: 'You have successfully graded ' + this.getParticipantOverviewData().loginField,
          icon: 'success',
        });

        this.isSavingGrades = false;
        this.modalService.dismissAll();
        timer(1000).subscribe(() => {
          history.back()
          Swal.close()
        })
      },
      error: (error: HttpErrorResponse) => {
        Swal.fire({
          icon: 'error',
          title: 'Failed!',
          text: `${error.error.message}`,
        });

        this.isSavingGrades = false;
        this.modalService.dismissAll();
      }
    })
  }

  goBack() {
    history.back()
  }

  // QuestionAnnotation | ContextMenuGradingForm 
  questionAnnotationChanges(event: { annotation: any, action: string}) {
    const section = this.sections[this.currentQuestionIndex];
    const annotations = section.item_score.annotations;

    if (event.action === 'score') {
      if(!this.validateScore(event.annotation)) {
        return
      }
      
      annotations.push(event.annotation);
      this.calculateGradingSummary();
      return;
    }

    const annIndex = annotations.findIndex(item =>
      item.contextMenuUniqueId === event.annotation.uniqueId &&
      item.contextMenuQuestionId === event.annotation.questionId &&
      item.contextMenuSectionId === event.annotation.sectionId &&
      item.contextMenuPage === event.annotation.page
    );

    const targetAnnotation = annotations[annIndex];
    if (!targetAnnotation) return;

    if (event.action === 'position') {
      targetAnnotation.position = event.annotation.position;
    }

    if (event.action === 'delete') {
      const scoreUsages = annotations
      .filter( item => item.score_id == event.annotation.scoreId)
      .filter( item => !item.versioned )

      // console.log(scoreUsages)

      this.currentQuestionMarkingSectionChanges = { score: targetAnnotation, applied: scoreUsages.length - 1}

      targetAnnotation.versioned = true
      this.calculateGradingSummary();
      
      this.notifier.notify('success', 'Score removed and versioned')
    }
  }

  validateScore(annotation: any): boolean {
    const question = this.pageSchemeData.questions.find( item => item.item_id == annotation.contextMenuQuestionId)
    const section = question.sections.find( item => item.id == annotation.contextMenuSectionId)

    const generalScores = this.pageSchemeData.general_scores_correct.concat(this.pageSchemeData.general_scores_penalty, this.pageSchemeData.general_scores_violation) as any[]
    const scores = section.scores_correct.concat(section.scores_penalty, section.scores_violation, generalScores)
    const targetScore = scores.find( item => item.id == annotation.contextMenuScoreId)

    const sectionQuestion = this.sections[this.currentQuestionIndex];
    const sectionQuestionAnnotations = sectionQuestion.item_score.annotations;

    const scoreUsages = sectionQuestionAnnotations
    .filter( item => item.contextMenuScoreId == annotation.contextMenuScoreId)
    .filter( item => !item.versioned )

    if(scoreUsages.length == targetScore.max_occurrence) {
      this.notifier.notify('error', 'Max usage for this score has been reached')
      this.drawingStore.deleteGradingFormContextMenuItem(annotation.contextMenuFormIndex)
      return false
    }

    this.currentQuestionMarkingSectionChanges = { score: targetScore, applied: scoreUsages.length + 1}
    return true
  }


  calculateGradingSummary() {
    const result: SummaryResult = {
      overall: { violations: 0, score: 0, penalty: 0 },
      perQuestion: {}
    };

    this.sections.forEach(section => {
      section.item_score.annotations?.filter( item => !item.versioned).forEach(annotation => {
        const category = annotation.mark_category;
        const questionId = annotation.item_id;

        if (!result.perQuestion[questionId]) {
          result.perQuestion[questionId] = { violations: 0, score: 0, penalty: 0 };
        }

        const value = annotation.score || 0;

        switch (category) {
          case SchemeMarkCategory.VIOLATION:
            result.overall.violations += value;
            result.perQuestion[questionId].violations += value;
            break;
          case SchemeMarkCategory.SCORE:
            result.overall.score += value;
            result.perQuestion[questionId].score += value;
            break;
          case SchemeMarkCategory.PENALTY:
            result.overall.penalty += value;
            result.perQuestion[questionId].penalty += value;
            break;
        }
      });
    });

    this.gradingSummary = result
  }

  openModal_(content: any, size = 'xl') {
    this.modalService.open(content, { size: 'xl' });
  }

  selectMeasurementTool(tool: string | null) {
    this.konvaEventTools._selectMeasurementTool$.next(tool);
    this.selectedMeasuringToolsSet.add(tool)
  }

  selectBackgroundType(type: string | null) {
    this.konvaEventTools.backgroundChange$.next(type);
  }

  getSelectedTools(): any[] {
    return Array.from(this.selectedMeasuringToolsSet.values())
  }

  removeTool(tool: string | null) {
    if(tool == 'all') {
      this.selectedMeasuringToolsSet.clear()
    } else {
      this.selectedMeasuringToolsSet.delete(tool)
    }

    this.konvaEventTools._removeMeasurementTool$.next(tool);
  }

  calcGradingCummulativeScore() {
    // const score = this.grade.reduce((lastItem, currItem) => {
    //   const score = currItem.score ?? 0

    //   return lastItem + (+score)
    // }, 0)

    // this.cummulativeGradingScore = score
  }

  allQuestionsFullyGraded() {
    // const grading = this.grade.map(item => item.graded)
    // const invalids = grading.filter(item => item == false)

    // return invalids.length
  }

  assignGradeToQuestion() {
    // this.grade[this.currentQuestionIndex].graded = true

    // this.nextQuestionItem()
    // this.modalService.dismissAll();
    // this.gradingInputTouched = false
    // this.hideSideBar()
    // this.calcGradingCummulativeScore()
  }

  validateGradingFormForAllSections() {
    // for (const item of this.grade) {
    //   item.valid = item.isValid()
    // }
  }

  setQuestionsGrading() {
    // this.grade = this.sections.map(item => {
    //   const grade = new Grading()
    //   if (item.item_score.graded) {
    //     grade.grade = item.item.scoringOption.score
    //     grade.valid = true;
    //     grade.item_id = item.item_score.item_id
    //     grade.include_penalty = item.item_score.has_penalty
    //     grade.remark = item.item_score.manual_grade_remark
    //     grade.score = item.item_score.score
    //     grade.graded = item.item_score.graded

    //     if (item.item_score.un_graded_response.length < 1) {
    //       grade.noResponse = true
    //     }
    //   } else {
    //     grade.grade = item.item.scoringOption.score
    //     grade.valid = false;
    //     grade.item_id = item.item_score.item_id
    //     grade.include_penalty = item.item_score.has_penalty
    //     grade.remark = ' '
    //     grade.score = null
    //     grade.graded = false

    //     if (item.item_score.un_graded_response.length < 1) {
    //       grade.score = 0
    //       grade.noResponse = true
    //     }
    //   }

    //   return grade
    // })
  }

  // saveGrade() {
  //   this.validateGradingFormForAllSections()

  //   const invalidGrades = this.grade.map(item => item.valid).filter(item => item == false).length;
  //   if (invalidGrades) {
  //     return
  //   }

  //   this.isSavingGrades = true;
  //   const gradingData = this.grade.map(item => {
  //     item.grade = undefined
  //     item.valid = undefined
  //     item.isValid = undefined
  //     item.noResponse = undefined
  //     item.score = (+item.score)

  //     return item
  //   })

  //   this.gradingService.createManualGrade(gradingData, this.params.assesement_id, this.params.section_id, this.params.participant_id)
  //     .subscribe({
  //       next: () => {
  //         Swal.fire({
  //           title: 'Congratulations!',
  //           text: 'You have successfully graded ' + this.getParticipantOverviewData().loginField,
  //           icon: 'success',
  //         });

  //         this.isSavingGrades = false;
  //         this.modalService.dismissAll();
  //         timer(1000).subscribe(() => history.back())
  //       },
  //       error: (error: HttpErrorResponse) => {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Failed!',
  //           text: `${error.error.message}`,
  //         });

  //         this.isSavingGrades = false;
  //         this.modalService.dismissAll();
  //       }
  //     })
  // }


};
