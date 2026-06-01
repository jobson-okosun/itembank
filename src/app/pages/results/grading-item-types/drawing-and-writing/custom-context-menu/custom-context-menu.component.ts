import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { timer } from 'rxjs';
import { SchemeQuestionSectionsTransformed } from 'src/app/pages/assessment/model/marking-guide-types';

@Component({
  selector: 'app-custom-context-menu',
  templateUrl: './custom-context-menu.component.html',
  styleUrls: ['./custom-context-menu.component.scss']
})
export class CustomContextMenuComponent implements AfterViewInit {

  @Input() x: number;
  @Input() y: number;
  @Input() sections: SchemeQuestionSectionsTransformed[]
  isVisible: boolean = false;

  @Output() menuClicked = new EventEmitter<{ sectionId: string, x: number, y: number}>();

  ngAfterViewInit() {
    timer(0).subscribe(() => this.isVisible = true)
  }

  menuItemClicked(sectionId: string) {
    this.menuClicked.emit({ sectionId, x: this.x, y: this.y});
  }

}
