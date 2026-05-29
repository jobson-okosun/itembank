
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Group } from './group.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  submitted = false;
  groups: Array<Group> = [
    {
      id: '1342',
      name: 'Noah GROUP',
      participants: ["samuel", 'david', 'paschal'],
      dateCreated: "Nov 14, 2021",
      numberOfParticipant: 20
    },
    {
      id: '12564',
      name: 'OAU GROUP',
      participants: ["samuel", 'david', 'paschal'],
      dateCreated: "Nov 14, 2021",
      numberOfParticipant: 880
    },
    {
      id: '1232',
      name: 'ABUJA GROUP',
      participants: ["samuel", 'david', 'paschal'],
      dateCreated: "Nov 14, 2021",
      numberOfParticipant: 700
    },
    {
      id: '32',
      name: 'JABI GROUP',
      participants: ["samuel", 'david', 'paschal'],
      dateCreated: "Nov 14, 2021",
      numberOfParticipant: 7340
    },
    {
      id: '332',
      name: 'AKURE GROUP',
      participants: ["samuel", 'david', 'paschal'],
      dateCreated: "Nov 14, 2021",
      numberOfParticipant: 900
    },
    {
      id: '3432',
      name: 'LAGOS GROUP',
      participants: ["samuel", 'david', 'paschal'],
      dateCreated: "Nov 14, 2021",
      numberOfParticipant: 439
    },

  ]
  constructor(private modalService: NgbModal, private route: Router) { }


  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Tables' },
      { label: 'Group', active: true }
    ];
  }


  editGroupName() {
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
  addParticipant(index: number) {

  }
  deleteParticipant(index: number) {
    this.groups[index].participants = []
    this.groups[index].numberOfParticipant = 0;
  }

  confirm(index: number) {
    Swal.fire({
      title: "Are you sure you want to delete this group?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(3, 142, 220)",
      cancelButtonColor: "rgb(243, 78, 78)",
      confirmButtonText: "Yes, delete group!",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: "Group Deleted!",
          text: "You have deleted group successfully.",
          confirmButtonColor: "rgb(3, 142, 220)",
          icon: "success",
        });
        this.deleteGroup(index);
      }
    });
  }
  deleteGroup(index: number) {
    this.groups.splice(index, 1);
    // console.log('deleted');
  }
  openDetails(groupName: string) {
    this.route.navigate(['schedule/bank/group', groupName, 'details'])
  }

  createGroup() {
    this.route.navigate(['schedule/bank/group/create'])
  }
  openImportModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: 'md', centered: true });
  }

  openGroupNameModal(content: any) {
    this.modalService.open(content, { size: 'md', centered: true });
  }
  addGroup() {
    Swal.fire({
      title: `Created Successfully`,
      // text: 'You clicked the button!',
      icon: 'success',
      // showCancelButton: true,
      confirmButtonColor: 'rgb(3, 142, 220)',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'OK'
    });
    this.modalService.dismissAll()
  }

  cancel() {
    this.modalService.dismissAll()
  }

  stopPropagation(event: Event) {
    event.stopPropagation()
  }
}
