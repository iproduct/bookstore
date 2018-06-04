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
    return User.findById(id);
  },

  async findByEmail(email) {
    const user = await User.find({ email });
    if (user !== null) {
      return user;
    } else {
      throw new NotFoundError(USER_NOT_FOUND_MESSAGE);
    }
  },

  validatePassword(user, password) {
    return bcrypt.compareSync(password, user.password);
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
      throw new NotFoundError(USER_NOT_FOUND_MESSAGE);
    }
  }
};
