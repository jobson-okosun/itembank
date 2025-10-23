import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MarkingGuideService } from '../../service/marking-guide.service';
import { AddEditSchemeQuestionMarkingGuideDTO, EditMarkTypeDTO, EditSchemeQuestionSectionScoreDB, GeneralScoreDB, GeneralScoreDTO, markingGuideDTO, MarkTypeDBDTO, MarkTypeDTO, SchemeMarkCategory, SchemePageData, SchemeQuestionSections, SchemeQuestionSectionScoreDTO, SchemeQuestionSectionScoreScoreDB, SchemeQuestionsTransformed, SelectSchemeQuestionToAdd } from '../../model/marking-guide-types';
import { NotifierService } from 'angular-notifier';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  loadingResources: boolean = false
  assessmentId: string
  assessmentName: string
  sectionId: string
  sectionName: string
  schemeId: string
  breadCrumbItems!: Array<{}>;
  pageSchemeData: SchemePageData
  markTypeCategories = SchemeMarkCategory
  markTypes = Object.values(SchemeMarkCategory);
  markTypes_GeneralScore = Object.values(SchemeMarkCategory);
  markTypes_QuestionSection = Object.values(SchemeMarkCategory);
  editItemHolder: any
  deleteItemHolder: any
  editorControl:string
  sectionQuestionIndex: number = 0
  isLoadingQuestions: boolean = false
  sectionQuestions:SelectSchemeQuestionToAdd[] = []

  generalMarkingGuide: string

  activeTab = 0;
  activeTab_GeneralScore = 0;
  activeTab_QuestionSection = 0;
  scoreType: string;
  selectedQuestion: any
  selectedSection: any

  constructor(
    private route: ActivatedRoute, 
    private markingGuideService: MarkingGuideService, 
    private modalService: NgbModal,
    private notifierService: NotifierService
  ) { }

  ngOnInit(): void {
    this.getRouteParams()
    this.fetchAssementSectionScheme(true)
    this.fetchQuestionsForSelection()
  }

  getRouteParams() {
    this.route.paramMap.subscribe((route) => {
      this.assessmentId = route.get('assessmentId');
      this.sectionId = route.get('sectionId');
      this.schemeId = route.get('schemeId');
    });

    this.route.queryParamMap.subscribe((query) => {
      this.assessmentName = query.get('assessmentName');
      this.sectionName = query.get('sectionName');
    });
  }
 
  fetchAssementSectionScheme(showLoader: boolean = false) {
    if(showLoader) {
      this.loadingResources = true;
    }
    
    this.markingGuideService.fetchMarkingGuideAssessmentSectionScheme(this.assessmentId, this.sectionId, this.schemeId)
    .pipe(finalize(() => this.loadingResources = false))
    .subscribe({
      next: (res) => {
        res?.questions.forEach( q => {
          q.sections.forEach( s => {
            s.activeTab = 0
          })
        })
        this.pageSchemeData = res
        this.initializeBreadCrumbs()
      }
    })
  }

  saveMarkType(formData: any, btn: HTMLButtonElement) {
    if(!formData) {
      this.notifierService.notify('error', 'Invalid form data')
      return
    }

    btn.disabled = true
    const payload: MarkTypeDTO = {
      scheme_id: this.schemeId, 
      mark_category: formData.category,
      name: formData.name,
      description: formData.description,
      code: formData.code,
    }

    this.markingGuideService.createMarkTypes(this.assessmentId, this.sectionId, payload)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res) => {
        this.notifierService.notify('success', 'Mark type saved successfully')
        this.fetchAssementSectionScheme()
        this.modalService.dismissAll()
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify('error', err.error.error ?? 'An error occurred while adding mark type')
      }
    })
  }

  openEditMarktypeModal(template:any, item: MarkTypeDBDTO) {
    this.editItemHolder = item
    this.modalService.open(template, { size: 'md', centered: true, backdrop: 'static', keyboard: false });
  }

  editMarkTypeItem(btn: HTMLButtonElement) {
    btn.disabled = true
    const payload: EditMarkTypeDTO = {
      ...this.editItemHolder
    }

    this.markingGuideService.editMarkTypes(this.assessmentId, this.sectionId, payload)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res) => {
        this.notifierService.notify('success', 'Mark type saved successfully')
        this.fetchAssementSectionScheme()
        this.modalService.dismissAll()
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify('error', err.error.error ?? 'An error occurred while saving mark type')
      }
    })
  }

  openDeleteModal(template:any, item: any) {
    this.deleteItemHolder = item
    this.modalService.open(template, { size: 'md', centered: true, backdrop: 'static', keyboard: false });
  }

  deleteMarkType(btn: HTMLButtonElement) {
    if(!this.deleteItemHolder) {
      this.notifierService.notify('error', 'Invalid mark type selected')
      return
    }

    btn.disabled = true
    this.markingGuideService.deleteMarkType(this.assessmentId, this.sectionId, this.deleteItemHolder.scheme_id, this.deleteItemHolder.id, this.deleteItemHolder.mark_category)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res) => {
        this.notifierService.notify('success', 'Mark type deleted successfully')
        this.fetchAssementSectionScheme()
        this.closeModals()
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify('error', err.error.error ?? 'An error occurred while deleting mark type')
      }
    })
  }

  hasAtleastOneMarkType() {
    return this.pageSchemeData?.correct_mark_types?.length > 0 || this.pageSchemeData?.penalty_mark_types?.length > 0 || this.pageSchemeData?.violation_mark_types?.length > 0
  }

  addGeneralMarkingGuide(btn?: HTMLButtonElement) {
    if(!this.editorControl) {
      this.notifierService.notify('error', 'Please enter a valid marking guide')
      return
    }

    const payload: markingGuideDTO = {marking_guide: this.editorControl, scheme_id: this.schemeId}
    btn.disabled = true

    this.markingGuideService.updateGeneralMarkingGuide(this.assessmentId, this.sectionId, payload)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res) => {
        this.notifierService.notify('success', 'General marking guide saved successfully')
        this.fetchAssementSectionScheme()
        this.closeModals()
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify('error', err.error.error ?? 'An error occurred while saving general marking guide')
      }
    })
  }

  hasAtleastOneGeneralScoreType() {
    return this.pageSchemeData?.general_scores_correct?.length > 0 || this.pageSchemeData?.general_scores_penalty?.length > 0 || this.pageSchemeData?.general_scores_violation?.length > 0
  }

  setSelectMarkingGuideScoring(scoreType: string) {
    this.scoreType = scoreType
  }

  selectGeneralScoreMarkType(markType: string) {
    const selected = [...this.pageSchemeData.penalty_mark_types, ...this.pageSchemeData.violation_mark_types, ...this.pageSchemeData.correct_mark_types].find( item => item.id == markType);

    (document.querySelector('[name=name]') as HTMLInputElement).value = selected.name
    const event = new Event('input', { bubbles: true });
    (document.querySelector('[name=name]') as HTMLInputElement).dispatchEvent(event);
  }

  addScoreToGeneralMarkingGuide(formData: any, btn: HTMLButtonElement) {
    if(!formData) {
      this.notifierService.notify('error', 'Invalid form data')
      return
    }

    const markType = [...this.pageSchemeData.penalty_mark_types, ...this.pageSchemeData.violation_mark_types, ...this.pageSchemeData.correct_mark_types].find( item => item.id == formData.marktype)


    btn.disabled = true
    const payload: GeneralScoreDTO = {
      scheme_id: this.schemeId, 
      mark_category: this.scoreType as SchemeMarkCategory,
      mark_type_id: formData.marktype,
      name: formData.name,
      description: formData.description,
      max_score: formData.maxscore,
      max_occurrence: formData.maxoccurrence,
      marker_discretion: Boolean(formData.discretion),
      code: markType.code,
    }

    this.markingGuideService.addScoreToGeneralMarkingGuide(this.assessmentId, this.sectionId, payload)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res) => {
        this.notifierService.notify('success', 'Score added to general marking guide successfully')
        this.fetchAssementSectionScheme()
        this.closeModals()
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify('error', err.error.error ?? 'An error occurred while adding score to general marking guide')
      }
    })
  }

  openEditGeneralModal(template:any, item: GeneralScoreDB) {
    this.editItemHolder = item
    this.modalService.open(template, { size: 'md', centered: true, backdrop: 'static', keyboard: false });
  }
  
  editGeneralScoreItem(btn: HTMLButtonElement) {
    btn.disabled = true
    const payload: GeneralScoreDB  = {
      ...this.editItemHolder
    }

    this.markingGuideService.editGeneralScore(this.assessmentId, this.sectionId, payload)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res) => {
        this.notifierService.notify('success', 'Score changed saved successfully')
        this.fetchAssementSectionScheme()
        this.modalService.dismissAll()
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify('error', err.error.error ?? 'An error occurred while saving score')
      }
    })
  }

  deleteGeneralScore(btn: HTMLButtonElement) {
    if(!this.deleteItemHolder) {
      this.notifierService.notify('error', 'Invalid score selected')
      return
    }

    btn.disabled = true
    this.markingGuideService.deleteGeneralScore(
      this.assessmentId, 
      this.sectionId, 
      this.deleteItemHolder.scheme_id, 
      this.deleteItemHolder.mark_type_id, 
      this.deleteItemHolder.mark_category,
      this.deleteItemHolder.id
    )
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res) => {
        this.notifierService.notify('success', 'General score deleted successfully')
        this.fetchAssementSectionScheme()
        this.closeModals()
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify('error', err.error.error ?? 'An error occurred while deleting mark type')
      }
    })
  }

  fetchQuestionsForSelection() {
    this.isLoadingQuestions = true
    this.markingGuideService.fetchQuestionsForSelection(this.assessmentId, this.sectionId)
    .pipe(finalize(() => this.isLoadingQuestions = false))
    .subscribe({
      next: (res) => {
        // filter out questions that are already in the scheme
        res = res.filter(q => !this.pageSchemeData?.questions?.find(sq => sq.item_id === q.item_id))
        res = res.map(r => ({...r, showPassage: false}))
        this.sectionQuestions = res
      }
    })
  }

  addQuestionToScheme(btn: HTMLButtonElement) {
    if(!this.selectedQuestion) {
      this.notifierService.notify('error', 'Please select a question to add')
      return
    }

    btn.disabled = true
    const payload = {
      block_id: this.selectedQuestion.block_id,
      item_id: this.selectedQuestion.item_id,
      passage_id: this.selectedQuestion.passage_id,
      scheme_question_row_id: this.pageSchemeData.scheme_question_row_id
    }

    this.markingGuideService.addQuestionToScheme(this.assessmentId, this.sectionId, this.schemeId, payload)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res) => {
        this.notifierService.notify('success', 'Question added to marking guide successfully')
        this.fetchAssementSectionScheme()
        this.closeModals()
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify('error', err.error.error ?? 'An error occurred while adding question to marking guide')
      }
    })
  }

  addGuideToQuestion(item: SelectSchemeQuestionToAdd, template?: any) {
    this.selectedQuestion = item
    const findExistingGuide = this.pageSchemeData?.questions?.find(q => q.item_id === item.item_id)
    this.editorControl = findExistingGuide?.marking_guide ?? ''

    this.openModal(template, 'lg')
  }

  addQuestionGeneralMarkingGuide(btn?: HTMLButtonElement) {
    if(!this.editorControl) {
      this.notifierService.notify('error', 'Please enter a valid marking guide')
      return
    }

    const payload: AddEditSchemeQuestionMarkingGuideDTO = {marking_guide: this.editorControl, scheme_question_row_id: this.pageSchemeData.scheme_question_row_id, item_id: this.selectedQuestion.id}
    btn.disabled = true

    this.markingGuideService.addOrEditQuestionMarkingGuide(this.assessmentId, this.sectionId, this.schemeId, payload)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res) => {
        this.notifierService.notify('success', 'Question marking guide saved successfully')
        this.fetchAssementSectionScheme()
        this.closeModals()
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify('error', err.error.error ?? 'An error occurred while saving question guide')
      }
    })
  }

  openAddSectionModal(template:any, question: SelectSchemeQuestionToAdd) {
    this.selectedQuestion = question
    this.modalService.open(template, { size: 'lg', centered: true, backdrop: 'static', keyboard: false });
  }

  addSectionToQuestion(formData: any, btn: HTMLButtonElement) {
    if(!formData) {
      this.notifierService.notify('error', 'Invalid form data')
      return
    }

    btn.disabled = true
    const payload = {
      name: formData.name,
      marking_guide: this.editorControl ?? '',
      total_score: formData.score,
      total_deductions: formData.deduction,
      item_id: this.selectedQuestion.id,
      scheme_question_row_id: this.pageSchemeData.scheme_question_row_id
    }

    this.markingGuideService.addSectionToSchemeQuestion(this.assessmentId, this.sectionId, this.schemeId, payload)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res) => {
        this.notifierService.notify('success', 'Section added to question successfully')
        this.fetchAssementSectionScheme()
        this.closeModals()
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify('error', err.error.error ?? 'An error occurred while adding section to question')
      }
    })
  }

  openEditSectionModal(template:any, section: SchemeQuestionSections,  question: SchemeQuestionsTransformed, questionIndex?: number) { 
    this.editItemHolder = section,
    this.editorControl = section.marking_guide
    this.sectionQuestionIndex = questionIndex
    this.selectedQuestion = question
    this.modalService.open(template, { size: 'lg', centered: true, backdrop: 'static', keyboard: false });
  }

  editQuestionSection(btn: HTMLButtonElement) {
    if(!this.editItemHolder) {
      this.notifierService.notify('error', 'Invalid section selected')
      return
    }

    btn.disabled = true
    const payload = {
      ...this.editItemHolder,
      marking_guide: this.editorControl ?? ''
    }

    this.markingGuideService.editSchemeQuestionSection(this.assessmentId, this.sectionId, this.schemeId, this.pageSchemeData.scheme_question_row_id, payload)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res) => {
        this.notifierService.notify('success', 'Section edited successfully')
        this.fetchAssementSectionScheme()
        this.closeModals()
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify('error', err.error.error ?? 'An error occurred while editing section')
      }
    })
  }

  setQuestionSectionSchemeScoring(scoreType: string, question: SchemeQuestionsTransformed, section: SchemeQuestionSections) {
    this.scoreType = scoreType
    this.selectedQuestion = question
    this.selectedSection = section
  }

  selectScoreMarkType(markType: string) {
    const selected = [...this.pageSchemeData.penalty_mark_types, ...this.pageSchemeData.violation_mark_types, ...this.pageSchemeData.correct_mark_types].find( item => item.id == markType);

    (document.querySelector('[name=name]') as HTMLInputElement).value = selected.name
    const event = new Event('input', { bubbles: true });
    (document.querySelector('[name=name]') as HTMLInputElement).dispatchEvent(event);
  }

  addScoreToSection(formData:any, btn: HTMLButtonElement) {
    if(!formData) {
      this.notifierService.notify('error', 'Invalid form data')
      return
    }

    const markType = [...this.pageSchemeData.penalty_mark_types, ...this.pageSchemeData.violation_mark_types, ...this.pageSchemeData.correct_mark_types].find( item => item.id == formData.marktype)

    btn.disabled = true
    const payload: SchemeQuestionSectionScoreDTO = {
      scheme_id: this.schemeId, 
      mark_category: this.scoreType as SchemeMarkCategory,
      mark_type_id: formData.marktype,
      name: formData.name,
      // name: markType.name,
      description: formData.description,
      max_score: formData.maxscore,
      max_occurrence: formData.maxoccurrence,
      marker_discretion: Boolean(formData.discretion),
      code: markType.code,
      item_id: this.selectedQuestion.id,
      question_section_id: this.selectedSection.id,
      scheme_question_row_id : this.pageSchemeData.scheme_question_row_id
    }

    this.markingGuideService.addScoreToSchemeQuestionSection(this.assessmentId, this.sectionId, this.schemeId, payload)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res) => {
        this.notifierService.notify('success', 'Score added to general marking guide successfully')
        this.fetchAssementSectionScheme()
        this.closeModals()
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify('error', err.error.error ?? 'An error occurred while adding score to general marking guide')
      }
    })
  }

  openEditGSectionScoreModal(template:any, score: SchemeQuestionSectionScoreScoreDB) {
    this.editItemHolder = score
    this.modalService.open(template, { size: 'md', centered: true, backdrop: 'static', keyboard: false });
  }

  editSectionScore(btn: HTMLButtonElement) {
    btn.disabled = true
    const payload: EditSchemeQuestionSectionScoreDB  = {
      ...this.editItemHolder
    }

    this.markingGuideService.editScoreInSchemeQuestionSection(this.assessmentId, this.sectionId, this.schemeId, payload)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res) => {
        this.notifierService.notify('success', 'Score changed saved successfully')
        this.fetchAssementSectionScheme()
        this.modalService.dismissAll()
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify('error', err.error.error ?? 'An error occurred while saving score')
      }
    })
  }

  openDeleteSectionScoreModal(template:any, score: SchemeQuestionSectionScoreScoreDB, question: SchemeQuestionsTransformed) {
    this.deleteItemHolder = score
    this.selectedQuestion = question
    this.modalService.open(template, { size: 'md', centered: true, backdrop: 'static', keyboard: false });
  }

  deleteSectionScore(btn: HTMLButtonElement) {
    if(!this.deleteItemHolder) {
      this.notifierService.notify('error', 'Invalid section score selected')
      return
    }

    btn.disabled = true
    this.markingGuideService.deleteSchemeQuestionSectionScore(
      this.assessmentId, 
      this.sectionId, 
      this.deleteItemHolder.scheme_id, 
      this.deleteItemHolder.mark_type_id, 
      this.deleteItemHolder.id,
      this.pageSchemeData.scheme_question_row_id,
      this.deleteItemHolder.mark_category
    )
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res) => {
        this.notifierService.notify('success', 'Section score deleted successfully')
        this.fetchAssementSectionScheme()
        this.closeModals()
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify('error', err.error.error ?? 'An error occurred while deleting section score')
      }
    })
  }

  calculateTotalExpectedScore(scores: SchemeQuestionSectionScoreScoreDB[]) {
    return scores.reduce((curr, item) => curr + item.max_score, 0)
  }

  closeModals() {
    this.deleteItemHolder = null;
    this.editItemHolder = null;
    this.editorControl = '';
    this.scoreType = ''
    this.selectedQuestion = null
    this.selectedSection = null
    this.sectionQuestionIndex = 0
    this.modalService.dismissAll()
  }

  initializeBreadCrumbs() {
    this.breadCrumbItems = [
      { label: this.assessmentName ?? '', active: false }, 
      { label: this.sectionName ?? '', active: false },
      { label: 'Marking Guide', active: true },
    ];
  } 

  openModal(content: any, size?: string) {
    this.modalService.open(content, { size: size ? size : "md", centered: true,  backdrop: 'static', keyboard: false });
  }

  initTabMenus() {

  }

  back() {
    history.back()
  }
}
