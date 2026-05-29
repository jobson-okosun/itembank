import { AuthenticationService } from '../authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { AppHttpService } from 'src/app/shared/app-http.service';
import { Countries, Country } from '../countries/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  // Login Form
  SignupForm!: FormGroup;
  submitted = false;
  processing = false;
  // set the current year
  year: number = new Date().getFullYear();
  // Carousel navigation arrow show
  showNavigationArrows: any;
  countries: Country[] = [];
  states: string[] = [];
  industries: string[] = [
    'HEALTH CARE',

    'COSMETICS',

    'ENTERTAINMENT',

    'MANAGEMENT',

    'FINANCIAL',

    'ENGINEERING',

    'ARTS & DESIGN',

    'INFORMATION TECHNOLOGY',

    'EDUCATION',
  ];

  constructor(
    private formBuilder: FormBuilder,
    private httpService: AuthenticationService,
    private notifier: NotifierService,
    private appService: AppHttpService,
    private router: Router
  ) {
    // get countries
    this.countries = Countries;
  }

  setStates() {
    this.countries.forEach((country) => {
      if (country.country == this.SignupForm.controls['country'].value) {
        this.states = country.states;
      }
    });
    // console.log(this.states);
  }

  ngOnInit(): void {
    /**
     * Form Validation
     */
    this.SignupForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      phoneNumber: ['', [Validators.required]],
      username: ['', [Validators.required]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      organizationName: ['', Validators.required],
      industry: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.SignupForm.controls;
  }

  /**
   * Form submit
   */
  onSubmit(form: any) {
    this.submitted = true;
    this.processing = true;
    // stop here if form is invalid
    if (this.SignupForm.invalid) {
      // console.log(this.SignupForm);
      this.processing = false;
      return;
    }

    // console.log(form.value);

    this.httpService.registerOrganization(form.value).subscribe(
      (value) => {
        if (value) {
          this.submitted = false;
          this.processing = false;
          this.router.navigate(['/registration-success']);
        }
        /* this.notifier.notify(
          'success',
          'Congratulations, your account was created successfully!'
        ); */
      },
      (err: HttpErrorResponse) => {
        // console.log(err.status);
        this.submitted = false;
        this.processing = false;
        this.notifier.notify('error', `${err}`);
      }
    );
  }
}
