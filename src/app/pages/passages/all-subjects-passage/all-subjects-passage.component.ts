import { SubjectService } from './../../items/subject.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ItemHttpService } from '../../items/item-http.service';
import { ListAllSubjects } from '../../items/models/list-all-subjects.model';
import { NewSubject } from '../../items/models/new-subject.model';
import { NewTopic } from '../../items/models/new-topic.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Account } from 'src/app/authentication/model/account.model';
import { UserService } from 'src/app/shared/user.service';

export interface RenameSubjectModel{
  subjectName: string;
  subjectId: string;
  subjectCode: string;
}

@Component({
  selector: 'app-all-subjects-passage',
  templateUrl: './all-subjects-passage.component.html',
  styleUrls: ['./all-subjects-passage.component.scss']
})
export class AllSubjectsPassageComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  allSubjects: ListAllSubjects[] = [];
  currentSubject: ListAllSubjects;
  newSubject: NewSubject = new NewSubject();
  newTopic: NewTopic = new NewTopic();
  topicName: string = '';
  currentUser: Account;
  editSubjectName: string;
  submitted: boolean = false;

  constructor(private itemService: ItemHttpService, private modal: NgbModal, private subjectService: SubjectService, private userService: UserService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{label: 'Passages', active: false}, { label: 'Subjects', active: true }];
    this.currentUser = this.userService.getCurrentUser();

    if(this.currentUser.authorities.includes('ADMIN')){
      this.itemService.fetchAllSubjectsItems().subscribe(
        (value) => {
          this.allSubjects = value;
          // console.log(this.allSubjects);
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
        }
      );
    }else{
      this.itemService.fetchAllSubjectsNonAdmin().subscribe(
        (value) => {
          this.allSubjects = value;
          // console.log(this.allSubjects);
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
        }
      );
    }
    
  }

  setSubjectId(subject: ListAllSubjects) {
    this.itemService.subjectId = subject.subjectId;
    this.itemService.subjectName = subject.name;
  }

  addSubject(form: any) {
    this.submitted = true;
    this.itemService.createNewSubject(this.newSubject).subscribe(
      (value) => {
        Swal.fire({
          icon: 'success',
          title: 'Congratulations',
          text: 'A new subject was created successfully',
        });
        this.submitted = false;
        this.ngOnInit();
        form.reset();
      },
      (error: HttpErrorResponse) => {
        this.submitted = false;
        form.reset();
        // console.log(error);
      }
    );
    this.modal.dismissAll();
  }

  addTopic(topic: any) {
    this.submitted = true;
    this.newTopic.subjectId = this.currentSubject.subjectId;
    this.itemService.createNewTopic(this.newTopic).subscribe(
      (value) => {
        if (value) {
          Swal.fire({
            icon: 'success',
            title: 'Congratulations',
            text: 'You have successfully added a new topic!',
          });
          this.submitted = false;
          topic.reset()
        }
      },
      (error: HttpErrorResponse) => {
        this.submitted = false;
        topic.reset();
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: error.error.message
        })
        // console.log(error);
      }
    );
  }

  addTopicModal(newTopicModal: any, subject: ListAllSubjects) {
    this.currentSubject = subject;
    this.modal.open(newTopicModal, { centered: true });
  }

  addSubjectModal(newSubjectModal: any) {
    this.modal.open(newSubjectModal, { centered: true });
  }

  renameSubjectModal(editSubjectModal: any, subject: ListAllSubjects) {
    this.currentSubject = subject;
    this.editSubjectName = subject.name;
    this.modal.open(editSubjectModal, { centered: true });
  }

  renameSubject(form: any) {
    // console.log(this.currentSubject);
    let subject: RenameSubjectModel = {
      subjectName: this.currentSubject.name,
      subjectId: this.currentSubject.subjectId,
      subjectCode: this.currentSubject.subjectCode
    }
    this.subjectService.renameSubject(subject).subscribe((value) => {
      if(value){
        Swal.fire({
          icon: 'success',
          title: 'Congratulations',
          text: 'You have suceessfully changed the subject information.'
        });
      }
    }, (err: HttpErrorResponse) => {
      Swal.fire({
        icon: 'error',
        title: 'Failed!',
        text: 'Oops!...Sorry the operation failed, try again.'
      });
    })
  }

}
