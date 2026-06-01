import { ResourceCreated } from './../../../shared/model/resource-created';
import { Observable } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../user/users.service';
import { NotifierService } from 'angular-notifier';

import Swal from 'sweetalert2';
import { AppRoleModel } from '../model/app-role-model';
import { NewUserModel } from '../model/new-user-model';
import { HttpErrorResponse } from '@angular/common/http';
import { ModerationLevels } from '../../moderation/models/moderation-levels';
import { AddSubjectToUser } from '../model/add-subject-to-user.model';
import { Role } from '../model/role';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  subjects: AddSubjectToUser[] = [];
  role: Role = new Role();
  Role: any[] = [];
  selectedRoles: string[] = [];
  selectedRoleIds: string[] = [];
  submitted: boolean = false;
  moderatorLevels: string[] = [];
  adminSelected: boolean = false;

  moderationLevels: string;

  appRoles$: Observable<AppRoleModel[]>;

  constructor(
    private userService: UsersService,
    private notifier: NotifierService
  ) {}

  /** Handler function for the quick guide pull out */
  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
    const rightBar = document.getElementById('theme-settings-offcanvas');
    if (rightBar != null) {
      rightBar.classList.toggle('show');
      rightBar.setAttribute('style', 'visibility: visible;');
    }
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Users' },
      { label: 'Add-User', active: true },
    ];

    this.moderatorLevels = Object.values(ModerationLevels);

    this.appRoles$ = this.userService.listRoles();
  }

  clearSelectedRoles() {
    this.selectedRoles = [];
  }

  onAdd($event: any) {
    if (this.Role.length > 0 && $event.role === 'ADMIN') {
      this.Role = []; // empties the previously added roles if any, before picking admin role
      this.Role.push($event.role); // pushes just the admin role
      this.selectedRoles = []; // empties the previously selected roles
      this.selectedRoles.push($event.role); // update the value of selected roles to just the admin
      this.selectedRoleIds = [];
      this.selectedRoleIds.push($event.id);
      return;
    } else {
      this.Role.push($event);
      this.selectedRoles.push($event.role);
      this.selectedRoleIds.push($event.id);
    }
  }

  removeRole($event: any) {
    // console.log($event.label);
    if (this.selectedRoles.includes($event.label)) {
      this.selectedRoles.splice(this.selectedRoles.indexOf($event.role));
    }
  }

  createUser(value: any) {
    this.submitted = true;
    if (value.valid === false) {
      this.submitted = false;
      return this.notifier.notify('error', 'All fields are required.');
    }
    /* if (this.Role.length === 0) {
      this.submitted = false;
      return this.notifier.notify(
        'warning',
        'A role must be assigned to a user.'
      );
    } */
    if(!this.role){
      this.submitted = false;
      return this.notifier.notify(
        'warning',
        'A role must be assigned to a user.'
      );
    }
    if (value.password !== value.confirmPassword) {
      this.submitted = false;
      return this.notifier.notify('warning', 'passwords do not match!');
    }
    this.mapFormToNewUser(value);
  }

  mapFormToNewUser(value: any) {
    //let role = this.selectedRoleIds;
    let moderatorLevel = this.moderationLevels;
    let subjectIds = [];
    let user: NewUserModel = new NewUserModel();
    let role = this.role.id;
    this.subjects.forEach((value) => subjectIds.push(value.id));
    // console.log(subjectIds);
    //value.subjectIds.forEach((value) => subjectIds.push(value.subjectIds));

    user.email = value.email.trim();
    user.firstName = value.firstname.trim();
    user.lastName = value.lastname.trim();
    user.password = value.password.trim();
    user.username = value.username.trim();
    user.phone = value.phone.trim();
    //user.roles = role;
    user.roles.push(this.role.id);
    user.moderationLevel = moderatorLevel;
    //user.subjectIds = subjectIds;

    let id = this.sendUserToServer(user);
    // console.log(user);

    if (id) {
      user = new NewUserModel();
      this.ngOnInit();
    }
  }

  sendUserToServer(user: NewUserModel): ResourceCreated {
    let success: ResourceCreated;
    this.userService.addNewUser(user).subscribe(
      (value) => {
        // todo: display success
        if (value) {
          Swal.fire({
            icon: 'success',
            title: 'Congratulations',
            html: 'You have successfully created a new user!',
          });
          this.submitted = false;
        }
        this.selectedRoles = [];
        this.Role = [];
        this.selectedRoleIds = [];
        this.ngOnInit();
        success = value;
      },
      (error: HttpErrorResponse) => {
        // todo: display error
        this.submitted = false;
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: `${error.error.errors[0]}`,
        });
        this.selectedRoles = [];
        this.Role = [];
        this.selectedRoleIds = [];
        this.ngOnInit();
      }
    );

    return success;
  }

  logRole(role: any){
    // console.log(this.role);
  }

  recievedTag($event) {
    this.subjects = $event;
    // console.log('assigned subject', this.subjects);
  }
}
