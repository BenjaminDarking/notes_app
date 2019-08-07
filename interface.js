document.addEventListener("DOMContentLoaded", function(event) {
  var list = new List()

  document.getElementById("create").addEventListener('click', function(e) {
    e.preventDefault();
    // get text input, create note and add to list
    var textBox = document.getElementById("textBox")
    text = textBox.value;
    var note = new Note(text)
    list.addNote(note);

    // create new `li` HTMLElement and insert
    // innerHTML with note content and id
    // if you want a link instead of heading, change h2 to <a>
    var li = document.createElement("li");
    li.innerHTML = "<h2 id='" + note.id + "'>" + note.abbreviate() + "</h2>"

    // add EventListener to each `li` created to listen for click events
    li.addEventListener('click', function(clickEvent){
      clickEvent.preventDefault();
      
      // get note id from target id (added above when creating the `li` element)
      var noteId = clickEvent.target.id
      var note = list.getNoteById(noteId);

      // show note on the page
      showNote(note);
    })

    // add the `li` element to the list on the page
    var ul = document.getElementById("list");
    ul.appendChild(li);

    // clear textBox
    textBox.value = "";
  });

  function showNote(note) {
    document.getElementById('note').innerText = note.printNote();
  };

  // changeUrlForNote();
  // for (var i = 0; i <= counter; i++) {
  //   document.getElementById(i).addEventListener('click', function(e) {
  //     e.preventDefault();
  //     showNoteForCurrentPage(i);
  //     });
  // }

  // function changeUrlForNote() {
  //   window.addEventListener('hashchange', showNoteForCurrentPage);
  // };
  //
  // function showNoteForCurrentPage(i) {
  //   showNote(list.showNotes()[Number(document.getElementById(i))].printNote())
  //
  //   // showNote(getNoteFromUrl(window.location));
  // };

  // function getNoteFromUrl(location) {
  //   return location.hash.split("#")[1];
  // };
});
