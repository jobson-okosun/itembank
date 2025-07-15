import { Component, OnInit } from '@angular/core';
import { AssessmentResultSummary, Participant_Result_Data_DTO, ParticipantSectionTranscript, ParticipantsScoreList } from '../../items/models/result';
import { GradingService } from './grading.service';
import { ActivatedRoute } from '@angular/router';
import { ItemType } from 'src/app/shared/enum/itemTypes';
import { KonvaToolsEvent } from '../grading-item-types/drawing-and-writing/services/event.service';
import { DataService } from 'src/app/services/data.service';
import { forkJoin, of, timer } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

export class Grading {
  item_id: string;
  score: number;
  grade?: number;
  remark: string;
  include_penalty: boolean;
  valid?: boolean
  noResponse: boolean
  graded: boolean
  isValid? () {
    let score = this.score
    return( (score !== null && score !== undefined) && (score <= this.grade))
  }
}

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss'],
})
export class GradeComponent implements OnInit {
  loadingPageData:boolean = false;
  grade: Grading[];

  participantData: Participant_Result_Data_DTO
  sections: ParticipantSectionTranscript[]
  currentQuestion: ParticipantSectionTranscript
  currentQuestionIndex: number = 0
  itemType = ItemType;

  showQuestionPanel:boolean = true;
  gradingInputTouched: boolean = false;
  isSavingGrades: boolean = false
  modalRef: any;

  cummulativeGradingScore: number = 0

  private params: {section_id: string, participant_id: string, assesement_id: string} = { section_id: '', participant_id: '', assesement_id: ''}

  constructor(
    private gradingService: GradingService, 
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private konvaEventTools: KonvaToolsEvent,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.getURLParams()
    this.fetchPageData()
  }

  getURLParams() {
    this.activatedRoute.queryParamMap.subscribe((route) => {
       const participant_id = route.get('participant')
       const section_id = route.get('section_id')

       this.params = { ...this.params, participant_id, section_id}
    })

    this.activatedRoute.paramMap.subscribe((route) => {
      const assesement_id = route.get('examId')

      this.params = { ...this.params, assesement_id}
    })
  }

  fetchPageData() {
    this.loadingPageData = true
    const requests = {
      sections: this.gradingService.getGradingSections(this.params.assesement_id, this.params.section_id, this.params.participant_id),
      participant: this.dataService.getCandidateResult(this.params.assesement_id, this.params.participant_id)
    }

    forkJoin(requests)
    .pipe( catchError(() => {
        this.loadingPageData = false
        
        return of({
          sections: null,
          participant: null
        })
      })
    )
    .subscribe(({ sections, participant }) => {
        this.sections = sections
        this.participantData = participant
        this.setDefaultQuestion()
        this.setQuestionsGrading()
        this.cummulativeGradingScore = this.participantData.score.score
        this.loadingPageData = false
    })
  }

  setQuestionsGrading() {
    this.grade = this.sections.map( item => {
      const grade = new Grading()
      if(item.item_score.graded) {
        grade.grade = item.item.scoringOption.score
        grade.valid = true;
        grade.item_id = item.item_score.item_id
        grade.include_penalty = item.item_score.has_penalty
        grade.remark = item.item_score.manual_grade_remark
        grade.score = item.item_score.score
        grade.graded = item.item_score.graded

        if(item.item_score.un_graded_response.length < 1) {
          grade.noResponse = true
        }
      } else {
        grade.grade = item.item.scoringOption.score
        grade.valid = false;
        grade.item_id = item.item_score.item_id
        grade.include_penalty = item.item_score.has_penalty
        grade.remark = ' '
        grade.score = null
        grade.graded = false

        if(item.item_score.un_graded_response.length < 1) {
          grade.score = 0
          grade.noResponse = true
        }
      }

      return grade
    })

    // console.log(this.grade)
  }

  getQuestionGrading() {
    return this.grade[this.currentQuestionIndex]
  }

  allQuestionsFullyGraded() {
    const grading = this.grade.map( item => item.graded)
    const invalids = grading.filter( item => item == false)

    // // console.log(invalids, grading)
    return invalids.length
  }

  setDefaultQuestion() {
    this.currentQuestion = this.sections[0]
  }

  updateCurrentQuestionItem() {
    this.currentQuestion = this.sections[this.currentQuestionIndex];
  }

  ToggleQuestionPane() {
    this.showQuestionPanel = !this.showQuestionPanel
    this.konvaEventTools._openQuestionPane.next(!this.konvaEventTools._openQuestionPane.getValue())
  }

  showGrading(): void {
    const rightBar = document.getElementById("gradingSideBar");
    if (rightBar != null) {
      rightBar.classList.toggle("show");
      rightBar.setAttribute("style", "visibility: visible;");
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
    const section = this.participantData.section_attempts.sections.find( item => item.id == this.params.section_id)
    const participantName = `${ this.participantData.reg_fields['FIRST NAME'] } ${ this.participantData.reg_fields['LAST NAME'] }`
    const loginField = this.participantData.reg_fields[this.participantData.login_field]
    const totalQuestions = this.participantData.score.total_items
    const score = this.sections.reduce((last, curr) => curr.item_score.score + last, 0)
    const initials = participantName.split(' ').map( item => item[0].toUpperCase()).join('')

    return {
      section,
      participantName,
      loginField,
      totalQuestions,
      score,
      initials
    }
  }

  validateGradingFormForAllSections() {
    for(const item of this.grade) {
      item.valid = item.isValid()
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

  assignGradeToQuestion() {
    this.grade[this.currentQuestionIndex].graded = true

    this.nextQuestionItem()
    this.modalService.dismissAll();
    this.gradingInputTouched = false
    this.hideSideBar()
    this.calcGradingCummulativeScore()
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

  calcGradingCummulativeScore() {
    const score =  this.grade.reduce((lastItem, currItem) =>  {
      const score = currItem.score ?? 0

      return lastItem + (+score)
    }, 0)

    this.cummulativeGradingScore = score
  }

  saveGrade() {
    this.validateGradingFormForAllSections()

    const invalidGrades = this.grade.map(item => item.valid).filter(item => item == false).length;
    if(invalidGrades) {
      return
    }

    this.isSavingGrades = true;
    const gradingData = this.grade.map( item => {
      item.grade = undefined
      item.valid = undefined
      item.isValid = undefined
      item.noResponse = undefined
      item.score = (+item.score)
      
      return item
    })

    this.gradingService.createManualGrade(gradingData, this.params.assesement_id, this.params.section_id, this.params.participant_id)
    .subscribe({
      next: () => {
        Swal.fire({
          title: 'Congratulations!',
          text: 'You have successfully graded ' + this.getParticipantOverviewData().loginField,
          icon: 'success',
        });

        this.isSavingGrades = false;
        this.modalService.dismissAll();
        timer(1000).subscribe(() => history.back())
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
}
