//include document.ready equivalent in js


document.addEventListener("DOMContentLoaded", function(event) {
  var list = new List()


  document.getElementById("create").addEventListener('click', function(e) {
    e.preventDefault();
    text = document.getElementById("textBox").value;
    list.addNote(new Note(text))
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(list.showNotes()[list.showNotes().length - 1].abbreviate()));
    ul.appendChild(li);
  });
  //
  // document.getElementById("textBox").change(function() {
  //   text = document.getElementById("textBox").val();
  // })


  //
  // var ul = document.getElementById("notes");
  // var items = ul.getElementByTagName("li");
  // for (var i = 0; i < items.length; ++i) {
  //   return note.abbreviate();
  // }
});