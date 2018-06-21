const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    classMethods: {
      associate(models) {}
    },

    instanceMethods: {
      hasValidPassword(pasword) {
        return bcrypt.compareSync(password, this.password);
      }
    }
  });

  return User;
};
