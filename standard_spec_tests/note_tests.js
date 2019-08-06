(function(exports) {
  function testCreateNote() {
    var note = new Note("This is our note");

    if (note.printNote() === "This is our note") {
      console.log("Test passed mofo")
    } else {
      throw new Error("Test create note failed");
    }
  };

  function testAbbreviateNote(){
    var note = new Note("abcdefghijklmnopqrstuvwxyz");

    if (note.abbreviate() === "abcdefghijklmnopqrst") {
      console.log("Test passed mofo")
    } else {
      throw new Error("Test abbrev note failed");
    }
  };

  testCreateNote();
  testAbbreviateNote();
})(this);
