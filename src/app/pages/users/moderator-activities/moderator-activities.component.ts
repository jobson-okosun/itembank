import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moderator-activities',
  templateUrl: './moderator-activities.component.html',
  styleUrls: ['./moderator-activities.component.scss'],
})
export class ModeratorActivitiesComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  constructor() {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'user', active: false },
      { label: 'moderator-activities', active: true },
    ];
  }

  openModal(data: any){}
}
