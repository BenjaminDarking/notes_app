//include document.ready equivalent in js


document.addEventListener("DOMContentLoaded", function(event) {
  var list = new List()


  document.getElementById("create").addEventListener('click', function(e) {
    e.preventDefault();
    text = document.getElementById("textBox").value;
    list.addNote(new Note(text));
    var ul = document.getElementById("list");
    var li = document.createElement("a");
    li.innerHTML = "<li id ='0'></li>"

    li.href = '#' + list.showNotes()[list.showNotes().length - 1].abbreviate();
    li.appendChild(document.createTextNode(list.showNotes()[list.showNotes().length - 1].abbreviate()));
    ul.appendChild(li);
    console.log(list)
  });

  document.getElementById('0').addEventListener('click', function(e) {
    e.preventDefault();
    changeUrlForNote();
  });


  function changeUrlForNote() {
    window.addEventListener('hashchange', showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(location) {
    return location.hash.split("#")[1];
  };

  function showNote(note) {
    document.getElementById('0').innerHTML = note;
  };
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
