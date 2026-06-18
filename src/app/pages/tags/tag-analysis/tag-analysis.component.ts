import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TagsService } from '../service/tags.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TagAnalysis } from '../model/tag-analysis';
import { ItemServiceService } from 'src/app/shared/item-services/item-service.service';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-tag-analysis',
  templateUrl: './tag-analysis.component.html',
  styleUrls: ['./tag-analysis.component.scss'],
})
export class TagAnalysisComponent implements OnInit {
  subjectId: string;
  tagId: string;
  analysis: TagAnalysis;
  currentTag: string;
  subjectName: string;
  totalItems: number;
  breadCrumbItems: Array<{}>;
  activeRow: number;

  constructor(private ar: ActivatedRoute, private tagService: TagsService, private itemService: ItemServiceService) { }

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
    this.tagId = this.ar.snapshot.params['tagId'];
    this.subjectId = this.ar.snapshot.params['subjectId'];
    this.currentTag = this.tagService.activeTag || this.itemService.getItem('TAG_NAME');
    this.breadCrumbItems = [
      { label: 'Tag', active: false },
      { label: this.currentTag, active: false },
      { label: 'analysis', active: true },
    ];

    this.tagService.getTagAnalysis(this.subjectId, this.tagId).subscribe(
      (value) => {
        this.analysis = value;
        this.analysis;
        this.subjectName = value.subjectName;
        this.totalItems = value.totalItems
      },
      (error: HttpErrorResponse) => { }
    );
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

  routeBack() {
    history.back()
  }

  exportExcel() {
    if (!this.analysis || !this.analysis.topics) {
      return;
    }

    const exportData: any[] = [];
    
    this.analysis.topics.forEach((topic) => {
      exportData.push({
        'Topic': topic.topicName,
        'Total Quantity': topic.totalItems,
        'Total Awaiting Mod.': topic.totalItemsAwaitingModeration,
        'Total Published': topic.totalItemsPublished,
        'Total Qty. In Recycle': topic.totalItemsInRecycle,
        'Total Drafts': topic.totalItemsDraft
      });

      if (topic.subtopics && topic.subtopics.length > 0) {
         topic.subtopics.forEach(sub => {
            exportData.push({
              'Topic': `  - ${sub.subtopicName}`,
              'Total Quantity': sub.totalItems,
              'Total Awaiting Mod.': sub.totalItemsAwaitingModeration,
              'Total Published': sub.totalItemsPublished,
              'Total Qty. In Recycle': sub.totalItemsInRecycle,
              'Total Drafts': sub.totalItemsDraft
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
