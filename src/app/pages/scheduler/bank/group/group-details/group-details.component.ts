import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

import { ActivatedRoute, Router } from "@angular/router";
import { ParticipantModel } from "./participant.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: "app-group-details",
  templateUrl: "./group-details.component.html",
  styleUrls: ["./group-details.component.scss"],
})
export class GroupDetailsComponent implements OnInit {
  ordersForm!: FormGroup;
  submitted = false;
  
  breadCrumbItems!: Array<{}>;
  // projectList!: projectListModel[];
  // document!: documentModel[];
  groupName: string = "";
  CustomersData: Array<any> = [];

  participants: Array<ParticipantModel> = [
    {
      id: "27",
      firstName: "Jo",
      lastName: "Soe",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      passport: "passport url",
      department: "Mathematics",
    },
    {
      id: "17",
      firstName: "Doris",
      lastName: "Poe",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      passport: "passport url",
      department: "Accounting",
    },
    {
      id: "7",
      firstName: "Dorcas",
      lastName: "King",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      passport: "passport url",
      department: "Mechanic",
    },
    {
      id: "90",
      firstName: "Angella",
      lastName: "Smith",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      passport: "passport url",
      department: "Banking and Finance",
    },
    {
      id: "7",
      firstName: "Paschal",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      passport: "passport url",
      department: "Electrician",
    },
    {
      id: "127",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      phoneNumber: "0192010921021",
      passport: "passport url",
      department: "Accounting",
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private locationService: Location,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      //  console.log(params["groupName"])
      this.groupName = params["groupName"];
    });
    this.breadCrumbItems = [
      { label: 'Group' },
      { label: 'Details', active: true }
    ];
  }

  deleteParticipant(index: number) {
    this.participants.splice(index, 1);
  }
  openParticipantModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openImportModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openMoveParticipantModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openCopyParticipantModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
  openGroupNameEditModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }
openCustomFieldPage(){
this.router.navigate(['/schedule/bank/group/custom-field-settings'])
}
  addParticipant() {
    Swal.fire({
      title: `Created Successfully`,
      // text: 'You clicked the button!',
      icon: "success",
      // showCancelButton: true,
      confirmButtonColor: "rgb(3, 142, 220)",
      cancelButtonColor: "rgb(243, 78, 78)",
      confirmButtonText: "OK",
    });
    this.modalService.dismissAll();
    // this.router.navigate(['group',this.groupName,'details' ])
  }
  moveParticipant() {}

  copyPartcipant() {}

  editGroupName() {}

  cancel() {
    this.router.navigate(["group", this.groupName, "details"]);
    this.modalService.dismissAll();
  }
  goBack():void{
    this.locationService.back()
  }
}
