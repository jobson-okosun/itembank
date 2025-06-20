import { Component, OnInit } from '@angular/core';
import { AllPassagesService } from '../list-passages/all-passages.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { UserService } from 'src/app/shared/user.service';
import { Account } from 'src/app/authentication/model/account.model';

@Component({
  selector: 'app-usage-history',
  templateUrl: './usage-history.component.html',
  styleUrls: ['./usage-history.component.scss'],
})
export class UsageHistoryComponent implements OnInit {

  passageId: string = this.ar.snapshot.params['passageId'];

  breadCrumbItems!: Array<{}>;

  passageUsageHistory!: any;

  loading: boolean = true;

  currentUser: Account = this.userService.getCurrentUser();

  constructor(
    private notifier: NotifierService,
    private passageService: AllPassagesService,
    private ar: ActivatedRoute,
    private userService: UserService
  ) {
    this.fetchUsageHistory();
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'passages', active: false},
      { label: 'usage-history', active: false},
    ]
  }

  fetchUsageHistory() {
    this.passageService.getPassageUsageHistory(this.passageId).subscribe(
      (value) => {
        this.passageUsageHistory = value;
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        this.notifier.notify('error', error.error.message);
        this.loading = false;
      }
    );
  }
}
