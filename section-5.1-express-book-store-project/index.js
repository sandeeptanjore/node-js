const express = require('express');
const PORT = 8000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

//In Memory DB
const books = [
  { id: 1, title: 'The Death of Air India flight 182', author: 'Salim Jiwa' },
  { id: 2, title: 'Name Sake', author: 'Jumpha Lahiri' },
];

// Middlewares (Plugins)
app.use(express.json());

//Routes
app.get('/books', (req, res) => {
  res.setHeader('x-sandeep-header', 'Sandeep Tanjore');
  res.json(books);
});

app.get('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id))
    return res.status(400).json({ error: `Id must be type of Number` });

  const book = books.find((e) => e.id === id); //this is like a select statement; select * from books where id = &id;

  if (!book)
    return res.status(404).json({ error: `Book with ${id} does not exist` });
  else return res.json(book);
});

app.post('/books', (req, res) => {
  // console.log(req.headers);
  // console.log(req.body);
  const { title, author } = req.body;

  if (!title || title === '')
    return res.status(400).json({ error: 'Title is required' });

  if (!author || author === '')
    return res.status(400).json({ error: 'Author name is required' });

  const id = books.length + 1;

  const book = { id, title, author };
  books.push(book);

  return res.status(201).json({ message: 'Book details committed', id });
});

app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id))
    return res.status(400).json({ error: `Id must be type of Number` });

  const indexToDelete = books.findIndex((e) => e.id === id);
  if (indexToDelete < 0)
    return res.status(404).json({ error: `Book with id ${id} does not exist` });

  books.splice(indexToDelete, 1);
  return res.status(200).json({ message: 'book deleted' });
});

app.listen(PORT, () => {
  console.log(`HTTP server is running on ${PORT}`);
});
