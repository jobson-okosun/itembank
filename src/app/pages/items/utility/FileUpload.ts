declare var tinymce: any;

export function imageUpload(cb: any, value: any, meta: any) {
  var input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.setAttribute('name', 'image');

  alert('ocheal is here');

  input.onchange = function () {
    var file = input.files[0];
    var reader = new FileReader();

    reader.onload = function () {
      var id = 'blobid' + new Date().getTime();
      var blobCache = tinymce.activeEditor.editorUpload.blobCache;
      var base64 = (reader.result as string).split(',')[1];
      // console.log(base64);
      var blobInfo = blobCache.create(id, file, base64);
      blobCache.add(blobInfo);
      // console.log();
      cb('data:' + blobInfo.blob().type + ';base64,' + blobInfo.base64(), {
        title: file.name,
      });
    };
    reader.readAsDataURL(file);
  };

  input.click();
}
