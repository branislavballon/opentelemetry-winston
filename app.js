
const express = require('express')
const {logger} = require('./loggers')
const PORT = process.env.PORT || '8080';
const app = express();

let counter = 0;

app.get("/", (req, res) => {
  logger.info(`Request counter ${++counter}`)
  res.send('Hello World');
});

app.listen(parseInt(PORT, 10), () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});