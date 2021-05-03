const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact-me.html');
});

app.all('*', (req, res) => {
  res.sendFile(__dirname + '/404.html');
});

app.listen(8080, () => {
  console.log('Server is listening for incoming requests!');
});
