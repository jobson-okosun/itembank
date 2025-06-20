import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TagsService } from '../service/tags.service';
import { NewTag } from '../model/new-tag.model';
import { NotifierService } from 'angular-notifier';
import { ListTags } from '../model/list-tags.model';
import { Tags } from '../model/tags.model';
import { Account } from 'src/app/authentication/model/account.model';
import { UserService } from 'src/app/shared/user.service';
import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'app-all-tags',
  templateUrl: './all-tags.component.html',
  styleUrls: ['./all-tags.component.scss'],
})
export class AllTagsComponent implements OnInit {
  newTag: NewTag = new NewTag();
  previousPageNumber: number = 0;
  breadCrumbItems!: Array<{}>;
  newTagModal: boolean = false;
  tagsPage: ListTags;
  previousTagName: string;
  submitted: boolean;
  selectedTag: Tags;
  tagId: string;
  currentUser: Account;
  openModal: boolean = false;
  pageSize: number = 50;
  pageCount: number = 0;
  quickGuide = `
    <div class="p-4">
      <h6 class="mb-2 fw-bold text-uppercase">Introduction</h6>
      <p class="text-muted">Tags are used to categorize and organize questions in the bank. They help users 
      easily find content related to specific topics 
      </p>
      <h6 class="mb-2 fw-bold text-uppercase">How to create a new tag</h6>
      <p class="text-muted">To create a new tag click on the new tag button, it is located at the top 
      right corner of the tags page. 
      <em>A sample image is shown below</em></p>
      <div class="d-flex justify-content-center align-items-center mb-4 col-12">
        <img
          src="assets/images/snapshots/users/users_creation_process.gif"
          alt=""
          height="500"
          width="80%"
        />
      </div>
      <p class="text-muted">Once you have clicked on the new tag button 
      a form is displayed where you input the new tag name and click submit. <em>As Shown below:</em></p>
      <div class="d-flex justify-content-center align-items-center mb-4 col-12">
        <img
          src="assets/images/snapshots/users/users_creation_process.gif"
          alt=""
          height="500"
          width="80%"
        />
      </div>
      <h6 class="mb-2 fw-bold text-uppercase">How to view tags distribution</h6>
      <p class="text-muted">To view a tag click on the (ellipsis) three dotted icon, on a tag card to reveal the actions, click "view".  
      <em>As indicated in the image below:</em></p>
      <div class="d-flex justify-content-center align-items-center mb-4 col-12">
        <img
          src="assets/images/snapshots/users/users_creation_process.gif"
          alt=""
          height="500"
          width="80%"
        />
      </div>
      <p class="text-muted">Once you click view, you will be redirected to a different page with instructions.</p>
      <p><strong>Notice that in AGRICULTURE there are 25 questions under the ANALYZING tag</strong></p>
      <div class="d-flex justify-content-center align-items-center mb-4 col-12">
        <img
          src="assets/images/snapshots/users/users_creation_process.gif"
          alt=""
          height="500"
          width="80%"
        />
      </div>
      <h6 class="mb-2 fw-bold text-uppercase">How to a rename tag</h6>
      <p class="text-muted">To rename tags click on the three dotted icon on a tag card to reveal the actions, click "rename". 
      <em>As indicated in the image below:</em></p>
      <div class="d-flex justify-content-center align-items-center mb-4 col-12">
        <img
          src="assets/images/snapshots/users/users_creation_process.gif"
          alt=""
          height="500"
          width="80%"
        />
      </div>
      <p class="text-muted">Once you click rename, a modal pops up with the name of the selected tag you selected ready to be edited.
      <em>As indicated in the image below;</em> 
    </div>
  `;
  searchTag: string = '';
  loading: boolean = true;

