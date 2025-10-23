import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivateUsernamePassword } from 'src/app/pages/scheduler/models/resource-created';
import { timer } from 'rxjs';

@Component({
  selector: 'app-invitation-join',
  templateUrl: './invitation-join.component.html',
  styleUrls: ['./invitation-join.component.scss']
})
export class InvitationJoinComponent implements OnInit {
  id: string
  form!: FormGroup;
  error_msg = "";
  error: boolean = false;
  isLoading: boolean = false

  constructor(
    private ar: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ar.queryParamMap.subscribe((route) => {
      this.id = route.get('id')
    })

    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required],
      id: [this.id],
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: FormGroup) {
    const password = g.get('password')?.value;
    const confirmPassword = g.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { 'mismatch': true };
  }

  onSubmit(): void {
    if(this.form.invalid) {
      console.log('invalid form')
      this.form.markAllAsTouched()
      return
    }

    const { username, password, id } = this.form.value
    const payload: ActivateUsernamePassword = {username, password, token: id}
    this.isLoading = true

    this.authService.updateExistingUserUsernameAndPassword(payload).subscribe(
      (value) => {
        // this.isLoading = false;
        this.error = false;
        this.error_msg = 'Your account has been successfully updated!'

        timer(3000).subscribe(() => {
          location.assign('/sign-in')
        })
      },
      (err: HttpErrorResponse) => {
        this.error = true;
        this.error_msg = err.error?.message ?? 'Sorry! Unable to make request';
        this.isLoading = false;
      }
    );
  }

  navigateToLogin() {
    this.router.navigate(["/"]);
  }
}
