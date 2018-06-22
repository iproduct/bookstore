const bcrypt = require('bcrypt');
const models = require('../models');
const { Book, Basket, User } = models;
const NotFoundError = require('../errors/not-found-error');
const BASKET_ITEM_NOT_FOUND = 'Basket Item Not Found';
const BOOK_NOT_FOUND = 'Book Not Found';

module.exports = {

  async getBasketItems(ownerId) {
    const user = await User.findById(ownerId);
    return user.getBasketItems();
  },

  async addBasketItem(ownerId, bookId) {
    const user = await User.findById(ownerId);
    const book = await Book.findById(bookId);

    if (!book) {
      throw new NotFoundError(BOOK_NOT_FOUND);
    }

    return user.addBasketItem(book);
  },

  async removeBasketItem(ownerId, bookId) {
    const user = await User.findById(ownerId);
    const book = await Book.findById(bookId);
    return user.removeBasketItem(book);
  }
};
