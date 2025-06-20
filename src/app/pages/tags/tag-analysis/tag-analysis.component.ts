import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TagsService } from '../service/tags.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TagAnalysis } from '../model/tag-analysis';

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
  breadCrumbItems: Array<{}>;
  activeRow: number;

  constructor(private ar: ActivatedRoute, private tagService: TagsService) {}

  
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
    this.currentTag = this.tagService.activeTag;
    this.breadCrumbItems = [
      { label: 'Tag', active: false },
      { label: this.currentTag, active: false },
      { label: 'analysis', active: true },
    ];

    this.tagService.getTagAnalysis(this.subjectId, this.tagId).subscribe(
      (value) => {
        this.analysis = value;
        this.analysis;
      },
      (error: HttpErrorResponse) => {}
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

  
}
