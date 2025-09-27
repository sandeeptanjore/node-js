/**
 * # HTTP Server Task

### Description

Build a simple HTTP Server with following features.

1. GET: `/`: Send simple hello from server message.
2. GET: `/contact-us`: Send your email and contact number to the user.
3. POST: `/tweet`: Do a fake DB operation and send the ack that it is done.
4. GET: `/tweet`: Send all the tweets from fake DB to the user.

Also, you need to log the incoming requests with timestamps in file named `log.txt`.
 * 
 */

const http = require('node:http');
const fs = require('node:fs');
// Fake DB in memory
let tweets = [];

const server = http.createServer((req, res) => {
  console.log(req.url);
  const currentDate = new Date().toLocaleString();

  // Log request
  console.log(`[${currentDate}] ${req.method} ${req.url}`);
  fs.appendFileSync(
    '02-http-custom-server-challenge/log.txt',
    `[${currentDate}] ${req.method} ${req.url}\n`,
    'utf-8'
  );

  // Routing
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('Hello from server');
  }

  if (req.method === 'GET' && req.url === '/contact-us') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('My email: sandeep@sandeep.com | Phone: 123-1234-8976');
  }

  if (req.method === 'POST' && req.url === '/tweet') {
    let body = '';
    req.on('data', (chunk) => {
      body = body + chunk;
    });
    req.on('end', () => {
      tweets.push(body); // store in fake DB
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      return res.end('Your tweet has been posted');
    });
    return; // important: prevent falling through
  }

  if (req.method === 'GET' && req.url === '/tweet') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end('Your tweet has been posted');
  }
  // Default: 404
  res.writeHead(404);
  res.end('Not Found');
});

server.listen(3000, () => {
  console.log(`Server is running on PORT: 3000`);
});
