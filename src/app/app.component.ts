import { Component } from '@angular/core';
import { MathfieldElement } from 'mathlive';
import { AssessmentsService } from './pages/assessment/service/assessments.service';
export const mfe = new MathfieldElement();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exam Alpha';

  constructor(private itembankAssessmentService: AssessmentsService, private assessmentService: AssessmentsService) {}

  ngOnInit() {
    if (!this.itembankAssessmentService.schedulerAssessmentId) {
      const id = localStorage.getItem('assessmentId')
      if (id) {
        this.itembankAssessmentService.schedulerAssessmentId = id
      }

      const medthod = localStorage.getItem('deliveryMethod')
      if (medthod) {
        this.assessmentService.activeAssessmentDeliveryMethod = medthod
      }

      const assessmentName = localStorage.getItem('assessmentName')
      if (assessmentName) {
        this.assessmentService.activeAssessment = assessmentName
      }
    }
  }
}
