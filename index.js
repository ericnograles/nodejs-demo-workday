const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');

console.log('hello world');

function readCurrentDirectory() {
  return new Promise(
    (resolve, reject) => {
      fs.readdir(__dirname, (err, files) => {
        // return reject(new Error('OH NO!'));
        if (err) {
          return reject(err);
        }
        setTimeout(() => {
          console.log('---------------------------------');
          console.log(`reading from ${__dirname}`);
          console.log('---------------------------------');
          files.map(file => {
            console.log(file);
          });
          return resolve();
        }, 300);
      });
    }
  );
}

function readParentDirectory() {
  return new Promise(
    (resolve, reject) => {
      fs.readdir(path.join(__dirname, '../'), (err, files) => {
        if (err) {
          return reject(err);
        }
        console.log('---------------------------------');
        console.log(`reading from ${path.join(__dirname, '../')}`)
        console.log('---------------------------------');
        files.map(file => {
          console.log(file);
        });
        return resolve();
      });
    }
  );
}

// Promise chain!
readCurrentDirectory()
  .then(readParentDirectory)
  .catch(error => {
    console.error(error);
  });