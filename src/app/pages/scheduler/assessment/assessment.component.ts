import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SchedulerService } from "../services/scheduler.service";
import { HttpErrorResponse } from "@angular/common/http";
import { IAssessmentList } from "../models/assessments";
@Component({
  selector: "app-assessment",
  templateUrl: "./assessment.component.html",
  styleUrls: ["./assessment.component.scss"],
})
export class AssessmentComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  page: number;
  size: number;

  assessments!: IAssessmentList;
  // {
  //   name: "Assessment-1",
  //   deliveryMethod: "Online",
  //   group: "group 1",
  //   center: 3,
  //   totalItems: 20,
  //   duration: 120,
  //   totalSections: 5,
  //   dateCreated: "25-06-2022",
  //   status: "published",
  //   isSelected: false,
  //   numberOfParticipants: 2000,
  //   registrationLink: `https://assement-1/reg`,
  // },
  // {
  //   name: "Assessment-2",
  //   deliveryMethod: "Online",
  //   group: "group 2",
  //   center: 39,
  //   totalItems: 10,
  //   duration: 60,
  //   totalSections: 3,
  //   dateCreated: "3-02-2022",
  //   status: "draft",
  //   isSelected: false,
  //   numberOfParticipants: 2000,
  //   registrationLink: `https://assement-2/reg`,
  // },
  // {
  //   name: "Assessment-3",
  //   deliveryMethod: "Offline",
  //   group: "group 3",
  //   center: 41,
  //   totalItems: 50,
  //   duration: 60,
  //   totalSections: 4,
  //   dateCreated: "3-02-2022",
  //   status: "published",
  //   isSelected: false,
  //   numberOfParticipants: 2000,
  //   registrationLink: `https://assement-3/reg`,
  // },
  // {
  //   name: "Assessment-4",
  //   deliveryMethod: "Online",
  //   group: "group 4",
  //   center: 20,
  //   totalItems: 25,
  //   duration: 60,
  //   totalSections: 5,
  //   dateCreated: "25-06-2022",
  //   status: "published",
  //   isSelected: false,
  //   numberOfParticipants: 2000,
  //   registrationLink: `https://assement-4/reg`,
  // },
  // {
  //   name: "Assessment-5",
  //   deliveryMethod: "Offline",
  //   group: "group 5",
  //   center: 23,
  //   totalItems: 5,
  //   duration: 60,
  //   totalSections: 3,
  //   dateCreated: "3-02-2022",
  //   status: "draft",
  //   isSelected: false,
  //   numberOfParticipants: 2000,
  //   registrationLink: `https://assement-5/reg`,
  // },

  constructor(
    private route: Router,
    private schedulerService: SchedulerService
  ) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Tables" },
      { label: "Assessments", active: true },
    ];
    this.fetchAssessments(0, 250);
  }

  viewDetails(assessmentId: string) {
    this.route.navigate([`schedule/participants/details/${assessmentId}`]);
  }

  deleteAssessment() {}

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  fetchAssessments(page: number, size: number) {
    this.schedulerService.fetchAssessments(page, size).subscribe({
      next: (value) => {
        this.assessments = value;
      },
      error: (err: HttpErrorResponse) => {},
    });
  }

  onPageChange(event: any) {
    // console.log(event);
    this.size = event.rows;
    this.page = event.page;
    // console.log(this.size);
    this.fetchAssessments(this.page, this.size);
  }
}
