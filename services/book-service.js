const models = require('../models');
const { Book } = models;

// todo: move this to messages constant module
const BOOK_NOT_FOUND_MESSAGE = 'Book Not Found';
const NotFoundError = require('../errors/not-found-error');

module.exports = {
  query() {
    return Book.findAll();
  },

  findById(id) {
    return Book.findById(id);
  },

  create(book) {
    return Book.create(book);
  },

  update(id, book) {
    return Book.update(book, { where: { id } })
  },

  async delete(id) {
    const book = await Book.findById(id);
    if (book !== null) {
      const isDeleted = await book.destroy();
    } else {
      throw new NotFoundError(USER_NOT_FOUND_MESSAGE);
    }
  }
};
