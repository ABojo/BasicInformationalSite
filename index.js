const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let html = '404.html';

  if (req.url === '/') html = 'index.html';
  if (req.url === '/about') html = 'about.html';
  if (req.url === '/contact') html = 'contact-me.html';

  res.writeHead(200, { 'Content-type': 'text/html' });
  fs.readFile(html, function (err, data) {
    res.write(data);
    res.end();
  });
});

server.listen(8080);
