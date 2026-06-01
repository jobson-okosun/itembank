import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { SchedulerAuthService } from "../services/scheduler-auth.service";
import { NotifierService } from "angular-notifier";
import { SchedulerAccountService } from "../services/scheduler-account.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})

/**
 * Login Component
 */
export class LoginComponent implements OnInit {
  // Login Form
  loginForm!: FormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error_msg = "";
  returnUrl!: string;
  notification_error = "";
  // set the current year
  year: number = new Date().getFullYear();
  checkSubmit: boolean = false;
  error: boolean = false;
  showNavigationArrows: any;

  constructor(
    private formBuilder: FormBuilder,
    private notifierService: NotifierService,
    private router: Router,
    private schedulerAuthService: SchedulerAuthService,
    private schedulerAccountService: SchedulerAccountService
  ) {}

  ngOnInit(): void {
    /**
     * Form Validatyion
     */
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.error = false;
    this.error_msg = "";
    this.submitted = true;
    this.checkSubmit = true;
    let whitespace =
      this.loginForm.controls["username"].value.indexOf(" ") >= 0;
    if (whitespace) {
      this.submitted = false;
      this.error = true;
      this.error_msg = "username is invalid";
      return;
    }
    // console.log(this.loginForm.value);
    this.router
      .navigate(["/schedule/login"])
      .catch((reason) => console.log(reason));

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.submitted = false;
    } else {
      this.schedulerAuthService.doLogin(this.loginForm.value).subscribe(
        (value) => {
          //todo: navigate
          // console.log(value);
          this.schedulerAccountService.setCurrentUser(value);
          this.router
            .navigate(["/schedule/dashboard"])
            .catch((reason) => console.log(reason));
        },
        (err: HttpErrorResponse) => {
          // console.log(err.error.error);
          this.error = true;
          this.error_msg = err.error.error;
          this.submitted = false;
          this.notifierService.notify("error", err.error.error);
        }
      );
    }
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
