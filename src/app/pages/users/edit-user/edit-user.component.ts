import { ItemHttpService } from "./../../items/item-http.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { UserDetail } from "../model/user-detail";
import { UsersService } from "../user/users.service";
import { HttpErrorResponse } from "@angular/common/http";
import { AppRoleModel } from "../model/app-role-model";
import { ChangeUserPassword } from "../model/change-user-password.model";
import {
  catchError,
  debounce,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
  tap,
} from "rxjs/operators";
import { concat, Observable, of, Subject } from "rxjs";
import { ChangeUserDetails } from "../model/change-user-details.model";
import { AddSubjectToUser } from "../model/add-subject-to-user.model";
import { SearchTags } from "../../tags/model/search-tags.model";
import Swal from "sweetalert2";
import { DefaultUserSubjects } from "../model/default-user-subjects";
import { DropdownSubjectList } from "../../items/models/dropdown-subject-list.model";
import { NgSelectOption } from "@angular/forms";
import { Location } from "@angular/common";
import { Account } from "src/app/authentication/model/account.model";
import { UserService } from "src/app/shared/user.service";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.scss"],
})
export class EditUserComponent implements OnInit {
  userDetail: UserDetail;

  roles$: Observable<AppRoleModel[]>;

  roles: any[] = [];

  newPassword: ChangeUserPassword = new ChangeUserPassword();

  newUserDetails: ChangeUserDetails = new ChangeUserDetails();

  confirmation: string;

  userId: string;

  subjects: DropdownSubjectList[] = [];

  newSubject: AddSubjectToUser;

  selectedSubjects: DropdownSubjectList[] = [];

  deselectedSubjects: Array<DefaultUserSubjects> = [];

  selectedSubjectIds: string[] = [];

  userDefaultSubjects: Array<DefaultUserSubjects> = [];

  updating: boolean = false;

  currentUser: Account = this.userService2.getCurrentUser();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private itemService: ItemHttpService,
    private userService: UsersService,
    private userService2: UserService,
    private location: Location
  ) {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.userId = params.get("id");
    });
  }

  ngOnInit(): void {
    if (this.currentUser.authorities.includes("ADMIN")) {
      this.fetchAdminUserDetail(this.userId);
      this.itemService.fetchAllSubjectsDropdown().subscribe((value) => {
        this.subjects = value;
      });

      this.selectedSubjects = this.userDefaultSubjects;
    } else {
      this.fetchUserDetail(this.userId);
    }

    this.roles$ = this.userService.listRoles();
  }

  showSelect(event) {
    // console.log(event);
  }

  fetchAdminUserDetail(userId: string) {
    this.userService.getUserDetail(userId).subscribe(
      (value) => {
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
    this.userService.getSingleUserDetails(userId).subscribe(
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

  cancel() {
    this.location.back();
    //this.router.navigate(['/examalpha/users']);
  }

  changeUserPassword() {
    if (this.confirmation.trim() === this.newPassword.newPassword.trim()) {
      this.userService.ChangeUserPassword(this.newPassword).subscribe(
        (value) => {
          // console.log(value);
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
        }
      );
    }
  }

  updateUserDetails(updateDetailForm?: any) {
    this.updating = true;
    //console.log(updateDetailForm.value);
    this.newUserDetails.firstName = this.userDetail.firstName.trim();
    this.newUserDetails.lastName = this.userDetail.lastName.trim();
    this.newUserDetails.phone = this.userDetail.phone.trim();
    this.newUserDetails.email = this.userDetail.email.trim();
    this.newUserDetails.role = this.userDetail.userRolesDTOList[0].roleId;
    this.newUserDetails.id = this.userDetail.id;

    //console.log(this.newUserDetails);
    this.userService.updateUserDetails(this.newUserDetails).subscribe(
      (value) => {
        //console.log(value);
        this.updating = false;
        Swal.fire({
          icon: "success",
          html: "User information has been updated successfully.",
        });
      },
      (error: HttpErrorResponse) => {
        //console.log(error);
        this.updating = false;
        Swal.fire({
          icon: "error",
          html: `${error.error}`,
        });
      }
    );
  }

  recieveSubjects($events) {
    // console.log($events);
  }

  viewDeselected($event: NgSelectOption) {
    //this.deselectedSubjects = $event;
    // console.log($event.ngValue);
  }

  addSubjectToUser() {
    console.log(this.subjects, "subjects")
    console.log(this.selectedSubjects, "selected subjects")
    this.updating = true;
    //  console.log(this.selectedSubjectIds);
    console.log(this.userDefaultSubjects, "default");

    // this.selectedSubjects.forEach((subject) => {
    //   /* let newSubject = new AddSubjectToUser();
    //   newSubject.userId = this.userId; */
    //   if (this.selectedSubjectIds.includes(subject.subjectId)) {
    //     this.deselectedSubjects.push(subject.subjectName);
    //   } else {
    //     console.log(subject);
    //     console.log("here");
    //     this.selectedSubjectIds.push(subject.subjectId);
    //   }
    // });

    console.log(this.selectedSubjects, "selected");

    this.selectedSubjects.forEach((subject) => {
      if (!this.selectedSubjectIds.includes(subject.id)) {
        this.selectedSubjectIds.push(subject.id);
      }
    });

    console.log("Default Subjects1:", this.userDefaultSubjects);
    console.log("Selected Subjects1:", this.selectedSubjects);
    const removedSubjects = this.userDefaultSubjects.filter((subject) =>
      !this.selectedSubjects.some((selected) => selected.subjectName === subject.subjectName)
    );

    this.deselectedSubjects = removedSubjects;

    console.log("Removed Subjects:", removedSubjects);

    console.log(this.selectedSubjectIds, "selectedSubjectIds");

    // return;

    this.newSubject = {
      id: "",
      userId: this.userId,
      subjectIds: this.selectedSubjectIds,
    };

    if (this.deselectedSubjects.length > 0) {
      // Get names of removed subject
      const removedSubjectNames =  removedSubjects.map(subject => subject.subjectName).join(", ")
      
      // this.subjects
      //     .filter(subject => removedSubjects.includes(subject.id))
      //     .map(subject => subject.subjectName)
      //     .join(", ");

      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: `Are you sure you want to remove the following subject(s): ${
          removedSubjectNames
        } from ${this.userDetail.username.toUpperCase()}?`,
        showCancelButton: true,
        confirmButtonText: "Yes, remove them!",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          // Proceed with the removal
          this.selectedSubjectIds = this.selectedSubjectIds.filter(
            (id) => !removedSubjects.some((removed) => removed.subjectId === id)
          );
        
          console.log("Updated selectedSubjectIds:", this.selectedSubjectIds);
          this.updateSubjectAssignment();
        }
      });
    } else {
      this.updateSubjectAssignment();
    }

    console.log(this.newSubject);
    console.log(this.selectedSubjectIds);

    // return;
  }

  updateSubjectAssignment() {
    this.userService
      .addremoveSubjectFromUser(this.newSubject)
      .toPromise()
      .then((response) => {
        if (response) {
          this.updating = false;
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: `You successfully assigned ${
              this.selectedSubjectIds.length
            } subject(s) to ${this.userDetail.username.toUpperCase()}`,
          });
        }
      })
      .catch((error: HttpErrorResponse) => {
        this.updating = false;
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: error.error.message,
        });
      });
  }

  editUserModerationLevels() {}
}
