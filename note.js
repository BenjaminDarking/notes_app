(function(exports) {
  function Note(text) {
    this.noteText = text;
  };

  Note.prototype.printNote = function() {
    return this.noteText;
  };

  exports.Note = Note;
})(this);