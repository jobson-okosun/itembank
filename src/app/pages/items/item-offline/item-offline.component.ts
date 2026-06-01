import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Router } from "@angular/router";
import { newClozeDropDown } from "../utility/ClozeTextUtil";
import { ClozeDropdown } from "../cloze-dropdown/cloze-dropdown.model";

declare var tinymce: any;
declare const MathJax: any;

@Component({
  selector: "app-item-offline",
  templateUrl: "./item-offline.component.html",
  styleUrls: ["./item-offline.component.scss"],
})
export class ItemOfflineComponent implements OnInit {
  itemStimulus: string = "";
  @Output() goBack = new EventEmitter();
  editData: ClozeDropdown = new ClozeDropdown();
  constructor(private router: Router) {}

  ngOnInit(): void {
    let stimulus =
      "<p>ade is a&nbsp;{{response}}&nbsp;who likes</p>\n<ul>\n<li>{{response}}</li>\n</ul>";
    this.editData.stimulus = stimulus
      .split("{{response}}")
      .join(
        "<select style='width: 200px; height: 30px; border-radius: 3px'></select>"
      );

      console.log(this.editData.stimulus)

    // ("Original Stimulus with <select></select> options.");
    this.editData.possibleResponses = [
      { responses: ["Response 1", "Response 2"] },
      { responses: ["Response 3", "Response 4"] },
      { responses: ["Response 5", "Response 6"] },
    ];
  }

  // maths editor
  // preProcess(pl, o) {
  //   // console.log(pl);
  //   let content = o.content;
  // }
  // option: Object = {
  //   height: 200,
  //   menubar: true,
  //   branding: false,
  //   base_url: "/tinymce",
  //   suffix: ".min",
  //   plugins: "table quickbars lists autoresize charmap paste",
  //   quickbars_insert_toolbars: false,
  //   setup: this.setup.bind(this),
  //   paste_preprocess: function (pl, o) {
  //     // console.log(o.content);
  //   },
  //   toolbar:
  //     "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent table quickimage quicklink | subscript superscript charmap",
  // };

  // setup(editor: any) {
  //   let activeEquation: HTMLElement | null = null;

  //   const openDialog = (latex: string) => {
  //     editor.windowManager.open({
  //       title: "Edit Equation",
  //       size: "normal",
  //       body: {
  //         type: "panel",
  //         items: [
  //           {
  //             type: "htmlpanel",
  //             html: `<math-field id="mathfield" style="width: 100%; height: 200px; border: 1px solid grey">${latex}</math-field>`,
  //           },
  //         ],
  //       },
  //       buttons: [
  //         { type: "cancel", name: "cancel", text: "Cancel" },
  //         { type: "submit", name: "update", text: "Update", primary: true },
  //       ],
  //       onSubmit: (api) => {
  //         const mathField = document.getElementById("mathfield") as any;
  //         const updatedLatex = mathField.getValue();

  //         if (activeEquation) {
  //           // Update the selected equation
  //           activeEquation.setAttribute("data-latex", updatedLatex);
  //           activeEquation.innerHTML = `\\(${updatedLatex}\\)`;
  //           activeEquation.classList.add("math-expression");

  //           // Trigger MathJax to re-render
  //           MathJax.typesetPromise([editor.getBody()])
  //             .then(() => console.log("Math rendering updated"))
  //             .catch((err) => console.error("Math rendering failed:", err));
  //         }

  //         activeEquation = null;
  //         api.close();
  //       },
  //     });
  //   };

  //   editor.on("init", () => {
  //     const editorBody = editor.getBody();

  //     // Event  for equations
  //     editorBody.addEventListener("click", (event: MouseEvent) => {
  //       const target = event.target as HTMLElement;
  //       if (target.closest(".math-expression")) {
  //         const equationElement = target.closest(
  //           ".math-expression"
  //         ) as HTMLElement;
  //         activeEquation = equationElement;
  //         const latex = equationElement.getAttribute("data-latex") || "";
  //         openDialog(latex);
  //       }
  //     });
  //   });

  //   editor.ui.registry.addButton("equation-editor", {
  //     text: "Insert Math",
  //     icon: "character-count",
  //     onAction: () => {
  //       editor.windowManager.open({
  //         title: "Insert Equation",
  //         size: "normal",
  //         body: {
  //           type: "panel",
  //           items: [
  //             {
  //               type: "htmlpanel",
  //               html: `<math-field id="mathfield" style="width: 100%; height: 200px; border: 1px solid grey"></math-field>`,
  //             },
  //           ],
  //         },
  //         buttons: [
  //           { type: "cancel", name: "cancel", text: "Cancel" },
  //           { type: "submit", name: "insert", text: "Insert", primary: true },
  //         ],
  //         onSubmit: (api) => {
  //           const mathField = document.getElementById("mathfield") as any;
  //           const latex = mathField.getValue();

