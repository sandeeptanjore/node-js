const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.end('Homepage');
});

app.get('/contact-us', (req, res) => {
  res.end('You can contact me at my email id. Email id: abc@gmail.com');
});

app.get('/tweets', (req, res) => {
  res.end('Here are your tweets');
});

app.post('/tweets', (req, res) => {
  res.status(201).end('Your tweet has been created');
});

app.listen(8000, () =>
  console.log(`Sandeep, Server is running on PORT: ${port}`)
);
