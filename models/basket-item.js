'use strict';
module.exports = (sequelize, DataTypes) => {
  const BasketItem = sequelize.define('BasketItem', {
    ownerId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});

  BasketItem.associate = models => {};

  return BasketItem;
};