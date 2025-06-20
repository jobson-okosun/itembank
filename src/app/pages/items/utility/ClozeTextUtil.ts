declare var tinymce: any;

export function newClozeDropDown(editor: any, count: number) {
  console.log("count", count);

  let dropCount =
    tinymce.activeEditor.dom.doc.body.innerHTML.split("<select").length;

  count = dropCount;

  let el = tinymce.activeEditor.dom.create("select", {
    style: "width: 200px; height: 30px; border-radius: 3px",
  });
  ++count;
  el.setAttribute("id", count + "");
  let optionBlank = tinymce.activeEditor.dom.create("option");
  optionBlank.text = " -- ";
  optionBlank.value = "blank";

  let optionAddRemove = tinymce.activeEditor.dom.create("option");
  optionAddRemove.text = " click to add / remove";
  optionAddRemove.value = "addRemove";

  el.add(optionBlank);
  el.add(optionAddRemove);

  tinymce.activeEditor.selection.setNode(el);

  tinymce.activeEditor
    .getDoc()
    .getElementById(count + "")
    .addEventListener("change", (event) => {
      let selectElement: HTMLSelectElement = event.currentTarget;

      if (
        selectElement.item(selectElement.selectedIndex).value != "addRemove"
      ) {
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

      editor.execCommand("addRemoveClozeOption", false, {
        select: event.currentTarget,
        options: optionsArray,
      });
      selectElement.selectedIndex = 0;
    });
}

/*
export function clozeDropDownEventManager(editor:any,event: Event){

    let selectElement : HTMLSelectElement =   event.currentTarget;

    if(selectElement.item(selectElement.selectedIndex).value != 'addRemove' ){

        return;
    }

    let optionsArray = [];

    optionsArray.push({value:'selectOption',text:'Select option to delete'});

    for (let i = 0; i < selectElement.options.length; i++) {

        if(selectElement.item(i).value == "blank" || selectElement.item(i).value =="addRemove"){

            continue;
        }
        optionsArray.push({value:selectElement.item(i).value,text:selectElement.item(i).label})
    }

    editor.execCommand('addRemoveClozeOption', false, {select:event.currentTarget,options:optionsArray});
}*/
