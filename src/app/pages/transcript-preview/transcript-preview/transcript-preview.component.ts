import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { finalize } from 'rxjs/operators';
import { ParticipantSectionTranscript, QUESTION_TYPES } from '../../items/models/result';

@Component({
  selector: 'app-transcript-preview',
  templateUrl: './transcript-preview.component.html',
  styleUrls: ['./transcript-preview.component.scss']
})
export class TranscriptPreviewComponent implements OnInit {
  downloadingTranscript: boolean = true
  transcriptData: ParticipantSectionTranscript[]
  transcriptQuestionTypes = QUESTION_TYPES;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }
  params: any
  transcriptScore: number = 0

  ngOnInit(): void {
    this.getTranscriptParams()
  }

  getTranscriptParams() {
    this.route.queryParamMap.subscribe( route => {
      const params = {}
      route.keys.map( key => {
        params[key] = route.get(key)
      })

      this.params = params
      this.fetchTranscriptData()
    })
  }

  calculateTranscriptScore() {
    const score = this.transcriptData.reduce((total, curr) => total + curr.item_score.score, 0)
    this.transcriptScore = score
  }

  fetchTranscriptData() {
    this.downloadingTranscript = true
    this.dataService.fetchTranscript(this.params)
    .pipe(finalize(() => this.downloadingTranscript = false))
    .subscribe({
      next: (res) => {
        this.transcriptData = res
        this.calculateTranscriptScore()
        this.domReady()
      }
    })
  }

  domReady() {
    (window as any).domReady = true; 
  }
}
