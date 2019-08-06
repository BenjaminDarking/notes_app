(function(exports) {
  function Note(text) {
    this.noteText = text;
  };

  Note.prototype.printNote = function() {
    return this.noteText;
  };

  Note.prototype.abbreviate = function() {
    return this.noteText.substring(0, 20);
  }

  exports.Note = Note;
})(this);
