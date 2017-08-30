const fs = require('fs');
const path = require('path');
console.log('hello world');

// Asynchronous operation sample
fs.readdir(__dirname, (err, files) => {
  setTimeout(() => {
    console.log('---------------------------------');
    console.log(`reading from ${__dirname}`);
    console.log('---------------------------------');
    files.map(file => {
      console.log(file);
    });
  }, 300);
});

fs.readdir(path.join(__dirname, '../'), (err, files) => {
  console.log('---------------------------------');
  console.log(`reading from ${path.join(__dirname, '../')}`)
  console.log('---------------------------------');
  files.map(file => {
    console.log(file);
  });
});