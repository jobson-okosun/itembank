import { HttpErrorResponse } from "@angular/common/http";
import { RichEssayModel } from "./../rich-essay/model/rich-essay-model.model";
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { ScoringTypeEnum } from "../models/scoring-type-enum";
import { ItemTagsDtos } from "../models/item-tags-dtos";
import { ItemHttpService } from "../item-http.service";
import Swal from "sweetalert2";
import { MatchingRuleEnums } from "../models/matching-rule-enums";
import { ItemTypes } from "../models/item-types";
import { ItemStatusEnum } from "../models/item-status-enum";
import { UserService } from "src/app/shared/user.service";
import { Location } from "@angular/common";
import { NotifierService } from "angular-notifier";
import { Account } from "src/app/authentication/model/account.model";
import { ItemTagComponent } from "../item-tag/item-tag.component";

declare var tinymce: any;
declare const MathJax: any;
@Component({
  selector: "app-essay",
  templateUrl: "./essay.component.html",
  styleUrls: ["./essay.component.scss"],
})
export class EssayComponent implements OnInit {
  @Input() formType: string = "";
  @Input() editData!: any;
  @ViewChild("tagRef") tagRef: ItemTagComponent;

  breadCrumbItems!: Array<{}>;

  data: string = "";

  displayTagModal = false;

  preview: boolean = false;

  previewData: RichEssayModel;

  selectedItemType = "";

  tags: ItemTagsDtos[] = [];

  scoringType: ScoringTypeEnum[] = [];

  matchingRule: MatchingRuleEnums[] = [];

  difficultyLevel: number[] = [1, 2, 3, 4, 5];

  currentUser: Account;

  item: RichEssayModel = new RichEssayModel();

  

  constructor(
    private itemService: ItemHttpService,
    private userService: UserService,
    private location: Location,
    private notifier: NotifierService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.scoringType = Object.values(ScoringTypeEnum);
    this.matchingRule = Object.values(MatchingRuleEnums);
    console.log("rich");

    this.tagRef.Tag = [];
    this.tagRef.ngOnInit();
    this.tagRef.sendTag([]);
  }

  recieveTags(tags: any) {
    this.tags = tags;
  }


  setup(editor: any) {
    let activeEquation: HTMLElement | null = null;

    const openDialog = (latex: string) => {
      editor.windowManager.open({
        title: "Edit Equation",
        size: "normal",
        body: {
          type: "panel",
          items: [
            {
              type: "htmlpanel",
              html: `<math-field id="mathfield" style="width: 100%; height: 200px; border: 1px solid grey">${latex}</math-field>`,
            },
          ],
        },
        buttons: [
          { type: "cancel", name: "cancel", text: "Cancel" },
          { type: "submit", name: "update", text: "Update", primary: true },
        ],
        onSubmit: (api) => {
          const mathField = document.getElementById("mathfield") as any;
          const updatedLatex = mathField.getValue();

          if (activeEquation) {
            // Update the selected equation
            activeEquation.setAttribute("data-latex", updatedLatex);
            activeEquation.innerHTML = `\\(${updatedLatex}\\)`;
            activeEquation.classList.add("math-expression");

            // Trigger MathJax to re-render
            MathJax.typesetPromise([editor.getBody()])
              .then(() => console.log("Math rendering updated"))
              .catch((err) => console.error("Math rendering failed:", err));
          }

          activeEquation = null;
          api.close();
        },
      });
    };

    editor.on("init", () => {
      const editorBody = editor.getBody();

      // Event  for equations
      editorBody.addEventListener("click", (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.closest(".math-expression")) {
          const equationElement = target.closest(
            ".math-expression"
          ) as HTMLElement;
          activeEquation = equationElement;

          const latex = equationElement.getAttribute("data-latex") || "";

          openDialog(latex);
        }
      });
    });

    editor.ui.registry.addButton("equation-editor", {
      text: "Insert Math",
      icon: "character-count",
      onAction: () => {
        editor.windowManager.open({
          title: "Insert Equation",
          size: "normal",
          body: {
            type: "panel",
            items: [
              {
                type: "htmlpanel",
                html: `<math-field id="mathfield" style="width: 100%; height: 200px; border: 1px solid grey"></math-field>`,
              },
            ],
          },
          buttons: [
            { type: "cancel", name: "cancel", text: "Cancel" },
            { type: "submit", name: "insert", text: "Insert", primary: true },
          ],
          onSubmit: (api) => {
            const mathField = document.getElementById("mathfield") as any;
            const latex = mathField.getValue();

            // Create span for the math equation
            const content = `<span class="math-expression" data-latex="${latex}">\\(${latex}\\)</span>`;
            editor.insertContent(content);
            editor.insertContent("&nbsp;");

            // Ensure cursor placement is outside the equation
            editor.selection.collapse(false);

            MathJax.typesetPromise([editor.getBody()])
              .then(() => console.log("Math rendering complete"))
              .catch((err) => console.error("Math rendering failed:", err));

            api.close();
          },
        });
      },
    });
  }

  buildItem(itemForm: any) {
    this.item.scoringOption.autoScore = false;

    //this.item.itemType = ItemTypes.ESSAY_PLAIN_TEXT;

    this.item.itemStatus = ItemStatusEnum.AWAITING_MODERATION;

    this.item.itemTagsDTOS = this.tags.map((tag) => {
      return { tagId: tag.tagId };
    });
  }

  saveItem(itemForm: any) {
    this.buildItem(itemForm);

    this.itemService.createEssayItem(this.item).subscribe(
      (value) => {
        // console.log(value);
        Swal.fire({
          icon: "success",
          html: "You have successfully created a new item.",
        });
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
        Swal.fire({
          icon: "error",
          html: `${error.error.errors[0]}`,
        });
      }
    );
  }

  saveAsItem(itemForm: any, action: string) {
    if (action === "save_and_new") {
      console.log("called me");
      this.saveItem(itemForm);
      this.ngOnInit();
    } else if (action == "save_as_draft") {
      // todo: save as draft
    } else {
      this.saveItem(itemForm);
    }
  }

  addTag() {
    this.displayTagModal = true;
  }

  setItemType(value: string) {
    this.selectedItemType = value;
  }

  doPreview(itemForm: any) {
    this.preview = true;
    // this.itemUtil.previewItem = true
    this.previewData = this.item;
  }

  returnData(data) {
    this.preview = false;
    //this.previewData = data;
    this.item = data;
    // console.log(data);
  }

  preProcess(pl, o) {
    // console.log(pl);
    let content = o.content;
  }
}
