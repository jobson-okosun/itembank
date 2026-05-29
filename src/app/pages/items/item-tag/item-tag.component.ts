import { UsersService } from "../../users/user/users.service";
import { catchError, take } from "rxjs/operators";
import { switchMap } from "rxjs/operators";
import { tap } from "rxjs/operators";
import { distinctUntilChanged } from "rxjs/operators";
import { debounceTime } from "rxjs/operators";
import { filter } from "rxjs/operators";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { concat, Observable, of, Subject } from "rxjs";
import { Tags } from "../../tags/model/tags.model";
import { ItemUtilitiesService } from "../item-utilities.service";

@Component({
  selector: "app-item-tag",
  templateUrl: "./item-tag.component.html",
  styleUrls: ["./item-tag.component.scss"],
})
export class ItemTagComponent implements OnInit {
  /* tags: AllTagsModel[] = [];

  assignedTags: AllTagsModel[] = [];

  selectedTags: AllTagsModel[] = [];
 */

  @Input() recievedTag!: any;
  @Input() status: string;
  @Input() disabled: boolean;
  @Output() sendTags = new EventEmitter();

  tags$: Observable<any>;

  minLengthTerm: number = 3;

  loadingTags: boolean = false;

  tagSearchInput$ = new Subject<string>();

  Tag: any[] = [];
  selectedTag: any;

  constructor(
    private userService: UsersService,
    private itemUtilityService: ItemUtilitiesService
  ) {}

  ngOnInit(): void {
    if(this.recievedTag){
      this.Tag = this.recievedTag
    }
    this.itemUtilityService.selectedTags$.pipe(take(1)).subscribe((tags) => {
      if (tags && tags.length) {
        this.Tag = tags;
      }
    });
    this.loadTags();
  }

  showSelect(event) {
    // console.log(event);
  }

  trackByFn(tag: any) {
    return tag.id;
  }

  loadTags() {
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
              // console.log(_err);
              return of([]);
            }),
            tap((value) => {
              this.loadingTags = false;
              // console.log(value);
            })
          );
        })
      )
    );
  }

  sendTag(val: any): void {
    if (val.length === 0) {
      this.clearTags();
    } else {
      this.Tag = val;
      this.sendTags.emit(val);
      this.itemUtilityService.setSelectedTags(this.Tag);
    }
  }

  clearTags(): void {
    this.Tag = [];
    this.sendTags.emit(this.Tag);
    this.itemUtilityService.setSelectedTags(this.Tag);
  }
  /* assignTag(fullLgDataModal: any) {
    this.modalService.open(fullLgDataModal, { centered: true });
  }

  addSelectedTag(data: AllTagsModel, index: number) {
    this.selectedTags.push(data);
    // console.log(this.selectedTags);
  }

  deselectTag(index: number) {
    this.selectedTags.splice(index, 1);
  }

  addTag() {
    if (this.assignedTags.length === 0) {
      this.assignedTags = this.selectedTags;
      this.selectedTags = [];
      this.modalService.dismissAll('Cross click')
    }
    else{
      if(this.selectedTags.length > 0){
        let lengthOfTag = this.selectedTags.length;
        for(let i = 0; i < lengthOfTag; i++){
          this.assignedTags.push(this.selectedTags[i]);
        }
        this.selectedTags = [];
        this.modalService.dismissAll('Cross click')
      }
    }
  }

  removeTag(index: number){
    this.assignedTags.splice(index, 1);
  } */
}
