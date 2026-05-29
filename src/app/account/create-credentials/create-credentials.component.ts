import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AccountService } from "../services/account.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-create-credentials",
  templateUrl: "./create-credentials.component.html",
  styleUrls: ["./create-credentials.component.scss"],
})
export class CreateCredentialsComponent implements OnInit {
  credentialsForm!: FormGroup;
  error: boolean;
  error_msg: string;
  submitted: boolean = false;
  checkSubmit: boolean;
  step: number = 1;
  http: any;

  token: string = "";
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.token = this.ar.snapshot.params["id"];
    console.log(this.token, "token");

    this.credentialsForm = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", Validators.required],
      token: [this.token],
    });
  }

  get f() {
    return this.credentialsForm.controls;
  }

  onSubmit(): void {
    this.error = false;
    this.error_msg = "";
    this.submitted = true;
    this.checkSubmit = true;
    // this.step = 2;
    let whitespace =
      this.credentialsForm.controls["username"].value.indexOf(" ") >= 0;
    if (whitespace) {
      this.submitted = false;
      this.error = true;
      this.error_msg = "username is invalid";
      return;
    }

    if (
      this.credentialsForm.controls["username"].value === "" ||
      this.credentialsForm.controls["password"].value === ""
    ) {
      this.error_msg = `All fields are required!`;
      this.error = true;
      this.submitted = false;
      return;
    }

    if (
      this.credentialsForm.controls["username"].value.trim() ===
      this.credentialsForm.controls["password"].value.trim()
    ) {
      this.error_msg = `username and password cannot have the same values!`;
      this.error = true;
      this.submitted = false;
      return;
    }
    // stop here if form is invalid
    if (this.credentialsForm.invalid) {
      this.submitted = false;
    } else {
      this.accountService.setCredentials(this.credentialsForm.value).subscribe(
        (value) => {
          //todo: navigate
          // console.log(value);

          this.router
            .navigate(["/"])
            .catch((reason) => console.log(reason));
        },
        (err: HttpErrorResponse) => {
          //todo: show error
          this.error = true;

          this.error_msg = err.error.message;

          this.submitted = false;
          /* console.log(err); */
        }
      );
    }
  }
  openMailApp() {
    window.location.href = "mailto:";
  }
}
