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
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

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

  exportExcel() {
    if (!this.subjectAnalysis || !this.subjectAnalysis.topics) {
      return;
    }

    const exportData: any[] = [];
    
    this.subjectAnalysis.topics.forEach((topic) => {
      exportData.push({
        'Topic': topic.topicName,
        'Total Quantity': topic.totalItems,
        'Total Awaiting Mod.': topic.totalItemsAwaitingModeration,
        'Total Rejected': topic.totalItemsRejected,
        'Total Published': topic.totalItemsPublished,
        'Total Qty. In Recycle': topic.totalItemsInRecycle,
        'Usage Count': topic.totalItemsUsed,
        'Total Drafts': topic.totalItemsDraft,
        'Total Passages': topic.totalPassages,
        'Passages Awaiting Mod.': topic.totalPassagesAwaitingModeration,
        'Passage Drafts': topic.totalPassagesDraft,
        'Published Passages': topic.totalPassagesPublished,
        'Passages Used': topic.totalPassagesUsed,
      });

      if (topic.subtopics && topic.subtopics.length > 0) {
         topic.subtopics.forEach(sub => {
            exportData.push({
              'Topic': `  - ${sub.subtopicName}`,
              'Total Quantity': sub.totalItems,
              'Total Awaiting Mod.': sub.totalItemsAwaitingModeration,
              'Total Rejected': sub.totalItemsRejected,
              'Total Published': sub.totalItemsPublished,
              'Total Qty. In Recycle': sub.totalItemsInRecycle,
              'Usage Count': sub.totalItemsUsed,
              'Total Drafts': sub.totalItemsDraft,
              'Total Passages': sub.totalPassages,
              'Passages Awaiting Mod.': sub.totalPassagesAwaitingModeration,
              'Passage Drafts': sub.totalPassagesDraft,
              'Published Passages': sub.totalPassagesPublished,
              'Passages Used': sub.totalPassagesUsed,
            });
         });
      }
    });

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportData);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, `${this.subjectName}_Analysis`);
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
}
