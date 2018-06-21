const bcrypt = require('bcrypt');

const models = require('../models');
const { BasketItem } = models;

// todo: move this to messages constant module
const NotFoundError = require('../errors/not-found-error');
const BASKET_ITEM_NOT_FOUND = 'Basket Item Not Found';

module.exports = {
  get(ownerId) {
    return BasketItem.findAll({ where: { ownerId } });
  },

  add(item) {
    return BasketItem.create(item);
  },

  async delete(id) {
    const item = await BasketItem.findById(id);
    if (item) {
      item.delete();
    } else {
      throw new NotFoundError(BASKET_ITEM_NOT_FOUND);
    }

    return User.findOne({ where: { email } });
  },

  hasValidPassword(userPassword, password) {
    return bcrypt.compare(userPassword, password);
  },

  async create(user) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;

    return User.create(user);
  },

  update(id, user) {
    return User.update(user, { where: { id } })
  },

  async delete(id) {
    const user = await User.findById(id);
    if (user !== null) {
      const isDeleted = await user.destroy();
    } else {
      throw new NotFoundError(USER_NOT_FOUND_MESSAGE);
    }
  }
};
