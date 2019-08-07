(function(exports) {
  function List() {
    this.listArray = [];
  };

List.prototype.addNote = function(note) {
  this.listArray.push(note)
};

List.prototype.showNotes = function() {
  return this.listArray
}

List.prototype.getNoteById = function(id) {
  return this.listArray.find(function(note) {
    return note.id === id;
  });
}

  exports.List = List;
})(this);
