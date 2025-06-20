import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: "app-new-password",
  templateUrl: "./new-password.component.html",
  styleUrls: ["./new-password.component.scss"],
})
export class NewPasswordComponent implements OnInit {
  token: string = "";
  newPasswordForm!: FormGroup;
  submitted = false;
  error_msg = "";
  error: boolean = false;
  checkSubmit: boolean = false;
  step: number = 1;
  constructor(
    private ar: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.token = this.ar.snapshot.params["id"];

    this.newPasswordForm = this.formBuilder.group({
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required],
      token: [this.token],
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(g: FormGroup) {
    const password = g.get('password')?.value;
    const confirmPassword = g.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { 'mismatch': true };
  }

  onSubmit(): void {
    this.error = false;
    this.error_msg = "";
    this.submitted = true;
    this.checkSubmit = true;

    if (this.newPasswordForm.controls["password"].value === "" || 
        this.newPasswordForm.controls["confirmPassword"].value === "") {
      this.error_msg = `All fields are required!`;
      this.error = true;
      this.submitted = false;
      return;
    }

    // stop here if form is invalid
    if (this.newPasswordForm.invalid) {
      this.submitted = false;
      if (this.newPasswordForm.errors?.['mismatch']) {
        this.error = true;
        this.error_msg = "Passwords do not match!";
      }
      return;
    }

    const submitData = {
      password: this.newPasswordForm.controls["password"].value,
      token: this.token
    };

    this.authService.setNewPassword(submitData).subscribe(
      (value) => {
        this.step =2;
        this.submitted = false;
      },
      (err: HttpErrorResponse) => {
        this.error = true;
        console.log(err);
        this.error_msg = err.error.message;
        this.submitted = false;
      }
    );
  }

  navigateToLogin() {
    this.router.navigate(["/"]);
  }

  get f() {
    return this.newPasswordForm.controls;
  }
}
