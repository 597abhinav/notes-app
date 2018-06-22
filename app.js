console.log("Starting App!");

// Requirements
const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

//Code starts here
var command = process.argv[2];
console.log("Command: " + command);

if (command === 'add') {
  console.log("Adding note");
} else if (command === 'list') {
  console.log("Listing notes");
} else if (command === 'remove') {
  console.log("Removing note");
} else if (command === 'read') {
  console.log("Reading note");
} else {
  console.log("Command not recognized");
}
