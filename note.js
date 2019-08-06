(function(exports) {
  var id = 0
  function Note(text) {
    this.noteText = text;
    this.id = id++;
  };

  Note.prototype.printNote = function() {
    return this.noteText;
  };

  Note.prototype.abbreviate = function() {
    return this.noteText.substring(0, 20);
  }

  exports.Note = Note;
})(this);