  //           // Create span for the math equation
  //           const content = `<span class="math-expression" data-latex="${latex}">\\(${latex}\\)</span>`;
  //           editor.insertContent(content);
  //           editor.insertContent("&nbsp;");

  //           // Ensure cursor placement is outside the equation
  //           editor.selection.collapse(false);

  //           MathJax.typesetPromise([editor.getBody()])
  //             .then(() => console.log("Math rendering complete"))
  //             .catch((err) => console.error("Math rendering failed:", err));

  //           api.close();
  //         },
  //       });
  //     },
  //   });
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  // console.log("i am here")
  //   MathJax.typesetPromise([tinymce.activeEditor.getBody()])
  //     .then(() => console.log("Math rendering complete"))
  //     .catch((err) => console.error("Math rendering failed:", err));
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  // }
  // viewInnerHtml() {
  //   this.router.navigate(["/"]);
  //   this.goBack.emit(true)
  //   console.log(this.itemStimulus, "itemstimulus");
  // }

  editor: any;
  editDataStatus = true;

  logEditor(event: any) {
    if (this.editDataStatus) {
      let selectBoxes: HTMLSelectElement[] = tinymce
        .get("abc")
        .getDoc()
        .querySelectorAll("select");
      // console.log('These are the select boxes', selectBoxes);
      

      selectBoxes.forEach((selectBox, i) => {
        selectBox.setAttribute("id", i + "");

        let option1 = document.createElement("option");
        let option2 = document.createElement("option");
        option1.label = "--";
        option1.value = "blank";
        option2.label = "click to add / remove";
        option2.value = "addRemove";
        selectBox.options.add(option1);
        selectBox.options.add(option2);

        for (
          let j = 0;
          j < this.editData.possibleResponses[i].responses.length;
          j++
        ) {
          let new_option = document.createElement("option");
          new_option.label = this.editData.possibleResponses[i].responses[j];
          new_option.value = j + "";
          selectBox.options.add(new_option);

          // Insert space after the last select box
          if (j == this.editData.possibleResponses[i].responses.length - 1) {
            let p = document.createElement("p");
            p.innerHTML = "&nbsp;";
            tinymce.activeEditor.getDoc().body.appendChild(p);
          }
        }
        if (String(i) == this.editData.scoringOption.answers[i]) {
          selectBox.options[i - 2].selected = true;
          // console.log('answer found');
        }

        /* let elem = tinymce.activeEditor.getDoc().getElementById(i + '');
          console.log('elem', elem); */

        //console.log(tinymce.activeEditor.dom);
        tinymce.activeEditor
          .getDoc()
          .getElementById(i + "")
          .addEventListener("change", (event) => {
            let selectElement: HTMLSelectElement = event.currentTarget;

            if (
              selectElement.item(selectElement.selectedIndex).value !=
              "addRemove"
            ) {
              // console.log('add remove clicked!');
              return;
            }

            let optionsArray = [];

            optionsArray.push({
              value: "selectOption",
              text: "Select option to delete",
            });

            for (let i = 0; i < selectElement.options.length; i++) {
              if (
                selectElement.item(i).value == "blank" ||
                selectElement.item(i).value == "addRemove"
              ) {
                continue;
              }
              optionsArray.push({
                value: selectElement.item(i).value,
                text: selectElement.item(i).label,
              });
            }

            tinymce.activeEditor.execCommand("addRemoveClozeOption", false, {
              select: event.currentTarget,
              options: optionsArray,
            });
            selectElement.selectedIndex = 0;
          });

        console.log(tinymce.activeEditor);
      });
      /* selectBoxes.forEach((selectBox, i) => {
          let options: HTMLOptionElement[] = [];
          for (let j = 0; j < selectBox.options.length; j++) {
            //selectBox.options((option) => {
  
            if (
              selectBox.options[j].value === 'blank' ||
              selectBox.options[j].value === 'addRemove'
            ) {
              continue;
            } else {
              if (j - 2 == +this.previewData.scoringOption.answers[i]) {
                selectBox.options[j].selected = true;
                console.log('answer found');
              }
            }
            //})
          }
        }); */
    }
    // if (this.previewData) {
    //   let selectedBoxes: HTMLSelectElement[] = tinymce
    //     .get("abc")
    //     .getDoc()
    //     .querySelectorAll("select");
    //   // console.log('These are the selected boxes', selectedBoxes);
    //   selectedBoxes.forEach((selectBox, i) => {
    //     let options: HTMLOptionElement[] = [];
    //     for (let j = 0; j < selectBox.options.length; j++) {
    //       //selectBox.options((option) => {

    //       if (
    //         selectBox.options[j].value === "blank" ||
    //         selectBox.options[j].value === "addRemove"
    //       ) {
    //         continue;
    //       } else {
    //         if (j - 2 == +this.previewData.scoringOption.answers[i]) {
    //           selectBox.options[j].selected = true;
    //           // console.log('answer found');
    //         }
    //       }
    //       //})
    //     }

    //     /* for (let j = 0; j < options.length; j++) {

    //       let option = options[j];
    //       console.log('Logging answer', option, this.previewData.scoringOption.answers[j]);
    //       if (j == +this.previewData.scoringOption.answers[j]) {
    //         option.selected = true;
    //         console.log('answer found');
    //       }
    //     } */
    //   });
    // }
  }

