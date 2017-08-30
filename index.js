const fs = require('fs');
const path = require('path');
console.log('hello world');

// Asynchronous operation sample
fs.readdir(__dirname, (err, files) => {
  setTimeout(() => {
    files.map(file => {
      console.log(file);
    });
  }, 300);
});

fs.readdir(path.join(__dirname, '../'), (err, files) => {
  files.map(file => {
    console.log(file);
  });
});