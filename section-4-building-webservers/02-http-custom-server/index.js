const { log } = require('node:console');
const http = require('node:http');
const server = http.createServer((req, res) => {
  console.log(`Incoming request at [${new Date().toLocaleString()}]`);
  console.log(`Incoming request at [${new Date().toDateString()}]`);
  //console.log(req.headers);
  //console.log(req.headers.Authorization);
  //console.log(req.method);
  // console.log(req.headers.Date);
  // console.log(req.headers.date);

  console.log(req.url);

  switch (req.url) {
    case '/':
      res.writeHead(200);
      return res.end(`Homepage`);
      break;
    case '/contact-us':
      res.writeHead(200);
      return res.end(`Contact me at sandeep.tan@xyz.com`);
    case '/about':
      res.writeHead(200);
      return res.end('I am at McGill University');
    default:
      res.writeHead(404);
      return res.end('You are lost');
  }

  // res.end(
  //   `OK - Sandeep, the response was successful with ${req.headers['accept-language']}`
  // );
});

server.listen(8000, () => console.log(`Server is running on PORT: 8000`));
