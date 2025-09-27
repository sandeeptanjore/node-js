const http = require('node:http');
const server = http.createServer((request, response) => {
  console.log('I got an incoming request');
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Thanks for visiting my server');
});

server.listen(8000, () => {
  console.log(`Http Server is up and running on port 8000`);
});
