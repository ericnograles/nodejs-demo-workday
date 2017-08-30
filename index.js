const fs = require('fs');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/files', (req, res) => {
  fs.readdir(__dirname, (err, files) => {
    // return reject(new Error('OH NO!'));
    if (err) {
      return res.error(err);
    }
    setTimeout(() => {
      console.log('---------------------------------');
      console.log(`reading from ${__dirname}`);
      console.log('---------------------------------');
      files.map(file => {
        console.log(file);
      });
      
      return res.json({files});
    }, 300);
  });
});

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  }
  console.log(`> Ready on port ${PORT}`);
});