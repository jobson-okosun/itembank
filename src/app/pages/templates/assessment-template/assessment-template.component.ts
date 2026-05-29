import { Component, OnInit } from "@angular/core";
import { TemplatesService } from "../service/templates.service";
import { TemplatesPage } from "../model/templates-page.model";
import { HttpErrorResponse } from "@angular/common/http";
import { TemplatesPageContent } from "../model/templates-page-content.model";
import { NotifierService } from "angular-notifier";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Location } from "@angular/common";

@Component({
  selector: "app-assessment-template",
  templateUrl: "./assessment-template.component.html",
  styleUrls: ["./assessment-template.component.scss"],
})
export class AssessmentTemplateComponent implements OnInit {
  breadCrumbItems!: any;
  selectedTemplate: TemplatesPageContent;
  templates: TemplatesPage;
  submitted: boolean = false;

  constructor(
    private templateService: TemplatesService,
    private notifier: NotifierService,
    private modalService: NgbModal,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: "exam-templates", active: true }];

    this.fetchAllAssessmentTemplates();
  }

  openDeleteTemplateConfirmationModal(
    deleteTemplateModal: any,
    template: TemplatesPageContent
  ) {
    this.selectedTemplate = template;
    this.modalService.open(deleteTemplateModal, { centered: true, size: "md" });
  }

  deleteAssessmentTemplate() {
    this.submitted = true;
    this.templateService
      .deleteAssessmentTemplate(this.selectedTemplate.id)
      .subscribe(
        (value) => {
          if (value) {
            this.notifier.notify(
              "success",
              `${this.selectedTemplate.name} was deleted successfully.`
            );

            this.ngOnInit();
            this.submitted = false;
            this.modalService.dismissAll();
          }
        },
        (error: HttpErrorResponse) => {
          this.submitted = false;
          this.notifier.notify("error", `${error.error.message}`);
        }
      );
  }

  fetchAllAssessmentTemplates() {
    this.templateService.fetchAllAssessmentTemplates().subscribe(
      (value) => {
        // console.log(value);
        this.templates = value;
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }

  deleteTemplate(templateId: string) {
    this.templateService.deleteAssessmentDetailsTemplate(templateId).subscribe(
      (value) => {
        // console.log(value);
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }

  setCurrentTemplate(templateName: string) {
    this.templateService.currentTemplate = templateName;
  }

  goBack() {
    this.location.back();
  }
}
