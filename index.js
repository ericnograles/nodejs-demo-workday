const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/hello_world', (req, res) => {
  res.json({message: `hello, ${req.query.name}`});
});

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  }
  console.log(`> Ready on port ${PORT}`);
});