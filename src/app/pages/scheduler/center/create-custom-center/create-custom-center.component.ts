import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-create-custom-center",
  templateUrl: "./create-custom-center.component.html",
  styleUrls: ["./create-custom-center.component.scss"],
})
export class CreateCustomCenterComponent implements OnInit {
  constructor(private route: Router, private location: Location) {}

  ngOnInit(): void {}

  createCenter(name: string) {
    Swal.fire({
      title: `${name} Created Successfully`,
      // text: 'You clicked the button!',
      icon: "success",
      // showCancelButton: true,
      confirmButtonColor: "rgb(3, 142, 220)",
      cancelButtonColor: "rgb(243, 78, 78)",
      confirmButtonText: "OK",
    });

    this.route.navigate(["center"]);
  }

  cancel() {
    this.route.navigate(["center"]);
  }

  goBack(): void {
    this.location.back();
  }
}
