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

    if (list.showNotes() === "test \n test 1") {
      console.log("Test passed mofo")
    } else {
      throw new Error("Test add note to list failed");
    };
  };
  testShowNotes();
  testCreateList();
  testAddNoteToList();
})(this);
