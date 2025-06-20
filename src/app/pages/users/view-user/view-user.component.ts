import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { UserService } from "src/app/shared/user.service";
import { DecimalPipe } from "@angular/common";
import { UserDetail } from "../model/user-detail";
import { HttpErrorResponse } from "@angular/common/http";
import { ItemHttpService } from "../../items/item-http.service";
import { ItemAnalysis } from "../model/item-analysis.model";
import { Account } from "src/app/authentication/model/account.model";
import { UsersService } from "../user/users.service";
import { NotifierService } from "angular-notifier";
import { ActivityListPage } from "../model/activity-list-page";
import { UserActivityFilter } from "../model/user-activity-filter";
import { UserActivityTypes } from "../model/user-activity-types";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AllPassagesService } from "../../passages/list-passages/all-passages.service";
import { SinglePassageModel } from "../../items/passage-item/model/single-passage-model.model";

@Component({
  selector: "app-view-user",
  templateUrl: "./view-user.component.html",
  styleUrls: ["./view-user.component.scss"],
  providers: [DecimalPipe],
})
export class ViewUserComponent implements OnInit {
  userId: string;

  userDetail: UserDetail;

  currentUser: Account;

  userItemAnalysis: ItemAnalysis[] = [];

  activityListPage: ActivityListPage = new ActivityListPage();

  userActivityFilter: UserActivityFilter = new UserActivityFilter();

  activityTypes: string[] = Object.keys(UserActivityTypes);

  roles: string[] = [];

  loading: boolean = true;

  page: number = 0;

  size: number = 50;

  item: any;

  passage: SinglePassageModel;

  quickGuide = `<div class="p-4">
    <h6 class="mb-2 fw-bold text-uppercase">Introduction</h6>
    <p class="text-muted mb-4">
      This page displays a detailed view of the selected user's account. The page is sectioned into two cards,
      in which the first card shows personal information pertaining to the user 
      like the username, email, phone number, account status, firstname, lastname, 
      total subjects assigned to the user, the role assigned to the user and the date, the user account was created.
    </p>
    <div class="row my-4">
      <div class="d-flex justify-content-center align-items-center col-12">
        <img src="" alt="" />
      </div>
    </div>

    <div></div>

    <div>

    </div>

  </div>`;

  loadingActivityList: boolean = true;

  currentPreview!: string;

  loading_passage: boolean = false;
  loading_item: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private userService2: UsersService,
    private itemService: ItemHttpService,
    private notifier: NotifierService,
    private modalService: NgbModal,
    private passageService: AllPassagesService
  ) {
    this.currentUser = this.userService.getCurrentUser();
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.userId = params.get("id");
      // console.log(this.userId);
    });
    this.setDefaultActivityFilterParams();
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
    this.fetchUserDetail(this.userId);
    this.fetchUserItemAnalysis(this.userId);
    this.fetchActivities();
  }

  setDefaultActivityFilterParams() {
    if (this.currentUser.authorities.includes("ADMIN")) {
      this.userActivityFilter.userId = this.userId;
    }
    //this.userActivityFilter.userActivityType = 'LOGIN';
  }

  fetchUserItemAnalysis(userId: string) {
    // get all the items created by user
    if (this.currentUser.authorities.includes("ADMIN")) {
      this.userService2.getAuthorItems(this.userId).subscribe(
        (value) => {
          this.userItemAnalysis = value;
          // console.log(this.userItemAnalysis);
        },
        (error: HttpErrorResponse) => {
          this.notifier.notify("error", error.error.message);
        }
      );
    } else {
      this.userService2.getSingleItemAnalysisNonAdmin(userId).subscribe(
        (value) => {
          this.userItemAnalysis = value;
          // console.log(this.userItemAnalysis);
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
          this.notifier.notify("error", error.error.message);
        }
      );
    }
  }

  fetchUserDetail(userId: string) {
    if (this.currentUser.authorities.includes("ADMIN")) {
      this.userService2.getUserDetail(userId).subscribe(
        (value) => {
          this.userDetail = value;
          this.userDetail.userRolesDTOList.map((role, index) => {
            this.roles.push(this.userDetail.userRolesDTOList[index].role);
          });
          //console.log(this.roles);
          this.loading = false;
        },
        (error: HttpErrorResponse) => {
          this.loading = false;
        }
      );
    } else {
      this.userService2.getSingleUserDetails(userId).subscribe(
        (value) => {
          this.userDetail = value;
          this.userDetail.userRolesDTOList.map((role, index) => {
            this.roles.push(this.userDetail.userRolesDTOList[index].role);
          });
          //console.log(this.roles);
          this.loading = false;
        },
        (error: HttpErrorResponse) => {
          this.loading = false;
        }
      );
    }
  }

  fetchActivities() {
    this.loadingActivityList = true;
    if (this.currentUser.authorities.includes("ADMIN")) {
      this.userService2
        .fetchActivityListAdmin(this.userActivityFilter, this.page, this.size)
        .subscribe(
          (value) => {
            this.activityListPage = value;
            this.loadingActivityList = false;
          },
          (error: HttpErrorResponse) => {
            this.notifier.notify("error", error.error.message);
            this.loadingActivityList = false;
          }
        );
    } else {
      this.userService2
        .fetchSingleUserActivityList(
          this.userActivityFilter,
          this.page,
          this.size
        )
        .subscribe(
          (value) => {
            this.activityListPage = value;
            this.loadingActivityList = false;
          },
          (error: HttpErrorResponse) => {
            this.notifier.notify("error", error.error.message);
            this.loadingActivityList = false;
          }
        );
    }
  }

  fetchItem(itemId: string, previewModal: any) {
    this.loading_item = true;
    this.currentPreview = "Question";
    this.modalService.open(previewModal, { centered: true, size: "xl" });
    this.itemService.fetchIndividualItem(itemId).subscribe(
      (value) => {
        if (value) {
          this.item = value;
          this.loading_item = false;
        }
      },
      (error: HttpErrorResponse) => {
        // console.log(error.error.message);
        this.notifier.notify("error", error.error.message);
        this.loading_item = false;
      }
    );
  }

  fetchPassage(passageId: string, previewModal: any) {
    this.loading_passage = true;
    this.currentPreview = "Passage";
    this.modalService.open(previewModal, { centered: true, size: "xl" });
    this.passageService.fetchSinglePassage(passageId).subscribe(
      (value) => {
        if (value) {
          this.passage = value;
          this.loading_passage = false;
        }
      },
      (error: HttpErrorResponse) => {
        // console.log(error.error.message);
        this.notifier.notify("error", error.error.message);
        this.loading_passage = false;
      }
    );
  }

  filterUserActivities() {
    this.loadingActivityList = true;
    this.page = 0;
    this.size = 50;
    this.fetchActivities();
  }

  clearUserActivitiesFilter() {
    this.userActivityFilter = new UserActivityFilter();
    this.fetchActivities();
  }

  activityListChange(event: any) {
    this.loadingActivityList = true;
    // console.log(event);
    this.size = event.rows;
    this.page = event.page;
    this.fetchActivities();
  }
}
