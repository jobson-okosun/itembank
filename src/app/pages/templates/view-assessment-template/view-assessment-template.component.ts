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

  deliveryMethodsList = AssessmentDeliveryEnum;
  selectedDeliveryMode: string = "";
  selectedProctoringMode: string = "";
  
  allExamGroupsForDropdown: any[] = [];
  loadingExamGroupsDropdown: boolean = false;

  deliveryMethods: any[] = [];

  DELIVERY_METHOD_LABEL: { label: string, description: string }[] = [
    { label: 'PROCTOR SUPERVISED', description: 'Exam will be supervised by live proctors.' },
    { label: 'AUTO SUPERVISED', description: 'Exam will be supervised by AI.' },
    { label: 'ONLINE UNSUPERVISED', description: 'Exam will be taken without supervision.' },
    { label: 'CENTER-BASED SECURE', description: 'Exam will be taken in a physical location with the lockdown browser.' },
    { label: 'CENTER-BASED STANDARD', description: 'Exam will be taken in a physical location without the lockdown browser.' },
    { label: 'E-PAPER', description: 'Exam will be taken on a dedicated device.' },
    { label: 'BRING YOUR OWN DEVICE', description: 'Exam will be taken on the candidate\'s own device.' },
  ];

  deliveryMethodsWithLabel: { label: string; value: string, description: string }[] = [];

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
    // console.log('THIS.TEMPLATEID: ', this.ar.snapshot.params["template_id"]);
  }

  ngOnDestroy(): void {
    this.itemService.clearItem('TEMPLATE_NAME');
  }

  ngOnInit(): void {
    Object.keys(AssessmentDeliveryEnum).forEach((method) => {
      this.deliveryMethods.push(method);
    });

    this.deliveryMethodsWithLabel = this.deliveryMethods?.map((value: string, index: number) => ({
      value: value,
      label: this.DELIVERY_METHOD_LABEL?.[index]?.label,
      description: this.DELIVERY_METHOD_LABEL?.[index]?.description,
    }));

    this.breadCrumbItems = [
      { label: "exam template", active: false },
      { label: this.template_name.toLowerCase(), active: true },
    ];

    // console.log('TEMPLATE ID: ', this.templateId);

    this.templateService
      .fetchSingleAssessmentTemplate(this.templateId)
      .subscribe(
        (value) => {
          this.assessment_template = value;
          // console.log('assessment_template: ', this.assessment_template);

          this.assessment_template.sectionDetails.reduce(
            (sum, item) => sum + item.totalQuestions,
            0
          );
        },
        (error: HttpErrorResponse) => { }
      );
  }

  openReuseModal(assessmentSettingsModal: any) {
    this.selectedDeliveryMode = '';
    this.selectedProctoringMode = '';
    this.newAssessment = new AssessmentFromTemplateRequest();

    // const method = (this.assessment_template as any).deliveryMethod;
    // this.newAssessment.deliveryMethod = method;

    // if (method === AssessmentDeliveryEnum.LIVE_PROCTORING || method === AssessmentDeliveryEnum.AUTO_PROCTORING) {
    //   this.selectedDeliveryMode = 'Remote';
    //   this.selectedProctoringMode = 'Supervised';
    // } else if (method === AssessmentDeliveryEnum.ONLINE_NO_PROCTORING) {
    //   this.selectedDeliveryMode = 'Remote';
    //   this.selectedProctoringMode = 'Unsupervised';
    // } else if (method === AssessmentDeliveryEnum.ON_PREMISE_SECURE_BROWSER || method === AssessmentDeliveryEnum.ON_PREMISE_NO_SECURE_BROWSER) {
    //   this.selectedDeliveryMode = 'Center';
    //   this.selectedProctoringMode = '';
    // } else if (method === AssessmentDeliveryEnum.BYOD) {
    //   this.selectedDeliveryMode = 'BYOD';
    //   this.selectedProctoringMode = '';
    // } else if (method === AssessmentDeliveryEnum.E_PAPER) {
    //   this.selectedDeliveryMode = 'E-Paper';
    //   this.selectedProctoringMode = '';
    // } else {
    //   this.selectedDeliveryMode = '';
    //   this.selectedProctoringMode = '';
    // }

    this.loadingExamGroupsDropdown = true;
    this.assessmentService.fetchExamGroups(0, 1000).subscribe({
      next: (res) => {
        this.loadingExamGroupsDropdown = false;
        this.allExamGroupsForDropdown = res.data || [];
      },
      error: () => {
        this.loadingExamGroupsDropdown = false;
      }
    });

    this.modalService.open(assessmentSettingsModal, {
      centered: true,
      size: "lg",
      backdrop: "static",
      keyboard: false,
    });
  }

  getDeliveryMethod(method: string) {
    return this.deliveryMethodsWithLabel.find(item => item.value == method);
  }

  setDeliveryMode(value: string) {
    this.newAssessment.deliveryMethod = null as any;
    this.selectedProctoringMode = '';

    if (value == 'BYOD') {
      this.newAssessment.deliveryMethod = this.deliveryMethodsList.BYOD as any;
    } else if (value == 'E-Paper') {
      this.newAssessment.deliveryMethod = this.deliveryMethodsList.E_PAPER as any;
    }
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
