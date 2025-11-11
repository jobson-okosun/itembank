import { SubjectService } from "./../subject.service";
import { HttpErrorResponse } from "@angular/common/http";
import Swal from "sweetalert2";
import { ItemHttpService } from "./../item-http.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NewSubject } from "../models/new-subject.model";
import { ListAllSubjects } from "../models/list-all-subjects.model";
import { NewTopic } from "../models/new-topic.model";
import { UserService } from "src/app/shared/user.service";
import { Account } from "src/app/authentication/model/account.model";
import { NotifierService } from "angular-notifier";
import { Router } from "@angular/router";
import { AllPassagesService } from "../../passages/list-passages/all-passages.service";
import { ItemDetails, ItemUtilitiesService } from "../item-utilities.service";

export interface RenameSubjectModel {
  subjectName: string;
  subjectId: string;
  subjectCode: string;
}

@Component({
  selector: "app-all-subjects",
  templateUrl: "./all-subjects.component.html",
  styleUrls: ["./all-subjects.component.scss"],
})
export class AllSubjectsComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  allSubjects: ListAllSubjects[] = [];
  subjects: ListAllSubjects[] = [];
  currentSubject: ListAllSubjects = new ListAllSubjects();
  newSubject: NewSubject = new NewSubject();
  editSubject: NewSubject = new NewSubject();
  newTopic: NewTopic = new NewTopic();
  topicName: string = "";
  editSubjectName: string;
  submitted: boolean = false;
  currentUser: Account;
  first: number;
  rows: number = 10;
  searchSubject!: string;
  quickGuide = `<div class="p-4">
  <h6 class="mb-2 fw-bold text-uppercase">Introduction</h6>
  <p class="text-muted mb-4">
    This page provides a summary of all subjects, each accompanied by its unique subject code, 
    presented as individual subject cards. Each card also displays the total number of associated 
    passages and questions. Here, you can perform various actions, including creating a new subject, 
    renaming existing ones, and searching for specific subjects.
  </p>

  <h6 class="mt-4 fw-bold text-uppercase">How to Create a New Subject</h6>
  <p class="text-muted mb-4">To create a new Subject, follow these simple steps:</p>
  <ol>
    <li>
      Click the "New Subject" at the right-corner, a window will appear, allowing you to input subject details.
      <div class="d-flex justify-content-center align-items-center col-12">
        <img
          src="assets/images/snapshots/users/users_creation_process.gif"
          alt=""
          height="500"
          width="80%"
        />
      </div>
    </li>
  </ol>
  </div>`;
  loading: boolean = true;
  showNotifications: boolean = false;
  proccessingSubjectUpload: boolean = false

  constructor(
    private modal: NgbModal,
    private router: Router,
    private itemService: ItemHttpService,
    private subjectService: SubjectService,
    private passageService: AllPassagesService,
    private userService: UserService,
    private notifier: NotifierService,
    private itemUtil: ItemUtilitiesService,
  ) { }

  onSettingsButtonClicked() {
    document.body.classList.toggle("right-bar-enabled");
    const rightBar = document.getElementById("theme-settings-offcanvas");
    if (rightBar != null) {
      rightBar.classList.toggle("show");
      rightBar.setAttribute("style", "visibility: visible;");
    }
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: "Subjects" }];
    this.currentUser = this.userService.getCurrentUser(); // Fetching current user information

    if (this.currentUser.authorities.includes("ADMIN")) {
      // If current user role is ADMIN fetch all subjects from within the item bank
      this.itemService.fetchAllSubjectsItems().subscribe(
        (value) => {
          this.allSubjects = value;
          this.loading = false;
          //console.log(this.allSubjects);
        },
        (error: HttpErrorResponse) => {
          //console.log(error);
          this.loading = false;
          this.notifier.notify("error", `${error.error.msg}`);
        }
      );
    } else {
      // if current user role is not an ADMIN fetch subjects assigned to the current user
      this.itemService.fetchAllSubjectsNonAdmin().subscribe(
        (value) => {
          this.allSubjects = value;
          this.loading = false;
          //console.log(this.allSubjects);
        },
        (error: HttpErrorResponse) => {
          //console.log(error);
          this.loading = false;
          this.notifier.notify("error", `${error.error.msg}`);
        }
      );
    }
  }

  filterSubjects() {
    let filteredSubjects = [];
    if (this.subjects.length == 0) {
      this.subjects = this.allSubjects;
    }
    // console.log(this.searchSubject);
    if (this.searchSubject) {
      for (let i = 0; i <= this.searchSubject.length; i++) {
        this.allSubjects.filter((subject) => {
          if (
            subject.name.startsWith(this.searchSubject.toLowerCase()) &&
            !filteredSubjects.includes(subject)
          ) {
            filteredSubjects.push(subject);
            //return subject;
          }
        });
      }
    }
    this.allSubjects = filteredSubjects;
    if (this.allSubjects.length === 0) {
      this.allSubjects = this.subjects;
      this.subjects = [];
    }

    // console.log(filteredSubjects);
  }

  onSubjectPageChange(event: any) { }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.allSubjects
      ? this.first === this.allSubjects.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.allSubjects ? this.first === 0 : true;
  }

  setSubjectId(subject: ListAllSubjects) {
    this.itemService.setSubjectId(subject.subjectId);
    this.itemService.totalItemsInCurrentSubject = subject.totalItems;
    this.itemService.setSubjectName(subject.name);
    this.itemService.currentSubjectModerationEnabled = subject.moderationId
      ? true
      : false;

    //this.router.navigate(['/examalpha/passages/subjects/' + subject.name])
  }

  gotoPassages(subject: ListAllSubjects) {
    this.passageService.subjectId = subject.subjectId;
    this.passageService.subjectName = subject.name;
    this.itemService.currentSubjectModerationEnabled = subject.moderationId
      ? true
      : false;
    this.router.navigate(["/examalpha/passages/subjects/" + subject.subjectId]);
  }

  gotoSubjectAnalysis(subject: any) {
    this.itemService.subjectName = subject.name;
    const trail: ItemDetails = {
      subjectId: null,
      subjectName: subject.name
    }
    this.itemUtil.saveCurrentItemTrail(trail)

    this.router.navigate([
      "/examalpha/subjects/" + subject.subjectId + "/analysis",
    ]);
  }

  showApprovedQuestions(subject: any) {
    /* this.router.navigate([
      '/examalpha/notifications/subject/' +
        subject.subjectId +
        '/status/' +
        'ACCEPTED',
    ]); */
    this.itemService.subjectName = subject.name;
    this.router.navigate([
      "/examalpha/subjects/" + subject.subjectId + "/status/" + "accepted",
    ]);
  }

  showRejectedQuestions(subject) {
    //routerLink="/examalpha/notifications/{{subject.name}}/{{subject.subjectId}}/status/{{'REJECTED'}}"
    /* this.router.navigate([
      '/examalpha/notifications/subject/' +
        subject.subjectId +
        '/status/' +
        'REJECTED',
    ]); */
    this.itemService.subjectName = subject.name;
    this.router.navigate([
      "/examalpha/subjects/" + subject.subjectId + "/status/" + "rejected",
    ]);
  }

  // Action submits the New subject to the database
  addSubject(form: any) {
    if (this.newSubject.name.trim() === "") {
      this.submitted = false;
      return this.notifier.notify(
        "error",
        "Please provide a name for the subject!"
      );
    }

    if (this.newSubject.subjectCode.trim() === "") {
      this.submitted = false;
      return this.notifier.notify(
        "error",
        "Subject code must be at least 3 characters in length and a maximum of 5 characters"
      );
    }

    if (this.newSubject.name.length < 3) {
      this.submitted = false;
      return this.notifier.notify(
        "error",
        "The subject name must not be less than 3 characters!"
      );
    }

    if (this.newSubject.subjectCode.length > 10) {
      this.submitted = false;
      return this.notifier.notify(
        "error",
        "Subject code must be at least 3 characters in length and a maximum of 10 characters"
      );
    }

    if (
      this.newSubject.subjectCode.length < 3 ||
      this.newSubject.subjectCode === ""
    ) {
      this.submitted = false;
      return this.notifier.notify(
        "error",
        "Subject code must be at least 3 characters in length and a maximum of 10 characters"
      );
    }
    if (!this.validateSubjectCode(this.newSubject.subjectCode)) {
      return this.notifier.notify(
        "error",
        "Subject code should  not contain spaces or slashes"
      );
    }

    this.submitted = true;
    this.newSubject.name = this.newSubject.name.trim()
    this.newSubject.subjectCode = this.newSubject.subjectCode.trim()
    //this.loader();
    this.itemService.createNewSubject(this.newSubject).subscribe(
      (value) => {
        Swal.fire({
          icon: "success",
          title: "Congratulations",
          text: "A new subject was created successfully",
        });
        this.submitted = false;
        //this.loader();
        this.newSubject = new NewSubject();
        this.ngOnInit();
        this.modal.dismissAll();
        //form.reset();
      },
      (error: HttpErrorResponse) => {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: `${error.error.message}`,
        });
        this.submitted = false;
        //this.loader();
      }
    );
  }

  validateSubjectCode(subjectCode: string) {
    // Regular expression to check if there is any space or slash in the subject code
    const regex = /^[^\/\s]+$/;

    // Test the subjectCode against the regex
    return regex.test(subjectCode);
  }

  // Open Modal form to add a new subject
  addSubjectModal(newSubjectModal: any) {
    this.modal.open(newSubjectModal, { centered: true });
  }

  // Open Modal form to rename an existing subject
  renameSubjectModal(editSubjectModal: any, subject: ListAllSubjects) {
    this.currentSubject = subject;
    this.editSubject.name = subject.name;
    this.editSubject.subjectCode = subject.subjectCode;
    //console.log('subject to edit', this.editSubject);
    this.modal.open(editSubjectModal, { centered: true });
  }

  uploadSubjects(input: HTMLInputElement) {
    this.proccessingSubjectUpload = true;

    const formData = new FormData();
    formData.append("file", input.files[0]);

    this.itemService
      .uploadSubjects(formData)
      .subscribe({
        next: (value) => {
          this.notifier.notify("success", "uploaded  successfully");
          this.proccessingSubjectUpload = false;
          this.modal.dismissAll()
          this.ngOnInit()
        },
        error: (err: HttpErrorResponse) => {
          this.proccessingSubjectUpload = false;
          this.notifier.notify("error", err.error.error);
          // console.log(err);
        },
      });
  }

  renameSubject(form: any) {
    //this.loader();
    if (this.editSubject.name.trim() === "") {
      this.notifier.notify(
        "error",
        "Subject name must be at least 3 characters in length"
      );
    }

    if (this.editSubject.name.length < 3) {
      this.notifier.notify(
        "error",
        "Subject name must be at least 3 characters in length"
      );
    }

    if (this.editSubject.subjectCode.trim() === "") {
      this.notifier.notify(
        "error",
        "Subject code must be at least 3 characters in length and a maximum of 5 characters"
      );
    }

    if (
      this.editSubject.subjectCode.length > 5 ||
      this.editSubject.subjectCode.length < 3
    ) {
      this.notifier.notify(
        "error",
        "Subject code must be at least 3 characters in length and a maximum of 5 characters"
      );
    }

    this.submitted = true;
    let subject: RenameSubjectModel = {
      subjectName: this.editSubject.name,
      subjectId: this.currentSubject.subjectId,
      subjectCode: this.editSubject.subjectCode,
    };
    this.subjectService.renameSubject(subject).subscribe(
      (value) => {
        if (value) {
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: "You have suceessfully changed the subject information.",
          });
        }
        this.currentSubject = new ListAllSubjects();
        this.modal.dismissAll();
        this.ngOnInit();
        this.submitted = false;
        //this.loader();
      },
      (err: HttpErrorResponse) => {
        this.submitted = false;
        // console.log(err);
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: `${err.error.message}`,
        });

        //this.loader();
      }
    );
  }

  loader() {
    if (this.submitted === false) {
      Swal.close();
    } else {
      Swal.fire({
        title: "Updating the subject, Please Wait...",
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
}
