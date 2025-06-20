import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

  constructor() { }
  breadCrumbItems!: Array<{}>;

  participants = [
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
  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Bank" },
      { label: "Participants", active: true },
    ];
  }

}
