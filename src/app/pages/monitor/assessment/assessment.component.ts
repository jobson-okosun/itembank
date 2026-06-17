import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MonitorService } from '../services/monitor.service';
import { interval, pipe, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AllParticipantPage, AllParticipantParams, AttemptedBucketParams, AttemptedBucketParticipantsPage, AttendanceParams, AttendanceParticipantsPage, AttendanceStatus, BucketParticipantsPage, BVM_STATUS, BvmParticipantParams, BvmParticipantsPage, DownloadedCentersPage, DurationBucketParams, EventENUM, EventParticipantParams, EventParticipantsPage, ExamStatusMonitorFromDb, MalpracticeCodeSummaryDTO, MalpracticeParticipantParams, MalpracticeParticipantsPage, MonitorExamDetailsDTO, MonitoringCenterReport, MonitoringCenterReportStatuses, PageParams, ParticipantBvmStatusDTO, ParticipantDurationBucketDTO, ParticipantEventSummaryDTO, ParticipantRescheduleStatusDTO, ParticipantStatusCountDTO, participantSummaryFilter, RESCHEDULE_STATUS, RescheduleParticipantParams, RescheduleParticipantsPage, TechnicalIssueCategoryListPage, TechnicalIssueCategorySummaryDTO, TechnicalIssueCentersPage, TechnicalReportCenterDTO, TechnicalReportCentersPage, TechnicalReportParams, AssessmentBatchDTO, InfractionTypeSummaryDTO, InfractionEventsPage, InfractionEventDTO, InfractionEvidenceDTO } from '../model/types';
import { finalize } from 'rxjs/operators';
import { saveAs } from 'file-saver';
import { HttpResponse } from '@angular/common/http';
import { AssessmentCenterListPage, AssessmentCenterListParams } from '../../assessment/model/assessment-list';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit, OnDestroy {
  poolSub: Subscription
  proctoringPoolSub: Subscription
  assessmentId: string
  DoughnutChart: any;
  assessmentOverview: MonitorExamDetailsDTO
  fetchingAssessmentOverivew: boolean = false
  examStatus: ExamStatusMonitorFromDb
  technicalIssuesCategories: string[] = ["BVM", "CENTER NETWORK", "CENTER COMPUTERS", "CENTER ELECTRIC POWER", "EXAM SERVER", "EXAM SOFTWARE", "TELECOM NETWORK", "OTHERS"]
  centerReportType = MonitoringCenterReport
  centerReportStatusType = MonitoringCenterReportStatuses
  centerReportSelected: string
  centerReport: DownloadedCentersPage
  centersWithTechIssuesReport: TechnicalIssueCentersPage
  fetchingCenterReport: boolean = false
  centerPageParams: PageParams = {
    page: 1,
    size: 50
  }
  fetchingParticipantSummary: boolean = false
  participantSummaryReportType: string = 'ATTENDANCE'
  participantSummaryParams: participantSummaryFilter = {
    center_id: ''
  }
  attendanceSummary: ParticipantStatusCountDTO
  fetchingAttendanceReport: boolean = false
  attendaceStatusReport: AttendanceParticipantsPage
  attendaceStatuses = AttendanceStatus
  attendanceReportParams: AttendanceParams = {
    page: 1,
    size: 50,
    center_id: ''
  }
  durationSummary: ParticipantDurationBucketDTO
  fetchingDurationReport: boolean = false
  fetchDurationBucketReport: boolean = false
  durationBucketReport: BucketParticipantsPage
  durationBucketReportParams: DurationBucketParams = {
    page: 1,
    size: 50,
    center_id: '',
    bucket_min: 0,
    bucket_max: 0
  }
  attemptsSummary: ParticipantDurationBucketDTO
  fetchingAttemptsBucketReport: boolean = false
  attemptsBucketReport: AttemptedBucketParticipantsPage
  attemptsBucketReportParams: AttemptedBucketParams = {
    page: 1,
    size: 50,
    center_id: '',
    bucket_min: 0,
    bucket_max: 0
  }
  fetchingAtemptsReport: boolean = false
  biometricsSummary: ParticipantBvmStatusDTO
  fetchingBiometricReport: boolean = false
  fetchingBvmReport: boolean = false
  bvmStatusReport: BvmParticipantsPage
  bvmStatuses = BVM_STATUS
  bvmReportParams: BvmParticipantParams = {
    page: 1,
    size: 50,
    center_id: '',
    bvm_status: null
  }
  rescheduledSummary: ParticipantRescheduleStatusDTO
  fetchingRescheduledReport: boolean = false
  rescheduleStatus = RESCHEDULE_STATUS
  fetchingRescheduleReport: boolean = false
  rescheduleReport: RescheduleParticipantsPage
  rescheduleReportParams: RescheduleParticipantParams = {
    page: 1,
    size: 50,
    center_id: '',
    reschedule_status: null
  }
  malpracticedSummary: MalpracticeCodeSummaryDTO
  fetchingMalpracticedReport: boolean = false
  fetchingMalpracticeReport: boolean = false
  malpracticeReport: MalpracticeParticipantsPage
  malpracticeReportParams: MalpracticeParticipantParams = {
    page: 1,
    size: 50,
    center_id: '',
    malpractice_code: null
  }
  eventsSummary: ParticipantEventSummaryDTO
  fetchingEventsReport: boolean = false
  eventsTypes = EventENUM
  fetchingEventReport: boolean = false
  eventsReport: EventParticipantsPage
  eventsReportParams: EventParticipantParams = {
    page: 1,
    size: 50,
    center_id: '',
    event: null
  }
  fetchingTechnicalCategories: boolean = false
  technicalIssuesCategoriesList: TechnicalIssueCategorySummaryDTO
  technicalIssuesFilter: participantSummaryFilter = {
    center_id: ''
  }
  fetchingTechnicalReportCenters: boolean = false
  technicalReportCenters: TechnicalReportCentersPage
  technicalReportFilter: TechnicalReportParams = {
    page: 1,
    size: 50,
    has_report: false
  }
  fetchingCenterTechnicalReport: boolean = false
  centerTechnicalReport: TechnicalReportCenterDTO
  pageInitialized = false
  fetchingCentersTechnicalIssue: boolean = false
  centersTechnicalIssuesReport: TechnicalIssueCategoryListPage
  centersTechnicalIssuesReportParams: PageParams = {
    page: 1,
    size: 50,
  }

  fetchingCenters: boolean = false
  centers: AssessmentCenterListPage
  centersFilterParams: AssessmentCenterListParams = {
    page: 1,
    size: 50,
    center_id: ''
  }

  reportTypeSelected: string = ''
  centerTechnicalReportSelected: TechnicalReportCenterDTO

  fetchingAllParticipants: boolean = false
  allParticipants: AllParticipantPage
  allParticipantsFilterParams: AllParticipantParams = {
    page: 1,
    size: 50,
    center_id: ''
  }

  InfractionsDoughnutChart: any;
  fetchingInfractionsSummary: boolean = false;
  infractionsSummary: InfractionTypeSummaryDTO;
  infractionBatchFilter: string = '';
  infractionCandidateFilter: string = '';
  infractionBatches: AssessmentBatchDTO[] = [];
  fetchingInfractionBatches: boolean = false;

  fetchingInfractionEvents: boolean = false;
  infractionEventsReport: InfractionEventsPage;
  infractionEventsParams: PageParams = { page: 1, size: 50 };
  selectedInfractionCategoryFilter: string = '';
  selectedInfractionBatchFilter: string = '';
  selectedInfractionCandidateIdFilter?: string;

  evidenceData: { type: 'image' | 'video' | 'audio' | 'none', data: string[] } = { type: 'none', data: [] };
  evidenceDetails?: InfractionEvidenceDTO;
  fetchingEvidence: boolean = false;


  constructor(
    private modalService: NgbModal,
    private monitorService: MonitorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPageParams()
  }

  ngOnDestroy(): void {
    if (this.poolSub) {
      this.poolSub.unsubscribe()
      this.poolSub = null
    }
    if (this.proctoringPoolSub) {
      this.proctoringPoolSub.unsubscribe()
      this.proctoringPoolSub = null
    }
  }

  getPageParams() {
    this.route.paramMap.subscribe({
      next: (route) => {
        this.assessmentId = route.get('assessmentId')
        if (this.assessmentId) {
          this.onPool()
          this.startPool()
        }
      }
    })
  }

  startPool() {
    this.poolSub = interval(60000).subscribe({
      next: () => {
        this.onPool()
      }
    })

    this.proctoringPoolSub = interval(30000).subscribe({
      next: () => {
        if (this.isProctored()) {
          this.fetchInfractionsSummary()
        }
      }
    })
  }

  isProctored(): boolean {
    return this.assessmentOverview?.delivery_method === 'AUTO_PROCTORING' || this.assessmentOverview?.delivery_method === 'LIVE_PROCTORING';
  }

  onPool() {
    this.fetchAssessmentOverview()
    this.fetchExamStatus()
    this.applyParticipantsSummaryFilter(this.participantSummaryReportType)
    this.fetchTechnicalIssuesCategories()
    this.fetchTechnicalReportCenters()
    this.fetchCenters()
  }

  fetchAssessmentOverview() {
    this.fetchingAssessmentOverivew = this.pageInitialized ? false : true
    this.monitorService.fetchAssessmentOverview(this.assessmentId)
      .pipe(finalize(() => this.fetchingAssessmentOverivew = false))
      .subscribe({
        next: (res) => {
          this.assessmentOverview = res
          
          if (!this.pageInitialized && this.isProctored()) {
             this.fetchInfractionBatches()
             this.fetchInfractionsSummary()
          }

          this.pageInitialized = true
        }
      })
  }

  fetchExamStatus() {
    this.monitorService.fetchExamStatus(this.assessmentId)
      .subscribe({
        next: (res) => {
          this.examStatus = res
        }
      })
  }

  fetchTechnicalIssuesCategories() {
    this.monitorService.fetchTechnicalIssuesCategories(this.assessmentId, this.technicalIssuesFilter)
      .subscribe({
        next: (res) => {
          this.technicalIssuesCategoriesList = res
        }
      })
  }

  fetchCenters() {
    this.fetchingCenters = true
    this.monitorService.fetchCenters(this.assessmentId, this.centersFilterParams)
      .pipe(finalize(() => this.fetchingCenters = false))
      .subscribe({
        next: (res) => {
          this.centers = res
        }
      })
  }

  fetchTechnicalReportCenters() {
    this.fetchingTechnicalReportCenters = true

    if(this.technicalReportFilter.has_report.toString() === 'true') {
      this.technicalReportFilter.has_report = true
    }

    if(this.technicalReportFilter.has_report.toString() === 'false') {
      this.technicalReportFilter.has_report = false
    }

    this.monitorService.fetchTechnicalReportCenters(this.assessmentId, this.technicalReportFilter)
      .pipe(finalize(() => this.fetchingTechnicalReportCenters = false))
      .subscribe({
        next: (res) => {
          this.technicalReportCenters = res
        }
      })
  }

  fetchCenterReport() {
    this.fetchingCenterReport = true
    this.monitorService.fetchCenterReport(this.assessmentId, this.centerReportSelected, this.centerPageParams)
      .pipe(finalize(() => this.fetchingCenterReport = false))
      .subscribe({
        next: (res) => {
          this.centerReport = res
        }
      })
  }

  fetchCenterReportWihStatus() {
    this.fetchingCenterReport = true
    this.monitorService.fetchCenterReportWihStatus(this.assessmentId, this.centerReportSelected, this.centerPageParams)
      .pipe(finalize(() => this.fetchingCenterReport = false))
      .subscribe({
        next: (res) => {
          this.centerReport = res
        }
      })
  }

  fetchCentersWithTechnicalIssues() {
    this.fetchingCenterReport = true
    this.monitorService.fetchCentersWithTechnicalIssues(this.assessmentId, this.centerPageParams)
      .pipe(finalize(() => this.fetchingCenterReport = false))
      .subscribe({
        next: (res) => {
          this.centersWithTechIssuesReport = res
        },
        error: () => {
          this.centersWithTechIssuesReport = null
        }
      })
  }

  fetchParticipantsSummaryByAttendance() {
    this.fetchingParticipantSummary = true
    this.monitorService.fetchParticipantsSummaryByAttendance(this.assessmentId, this.participantSummaryParams)
      .pipe(finalize(() => this.fetchingParticipantSummary = false))
      .subscribe({
        next: (res) => {
          this.attendanceSummary = res
          const chartData = [
            { value: res.present, name: "Present" },
            { value: res.absent, name: "Absent" }
          ]

          const value = res.present + res.absent
          this._DoughnutChart(chartData, value)
        }
      })
  }

  fetchParticipantsByAttendanceStatus(status: AttendanceStatus) {
    this.attendanceReportParams.center_id = this.participantSummaryParams.center_id
    this.fetchingAttendanceReport = true

    this.monitorService.fetchParticipantsByAttendanceStatus(this.assessmentId, status, this.attendanceReportParams)
      .pipe(finalize(() => this.fetchingAttendanceReport = false))
      .subscribe({
        next: (res) => {
          this.attendaceStatusReport = res
        },
        error: () => {
          this.attendaceStatusReport = null
        }
      })
  }

  fetchParticipantsByDuration() {
    this.fetchingDurationReport = true
    this.monitorService.fetchParticipantsByDuration(this.assessmentId, this.participantSummaryParams)
      .pipe(finalize(() => this.fetchingDurationReport = false))
      .subscribe({
        next: (res) => {
          this.durationSummary = res

          const chartData = res.buckets.map(b => ({ value: b.count, name: b.label }))
          const value = res.buckets.reduce((total, curr) => total + curr.count, 0)

          this._DoughnutChart(chartData, value)
        }
      })
  }

  fetchParticipantsWithDuration(label: string) {
    let [min, max] = label?.replace('%', '')?.split('-')
    if (!max) {
      max = '0'
    }

    this.durationBucketReportParams.center_id = this.participantSummaryParams.center_id
    this.durationBucketReportParams.bucket_min = Number(min)
    this.durationBucketReportParams.bucket_max = Number(max)

    this.fetchDurationBucketReport = true

    this.monitorService.fetchParticipantsWithDuration(this.assessmentId, this.durationBucketReportParams)
      .pipe(finalize(() => this.fetchDurationBucketReport = false))
      .subscribe({
        next: (res) => {
          this.durationBucketReport = res
        },
        error: () => {
          this.durationBucketReport = null
        }
      })
  }

  fetchParticipantsByAttempts() {
    this.fetchingAtemptsReport = true
    this.monitorService.fetchParticipantsByAttempts(this.assessmentId, this.participantSummaryParams)
      .pipe(finalize(() => this.fetchingAtemptsReport = false))
      .subscribe({
        next: (res) => {
          this.attemptsSummary = res

          const chartData = res.buckets.map(b => ({ value: b.count, name: b.label }))
          const value = res.buckets.reduce((total, curr) => total + curr.count, 0)

          this._DoughnutChart(chartData, value)
        }
      })
  }

  fetchParticipantsWithAttempts(label: string) {
    let [min, max] = label?.replace('%', '')?.split('-')
    if (!max) {
      max = '0'
    }

    this.attemptsBucketReportParams.center_id = this.participantSummaryParams.center_id
    this.attemptsBucketReportParams.bucket_min = Number(min)
    this.attemptsBucketReportParams.bucket_max = Number(max)

    this.fetchingAttemptsBucketReport = true

    this.monitorService.fetchParticipantsWithAttempts(this.assessmentId, this.attemptsBucketReportParams)
      .pipe(finalize(() => this.fetchingAttemptsBucketReport = false))
      .subscribe({
        next: (res) => {
          this.attemptsBucketReport = res
        },
        error: () => {
          this.attemptsBucketReport = null
        }
      })
  }

  fetchParticipantsByBiometrics() {
    this.fetchingBiometricReport = true
    this.monitorService.fetchParticipantsByBiometrics(this.assessmentId, this.participantSummaryParams)
      .pipe(finalize(() => this.fetchingBiometricReport = false))
      .subscribe({
        next: (res) => {
          this.biometricsSummary = res

          const chartData = [
            { value: res.present, name: "Present" },
            { value: res.absent, name: "Absent" },
            { value: res.unverified, name: "Unverified" },
            { value: res.unconsidered, name: "Unconsidered" },
            { value: res.no_status, name: "No-status" }
          ]

          const value = res.present + res.absent + res.unverified + res.unconsidered + res.no_status

          this._DoughnutChart(chartData, value)
        }
      })
  }

  fetchParticipantsWithBiometrics(status: BVM_STATUS) {
    this.bvmReportParams.center_id = this.participantSummaryParams.center_id
    this.bvmReportParams.bvm_status = status
    this.fetchingBvmReport = true

    this.monitorService.fetchParticipantsWithBiometrics(this.assessmentId, this.bvmReportParams)
      .pipe(finalize(() => this.fetchingBvmReport = false))
      .subscribe({
        next: (res) => {
          this.bvmStatusReport = res
        },
        error: () => {
          this.bvmStatusReport = null
        }
      })
  }

  fetchParticipantsByReschedule() {
    this.fetchingRescheduledReport = true
    this.monitorService.fetchParticipantsByReschedule(this.assessmentId, this.participantSummaryParams)
      .pipe(finalize(() => this.fetchingRescheduledReport = false))
      .subscribe({
        next: (res) => {
          this.rescheduledSummary = res

          const chartData = [
            { value: res.forced_reschedule, name: "Forced reshcheduled" },
            { value: res.manual_reschedule, name: "Manual reschedule" },
            { value: res.no_reschedule, name: "No reschedule" },
          ]

          const value = res.forced_reschedule + res.manual_reschedule + res.no_reschedule

          this._DoughnutChart(chartData, value)
        }
      })
  }

  fetchParticipantsWithReschedule(status: RESCHEDULE_STATUS) {
    this.rescheduleReportParams.center_id = this.participantSummaryParams.center_id
    this.rescheduleReportParams.reschedule_status = status
    this.fetchingRescheduleReport = true

    this.monitorService.fetchParticipantsWithReschedule(this.assessmentId, this.rescheduleReportParams)
      .pipe(finalize(() => this.fetchingRescheduleReport = false))
      .subscribe({
        next: (res) => {
          this.rescheduleReport = res
        },
        error: () => {
          this.rescheduleReport = null
        }
      })
  }

  fetchParticipantsByMalpractice() {
    this.fetchingMalpracticedReport = true
    this.monitorService.fetchParticipantsByMalpractice(this.assessmentId, this.participantSummaryParams)
      .pipe(finalize(() => this.fetchingMalpracticedReport = false))
      .subscribe({
        next: (res) => {
          this.malpracticedSummary = res

          const chartData = res.codes.map(b => ({ value: b.count, name: b.code }))
          const value = res.codes.reduce((total, curr) => total + curr.count, 0)

          this._DoughnutChart(chartData, value)
        }
      })
  }

  fetchParticipantsWithMalpractice(status: string) {
    this.malpracticeReportParams.center_id = this.participantSummaryParams.center_id
    this.malpracticeReportParams.malpractice_code = status
    this.fetchingMalpracticeReport = true

    this.monitorService.fetchParticipantsWithMalpracticeCode(this.assessmentId, this.malpracticeReportParams)
      .pipe(finalize(() => this.fetchingMalpracticeReport = false))
      .subscribe({
        next: (res) => {
          this.malpracticeReport = res
        },
        error: () => {
          this.malpracticeReport = null
        }
      })
  }

  fetchParticipantsByEvents() {
    this.fetchingEventsReport = true
    this.monitorService.fetchParticipantsByEvents(this.assessmentId, this.participantSummaryParams)
      .pipe(finalize(() => this.fetchingEventsReport = false))
      .subscribe({
        next: (res) => {
          this.eventsSummary = res

          const chartData = [
            { value: res.computer_swapped, name: "Computer_swapped" },
            { value: res.re_login, name: "Re_login" },
            { value: res.timed_out, name: "Timed_out" },
            { value: res.ended, name: "Ended" },
            { value: res.compensatory_time_added, name: "Compensatory_time_added" },
            { value: res.started, name: "Started" },
            { value: res.not_started, name: "Not_started" },
          ]

          const value = res.computer_swapped +
            res.re_login +
            res.timed_out +
            res.ended +
            res.compensatory_time_added +
            res.started +
            res.not_started

          this._DoughnutChart(chartData, value)
        },
        error: () => {
          this.eventsSummary = null
        }
      })
  }

  fetchParticipantsWithEvents(event: EventENUM) {
    this.eventsReportParams.center_id = this.participantSummaryParams.center_id
    this.eventsReportParams.event = event
    this.fetchingEventReport = true

    this.monitorService.fetchParticipantsWithEvents(this.assessmentId, this.eventsReportParams)
      .pipe(finalize(() => this.fetchingEventReport = false))
      .subscribe({
        next: (res) => {
          this.eventsReport = res
        },
        error: () => {
          this.eventsReport = null
        }
      })
  }

  fetchParticipantsByAll(template?: any) {
    if(template) {
      this.modalService.open(template, {size: 'xl', centered: true })
    }

    this.allParticipantsFilterParams.center_id = this.participantSummaryParams.center_id
    this.fetchingAllParticipants = true

    this.monitorService.fetchParticipantsByAll(this.assessmentId, this.allParticipantsFilterParams)
      .pipe(finalize(() => this.fetchingAllParticipants = false))
      .subscribe({
        next: (res) => {
          this.allParticipants = res
          this.participantSummaryReportType = 'ATTENDANCE'
        },
        error: () => {
          this.allParticipants = null
        }
      })
  }

  onAllParticipantsReportPageChange(event: any) {
    const size = event.rows;
    const page = (event.page ?? 0) + 1;

    this.allParticipantsFilterParams = {
      ...this.allParticipantsFilterParams,
      size,
      page
    }

    this.fetchParticipantsByAll()
  }

  callCenterReport() {
    if (Object.keys(MonitoringCenterReportStatuses).includes(this.centerReportSelected)) {
      this.fetchCenterReportWihStatus()
    } else {
      this.fetchCenterReport()
    }
  }

  openExamStatusCenterModal(type: string, content: any, size = 'xl') {
    this.centerReport = null
    this.centerReportSelected = type;
    this.callCenterReport()
    this.modalService.open(content, { size, centered: true });
  }

  openModal(content: any, size = 'lg') {
    this.modalService.open(content, { size, centered: true });
  }

  onCenterReportPageChange(event: any) {
    const size = event.rows;
    const page = (event.page ?? 0) + 1;

    this.centerPageParams = {
      ...this.centerPageParams,
      size,
      page
    }

    this.callCenterReport() 
  }

  onCenterTechIssuesReportPageChange(event: any) {
    const size = event.rows;
    const page = (event.page ?? 0) + 1;

    this.centerPageParams = {
      ...this.centerPageParams,
      size,
      page
    }

    this.fetchCentersWithTechnicalIssues()
  }

  applyParticipantsSummaryFilter(value: string, template?: any) {

    if(value) {
      this.participantSummaryReportType = value
    }

    if (this.participantSummaryReportType == 'ATTENDANCE') {
      this.fetchParticipantsSummaryByAttendance()
    }

    if (this.participantSummaryReportType == 'DURATION') {
      this.fetchParticipantsByDuration()
    }

    if (this.participantSummaryReportType == 'QUESTION_ATTEMPTS') {
      this.fetchParticipantsByAttempts()
    }

    if (this.participantSummaryReportType == 'BIOMETRICS') {
      this.fetchParticipantsByBiometrics()
    }

    if (this.participantSummaryReportType == 'RESCHEDULE') {
      this.fetchParticipantsByReschedule()
    }

    if (this.participantSummaryReportType == 'MALPRACTICE') {
      this.fetchParticipantsByMalpractice()
    }

    if (this.participantSummaryReportType == 'EVENTS') {
      this.fetchParticipantsByEvents()
    }

    if(this.participantSummaryReportType == 'ALL') {
      this.fetchParticipantsByAll(template)
    }
  }

  openAttendaceStatusModal(type: AttendanceStatus, content: any) {
    this.attendanceReportParams = {
      ...this.attemptsBucketReportParams,
      size: 50,
      page: 1
    }

    this.reportTypeSelected = type
    this.fetchParticipantsByAttendanceStatus(type)
    const modalRef = this.modalService.open(content, { size: 'xl', centered: true });
  }

  onAttendanceStatusReport(event: any) {
    const size = event.rows;
    const page = (event.page ?? 0) + 1;

    this.attendanceReportParams = {
      ...this.attendanceReportParams,
      size,
      page
    }

    this.fetchParticipantsByAttendanceStatus(this.reportTypeSelected as any)
  }

  openBVMStatusReport(type: BVM_STATUS, content: any) {
    this.bvmReportParams = {
      ...this.bvmReportParams,
      size: 50,
      page: 1
    }

    this.reportTypeSelected = type
    this.fetchParticipantsWithBiometrics(type)
    const modalRef = this.modalService.open(content, { size: 'xl', centered: true });
  }

  onBVMStatusReportChange(event: any) {
    const size = event.rows;
    const page = (event.page ?? 0) + 1;

    this.bvmReportParams = {
      ...this.bvmReportParams,
      size,
      page
    }

    this.fetchParticipantsWithBiometrics(this.reportTypeSelected as any)
  }

  openRescheduledReport(type: RESCHEDULE_STATUS, content: any) {
    this.rescheduleReportParams = {
      ...this.rescheduleReportParams,
      size: 50,
      page: 1
    }

    this.reportTypeSelected = type
    this.fetchParticipantsWithReschedule(type)
    const modalRef = this.modalService.open(content, { size: 'xl', centered: true });
  }

  onScheduleReportChange(event: any) {
    const size = event.rows;
    const page = (event.page ?? 0) + 1;

    this.rescheduleReportParams = {
      ...this.rescheduleReportParams,
      size,
      page
    }

    this.fetchParticipantsWithReschedule(this.reportTypeSelected as any)
  }

  openMalpracticeReport(type: string, content: any) {
    // console.log(true, true)
    this.malpracticeReportParams = {
      ...this.malpracticeReportParams,
      size: 50,
      page: 1
    }

    this.reportTypeSelected = type
    this.fetchParticipantsWithMalpractice(type)
    const modalRef = this.modalService.open(content, { size: 'xl', centered: true });
  }

  onMalpracticeReportChange(event: any) {
    const size = event.rows;
    const page = (event.page ?? 0) + 1;

    this.malpracticeReportParams = {
      ...this.malpracticeReportParams,
      size,
      page
    }

    this.fetchParticipantsWithMalpractice(this.reportTypeSelected)
  }

  openDurationReport(type: string, content: any) {
    this.durationBucketReportParams = {
      ...this.durationBucketReportParams,
      size: 50,
      page: 1
    }
    this.reportTypeSelected = type
    this.fetchParticipantsWithDuration(type)
    const modalRef = this.modalService.open(content, { size: 'xl', centered: true });
  }

  onDurationReportChange(event: any) {
    const size = event.rows;
    const page = (event.page ?? 0) + 1;

    this.durationBucketReportParams = {
      ...this.durationBucketReportParams,
      size,
      page
    }

    this.fetchParticipantsWithDuration(this.reportTypeSelected)
  }

  openAttemptsReport(type: string, content: any) {
    this.attemptsBucketReport = {
      ...this.attemptsBucketReport,
      size: 50,
      page: 1
    }

    this.reportTypeSelected = type
    this.fetchParticipantsWithAttempts(type)
    const modalRef = this.modalService.open(content, { size: 'xl', centered: true });
  }

  onAttemptsReportChange(event: any) {
    const size = event.rows;
    const page = (event.page ?? 0) + 1;

    this.attemptsBucketReportParams = {
      ...this.attemptsBucketReportParams,
      size,
      page
    }

    this.fetchParticipantsWithAttempts(this.reportTypeSelected)
  }

  onCentersTechnicalReportChange(event: any) {
    const size = event.rows;
    const page = (event.page ?? 0) + 1;

    this.technicalReportFilter = {
      ...this.technicalReportFilter,
      size,
      page
    }

    this.fetchTechnicalReportCenters()
  }

  openEventsReport(type: EventENUM, content: any) {
    this.eventsReportParams = {
      ...this.eventsReportParams,
      size: 50,
      page: 1
    }

    this.reportTypeSelected = type
    this.fetchParticipantsWithEvents(type)
    const modalRef = this.modalService.open(content, { size: 'xl', centered: true });
  }

  onEventsReportChange(event: any) {
    const size = event.rows;
    const page = (event.page ?? 0) + 1;

    this.eventsReportParams = {
      ...this.eventsReportParams,
      size,
      page
    }

    this.fetchParticipantsWithEvents(this.reportTypeSelected as any)
  }

  openCentersTechnicalIssueReportModal(category: string, content: any, size = 'xl') {
    this.centersTechnicalIssuesReportParams = {
      ...this.centersTechnicalIssuesReportParams,
      size: 50,
      page: 1
    }

    this.reportTypeSelected = category
    this.fetchCentersTechnicalReport(category)
    const modalRef = this.modalService.open(content, { size, centered: true });
  }

  fetchCentersTechnicalReport(category: string) {
    this.fetchingCentersTechnicalIssue = true
    this.monitorService.fetchCentersTechnicalReport(this.assessmentId, category, this.centersTechnicalIssuesReportParams)
      .pipe(finalize(() => this.fetchingCentersTechnicalIssue = false))
      .subscribe({
        next: (res) => {
          this.centersTechnicalIssuesReport = res
        }
      })
  }

  openCenterTechnicalReportModal(center: TechnicalReportCenterDTO, content: any, size = 'xl') {
    if (!this.technicalReportFilter.has_report) {
      return
    }

    this.centerTechnicalReportSelected = center
    this.fetchCenterTechnicalReport(center.center_id)
    const modalRef = this.modalService.open(content, { size, centered: true });
  }

  fetchCenterTechnicalReport(centerId: string) {
    this.fetchingCenterTechnicalReport = true
    this.monitorService.fetchCenterTechnicalReport(this.assessmentId, centerId)
      .pipe(finalize(() => this.fetchingCenterTechnicalReport = false))
      .subscribe({
        next: (res) => {
          this.centerTechnicalReport = res
        }
      })
  }

  onCentersTechnicalIssuesReportPageChange(event: any) {
    const size = event.rows;
    const page = (event.page ?? 0) + 1;

    this.centersTechnicalIssuesReportParams = {
      ...this.centersTechnicalIssuesReportParams,
      size,
      page
    }

    this.fetchCentersTechnicalReport(this.reportTypeSelected)
  }

  onCenterPageChange(event: any) {
    const size = event.rows;
    const page = (event.page ?? 0) + 1;

    this.centersFilterParams = {
      ...this.centersFilterParams,
      size,
      page
    }

    this.fetchCenters()
  }


  examStatusDownloadReport(event: Event, type: string) {
    const monitoringStatus = Object.keys(MonitoringCenterReport)

    if (monitoringStatus.includes(this.centerReportSelected)) {
      this.downloadMonitoringCenterReport(event, type)
      return
    }

    const examStatus = Object.keys(MonitoringCenterReportStatuses)
    if (examStatus.includes(this.centerReportSelected)) {
      this.downloadCenterByExamStatus(event, type)
      return
    }
  }

  downloadCenterByExamStatus(event: Event, type: string) {
    const btn = event.currentTarget as HTMLButtonElement
    btn.disabled = true

    this.monitorService.downloadReport(this.assessmentId, this.centerReportSelected)
      .pipe(finalize(() => btn.disabled = false))
      .subscribe({
        next: (res: HttpResponse<Blob>) => {
          let filename = type + '_REPORT';
          saveAs(res.body!, filename);
        },
        error: (err) => {
          console.error('Download failed', err);
        }
      });
  }

  downloadMonitoringCenterReport(event: Event, type: string) {
    const btn = event.currentTarget as HTMLButtonElement
    btn.disabled = true

    this.monitorService.downloadMonitoringCenterReport(this.assessmentId, this.centerReportSelected)
      .pipe(finalize(() => btn.disabled = false))
      .subscribe({
        next: (res: HttpResponse<Blob>) => {
          let filename = type + '_REPORT';
          saveAs(res.body!, filename);
        },
        error: (err) => {
          console.error('Download failed', err);
        }
      });
  }

  downloadEventsReport(type: string, event: Event) {
    const btn = event.currentTarget as HTMLButtonElement
    btn.disabled = true

    this.monitorService.downloadEventsReport(this.assessmentId, type, this.eventsReportParams.center_id)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res: HttpResponse<Blob>) => {
        let filename = type + '_REPORT_' + Date.now();

        saveAs(res.body!, filename);
      },
      error: (err) => {
        console.error('Download failed', err);
      }
    });
  }

  downloadBVMReport(type: string, event: Event) {
    const btn = event.currentTarget as HTMLButtonElement
    btn.disabled = true

    this.monitorService.downloadBVMReport(this.assessmentId, this.bvmReportParams)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res: HttpResponse<Blob>) => {
        let filename = type + '_REPORT_' + Date.now();

        saveAs(res.body!, filename);
      },
      error: (err) => {
        console.error('Download failed', err);
      }
    });
  }

  downloadRescheduleReport(event: Event) {
    const btn = event.currentTarget as HTMLButtonElement
    btn.disabled = true

    this.monitorService.downloadRescheduleReport(this.assessmentId, this.rescheduleReportParams.reschedule_status, this.rescheduleReportParams.center_id)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res: HttpResponse<Blob>) => {
        let filename = this.rescheduleReportParams.reschedule_status + '_REPORT_' + Date.now();

        saveAs(res.body!, filename);
      },
      error: (err) => {
        console.error('Download failed', err);
      }
    });
  }

  downloadMalpracticeReport(event: Event) {
    const btn = event.currentTarget as HTMLButtonElement
    btn.disabled = true

    this.monitorService.downloadMalpracticeReport(this.assessmentId, this.malpracticeReportParams.malpractice_code, this.malpracticeReportParams.center_id)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res: HttpResponse<Blob>) => {
        let filename = this.malpracticeReportParams.malpractice_code + '_REPORT_' + Date.now();

        saveAs(res.body!, filename);
      },
      error: (err) => {
        console.error('Download failed', err);
      }
    });
  }

  downloadTechnicalIssuesReport(event: Event,category: string) {
    const btn = event.currentTarget as HTMLButtonElement
    btn.disabled = true

    this.monitorService.downloadTechnicalIssuesReport(this.assessmentId, category)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res: HttpResponse<Blob>) => {
        let filename = category + '_ISSUES_REPORT_' + Date.now();

        saveAs(res.body!, filename);
      },
      error: (err) => {
        console.error('Download failed', err);
      }
    });
  }

  downloadAllParticipantReport(event: Event) {
    const btn = event.currentTarget as HTMLButtonElement
    btn.disabled = true

    this.monitorService.downloadAllParticipantReport(this.assessmentId, this.allParticipantsFilterParams)
      .pipe(finalize(() => btn.disabled = false))
      .subscribe({
        next: (res: HttpResponse<Blob>) => {
          let filename = 'ALL_PARTICIPANTS_REPORT';
          saveAs(res.body!, filename);
        },
        error: (err) => {
          console.error('Download failed', err);
        }
      });
  }

  downloadTechnicalReportCenters(event: Event) {
    const btn = event.currentTarget as HTMLButtonElement
    btn.disabled = true

    if(this.technicalReportFilter.has_report.toString() === 'true') {
      this.technicalReportFilter.has_report = true
    }

    if(this.technicalReportFilter.has_report.toString() === 'false') {
      this.technicalReportFilter.has_report = false
    }

    this.monitorService.downloadTechnicalReportCenters(this.assessmentId, this.technicalReportFilter)
    .pipe(finalize(() => btn.disabled = false))
    .subscribe({
      next: (res: HttpResponse<Blob>) => {
        const name =  this.technicalReportFilter.has_report ? 'CENTERS_WITH_TECHNICAL_REPORT_' : 'CENTERS_WITHOUT_TECHNICAL_REPORT_'
        let filename =  name+ Date.now();

        saveAs(res.body!, filename);
      },
      error: (err) => {
        console.error('Download failed', err);
      }
    });
  }

  chartColorMap: any = {
    ATTENDANCE: {
      PRESENT: '#405189',
      ABSENT: '#0ab39c',
    },
    BIOMETRICS: {
      PRESENT: '#405189',
      ABSENT: '#0ab39c',
      UNVERIFIED: '#f7b84b',
      UNCONSIDERED: '#f06548',
      NO_STATUS: '#8772f9'
    },
    RESCHEDULE: {
      FORCED: '#405189',
      MANUAL: '#0ab39c',
      NONE: '#f7b84b'
    },
    EVENTS: {
      COMPUTER_SWAP: '#405189',
      RE_LOGIN: '#0ab39c',
      COMPENSATORY_TIME_ADDED: '#f7b84b',
      STARTED: '#405189',
      NOT_STARTED: '#f06548',
      ENDED: '#0ab39c',
      TIMED_OUT: '#8772f9'
    }
  };

  // fallback for array-based reports
  defaultChartColors = [
    '#405189',
    '#0ab39c',
    '#f7b84b',
    '#f06548',
    '#8772f9'
  ];

  getColor(type: string, key: string, index?: number): string {
    return (
      this.chartColorMap[type]?.[key] ||
      this.defaultChartColors[(index ?? 0) % this.defaultChartColors.length]
    );
  }

  private _DoughnutChart(chartData: any[], value: number) {

    const type = this.participantSummaryReportType;

    const mappedData = chartData.map((item, index) => {
      const mappedColor =
        this.chartColorMap[type]?.[item.name] ||
        this.defaultChartColors[index % this.defaultChartColors.length];

      return {
        ...item,
        itemStyle: {
          color: mappedColor
        }
      };
    });

    this.DoughnutChart = {
      tooltip: { trigger: "item" },
      series: [
        {
          type: "pie",
          radius: ["40%", "70%"],
          center: ["50%", "35%"],
          startAngle: 180,
          label: { show: false },
          data: [
            ...mappedData,
            {
              value: value,
              itemStyle: {
                color: "none"
              },
              label: { show: false },
            },
          ],
        },
      ],
      textStyle: {
        fontFamily: "Poppins, sans-serif",
      },
    };
  }

  fetchInfractionBatches(silent: boolean = false) {
    if (!silent) {
      this.fetchingInfractionBatches = true;
    }
    this.monitorService.fetchInfractionBatches(this.assessmentId)
      .pipe(finalize(() => {
        if (!silent) this.fetchingInfractionBatches = false;
      }))
      .subscribe(res => {
        this.infractionBatches = res;
      });
  }

  fetchInfractionsSummary(silent: boolean = false) {
    if (!silent) {
      this.fetchingInfractionsSummary = true;
    }
    const params: any = {};
    if (this.infractionBatchFilter) params.batch_id = this.infractionBatchFilter;
    if (this.infractionCandidateFilter) params.candidate_login_field_value = this.infractionCandidateFilter;
    
    this.monitorService.fetchInfractionTypeSummary(this.assessmentId, params)
      .pipe(finalize(() => {
        if (!silent) this.fetchingInfractionsSummary = false;
      }))
      .subscribe({
        next: (res) => {
          this.infractionsSummary = res;
          if (this.infractionsSummary.infraction_types.length) {
             const chartData = this.infractionsSummary.infraction_types.map(b => ({ value: b.total_candidates, name: b.infraction_type }));
             const value = this.infractionsSummary.infraction_types.reduce((total, curr) => total + curr.total_candidates, 0);
             this._InfractionsDoughnutChart(chartData, value);
          }
        }
      });
  }

  applyInfractionsFilter() {
    this.fetchInfractionsSummary();
  }

  _InfractionsDoughnutChart(chartData: any[], value: number) {
     const mappedData = chartData.map((item, index) => {
       return {
         ...item,
         itemStyle: {
           color: this.defaultChartColors[index % this.defaultChartColors.length]
         }
       };
     });

     this.InfractionsDoughnutChart = {
       tooltip: { trigger: "item" },
       series: [
         {
           type: "pie",
           radius: ["40%", "70%"],
           center: ["50%", "35%"],
           startAngle: 180,
           label: { show: false },
           data: [
             ...mappedData,
             {
               value: value,
               itemStyle: { color: "none" },
               label: { show: false },
             },
           ],
         },
       ],
       textStyle: { fontFamily: "Poppins, sans-serif" },
     };
  }

  openInfractionEventsModal(category: string, content: any, candidate_id?: string) {
    this.selectedInfractionCategoryFilter = category;
    this.selectedInfractionBatchFilter = this.infractionBatchFilter; // Sync with main card
    this.selectedInfractionCandidateIdFilter = candidate_id;
    this.infractionEventsParams = { page: 1, size: 50 };
    this.fetchInfractionEvents();
    this.modalService.open(content, { size: 'xl', centered: true });
  }

  fetchInfractionEvents() {
    this.fetchingInfractionEvents = true;
    this.monitorService.fetchInfractionEvents(this.assessmentId, {
      batch_id: this.selectedInfractionBatchFilter,
      infraction_type: this.selectedInfractionCategoryFilter,
      candidate_id: this.selectedInfractionCandidateIdFilter,
      page: this.infractionEventsParams.page,
      size: this.infractionEventsParams.size
    })
      .pipe(finalize(() => this.fetchingInfractionEvents = false))
      .subscribe(res => {
        this.infractionEventsReport = res;
      });
  }

  onInfractionEventsPageChange(event: any) {
    const size = event.rows;
    const page = (event.page ?? 0) + 1;
    this.infractionEventsParams = { size, page };
    this.fetchInfractionEvents();
  }

  applyModalInfractionFilter() {
    this.infractionEventsParams.page = 1;
    this.fetchInfractionEvents();
    
    // If the batch filter changed in the modal, we also want to update the main card's batch filter 
    // and re-fetch the summary behind the scenes.
    if (this.infractionBatchFilter !== this.selectedInfractionBatchFilter) {
      this.infractionBatchFilter = this.selectedInfractionBatchFilter;
      this.fetchInfractionsSummary();
    }
  }

  openEvidenceModal(eventData: InfractionEventDTO, content: any) {
    this.evidenceData = { type: 'none', data: [] };
    this.evidenceDetails = undefined;
    this.fetchingEvidence = true;
    this.modalService.open(content, { size: 'lg', centered: true });

    this.monitorService.fetchInfractionEvidence(this.assessmentId, eventData.id)
      .pipe(finalize(() => this.fetchingEvidence = false))
      .subscribe({
        next: (res: InfractionEvidenceDTO) => {
          this.evidenceDetails = res;
          if (res.signed_url) {
             const url = res.signed_url.toLowerCase();
             const isAudioType = eventData.infraction_type.includes('TALKING_DETECTED') || eventData.infraction_type.includes('BACKGROUND_VOICES');

             if (isAudioType || url.includes('.mp3') || url.includes('.wav') || url.includes('.webm') && isAudioType) {
                this.evidenceData = { type: 'audio', data: [res.signed_url] };
             } else if (url.includes('.mp4') || url.includes('.mov') || url.includes('.webm')) {
                this.evidenceData = { type: 'video', data: [res.signed_url] };
             } else if (url.includes('.jpg') || url.includes('.jpeg') || url.includes('.png') || url.includes('.webp')) {
                this.evidenceData = { type: 'image', data: [res.signed_url] };
             } else {
                // Fallback based on infraction type if URL lacks clear extension
                this.evidenceData = { type: isAudioType ? 'audio' : 'image', data: [res.signed_url] };
             }
          } else {
             this.evidenceData = { type: 'none', data: [] };
          }
        },
        error: () => {
          this.evidenceData = { type: 'none', data: [] };
          this.evidenceDetails = undefined;
        }
      });
  }

  goBack() {
    history.back()
  }

}
