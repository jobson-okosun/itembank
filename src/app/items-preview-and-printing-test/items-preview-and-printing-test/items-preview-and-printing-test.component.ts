import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamPreviewService } from 'src/app/pages/exam-preview/services/exam-preview.service';

@Component({
  selector: 'app-items-preview-and-printing-test',
  templateUrl: './items-preview-and-printing-test.component.html',
  styleUrls: ['./items-preview-and-printing-test.component.scss']
})
export class ItemsPreviewAndPrintingTestComponent implements OnInit {
  assessmentId: string | null = null;
  sections: { name: string; id: string }[] = [];
  currentSectionName: string | null = null;
  currentSectionData: any = null;

  constructor(private ar: ActivatedRoute, private examPreviewService: ExamPreviewService) { }

  ngOnInit(): void {
    this.setAssementIdFromQueryParams()
  }

  setAssementIdFromQueryParams() {
    this.ar.queryParams.subscribe((params) => {
      if (params["assessmentId"]) {
        this.assessmentId = params["assessmentId"];
        this.fetchAssessmentDetails();
      }
    });
  }

  fetchAssessmentDetails() {
    this.examPreviewService.fetchAssesmentPreviewDetails(this.assessmentId).subscribe({
      next: (value) => {
        this.sections = value.assessmentSections.map((section) => {
          return {
            name: section.name,
            id: section.id,
          };
        });

        this.currentSectionName = this.sections[0].name;


        this.getCandidateDataForSection(
          this.assessmentId,
          this.sections[0].id
        );

      }
    });
  }

  getCandidateDataForSection(assessmentId: string, sectionId: string) {
    this.examPreviewService.fetchAssessmentSectionPreview(assessmentId, sectionId)
      .subscribe({
        next: (value) => {
          this.currentSectionData = value;

          // console.log("Current Section Data:", this.currentSectionData);
        }
    });
  }

  getSingleQuestionsBLockQuestions(): any[] {
    const singleBLocks = (this.currentSectionData.blocks.filter((block: any) => block.blockType === 'SINGLE_QUESTION') as []);
    const combineSingleBLocks=  singleBLocks.flatMap((block: any) => block.items);

    console.log("Single Blocks Questions:", combineSingleBLocks);
    return combineSingleBLocks;
  }

}
