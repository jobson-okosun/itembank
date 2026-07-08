import { Component } from '@angular/core';
import { MathfieldElement } from 'mathlive';
import { AssessmentsService } from './pages/assessment/service/assessments.service';
import { ItemUtilitiesService } from './pages/items/item-utilities.service';
import { ItemHttpService } from './pages/items/item-http.service';

MathfieldElement.soundsDirectory = null;
export const mfe = new MathfieldElement();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exam Alpha';

  constructor(
    private itembankAssessmentService: AssessmentsService, 
    private assessmentService: AssessmentsService,
    private itemUtil: ItemUtilitiesService,
    private itemService: ItemHttpService,
  ) {
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

    if (!this.itemUtil.currentItemTrail) {
      const trail = localStorage.getItem('item-trail')
      if (trail) {
        this.itemUtil.currentItemTrail = JSON.parse(trail)
      }
    }

    const moderationEnabled = localStorage.getItem('currentSubjectModerationEnabled')
    if (moderationEnabled) {
      this.itemService.currentSubjectModerationEnabled = moderationEnabled === 'true'
    }
  }

  ngOnInit() {
  }
}
