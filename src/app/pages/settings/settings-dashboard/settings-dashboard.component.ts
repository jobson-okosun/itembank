import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { Subscription } from 'rxjs';
import { Country, Countries } from 'src/app/authentication/countries/data';
import { Account } from 'src/app/authentication/model/account.model';
import { matchPasswordValidator } from 'src/app/core/helpers/validation';
import {
  Organization,
  UpdateOrganization,
  UpdatePassword,
} from 'src/app/core/models/settings';
import { SettingsService } from 'src/app/services/settings/settings.service';
import { Role } from 'src/app/shared/enum/role';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/shared/user.service';
import { Location } from '@angular/common';
import { UsersService } from '../../users/user/users.service';
import { ChangeUserDetails } from '../../users/model/change-user-details.model';
import { UserDetail } from '../../users/model/user-detail';
import { DefaultUserSubjects } from '../../users/model/default-user-subjects';
import { number } from 'echarts';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-settings-dashboard',
  templateUrl: './settings-dashboard.component.html',
  styleUrls: ['./settings-dashboard.component.scss'],
})
export class SettingsDashboardComponent implements OnInit, OnDestroy {

  countries: Country[] = [];
  states: string[] = [];
  submitted: boolean = false;
  isSubmittingAccountSetting: boolean = false;
  isChangingPassword: boolean = false;
  editOrganizationSettingsSubscription!: Subscription;
  getOrganizationProfileSubscription!: Subscription;
  changePasswordSubscription!: Subscription;
  currentUser!: Account;
  Role = Role;
  updatingPersonalInfo: boolean = false;
  newUserDetails: ChangeUserDetails = new ChangeUserDetails();
  userDetail: UserDetail;
  userDefaultSubjects: Array<DefaultUserSubjects> = [];
  roles: any[] = [];
  inputtedOrganizationNameToDelete: string = 'make@321654987';
  organizationName: string = '';

  @ViewChild('deleteAccountConfirmationModal') deleteAccountConfirmationModal: any;

  pendingAccountDelete: () => void | null = null;

