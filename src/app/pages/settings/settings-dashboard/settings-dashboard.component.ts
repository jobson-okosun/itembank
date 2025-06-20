import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Country, Countries } from "src/app/authentication/countries/data";
import { Account } from "src/app/authentication/model/account.model";
import { UserService } from "src/app/shared/user.service";

@Component({
  selector: "app-settings-dashboard",
  templateUrl: "./settings-dashboard.component.html",
  styleUrls: ["./settings-dashboard.component.scss"],
})
export class SettingsDashboardComponent implements OnInit {
  countries: Country[] = [];
  states: string[] = [];
  submitted: boolean = false

  accountSettingsForm: FormGroup = this.formBuilder.group({
    organizationName: ["", Validators.required],
    industry: ["", Validators.required],
    state: ["", Validators.required],
    country: ["", Validators.required],
    addressLine1: [""],
    addressLine2: [""],
  });
  industries: string[] = [
    "HEALTH CARE",

    "COSMETICS",

    "ENTERTAINMENT",

    "MANAGEMENT",

    "FINANCIAL",

    "ENGINEERING",

    "ARTS & DESIGN",

    "INFORMATION TECHNOLOGY",

    "EDUCATION",
  ];
  currentUser!:Account;
  constructor(private formBuilder: FormBuilder,  private userService: UserService,) {
    this.countries = Countries;
  }

  ngOnInit(): void {
   this.currentUser=  this.userService.getCurrentUser()
  }

  setStates() {
    this.countries.forEach((country) => {
      if (
        country.country == this.accountSettingsForm.controls["country"].value
      ) {
        this.states = country.states;
      }
    });
    // console.log(this.states);
  }

  get f() {
    return this.accountSettingsForm.controls;
  }
}
