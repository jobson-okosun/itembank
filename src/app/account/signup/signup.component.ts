import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AccountService } from "../services/account.service";
import { Country, Countries } from "src/app/authentication/countries/data";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  countries: Country[] = [];
  states: string[] = [];
  signupForm!: FormGroup;
  error: boolean;
  error_msg: string;
  submitted: boolean = false;
  checkSubmit: boolean;
  http: any;
  router: any;
  step: number = 1;
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) {
    this.countries = Countries;
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", Validators.required],
      organizationName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", Validators.required],
      country: ["", Validators.required],
      state: ["", Validators.required],
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit(): void {
    this.error = false;
    this.error_msg = "";
    this.submitted = true;
    this.checkSubmit = true;

    // let whitespace =
    //   this.loginForm.controls["username"].value.indexOf(" ") >= 0;
    // if (whitespace) {
    //   this.submitted = false;
    //   this.error = true;
    //   this.error_msg = "username is invalid";
    //   return;
    // }

    // if (
    //   this.loginForm.controls["username"].value === "" ||
    //   this.loginForm.controls["password"].value === ""
    // ) {
    //   this.error_msg = `All fields are required!`;
    //   this.error = true;
    //   this.submitted = false;
    //   return;
    // }

    // if (
    //   this.loginForm.controls["username"].value ===
    //   this.loginForm.controls["password"].value
    // ) {
    //   this.error_msg = `username and password cannot have the same values!`;
    //   this.error = true;
    //   this.submitted = false;
    //   return;
    // }
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      this. signupForm.markAllAsTouched()
      this.submitted = false;
    } else {
      // let payload: AccountRegistration = {
      //   email: this.signupForm.controls['email'].value,
      //   firstName: "",
      //   lastName: "",
      //   organizationName: "",
      //   phoneNumber: "",
      // };

      this.accountService.doRegistration(this.signupForm.value).subscribe(
        (value) => {
          //todo: navigate
          // console.log(value);
          this.step = 2;

          // this.router
          //   .navigate(["examalpha"])
          //   .catch((reason) => console.log(reason));
        },
        (err: HttpErrorResponse) => {
          //todo: show error
          this.error = true;
          this.error_msg = err?.error?.message ? err.error.message : 'Sorry! Unable to perform sign in';
          
          this.submitted = false;
          /* console.log(err); */
        }
      );
    }
  }

  openMailApp(){
      window.location.href = "mailto:";
  }

  setStates() {
    this.countries.forEach((country) => {
      if (
        country.country == this.signupForm.controls["country"].value
      ) {
        this.states = country.states;
      }
    });
    // console.log(this.states);
  }
}
