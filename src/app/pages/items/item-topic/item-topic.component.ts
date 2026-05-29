import { DropdownSubjectList } from './../models/dropdown-subject-list.model';
import { UsersService } from '../../users/user/users.service';
import { catchError } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { concat, Observable, of, Subject } from 'rxjs';
import { ItemHttpService } from '../item-http.service';
import { NewSubject } from '../models/new-subject.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-item-topic',
  templateUrl: './item-topic.component.html',
  styleUrls: ['./item-topic.component.scss'],
})
export class ItemTopicComponent implements OnInit {
  @Output() sendSubjects = new EventEmitter();
  @Output() sendTopics = new EventEmitter();
  @Input() label: string = '';
  @Input() multiple: boolean = true;

  tags$: Observable<any>;

  /* loadingTags: boolean = false; */
  subjects: DropdownSubjectList[] = [];

  tagSearchInput$ = new Subject<string>();

  Subjects: any[] = [];

  Topics: any[] = [];

  constructor(
    private userService: UsersService,
    private itemService: ItemHttpService //private allTags: AllTagsService,
  ) {}

  ngOnInit(): void {
    //this.tags$ = this.allTags.getAllTags();
    this.itemService.fetchAllSubjectsDropdown().subscribe(
      (value) => {
        this.subjects = value;
        // console.log(this.subjects);
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }

  showSelect(event) {
    // console.log(event);
  }

  trackByFn(tag: any) {
    return tag.id;
  }

  /* loadTags() {
    this.tags$ = concat(
      of([]),
      this.tagSearchInput$.pipe(
        filter((value) => {
          return value !== null && value.length >= this.minLengthTerm;
        }),
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => (this.loadingTags = true)),
        switchMap((value) => {
          return this.userService.searchTags(value).pipe(
            catchError((_err) => {
              console.log(_err);
              return of([]);
            }),
            tap((value) => {
              this.loadingTags = false;
              console.log(value);
            })
          );
        })
      )
    );
  } */

  sendSelectedSubjects(val: any) {
    // console.log(val);
    this.sendSubjects.emit(val);
  }

  sendSelectedTopics(val: any) {
    // console.log(this.Topics);
    this.sendTopics.emit(val);
  }
}
