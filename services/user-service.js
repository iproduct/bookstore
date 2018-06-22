const bcrypt = require('bcrypt');

const models = require('../models');
const { User } = models;

// todo: move this to messages constant module
const USER_NOT_FOUND_MESSAGE = 'User Not Found';
const NotFoundError = require('../errors/not-found-error');

module.exports = {
  query() {
    return User.findAll();
  },

  findById(id) {
    return User.findById(id,  {
      attributes: { exclude: ['password'] }
    });
  },

  async update(id, data) {
    const user = await User.findById(id);
    return user.update(data);


    return User.findById(id,  {
      attributes: { exclude: ['password'] }
    });
  },

  findByEmail(email) {
    return User.findOne({ where: { email } });
  },

  findByUsername(username) {
    return User.findOne({ where: { username } });
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
  },

  getBasketItems(ownerId) {
    return this.findById(ownerId).findAll({ where: { ownerId } });
  },

};
