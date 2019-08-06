//include document.ready equivalent in js


document.addEventListener("DOMContentLoaded", function(event) {
  var list = new List()
  var counter = 0


  document.getElementById("create").addEventListener('click', function(e) {
    e.preventDefault();
    text = document.getElementById("textBox").value;
    list.addNote(new Note(text));
    var ul = document.getElementById("list");
    var li = document.createElement("a");
    li.innerHTML = "<li></li>"
    li.setAttribute("id", counter)
    counter += 1

    li.href = '#' + list.showNotes()[list.showNotes().length - 1].abbreviate();
    li.appendChild(document.createTextNode(list.showNotes()[list.showNotes().length - 1].abbreviate()));
    ul.appendChild(li);
  });

  // changeUrlForNote();
  for (var i = 0; i <= counter; i++) {
    document.getElementById(i).addEventListener('click', function(e) {
      e.preventDefault();
      showNoteForCurrentPage(i);
      });
  }

  function changeUrlForNote() {
    window.addEventListener('hashchange', showNoteForCurrentPage);
  };

  function showNoteForCurrentPage(i) {
    showNote(list.showNotes()[Number(document.getElementById(i))].printNote())

    // showNote(getNoteFromUrl(window.location));
  };

  // function getNoteFromUrl(location) {
  //   return location.hash.split("#")[1];
  // };

  function showNote(note) {
    document.getElementById('note').innerHTML = note;
  };
});