  option: Object = {
    min_height: 300,
    max_height: 500,
    menubar: true,
    base_url: "/tinymce",
    branding: false,
    forced_root_block: "",
    inline_boundaries: false,
    suffix: ".min",
    plugins: "image autoresize media table quickbars lists charmap",

    /* images_upload_url:'http://192.168.0.131:8081/itembank/api/images',
      images_upload_credentials:true,*/
    setup: this.setup,
    draggable_modal: true,
    /* external_plugins: {
        tiny_mce_wiris: `${window.location.href}/node_modules/@wiris/mathtype-tinymce5/plugin.min.js`,
      }, */
    toolbar:
      "undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify myimage myimage2 bullist numlist outdent indent table quickimage quicklink | subscript superscript charmap",
  };

  setup(editor_: any) {
    // let tinymce : any;
    // console.log("this is tmce",tinymce)
    let editor = editor_;
    this.editor = editor;
    let count = 0;

    editor.ui.registry.addIcon(
      "cloze",
      '<svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59375 25.25V5.25H7.21875V6.78125H4.34375V23.7188H7.21875V25.25H2.59375ZM11.002 22.125C10.6165 22.125 10.2858 21.987 10.0098 21.7109C9.73372 21.4349 9.5957 21.1042 9.5957 20.7187C9.5957 20.3333 9.73372 20.0026 10.0098 19.7266C10.2858 19.4505 10.6165 19.3125 11.002 19.3125C11.3874 19.3125 11.7181 19.4505 11.9941 19.7266C12.2702 20.0026 12.4082 20.3333 12.4082 20.7187C12.4082 20.974 12.3431 21.2083 12.2129 21.4219C12.0879 21.6354 11.9186 21.8073 11.7051 21.9375C11.4967 22.0625 11.2624 22.125 11.002 22.125ZM17.0605 22.125C16.6751 22.125 16.3444 21.987 16.0684 21.7109C15.7923 21.4349 15.6543 21.1042 15.6543 20.7187C15.6543 20.3333 15.7923 20.0026 16.0684 19.7266C16.3444 19.4505 16.6751 19.3125 17.0605 19.3125C17.446 19.3125 17.7767 19.4505 18.0527 19.7266C18.3288 20.0026 18.4668 20.3333 18.4668 20.7187C18.4668 20.974 18.4017 21.2083 18.2715 21.4219C18.1465 21.6354 17.9772 21.8073 17.7637 21.9375C17.5553 22.0625 17.321 22.125 17.0605 22.125ZM23.1191 22.125C22.7337 22.125 22.403 21.987 22.127 21.7109C21.8509 21.4349 21.7129 21.1042 21.7129 20.7187C21.7129 20.3333 21.8509 20.0026 22.127 19.7266C22.403 19.4505 22.7337 19.3125 23.1191 19.3125C23.5046 19.3125 23.8353 19.4505 24.1113 19.7266C24.3874 20.0026 24.5254 20.3333 24.5254 20.7187C24.5254 20.974 24.4603 21.2083 24.3301 21.4219C24.2051 21.6354 24.0358 21.8073 23.8223 21.9375C23.6139 22.0625 23.3796 22.125 23.1191 22.125ZM31.5215 5.25V25.25H26.8965V23.7188H29.7715V6.78125H26.8965V5.25H31.5215Z" fill="#1E1E1E"/></svg>'
    );

    editor.ui.registry.addButton("myimage", {
      icon: "cloze",
      onAction(): void {
        // editor.execCommand('openImageDialog', false, null);
        // console.log('button clicked');
        //editor.insertContent("<input type = 'text'/>", { class : 'form-control'});
        //console.log(editor.getDoc().querySelectorAll('input[type=text]'));
        // console.log(count + ' this is count');
        ++count;
        newClozeDropDown(editor, count);
      },
    });

    /* editor.ui.registry.addButton('myimage2', {
          text: 'image 2',
          onAction(): void {
            editor.execCommand('openImageDialog', false, null);
          },
        }); */

    editor.addCommand("addRemoveClozeOption", (ui: any, v: any) => {
      editor.windowManager.open({
        size: "normal",
        title: "Add Or Remove option",
        body: {
          type: "panel",
          items: [
            {
              type: "input",
              name: "option_data",
              label: "Enter option to add",
            },
            {
              type: "selectbox",
              name: "option_to_delete",
              label: "Choose Option to delete",
              items: v.options,
            },
          ],
        },
        buttons: [
          {
            type: "cancel",
            name: "closeButton",
            text: "Cancel",
          },
          {
            type: "custom",
            name: "deleteOption",
            text: "Delete Option",
          },
          {
            type: "submit",
            name: "submitButton",
            text: "Add Option",
            primary: true,
          },
        ],
        onSubmit: function (api) {
          // console.log(api.getData().option_data);
          let option = document.createElement("option");
          option.label = api.getData().option_data;
          option.value = Math.random() + "";
          v.select.add(option);

          api.close();
        },
        onAction: function (api, details) {
          let indexToDelete = -1;
          if (details.name == "deleteOption") {
            // console.log(api.getData());
            let optToDelete = api.getData().option_to_delete;
            if (optToDelete == "selectOption") {
              alert("Please select an option to delete ");
            } else {
              for (let i = 0; i < v.select.options.length; i++) {
                if (v.select.item(i).value == optToDelete) {
                  indexToDelete = i;
                  // console.log('found');
                  break;
                }
              }

              if (indexToDelete != -1) {
                v.select.item(indexToDelete).remove();
                api.close();
              }
            }
          }
        },
      });
    });

    editor.addCommand("openImageDialog", (ui: any, v: any) => {
      editor.windowManager.open({
        size: "normal",
        title: "Images",
        body: {
          type: "panel",
          items: [
            {
              type: "urlinput",
              filetype: "image",
              disabled: false,
              name: "url",
              label: "Paste or enter an Url as the link to the page.",
            },
            {
              type: "input",
              name: "linkText",
              label: "Link Text",
            },
          ],
        },
        buttons: [
          {
            type: "cancel",
            name: "closeButton",
            text: "Cancel",
          },
          {
            type: "submit",
            name: "submitButton",
            text: "Insert Link to Page",
            primary: true,
          },
        ],
        onSubmit: function (api) {
          //  console.log(api.getData().url);
          let blob = api.getData().url;
          // console.log(blob.value);
          editor.insertContent(`<img src = '${blob.value}'`);
          var reader = new FileReader();
          reader.readAsDataURL(blob.value);
          reader.onloadend = function () {
            var base64String = reader.result;
            // console.log('Base64 String - ', base64String);

            editor.insertContent(`<img src = '${blob.value}'`);
          };
          /*let option = document.createElement('option')
              option.label = api.getData().option_data;
              option.value = Math.random()+"";
              v.select.add(option);*/

          api.close();
        },
      });
    });

    if (this.editDataStatus) {
      // console.log(editor.getContent());
    }
  }

