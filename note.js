(function(exports) {
  function Note(text) {
    this.noteText = text;
    this.id = Date.now().toString() // Not ideal solution as potential of duplicate ids
  };

  Note.prototype.printNote = function() {
    return this.noteText;
  };

  Note.prototype.abbreviate = function() {
    return this.noteText.substring(0, 20);
  }

  exports.Note = Note;
})(this);
