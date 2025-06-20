import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CenterData } from '../data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-center-details',
  templateUrl: './center-details.component.html',
  styleUrls: ['./center-details.component.scss']
})
export class CenterDetailsComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  submitted = false;
  centerName: string = ''
  centerImages: Array<any> = []
  assessments: any = [
    {name:'Assessment-1', deliveryMethod:'Online', totalItems:20, duration:120, totalSections:5, dateCreated: '25-06-2022', status:'published', isSelected:false, numberOfParticipants:2000, center:23},
    {name:'Assessment-2', deliveryMethod:'Online', totalItems:10, duration:60, totalSections:3, dateCreated: '3-02-2022', status:'draft', isSelected:false, numberOfParticipants:2000, center:34},
    {name:'Assessment-3', deliveryMethod:'Offline', totalItems:50, duration:60, totalSections:4, dateCreated: '3-02-2022', status:'published', isSelected:false, numberOfParticipants:2000,center:12},
    {name:'Assessment-4', deliveryMethod:'Online', totalItems:25, duration:60, totalSections:5, dateCreated: '25-06-2022', status:'published', isSelected:false, numberOfParticipants:2000, center:28},
    {name:'Assessment-5', deliveryMethod:'Offline', totalItems:5, duration:60, totalSections:3, dateCreated: '3-02-2022', status:'draft', isSelected:false, numberOfParticipants:2000, center:10},
  ]
  constructor(private route: ActivatedRoute, private modalService: NgbModal, private location: Location) { }

  ngOnInit(): void {


    this.breadCrumbItems = [
      { label: "Center" },
      { label: "Details", active: true },
    ];
  }

  openCenterNameModal(content: any) {
    this.modalService.open(content, { size: 'md', centered: true });
  }
  editCenterName() {
    // this.groups[index].name = "hello";
    Swal.fire({
      title: `Name Changed`,
      // text: 'You clicked the button!',
      icon: 'success',
      // showCancelButton: true,
      confirmButtonColor: 'rgb(3, 142, 220)',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'OK'
    });
    this.modalService.dismissAll()
  }

  cancel(){

  }

  openModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: 'md', centered: true });
  }

  goBack(): void {
    this.location.back();
  }
}
