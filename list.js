(function(exports) {
  function List() {
    this.listArray = [];
  };
List.prototype.addNote = function(note) {
  this.listArray.push(note)
};

List.prototype.showNotes = function() {
  this.listArray.forEach(function (list) {
      console.log(list);
  });
};
  exports.List = List;
})(this);
