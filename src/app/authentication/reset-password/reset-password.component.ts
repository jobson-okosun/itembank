import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../authentication.service";
import { HttpErrorResponse } from "@angular/common/http";
import { NotifierService } from "angular-notifier";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent implements OnInit {
  step: number = 1;
  submitted: boolean = false;
  email: string = '';
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {}

  gotToNewPasswordPage() {
    this.router.navigate(["new-password"]);
  }
  validateEmail(): boolean {
    if (!this.email) {
      this.notifierService.notify("error", "Email is required");
      this.submitted = false;
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.email)) {
      this.notifierService.notify("error", "Please enter a valid email address");
      this.submitted = false;
      return false;
    }

    return true;
  }

  doPasswordReset() {
    this.submitted = true;
    if (!this.validateEmail()) {
      return;
    }

    this.authService.doPasswordReset(this.email).subscribe({
      next: (value) => {
        this.step = 2;
        this.submitted = false;
        // console.log(value);
      },
      error: (err: HttpErrorResponse) => {
        this.submitted = false;
        this.notifierService.notify("error", err.error.message);
        // console.log(err);
      },
    });
  }

  openMailApp(){
    window.location.href = "mailto:";
  }
}
