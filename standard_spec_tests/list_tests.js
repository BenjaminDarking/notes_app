(function(exports) {
  function testCreateList() {
    var list = new List();

    if (list) {
      console.log("Test passed mofo")
    } else {
      throw new Error("Test create list failed");
    }
  };

  function testAddNoteToList() {
    var list = new List();
    var test = "test"

    list.addNote(test)

    if (list.listArray[0] === test) {
      console.log("Test passed mofo")
    } else {
      throw new Error("Test add note to list failed");
    }
  };

  function testShowNotes() {
    var list = new List();
    var test = "test";
    var test1 = "test 1";

    list.addNote(test);
    list.addNote(test1);

    if (list.showNotes()[0] === test && list.showNotes()[1] === test1) {
      console.log("Test passed mofo")
    } else {
      console.log(list.showNotes())
      throw new Error("Test show notes failed");
    };
  };

  function testGetNoteById() {
    var list = new List();
    var noteOne = {
      id: "1234"
    };
    var noteTwo = {
      id: "4321"
    };

    list.addNote(noteOne);
    list.addNote(noteTwo);

    if (list.getNoteById("1234") === noteOne) {
      console.log("Test passed mofo")
    } else {
      throw new Error("Test GetNoteById failed");
    };
  };
  testGetNoteById();
  testShowNotes();
  testCreateList();
  testAddNoteToList();
})(this);
