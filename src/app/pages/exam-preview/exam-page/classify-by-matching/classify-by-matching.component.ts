import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../services/item.service";
import { ItemModel, Option } from "src/app/shared/model/itemModel";
import { ICandidateItem, IOptionDTO } from "../../models/candidate";

@Component({
  selector: "app-classify-by-matching",
  templateUrl: "./classify-by-matching.component.html",
  styleUrls: ["./classify-by-matching.component.scss"],
})
export class ClassifyByMatchingComponent implements OnInit {
  options: Option[];
  stimulusList: ItemModel["stimulusList"];
  currentQuestionNumber: number = 0;
  draggedOption: Option | null = null;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.currentQuestionNumber = this.itemService.getCurrentQuestionNumber();

    this.itemService.getCurrentQuestion().options = this.sortOptionsByResponses(
      this.itemService.getCurrentQuestion().options,
      this.itemService.getCurrentQuestion().responses
    );

    // this.itemService.getCurrentQuestion().options[0].label =
    //   this.itemService.getCurrentQuestion().options[0].label =
    //     "<p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem </p><p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlo</p>remloremloremloremloremloremloremloremloremloremloremloremloremloremloremlo<p>remloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>";

    // this.itemService
    //   .getCurrentQuestion()
    //   .options.push(this.itemService.getCurrentQuestion().options[0]);
    // this.itemService
    //   .getCurrentQuestion()
    //   .options.push(this.itemService.getCurrentQuestion().options[1]);

    // this.itemService
    //   .getCurrentQuestion()
    //   .stems.push(this.itemService.getCurrentQuestion().stems[0]);
    // this.itemService
    //   .getCurrentQuestion()
    //   .stems.push(this.itemService.getCurrentQuestion().stems[1]);
  }

  getCurrentQuestion(): ICandidateItem {
    return this.itemService.getCurrentQuestion();
  }

  onDragStart(event: DragEvent, option: Option) {
    this.draggedOption = option;
    event.dataTransfer?.setData("text", JSON.stringify(option));
  }

  onDragOver(event: DragEvent) {
    event.preventDefault(); // Necessary to allow dropping
  }

  onDrop(event: DragEvent, targetOption: Option) {
    event.preventDefault();

    if (!this.draggedOption) return;

    const options = this.itemService.getCurrentQuestion().options;
    const draggedIndex = options.indexOf(this.draggedOption);
    const targetIndex = options.indexOf(targetOption);

    if (draggedIndex !== -1 && targetIndex !== -1) {
      // Swap the options
      [options[draggedIndex], options[targetIndex]] = [
        options[targetIndex],
        options[draggedIndex],
      ];
    }

    // Update responses based on new order
    this.itemService.getCurrentQuestion().responses = options.map(
      (opt) => opt.value
    );
    this.itemService.captureAttemptedQuestionNumber();
    this.draggedOption = null;
  }

  sortOptionsByResponses(
    options: IOptionDTO[],
    responses: string[]
  ): IOptionDTO[] {
    if (responses.length !== 0) {
      return [...options].sort(
        (a, b) => responses.indexOf(a.value) - responses.indexOf(b.value)
      );
    }
    return options;
  }
}
