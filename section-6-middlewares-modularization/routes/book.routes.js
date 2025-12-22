const express = require('express');
const router = express.Router();
const controller = require('../controllers/book.controller');

router.get('/', controller.getAllBooks);

router.get('/:id', controller.getBookById);

router.post('/', controller.createBooks);

router.delete('/:id', controller.deleteBooksById);

module.exports = router;
