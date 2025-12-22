const { BOOKS } = require('../models/book');

exports.getAllBooks = (req, res) => {
  res.json(BOOKS);
};

exports.getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id))
    return res.status(400).json({ error: `Id must be type of Number` });

  const book = BOOKS.find((e) => e.id === id); //this is like a select statement; select * from books where id = &id;

  if (!book)
    return res.status(404).json({ error: `Book with ${id} does not exist` });
  else return res.json(book);
};

exports.createBooks = (req, res) => {
  const { title, author } = req.body;

  if (!title || title === '')
    return res.status(400).json({ error: 'Title is required' });

  if (!author || author === '')
    return res.status(400).json({ error: 'Author name is required' });

  const id = BOOKS.length + 1;

  const book = { id, title, author };
  BOOKS.push(book);

  return res.status(201).json({ message: 'Book details committed', id });
};

exports.deleteBooksById = (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id))
    return res.status(400).json({ error: `Id must be type of Number` });

  const indexToDelete = BOOKS.findIndex((e) => e.id === id);
  if (indexToDelete < 0)
    return res.status(404).json({ error: `Book with id ${id} does not exist` });

  BOOKS.splice(indexToDelete, 1);
  return res.status(200).json({ message: 'book deleted' });
};
