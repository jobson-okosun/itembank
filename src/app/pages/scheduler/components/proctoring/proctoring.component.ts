import { Component, OnInit } from '@angular/core';
import { SchedulerService } from '../../services/scheduler.service';
import { NotifierService } from 'angular-notifier';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AssessmentsService } from 'src/app/pages/assessment/service/assessments.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as saveAs from "file-saver";
import { IFilterUnAssignedCenterAdmin, Infraction, InfractionAction, InfractionSeverity, InfractionTemplate, ISuspendOrResumeProctor, ListProctorPage,ProctorActions,ProctorSettings,UpdateInfractionsDTO } from '../../models/assessments';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-proctoring',
  templateUrl: './proctoring.component.html',
  styleUrls: ['./proctoring.component.scss']
})
export class ProctoringComponent implements OnInit {
  fetchingProctoringData: boolean = false;
  searchableFields: Array<string> = ["email", "name"];
  assessmentId: string = "";
  proccessingProctorUpload: boolean = false;
  file!: File;
  processingTemplateDownload: boolean = false;
  fetchingUnassignedProctors: boolean = false
  fetchingAssignedProctors: boolean = false
  unassignedProctors: ListProctorPage = null
  assignedProctors: ListProctorPage = null
  assignedProctorsQueryParams = {
    page: 0,
    limit: 10,
    q: ''
  }
  totalUnassignedSuspendedProctors = 0
  totalAssignedSuspendedProctors = 0
  processingSuspendResume: boolean = false
  processingProctorAssignment: boolean = false
  assessmentInfractions: Infraction[] = null
  fetchAssessmentInfractions: boolean = false
  groupedInfractions: Record<string, Infraction[]> = {}
  groupedInfractionsKeys: any[] = []
  infractionsServerity = Object.values(InfractionSeverity);
  infractionsAction = Object.values(InfractionAction);
  savingInfractions: boolean = false
  infractionsTemplates: InfractionTemplate[] = []
  usingInfractionTemplate: boolean = false
  savingInfractionTemplate: boolean = false
  infractionTemplateForm = { name: '', description: '' };
  savingProctorSettings: boolean = false
  fetchingProctorSettings: boolean = false;
  proctorSetttings: ProctorSettings = null

  constructor(
    private schedulerService: SchedulerService,
    private notifierService: NotifierService,
    private modalService: NgbModal,
    private itembankAssessmentService: AssessmentsService
  ) { }

  ngOnInit(): void {
    this.assessmentId = this.itembankAssessmentService.schedulerAssessmentId;
    if (!this.assessmentId) {
      return
    }

    this.fetchPageData()
  }

  async fetchPageData() {
    await this.fetchAssignedProctors()
  }

  async fetchAssignedProctors() {
    this.fetchingAssignedProctors = true;

    this.schedulerService
      .fetchAssignedProctors(this.assessmentId, this.assignedProctorsQueryParams)
      .pipe(finalize(() => this.fetchingAssignedProctors = false))
      .subscribe({
        next: (value) => {
          this.totalAssignedSuspendedProctors = value.proctors.filter(item => item.suspended).length
          this.assignedProctors = value
        }
      });
  }

  async fetchUnassignedProctors() {
    this.fetchingUnassignedProctors = true;
    let payload: IFilterUnAssignedCenterAdmin = {
      email: null,
      first_name: null,
      last_name: null,
      phone: null,
      username: null,
    };

    this.schedulerService
      .fetchUnassignedProctors(this.assessmentId, payload)
      .subscribe({
        next: (value) => {
          if(!value) {
            return
          }

          this.unassignedProctors = value
          this.fetchingUnassignedProctors = false
        },
        error: () => {
          this.fetchingUnassignedProctors = false
        }
      });
  }

