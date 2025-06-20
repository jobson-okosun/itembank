import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TemplatesService } from "../service/templates.service";
import { SingleAssessment } from "../../assessment/model/single-assessment";
import { HttpErrorResponse } from "@angular/common/http";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AssessmentsService } from "../../assessment/service/assessments.service";
import { NotifierService } from "angular-notifier";
import { AssessmentFromTemplateRequest } from "../../assessment/model/assessment-template.model";
import Swal from "sweetalert2";
import { AssessmentDeliveryEnum } from "../../assessment/model/assessment-delivery-enum";

interface Card {
  title: string;
  count?: number;
}

@Component({
  selector: "app-view-assessment-template",
  templateUrl: "./view-assessment-template.component.html",
  styleUrls: ["./view-assessment-template.component.scss"],
})
export class ViewAssessmentTemplateComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  templateId: string;
  template_name: string;
  assessment_template: SingleAssessment = new SingleAssessment();
  cards: Card[] = [];
   newAssessment: AssessmentFromTemplateRequest =
  new AssessmentFromTemplateRequest();
  submitted: boolean = false;
  deliveryMethods: any[] = [];

  constructor(
    private ar: ActivatedRoute,
    private templateService: TemplatesService,
    private modalService: NgbModal,
    private assessmentService: AssessmentsService,
    private notifierService: NotifierService
  ) {
    this.template_name = this.templateService.currentTemplate;
    this.templateId = this.ar.snapshot.params["template_id"];
  }

  ngOnInit(): void {
    let m = Object.keys(AssessmentDeliveryEnum);
    m.forEach((method) => {
      this.deliveryMethods.push(method);
    });
    this.breadCrumbItems = [
      { label: "exam template", active: false },
      { label: this.template_name.toLowerCase(), active: true },
    ];

    this.templateService
      .fetchSingleAssessmentTemplate(this.templateId)
      .subscribe(
        (value) => {
          this.assessment_template = value;

          this.assessment_template.sectionDetails.reduce(
            (sum, item) => sum + item.totalQuestions,
            0
          );
        },
        (error: HttpErrorResponse) => {}
      );
  }

  openReuseModal(assessmentSettingsModal: any) {
    this.modalService.open(assessmentSettingsModal, {
      centered: true,
      size: "lg",
      backdrop: "static",
      keyboard: false,
    });
  }

  createExamFromTemplate(newAssesmentForm: any) {
   
   

    this.submitted = true;

    // if (
    //   this.newAssessment.startDate.trim() === "" ||
    //   this.newAssessment.endDate.trim() === ""
    // ) {
    //   this.submitted = false;
    //   return this.notifier.notify(`error`, `Exam must have start and end date`);
    // }
    if (this.newAssessment.startDate > this.newAssessment.endDate) {
      this.submitted = false;
      return this.notifierService.notify(
        `error`,
        `The end date of the examination cannot be earlier than the start date`
      );
    }

    // if (this.newAssessment.duration < 5) {
    //   this.submitted = false;
    //   return this.notifierService.notify(
    //     `error`,
    //     `The specified duration cannot be less than 5 minutes`
    //   );
    // }
console.log(this.newAssessment)
    this.assessmentService
      .createExamUsingTemplate(this.newAssessment, this.assessment_template.id)
      .subscribe({
        next: (value) => {
          Swal.fire({
            title: "Congratulations",
            text: "Your exam was created successfully.",
            icon: "success",
          });
          this.submitted = false;
          this.modalService.dismissAll();
          this.ngOnInit();
          this.newAssessment = new AssessmentFromTemplateRequest();
        },
        error: (err: HttpErrorResponse) => {
          this.submitted = false;
          this.notifierService.notify("error", `${err.error.message}`);
        },
      });
  }
}
