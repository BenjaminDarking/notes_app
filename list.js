(function(exports) {
  function List() {
    this.listArray = [];
  };
List.prototype.addNote = function(note) {
  this.listArray.push(note)
}
  exports.List = List;
})(this);