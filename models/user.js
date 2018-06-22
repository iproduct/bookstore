const bcrypt = require('bcrypt');



module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    bio: DataTypes.TEXT,
    isAdmin: DataTypes.BOOLEAN
  }, {

    instanceMethods: {
      hasValidPassword(pasword) {
        return bcrypt.compareSync(password, this.password);
      }
    }
  });

  User.associate = ({ Basket, Book }) => {
    User.hasOne(Basket, {
      foreignKey: 'ownerId',
      as: 'basket'
    });

    User.belongsToMany(Book, {
      as: 'basketItems',
      through: Basket,
      foreignKey: 'ownerId',
      otherKey: 'bookId'
    });
  };

  return User;
};