  suspendOrResumeProctor(proctorId: string, suspended: boolean) {
    this.processingSuspendResume = true

    const payload: ISuspendOrResumeProctor = {
      suspended,
      adminId: proctorId
    };

    this.schedulerService
      .suspendOrResumeProctor(this.assessmentId, proctorId, payload)
      .subscribe({
        next: (value) => {
          this.fetchAssignedProctors()
          this.notifierService.notify("success", `${suspended === true ? "admin suspended" : "admin set to resume"}`);
          this.processingSuspendResume = false
          this.modalService.dismissAll();
        },
        error: (err: HttpErrorResponse) => {
          this.processingSuspendResume = false
          this.notifierService.notify("error", err.error.message);
        },
      });
  }

  assignProctor(proctorId: string, btn: HTMLButtonElement) {
    btn.disabled = true
    btn.innerText = 'Processing...'

    const payload = [proctorId];

    this.schedulerService
      .assignProctor(this.assessmentId, payload)
      .subscribe({
        next: (value) => {
          this.fetchUnassignedProctors()
          this.fetchAssignedProctors()
          this.notifierService.notify("success", `Proctor has been assigned`);
          btn.disabled = false
          btn.innerText = 'Assign'
        },
        error: (err: HttpErrorResponse) => {
          btn.disabled = false
          btn.innerText = 'Assign'
          this.notifierService.notify("error", err?.error?.message ?? 'Unable to complete task');
        },
      });
  }

  async fetchAssementInfractions() {
    this.fetchAssessmentInfractions = true;

    this.schedulerService
      .fetchAssementInfractions(this.assessmentId)
      .pipe(finalize(() => this.fetchAssessmentInfractions = false))
      .subscribe({
        next: (value) => {
          this.groupedInfractions = this.groupByCategory(value)
          this.groupedInfractionsKeys = Object.keys(this.groupedInfractions)
          this.assessmentInfractions = value
        }
      });
  }

  async fetchAssementInfractionsTemplates() {
    this.schedulerService
      .fetchAssementInfractionsTemplates()
      .subscribe({
        next: (value) => {
          this.infractionsTemplates = value
        }
      });
  }

  async fetchAssementProctorSetting() {
    this.fetchingProctorSettings = true;

    this.schedulerService
      .fetchAssementProctorSetting(this.assessmentId)
      .pipe(finalize(() => this.fetchingProctorSettings = false))
      .subscribe({
        next: (value) => {
          this.proctorSetttings = value
          if(value.proctor_allowed_actions.length) {
            return
          }

          this.proctorSetttings = {
            proctor_guide: '',
            proctor_allowed_actions: [
              { action: ProctorActions.CHAT, enabled: true },
              { action: ProctorActions.END_EXAM, enabled: true },
              { action: ProctorActions.FLAG_FOR_REVIEW, enabled: true },
              { action: ProctorActions.LOG, enabled: true },
              { action: ProctorActions.PAUSE_EXAM, enabled: true },
              { action: ProctorActions.SPEAK, enabled: true },
              { action: ProctorActions.WARN, enabled: true },
            ],
            proctor_candidates: 30
          }
        }
      });
  }

