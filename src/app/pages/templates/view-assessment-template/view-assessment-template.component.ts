import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TemplatesService } from "../service/templates.service";
import { SingleAssessment } from "../../assessment/model/single-assessment";
import { HttpErrorResponse } from "@angular/common/http";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AssessmentsService } from "../../assessment/service/assessments.service";
import { NotifierService } from "angular-notifier";
import { AssessmentFromTemplateRequest } from "../../assessment/model/assessment-template.model";
import Swal from "sweetalert2";
import { AssessmentDeliveryEnum, CentreBasedCategoryEnum, E_PaperEnum, ProctoredCategoryEnum, UnsupervisedCategoryEnum } from "../../assessment/model/assessment-delivery-enum";
import { ItemServiceService } from "src/app/shared/item-services/item-service.service";

interface Card {
  title: string;
  count?: number;
}

@Component({
  selector: "app-view-assessment-template",
  templateUrl: "./view-assessment-template.component.html",
  styleUrls: ["./view-assessment-template.component.scss"],
})
export class ViewAssessmentTemplateComponent implements OnInit, OnDestroy {
  breadCrumbItems: Array<{}>;
  templateId: string;
  template_name: string;
  assessment_template: SingleAssessment = new SingleAssessment();
  cards: Card[] = [];
  newAssessment: AssessmentFromTemplateRequest =
    new AssessmentFromTemplateRequest();
  submitted: boolean = false;

   deliveryMethods: any[] = [];

  proctoredCategory: any[] = [];

  unsupervisedCategory: any[] = [];

  centreBasedCategory: any[] = [];

  ePaperCategory: any[] = [];

  DELIVERY_METHOD_LABEL: string[] = [
    'LIVE SUPERVISED', //'LIVE PROCTORING',
    'AUTO SUPERVISED', //'AUTO PROCTORING',
    'ONLINE UNSUPERVISED', //'ONLINE WITH NO PROCTORING',
    'CENTER-BASED SECURE', //'ON PREMISE WITH LOCKDOWN BROWSER',
    'CENTER-BASED STANDARD', //'ON PREMISE WITHOUT LOCKDOWN BROWSER',
    'E-PAPER',
    'BRING YOUR OWN DEVICE',
  ];

  // ======== CATEGORIES ===========

  PROCTORED_CATEGORY_LABEL: string[] = [
    'LIVE SUPERVISED',
    'AUTO SUPERVISED',
  ];

  UNSUPERVISED_CATEGORY_LABEL: string[] = [
    'ONLINE WITH LOCKDOWN BROWSER',
    'ONLINE WITHOUT LOCKDOWN BROWSER'
  ];

  CENTRE_BASED_CATEGORY_LABEL: string[] = [
    'OFFLINE WITH SECURE BROWSER',
    'OFFLINE WITHOUT SECURE BROWSER',
    'BRING YOUR OWN DEVICE'
  ];

  E_PAPER_CATEGORY_LABEL: string[] = [
    'E-PAPER'
  ];

  deliveryMethodsWithLabel: { label: string; value: string }[] = [];

  proctorCategoryWithLabel: { label: string; value: string }[] = [];

  unsupervisedCategoryWithLabel: { label: string; value: string }[] = [];

  centerBasedCategoryWithLabel: { label: string; value: string }[] = [];

  ePaperCategoryWithLabel: { label: string; value: string }[] = [];

  constructor(
    private ar: ActivatedRoute,
    private templateService: TemplatesService,
    private modalService: NgbModal,
    private assessmentService: AssessmentsService,
    private notifierService: NotifierService,
    private itemService: ItemServiceService
  ) {
    this.template_name = this.templateService.currentTemplate || this.itemService.getItem('TEMPLATE_NAME');
    this.templateId = this.ar.snapshot.params["template_id"];
    console.log('THIS.TEMPLATEID: ', this.ar.snapshot.params["template_id"]);
  }

  ngOnDestroy(): void {
    this.itemService.clearItem('TEMPLATE_NAME');
  }

  ngOnInit(): void {
    Object.keys(AssessmentDeliveryEnum).forEach((method) => {
      this.deliveryMethods.push(method);
    });

    this.deliveryMethodsWithLabel = this.deliveryMethods.map((value: string, index: number) => ({
      value: value,
      label: this.DELIVERY_METHOD_LABEL[index],
    }));

    // Proctored Categories
    Object.keys(AssessmentDeliveryEnum).forEach((method) => {
      this.proctoredCategory.push(method);
    });

    this.proctorCategoryWithLabel = Object.keys(ProctoredCategoryEnum).map((value: string, index: number) => ({
      value: value,
      label: this.PROCTORED_CATEGORY_LABEL[index],
    }));

    // Unsupervised Categories
    Object.keys(AssessmentDeliveryEnum).forEach((method) => {
      this.unsupervisedCategory.push(method);
    });

    this.unsupervisedCategoryWithLabel = Object.keys(UnsupervisedCategoryEnum).map((value: string, index: number) => ({
      value: value,
      label: this.UNSUPERVISED_CATEGORY_LABEL[index],
    }));

    // Centre based Categories
    Object.keys(AssessmentDeliveryEnum).forEach((method) => {
      this.centreBasedCategory.push(method);
    });

    this.centerBasedCategoryWithLabel = Object.keys(CentreBasedCategoryEnum).map((value: string, index: number) => ({
      value: value,
      label: this.CENTRE_BASED_CATEGORY_LABEL[index],
    }));

    // E-Paper Categories
    Object.keys(AssessmentDeliveryEnum).forEach((method) => {
      this.ePaperCategory.push(method);
    });

    this.ePaperCategoryWithLabel = Object.keys(E_PaperEnum).map((value: string, index: number) => ({
      value: value,
      label: this.E_PAPER_CATEGORY_LABEL[index],
    }));

    this.breadCrumbItems = [
      { label: "exam template", active: false },
      { label: this.template_name.toLowerCase(), active: true },
    ];

    console.log('TEMPLATE ID: ', this.templateId);

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
        (error: HttpErrorResponse) => { }
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
    console.log('NEW ASSESSEMENT: ', this.newAssessment);

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

  goBack(): void {
    history.back();
  }
}
