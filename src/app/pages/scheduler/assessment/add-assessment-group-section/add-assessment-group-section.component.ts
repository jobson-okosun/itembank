import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";
import { Location } from "@angular/common";
import { FormBuilder } from "@angular/forms";
import { SchedulerService } from "../../services/scheduler.service";
import { INewSectionGroup, IParticipantList } from "../../models/assessments";
import { HttpErrorResponse } from "@angular/common/http";
import { NotifierService } from "angular-notifier";

@Component({
  selector: "app-add-assessment-group-section",
  templateUrl: "./add-assessment-group-section.component.html",
  styleUrls: ["./add-assessment-group-section.component.scss"],
})
export class AddAssessmentGroupSectionComponent implements OnInit {
  breadCrumbItems!: Array<{}>;


  groupParticipants!: IParticipantList;
  conditions: any = [];
  Sections = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
    { name: "7" },
    { name: "8" },
    { name: "9" },
    { name: "10" },
  ];
  selectedSections: any;
  assessmentId: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private locationService: Location,
    private formBuilder: FormBuilder,
    private router: Router,
    private schedulerService: SchedulerService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Group" },
      { label: "Sections", active: true },
    ];

    this.assessmentId = this.activatedRoute.snapshot.params["assessmentId"];
    this.fetchSectionsDropdown(this.assessmentId);
  }

 
  openParticipantModal(content: any) {
    // this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openImportModal(content: any) {
    // this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openMoveParticipantModal(content: any) {
    // this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openCopyParticipantModal(content: any) {
    // this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openGroupNameEditModal(content: any) {
    // this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openCustomFieldPage() {
    this.router.navigate(["/schedule/bank/group/custom-field-settings"]);
  }
  addParticipant() {
    Swal.fire({
      title: `Created Successfully`,
      // text: 'You clicked the button!',
      icon: "success",
      // showCancelButton: true,
      confirmButtonColor: "rgb(3, 142, 220)",
      cancelButtonColor: "rgb(243, 78, 78)",
      confirmButtonText: "OK",
    });
    this.modalService.dismissAll();
    // this.router.navigate(['group',this.groupName,'details' ])
  }
  moveParticipant() {}

  copyPartcipant() {}

  editGroupName() {}

  cancel() {
    // this.router.navigate(["group", this.groupName, "details"]);
    this.modalService.dismissAll();
  }
  goBack(): void {
    this.locationService.back();
  }

  addConditions() {
    this.conditions.push({ name: "", value: "" });
  }
  removeCondition(index: number) {
    this.conditions.splice(index, 1);
  }

  save(sectionName: string) {
    const newsectionGroupDTO: INewSectionGroup = {
      name: sectionName,
      sections: this.selectedSections,
    };
    this.schedulerService
      .addGroupSection(newsectionGroupDTO, this.assessmentId)
      .subscribe({
        next: (value) => {
          this.notifierService.notify("success", "section group added");
          this.router.navigate([
            `schedule/participants/details/${this.assessmentId}`,
          ]);
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify("error", err.error.message);
        },
      });
    // console.log(newsectionGroupDTO);
    // this.router.navigate(["/scheduler/assessment/details"]);
  }

  fetchSectionsDropdown(assessmentId: string) {
    this.schedulerService.fetchSectionsDropdown(assessmentId).subscribe({
      next: (value) => {
        this.Sections = value;
      },
      error: (err: HttpErrorResponse) => {
        // console.log(err.error.message);
      },
    });
  }

  fetchSectionGroupParticipant(assessmentId: string, sectionGroupId: string) {
    this.schedulerService
      .fetchSectionGroupParticipant(assessmentId, sectionGroupId)
      .subscribe({
        next: (value) => {
          this.groupParticipants = value;
        },
        error: (err: HttpErrorResponse) => {
          // console.log(err.error.message);
        },
      });
  }
}
