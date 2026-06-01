import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../services/item.service";
import { ICandidateItem } from "../../models/candidate";

@Component({
  selector: "app-cloze-image-with-drag-drop",
  templateUrl: "./cloze-image-with-drag-drop.component.html",
  styleUrls: ["./cloze-image-with-drag-drop.component.scss"],
})
export class ClozeImageWithDragDropComponent implements OnInit {
  currentQuestionNumber: number = 0;
  draggedItem: string = "";
  draggingItem: any = null;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();
    console.log("hello");
  }

  getCurrentQuestion(): ICandidateItem {
    return this.itemService.getCurrentQuestion();
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  onDragStart(event: DragEvent, option: any) {
    event.dataTransfer?.setData("text", JSON.stringify(option));
  }

  onDrop(event: DragEvent, positionIndex: number) {
    event.preventDefault();
    const data = event.dataTransfer?.getData("text");

    if (data) {
      const option = JSON.parse(data);

      this.getCurrentQuestion().responses[positionIndex] = option.label;
    }
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }
}