  changePasswordForm: FormGroup = this.formBuilder.group(
    {
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: [matchPasswordValidator],
    }
  );
  accountSettingsForm: FormGroup = this.formBuilder.group({
    organizationName: ['', Validators.required],
    industry: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required],
    addressLine1: [''],
    addressLine2: [''],
  });

  personalInfoForm: FormGroup;

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
    private userService: UserService,
    private usersService: UsersService,
    private settingsService: SettingsService,
    private notifierService: NotifierService,
    private location: Location,
    private modalService: NgbModal
  ) {
    this.countries = Countries;
  }

  ngOnDestroy(): void {
    if (this.editOrganizationSettingsSubscription) {
      this.editOrganizationSettingsSubscription.unsubscribe;
    }

    if (this.getOrganizationProfileSubscription) {
      this.getOrganizationProfileSubscription.unsubscribe;
    }

    if (this.changePasswordSubscription) {
      this.changePasswordSubscription.unsubscribe;
    }
  }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();

    if (this.currentUser.authorities.includes(this.Role.ADMIN)) {
      this.fillOrganizationForm();
      this.fetchAdminUserDetail(this.currentUser.id);
    } else {
      this.fetchUserDetail(this.currentUser.id);
    }

    this.initPersonalInfoForm();
  }

  fetchAdminUserDetail(userId: string) {
    this.usersService.getUserDetail(userId).subscribe(
      (value: UserDetail) => {
        // console.log(value);
        this.userDetail = value;
        this.userDetail.userSubjectsDTOS.forEach((subject) => {
          this.userDefaultSubjects.push(subject);
        });

        value.userRolesDTOList.forEach((role) => {
          this.roles.push(role.role);
          this.userDetail.role = role.role;
        });
        // console.log(this.roles);
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }

  fetchUserDetail(userId: string) {
    this.usersService.getSingleUserDetails(userId).subscribe(
      (value) => {
        // console.log(value);
        this.userDetail = value;
        /* this.userDetail.userSubjectsDTOS.forEach((subject) => {
          this.userDefaultSubjects.push(subject);
        }); */

        value.userRolesDTOList.forEach((role) => {
          this.roles.push(role.role);
          this.userDetail.role = role.role;
        });
        // console.log(this.roles);
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }

  setStates() {
    this.countries.forEach((country) => {
      if (
        country.country == this.accountSettingsForm.controls['country'].value
      ) {
        this.states = country.states;
      }
    });
    // console.log(this.states);
  }

  get f() {
    return this.accountSettingsForm.controls;
  }

  submitAccountSetting(): void {
    if (this.accountSettingsForm.invalid) {
      this.accountSettingsForm.markAllAsTouched();
      return;
    }

    this.isSubmittingAccountSetting = true;

    const organization: UpdateOrganization = this.accountSettingsForm.value;

    const payload: UpdateOrganization = {
      organizationName: organization.organizationName
        ? organization.organizationName
        : null,
      country: organization.country ? organization.country : null,
      state: organization.state ? organization.state : null,
      industry: organization.industry ? organization.industry : null,
      addressLine1: organization.addressLine1
        ? organization.addressLine1
        : null,
      addressLine2: organization.addressLine2
        ? organization.addressLine2
        : null,
    };

    this.editOrganizationSettingsSubscription = this.settingsService
      .editOrganizationSettings(payload)
      .subscribe({
        next: (res: { id: string }) => {
          this.isSubmittingAccountSetting = false;
          this.notifierService.notify('success', 'Successfull');
        },
        error: (err: HttpErrorResponse) => {
          this.isSubmittingAccountSetting = false;
          // console.log(err);
          this.notifierService.notify(
            'error',
            err.error.message ?? 'Sorry! Unable to perform update'
          );
        },
      });
  }

  submitChangePassword(): void {
    if (this.changePasswordForm.invalid) {
      this.changePasswordForm.markAllAsTouched();
      return;
    }

    this.isChangingPassword = true;

    const changePasswordDetail: UpdatePassword = this.changePasswordForm.value;

    const payload = {
      oldPassword: changePasswordDetail.oldPassword,
      newPassword: changePasswordDetail.newPassword,
    };

    console.log('CHANGE PASSWORD: ', payload);

    this.changePasswordSubscription = this.settingsService
      .changePassword(payload)
      .subscribe({
        next: (res) => {
          this.changePasswordForm.setValue({
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
          });
          this.changePasswordForm.markAsUntouched();
          this.isChangingPassword = false;
          this.notifierService.notify('success', 'Successful');
        },
        error: (error: HttpErrorResponse) => {
          this.isChangingPassword = false;
          this.notifierService.notify(
            'error',
            error.error.message ?? 'Sorry! Unable to perform change'
          );
        },
      });
  }

  updateUserDetails(): void {
    this.updatingPersonalInfo = true;

    this.newUserDetails.firstName = this.userDetail.firstName.trim();
    this.newUserDetails.lastName = this.userDetail.lastName.trim();
    this.newUserDetails.phone = this.userDetail.phone.trim();
    this.newUserDetails.email = this.userDetail.email.trim();
    this.newUserDetails.role = this.userDetail.userRolesDTOList[0].roleId;
    this.newUserDetails.id = this.userDetail.id;

    //console.log(this.newUserDetails);

    this.usersService.updateUserDetails(this.newUserDetails).subscribe(
      (value) => {
        //console.log(value);
        this.updatingPersonalInfo = false;
        Swal.fire({
          icon: 'success',
          html: 'User information has been updated successfully.',
        });
      },
      (error: HttpErrorResponse) => {
        //console.log(error);
        this.updatingPersonalInfo = false;
        Swal.fire({
          icon: 'error',
          html: `${error.error}`,
        });
      }
    );
  }

  cancel() {
    this.location.back();
  }

  resetAccountSettingForm(): void {
    this.accountSettingsForm.setValue({
      organizationName: '',
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      industry: '',
      state: '',
      country: '',
      addressLine1: '',
      addressLine2: '',
    });
  }

  fillOrganizationForm(): void {
    this.getOrganizationProfileSubscription = this.settingsService
      .getOrganizationProfile()
      .subscribe({
        next: (org: Organization) => {
          console.log('ORGANIZATION: ', org);
          this.organizationName = org.organizationName;
          this.accountSettingsForm.setValue({
            organizationName: org.organizationName ?? '',
            industry: org.industry ?? '',
            state: org.state ?? '',
            country: org.country ?? '',
            addressLine1: org.addressLine1 ?? '',
            addressLine2: org.addressLine2 ?? '',
          });

          const country = this.accountSettingsForm.get('country').value;

          if (country) {
            this.setStates();
          }
        },
        error: (err: HttpErrorResponse) => {
          this.notifierService.notify(
            'error',
            err.error.message ?? 'Sorry! Unable to fetch record'
          );
        },
      });
  }

  initPersonalInfoForm(): void {
    this.personalInfoForm = this.formBuilder.group({
      username: [
        {
          value: '',
          disabled: !this.currentUser.authorities.includes('ADMIN'),
        },
      ],
      firstName: [''],
      lastName: [''],
      phone: [''],
      email: [''],
    });
  }

  showConfirmationDeleteModal(action: () => void): void {
    this.pendingAccountDelete = action;
    this.modalService.open(this.deleteAccountConfirmationModal, { centered: true });
  }

  deleteAccount(showConfirmationModal: boolean = false): void {     
    if(!showConfirmationModal) {
      this.showConfirmationDeleteModal(() => this.deleteAccount(true));
      return;
    } 
    console.log('THIS ACCOUNT HAS DELETED');  
  }


  proceedWithDelete(): void {
    if(this.pendingAccountDelete){
      this.pendingAccountDelete();
      this.pendingAccountDelete = null;
    }
  }
  
  sendComplain(): void {
    console.log('SEND COMPLAIN');
  }

}