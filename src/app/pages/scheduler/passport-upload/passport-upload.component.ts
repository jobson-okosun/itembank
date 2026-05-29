import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passport-upload',
  templateUrl: './passport-upload.component.html',
  styleUrls: ['./passport-upload.component.scss']
})
export class PassportUploadComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Admin' },
      { label: 'Passports Uploads', active: true }
    ];
  }

}
