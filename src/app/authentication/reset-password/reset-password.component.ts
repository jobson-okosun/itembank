import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
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
  hasError: boolean = false

  @ViewChild('messageEl', { read: ElementRef }) messageEl!: ElementRef;

  
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private notifierService: NotifierService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {}

  gotToNewPasswordPage() {
    this.router.navigate(["new-password"]);
  }
  validateEmail(): boolean {
    if (!this.email) {
      this.hasError = true
      // this.notifierService.notify("error", "Email is required");
      this.getErrorElement().textContent = "Email is required"
      this.submitted = false;
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.email)) {
      this.hasError = true
      this.getErrorElement().textContent = "Please enter a valid email address"
      // this.notifierService.notify("error", "Please enter a valid email address");
      this.submitted = false;
      return false;
    }

    this.hasError = false
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
        this.hasError = false
        // console.log(value);
      },
      error: (err: HttpErrorResponse) => {
        this.submitted = false;
        this.hasError = true
        this.getErrorElement().textContent = err?.error?.message ? err.error.message : 'Sorry! Unable to perform reset'
        // console.log(err);
      },
    });
  }

  getErrorElement() {
    const el = (this.messageEl.nativeElement as HTMLElement);
    return el.firstElementChild
  }

  openMailApp(){
    window.location.href = "mailto:";
  }
}
