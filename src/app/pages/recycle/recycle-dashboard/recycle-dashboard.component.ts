import Swal from 'sweetalert2';
import { NewRecyclePolicy } from './../models/new-recycle-policy.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListRecycleSubjects } from '../models/list-recycle-subjects.model';
import { RecycleService } from '../recycle.service';
import { NotifierService } from 'angular-notifier';
import { RecycleDurationEnum } from '../models/recycle-duration-enum';

@Component({
  selector: 'app-recycle-dashboard',
  templateUrl: './recycle-dashboard.component.html',
  styleUrls: ['./recycle-dashboard.component.scss'],
})
export class RecycleDashboardComponent implements OnInit {
  subjects: ListRecycleSubjects[] = [];
  allSubjects: ListRecycleSubjects[] = [];
  breadCrumbItems!: Array<{}>;
  durations: string[];
  newRecyclePolicy: NewRecyclePolicy = new NewRecyclePolicy();
  selectedSubject: ListRecycleSubjects;
  searchSubject!: string;
  submitted: boolean = false;
  loading: boolean = true;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private notifier: NotifierService,
    private recycleService: RecycleService
  ) {}

  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
    const rightBar = document.getElementById('theme-settings-offcanvas');
    if (rightBar != null) {
      rightBar.classList.toggle('show');
      rightBar.setAttribute('style', 'visibility: visible;');
    }
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Recycle' }];

    this.recycleService.fetchAllRecycleSubjects().subscribe(
      (value) => {
        value.sort((a: ListRecycleSubjects, b: ListRecycleSubjects) => {
          return b.itemsInBin - a.itemsInBin
        })
        this.subjects = value;
        this.loading = false;
        //console.log(this.subjects);
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        this.notifier.notify('error', `${error.error.message}`);
      }
    );

    this.durations = Object.values(RecycleDurationEnum);
  }

  filterSubjects() {
    let filteredSubjects = [];
    if (this.allSubjects.length == 0) {
      this.allSubjects = this.subjects;
    }
    // console.log(this.searchSubject);
    if (this.searchSubject) {
      for (let i = 0; i <= this.searchSubject.length; i++) {
        this.subjects.filter((subject) => {
          if (
            subject.subjectName.startsWith(this.searchSubject) &&
            !filteredSubjects.includes(subject)
          ) {
            filteredSubjects.push(subject);
            //return subject;
          }
        });
      }
    }
    this.subjects = filteredSubjects;
    if (this.subjects.length === 0) {
      this.subjects = this.allSubjects;
      this.allSubjects = [];
    }

    // console.log(filteredSubjects);
  }

  openModal(recyclePolicyModal: any, subject: ListRecycleSubjects) {
    this.selectedSubject = subject;
    this.newRecyclePolicy = new NewRecyclePolicy();
    this.modalService.open(recyclePolicyModal, { centered: true });
  }

  openEditPolicyModal(editRecyclePolicyModal: any) {
    this.modalService.open(editRecyclePolicyModal, { centered: true });
  }

  fetchSubjectRecycle(subject: ListRecycleSubjects) {
    this.selectedSubject = subject;
    if (subject.recycleId === null) {
      return;
    } else {
      this.recycleService.fetchSubjectRecycle(subject.recycleId).subscribe(
        (value) => {
          this.newRecyclePolicy = value;
          // console.log('to edit', this.newRecyclePolicy);
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
        }
      );
    }
  }

  savePolicy(form: any) {
    this.newRecyclePolicy.enabled = true;
    this.newRecyclePolicy.subjectId = this.selectedSubject.subjectId;
    // console.log(this.newRecyclePolicy);
    if (form.valid === false) {
      return this.notifier.notify('error', 'All Fields must be entered!');
    }
    if (
      this.newRecyclePolicy.maxUsageCount > 10 ||
      this.newRecyclePolicy.maxUsageCount < 0
    ) {
      return this.notifier.notify('error', 'Max Usage must be between 1-10.');
    } else {
      this.submitted = true;
      this.recycleService.createNewPolicy(this.newRecyclePolicy).subscribe(
        (value) => {
          if (value) {
            Swal.fire({
              icon: 'success',
              title: 'Congratulations',
              text: 'Your recycle policy has been saved successfully!',
            });
          }
          this.submitted = false;
          form.reset();
          this.modalService.dismissAll();
          this.ngOnInit();
          //this.newRecyclePolicy = new NewRecyclePolicy();
        },
        (error: HttpErrorResponse) => {
          this.submitted = false;
          Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: error.error.message,
          });
        }
      );
    }
  }

  updatePolicy(recycleForm: any) {
    this.submitted = true;
    this.recycleService
      .editRecyclePolicy(this.selectedSubject.recycleId, this.newRecyclePolicy)
      .subscribe(
        (value) => {
          if (value) {
            Swal.fire({
              title: 'Congratulations',
              text: `You have successfully updated the recycle policy for ${this.selectedSubject.subjectName.toUpperCase()} subject.`,
              icon: 'success',
            });
            this.submitted = false;
            this.ngOnInit();
            this.modalService.dismissAll();
            recycleForm.reset();
            //this.newRecyclePolicy = new NewRecyclePolicy();
          }
        },
        (error: HttpErrorResponse) => {
          this.submitted = false;
          this.notifier.notify('error', `${error.error.message}`);
        }
      );
  }

  /* viewSubject(subject: string) {
    this.router.navigate([
      '/examalpha/recycle/' + subject.toLowerCase() + '/' + subject,
    ]);
  } */

  openDeleteRecyclePolicyConfirmationModal(
    deleteRecyclePolicyModal: any,
    recyleSubject: ListRecycleSubjects
  ) {
    this.selectedSubject = recyleSubject;
    this.modalService.open(deleteRecyclePolicyModal, {
      centered: true,
      size: 'md',
    });
  }

  deleteRecyclePolicy() {
    this.submitted = true;
    this.recycleService
      .deleteRecyclePolicy(
        this.selectedSubject.recycleId,
        this.selectedSubject.subjectId
      )
      .subscribe(
        (value) => {
          if (value) {
            this.notifier.notify('success', `${value}`);
          }
          this.submitted = false;
          this.modalService.dismissAll();
          this.ngOnInit();
        },
        (error: HttpErrorResponse) => {
          this.submitted = false;
          this.notifier.notify('error', `${error.error.message}`);
        }
      );
  }

  restoreAllItemsInSubject(subject: ListRecycleSubjects) {
    this.recycleService.restoreAllItemsInSubject(subject.subjectId).subscribe(
      (value) => {
        if(value){
          this.notifier.notify(`success`, 'All the questions in recycle has successfully been restored!');
        }
      },
      (error: HttpErrorResponse) => {
        this.notifier.notify('', `${error.error.message}`);
      }
    );
  }
}
