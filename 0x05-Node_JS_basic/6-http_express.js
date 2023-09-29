const express = require('express');

const app = express();
const port = 1245;

app.get(('/'), (req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server started running on port ${port}`);
});

module.exports = app;
