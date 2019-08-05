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

  testCreateList();
  testAddNoteToList();
})(this);