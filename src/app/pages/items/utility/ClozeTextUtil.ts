declare var tinymce: any;

export function newClozeDropDown(editor: any, count: number) {

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

export function newClozeRadioContainer(editor: any, count: number) {

  let dropCount = tinymce.activeEditor.dom.doc.body.innerHTML.split("<span").length;
  count = dropCount;
  const groupName = `option-group-${count + 1}`;
  const containerId = `container-${count + 1}`;

  let el = tinymce.activeEditor.dom.create("span", {
    class: "cloze-radio-container mceNonEditable",
    contenteditable: "false",
    style: "display:inline-flex; flex-wrap:wrap; border:1px solid #ccc; padding: 3px; gap:5px;"
  });

  ++count;
  el.setAttribute("id", count + "");

  let optionsContainer = tinymce.activeEditor.dom.create("span", {
    class: "options-wrapper",
    contenteditable: "true",
    style: "display:flex; gap:5px; flex-wrap:wrap; align-items:center;"
  });

  let option = tinymce.activeEditor.dom.create("span", {
    class: "option",
    style: "display:inline-flex; align-items:center; gap:3px; border:1px dashed #ccc;",
    contenteditable: "false"
  });

  let input = tinymce.activeEditor.dom.create("input", {
    type: "radio",
    contenteditable: "true",
    name: groupName,
  });

  let label = tinymce.activeEditor.dom.create(
    "label",
    { for: `${containerId}-option-1` },
    "Option 1"
  );

  let actionsDiv = tinymce.activeEditor.dom.create("span", {
    class: "actions",
    style: "display:inline-flex; align-items:center;"
  });

  let action = tinymce.activeEditor.dom.create(
    "button",
    {
      type: "button",
      class: "add-remove-btn",
      contenteditable: "false",
      style: "padding:5px; font-size:12px; cursor:pointer;"
    },
    "Add / Edit"
  );

  option.appendChild(input);
  option.appendChild(label);
  optionsContainer.appendChild(option);
  actionsDiv.appendChild(action)
  el.appendChild(optionsContainer);
  el.appendChild(actionsDiv);

  tinymce.activeEditor.selection.setNode(el);
}


export function openClozeOptionsModal(container: HTMLElement, groupName: string) {
  // Find the options wrapper inside this container
  const optionsWrapper = container.querySelector('.options-wrapper') as HTMLElement;
  if (!optionsWrapper) return;

  // Gather existing options
  const existingOptions = Array.from(optionsWrapper.querySelectorAll('.option')).map((opt: any) => ({
    id: opt.dataset.id,
    label: opt.querySelector('label')?.innerText || '',
    checked: opt.querySelector('input[type="radio"]')?.checked || false
  }));

  const modal = document.createElement('div');
  modal.className = 'cloze-modal position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50';
  modal.style.zIndex = '9999';

  const modalContent = document.createElement('div');
  modalContent.className = 'bg-white p-4 rounded shadow';
  modalContent.style.maxHeight = '80%';
  modalContent.style.width = '400px';
  modalContent.style.overflowY = 'auto';
  modal.appendChild(modalContent);

  const title = document.createElement('h5');
  title.className = 'mb-3';
  title.innerText = 'Edit Options';
  modalContent.appendChild(title);

  const optionsContainer = document.createElement('div');
  modalContent.appendChild(optionsContainer);

  // Render the options inside the modal
  function renderOptions() {
    optionsContainer.innerHTML = '';
    existingOptions.forEach((opt, idx) => {
      const row = document.createElement('div');
      row.className = 'd-flex align-items-center gap-2 mb-2';

      const input = document.createElement('input');
      input.type = 'text';
      input.value = opt.label;
      input.className = 'form-control form-control-sm flex-grow-1';
      input.addEventListener('input', (e: any) => {
        existingOptions[idx].label = e.target.value;
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.className = 'btn btn-sm btn-danger';
      deleteBtn.innerText = 'Delete';
      deleteBtn.addEventListener('click', () => {
        existingOptions.splice(idx, 1);
        renderOptions();
      });

      row.appendChild(input);
      row.appendChild(deleteBtn);
      optionsContainer.appendChild(row);
    });
  }

  renderOptions();

  // Add new option button
  const addBtn = document.createElement('button');
  addBtn.type = 'button';
  addBtn.className = 'btn btn-sm btn-outline-primary mt-2';
  addBtn.innerText = 'Add New Option';
  addBtn.addEventListener('click', () => {
    existingOptions.push({
      id: `${container.id}-option-${existingOptions.length + 1}`,
      label: `Option ${existingOptions.length + 1}`,
      checked: false
    });
    renderOptions();
  });
  modalContent.appendChild(addBtn);

  const actions = document.createElement('div');
  actions.className = 'd-flex justify-content-end gap-2 mt-3';

  const cancelBtn = document.createElement('button');
  cancelBtn.type = 'button';
  cancelBtn.className = 'btn btn-secondary btn-sm';
  cancelBtn.innerText = 'Cancel';
  cancelBtn.addEventListener('click', () => modal.remove());

  const confirmBtn = document.createElement('button');
  confirmBtn.type = 'button';
  confirmBtn.className = 'btn btn-primary btn-sm';
  confirmBtn.innerText = 'Confirm';
  confirmBtn.addEventListener('click', () => {
    const checkedId = optionsWrapper.querySelector<HTMLInputElement>('input[type="radio"]:checked')?.id;

    // Clear options but keep wrapper alive
    optionsWrapper.innerHTML = '';

    existingOptions.forEach((opt) => {
      const optionDiv = document.createElement('span');
      optionDiv.className = 'd-flex option align-items-center gap-2 border p-1';
      optionDiv.style.border = "1px dashed #ccc";
      optionDiv.dataset['id'] = opt.id;

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = groupName;
      radio.id = opt.id;

      if (opt.checked) {
        radio.checked = true;
      }


      const label = document.createElement('label');
      label.htmlFor = opt.id;
      label.innerText = opt.label;

      optionDiv.appendChild(radio);
      optionDiv.appendChild(label);
      optionsWrapper.appendChild(optionDiv);
    });

    modal.remove();
  });


  actions.appendChild(cancelBtn);
  actions.appendChild(confirmBtn);
  modalContent.appendChild(actions);

  document.body.appendChild(modal);
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
