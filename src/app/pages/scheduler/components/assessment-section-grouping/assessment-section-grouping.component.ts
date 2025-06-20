import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import {
  INewSectionGroup,
  ISection,
  ISectionGroupDashboard,
  ISectionGroups,
} from "../../models/assessments";
import { HttpErrorResponse } from "@angular/common/http";
import { NotifierService } from "angular-notifier";
import { SchedulerService } from "../../services/scheduler.service";
import { AssessmentsService } from "src/app/pages/assessment/service/assessments.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-assessment-section-grouping",
  templateUrl: "./assessment-section-grouping.component.html",
  styleUrls: ["./assessment-section-grouping.component.scss"],
})
export class AssessmentSectionGroupingComponent implements OnInit {
  routeSub!: Subscription;
  assessmentId: string = "";
  selectedSections: ISection[] = [];
  assessmentSectionGroups!: ISectionGroups;
  proccessingAddSectionGroup: boolean = false;
  processingFetchAssessmentGroup = false;
  processingDelete: boolean = false;
  page: number = 0;
  size: number = 0;

  Sections: ISection[] = [];
  dashboardData: ISectionGroupDashboard;
  constructor(
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private notifierService: NotifierService,
    private schedulerService: SchedulerService,
    private itembankAssessmentService: AssessmentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /* this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.assessmentId = params["assessmentId"];
    }); */
    this.assessmentId = this.itembankAssessmentService.schedulerAssessmentId;
    this.fetchAssessmentSectionGroups(this.assessmentId, 0, 10);
    this.fetchSectionGroupDashboard(this.assessmentId);
  }

  cancel() {
    this.modalService.dismissAll();
  }

  openSectionsModal(content: any): void {
    this.selectedSections = [];
    this.fetchSectionsDropdown(this.assessmentId);
    this.modalService.open(content, { size: "lg", centered: true });
  }

  viewGroupParticipant(sectionGroupId: string) {
    // this.router.navigate(['group',this.groupName,'details' ])
    this.router.navigate([
      `schedule/group/participants/${this.assessmentId}/${sectionGroupId}/details`,
    ]);
  }

  openDeleteConfirmationModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  editAssessmentGroupSections(groupId: string): void {
    // this.router.navigate([
    //   `scheduler/participants/${groupId}/edit-section-group`,
    // ]);

    this.router.navigate([
      `schedule/group/${this.assessmentId}/${groupId}/edit`,
    ]);
  }
  saveSectionGroup(newSectionGroup: NgForm) {
    const newsectionGroupDTO: INewSectionGroup = {
      name: newSectionGroup.form.value.sectionName.trim(),
      sections: newSectionGroup.form.value.selectedSections,
    };

    this.proccessingAddSectionGroup = true;
    this.schedulerService
      .addGroupSection(newsectionGroupDTO, this.assessmentId)
      .subscribe({
        next: (value) => {
          this.proccessingAddSectionGroup = false;
          this.notifierService.notify("success", "section group added");
          this.fetchAssessmentSectionGroups(this.assessmentId, 0, 10);
          this.cancel();
        },
        error: (err: HttpErrorResponse) => {
          this.proccessingAddSectionGroup = false;
          this.notifierService.notify("error", err.error.message);
        },
      });
    // console.log(newsectionGroupDTO);
    // // this.router.navigate(["/scheduler/assessment/details"]);
  }

  fetchAssessmentSectionGroups(
    assessmentId: string,
    page: number,
    size: number
  ) {
    this.processingFetchAssessmentGroup = true;
    this.schedulerService
      .fetchAssessmentSectionGroups(assessmentId, page, size)
      .subscribe({
        next: (value) => {
          this.assessmentSectionGroups = value;
          this.processingFetchAssessmentGroup = false;
        },
        error: (err: HttpErrorResponse) => {
          // console.log(err.error.message);
          this.processingFetchAssessmentGroup = false;
        },
      });
  }

  fetchSectionsDropdown(assessmentId: string) {
    this.schedulerService.fetchSectionsDropdown(assessmentId).subscribe({
      next: (value) => {
        this.Sections = value;
        // console.log(this.Sections);
      },
      error: (err: HttpErrorResponse) => {
        // console.log(err.error.message);
      },
    });
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  onPageChange(event: any) {
    this.size = event.rows;
    this.page = event.page;

    this.fetchAssessmentSectionGroups(this.assessmentId, this.page, this.size);
  }

  deleteSectionGroup(sectionGroupId: string) {
    this.processingDelete = true;
    this.schedulerService
      .deleteSectionGroup(this.assessmentId, sectionGroupId)
      .subscribe({
        next: (value) => {
          this.processingDelete = false;
          this.fetchAssessmentSectionGroups(this.assessmentId, 0, 10);
          this.notifierService.notify("success", "Section Group Deleted");
          this.modalService.dismissAll();
        },
        error: (err: HttpErrorResponse) => {
          this.processingDelete = false;
          this.notifierService.notify("error", err.error.error);
          // console.log(err.error.error);
        },
      });
  }

  fetchSectionGroupDashboard(assessmentId: string) {
    this.schedulerService.fetchSectionGroupDashboard(assessmentId).subscribe({
      next: (value) => {
        this.dashboardData = value;
      },
      error: (err: HttpErrorResponse) => {
        this.notifierService.notify("error", err.error.message);
      },
    });
  }
}
