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

  exports.List = List;
})(this);