  updateEditorContent() {
    const editor = tinymce.get("abc"); // Get the editor instance
    if (!editor) return;

    let updatedContent = this.editData.stimulus;

    // Loop through each response in possibleResponses
    // this.editData.possibleResponses.forEach((response, index) => {
    //   const selectOptions = response.responses
    //     .map((option) => `<option value="${option}">${option}</option>`)
    //     .join('');

    //   // Replace placeholder tags like [select_1] dynamically
    //   const selectTag = `<select style="width: 200px; height: 30px; border-radius: 3px;">${selectOptions}</select>`;
    //   updatedContent = updatedContent.replace(`[select_${index + 1}]`, selectTag);
    // });

    // Check if the original stimulus contains <p> tags
    const hasPTags = /<p>.*<\/p>/i.test(this.editData.stimulus);

    if (hasPTags) {
      // Ensure <p> tags are preserved
      updatedContent = updatedContent
        .split("\n")
        .map((line) => (line.startsWith("<p>") ? line : `<p>${line}</p>`))
        .join("");
    } else {
      // Remove <p> tags if they are not in the original stimulus
      updatedContent = updatedContent.replace(/<\/?p>/g, "");
    }

    // Set the updated content back to the TinyMCE editor
    editor.setContent(updatedContent);

    console.log(updatedContent, "updatedContent");
  }
}
