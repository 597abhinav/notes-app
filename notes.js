console.log("Starting notes.js");

var addNote = function(title, body) {
  console.log("Adding Note:", title, body);
};

var getAll = function() {
  console.log("Getting all notes.");
};

var readNote = function(title) {
  console.log("Reading Note:", title);
};

var removeNote = function(title) {
  console.log("Removing Note:", title);
};

module.exports = {
  addNote: addNote,
  getAll: getAll,
  readNote: readNote,
  removeNote: removeNote
};