  constructor(
    private modalService: NgbModal,
    private tagService: TagsService,
    private router: Router,
    private notifier: NotifierService,
    private user: UserService,
    private activeModal: NgbActiveModal
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
    this.breadCrumbItems = [{ label: 'Tags', active: true }];
    this.currentUser = this.user.getCurrentUser();

    this.tagService.listAllTags(this.pageCount, this.pageSize).subscribe(
      (value) => {
        this.tagsPage = value;
        this.loading = false;
        //this.tagsPage.pageable.pageNumber = 1;
        //console.log(this.tagsPage);
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }

  viewTag(tag: any) {
    this.tagService.activeTag = tag.tagName;
    //this.router.navigate(['/examalpha/tags/tag/' + tagId]);
  }

  createTag(form: any) {
    if (form.invalid) {
      return this.notifier.notify('error', 'Please enter a valid tag name');
    } else if (
      form.controls['tagName'].value.length < 3 ||
      form.controls['tagName'].value === ''
    ) {
      return this.notifier.notify(
        'error',
        'Tag name must not be less than 3 chararcters.'
      );
    } else if (this.newTag.tagName.trim() === '') {
      return this.notifier.notify('error', 'Tag name must not be empty.');
    }
    //let msg = 'Creating new tag, please wait...';
    this.submitted = true;
    this.newTag.tagName =   this.newTag.tagName.trim()
    //this.loader(msg);
    this.tagService.createNewTag(this.newTag).subscribe(
      (value) => {
        if (value) form.reset();
        Swal.fire({
          icon: 'success',
          title: 'Congratulations!',
          confirmButtonColor: 'rgb(3, 142, 220)',
          html: 'A new tag has been created successfully.',
        });
        this.ngOnInit();
        this.submitted = false;
        this.modalService.dismissAll();
        //this.loader();
      },
      (error: HttpErrorResponse) => {
        this.notifier.notify('error', `${error.error.message}`);
        //form.reset();
        this.submitted = false;
        //this.loader();
      }
    );
  }

  updateTagName(renameTagForm: any) {
    if (renameTagForm.controls['tagName'].value === this.previousTagName) {
      return;
    }

    this.submitted = true;
    this.newTag.tagName = this.newTag.tagName.trim()
    //this.loader(msg);
    this.tagService.renameTag(this.tagId, this.newTag).subscribe(
      (value) => {
        this.submitted = false;
        renameTagForm.reset();
        Swal.fire({
          icon: 'success',
          html: 'Tag name was changed successfully.',
          title: 'Congratulations!',
        });
        this.modalService.dismissAll();
        this.newTag = new NewTag();
        this.ngOnInit();
        this.submitted = false;
        //this.loader();
      },
      (error: HttpErrorResponse) => {
        this.notifier.notify('error', `${error.error.message}`);
        this.submitted = false;
        //this.loader();
      }
    );
  }

  addTag(newTagModal: any) {
    this.activeModal = this.modalService.open(newTagModal, { centered: true });
  }

  renameTag(renameTagTypeModal: any, tag: Tags) {
    this.newTag.tagName = tag.tagName.toUpperCase();
    this.tagId = tag.tagId;
    this.activeModal = this.modalService.open(renameTagTypeModal, {
      centered: true,
    });
  }

  nextPage(pageNumber: any) {
    if (pageNumber !== 0 && pageNumber > this.previousPageNumber) {
      //pageNumber--;
      this.previousPageNumber = pageNumber;
    } else if (pageNumber > 0 && pageNumber === this.previousPageNumber) {
      pageNumber--;
      this.previousPageNumber = pageNumber;
    } /* else if(pageNumber === 0 && pageNumber === this.previousPageNumber){
      pageNumber++;
      this.previousPageNumber = pageNumber;
    } */
    this.tagService.listAllTags(this.pageCount, this.pageSize).subscribe(
      (value) => {
        this.tagsPage = value;
        // console.log(value);
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }

  onPageChange(event: any) {
    this.pageSize = event.rows;
    this.pageCount = event.page;
    this.ngOnInit();
  }

  updatePage(event: any) {
    this.tagService.listAllTags(event.page, event.rows);
  }

  closeModal() {
    this.activeModal.close();
    this.newTag = new NewTag();
  }

  search() {
    if (this.searchTag === '') {
      return this.ngOnInit();
    }
    if (this.searchTag.length >= 3)
      this.tagService.searchTag(this.searchTag).subscribe(
        (value) => {
          this.tagsPage = value;
        },
        (error: HttpErrorResponse) => {
          this.notifier.notify('error', `${error.error.message}`);
        }
      );
  }

  loader(msg?: string) {
    if (this.submitted === false) {
      Swal.close();
    } else {
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
}
