import { UsersService } from "./users.service";
import { NewUserModel } from "../model/new-user-model";
import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/shared/user.service";

import Swal from "sweetalert2";
import { Observable, of } from "rxjs";
import { ListUsersModel } from "../model/list-users-model";
import { HttpErrorResponse } from "@angular/common/http";
import { NgbDropdown, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NotifierService } from "angular-notifier";
import { AddSubjectToUser } from "../model/add-subject-to-user.model";
import { Role } from "../model/role";
import { AppRoleModel } from "../model/app-role-model";
import { ResourceCreated } from "src/app/shared/model/resource-created";
import { AccountStatusEnum } from "../model/account-status-enum";
import { FilterUsers } from "../model/filter-users";
import { ListUsersPage, UserPageContent } from "../model/list-users-page";
import { finalize, map } from "rxjs/operators";
import { Account } from "src/app/authentication/model/account.model";

export class UserStatus {
  enableOrDisable: boolean;
}

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  users$: Observable<ListUsersModel[]>;
  usersLength: number;
  users: ListUsersModel[] = [];
  filteredUsers: UserPageContent[] = [];
  filteredUsers$: Observable<UserPageContent[]>;
  userStatus: UserStatus = new UserStatus();
  subjects: AddSubjectToUser[] = [];
  role: Role = new Role();
  Role: any[] = [];
  selectedRoles: string[] = [];
  selectedRoleIds: string[] = [];
  submitted: boolean = false;
  moderatorLevels: string[] = [];
  adminSelected: boolean = false;
  loading: boolean = true;
  selectedUsers: any[] = [];
  moderationLevels: string;
  file!: File;
  filename: string = "";
  accountStatus: string[] = [];
  filter: FilterUsers = new FilterUsers();
  registrationStatus: string[] = ["COMPLETE", "INCOMPLETE"];
  sendingEmailVerification: boolean = false;
  downloadingFile: boolean = false;
  filterSubject: AddSubjectToUser = new AddSubjectToUser();
  filtered: boolean = false;

  appRoles$: Observable<AppRoleModel[]>;
  quickGuide = `<div class="p-4">
  <h6 class="mb-2 fw-bold text-uppercase">Introduction</h6>
  <p class="text-muted mb-4">
    This page lists all the available user accounts in a tabular format.
    Each row, represents the information of a single user.<br />
    <strong class="text-dark">Note:</strong>&nbsp;This page can only be
    accessed by a user with admin privileges or role.
  </p>

  <h6 class="mt-4 fw-bold text-uppercase">How To Add a new user</h6>
  <p class="text-muted mb-4">
    To add a new user click on the add user button. As shown in the image below;
  </p>
  <div class="row d-flex justify-content-center align-items-center">
    <div class="col-12">
      <img
        src="assets/images/snapshots/users/new_user.png"
        alt=""
        height="120"
        width="100%"
      />
    </div>
  </div>

  <p class="my-4 text-muted">
    On click of the button a registration form modal pops up. Fill In all the required fields 
    and click the <b>Create user</b> button. As shown in the image below;
  </p>
  <div class="row mb-4">
    <div class="d-flex justify-content-center align-items-center col-12">
      <img
        src="assets/images/snapshots/users/new_user_form.png"
        alt=""
        height="500"
        width="80%"
      />
    </div>
  </div>

  <ol>
    <li>
      <strong class="text-uppercase">Fullname:</strong>&nbsp;
      <span class="text-muted">The first name of the user is a required field.</span>
    </li>

    <li>
      <strong class="text-uppercase">Username:</strong>&nbsp;
      <span class="text-muted">The last name of the user is a required field.</span>
    </li>
    <li>
      <strong class="text-uppercase">Email:</strong>&nbsp;
      <span class="text-muted">The email address of the user is required and must be a valid email.</span>
    </li>
    <li>
      <strong class="text-uppercase">Role:</strong>&nbsp;
      <span class="text-muted">The role is also required. The role determines the privileges granted to a user,
        thereby limiting user activities. The roles can be either of the following; 
        Admin, Authors, Moderators or Examiners.
      </span>
    </li>
    <li>
      <strong class="text-uppercase">Subject:</strong>&nbsp;
      <span class="text-muted">The subject field is not required. However, the subject field is only made visible when the role
        being assigned to the user is either an <b>Author</b> or <b>Moderator</b>.
      </span>
    </li>
    </ol>

    <div
        class="row"
      >
      <div class="d-flex justify-content-center align-items-center col-12">
        <img
          src="assets/images/snapshots/users/users_creation_process.gif"
          alt=""
          height="500"
          width="80%"
        />
      </div>
    </div>

    <ul>
    <li>
      <h6 class="mt-4 mb-2 fw-bold text-uppercase">Admin Role</h6>
      <p class="text-muted mb-4">
        Only the admin has full access or privilege to perform any action within the application. <br />
      </p>
    </li>
    <li>
      <h6 class="mb-0 fw-bold text-uppercase">Author Role</h6>
      <p class="text-muted mb-4">
        An author’s role is to create questions and passages. An author could also edit and        
        delete questions that have not been moderated or published
      </p>
    </li>
    <li>
      <h6 class="mt-4 mb-2 fw-bold text-uppercase">Moderator Role</h6>
      <p class="text-muted mb-4">
        A moderator can only approve or reject a question
      </p>
    </li>
    <li>
      <h6 class="mt-4 mb-2 fw-bold text-uppercase">Examiner Role</h6>
      <p class="text-muted mb-4">
        The role of an examiner is to create an assessment. An examiner can also view questions and passages 
        but cannot create any
      </p>
    </li>
    </ul>

    <div>
      <h6 class="mt-4 mb-2 fw-bold text-uppercase">How To Manage a Users Account</h6>
      <p class="text-muted mb-4">Click on the actions button, it drops down a menu to select from</p>
      <div class="d-flex justify-content-center align-items-center">
        <img src="assets/images/snapshots/users/action_menu.PNG" alt="" height="150" width="50%"/>
      </div>
    </div>

    <p class="text-muted mt-4">
      Click on view and then it opens all the details of the user which includes the user details, date the user was created, 
      the total subjects of the user and the role of the user. A sample is shown below:
    </p>

    <div>

    </div>
</div>`;

  first = 0;

  rows = 20;

  showFilter: boolean = false;

  currentUser: Account;
  receivedSubjects: Array<{
    id: string;
    subjectId: string;
    subjectName: string;
  }> = [];

  constructor(
    private userService: UsersService,
    private userAccountService: UserService,
    private modalService: NgbModal,
    private notifier: NotifierService
  ) {
    this.appRoles$ = this.userService.listRoles();

    console.log(this.appRoles$);
  }

  /** Handler function for the quick guide pull out */
  onSettingsButtonClicked() {
    document.body.classList.toggle("right-bar-enabled");
    const rightBar = document.getElementById("theme-settings-offcanvas");
    if (rightBar != null) {
      rightBar.classList.toggle("show");
      rightBar.setAttribute("style", "visibility: visible;");
    }
  }

  ngOnInit(): void {
    this.accountStatus = Object.values(AccountStatusEnum);
    this.breadCrumbItems = [{ label: "Users" }];
    this.getUsers();
  }

  openNewUserModal(newUserModal: any) {
    this.modalService.open(newUserModal, { centered: true, size: "md" });
  }

  openUsersUploadModal(userUploadModal?: any) {
    this.modalService.open(userUploadModal, { centered: true, size: "md" });
  }

  dismissModal() {
    this.modalService.dismissAll();
  }
  onFileSelected($event: any) {
    this.file = $event.target.files[0];
  }

  uploadForm() {
    this.submitted = true;
    this.filename = this.file.name;
    const formData = new FormData();
    formData.append("file", this.file);
    this.userService.bulkUserUpload(formData).subscribe(
      (value) => {
        if (value) {
          this.notifier.notify("success", `${value.id}`);
          this.submitted = false;
          this.ngOnInit();
        }
      },
      (error: HttpErrorResponse) => {
        this.notifier.notify("error", `${error.error.message}`);
        this.submitted = false;
      }
    );
  }

  getUsers() {
    this.userService.listAllUsers().subscribe((value) => {
      this.users = value;
      this.users.forEach((user) => {
        user.updatingUserStatus = false;
      });
      this.users$ = of(this.users);
      this.loading = false;
    });
  }

  activateUser(user) {
    user.updatingUserStatus = true;
    if (user.activated || !user.activated) {
      this.userStatus.enableOrDisable = !user.activated;
    }
    this.userService
      .activateDeactivateUser(user.id, this.userStatus)
      .pipe(finalize(() => this.getUsers()))
      .subscribe(
        (value) => {
          if (value && user.activated) {
            user.activated = false;
            this.notifier.notify(
              "error",
              `The user was successfully deactivated.`
            );
            user.updatingUserStatus = false;
          } else {
            user.activated = true;
            this.notifier.notify(
              "success",
              "The user was successfully activated."
            );
            user.updatingUserStatus = false;
          }
        },
        (error: HttpErrorResponse) => {
          //console.log(error);
          user.updatingUserStatus = false;
          this.notifier.notify("error", `${error.error.message}`);
        }
      );
  }

  deleteUser(user: ListUsersModel): Observable<any> {
    return null;
  }

  confirmDeleteUser(user: ListUsersModel) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-danger",
        cancelButton: "btn btn-primary ms-2",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure you want to delete user " + user.username + "?",
        text: "You won't be able to revert this!",
        icon: "warning",
        confirmButtonText: "Yes, delete user!",
        cancelButtonText: "No, cancel!",
        showCancelButton: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.deleteUser(user).subscribe(
            (value) => {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                confirmButtonColor: "rgb(3, 142, 220)",
                icon: "success",
              });
              this.getUsers();
            },
            (error: HttpErrorResponse) => {}
          );
        }
      });
  }

  bulkActivateDeactivate(value: boolean) {
    let userIds = [];
    this.selectedUsers.forEach((user) => {
      userIds.push(user.id);
    });
    this.publishLoader(
      value
        ? "Activating selected accounts...please wait!"
        : "Deactivating selected accounts...please wait!"
    );
    this.userService.activateDeactivateMultipleUsers(userIds, value).subscribe(
      (value) => {
        if (value) {
          this.notifier.notify("success", `${value.id}`);
        }
        this.ngOnInit();
        Swal.close();
      },
      (error: HttpErrorResponse) => {
        this.notifier.notify("error", `${error.error.message}`);
        Swal.close();
      }
    );
  }

  resendVerificationEmail() {}

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  displayRoles(roleDropdown: NgbDropdown) {
    roleDropdown.open();
  }

  hideRoles(roleDropdown: NgbDropdown) {
    roleDropdown.close();
  }

  clearSelectedRoles() {
    //this.selectedRoles = [];
    this.role = new Role();
  }

  onAdd($event: any) {
    if (this.Role.length > 0 && $event.role === "ADMIN") {
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
      return this.notifier.notify("error", "All fields are required.");
    }
    /* if (this.Role.length === 0) {
      this.submitted = false;
      return this.notifier.notify(
        'warning',
        'A role must be assigned to a user.'
      );
    } */
    if (!this.role) {
      this.submitted = false;
      return this.notifier.notify(
        "warning",
        "A role must be assigned to a user."
      );
    }
    if (
      this.receivedSubjects.length == 0 &&
      this.role.role !== "ADMIN" &&
      this.role.role !== "EXAMINER" &&
      this.role.role !== "CENTER_ADMIN"
    ) {
      this.submitted = false;
      return this.notifier.notify(
        "error",
        "please assign at least one subject to this user!"
      );
    }
    this.mapFormToNewUser(value);
  }

  mapFormToNewUser(value: any) {
    // console.log(value);
    //let role = this.selectedRoleIds;
    let moderatorLevel = this.moderationLevels;
    let subjectIds = [];
    let user: NewUserModel = new NewUserModel();
    let role = this.role.id;
    this.receivedSubjects.forEach((value) => subjectIds.push(value.id));
    // console.log(subjectIds);
    //value.subjectIds.forEach((value) => subjectIds.push(value.subjectIds));


    console.log(value);
    user.email = value.email.trim();
    user.firstName = value.firstname.trim();
    user.lastName = value.lastname.trim();
    user.password = value.password;
    user.username = value.username;
    user.phone = value.phone.trim();
    //user.roles = role;
    user.roles.push(this.role.id);
    user.moderationLevel = moderatorLevel;
    user.subjectIds = subjectIds;

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
        // if (value) {
        Swal.fire({
          icon: "success",
          title: "Congratulations",
          html: "You have successfully created a new user!",
        });
        this.submitted = false;

        this.selectedRoles = [];
        this.Role = [];
        this.selectedRoleIds = [];
        this.ngOnInit();
        //form.reset();
        success = value;
        this.dismissModal();
        // }
      },
      (error: HttpErrorResponse) => {
        // todo: display error
        this.submitted = false;
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: `${error.error.message}`,
        });
        this.selectedRoles = [];
        this.Role = [];
        this.selectedRoleIds = [];
        this.ngOnInit();
      }
    );

    return success;
  }

  logRole(role: any) {
    // console.log(this.role);
  }

  // recieveSubject($event) {
  //   this.filter.subjectId = $event;
  //   // console.log('subject selected =>', $event);
  // }

  receiveSubjects($event) {
    this.receivedSubjects = $event;

    this.filterSubject = $event;
    console.log(this.filterSubject);
    // console.log('added subject to filter', $event);
    // console.log('assigned subject', this.subjects);
  }

  uploadCenterAdmins() {}

  deleteUsers() {
    // console.log(this.selectedUsers);
  }

  openFilter() {
    this.showFilter = !this.showFilter;
  }

  filterUsers() {
    this.loading = true;
    // console.log(this.filter);
    // empty users list
    this.users = [];
    this.filter.subjectId = this.filterSubject.id;
    this.userService.filterUsers(this.filter).subscribe(
      (value) => {
        if (value.length > 0) {
          value.forEach((user) => {
            user.updatingUserStatus = false;
          });
          this.filteredUsers = value;
          this.filteredUsers$ = of(value);
          this.filtered = true;
          this.loading = false;
        } else {
          this.filteredUsers = value;
          this.filtered = true;
          this.loading = false;
        }
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        this.notifier.notify("error", `${error.error.message}`);
      }
    );
  }

  clearFilterInputs() {
    this.filtered = false;
    this.openFilter();
    if (this.filteredUsers) {
      this.loading = false;
      this.filter = new FilterUsers();
      this.filteredUsers = [];
      this.getUsers();
    }
  }

  resendEmailVerification(user_id: string) {
    this.publishLoader("Resending email verification link(s)...please wait!");
    let data = { id: user_id };
    this.userService.resendEmailVerification(user_id, data).subscribe(
      (value) => {
        this.sendingEmailVerification = false;
        Swal.close();
        return this.notifier.notify("success", "Email verification resent!");
      },
      (error: HttpErrorResponse) => {
        this.sendingEmailVerification = false;
        Swal.close();
        return this.notifier.notify("error", `${error.error.message}`);
      }
    );
  }

  downloadUsersTemplateFile() {
    this.downloadingFile = true;
    this.publishLoader("Downloading Upload Template File....please wait");

    this.userService.downloadUsersTemplate().subscribe(
      (value) => {
        //const blob = new Blob([value], { type: 'application/octet-stream' });

        var downloadURL = window.URL.createObjectURL(value);
        var link = document.createElement("a");
        link.href = downloadURL;
        link.download = "EXAMALPHA_USERS_UPLOAD_TEMPLATE.csv";
        link.click();
        Swal.close();
        this.downloadingFile = false;
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
        Swal.close();
      }
    );
  }

  downloadUsersFile() {
    this.downloadingFile = true;
    this.publishLoader("Downloading Users List....please wait");
    this.userService.downloadAllUsersFile().subscribe(
      (value) => {
        //const blob = new Blob([value], { type: 'application/octet-stream' });

        var downloadURL = window.URL.createObjectURL(value);
        var link = document.createElement("a");
        link.href = downloadURL;
        link.download = "EXAMALPHA_USERS_LIST.csv";
        link.click();
        Swal.close();
        this.downloadingFile = false;
      },
      (error: HttpErrorResponse) => {
        this.downloadingFile = false;
        Swal.close();
      }
    );
  }

  publishLoader(msg?: string) {
    Swal.fire({
      title: msg,
      allowEnterKey: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }
}
