import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssessmentsService } from '../../service/assessments.service';
import { finalize } from 'rxjs/operators';
import { MarkingGuideService } from '../../service/marking-guide.service';
import { SchemeSectionsResponseDTO } from '../../model/marking-guide-types';
import { NotifierService } from 'angular-notifier';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-assessment-sections',
  templateUrl: './assessment-sections.component.html',
  styleUrls: ['./assessment-sections.component.scss']
})
export class AssessmentSectionsComponent implements OnInit {
  loadingDashboardResources: boolean = false
  isAddingMarkingGuide: boolean = false

  assessmentId: string
  assessmentName: string
  breadCrumbItems!: Array<{}>;
  sections: SchemeSectionsResponseDTO[]

  constructor(private route: ActivatedRoute, private markingGuideService: MarkingGuideService, private router: Router, private NotifierService: NotifierService) { }

  ngOnInit(): void {
    this.getAssessmentDetails()
    // this.initializeBreadCrumbs()
    this.fetchSections() 
  }

  getAssessmentDetails() {
    this.getAssessmentId()
    this.route.queryParamMap.subscribe((params) => {
      this.assessmentName = params.get('assessmentName')
    });
  }
  getAssessmentId() {
    this.route.paramMap.subscribe((route) => {
      this.assessmentId = route.get('assessmentId');
    });
  }

  fetchSections() {
    this.loadingDashboardResources = true;

    this.markingGuideService.fetchMarkingGuideAssessmentSections(this.assessmentId)
    .pipe(finalize(() => this.loadingDashboardResources = false))
    .subscribe({
      next: (res) => {
        this.sections = res
        this.initializeBreadCrumbs()
      }
    })
  }

  addSectionMarkingGuide(sectionId: string) {
    this.isAddingMarkingGuide = true

    const section = this.sections.find(s => s.id === sectionId)
    this.markingGuideService.addMarkingSchemeToAssementSection(this.assessmentId, sectionId)
    .pipe(finalize(() => this.isAddingMarkingGuide = false))
    .subscribe({
      next: (res) => {
        this.router.navigate([sectionId, 'scheme', res.id ],  { relativeTo: this.route, queryParams: { assessmentName: this.assessmentName, sectionName: section.name} })
      },
      error: (err: HttpErrorResponse) => {
        this.NotifierService.notify('error', err.error.error ?? 'An error occurred while adding marking guide to section')
      }
    })
  }

  viewSectionMarkingGuide(item: SchemeSectionsResponseDTO) {
    this.router.navigate([item.id, 'scheme', item.scheme_id],  { relativeTo: this.route, queryParams: { assessmentName: this.assessmentName, sectionName: item.name } })
  }

  initializeBreadCrumbs() {
    this.breadCrumbItems = [
      { label: 'Assessment', active: false },
      { label: 'DEMO EXAM', active: false },
    ];
  } 

  back() {
    history.back()
  }
}
