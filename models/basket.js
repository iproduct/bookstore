'use strict';
module.exports = (sequelize, DataTypes) => {
  const Basket = sequelize.define('Basket', {
    ownerId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {});

  Basket.associate = ({ User, Book }) => {
    Basket.belongsTo(User, {
      as: 'owner',
      foreignKey: 'ownerId'
    });

    Basket.hasMany(Book, {
      as: 'books',
      foreignKey: 'id'
    });
  };

  return Basket;
};
