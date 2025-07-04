import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Account } from "src/app/authentication/model/account.model";
import { UserService } from "src/app/shared/user.service";
import { ItemHttpService } from "../item-http.service";
import { SubjectService } from "../subject.service";
import { HttpErrorResponse } from "@angular/common/http";
import { NotifierService } from "angular-notifier";
import { SubjectAnalysis } from "../models/subject-analysis";
import { ItemUtilitiesService } from "../item-utilities.service";

@Component({
  selector: "app-subject-analysis",
  templateUrl: "./subject-analysis.component.html",
  styleUrls: ["./subject-analysis.component.scss"],
})
export class SubjectAnalysisComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  currentUser: Account;
  subjectId: string = this.ar.snapshot.params["id"];
  subjectName: string = this.itemService?.subjectName?.toLowerCase();
  subjectAnalysis: SubjectAnalysis;
  loading_analysis: boolean = true;
  activeRow: number;

  constructor(
    private userService: UserService,
    private itemService: ItemHttpService,
    private ar: ActivatedRoute,
    private subjectService: SubjectService,
    private notifier: NotifierService,
    private itemUtil: ItemUtilitiesService,
  ) {}

  ngOnInit(): void {
    const localTrail = this.itemUtil.getSavedItemTrail()
    if(!this.subjectName) {
       this.subjectName = localTrail.subjectName
    }

    this.breadCrumbItems = [
      { label: "Subjects", active: false },
      { label: this.subjectName, active: false },
      { label: "Analysis", active: true },
    ];
    this.currentUser = this.userService.getCurrentUser();
    this.fetchAnalysis();
  }

  showSubTopic(rowIndex: number) {
    // console.log(this.activeRow + "active row");
    // console.log(rowIndex + "current row");
    if (this.activeRow === rowIndex) {
      this.activeRow = -1;
    } else {
      this.activeRow = rowIndex;
    }
  }

  fetchAnalysis() {
    this.subjectService.getSubjectAnalysis(this.subjectId).subscribe(
      (value) => {
        this.subjectAnalysis = value;
        this.loading_analysis = false;
        // console.log(this.subjectAnalysis);
      },
      (error: HttpErrorResponse) => {
        this.notifier.notify("error", error.error.message);
        this.loading_analysis = false;
      }
    );
  }

  back() {
    history.back()
  }
}
