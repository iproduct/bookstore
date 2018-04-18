const models = require('../models');
const { User } = models;
const USER_NOT_FOUND = 'User Not Found';
const NotFoundError = require('../errors/not-found-error');

module.exports = {
  query() {
    return User.findAll();
  },

  findById(id) {
    return User.findById(id);
  },

  create(user) {
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
      throw new NotFoundError(USER_NOT_FOUND);
    }
  }
};
