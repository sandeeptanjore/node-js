const express = require('express');
const app = express();
const PORT = 8000;

const bookRouter = require('./routes/book.routes');
//const loggerMiddleware = require('./middlewares/logger');
const { loggerMiddleware } = require('./middlewares/logger');

// Global Middlewares (Plugins)
app.use(express.json());
app.use(loggerMiddleware);

//Routes
app.use('/books', bookRouter);

app.listen(PORT, () => {
  console.log(`HTTP server is running on ${PORT}`);
});
