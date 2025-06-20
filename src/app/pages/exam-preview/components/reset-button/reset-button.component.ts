import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../services/item.service";

@Component({
  selector: "app-reset-button",
  templateUrl: "./reset-button.component.html",
  styleUrls: ["./reset-button.component.scss"],
})
export class ResetButtonComponent implements OnInit {
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {}

  clearAnswer(): void {
    this.itemService.getCurrentQuestion().responses = [];

    this.itemService.removeAttemptedQuestionNumber(
      this.itemService.currentQuestionNumber
    );
  }
}
