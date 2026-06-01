import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Center } from "./center.model";
import { CenterData } from "./data";
import Swal from "sweetalert2";

@Component({
  selector: "app-center",
  templateUrl: "./center.component.html",
  styleUrls: ["./center.component.scss"],
})
export class CenterComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  centerName: string = "";
  centers: Array<any> = [];
  backgroundColor: any[] = [
    { name:"bg-soft-primary", text: "text-primary"},
    {name:"bg-soft-info", text:"text-info"},
   { name:"bg-soft-secondary", text: "text-secondary"},
   { name:"bg-soft-success", text: "text-success"},
    {name:"bg-soft-danger", text: "text-danger"}
  ];

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Tables" },
      { label: "Center", active: true },
    ];

    this.centers = CenterData;
    this.generateRandomBackground();
  }

  viewCenter(centerName: string) {
    this.route.navigate(["schedule/center", centerName, "details"]);
  }
  createCustomCenter(): void {
    this.route.navigate(["schedule/center/create/custom"]);
  }

  createFrombetaExamCenter(): void {
    this.route.navigate(["schedule/center/create/beta-exam"]);
  }

  confirm(index: number) {
    Swal.fire({
      title: "Are you sure you want to delete this center?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(3, 142, 220)",
      cancelButtonColor: "rgb(243, 78, 78)",
      confirmButtonText: "Yes, delete center!",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: "Center Deleted!",
          text: "You have deleted center successfully.",
          confirmButtonColor: "rgb(3, 142, 220)",
          icon: "success",
        });
        this.deleteCenter(index);
      }
    });
  }

  deleteCenter(index: number) {
    this.centers.splice(index, 1);
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  generateRandomBackground(): void {
    this.centers.forEach((center) => {
      center.backgroundColor = this.backgroundColor[this.generateRandomIndex()];
      
    });
  }

  generateRandomIndex(): number {
    const randomIndex = Math.floor(Math.random() * this.backgroundColor.length);
    // console.log(randomIndex)
    return randomIndex;
  }

  editCenter():void{
    this.route.navigate(['schedule/center/edit/custom-center'])
  }
}