  async useInfractionTemplate(templateId: string) {
    this.usingInfractionTemplate = true;

    this.schedulerService
      .useInfractionTemplate(this.assessmentId, { template_id: templateId })
      .pipe(finalize(() => this.usingInfractionTemplate = false))
      .subscribe({
        next: (value) => {
          this.notifierService.notify("success", `Template applied`);
          this.infractionTemplateForm = { name: '', description: '' };
          this.cancel()
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err?.error?.message ?? 'Unable to complete task');
        },
      });
  }

  async saveInfractionTemplate() {
    this.savingInfractionTemplate = true;

    const infraction_types = Object.values(this.groupedInfractions).flat()
    const payload = { ...this.infractionTemplateForm, infraction_types }

    this.schedulerService
      .saveInfractionTemplate(this.assessmentId, payload)
      .pipe(finalize(() => this.savingInfractionTemplate = false))
      .subscribe({
        next: (value) => {
          this.notifierService.notify("success", `Template saved`);
          this.cancel()
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err?.error?.message ?? 'Unable to complete task');
        },
      });
  }

  updateInfractions() {
    this.savingInfractions = true
    const infraction_types = Object.values(this.groupedInfractions).flat()
    const payload: UpdateInfractionsDTO = { infraction_types }

    this.schedulerService
      .updateInfractions(this.assessmentId, payload)
      .subscribe({
        next: (value) => {
          this.savingInfractions = false
          this.notifierService.notify("success", `Infractions updated`);
          this.cancel()
        },
        error: (err: HttpErrorResponse) => {
          this.savingInfractions = false
          this.notifierService.notify("error", err?.error?.message ?? 'Unable to complete task');
        },
      });
  }

  updateProctorSettings() {
    this.savingProctorSettings = true
    const payload: ProctorSettings = { ...this.proctorSetttings }

    this.schedulerService
      .updateProctorSettings(this.assessmentId, payload)
      .subscribe({
        next: (value) => {
          this.fetchAssementProctorSetting()
          this.savingProctorSettings = false
          this.notifierService.notify("success", `Settings updated`);
          this.cancel()
        },
        error: (err: HttpErrorResponse) => {
          this.savingProctorSettings = false
          this.notifierService.notify("error", err?.error?.message ?? 'Unable to complete task');
        },
      });
  }

  groupByCategory(infractions: Infraction[]): Record<string, Infraction[]> {
    return infractions.reduce((acc, infraction) => {
      const category = infraction.category
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(infraction)
      return acc
    }, {} as Record<string, Infraction[]>)
  }

  downloadTemplateForProctorUpload() {
    this.processingTemplateDownload = true;
    this.schedulerService.downloadTemplateForProctorUpload().subscribe({
      next: (blob) => {
        saveAs(blob, "file");
        this.processingTemplateDownload = false;
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify("error", err.error.message);
        this.processingTemplateDownload = false;
      },
    });
  }

  uploadProctors() {
    this.proccessingProctorUpload = true;

    const formData = new FormData();
    formData.append("file", this.file);

    this.schedulerService
      .uploadProctors(this.assessmentId, formData)
      .subscribe({
        next: (value) => {
          this.notifierService.notify("success", "uploaded  successfully");
          this.proccessingProctorUpload = false;
          this.modalService.dismissAll()
          this.fetchAssignedProctors()
        },
        error: (err: HttpErrorResponse) => {
          this.proccessingProctorUpload = false;
          this.notifierService.notify("error", err.error.error);
        },
      });
  }


  openAssignProctorsModal(content: any, size?: string) {
    this.fetchUnassignedProctors();

    this.modalService.open(content, {
      size: size ? size : "lg",
      centered: true,
    });
  }

  openProctorSettingsModal(content: any, size: string, tab: string) {

    if (tab == 'proctor') {
      this.fetchAssementProctorSetting()
    } else if (tab == 'infraction') {
      this.fetchAssementInfractions()
    }

    this.modalService.open(content, {
      size: size ? size : "lg",
      centered: true,
    });
  }

  openModal(content: any, size?: string) {
    this.modalService.open(content, {
      size: size ? size : "lg",
      centered: true,
    });
  }

  filterProctorsByField() {
    this.fetchAssignedProctors()
  }

  cancel() {
    this.modalService.dismissAll();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  getCategory(key: string): Infraction[] {
    return this.groupedInfractions[key]
  }

  formatText(str: string) {
    return str.replaceAll('_', ' ')
  }

  getTemplateDescription(value: string): string | null {
    if(!this.infractionsTemplates.length) {
      return null
    }

    const item = (this.infractionsTemplates.find( item => item.id == value))
    if(!item) {
       return  null
    }

    return item.description
  }

  onAssignedTableFilterChange(event: any) {
    const q = { ...this.assignedProctorsQueryParams }
    q.page = event.page + 1
    q.limit = event.rows

    this.assignedProctorsQueryParams = q
    this.fetchAssignedProctors()
  }
}
